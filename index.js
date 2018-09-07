var postcss = require('postcss')
var brands = require('brand-colors')

module.exports = postcss.plugin('postcss-brand-colors', function () {
  return function (css) {
    css.replaceValues(/([\d\w-]+)-color/g, { fast: '-color' },
      function (origin, name) {
        var color = brands.find(name)
        if (color.length) {
          return color[0].color
        } else {
          return origin
        }
      })
  }
})
