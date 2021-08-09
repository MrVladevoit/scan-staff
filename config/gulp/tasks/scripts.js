let scriptsPath = {
  'src': 'src/scripts/*.js',
  'dest': 'build/js',
  'srcLibs' : [
    './node_modules/jquery/dist/jquery.min.js',
    './node_modules/jquery-mask-plugin/dist/jquery.mask.js',
    './node_modules/slick-carousel/slick/slick.js',
    './node_modules/@popperjs/core/dist/umd/popper.js',
    './node_modules/tippy.js/dist/tippy.umd.js',
    './node_modules/clipboard/dist/clipboard.js'
  ]
};

// './node_modules/jquery/dist/jquery.min.js',
// './node_modules/jquery-mask-plugin/dist/jquery.mask.js',
// './node_modules/jquery-validation/dist/jquery.validate.js',
// './node_modules/slick-carousel/slick/slick.js',
// 'src/lib/vendors/pace/pace.min.js',
// './node_modules/aos/dist/aos.js'

module.exports = () =>  {

  // scripts
  $.gulp.task('scripts:dev', () => {

    return $.gulp.src(scriptsPath.src)

      .pipe($.plugins.rename({
        extname: '.min.js'
      }))

      .pipe($.gulp.dest(scriptsPath.dest))

      .on('end', $.browserSync.reload);
  });

  $.gulp.task('scripts:prod', () => {

    return $.gulp.src(scriptsPath.src)

      .pipe($.plugins.uglify())

      .pipe($.plugins.rename({
        extname: '.min.js'
      }))

      .pipe($.gulp.dest(scriptsPath.dest))

      .pipe($.plugins.debug({
        title:'Scripts minify done !'}
      ));
  });

  // libs
  $.gulp.task('libsJs:dev', () => {

    return $.gulp.src(scriptsPath.srcLibs)

      .pipe($.plugins.concat('libs.min.js'))

      .pipe($.gulp.dest(scriptsPath.dest));
  });

  $.gulp.task('libsJs:prod', () => {

    return $.gulp.src(scriptsPath.srcLibs)

      .pipe($.plugins.concat('libs.min.js'))

      .pipe($.plugins.uglify())

      .pipe($.gulp.dest(scriptsPath.dest))
  });
};
