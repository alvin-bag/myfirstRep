const path = require("path");
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports={
    entry:{
        app:"./src/main.js"
    },
    output:{
        publicPath:"/dist/js",
        path:path.resolve(__dirname,"./dist/js"),
        filename:"[name].bundle.js"
    },
    mode:"production",
    module:{
        rules:[
            {
                test:/\.(eot|woff2|woff|ttf|svg)$/,
                use:[
                    {loader:'url-loader',
                    options:{
                        name:'[name][hash:5].min.[ext]',
                        limit:5000,
                        publicPath:'',
                        outputPath:'dist/',
                        useRelativePath:true
                    }
                    }
                ]
            },
        
            {
                test: /\.css$/,
                use: ["style-loader","css-loader"]
              },
              
            
          
            {test:/\.vue$/,use:["vue-loader"]},
            {test:/\.(jpg|jpeg|gif|bmp|png)/,use:"url-loader"}
        ]
    },
    plugins:[
        new VueLoaderPlugin(),
    ]
}