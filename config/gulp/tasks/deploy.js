let deployFolder = "build/**";

module.exports = () => {

  $.gulp.task('deploy', () => {

    return $.gulp.src(deployFolder)

      .pipe($.plugins.rsync({
        chmod: "ugo=rwX",
        root: 'build/',
        hostname: 'srv118072@ssh-118072.srv.hoster.ru',
        destination: 'gp-studio.ru/html/staff-scan/',
        archive: true,
        silent: false,
        compress: true
      }));
  });
};
