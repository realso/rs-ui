// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    "precss": {},
    "autoprefixer": {},
    // to edit target browsers: use "browserslist" field in package.json
    "postcss-salad": {
      options : {
        features: {
          "bem": true
        }
      }
    },
    "postcss-bem": {
      options : {
        defaultNamespace: undefined, // default namespace to use, none by default
        style: 'suit', // suit or bem, suit by default,
        separators: {
            descendent: '__' // overwrite any default separator for chosen style
        },
        shortcuts: {
            utility: 'util' //override at-rule name
        }
      }
    }
  }
}
