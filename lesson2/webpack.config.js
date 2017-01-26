const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	entry: {
		app: './src/app.ts',
		vendors: [
			'rxjs',
			'zone.js',
			'reflect-metadata'
		]
	},
	output: {
		filename: '[name].js?[hash]',
		publicPath: './',
		path: path.join(__dirname, "dist")
	},
	resolve: {
		extensions: ['.ts', '.js']
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				exclude: '/node_modules/',
				loader: 'awesome-typescript-loader'
			}
		]
	},
	
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Typings',
			template: './src/index.html',
		})
	],
	
	devServer: {
		filename: '[name].js?[hash]',
		contentBase: path.join(__dirname, "dist")
	},
	
	watch: true
};