import del from 'del';
import gulp from 'gulp';

gulp.task('clean', (callback) => del(['./dist/**'], callback) );
