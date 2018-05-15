module.exports = {

  // define entry point
  entry: `./src/script-1.js`,

  // define ouput point
  output:{
    path: `${__dirname}/dist`,
    filename: `bundle.js`
  },

  // define module and loaders
  module:{
    loaders:[
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query:{
          presets:['es2015']
        }
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  }

};
