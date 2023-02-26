const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    Plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
        })
    ],
}

module.exports = {
    // モード値を production に設定すると最適化された状態で、
    // development に設定するとソースマップ有効でJSファイルが出力される
    //mode: "development",

    cache: {
        type: 'filesystem',
        buildDependencies: {
            config: [__filename]
        }
    },

    // メインとなるJavaScriptファイル（エントリーポイント）
    entry: "./src/main.tsx",
    // ファイルの出力設定
    output: {
        //  出力ファイルのディレクトリ名
        path: `${__dirname}/dist`,
        // 出力ファイル名
        filename: "bundle.js"
    },
    
    module: {
        rules: [
            {
                // 拡張子 .ts もしくは .tsx の場合
                test: /\.tsx?$/,
                // TypeScript をコンパイルする
                use: "ts-loader"
            },
            { 
                test: /\.(png|jpg|gif)$/,
                loader: 'file-loader',
                options: {},
            }
        ]
    },
    // import 文で .ts や .tsx ファイルを解決するため
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    // ES5(IE11等)向けの指定（webpack 5以上で必要）
    target: ["web", "es5"],
};