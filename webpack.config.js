// Webpack configuration
module.exports = {
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  entry: './client/index.jsx',
  output: {
    path: `${__dirname}/public/js`,
    filename: 'bundle.js',
  },

  module: {
    loaders: [
      { test: /(\.js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.scss/, loader: 'style-loader!css-loader!sass-loader' },
      { test: /\.(png|jpg|gif|ico)$/, loader: 'file-loader', options: { name: 'img/[name].[ext]' } },
    ],
  },
};
