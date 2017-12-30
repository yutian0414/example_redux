var path=require('path');
var webpack=require("webpack");
var HtmlWebapckPLugin=require('html-webpack-plugin');

module.exports={
	entry:[
		'webpack-dev-server/client?http://localhost:3028',
		'webpack/hot/only-dev-server',
		'react-hot-loader/patch',
		path.join(__dirname,'/index.js'),
	],
	output:{
		path:path.join(__dirname,'/dist/'),
		filename:"bundle.js",
		publicPath:'/',
	},
	module:{
		loaders:[
			{
				test:/\.jsx?$/,
				exclude:path.join(__dirname,'/node_modules/'),
				loader:"babel-loader",
				query:{presets:['es2015','react']}
			},
			{
				test:/\.css$/,
				exclude:path.join(__dirname,'/node_modules/'),
				loader:['style-loader','css-loader']
			},
			// {
			// 	test:/\.jsx?$/,
			// 	loader:'eslint-loader',
			// 	include:['./index.js',path.join(__dirname,"/components/")],
			// 	enforce:'pre'
				
			// },


		]
	},
	plugins:[
		new HtmlWebapckPLugin({
			template:'./index.tpl.html',
			inject:"body",
			filename:"index.html",
		}),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV':JSON.stringify("development")
		}),
		
	]
}
