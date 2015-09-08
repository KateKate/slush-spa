import gulp from 'gulp';
import sequence from 'run-sequence';

gulp.task('dist', (callback) => sequence('clean', 'webpack:dist', callback) );
