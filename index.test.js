var postcss = require('postcss');

var plugin = require('./');

function run(input, output) {
    return postcss([ plugin ]).process(input).then(result => {
        expect(result.css).toEqual(output);
        expect(result.warnings().length).toBe(0);
    });
}

it('does something', () => {
    return run('a { color: twitter-color }', 'a { color: #55acee }');
});

it('does something', () => {
    return run('a { color: nobody-color }', 'a { color: nobody-color }');
});

it('does something', () => {
    return run('a { color: paypal-dark-2-color }', 'a { color: #3b7bbf }');
});

it('does something', () => {
    return run('a { background: linear-gradient(ebay-color, ebay-2-color) }',
               'a { background: linear-gradient(#e53238, #0064d2) }');
});
