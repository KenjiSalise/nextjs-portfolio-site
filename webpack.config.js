module.exports = {
    // other configurations...
    module: {
        rules: [
            // Add the following rule to handle mp3 files
            {
                test: /\.mp3$/,
                use: 'file-loader', // or 'url-loader' depending on which one you installed
            },
            // other loaders for js, css, etc.
        ],
    },
};