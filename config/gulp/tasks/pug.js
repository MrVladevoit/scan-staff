let fs = require('fs'),
  pugPath = {
  'src': 'src/pages/*.pug',
  'srcData': 'src/utils/data.json',
  'dest': 'build'
};

module.exports = () => {

  $.gulp.task('pug', () => {

    return $.gulp.src(pugPath.src)

      .pipe($.plugins.plumber({

        errorHandler: function(err) {

          $.plugins.notify.onError({
            title: "Error in PUG file",
            message: "<%= error.message %>"
          })(err);
        }
      }))

      .pipe(
        $.plugins.data(function () {
          return JSON.parse(fs.readFileSync(pugPath.srcData))
        }),
      )

      .pipe($.plugins.pug({
        pretty: true // отклключает форматирование HTML в одну строку
      }))

      .pipe($.plugins.plumber.stop())

      .pipe($.gulp.dest(pugPath.dest))

      .on('end', $.browserSync.reload);
  })
};
