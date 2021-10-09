const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const mode=process.env.NODE_ENV === 'production' ? 'production' : 'development'
module.exports={
    mode: mode,
    target: 'browserslist',
    devtool: 'source-map',
    module: {
      rules:[
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.s?css$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader",]

        }
      ]
    },
    plugins: [new MiniCssExtractPlugin()],
    devServer: {
        static: {
          directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 8080,
      }, 
}

