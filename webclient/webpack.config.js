module.exports = {
    entry: "./app/app.js",
    output: {
        path:'./dist',
        filename: "bundle.js",
        publicPath: 'http://localhost:8090/'
    },
    devServer: {
        inline: true,
        contentBase: './dist'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
};