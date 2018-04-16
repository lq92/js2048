const merge = require('webpack-merge')
const config = require('./webpack.commen.config.js')
const UglifyJs = require('uglify-webpack-plugin')

module.exports = merge(config, {
	mode: 'production',
	plugins: [
		new UglifyJs()
	]
})