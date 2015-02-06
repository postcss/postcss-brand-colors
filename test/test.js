var postcss = require('postcss');
var expect  = require('chai').expect;

var colors = require('../');

var test = function (input, output) {
    expect(postcss(colors).process(input).css).to.eql(output);
};

describe('postcss-brand-colors', function () {

});
