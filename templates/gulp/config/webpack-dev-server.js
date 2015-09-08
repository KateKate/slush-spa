import clone from 'clone';

let webpackConfig = clone(require('./webpack'));

webpackConfig.devtool = 'eval';
webpackConfig.debug = true;

const config = {
  webpack: webpackConfig,
  host: 'localhost',
  port: 9090,
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
  },
  proxy: {
    '/integration/*': 'http://localhost:9091',
  },
};

export default config;
