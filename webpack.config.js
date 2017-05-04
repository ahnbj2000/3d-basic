const webpack = require("webpack");
const browserSyncConfig = require("./bsconfig.json");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

module.exports = {
    entry: "./src/main.ts",

    output: {
        filename: "main.js",
        path: __dirname + "/dist"
    },

    devtool: "source-map",

    resolve: {
        // Add '.ts' as resolvable extensions.
        extensions: [".webpack.js", ".web.js", ".ts", ".js"]
    },

    module: {
        rules: [
            // All files with a '.ts' extension will be handled by 'awesome-typescript-loader'.
            {
                test: /\.ts$/,
                loader: "awesome-typescript-loader",
                exclude: /node_modules/
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                test: /\.js$/,
                enforce: "pre",
                use: ["source-map-loader"],
                exclude: /node_modules/
            }
        ]
    },

    plugins: [
        new BrowserSyncPlugin(browserSyncConfig, {
            reload: false
        })
    ]
};
