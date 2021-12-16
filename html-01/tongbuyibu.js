'use strict';
// 用require引入nodejs中的fs模板(文件系统模板，负责读写文件)，赋予定义的变量fs
var fs = require('fs');
// fs.readFile('input.txt','utf-8',function(err,data){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(data);
//     }
    // 异步读取时，传入的回调函数接收两个参数，当正常读取时，err参数为null，data参数为读取到的String。当读取发生错误时，err参数代表一个错误对象，data为undefined。这也是Node.js标准的回调函数：第一个参数代表错误信息，第二个参数代表结果。后面我们还会经常编写这种回调函数。
// 由于err是否为null就是判断是否出错的标志，所以通常的判断逻辑总是：
// if (err) {
//     // 出错了
// } else {
//     // 正常
// }
// });
// 异步读取
// 读取图片没有设置格式则以二进制读取文件,若以utf-8读取输出的是乱码
// fs.readFile('logo.jpg',function(err,data){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(data);
//         console.log(data.length + "字节")
        // 回调函数的data参数为返回的一个Buffer对象。在Node.js中，Buffer对象就是一个包含零个或任意个字节的数组,(就像是图片每一个像素灰度值的组合)（注意和Array不同）。Buffer对象可以和String作转换
        // 把一个Buffer对象转换成‘utf-8’的String：
        // var text = data.toString('utf-8');
        // console.log(text);
        // 当然也可以把string转化为buffer
//         var buf = Buffer.from(text,'utf-8');
//         console.log(buf);
//         console.log('buf');
//     };
// })
// 利用fs同步读取文件: fs也提供相应的同步读取函数。同步读取的函数和异步函数相比，多了一个Sync后缀，并且不接收回调函数，函数直接返回结果
//  如果同步读取文件发生错误，则需要用try...catch捕获该错误：
// try {
//     var data = fs.readFileSync('input.txt', 'utf-8');
//     console.log(data);
// } catch (err) {
//     // 出错了
// } 
// var off = fs.readFileSync('lpl.ico','utf-8');
//  console.log(off);

// writeFile接受三参数 （文件名，数据，回调函数），如果传入的参数是Buffer，则写入的是二进制文件
// 写入文件会将文件清空 再写入数据参数代表的值 
// var tat = "将数据写入文件是通过fs.writefile()";
// fs.writeFile('input.txt',tat,function(err){
//     // 设立回调函数只有一个err参数，只需要告知写入成功与否
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('ok');
//     }
// });
// // 验证是否写入成功，以utf-8格式读取文件
// fs.readFile('input.txt','utf-8',function(err,data){
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });
// 写入文件的同步格式
// var lai = "写入文件的同步格式:writeFilesync"
// fs.writeFileSync('input.txt',lai)
// stat 如果我们要获取文件大小，创建时间等信息，可以使用fs.stat()，它返回一个Stat对象，能告诉我们文件或目录的详细信息：
// fs.stat('input.txt',function(err,stam){
//     if(err){
//         console.log('err');
//     } else {
//         // 回调函数第一个返回的是错误信息，第二个返回的文件
//         // 对stam调用isFile()判断是否返回成功(返回true or false)
//         console.log('isFile:'+stam.isFile());
//         // 是否是目录
//         console.log('isDirectory:'+stam.isDirectory());
//         if(stam.isFile()) {
//             // 文件大小
//             console.log('size:'+stam.size);
//             // 创建时间,date对象
//             console.log('birth time:'+stam.birthtime);
//             //修改时间，date对象
//             console.log('modified:'+stam.mtime);
//         }
//     }
// });
// stat同步获取文件信息
 var abc = fs.statSync('input.txt');
 console.log(abc.isFile());
 console.log(abc.isDirectory());
 if (abc.isFile()) {
     console.log("size:"+abc.size);
     console.log("birth time:"+abc.birthtime);
     console.log("modified time:"+abc.mtime);
 };
//  由于Node环境执行的JavaScript代码是服务器端代码，所以，绝大部分需要在服务器运行期反复执行业务逻辑的代码，必须使用异步代码，否则，同步代码在执行时期，服务器将停止响应，因为JavaScript只有一个执行线程。

// 服务器启动时如果需要读取配置文件，或者结束时需要写入到状态文件时，可以使用同步代码，因为这些代码只在启动和结束时执行一次，不影响服务器正常运行时的异步执行。