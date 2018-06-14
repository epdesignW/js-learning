//函数参数的默认值
// function test(x,y="world"){
//     console.log(x,y);
// }
// test('hello');
// test('hello','China');
// test('hello','');


//参数默认值是惰性求值的。
// let x = 99;
// function foo(p = x + 1) {
//   console.log(p);
// }
// foo() // 100
// x = 100;
// foo() // 101


//与结构赋值配合使用,无需运行
// function fetch(url, { body = '', method = 'GET', headers = {} }) {
//     console.log(method);
//   }
//   fetch('http://example.com', {})
//   // "GET"
//   fetch('http://example.com')  //报错
//   function fetch(url, { body = '', method = 'GET', headers = {} }= {}) { //双重默认值
//     console.log(method);
//   }
//   fetch('http://example.com') 



//练习￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥
// 写法一
// function m1({x = 0, y = 0} = {}) { //默认值
//     return [x, y];
//   }
  
//   // 写法二
//   function m2({x, y} = { x: 0, y: 0 }) {
//     return [x, y];
//   }

  //上面两种写法都对函数的参数设定了默认值，区别是写法一函数参数的默认值是空对象，但是设置了对象解构赋值的默认值；写法二函数参数的默认值是一个有具体属性的对象，但是没有设置对象解构赋值的默认值。
//理解万岁*********************************
  // 函数没有参数的情况
// m1() // [0, 0]
// m2() // [0, 0]

// // x 和 y 都有值的情况
// m1({x: 3, y: 8}) // [3, 8]
// m2({x: 3, y: 8}) // [3, 8]

// // x 有值，y 无值的情况
// m1({x: 3}) // [3, 0]
// m2({x: 3}) // [3, undefined]

// // x 和 y 都无值的情况
// m1({}) // [0, 0];
// m2({}) // [undefined, undefined]

// m1({z: 3}) // [0, 0]
// m2({z: 3}) // [undefined, undefined]
//end $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$


//参数的默认值设置
// 例一
// function f(x = 1, y) {
//     return [x, y];
//   }
  
//   f() // [1, undefined]
//   f(2) // [2, undefined])
//   f(, 1) // 报错     如果传入undefined，将触发该参数等于默认值, null不会触发
//   f(undefined, 1) // [1, 1]

//   //length失真
//   (function(...args) {}).length // 0
//   //如果设置了默认值的参数不是尾参数，那么length属性也不再计入后面的参数了
//   (function (a = 0, b, c) {}).length // 0
//   (function (a, b = 1, c) {}).length // 1   

//作用域
// var x = 1;
// function f(x,y=x){
//     console.log(y);
// }
// f(2);  //2
// f();   //undefined


// let x = 1;
// function f(y=x){
//     let x = 2;  //函数调用时，函数体内部的局部变量x影响不到默认值变量x。
//     console.log(y);
// }
// f(3);   //3
// f();    //1



// let foo = 'outer';
// function bar(func = () => foo) {
//   //let foo = 'inner';    //最先找内层的，找不到再找外层的
//   console.log(func());
// }
// bar(); // outer    *************** 与参考书不一致？？？？？？？ **************



// var x = 1;
// function foo(x, y = function() { x = 2; }) {  //有默认值，形成单独作用域
//   var x = 3;
//   y();
//   console.log(x);
// }
// foo() // 3
// x // 1



// var x = 1;
// function foo(x, y = function() { x = 2; }) {
//   x = 3;  //var去掉
//   y();
//   console.log(x);
// }

// foo() // 2
// x // 1


//函数参数默认值 用途  应用  参数是函数
// function throwIfMissing() {
//     throw new Error('Missing parameter');
//   }
  
//   function foo(mustBeProvided = throwIfMissing()) {
//     return mustBeProvided;
//   }
//   foo()

//   //应用2  可以将参数默认值设为undefined，表明这个参数是可以省略的。

// function foo(optional = undefined) { 
//     //...
//  }




//rest参数
// function add(...values) {
//     let sum = 0;
//     for (var val of values) {
//       sum += val;
//     }
//     return sum;
//   }
//   let arr1 = [2,5,3];
//   const res = add(...arr1) // 10
//   console.log(res);

//利用 rest 参数改写数组push方法的例子
// function push(array, ...items) {  // rest 参数之后不能再有其他参数（即只能是最后一个参数），否则会报错
//     items.forEach(function(item) {
//       array.push(item);
//       console.log(item);
//     });
//   }
//   var a = [];
//   push(a, 1, 2, 3)
//   console.log(a);





//严格模式  参数使用了默认值、解构赋值、或者扩展运算符，就不能显式指定严格模式。
// 报错
// function doSomething(a, b = a) {
//     'use strict';
//     // code
//   }
  
//   // 报错
//   const doSomething = function ({a, b}) {
//     'use strict';
//     // code
//   };
  
//   // 报错
//   const doSomething = (...a) => {
//     'use strict';
//     // code
//   };
  
//   const obj = {
//     // 报错
//     doSomething({a, b}) {
//       'use strict';
//       // code
//     }
//   };

//解决方法 => 两种方法可以规避这种限制
//全局定义严格模式
// 'use strict';
// function doSomething(a, b = a) {
//   // code
// }
// 把函数包在一个无参数立即执行函数里面
// function(){ ... }();
//const doSomething = (function(){ ... }());
// const doSomething = (function () {
//     'use strict';
//     return function(value = 42) {
//       return value;
//     };
//   }());
  


//函数的name属性
// var f = function () {};
// // ES5
// f.name // ""
// // ES6
// f.name // "f"



//箭头函数
// window.onload = () => {
//     alert("onload");
// }

// //如果箭头函数 ***不需要参数或需要*****多个参数，就使用一个圆括号代表参数部分。
// var f = () => 5;
// var sum = (num1, num2) => num1 + num2;

// //箭头函数返回对象方法
// // 报错
// let getTempItem = id => { id: id, name: "Temp" };
// // 不报错
// let getTempItem = id => ({ id: id, name: "Temp" });

// //箭头函数可以与变量解构结合使用
// const full = ({ first, last }) => first + ' ' + last;
// // 等同于
// function full(person) {
//   return person.first + ' ' + person.last;
// }
// //箭头函数使得表达更加简洁
// const isEven = n => n % 2 == 0;
// const square = n => n * n;

//用途：箭头函数的一个用处是简化回调函数（被当做参数使用的函数）
// 正常函数写法
// [1,2,3].map(function (x) {
//     return x * x;
//   });
//   // 箭头函数写法
//   [1,2,3].map(x => x * x);



// // 正常函数写法
// var result = values.sort(function (a, b) {
//     return a - b;
//   });
//   // 箭头函数写法
//   var result = values.sort((a, b) => a - b);


// //rest参数与箭头函数结合的例子
// const numbers = (...nums) => nums;
// numbers(1, 2, 3, 4, 5)
// // [1,2,3,4,5]
// const headAndTail = (head, ...tail) => [head, tail];
// headAndTail(1, 2, 3, 4, 5)
// // [1,[2,3,4,5]]

// function foo() {
//     setTimeout(() => {
//       console.log('id:', this.id);
//     }, 100);
//   }
//   var id = 21;
//   foo.call({ id: 42 });  //call传的参数？？？？？？？？？？？？？？？？？
//   // id: 42
// foo.call(window, { id: 42 });  //21


//箭头函数里this执行定义时候已定了
// function Timer() {
//     this.s1 = 0;
//     this.s2 = 0;
//     // 箭头函数
//     setInterval(() => this.s1++, 1000);
//     // 普通函数
//     setInterval(function () {
//       this.s2++;
//     }, 1000);
//   }
  
//   var timer = new Timer();
  
//   setTimeout(() => console.log('s1: ', timer.s1), 3100);
//   //前者的this绑定定义时所在的作用域（即Timer函数），
//   //者的this指向运行时所在的作用域（即全局对象）。
//   setTimeout(() => console.log('s2: ', timer.s2), 3100);
//   // s1: 3
//   // s2: 0


//又一个箭头函数中this的例子
//init方法中，使用了箭头函数，这导致这个箭头函数里面的this，总是指向handler对象
// var handler = {
//     id: '123456',
  
//     init: function() {
//       document.addEventListener('click',
//         event => this.doSomething(event.type), false);
//     },
  
//     doSomething: function(type) {
//       console.log('Handling ' + type  + ' for ' + this.id);
//     }
//   };
// //原理解释：this指向的固定化，并不是因为箭头函数内部有绑定this的机制，实际原因是箭头函数根本没有自己的this，导致内部的this就是外层代码块的this。正是因为它没有this，所以也就不能用作构造函数。

//再来一个
// function foo() { //只有一个this,foo函数的this
//     return () => {
//       return () => {
//         return () => {
//           console.log('id:', this.id);
//         };
//       };
//     };
//   }
  
//   var f = foo.call({id: 1});
  
//   var t1 = f.call({id: 2})()(); // id: 1
//   var t2 = f().call({id: 3})(); // id: 1
//   var t3 = f()().call({id: 4}); // id: 1

//由于箭头函数没有自己的this，所以当然也就不能用call()、apply()、bind()这些方法去改变this的指向。
// (function() {
//     return [
//       (() => this.x).bind({ x: 'inner' })()
//     ];
//   }).call({ x: 'outer' });
//   // ['outer']  箭头函数没有自己的this，所以bind方法无效，内部的this指向外部的this。


//   //嵌套的箭头函数
//   //http://es6.ruanyifeng.com/#docs/function
//   //es5
//   function insert(value) {
//     return {into: function (array) {
//       return {after: function (afterValue) {
//         array.splice(array.indexOf(afterValue) + 1, 0, value);
//         return array;
//       }};
//     }};
//   }
  
//   insert(2).into([1, 3]).after(1); //[1, 2, 3]
//   //es6 嵌套箭头函数
//   let insert = (value) => ({into: (array) => ({after: (afterValue) => {
//     array.splice(array.indexOf(afterValue) + 1, 0, value);
//     return array;
//   }})});
  
//   insert(2).into([1, 3]).after(1); //[1, 2, 3]
// // 部署管道机制（pipeline）
// const pipeline = (...funcs) =>
//   val => funcs.reduce((a, b) => b(a), val);

// const plus1 = a => a + 1;
// const mult2 = a => a * 2;
// const addThenMult = pipeline(plus1, mult2);

// addThenMult(5)
// // 12
// //简化写法，增强可读性
// const plus1 = a => a + 1;
// const mult2 = a => a * 2;
// mult2(plus1(5))
// 12
//更深入
// λ演算的写法
// fix = λf.(λx.f(λv.x(x)(v)))(λx.f(λv.x(x)(v)))

// // ES6的写法
// var fix = f => (x => f(v => x(x)(v)))
//                (x => f(v => x(x)(v)));


//双冒号运算符
//函数绑定运算符是并排的两个冒号（::），双冒号左边是一个对象，右边是一个函数。该运算符会自动将左边的对象，作为上下文环境（即this对象），绑定到右边的函数上面
// foo::bar;
// // 等同于
// bar.bind(foo);

// foo::bar(...arguments);
// // 等同于
// bar.apply(foo, arguments);

// const hasOwnProperty = Object.prototype.hasOwnProperty;
// function hasOwn(obj, key) {
//   return obj::hasOwnProperty(key);
// }

// //如果双冒号左边为空，右边是一个对象的方法，则等于将该方法绑定在该对象上面。
// var method = obj::obj.foo;
// // 等同于
// var method = ::obj.foo;

// let log = ::console.log;
// // 等同于
// var log = console.log.bind(console);
//如果双冒号运算符的运算结果，还是一个对象，就可以采用链式写法。

// import { map, takeWhile, forEach } from "iterlib";

// getPlayers()
// ::map(x => x.character())
// ::takeWhile(x => x.strength > 100)
// ::forEach(x => console.log(x));

//尾递归
// function factorial(n) { //最多需要保存n个调用记录，复杂度 O(n) 
//     if (n === 1) return 1;
//     return n * factorial(n - 1);
//   }
  
//   factorial(5) // 120
//   console.log(factorial(5));



//尾递归调用 需要进一步深入学习
// function factorial(n, total) { //最多需要保存n个调用记录，复杂度 O(1) 
//     if (n === 1) return total;
//     return factorial(n - 1, n * total);
//   }
  
//   factorial(5, 1) // 120
//   console.log( factorial(5, 1));




















