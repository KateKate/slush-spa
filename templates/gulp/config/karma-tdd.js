import merge from 'deepmerge';
import karma from './karma';
import plugins from 'karma-chrome-launcher';

const tdd = {
  browsers: ['Chrome'],
  singleRun: false,
  plugins: [plugins],
};

export default function(config) {
  config.set(merge(karma, tdd));
}
