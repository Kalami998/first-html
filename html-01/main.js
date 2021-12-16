// var fs = require("fs");
// fs.readFile('input.txt', function (err, data) {
//     if (err) return console.error(err);
//     console.log(data.toString());
// });

// console.log("程序执行结束!");
'use strict';
// 这里使用的是相对路径，因为main.js与server.js在同一文件夹下,所以'./server'。如果只写模块名：即var greet = require('hello');
// 则Node会依次在内置模块、全局模块和当前模块下查找hello.js，你很可能会得到个错误，遇到这个错误，你要检查：
// 模块名是否写对了；
// 模块文件是否存在；
// 相对路径是否写对了;
const a = require('./server'); 
var b = "hzm";
var c = -8;
a.greet1(b);//调用server模块 输出结果
a.miss(c);
console.log(a.n);
// const , let ,var 区别
// const 定义时必须赋值如：const a = 8。若不赋值则会报错 ，其次const定义的变量，其值将不能在修改
// var 定义时可以不赋值，之后其值将不能再修改
// let 定义的是块级作用域，如在函数内部定义，对函数外部没有任何影响。