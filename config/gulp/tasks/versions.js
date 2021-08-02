let versionConfig = {
    'value': '%MDS%',
    'append': {
      'key': 'v',
      'to': ['css', 'js'],
    },
  },
  pugPath = {
  'src': 'build/*.html',
  'dest': 'build'
};

module.exports = () => {

  $.gulp.task('file:version', () => {

    return $.gulp.src(pugPath.src)

      .pipe($.plugins.versionNumber(versionConfig))

      .pipe($.gulp.dest(pugPath.dest));
  })
};
