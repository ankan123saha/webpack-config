const path = require('path')
const mode=process.env.NODE_ENV === 'production' ? 'production' : 'development'
module.exports={
    mode: mode,
    devtool: 'source-map',
    module: {
      rules:[
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        }
      ]
    },
    devServer: {
        static: {
          directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 8080,
      }, 
}

