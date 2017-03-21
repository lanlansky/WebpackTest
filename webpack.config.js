var path=require('path');
var HtmlwebpackPlugin=require('html-webpack-plugin');
//定义了一些文件夹的路径
var ROOT_PATH=path.resolve(__dirname);
var APP_PATH=path.resolve(ROOT_PATH,'app');
var BUILD_PATH=path.resolve(ROOT_PATH,'build');
module.exports={
	//项目的文件夹  可以直接用文件夹名称  默认会找index.js 也可以
	//确定是哪个文件夹名称
	entry:APP_PATH,
	//输出的文件名 合并以后的js会命名为bundle.js
	output:{
		path:BUILD_PATH,
		filename:'bundle.js'
	},
	module: {
	loaders: [{
		test: /\.css$/,
		//低版本的数组样式不可使用  loaders: ['style', 'css'] 错误
		loaders: "style-loader!css-loader",
		include: APP_PATH
		},
		{
        test: /\.(png|jpg)$/,
        //低版本的写法为 loader: 'url?limit=40000' 错误
        loader: 'url-loader?limit=40000'
      	}
		]
	},
	//添加我们的插件  会自动生成一个html文件
	plugins:[
		new HtmlwebpackPlugin({
			title:'Hello World app'
		}) 
	]
};