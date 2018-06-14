//字符串
// var name = '小铭';
// var age = 20;
// console.log(`你好，${name}，你今年${age}岁了！`);

// //需要特别注意的是，字符串是不可变的，
//如果对字符串的某个索引赋值，不会有任何错误，但是，也没有任何效果：

// var s = 'Test';
// s[0] = 'X';
// console.log(s[0] = 'X');
// alert(s); // s仍然为'Test'

// var s = 'HELLO WORLD';
// var lower = s.toLowerCase();
// console.log(lower);
// var uper = s.toUpperCase();
// console.log(uper);

// var s = 'hello, world';
// console.log(s.indexOf('world')); // 返回7
// console.log(s.indexOf('World')); // 没有找到指定的子串，返回-1

//substring()返回指定索引区间的子串：

// var s = 'hello, world'
// console.log(s.substring(0, 5)); // 从索引0开始到5（不包括5），返回'hello'
// console.log(s.substring(7)); // 从索引7开始到结束，返回'world'


//请注意，直接给Array的length赋一个新的值会导致Array大小的变化：
// var arr = [1, 2, 3];
// arr.length; // 3
// arr.length = 6;
// arr; // arr变为[1, 2, 3, undefined, undefined, undefined]
// arr.length = 2;
// arr; // arr变为[1, 2]



//slice()就是对应String的substring()版本
// var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
// console.log(arr.slice(0, 3));
// console.log(arr.slice(3));


//复制一个数组
// var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
// var aCopy = arr.slice();
// var bCopy = [...arr];
// console.log(aCopy); // ['A', 'B', 'C', 'D', 'E', 'F', 'G']
// console.log(bCopy);


//push 和 pop
// var arr = [1,2];
// arr.push('A','B');  //想尾部追加
// console.log(arr);
// console.log(arr.pop());
// console.log(arr);
// console.log(arr.pop());
// console.log(arr.pop());
// console.log(arr.pop());console.log(arr.pop());
// console.log(arr);


//unshift 和 shift
// var arr = [1,2,3,4];
// console.log(arr.unshift(0));
// console.log(arr);
// console.log(arr.shift());
// console.log(arr);
// console.log(arr.shift());
// console.log(arr);

//sort reverse
// var arr = ['one', 'two', 'three'];
// arr.reverse(); 
// arr; // ['three', 'two', 'one']

//splice()方法是修改Array的“万能方法”
// var arr = ['Microsoft', 'Apple', 'Yahoo', 'AOL', 'Excite', 'Oracle'];
// // 从索引2开始删除3个元素,然后再添加两个元素:
// arr.splice(2, 3, 'Google', 'Facebook'); // 返回删除的元素 ['Yahoo', 'AOL', 'Excite']
// arr; // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']
// // 只删除,不添加:
// arr.splice(2, 2); // ['Google', 'Facebook']
// arr; // ['Microsoft', 'Apple', 'Oracle']
// // 只添加,不删除:
// arr.splice(2, 0, 'Google', 'Facebook'); // 返回[],因为没有删除任何元素
// arr; // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']


// //concat()方法把当前的Array和另一个Array连接起来，并返回一个新的Array：
// var arr = ['A', 'B', 'C'];
// var added = arr.concat([1, 2, 3]);
// added; // ['A', 'B', 'C', 1, 2, 3]
// arr; // ['A', 'B', 'C']


//join()方法是一个非常实用的方法，它把当前Array的每个元素都用指定的字符串连接起来
// var arr = ['A', 'B', 'C', 1, 2, 3];
// console.log(arr.join('|'));



//对象
// var xiaoming = {
//     name: '小红',
//     'middle-school': 'No.1 Middle School'
// };
// console.log(xiaoming['middle-school']);
// // console.log(xiaoming.middle-school);
// console.log(xiaoming.name);
// console.log(xiaoming['name']);  //name是字符串


// var xiaoming = {
//     name: '小明'
// };
// xiaoming.hasOwnProperty('name'); // true
// xiaoming.hasOwnProperty('toString'); // false

// var x = 1;
// for(var i=1; i<=10;i++){
//    x = x*i;
// }
// console.log(x);  // 

// var arr = ['Apple', 'Google', 'Microsoft'];
// arr.forEach((item,index)=>{
//    console.log(index,':',item);
// });
// for(let item of arr.entries()){
//    console.log(item[0],item[1]);
// }
// for(let i= 0; i< arr.length; i++){
//    console.log(arr[i]);
// }


// let x = 0;
// for (;;) { // 将无限循环下去
//     console.log('停不下来');
//     if (x > 100) {
//         break; // 通过if判断来退出循环
//     }
//     x ++;
// }


//for循环的一个变体是for ... in循环，它可以把一个对象的所有属性依次循环出来
// var o = {
//     name: 'Jack',
//     age: 20,
//     city: 'Beijing'
// };
// for(var key in o){
//   console.log(key);
// }

// var o = {
//     name: 'Jack',
//     age: 20,
//     city: 'Beijing'
// };
// for (var key in o) {
//     if (o.hasOwnProperty(key)) { // 过滤掉继承而来的属性
//         console.log(key); // 'name', 'age', 'city'
//     }
// }


//Array也是对象，而每个元素的索引被视为对象的属性
// var a = ['A', 'B', 'C'];
// for (var i in a) {
//     console.log(i); // '0', '1', '2'  //请注意，for ... in对Array的循环得到的是String而不是Number。
//     console.log(a[i]); // 'A', 'B', 'C'
// }



//初始化Map需要一个二维数组，或者直接初始化一个空Map。
//Map  是一组键值对的结构，具有极快的查找速度。
// var m = new Map([['Tom',95],['Jack',85],['小明',60]]);
// // console.log(m.get('小明'));
// console.log(m.set('Tom',59));
// console.log(m.get('Tom'));
// m.delete('Adam'); // 删除key 'Adam'
//初始化一个空的
// var m = new Map(); // 空Map
// m.set('Adam', 67); // 添加新的key-value



//set
//Set和Map类似，也是一组key的集合，但不存储value。由于key不能重复，所以，在Set中，没有重复的key。

// var s = new Set([1, 2, 3, 3, '3']);
// console.log(s); // Set {1, 2, 3, "3"}

//通过delete(key)方法可以删除元素：

// var s = new Set([1, 2, 3]);
// s; // Set {1, 2, 3}
// s.delete(3);
// s; // Set {1, 2}


// var a = ['A', 'B', 'C'];
// var s = new Set(['A', 'B', 'C']);
// var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
// for(let value of a){
//     console.log(value);
// }

// for(let key of s){
//     console.log(key);
// }

// for(let item of m.entries()){
//     console.log(item[0],item[1]);
// }


//更好的方式是直接使用iterable内置的forEach方法，它接收一个函数，每次迭代就自动回调该函数。以Array为例：
// a.forEach(function (element, index, array) {
//     // element: 指向当前元素的值
//     // index: 指向当前索引
//     // array: 指向Array对象本身
//     console.log(element + ', index = ' + index);
// });




//函数
//请注意，函数体内部的语句在执行时，一旦执行到return时，函数就执行完毕，并将结果返回。
// function abs(x) { //要避免收到undefined，可以对参数进行检查
//     if (typeof x !== 'number') {
//         throw 'Not a number';
//     }
//     if (x >= 0) {
//         return x;
//     } else {
//         return -x;
//     }
// }

//rest 参数
// function sum(...rest) {
//     let arr = rest;
//     arr.forEach(item => console.log(item));
//     //console.log(typeof(arr));
//  }
//  sum(1,3);
 

//JavaScript引擎有一个在行末自动添加分号的机制
// function foo() {
//     return
//        { name: 'foo' };
// }

// var a = foo(); // undefined
// console.log(a);
// //正确写法
// function foo() {
//     return { // 这里不会自动加分号，因为{表示语句尚未结束
//         name: 'foo'
//     };
// }



//传值不确定时候，无pi时候pi为3.14
// 'use strict';
// function area_of_circle(r, pi) {

//   if(typeof pi !== 'number'){
//       pi = 3.14;
//   }  
//   let area = pi*r*r
//   return area ;

// }
// // 测试:
// if (area_of_circle(2) === 12.56 && area_of_circle(2, 3.1416) === 12.5664) {
//     console.log('测试通过');
// } else {
//     console.log('测试失败');
// }


'use strict';
//return 分行写小坑
// function max(a, b) {   
//     if (a > b) {
//         return 
// a;
//     } else {
//         return 
// b;
//     }

// }
// console.log(max(15, 20));


//最常见的做法是用一个var申明函数内部用到的所有变量：
// function foo() {
//     var
//         x = 1, // x初始化为1
//         y = x + 1, // y初始化为2
//         z, i; // z和i为undefined
//     // 其他语句:
//     for (i=0; i<100; i++) {
//         //...
//     }
// }



//命名空间
//减少冲突的一个方法是把自己的所有变量和函数全部绑定到一个全局变量中。例如：
// 唯一的全局变量MYAPP:
// var MYAPP = {};
// // 其他变量:
// MYAPP.name = 'myapp';
// MYAPP.version = 1.0;
// // 其他函数:
// MYAPP.foo = function () {
//     return 'foo';
// };


//解构赋值
//数组的解构赋值
// 'use strict';

// 如果浏览器支持解构赋值就不会报错:
// var [x, y, z] = ['hello', 'JavaScript', 'ES6'];
// // x, y, z分别被赋值为数组对应元素:
// console.log('x = ' + x + ', y = ' + y + ', z = ' + z);

// let [x, [y, z]] = ['hello', ['JavaScript', 'ES6']];

//对应层次一致
//对一个对象进行解构赋值时，同样可以直接对嵌套的对象属性进行赋值，只要保证对应的层次是一致的：

// var person = {
//     name: '小明',
//     age: 20,
//     gender: 'male',
//     passport: 'G-12345678',
//     school: 'No.4 middle school',
//     address: {
//         city: 'Beijing',
//         street: 'No.1 Road',
//         zipcode: '100001'
//     }
// };
// var {name, address: {city, zip}} = person;
// name; // '小明'
// city; // 'Beijing'
// zip; // undefined, 因为属性名是zipcode而不是zip
// // 注意: address不是变量，而是为了让city和zip获得嵌套的address对象的属性:
// address; // Uncaught ReferenceError: address is not defined

// var person = {
//     name: '小明',
//     age: 20,
//     gender: 'male',
//     passport: 'G-12345678',
//     school: 'No.4 middle school'
// };

// // 把passport属性赋值给变量id:
// let {name, passport:id} = person;
// name; // '小明'
// id; // 'G-12345678'
// // 注意: passport不是变量，而是为了让变量id获得passport属性:
// passport;  // Uncaught ReferenceError: passport is not defined


//小坑
// 声明变量:
// var x, y;
// 解构赋值:
//{x, y} = { name: '小明', x: 100, y: 200};  //错误写法
// ({x, y} = { name: '小明', x: 100, y: 200});
// 语法错误: Uncaught SyntaxError: Unexpected token =
//原因：这是因为JavaScript引擎把{开头的语句当作了块处理，于是=不再合法。解决方法是用小括号括起来：


//解构服务质量使用场景
// var x = 1, y = 2;
// console.log(x, y);
// [x,y] = [y,x];
// console.log(x, y);


//如果一个函数接收一个对象作为参数，那么，可以使用解构直接把对象的属性绑定到变量中。例如，下面的函数可以快速创建一个Date对象：

//这种传参方式是推荐的
function buildDate({year, month, day, hour=0, minute=0, second=0}) {
    return new Date(year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second);
}
console.log(buildDate({year:2018,month:6,day:7}));
console.log(buildDate({ year: 2017, month: 1, day: 1, hour: 20, minute: 15 }));



























