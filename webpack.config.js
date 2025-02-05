const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
	// enntry file
	entry: './src/js/index.js',
	// 컴파일 + 번들링된 js 파일이 저장될 경로와 이름 지정
	devServer: {
		port: 9000,
		contentBase: __dirname + '/dist/',
	},
	output: {
		path: path.resolve(__dirname, 'dist/'),
		filename: './js/bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				include: [path.resolve(__dirname, 'src/js')],
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
						plugins: ['@babel/plugin-proposal-class-properties'],
					},
				},
			},
		],
	},
	plugins: [new HtmlWebPackPlugin({ template: './index.html', filename: './index.html' })],
	optimization: {
		minimize: true,
		splitChunks: {},
		concatenateModules: true,
	},
	devtool: 'source-map',
	// https://webpack.js.org/concepts/mode/#mode-development
	mode: 'development',
};
