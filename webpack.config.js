const path = require('path');
const autoprefixer = require('autoprefixer')
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:'./index.js',
    mode:'development',
    output:{
        filename:'indxBundle.js',
        path: path.resolve(__dirname,'./dist')
    },
    module:{
        rules:[
            {
                test:/\.(jsx|js)$/,
                use:['babel-loader'],
                exclude:'/node_modules/'
            },
            {
                test: /\.(sa|sc|c)ss$/i,
                use: [
                  {
                    // Adds CSS to the DOM by injecting a `<style>` tag
                    loader: 'style-loader'
                  },
                  {
                    // Interprets `@import` and `url()` like `import/require()` and will resolve them
                    loader: 'css-loader'
                  },
                  {
                    // Loader for webpack to process CSS with PostCSS
                    loader: 'postcss-loader',
                    options: {
                      postcssOptions: {
                        plugins: [
                          autoprefixer
                        ]
                      }
                    }
                  },
                  {
                    // Loads a SASS/SCSS file and compiles it to CSS
                    loader: 'sass-loader'
                  }
                ]
              }
        ]
    },
    devServer:{
        port:5000,
        static:{
            directory: path.join(__dirname, 'public')
        },
        open:true,
        hot:true,
        liveReload:true,
    },
    target:'web',
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname,'public','index.html'),
        })
    ],
    resolve: {
      extensions: ['*', '.js', '.jsx'],
    },
}

