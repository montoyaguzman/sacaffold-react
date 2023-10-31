const path = require('path');

const jsRules = {
  test: /\.js$/,
  include: path.resolve(__dirname, 'src'),
  exclude: /node_modules/,
  use: [{
      loader: 'babel-loader',
      options: {
          presets: [
              [
                  '@babel/preset-react',
                  {
                      runtime: 'automatic' // react
                  }
              ]
          ]
      }
  }]
};

const cssRules = {
  test: /\.css$/,
  use: ['style-loader', 'css-loader']
};

module.exports = {
    // entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build')
    },
    module: { 
      rules: [ jsRules, cssRules ] 
    }
}