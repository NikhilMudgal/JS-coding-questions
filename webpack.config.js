const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Add this

module.exports = {
    entry: './index.js',
    output : {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: './index.html',
        }),
      ],
    mode: 'development',
    watch: true
}