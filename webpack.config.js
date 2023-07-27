const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.scss', '.css'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    'style-loader', // creates style nodes from JS strings
                    {
                        loader: 'css-loader', // translates CSS into CommonJS
                        options: {
                            modules: true,
                        },
                    },
                    "sass-loader"
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            }
        ],
    },
    plugins: [
        new Dotenv()
    ],
};
