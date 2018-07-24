const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');
const entry = require('./entry_webpack');
const CopyWebpackPlugin =  require('copy-webpack-plugin')

module.exports = {
    mode:"development",
    entry:entry,
    output:{
        path:path.resolve(__dirname,'dist'),  //必须用绝对路径
        filename:'[name].js',
        publicPath:'http://localhost:8080/'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                // use:['style-loader','css-loader']
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [{
                        loader:"css-loader",
                        options:{
                            importLoaders:1
                        }
                    },"postcss-loader"]
                })
            },
            {
                test:/\.(jpg|png|gif)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:'5000',
                            outputPath:'images/'
                        }
                    }
                ]
            },{
                test:/\.(htm|html)$/i,
                loader:'html-withimg-loader'
            },
            {
                test:/\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: ["css-loader","sass-loader"],
                    fallback: "style-loader",
                })
            },{
                test:/\.js$/,
                use:[
                    {
                        loader:"babel-loader",
                        options:{
                            presets:["env"]
                        }
                    }
                ],
                exclude:/node_modules/
            }
        ]
    },
    plugins:[
        new HtmlPlugin({
            template:'./src/index.html',
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,
            filename:'a.html',
            // title:'title1',
            chunks:['index']
        }),
        // new ExtractTextPlugin("css/styles.css"),
        new ExtractTextPlugin("css/index.css"),
        new webpack.BannerPlugin('注释注释'),
        new webpack.ProvidePlugin({
            $:"jquery"
        }),
        new CopyWebpackPlugin([{
            from:__dirname+"/src/public",
            to:'./public'
        }])
    ],
    devServer:{
        contentBase:'./dist',
        host:'localhost',
        port:'8080',
        // compress:true,
        open:true

    },
    watchOptions:{
        poll:1000,
        aggregateTimeout:500,
        ignored:/node_modules/
    }
}