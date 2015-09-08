import clone from 'clone';
import gulp from 'gulp';
import gutil from 'gulp-util';
import webpack from 'webpack';

let config = clone(require('../config/webpack'));

config.output.path = './dist/';
config.plugins || (config.plugins = []);
config.plugins = config.plugins.concat([new webpack.optimize.DedupePlugin()]);

gulp.task('webpack:dist', (callback) => {
  if (!gutil.env.unugly) {
    config.plugins.push(new webpack.optimize.UglifyJsPlugin());
  }
  webpack(config, (err, stats) => {
    if (err) {
      throw new gutil.PluginError('webpack:dist', err);
    }
    gutil.log('[webpack:dist]', stats.toString({ colors: true }));
    callback();
  });
});
