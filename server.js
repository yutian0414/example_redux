var webpack=require("webpack");
var config=require("./webpack.config.js");
var WebpackDevServer=require("webpack-dev-server");

new WebpackDevServer(webpack(config),{
	publicPath:config.output.publicPath,
	hot:true,
	quiet:false,
	noInfo:false,
	stats:{
		assets:false,
		colors:true,
		hash:false,
		timings:false,
		chunks:false,
		chunkModules:false,
	}
}).listen(3028,'localhost',function(err){
	if(err){
		console.log(err);

	}
	console.log('Listening at loaclhost:3028....')
})