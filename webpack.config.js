module.exports = {
  entry: ['./f2e/setup.js', './f2e/run.js'],
  output: {
    filename: './f2e/bundle.js',
  },
  resolve: {
    alias: {
      'https://unpkg.com/chai@4.1.2/chai.js': 'chai/chai.js',
    },
    extensions: ['.js', '.json', '.node']
  },
  module: {
    rules: [
      {
        test: require.resolve('chai/chai.js'),
        use: 'script-loader'
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
    ]
  },
};

