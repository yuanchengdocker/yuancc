var fs = require('fs');
var babelConfig = JSON.parse(fs.readFileSync('../.babelrc'));
require('babel-register')(babelConfig);
// require("babel-polyfill"); //补完babel支持es6的拓展包

//babel-polyfill是一股脑把全部都给添加到了js文件中，而在babelrc中添加
//transform-runtime将会判断你哪些需要加载的，有选择的加载

