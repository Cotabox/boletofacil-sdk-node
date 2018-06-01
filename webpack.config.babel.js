
import { join } from 'path';

const include = join(__dirname, 'src');

export default {
  entry: ['babel-polyfill', './index'],
  output: {
    path: join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'boletofacil',
  },
  target: 'node',
  devtool: 'source-map',
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', include },
    ],
  },
};
