var postcss = require('postcss');

var plugin = require('./');

function run(input, output) {
    return postcss([ plugin ]).process(input).then(result => {
        expect(result.css).toEqual(output);
        expect(result.warnings().length).toBe(0);
    });
}

it('replaces brand color', () => {
    return run('a { color: twitter-color }', 'a { color: #1da1f2 }');
});

it('ignores unknown colors', () => {
    return run('a { color: nobody-color }', 'a { color: nobody-color }');
});

it('supports extra colors', () => {
    return run('a { color: paypal-dark-2-color }', 'a { color: #3b7bbf }');
});

it('supports functions', () => {
    return run(
        'a { background: linear-gradient(ebay-color, ebay-2-color) }',
        'a { background: linear-gradient(#e53238, #0064d2) }'
    );
});
