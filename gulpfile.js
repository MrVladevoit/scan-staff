"use strict";

global.$ = {
  gulp: require('gulp'),
  browserSync: require('browser-sync').create(),
  plugins: require('gulp-load-plugins')(), // allow used plugins without vars,
  path: {
    tasks: require('./config/gulp/config_tasks.js')
  },
  del: require('del')
};

// Позволяет разбить gulp tasks на отдельные файлы
$.path.tasks.forEach(function (taskPath) {
  require(taskPath)();
});

$.gulp.task('dev', $.gulp.series(
  'clean',
  $.gulp.parallel(
    'pug',
    'styles:dev',
    'scripts:dev',
    'libsJs:dev',
    'images:dev',
    'svg:sprite',
    'svg:base',
    'copy',
  )
));

$.gulp.task('prod', $.gulp.series(
  'clean',
  $.gulp.parallel(
    'pug',
    'styles:dev',
    'styles:minify',
    'scripts:prod',
    'libsJs:prod',
    'images:build',
    'svg:sprite',
    'svg:base',
    'copy',
  )
));

$.gulp.task('default', $.gulp.series(
  'dev',
  $.gulp.parallel('watch', 'serve')
));
