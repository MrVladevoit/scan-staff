module.exports = function () {

  $.gulp.task('serve', function() {

    $.browserSync.init({
      server: "./build",
      port: 4048
    });
  });
}
