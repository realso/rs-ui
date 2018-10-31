module.exports = {
    plugins: [
        require('precss'),
        require('autoprefixer'),
      require('postcss-bem')({
        defaultNamespace: undefined, // default namespace to use, none by default
        style: 'suit', // suit or bem, suit by default,
        separators: {
            descendent: '__' // overwrite any default separator for chosen style
        },
        shortcuts: {
            utility: 'util' //override at-rule name
        }
     }) 
    ]
  }  
  
