//引入events模块
var events =  require('events');
//创建eventEmitter对象
var eventEmitter = new events.EventEmitter();
//创建事件处理程序
var connectHandler = function connected(){
    console.log('连接成功.');

    //触发 data_receiver 事件
    eventEmitter.emit('data_received');
}
eventEmitter.on('connection',connectHandler);
eventEmitter.on('data_received',function() {
    console.log('数据接收成功')
});
eventEmitter.emit('connection');
console.log("程序执行完毕");
// 当数组或对象中有函数时，在执行JSON.stringify() 函数前将函数转换为字符串来避免发生问题
var obj={"name":"Runoob","alexa":function(){return 10000;},"site":"www.runoob.com"};
// 用tostring方法将alexa为函数的值转化为字符串
obj.alexa= obj.alexa.toString();
console.log(typeof(obj.alexa));
// stringify将其转化为字符串
var myjson = JSON.stringify(obj);
console.log(obj)
console.log(typeof(myjson))
// 我们可以使用 JSON.parse() 方法将数据转换为 JavaScript 对象
// var obh =JSON.parse('obj');
// console.log(obh);
// eval() 函数使用的是 JavaScript 编译器，可解析 JSON 文本，然后生成 JavaScript 对象。必须把文本包围在括号中
// var obk = eval("("+obh+")");
// console.log(obk)
console.log(JSON.parse(myjson));
console.log(typeof(obj.alexa));
var a = 5;
var c = function(){
    return true
}
console.log(c());
console.log(typeof(obj.alexa));
var b = function() {
    return 8888
};
console.log(b())
var age = 30;
// console.log(window.age)
function get_cooki() {
    
}