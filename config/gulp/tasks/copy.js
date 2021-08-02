let paths = {
  'src': 'src/assets/**/*',
  'dest': 'build/',
};

module.exports = () => {

  $.gulp.task('copy', () => {

    return $.gulp.src(paths.src)
      .pipe($.gulp.dest(paths.dest))
  });
};
