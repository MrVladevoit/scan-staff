let imagesSrc = 'src/assets/';
let imagesTypes = '{jpg,png,JPEG,jpeg}';

let imagesPaths = {
  'srcImagesContent': imagesSrc + 'images/**/*.' + imagesTypes,
  'srcImagesUploads': imagesSrc + 'uploads/**/*.' + imagesTypes,
  'srcGif': imagesSrc + 'images/**/*.gif',
  'srcSVG': imagesSrc + 'images/**/*.svg',
  'destImagesContent': 'build/images',
  'destImagesUploads': 'build/uploads'
};

module.exports = () => {

  $.gulp.task('images:copy', () => {
    return $.gulp.src(imagesPaths.srcImagesContent)
      .pipe($.gulp.dest(imagesPaths.destImagesContent))
  });

  $.gulp.task('uploads:copy', () => {
    return $.gulp.src(imagesPaths.srcImagesUploads)
      .pipe($.gulp.dest(imagesPaths.destImagesUploads))
  });

  $.gulp.task('images:compress', () => {

    return $.gulp.src(imagesPaths.srcImagesContent)

      .pipe($.plugins.tinypng('v7ybahawsh7pIWPB0vBkP6p56MLf4Wc6'))

      .pipe($.gulp.dest(imagesPaths.destImagesContent))
  });

  $.gulp.task('uploads:compress', () => {

    return $.gulp.src(imagesPaths.srcImagesUploads)

      .pipe($.plugins.tinypng('v7ybahawsh7pIWPB0vBkP6p56MLf4Wc6'))

      .pipe($.gulp.dest(imagesPaths.destImagesUploads))
  });

  $.gulp.task('images:gif', () => {
    return $.gulp.src(imagesPaths.srcGif)
      .pipe($.gulp.dest(imagesPaths.destImagesContent))
  });

  $.gulp.task('images:svg', () => {

    return $.gulp.src(imagesPaths.srcSVG)

      .pipe($.plugins.svgmin({

        js2svg: {
          pretty: true
        }
      }))

      .pipe($.gulp.dest(imagesPaths.destImagesContent))
  });

  $.gulp.task('images:dev', $.gulp.series(

    $.gulp.parallel(
      'images:copy',
      'uploads:copy',
      'images:gif',
      'images:svg'
    )
  ));

  $.gulp.task('images:build', $.gulp.series(
    $.gulp.parallel(
      'images:compress',
      'uploads:compress',
      'images:gif',
      'images:svg'
    )
  ));
};
