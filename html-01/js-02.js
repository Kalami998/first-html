
// 工厂模式来创建特定类型的对象
function person(name, age, job) {
    // Object o 是大写
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.descrip = function () {
        console.log(o.name)
    }
    return o;
};

//  构造函数模式可以知道一个对象的类型
function People(firstname, lastname, age, hobby) {
    // 将参数传递给属性
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.hobby = hobby;
    this.say = function () {
        console.log(this.firstname + this.lastname)
    }
}
//调用已定义的类型对象创建实例
var person1 = person('WHO', '21', 'sleeping');
console.log(person1);
var person2 = new People('WHO', 'WZL', '21', 'sleeping');
console.log(person2)
// instanceof用来检测对象类型
console.log(person2 instanceof Object);
// 调用构造函数模式中的函数方法
person2.say();
// 定义一个函数类型 将其call为people实例或者理解为在另一个对象的作用域中调用
var o = new Object();
People.call(o, 'SOA', 'SDE', '21', 'studying');
o.say();
// 原型模式 好处是可以让所有对象实例共享它所包含的属性和方法
function yuanxing(name, age) {
    yuanxing.prototype.name = 'hzm';
    yuanxing.prototype.age = '21'
}
var person3 = new yuanxing();
var person4 = new yuanxing();
console.log(person3.name == person4.name);
console.log('检查isprototypeof');
// 但可以通过 isPrototypeOf()方法来确定对象之间是否存在这种关系
console.log(yuanxing.prototype.isPrototypeOf(person3));
console.log(yuanxing.prototype.isPrototypeOf(person2));
console.log('使用Object.getOwnPrototypeOf');
// Object.getPrototypeOf()返回的对象实际就是这个对象的原型的值
console.log(Object.getPrototypeOf(person3) == yuanxing.prototype);
person3.name = 'hzl';
console.log(Object.getPrototypeOf(person3).name);
console.log('使用hasOwnProperty');
// 只有当实例重写属性时才会返回true
console.log(person3.hasOwnProperty("name"));
console.log(person3.hasOwnProperty("age"));
// name 属性要么是直接在对象上访问到的，要么是通过原型访问到，只要检测到都会返回true
console.log('in的单独使用')
console.log('name' in person3);
// 要取得对象上所有可枚举的实例属性，可以使用 ECMAScript 5 的 Object.keys()方法。这个方法接收一个对象作为参数，返回一个包含所有可枚举属性的字符串数组。例如：
var keys = Object.keys(yuanxing.prototype);
console.log(keys)
// 如果你想要得到所有实例属性，无论它是否可枚举，都可以使用 Object.getOwnPropertyNames()
var keyss = Object.getOwnPropertyNames(yuanxing.prototype);
console.log(keyss);
// 更简洁的原型函数
function mana() { }
mana.prototype = {
    name: 'awsl',
    age: 88,
    like: 'LOL',
    sayhello: function () {
        alert('hi,how are you?')
    }
};
// 常见的自定义模式:组合使用构造函数模式和原型模式 构造函数模式用于定义实 例属性，而原型模式用于定义方法和共享的属性
function pop(name, age, job) {
    this.name = name,
        this.age = age,
        this.job = job,
        this.friends = ["nmx", "zzz"]
};
pop.prototype = {
    constructor: pop,
    sayname: function () {
        console.log(this.name)
    }
};
var person5 = new pop('lfy', '23', 'it');
var person6 = new pop('llg', '26', 'cs');
person5.friends.push('zsc')
console.log(person5);
console.log(person6);
//  继承
// 给原型添加方法的代码一定要放在替换原型的语句之后
function SuperType() {
    this.property = true;
};
SuperType.prototype.getPropertyValue = function () {
    return this.property
}
function Subtype() {
    this.property = false;
}
// 新定义的函数原型指向上一函数的原型
Subtype.prototype = new SuperType();
// 添加新方法
Subtype.prototype.getSubValue = function () {
    return this.subProperty
}
// 重写超类型中的方法 从子类型中重写原型中的方法 不能使用对象字面量创建原型方法。因为这样做就会重写原型链
Subtype.prototype.getSuperValue = function () {
    return false;
}
var instance = new Subtype();
console.log(instance.getPropertyValue())
// 利用call或者apply()实现原型借调
function Different() {
    // 继承了subtype
    SuperType.call(this);
}
var Different1 = new Different();
console.log(Different1.property);
//  原型式继承 object.creat()
var tonghua = {
    name: "wyh",
    like: "hateme"
};
// Object.create带一个参数
// var ruguo = Object.create(tonghua);
// ruguo.name="ta";
// 带俩个参数时
var ruguo = Object.create(tonghua, {
    name: {
        value: 'ta'
    }
})
console.log(tonghua.name);
console.log(ruguo.name)
// 寄生模式继承 
console.log('寄生')
// 先定义一个对象
var forget = {
    name: "who",
    age: '21'
};
function createone(original) {
    var clone = Object(original);
    clone.saysomething = function () {
        console.log('something will be ok')
    };
    return clone;
};
var someone = createone(forget);
someone.saysomething()
// 函数表达式
var sayHi;
var condition = true;
if (condition) {
    sayHi = function () {
        console.log("Hi!");
    };
} else {
    sayHi = function () {
        alert("Yo!");
    };
}
// 递归函数
function factorial(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * factorial(num - 1)
    }
}
console.log(factorial(6))
// 我们知道，arguments.callee 是一个指向正在执行的函数的指针，因此可以用它来实现对函数的递归调用
function factorial2(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * arguments.callee(num - 1)
    }
}
console.log(factorial2(8));
// 也使用命名函数表达式来达成相同的结果 还可以通过脚本访问改函数
var factorial3 = (function f(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * f(num - 1);
    }
});
console.log(factorial3(5));
// 这样就能够解除对 DOM 对象的引用，顺利地减少其引用数，确保正常回收其占用的内存
function assignHandler(){
    var element = document.getElementById("someElement");
    var id = element.id
    element.onclick =function(){
        alert(id);
    };
    element = null
}