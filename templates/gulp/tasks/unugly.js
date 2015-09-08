import gulp from 'gulp';
import gutil from 'gulp-util';
import sequence from 'run-sequence';

gulp.task('unugly', (callback) => {
  gutil.env.unugly = true;
  sequence('dist', callback);
});
