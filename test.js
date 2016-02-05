import postcss from 'postcss';
import test    from 'ava';

import plugin from './';

function run(t, input, output, opts = { }) {
    return postcss([ plugin(opts) ]).process(input)
        .then( result => {
            t.same(result.css, output);
            t.same(result.warnings().length, 0);
        });
}

test('does something', t => {
    return run(t, 'a { color: twitter-color }', 'a { color: #55acee }');
});

test('does something', t => {
    return run(t, 'a { color: nobody-color }', 'a { color: nobody-color }');
});

test('does something', t => {
    return run(t, 'a { color: paypal-dark-2-color }', 'a { color: #3b7bbf }');
});

test('does something', t => {
    return run(t, 'a { background: linear-gradient(ebay-color, ebay-2-color) }',
                  'a { background: linear-gradient(#e53238, #0064d2) }');
});
