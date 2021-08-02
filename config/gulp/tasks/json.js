let merge = require('gulp-merge-json'),
  path = require('path'),
  gulpsvgtojsontoscss = require('gulp-svg-to-json-to-scss'),
  jsonPath = {
  'src': 'src/utils/data/json/*.json',
  'dest': 'src/utils/data/',
  'srcSvg': 'src/lib/sprite/icons/*.svg',
  'destSvgJson': 'src/utils/data/json/',
};

module.exports = () => {

  // merge all JSON files to one
  $.gulp.task('json:merge', () => {

    return $.gulp.src(jsonPath.src)

      .pipe($.plugins.plumber({

        errorHandler: function(err) {

          $.plugins.notify.onError({
            title: "Error in JSON file",
            message: "<%= error.message %>"
          })(err);
        }
      }))

      .pipe(

        merge({
          fileName: 'data.json',

          edit: (json, file) => {

            // Extract the filename and strip the extension
            var filename = path.basename(file.path),
              primaryKey = filename.replace(path.extname(filename), '');

            // Set the filename as the primary key for our JSON data
            var data = {};
            data[primaryKey.toUpperCase()] = json;

            return data;
          }
        })
      )

      .pipe($.plugins.debug({title:'Json merge done !'}))

      .pipe($.gulp.dest(jsonPath.dest));
  });

  $.gulp.task('json:svg', () => {

    return $.gulp.src(jsonPath.srcSvg)

      .pipe($.plugins.svgmin())

      .pipe(gulpsvgtojsontoscss({
        jsonFile: 'icons.json',
        noExt:true,
        delim:"_"
      }))


      .pipe($.gulp.dest(jsonPath.destSvgJson));
  });
};
