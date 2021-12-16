// function MyObject(){
//     var aaa = 10;
//     function MyObject2 (){
//         return false;
//     }
//     this.publicmethod = function (){
//         aaa++;
//         return MyObject2();
//     };
// }

// function huode(name){
//     this.getname = function(){
//         return name;
//     };
//     this.setvalue = function(value){
//         return value;
//     };
// };
// // 声明person 通过new
// var person = new huode("HZM");
// console.log(person.getname());
// console.log(person.setvalue('hzl'))
// 在私有作用域中定义私有变量或是函数
// (function(){
//     // 私有变量和私有函数
//     var bbb = 10;
//     function privateFunction(){
//         return false;
//     }
//     // 构造函数
//     MyObject = function(){
//     };
//     // 公有/特权方法
//     MyObject.prototype.publicmethod = function(){
//         bbb++;
//         return privateFunction();
//     }
// })();

(function(){
    var name1 = "";
    person1 = function(value1){
        name1 = value1;
    };
    person1.prototype.getname1 = function(){
        return name1;
    };
    person1.prototype.setname1 = function(value1){
        name1 = value1;
    };
})();
var people = new person1('GKd');
console.log(people.getname1());
// 模块模式
var application = function(){
    // 定义私有变量和方法
    var components = new Array();
    components.push(new basecomponents());
    // 返回公共方法与属性
    return {
        getcomponentcount : function(){
            return components.length;
        },
        registercomponent :function(component){
            if(typeof component == "object"){
                components.push(component);
            }
        }
    }
}();