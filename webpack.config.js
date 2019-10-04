const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "./docs"),
    filename: "app.bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"]
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "./docs",
              hmr: process.env.NODE_ENV === "development"
            }
          },
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          },
          // "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts'
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif||svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "img/",
              publicPath: "img/"
            }
          },
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false
              },
              pngquant: {
                quality: "65-90",
                speed: 4
              },
              gifsicle: {
                interlaced: false
              },
              // the webp option will enable WEBP

            }
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "docs"),
    compress: true,
    stats: "errors-only",
    open: true
  },
  plugins: [
    require('autoprefixer'),
    new HtmlWebpackPlugin({
      title: "Bluepress",
      minify: {
        collapseWhitespace: true
      },
      hash: true,
      template: "./src/index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "app.css"
    })
    
  ]
};
