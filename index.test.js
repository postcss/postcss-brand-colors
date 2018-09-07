var postcss = require('postcss')

var plugin = require('./')

function run (input, output) {
  return postcss([plugin]).process(input, { from: undefined })
    .then(function (result) {
      expect(result.css).toEqual(output)
      expect(result.warnings()).toHaveLength(0)
    })
}

it('replaces brand color', function () {
  return run('a { color: twitter-color }', 'a { color: #1da1f2 }')
})

it('ignores unknown colors', function () {
  return run('a { color: nobody-color }', 'a { color: nobody-color }')
})

it('supports extra colors', function () {
  return run('a { color: paypal-dark-2-color }', 'a { color: #3b7bbf }')
})

it('supports functions', function () {
  return run(
    'a { background: linear-gradient(ebay-color, ebay-2-color) }',
    'a { background: linear-gradient(#e53238, #0064d2) }'
  )
})
