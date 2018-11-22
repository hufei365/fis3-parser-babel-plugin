# fis3-parser-babeles6

This plugin is used to transform es6+ code to es5 code.

# install

``` 
npm install --save fis3-parser-babeles6
```

# config

``` javascript
fis.match('**.es6', {
    parser: fis.plugin( 'babeles6' , {
        /* the config for babel */
    } )
})
```

about babel config and please view the [document](https://babeljs.io/docs/en/6.26.3/babel-core#options)