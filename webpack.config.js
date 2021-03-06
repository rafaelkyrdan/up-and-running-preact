const path = require('path');

module.exports = {
	//input
	entry: './src',

	//output
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'bundle.js'
	},

	//transformations
	module: {
		rules: [
			{
				test: /\.jsx?/i,
                loader: 'babel-loader',
                options: {
                    presets: ['env', 'es2015'],
                    plugins: [
                        ['transform-react-jsx', { pragma: 'h' }]
                    ]
                }
			}
		]
	},

	// resolvers
	resolve: {
		alias: {
			'react': 'preact-compat',
			'react-dom': 'preact-compat'
		}
	},


	//sourcemaps
	devtool: 'source-map',

	//server
	devServer: {
		contentBase: path.join(__dirname, 'src'),
        compress: true,
        historyApiFallback: true
	}
}
