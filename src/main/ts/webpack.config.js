const path = require("path");
const webpack = require("webpack");

module.exports = {
    mode: process.env.NODE_ENV,
    plugins: [
        new webpack.EnvironmentPlugin(['NODE_ENV'])
    ],
    // Enable sourcemaps for debugging webpack's output.
    devtool: process.env.NODE_ENV === "development" ? "source-map" : undefined,

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".js", ".ts", ".tsx"]
    },
	output: {
        path: process.env.NODE_ENV === "development"
            ? path.resolve(__dirname, "../../../target/classes/assets/js")
            : path.resolve(__dirname, "../resources/assets/js"),
        filename: "main.js"
    },
    watchOptions: {
        ignored: /node_modules/
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};

