var extend = require('extend');
var babel = require('babel-core');

var CONFIG = {
    "presets": ["env"]
    // ,"plugins": ["transform-runtime"] /* for add polyfill by modules  */
}

module.exports = function(content, file, options){
    return babel.transform( content, extend( CONFIG, options)).code;
}