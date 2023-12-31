const HtmlWebpackPlugin = require('html-webpack-plugin');
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

module.exports = (env, args) => {
  const { mode } = args;
  const isPro = mode === 'production';
  return {
    // entry: './src/index.js',
    output: {
        filename: isPro ? '[name].[contenthash].js' : 'main.js',
        path: path.resolve(__dirname, 'build')
    },
    plugins: [
      new HtmlWebpackPlugin( { template: 'src/index.html' } ),
    ],
    module: { 
      rules: [ jsRules, cssRules ] 
    },
    devServer: {
      open: true,
      port: 3000,
      compress: true,
    },
    devtool: 'source-map'
  }
}