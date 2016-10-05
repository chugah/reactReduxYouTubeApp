var webpack = require('webpack');
// var path = require('path'); if using sass need to include path

module.exports = {
	entry: [
	'script!jquery/dist/jquery.min.js',
	'./app/app.jsx'
	],
	externals: {
		jquery: 'jQuery'
	},
	plugins: [
		new webpack.ProvidePlugin({
			'$': 'jquery',
			'jQuery': 'jquery'
		})
	],
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},
	resolve: {
		root: __dirname,
		alias: {
			applicationStyles: 'app/styles/app.css',
			actions: 'app/actions/actions.jsx', 
	        reducers: 'app/reducers/reducers.jsx',
	        configureStore: 'app/store/configureStore.jsx',
	        search_bar: 'app/components/search_bar',
	        video_list: 'app/components/video_list' ,
	        video_list_item: 'app/components/video_list_item' ,
	        video_detail: 'app/components/video_detail'      
	    },					
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'stage-0']
				},
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/
			}
		]
	},
	/* if using sass need to include loader
	sassLoader: {
		includePaths: [
			path.resolve(__dirname, './node_modules/foundation-sites/scss')
		]
	}*/
	devtool: 'cheap-module-eval-source-map'
};