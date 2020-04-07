const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.tsx',
    devtool: "source-map",
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js']
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				loader: 'ts-loader',
				exclude: /node-modules/,
			},
			{
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
			{
                test: /\.css$/,
                use: ['style-loader', 'sass-loader', 'css-loader'],
                exclude: /node_modules/
            }
		]
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: './index.html'
		})
	]
}
