// PhantomJS is missing the bind function, so this polyfill is necessary
// https://github.com/ariya/phantomjs/issues/10522
if (!Function.prototype.bind) {
  Function.prototype.bind = require('function-bind');
}
