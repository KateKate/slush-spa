import path from 'path';
import pkg from '../../package.json';

let obj;

const config = {
  cache: true,
  entry: (
    obj = {},
    obj['' + pkg.name] = ['./src/scripts/main.js'],
    obj
  ),
  output: {
    libraryTarget: 'umd',
    library: ['Offsidegaming', 'Login'],
    path: path.join(__dirname, 'assets'),
    publicPath: '/assets/',
    filename: '[name].js',
  },
  resolve: {
    extensions: ['', '.jsx', '.js', 'scss', 'css'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel?optional=runtime'
      }, {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel?optional=runtime'
      }, {
        test: /\.css$/,
        loader: 'style!css'
      }, {
        test: /\.scss$/,
        loader: 'style!css!sass'
      }
    ]
  },
  externals: {
    'offside-gaming': 'Offsidegaming',
  },
};

export default config;
