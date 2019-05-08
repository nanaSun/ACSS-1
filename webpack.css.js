// mini-css-extract-plugin，有了他可以代替style-loader，不仅压缩了文件，还可以帮助我们将CSS从js中剥离出来
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

//loaders的主体，按照loader的顺序应该是先是预处理，比如Scss，然后是加前缀prefix，到此为止大家还是CSS的样子，等到了css-loader，css就变成了js，最后style-loader或者minicss将css模块再变成js生成文件或者内联。
const getStyleLoaders = (cssOptions, preProcessor,env) => {
    const loaders = [
        // 此处是最后一步，将CSS提取出或者内联
        {loader:env==="development"?require.resolve('style-loader') : MiniCssExtractPlugin.loader},
        // 此处将CSS变成标准的JS模块，如果有css模块化的需求，是在此处理
        {
            loader: require.resolve('css-loader'),
            options: cssOptions,
        },
        // 此处将CSS预处理处，一般是给css加上恼人的前缀，这里可以设置浏览器的版本，你需要哪些浏览器的支持
        // {
        //     loader: require.resolve('postcss-loader'),
        //     options: {
        //         ident: 'postcss',
        //         plugins: () => [
        //         require('postcss-flexbugs-fixes'),
        //         require('postcss-preset-env')({
        //             autoprefixer: {
        //             flexbox: 'no-2009',
        //             },
        //             stage: 3,
        //         }),
        //         ],
        //     },
        // },
    ];
    // 此处如果有sass等预处理的需求，需要在此配置
    if (preProcessor) {
        loaders.push(require.resolve(preProcessor));
    }
    return loaders;
};
// style files regexes，这里是为了避免重复配置css的各种类型
const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;
const lessRegex = /\.(less)$/;
const lessModuleRegex = /\.module\.(less)$/;
// 导出给webpack配置使用
module.exports={getStyleLoaders,cssRegex,cssModuleRegex,sassRegex,sassModuleRegex,lessRegex,lessModuleRegex}

