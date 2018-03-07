// Webpack configuration
module.exports = {
  entry: './client/index.jsx',
  output: {
    path: `${__dirname}/public/js`,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  }
}