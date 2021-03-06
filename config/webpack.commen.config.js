const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
	entry: {
		index: './src/index.js'
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, './dist')
	},
	plugins: [
		new HtmlWebpackPlugin(),
		new CleanWebpackPlugin(['dist'])
	],
	module: {
		rules: [
			{
				test: /\.sass$/,
				use: [ 'style-loader', 'css-loader', 'sass-loader' ]
			}
		]
	}
}