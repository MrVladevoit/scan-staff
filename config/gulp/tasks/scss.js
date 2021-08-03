let gcmq = require('gulp-group-css-media-queries'),
    sass = require('gulp-sass')(require('sass')),
    stylesPath = {
      'src': 'src/styles/*.scss',
      'srcCSS': 'build/css/*.css',
      'dest': 'build/css'
    };


// PostCSS Plugins
// [1] - Generate normalize base on .browserlistrc
// [2] - Generate boostrap grid 4
// [3] - CSS Nano remove all spaces and comments

const processors = [
  require('postcss-normalize'), // [1]
  require("postcss-bootstrap-4-grid")({ // [2]
    gridColumns: 12,
    gridGutterWidth: '20px',
    containerMaxWidths: {
      sm: '728px',
      lg: '984px',
      xl: '1240px' // > 1280 - 20 * 2
    },
    gridBreakpoints: {
      xs: '600px',
      sm: '768px',
      md: '980px',
      lg: '1024px',
      xl: '1280px'
    }
  }),
  require('postcss-pxtorem')({
    rootValue: 16,
    propList: ['font', 'font-size'],
    mediaQuery: false,
    minPixelValue: 0
  }),
  require('cssnano')({ // [3]
    autoprefixer: false,
    discardComments: { removeAll: true }
  }),
  require('autoprefixer')
];

module.exports = () => {

  // DEV TASK
  $.gulp.task('styles:dev', () => {

    return $.gulp.src(stylesPath.src)

      .pipe($.plugins.plumber({

        errorHandler: function(err) {

         $.plugins.notify.onError({
            title: "Error in SCSS file",
            message: "<%= error.message %>"
          })(err);
        }
      }))

      .pipe($.plugins.sourcemaps.init())

      .pipe(sass().on('error', sass.logError))

      .pipe($.plugins.postcss(processors))

      .pipe(gcmq())

      .pipe($.plugins.sourcemaps.write())

      .pipe($.plugins.rename({
          extname: '.min.css'
        }),
      )

      .pipe($.gulp.dest(stylesPath.dest))

      .pipe($.browserSync.stream());
  });

  // MINIFY TASK
  $.gulp.task('styles:minify', () => {

    return $.gulp.src(stylesPath.srcCSS)

      .pipe($.plugins.cssnano({
        autoprefixer: false,
      }))

      .pipe($.gulp.dest(stylesPath.dest));
  });
};
