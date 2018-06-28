const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'app.js'
    },
    devtool: 'source-map',
    devServer: {
        contentBase: 'dist',
        port: 8081
    },
    module: {
        rules: [
            // js
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            // images
            {
                test: /\.(png|ico|gif|svg|jpe?g)(\?[a-z0-9]+)?$/,
                use: 'url-loader',
            },
            // css
            {
                test: /\.css$/,
                loader: [
                    'style-loader',
                    'css-loader',
                ]
            }
        ]
    }
};
