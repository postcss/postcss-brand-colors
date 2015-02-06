var postcss = require('postcss');
var expect  = require('chai').expect;

var colors = require('../');

var test = function (input, output) {
    expect(postcss(colors).process(input).css).to.eql(output);
};

describe('postcss-brand-colors', function () {

    it('replaces brands to colors', function () {
        test('a { color: twitter-color }', 'a { color: #55acee }');
    });

    it('knows brands with difficult name', function () {
        test('a { color: paypal-dark-2-color }', 'a { color: #3b7bbf }');
    });

    it('replaces many colors in one value', function () {
        test('a { background: linear-gradient(ebay-color, ebay-2-color) }',
             'a { background: linear-gradient(#e53238, #0064d2) }');
    });

});
