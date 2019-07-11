const path = require('path');
module.exports = {
    entry: "./src/index.js",
    devServer: {
        contentBase: __dirname + "/public",
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.js?/,
                exclude: '/node_modules/',
                use: {

                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/react', '@babel/env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {},
                    }
                ]
            },

        ]
    },
    resolve: {

        alias: {
            'images': path.resolve(__dirname, 'public/assets')
        }
    },
}