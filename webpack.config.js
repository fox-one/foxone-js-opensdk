var webpack = require('webpack')

module.exports = {
  //...
  entry: {
    main: './src/index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.node']
  },
  output: {
    library: 'FoxSDK',
    libraryExport: 'default',
    libraryTarget: 'umd',
    filename: 'dist/FoxSDK.min.js',
    auxiliaryComment: 'Fox SDK Comment'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ],
  externals: {
    axios: 'axios'
  }
}