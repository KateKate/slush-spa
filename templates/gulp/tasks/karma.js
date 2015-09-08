import gulp from 'gulp';

const Server = require('karma').Server;

const execute = (type, callback) => {
  const config = {
    configFile: __dirname + ('/../config/karma-' + type + '.js')
  };
  const server = new Server(config);
  server.start();
};

gulp.task('karma:ci', (callback) => execute('ci', callback) );
gulp.task('karma:tdd', (callback) => execute('tdd', callback) );
