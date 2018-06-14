//ES6 允许直接写入变量和函数，作为对象的属性和方法。
// function f(x, y) {
//     return {x, y};  //返回一个对象，变量x，y作为对象的两个属性
// }
// // 等同于
// //   function f(x, y) {
// //     return {x: x, y: y};
// //   }
// f(1, 2) // Object {x: 1, y: 2}
// console.log(f(1,2));


//例子
// let birth = '2000/01/01';
// const Person = {
//     name:'张三',
//     birth,  //等同于birth: birth
//     hello(){
//         console.log("我的名字是：" + this.name);
//     }
// };
// Person.hello();

//用途：用于函数返回值
// function getPoint() {
//     const x = 1;
//     const y = 10;
//     return {x, y};
//   }
//   getPoint();
//   console.log(getPoint());

//CommonJS 模块输出一组变量，就非常合适使用简洁写法
// let ms = {};
// function getItem (key) {
//   return key in ms ? ms[key] : null;
// }
// function setItem (key, value) {
//   ms[key] = value;
// }
// function clear () {
//   ms = {};
// }
// module.exports = { getItem, setItem, clear };
// // 等同于
// module.exports = {
//   getItem: getItem,
//   setItem: setItem,
//   clear: clear
// };

// //如果某个方法的值是一个 Generator 函数，前面需要加上星号。

// const obj = {
//     * m() {
//       yield 'hello world';
//     }
//   };
// //JavaScript 定义对象的属性，有两种方法
// // 方法一  标识符
// obj.foo = true;

// // 方法二  表达式
// obj['a' + 'bc'] = 123;

// //es6允许表达式放到大括号里
// let propKey = 'foo';

// let obj = {
//   [propKey]: true,
//   ['a' + 'bc']: 123
// };

// //实例
// let lastWord = 'last word';

// const a = {
//   'first word': 'hello',
//   [lastWord]: 'world'  //表达式
// };

// a['first word'] // "hello"
// a[lastWord] // "world"
// a['last word'] // "world"

// //属性名表达式与简洁表示法，不能同时使用，会报错。
// // 报错
// const foo = 'bar';
// const bar = 'abc';
// const baz = { [foo] };

// // 正确
// const foo = 'bar';
// const baz = { [foo]: 'abc'};

// console.log(1 / 0);  //infinity
// console.log(0 !== 0 || 1 / 0 === 1 / -0);

//Object.assign();  源对象（source）的所有可枚举属性，复制到目标对象（target）
// const target = { a: 1 };

// const source1 = { b: 2 };
// const source2 = { c: 3 };

// Object.assign(target, source1, source2);
// target // {a:1, b:2, c:3}

// //如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性。

// const target = { a: 1, b: 1 };

// const source1 = { b: 2, c: 2 };
// const source2 = { c: 3 };

// Object.assign(target, source1, source2);
// target // {a:1, b:2, c:3}

// //只有一个参数
// const obj = {a: 1};
// Object.assign(obj) === obj // true
//Object.assign(undefined) // 报错
//Object.assign(null) // 报错

//结果只有字符串合入目标对象（以字符数组的形式），数值和布尔值都会被忽略。这是因为只有字符串的包装对象，会产生可枚举属性
// const v1 = 'abc';
// const v2 = true;
// const v3 = 10;

// const obj = Object.assign({}, v1, v2, v3);
// console.log(obj); // { "0": "a", "1": "b", "2": "c" }

//Object.assign拷贝的属性是有限制的，只拷贝源对象的自身属性（不拷贝继承属性），也不拷贝不可枚举的属性（enumerable: false）。
//Object.assign方法实行的是浅拷贝，而不是深拷贝  

//assign对数组的处理：
// Object.assign([1, 2, 3], [4, 5])
// [4, 5, 3]

///Object.assign 用途
//http://es6.ruanyifeng.com/#docs/object

//克隆对象
// function clone(origin) {
//     let originProto = Object.getPrototypeOf(origin);
//     return Object.assign(Object.create(originProto), origin);
//   }

// 合并多个对象

// 将多个对象合并到某个对象。

// const merge =
//   (target, ...sources) => Object.assign(target, ...sources);
// // 如果希望合并后返回一个新对象，可以改写上面函数，对一个空对象合并。

// const merge =
//   (...sources) => Object.assign({}, ...sources);


//Object.getOwnPropertyDescriptor(target1, 'foo')
//主要是为了解决Object.assign()无法正确拷贝get属性和set属性的问题。
//有问题的拷贝
// const source = {
//   set foo(value) {
//     console.log(value);
//   }
// };
// const target1 = {};
// Object.assign(target1, source);
// Object.getOwnPropertyDescriptor(target1, 'foo')
// // { value: undefined,  //有问题
// //   writable: true,
// //   enumerable: true,
// //   configurable: true }

//Object.defineProperties方法，就可以实现正确拷贝。

// const source = {
//   set foo(value) {
//     console.log(value);
//   }
// };
// const target2 = {};
// Object.defineProperties(target2, Object.getOwnPropertyDescriptors(source));
// Object.getOwnPropertyDescriptor(target2, 'foo')
// // { get: undefined,
// //   set: [Function: set foo],
// //   enumerable: true,
// //   configurable: true }
//合并逻辑简写？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？
// const shallowMerge = (target, source) => Object.defineProperties(
//     target,
//     Object.getOwnPropertyDescriptors(source)
//   );

//Symbol类型
// let sym = Symbol('My symbol');

// String(sym) // 'Symbol(My symbol)'
// sym.toString() // 'Symbol(My symbol)'
// console.log(String(sym));
// console.log(sym.toString());

// let mySymbol = Symbol();

// // 第一种写法
// let a = {};
// a[mySymbol] = 'Hello!';

// // 第二种写法
// let a = {
//   [mySymbol]: 'Hello!'
// };

// // 第三种写法
// let a = {};
// Object.defineProperty(a, mySymbol, { value: 'Hello!' });

// // 以上写法都得到同样结果
// a[mySymbol] // "Hello!"

// let s = Symbol();

// let obj = {
//   [s]: function (arg) { 
//       //... 
//    }
// };

// obj[s](123);


















