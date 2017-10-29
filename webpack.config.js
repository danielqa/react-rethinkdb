module.exports = {
    entry: './index.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015', 'react']
                    }
                },
                exclude: /node_modules/
            }
        ]
    }
}