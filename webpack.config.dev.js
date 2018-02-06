const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	entry:'./src/app.js',
	output:{
		path:path.resolve(__dirname,'dist'),
		filename:'app.js'
	},
	plugins:[
		new HtmlWebpackPlugin({
			filename:'index.html',
			template:'src/index.html'
		})
	],
	module:{
		rules:[
			{
				test:/\.css$/,
				use:['style-loader','css-loader']
			},
			{
				test:/\.(jpg|png|git|jpeg)$/,
				use:[{
					loader:'url-loader',
					options:{
						limit:10000
					}
				}]
			},
			{
				test:/\.(ttf|eot|woff|woff2|svg)$/,
				use:['file-loader']
			}
		]
	},
	devServer:{
		open:true,
		port:9000
	}
};