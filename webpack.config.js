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
    filename: 'dist/FoxSDK.js',
    auxiliaryComment: 'Fox SDK Comment'
  }
}