var webpack = require('webpack');  
module.exports = {  
    entry: [
      'webpack/hot/only-dev-server',
      "./js/app.js",
      "./css/main.scss"
    ],
    output: {
        path: __dirname + '/build',
        filename: "bundle.js"
    },
    module: {
        preLoaders: [
          {
            test: /(\.js$|\.jsx$)/, 
            exclude: /node_modules/, 
            loader: "eslint-loader"
          }
        ],
        loaders: [
            { test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            { test: /\.scss$/, loader: "style!css!sass" }
        ]
    },
    eslint: {
      configFile: '.eslintrc.yml'
    },
    plugins: [
      new webpack.NoErrorsPlugin()
    ]

};
