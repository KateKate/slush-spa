import gulp from 'gulp';
import gutil from 'gulp-util';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from '../config/webpack-dev-server';

function onStart(err) {
  if (err) {
    throw new gutil.PluginError('webpack:dev-server', err);
  }
  const url = 'http://' + config.host + ':' + config.port + '/webpack-dev-server/index.html';
  gutil.log('[webpack-dev-server]', url);
}

gulp.task('webpack:dev-server', () => {
  const options = {
    publicPath: config.publicPath,
    stats: config.stats
  };
  new WebpackDevServer(webpack(config.webpack), options).listen(config.port, config.host, onStart);
});
