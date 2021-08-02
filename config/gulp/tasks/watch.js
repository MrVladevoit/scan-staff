let paths = {
  'pug': 'src/**/*.pug',
  'styles': 'src/**/*.scss',
  'scripts': 'src/**/*.js',
  'images': 'src/assets/images/**/*',
  'uploads': 'src/assets/uploads/**/*',
  'icons': 'src/lib/sprite/icons/*.svg',
  'iconsForBase64': 'src/lib/sprite/icons/base/*.svg',
  'staticFiles': 'src/assets/**/*'
};

module.exports = () => {

  $.gulp.task('watch', () => {

    $.gulp.watch(paths.pug, $.gulp.series('pug'));
    $.gulp.watch(paths.styles, $.gulp.series('styles:dev'));
    $.gulp.watch(paths.scripts, $.gulp.series('scripts:dev'));
    $.gulp.watch(paths.icons, $.gulp.series('svg:sprite'));
    $.gulp.watch(paths.iconsForBase64, $.gulp.series('svg:base'));
    $.gulp.watch(paths.staticFiles, $.gulp.series('copy'));
    $.gulp.watch(paths.images, $.gulp.series(
      $.gulp.parallel(
        'images:copy',
        'images:gif',
        'images:svg'
      ))
    );
    $.gulp.watch(paths.uploads, $.gulp.series(
      $.gulp.parallel(
        'uploads:copy',
        'images:gif',
        'images:svg'
      ))
    );
  });
};
