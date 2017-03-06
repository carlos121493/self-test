var webpack = require('webpack');
module.exports = {
  entry: ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', './src/index.tsx'],
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
    publicPath: '/'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.LoaderOptionsPlugin({noInfo: false, index: "index.html"}),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: "awesome-typescript-loader"}, {test: /\.js$/, loader: "source-map-loader", enforce: 'pre' },
      { test: /\.html?$/, loader: "file-loader" }
    ],
  },
  externals: {
    react: 'React',
    "react-dom" : "ReactDOM",
  }
}