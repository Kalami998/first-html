'use strict';

var fs = require('fs');

// 打开一个流:
// var rs = fs.createReadStream('input.txt', 'utf-8');
// 在Node.js中，流也是一个对象，我们只需要响应流的事件就可以了：
// data事件表示流的数据已经可以读取了，end事件表示这个流已经到末尾了，
// 没有数据可以读取了，error事件表示出错了。
// rs.on('data', function (chunk) {
//     console.log('DATA:')
//     console.log(chunk);
// });

// rs.on('end', function () {
//     console.log('END');
// });

// rs.on('error', function (err) {
//     console.log('ERROR: ' + err);
// });
// 要注意，data事件可能会有多次，每次传递的chunk是流的一部分数据。
// 要以流的形式写入文件，只需要不断调用write()方法，最后以end()结束：
// createwritestream 使用
var wsl = fs.createWriteStream('sample.txt','utf-8');
wsl.write("使用stream写入文本数据……\n");
wsl.write('END.');
wsl.end();
var ws2 = fs.createWriteStream('output2.txt');
ws2.write(new Buffer('使用stream写入二进制数据……\n','utf-8'));
ws2.write(new Buffer('END.','utf-8'));
ws2.end();