let delPath = './build';

module.exports = () => {

  $.gulp.task('clean', () => {
    return $.del(delPath)
  })
};
