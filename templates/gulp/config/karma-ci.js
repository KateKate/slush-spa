import merge from 'deepmerge';
import karma from './karma';

const ci = {
  browsers: ['PhantomJS'],
  preprocessors: {
    '../../spec/polyfill/phantomjs.js': ['webpack']
  },
  singleRun: true,
  plugins: [require('karma-phantomjs-launcher')],
};

export default function(config) {
  const merged = merge(karma, ci);
  merged.files = ['../../spec/polyfill/phantomjs.js'].concat(merged.files);
  return config.set(merged);
}
