const merge = require('webpack-merge')
const config = require('./webpack.commen.config.js')

module.exports = merge(config, {
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		contentBase: '../dist'
	}
})
