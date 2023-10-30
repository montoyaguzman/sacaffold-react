const path = require('path');

module.exports = {
    // entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
          {
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
          }
        ]
    }
}