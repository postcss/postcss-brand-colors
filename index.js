var brands = require('brand-colors').getAll();

var colors = { };
for ( var i = 0; i < brands.length; i++ ) {
    colors[ brands[i].name ] = brands[i].color;
}

module.exports = function (css) {
    css.replaceValues(/([\d\w-]+)-color/g, { fast: '-color' },
        function (all, name) {
            var color = colors[name];
            if ( color ) {
                return color;
            } else {
                return all;
            }
        });
};
