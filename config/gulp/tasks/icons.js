let svgcss = require('gulp-svg-css'),
    iconsPath = {
    'src': 'src/lib/sprite/icons/*.svg',
    'srcTemplate': 'src/lib/sprite/_sprite_template.scss',
    'srcIconsBase': 'src/lib/sprite/icons/base/*.svg',
    'destScss': './src/lib/sprite/',
    'destSprite': './build/images',
  };

module.exports = () => {

  // generate svg sprite
  $.gulp.task('svg:sprite', () => {

    return $.gulp.src(iconsPath.src)

      .pipe($.plugins.newer(iconsPath.destSprite))

      .pipe($.plugins.svgmin({

        js2svg: {
          pretty: true
        }
      }))

      .pipe($.plugins.cheerio({

        run: function ($) {
          $('[fill]').removeAttr('fill');
          $('[stroke]').removeAttr('stroke');
          $('[style]').removeAttr('style');
        },

        parserOptions: {xmlMode: true}
      }))

      .pipe($.plugins.replace('&gt;;', '>'))

      .pipe($.plugins.svgSprite({

        mode: {
          symbol: {
            sprite: '../sprite.svg',

            render: {

              scss: {
                dest:'../_sprite.scss',
                template: iconsPath.srcTemplate
              }
            }
          }
        }
      }))

      .pipe( $.plugins.if('*.scss', $.gulp.dest(iconsPath.destScss), $.gulp.dest(iconsPath.destSprite)) )

      .pipe($.plugins.notify(' I make icons sprite!'));
  });

  // generate svg to base 64 code
  $.gulp.task('svg:base', () => {

    return $.gulp.src(iconsPath.srcIconsBase)

      .pipe($.plugins.svgmin())

      .pipe(svgcss({
        fileName: '_spite-base',
        addSize: true
      }))

      .pipe($.plugins.rename({
          extname: '.scss'
        }),
      )

      .pipe($.gulp.dest(iconsPath.destScss))
  });
};
