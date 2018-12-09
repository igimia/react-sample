const path = require('path');

module.exports = {
  devtool: 'inline-source-map', // ソースマップファイル追加
  mode: 'development',
  entry: './src/index.js', // エントリポイントのjsxファイル
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js' // 出力するファイル
  },
  devServer: {
    watchContentBase: true,
    host: "0.0.0.0",  // useLocalIPを有効化するために必要
    port: 3000,
    useLocalIp: true  // URLを`localhost`ではなく`IPアドレス`を指定して表示するのに必要。
  },
  module: {
    rules: [{
      test: /\.jsx?$/, // 拡張子がjsで
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader', // babel-loaderを使って変換する
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'], // env presetでES2015向けに変換、react presetでReactのJSX文法を変換
        }
      }
    }]
  }
}