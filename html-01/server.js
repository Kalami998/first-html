// var http=require('http');
// http.createServer(function(request,response){
//     //发送HTTP头部
//     //HTTP状态值:200 ；ok
//     //内容类型:text/plain
//     response.writeHead(200,{'Content-Type':'text/plain'});
//     //发送响应数据 " Hello World"
//     response.end('Hello World\n');
// }).listen(8888);
// //终端打印如下信息
// console.log('Server running at http://127.0.0.1:8888/');
// console.log('为什么这样子');
'use strict';
var s = 'hello!';
function greet(name) {
    console.log(s+','+name+'!');
    console.log('Shape of you.')
}
function miss(dff) {
    if (dff < -5){
        dff+=5;
    }
    console.log(dff+2);
}
var n=9
// 将函数greet作为模块输出
module.exports = {
    greet1 : greet ,
    miss : miss,
    n : n
}
//输出多个函数的格式，也可以是 exports.greet1=greet,exports.miss=miss,将函数miss，greet()赋作exports的属性,供其他文件调用