# PostCSS Brand Colors [![Build Status](https://travis-ci.org/postcss/postcss-brand-colors.svg)](https://travis-ci.org/postcss/postcss-brand-colors)

<img align="right" width="135" height="95" src="http://postcss.github.io/postcss/logo-leftp.png" title="Philosopher’s stone, logo of PostCSS">

[PostCSS] plugin to insert branding colors of all the major companies.

It takes colors from [brand-colors] package.

[brand-colors]: https://github.com/reimertz/brand-colors
[PostCSS]:      https://github.com/postcss/postcss

```css
.twitter-button {
    background: twitter-color;
}
```

```css
.twitter-button {
    background: #55acee;
}
```

## Install
```js
npm install postcss-brand-colors
```

## Usage
```js
postcss([ require('postcss-brand-colors')])
```

See [PostCSS] docs for examples for your environment.
