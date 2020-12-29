const webpack = require( 'webpack' );
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

module.exports = {
	devServer: {
		proxy: 'http://localhost:8081'
	  },
	publicPath: process.env.NODE_ENV === 'production' ? '/sigma-vue' : '/',

	outputDir: '../wwwroot',

    configureWebpack: {
        output: {
            devtoolModuleFilenameTemplate: '[absolute-resource-path]',
            devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
		},
		// module: {
		// 	rules: [{
		// 		test: /\.vue$/,
		// 		use: 'vue-loader'
		// 	},
		// 	{
		// 		test: /\.tsx?$/,
		// 		loader: 'ts-loader',
		// 		exclude: /node_modules/,
		// 		options: {
		// 			appendTsSuffixTo: [/\.vue$/],
		// 		}
		// 	},
		// 	// {
		// 	// 	test: /\.css$/,
		// 	// 	use: [ 
		// 	// 		'vue-style-loader', 
		// 	// 		'css-loader',
		// 	// 	]
		// 	// }
		// ]
		// },
		// resolve: {
		// 	extensions: ['.ts', '.js', '.vue', '.json']			
		// },
		// plugins:[
		
		// 	new VueLoaderPlugin(),
	
		// 	// html:
			
		// 	// new HtmlWebpackPlugin({
		// 	// 	filename: 'ds-dev.html',
		// 	// 	template: 'ds-dev.html',
		// 	// 	chunks: ['ds-dev'],
		// 	// 	inject: true
		// 	// }),
	
		// ],
	}
}