module.exports = {
    entry: "./main",
    output: { filename: "app.js" },
    module: {
        loaders: [
            {
                test: /.ts$/,
                loader: "ts-loader"
            }
        ]
    },
    resolve: {
        extensions: ['*', '.ts', '.js']
    },
    devServer: {
        publicPath: "/",
        contentBase: "./public",
        hot: true
    }
}