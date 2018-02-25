const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: {
		about: './src/about.js',
		contact: './src/contact.js'
	},
	output: {
		filename: '[name].bundle.js',
		path: path.join(__dirname, 'dist')
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		port: 8080
	},
	module: {
		rules: [
			{
				test: /.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env', 'stage-0','react']
					}
				}
			}
		]
	}, 
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: "commons",
			filename: "commons.bundle.js"
		})
	]
};