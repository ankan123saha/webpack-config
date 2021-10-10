const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const mode=process.env.NODE_ENV === 'production' ? 'production' : 'development'
module.exports={
    mode: mode,
    target: 'browserslist',
    devtool: 'source-map',
    entry: './src/index.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
      assetModuleFilename: 'images/[hash][ext][query]',
      clean: true
    },
    module: {
      rules:[
        { 
          test: /\.(png|jpe?g|svg)$/i,
          type: "asset/inline"
        },
        {
          test: /\.jsx?$/,
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
    plugins: [new MiniCssExtractPlugin(), new HtmlWebpackPlugin({
      template: "./src/index.html"
    })],
    resolve: {
      extensions: [".js", ".jsx"]
    },
    devServer: {
        static: {
          directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 8080,
      }, 
}

