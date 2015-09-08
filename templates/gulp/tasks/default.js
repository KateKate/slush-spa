import gulp from 'gulp';

gulp.task('default', () => {
  const help = '\
    Usage: gulp [command]\n\n\
    Commands:\n\
      dev     # build the application and runs it in a dev server\n\
      dist    # build a distribution version of the application\n\
      tdd     # executes specs and watches for changes\n\
      ci      # executes specs one time (useful for CI scenarios)\n\
      clean   # remove dist directory\
  ';
  console.log(help);
});
