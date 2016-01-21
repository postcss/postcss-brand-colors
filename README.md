# PostCSS Brand Colors [![Build Status][ci-img]][ci]

<img align="right" width="135" height="95"
     title="Philosopher’s stone, logo of PostCSS"
     src="http://postcss.github.io/postcss/logo-leftp.svg">

[PostCSS] plugin to insert branding colors of all the major companies.

It takes colors from [brand-colors] package.

[brand-colors]: https://github.com/reimertz/brand-colors
[PostCSS]:      https://github.com/postcss/postcss
[ci-img]:       https://travis-ci.org/postcss/postcss-brand-colors.svg
[ci]:           https://travis-ci.org/postcss/postcss-brand-colors

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

## Usage

```js
postcss([ require('postcss-brand-colors') ])
```

See [PostCSS] docs for examples for your environment.
