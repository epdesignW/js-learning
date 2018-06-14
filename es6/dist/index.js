'use strict';

// import 'babel-polyfill';
// var a = "global";
// {
//     let a = "block",
//     b = "bbb";   //es有块级作用域
//     alert(a);
// }
// console.log(a);
// console.log(b);
//let防止污染数据
// for(var i=0; i<10;i++){
//   console.log(i);
// }
// console.log("循环结束了" + i);
// //let
// for(let i = 0;i<10; i++){
//    console.log("let: " + i);
// }
//数组解构
// let [a,b,c] = ["epdesignW","wangsenpwd","1400889245@qq.com"];
// console.log(a);
// console.log(b);
// console.log(c);
// let [username,password="123456"] = ["epdesignW"];
// console.log(username+"密码：" + password) ;   //解构的默认值设置
// //null 和 undefined不一样的
// let [a,b="JSPang"]=['技术胖',undefined];
// console.log(a+b); //控制台显示“技术胖JSPang”
// let [a,b="JSPang"]=['技术胖',null];
// console.log(a+b); //控制台显示“技术胖null”
//对象的解构赋值
//  let {foo,bar} = {bar:'熊猫',foo:'jspang'};
//  console.log(foo + bar);
// let foo;
// ({foo} = {foo:'JSPang'});   //此处是一个坑 如果在解构之前就定义了变量，这时候你再解构会出现问题。加()解决
// console.log(foo);
//字符串解构
// const [a,b,c,d,e,f] = "Panda";
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// // 扩展运算符和rest运算符
// function test1 (arg){
//     console.log(arguments[0]);
//     console.log(arguments[1]);
//     console.log(arguments[2]);
// }
// test1(1,2,3);
// let arr1=['www','jspang','com'];
// let arr2=['www','jspang','com'];
// console.log(arr1==arr2);   //false  [] !== []  引用类型 javascript保存的是堆栈的地址
// console.log(arr2);

// let jspang='技术胖';
// let blog = '非常高兴你能看到这篇文章，我是你的老朋友技术胖。这节课我们学习字符串模版。';
// if(blog.includes(jspang)){  // 返回true /false
//     console.log(blog.includes(jspang));
//     alert("include");
//   }else{
//       alert("not include");
//   }
//   if(blog.indexOf(jspang)){
//       alert("indexOf方法判断是否包含： 包含");
//       console.log(blog.indexOf(jspang));
//   }else{
//     alert("indexOf方法：not include");
//   }
// document.write('jspang|'.repeat(3));
// alert('jspang|'.repeat(3));

// //二进制
// let binary = 0b10101;
// console.log(binary);
// //八进制
// let b=0o666;
// console.log(b);
// //整数转换Number.parseInt(xxx)和浮点型转换Number.parseFloat(xxx)
// let a='9.18';
// console.log(Number.parseInt(a));
// console.log(Number.parseFloat(a));

// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_SAFE_INTEGER);
// //安全证书判断
// let a= Math.pow(2,53)-1;
// console.log(Number.isSafeInteger(a)); //false

//ES6中新增的数组知识
// let  json = {  //这就是一个标准的JSON数组格式 ********************* 跟普通的JSON对比是在最后多了一个length属性
//     '0': 'jspang',
//     '1': '技术胖',
//     '2': '大胖逼逼叨',
//     length:3
// }
// let arr=Array.from(json);   //实际开发中这种方法还是比较常用的，毕竟节省了我们代码行数，也让我们的程序更清晰。
// console.log(arr)

//Array.of()方法
// let arr =Array.of(3,4,5,6);
// console.log(arr);
// alert(arr);
// let arr2 =Array.of('技术胖','jspang','大胖逼逼叨');
// console.log(arr2);

//findof()
// let arr=[1,2,3,4,5,6,7,8,9];
// console.log(arr.find(function(value,index,arr){
//     return value > 5;
// }))

//fill()实例方法：
// let arr = [0,1,2,3,4,5,6,7,8,9];
// arr.fill("jspang",0,3);
// console.log(arr);

//for of 方法
// var arr = ["panda","pig","kangaroo"];
// for(let [index,val] of arr.entries()){
//    console.log(index+":"+val);
// }

// 数组的遍历方式
// let arr=['jspang','技术胖','大胖逼逼叨']
// let list=arr.entries();
// console.log(arr == list);  // false
// console.log(list);   //Array Iterator {}
// console.log(list.next().value);
// console.log(list.next().value);
// console.log(list.next().value);

//function add(a,b=1){   // 浏览器控制台报错，这是ES6中的一个坑，如果没人指导的话，可能你会陷进去一会。这个错误的原因就是如果你使用了默认值，再使用严谨模式的话，就会有冲突，所以我们要取消默认值的操作，这时候你在运行就正常了。
// function add(a,b){
//   'use strict'    //88888888888888888888888888888888
//    if(a == 0){
//         throw new Error('This is error')
//     }
//      return a+b;
// }

//console.log(add(1,2));
//获得需要传递的参数个数
//console.log(add.length);

//对象的函数解构
// let person = {
//     username:'jspang',
//     password:'123456',
//     email:'pang@163.com'
// }
// function fun({username,email,password}){
//   console.log(username);
//   console.log(password);
//   console.log(email);
//  }
// fun(person);
// let person = {
//     username:'wangsen',
//     password:'123456'
// };
// function fun({password:pwd,username:uname}){  // password是匹配模式，实际变量参数是pwd，不信打印password看看
//     console.log(pwd);
//     console.log(uname);

// }
// fun(person);
//数组的函数解构
// let arr = ['panda','kangaroo','tiger'];
// function animal(...args){  // function animal(a,b,c){ ... }
//     alert(args.length);
//     alert(args[0]);
//     alert(args[1]);
//     alert(args[2]);
// }
// animal(...arr);

// // in  对象判断
// let obj = {
//     postcode:'213100',
//     email:'1400889245@qq.com'
// }
// console.log('username' in obj);
// console.log('email' in obj);
//数组判断
// let arr1 = [,,,,,];
// console.log(arr1.length);  // 6, 但数组中其实全部为空值
// console.log(0 in arr1);   // 0指的是数组下标位置是否为空

//数组的遍历方法
//1. forEach(fn,context)
//let arr1 = ['panda','tiger','horse'];
// //arr1.forEach(function(val, index, array){
//    // ...
// //});
// arr1.forEach((val,index)=>{
//     console.log(index);
//     console.log(val);
//     console.log(index,val);
// });
// 2.filter
// var arr2 = arr1.filter((item,index)=>{
//     return /^tige/.test(item);
// });
// alert(arr2);
// 3. some  every
// let result = arr1.every((item,arr)=> {  //some和every
//     return /^tige/.test(item);
// });
// alert(result);
// 4.map
// let arr1 = [1,2,3,4,5,6,7,8,9];
// alert(arr1.map(item => item*item ));
//console.log(arr.map(x=>'web'));

//toString方法
//  var arr = ["panda","pig","kangaroo"];
//  alert(arr.toString());
//  console.log(arr.toString());

//ES6中对象
// let username = "jack",
//     email = "1400554@qq.com";
// let person = {username,email};
// console.log(person);
//对象key值构建
// let key = 'skill';
//自定义对象方法
// var obj = {
//     [key]:'web',
//     add:function(a,b){
//         return a+b;
//     }
// }
// console.log(obj.skill);
// console.log(obj.add(1,2));

//对象的比较 Object.is()
//对象的比较方法,以前进行对象值的比较，经常使用===来判断，比如下面的代码：
// var obj1 = {name:'jack'};
// var obj2 = {name:'jack'};
// alert(obj1.name===obj2.name);
// alert(Object.is(obj1.name,obj2.name));   //Object.is(obj1.属性，obj2.属性)
// //区分=== 和 is方法 （===为同值相等，is()为严格相等）
// console.log(+0 === -0);  //true
// console.log(NaN === NaN ); //false
// console.log(Object.is(+0,-0)); //false
// console.log(Object.is(NaN,NaN)); //true
// var a = {name:"李红",class:'三年二班'};
// var b = {name:"赵龙",class:'三年二班'};
// var c = {name:"小明",class:'三年二班'};
// let d = Object.assign(a,b,c);
// alert(d); //********************************************** */
//Symbol
// var a = new String;
// var b = new Number;
// var c = new Boolean;
// var d = new Array;
// var e = new Object;
// var f  = Symbol('panda');
// //这时候我们仔细看控制台是有区别的，没有toString的是红字，toString的是黑字。
// console.log(f);
// console.log(f.toString());

// let obj = {name:'jspang',skill:'web'};
// let age = Symbol();  //*********************************** */
// obj[age] = 30;
// for(let item in obj){
//    console.log(obj[item]);
// }
// console.log(obj);

//set数据结构
// let setArr = new Set(['panda','kangaroo','tiger','panda']);
// //alert(setArr);
// console.log(setArr);
// //Set值的增删查
// // setArr.add("dog");
// // setArr.delete('panda');
// var result = setArr.has('tiger');
// console.log(result);
// for .. of.. 循环
// for(let item of setArr){
//    console.log(item);
// }
// console.log(setArr.size);
// //forEach循环
// setArr.forEach(item=>console.log(item));
//for...in 语句用于遍历数组或者对象的属性（对数组或者对象的属性进行循环操作）。setArr不能用
//Weakset的生命（实际用的并不多）
// let weakObj = new WeakSet();  //这个位置不能放值
// let obj = {name:'jack',password:'123456'}
// weakObj.add(obj);  //这个位置会检查对象
// console.log(weakObj);

//map数据结构
// let json = {
//     name:'jspang',
//     skill:'web'
// };
// let json2 = {
//     name:'wangsen',
//     skill:'ps'
// };
// console.log(json.name);
// var map  = new Map();
// //map.set();   可以看做是键值对
// map.set("iam",json);
// map.set("iam2",json2);
// console.log(map.size);  //2
// // //map的增删查
// // console.log(map.get("iam"));
// // console.log(map.get("iam2"));
// // //map.clear();
// //map.delete(json);
// //查看是否存在
// console.log(map.has('iam'))
// console.log(map.has('iam3'))
// console.log(map);

//Promise对象的使用
//以做饭吃完洗完为例说明
// let state = 1;
// function step1(resolve,reject){ //这里当然你也可以改成其它名字，反正是形参嘛。不过这两个名称已经是约定俗成，最好不要改。
//     console.log("1.开始洗菜");
//     if(state==1){
//        resolve("菜洗好了");
//     }else{
//        reject("还没洗菜啊");
//     }
// }
// function step2(resolve,reject){
//     console.log("2.坐下来吃饭");
//     if(state==2){
//        resolve("吃好了");
//     }else{
//        reject("坐下来吃饭出错");
//     }
// }
// function step3(resolve,reject){
//     console.log("3.收拾桌子");
//     if(state==1){
//        resolve("收拾好了");
//     }else{
//        reject("收拾桌子出错");
//     }
// }
// new Promise(step1).then(function(val){
//    console.log(val);
//    state = 2;
//    return new Promise(step2);
// }).then(function(val){
//     state = 3;
//     console.log(val);
//     return new Promise(step3);
// }).then(function(val){
//     console.log(val);
//     return val;
// });

//类 class
// class Coder{
//     constructor(a,b,c,d){
//         this.a = a;
//         this.b = b;
//         this.name = c;
//         this.skill = d;
//     }
//     name(val){ // name 不是方法
//         console.log(val);
//         return val;
//     }
//     skill(val){
//         console.log(this.name('技术胖')+" Skill:"+val);
//     }
//     add(){
//         return this.a + this.b;
//     }
// }
// //继承
// class frontEndCoder extends Coder{

// }

// let coder1 = new frontEndCoder();
// // console.log(coder1);
// // console.log(coder1.add());
// // console.log(coder1.name);
// // console.log(coder1.skill);
// coder1.name = "技术胖";
// alert(coder1.name);

// 模块化操作
// import {a} from '../src/temp.js'; // Uncaught ReferenceError: require is not defined
// import {a} from 'temp.js';
// console.log(a);

// 学习笔记  2018-05-07
//let和const
// var a = [];
// for (let i = 0; i < 10; i++) {  // let 和 var 互换
//     a[i] = function(){
//         console.log(i);
//     }
// }
// a[6]();   //这个位置这样写的一个函数，仅仅用来理解 let即可

//for循环还有一个特别之处，就是设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域
// for (let i = 0; i < 3; i++) {
//     let i = 'abc';
//     console.log(i);
//     alert(i);
// }

//不存在变量提升
// function test() {
//     console.log(b);
//     let b = 'england';   //let不存在变量提升的概念了
// }
//  test();

//暂时性死区 只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。
// function test(){ //*************  测试效果有误差  ****************
// var tmp = 123;
// if(true){
//    tmp = "abc";
//    console.log(tmp);
//    let tmp;
// // console.log(tmp);
// // tmp = 123;
// // console.log(tmp);
//  }
// }
// test();
// function f1(){
//     let n = 5;
//     if(true){
//        let n = 10;
//        let a = "aaa";
//     }
//     console.log(n);
//     console.log(a);
// }
// // f1();
// const Pi = 3.1415926;
// Pi  = 3.14;  //编译es5就会出错

//对象解构赋值  区分是模式还是变量, 对象或者数组解构出来是给函数用的，理解
// let obj = {
//     p: [
//         'Hello',
//         {y:'world'}
//     ]
// };
// let {p:[x,{y}]} = obj;
// //console.log(p);
// console.log(x);
// console.log(y);
// //解构p
// let{p} = obj;
// console.log(p);
//同时解构p和x, y
// let{p,p:[x,{y}]} = obj;  //按照约定语法来 语法 语法 语法，约定的语法 ^^^^^^^^
// console.log(p);
// console.log(x);
// console.log(y);

// const node = {
//     loc: {
//         start:{
//             line:1,
//             column:5
//         }
//     }
// };
// let {loc,loc:{start},loc:{start:{line,column}}} = node;
// console.log(loc);
// console.log(start);
// console.log(line.toString() + column.toString());
//再看点
// let obj = {};
// let arr = [];
// ({foo:obj.prop, bar:arr[0]} = {foo:123,bar:true})
// console.log(obj);
// console.log(arr);
// console.log(bar);  // not defined
//默认值生效的条件是，对象的属性值严格等于undefined。
// var {x = 3} = {x: undefined};
// x // 3
// var {x = 3} = {x: null};
// x // null
// //如果要将一个已经声明的变量用于解构赋值，必须非常小心。
// // 正确的写法
// let x;
// ({x} = {x: 1});  //这种格式也存在，解构

// //用途   对象的解构赋值，可以很方便地将现有对象的方法，赋值到某个变量。
// let { log, sin, cos } = Math;
// //由于数组本质是特殊的对象，因此可以对数组进行对象属性的解构。
// //此处如果不好理解，可以想下数组遍历对象，或者set数据结构
// let arr = [1, 2, 3];
// let {0 : first, [arr.length - 1] : last} = arr;
// console.log(first); // 1
// console.log(last); // 3

//字符串的解构赋值
// const [a,b,c,d,e] = 'hello';
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// let {length} = 'hello';  //字符串对象
// console.log(length);

//数值和布尔值解构   解构赋值时，如果等号右边是数值和布尔值，则会先转为对象。
// let {toString: s} = 123;
// s === Number.prototype.toString // true
// let {toString: s} = true;
// s === Boolean.prototype.toString // true

//函数参数的解构赋值
// function add([x, y]){  //对于函数内部的代码来说，它们能感受到的参数就是x和y。
//     return x + y;
//   }
// add([1, 2]); // 3

//数组解构的用途 7
//函数参数的默认值
// function test1({a=1,b=2}){
//     console.log(a);
//     console.log(b);
// }
// test1({a:3});

//字符串的扩展
// alert(String.fromCodePoint(0x20bb7));
// //遍历
// for(let i of 'hello𠮷'){   //这个遍历器最大的优点是可以识别大于0xFFFF的码点
//     console.log(i);
// }

//补全标题
//alert("产品标题".padEnd(10,'.'));  // 默认使用空格补全长度。
//let greeting = `\`Yo\` World!`;
//alert(greeting);

//模板字符串还可以嵌套
// let appTable = "";
// window.onload = function(){
//     appTable = `
//         <table>
//         ${addrs.map(addr => `
//         <tr><td>${addr.first}</td>
//         <td>${addr.last}</td></tr>
//         `).join('')}
//         </table>
//     `.trim();
//   document.getElementById("app-x").innerHTML = appTable;
// }

//改成箭头函数es6 的写法
// let addrs = [
//     {first:'Hankong',last:'5 road'},
//     {first:'Taiwan',last:'6 road'},
// ];

// window.onload = () => {
//     appTable = `
//         <table>
//         ${addrs.map(addr => `
//         <tr><td>${addr.first}</td>
//         <td>${addr.last}</td></tr>
//         `).join('')}
//         </table>
//     `.trim();
//   document.getElementById("app-x").innerHTML = appTable;
// }

//模板编译 ￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥
// let addrs = [
//     {first:'Hankong',last:'5 road'},
//     {first:'Taiwan',last:'6 road'},
// ];

// let html = `
// <ul>
//   <% for(let i=0; i < addrs.length; i++) { %>
//     <li><%= addrs[i].first %></li>
//   <% } %>
// </ul>
// `;

// window.onload = () => {
//   function compile(template){
//     const evalExpr = /<%=(.+?)%>/g;
//     const expr = /<%([\s\S]+?)%>/g;

//     template = template
//       .replace(evalExpr, '`); \n  echo( $1 ); \n  echo(`')
//       .replace(expr, '`); \n $1 \n  echo(`');

//     template = 'echo(`' + template + '`);';

//     let script =
//     `(function parse(data){    //这种写法是？***********************************
//       let output = "";

//       function echo(html){
//         output += html;
//       }
//       ${ template }
//       return output;
//     })`;
//     // console.log(script);
//     return script;
//   }
// //compile函数的使用
//   let parse = eval(compile(html));
//   document.getElementById("app-x").innerHTML = parse(addrs);
// }
// end￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥￥

//“标签模板”
//“标签模板”的一个重要应用，就是过滤 HTML 字符串，防止用户输入恶意内容。
// window.onload = () => {
// // let message =
// //   SaferHTML`<p>${sender} has sent you a message.</p>`;

// function SaferHTML(templateData) {
//   let s = templateData[0];
//   for (let i = 1; i < arguments.length; i++) {
//     let arg = String(arguments[i]);

//     // Escape special characters in the substitution.
//     s += arg.replace(/&/g, "&amp;")
//             .replace(/</g, "&lt;")
//             .replace(/>/g, "&gt;");

//     // Don't escape special characters in the template.
//     s += templateData[i];
//   }
//   return s;
// }

// let sender = '<script>alert("abc")</script>'; // 恶意代码
// let message = SaferHTML`<p>${sender} has sent you a message.</p>`;

// console.log(message);
// <p>&lt;script&gt;alert("abc")&lt;/script&gt; has sent you a message.</p>

// }

//数值
// console.log(Number.MIN_VALUE);
// console.log(Number.MAX_VALUE);
// console.log(Number.EPSILON);

//Math对象的扩展
// console.log(Math);
// console.log(Math.ceil(-0.8));
// function foo ({x,y}){
//   console.log(x,y);
// }
// foo({x:1,y:2});
// function test(a,b,...args) {

// }
// var x = 1;
// function foo(x, y = function() { x = 2; }) {
//   x = 3;
//   y(); //执行顺序
//   console.log(x);
// }
// foo()

// var a = [0];
// var b = [];
// b.push(a, 1, 2, 3);
// alert(b);

// let arr1 = [0, 1, 2];
// let arr2 = [3, 4, 5,6,7];
// alert(arr1.push(...arr2));

// alert(arr1.push(...arr2));
// alert(arr1);
// var a1 = [1, 2];
//var a2 = a1.concat();
//es5实现方法
// a2[0] = 2;
// console.log(a1, a2); // [1, 2]
//es6实现方法
// var a2 = [...a1];
// a1[0] = 2;
// console.log(a2);
// console.log([...'hello'])   // Array.from('hello')
// // [ "h", "e", "l", "l", "o" ]
// var hello = [...'hello world'];
// hello.forEach(function(item){
//   alert(item);
// });

// let map = new Map([
//   [1,'one'],
//   [2,'two'],
//   [3,'three']
// ]);
// //let keys = [...map.keys()];
// let values = [...map.values()];
// console.log(values);

// let arr2 = Array.from(arrayLike)
//对于还没有部署该方法的浏览器，可以用Array.prototype.slice方法替代。

// const toArray = (() =>
//   Array.from ? Array.from : obj => [].slice.call(obj)
// )();
// let spans = document.querySelectorAll('span.name');

// // map()
// let names1 = Array.prototype.map.call(spans, s => s.textContent);

// // Array.from()
// let names2 = Array.from(spans, s => s.textContent)

// const foo = 'bar';
// const baz = {foo};
// //等同于
// const baz = {foo: foo}
// function f(x, y) {
//   return {x, y};
// }

// // 等同于

// // function f(x, y) {
// //   return {x: x, y: y};
// // }

// const a = f(1, 2); // Object {x: 1, y: 2}
// alert(a.x);

//混入写法
// let mix = (object) => ({
//   with: (...mixins) => mixins.reduce(
//     (c, mixin) => Object.create(
//       c, Object.getOwnPropertyDescriptors(mixin)
//     ), object)
// });

// // multiple mixins example
// let a = {a: 'a'};
// let b = {b: 'b'};
// let c = {c: 'c'};
// let d = mix(c).with(a, b);

// d.c // "c"
// d.b // "b"
// d.a // "a"

//symbol
// let s = Symbol();
// let obj = {
//   [s]:'isbn877857514'
// };
// let s1 = Symbol('foo');
// let s2 = Symbol('foo');
// alert(s1); // Symbol(foo)
// alert(s2) // Symbol(bar)
// Uncaught TypeError: Cannot convert a Symbol value to a string
// s1.toString() // "Symbol(foo)"
// s2.toString() // "Symbol(bar)"
// alert(s1.toString());
// alert(s2.toString());
// alert(s1==s2);

// const log = {};

// log.levels = {
//   DEBUG: Symbol('debug'),
//   INFO: Symbol('info'),
//   WARN: Symbol('warn')
// };
// console.log(log.levels.DEBUG, 'debug message');
// console.log(log.levels.INFO, 'info message');

//对象是有一个默认的get，set方法
// var obj = new Proxy({}, {
//   get: function (target, key, receiver) {
//     console.log(`getting ${key}!`);
//     return Reflect.get(target, key, receiver);
//   },
//   set: function (target, key, value, receiver) {
//     console.log(`setting ${key}!`);
//     return Reflect.set(target, key, value, receiver);
//   }
// });
// obj.name = "jack";
// obj.name;
// var proxy = new Proxy({},{
//   get: function(target,property){
//       return 35;
//   }
// });
// console.log(proxy.time);
// console.log(proxy.name);

// const promise = new Promise(function(resolve, reject){
//     //...some code

//     if(true){ //resolve和reject是javascript引擎
//       resolve(value);
//     }else{
//       reject(error);
//     }
// });
// promise.then(function(value){
//   //success
// },function(error){
//   //failure
// });

//promise的ajax实现
// const getJSON = function(url) {
//   const promise = new Promise(function(resolve, reject){
//     const handler = function() {
//       if (this.readyState !== 4) {
//         return;
//       }
//       if (this.status === 200) {
//         resolve(this.response);
//       } else {
//         reject(new Error(this.statusText));
//       }
//     };
//     const client = new XMLHttpRequest();
//     client.open("GET", url);
//     client.onreadystatechange = handler;
//     client.responseType = "json";
//     client.setRequestHeader("Accept", "application/json");
//     client.send();

//   });

//   return promise;
// };

// getJSON("/posts.json").then(function(json) {
//   console.log('Contents: ' + json);
// }, function(error) {
//   console.error('出错了', error);
// });

//解决传统异步编程层层嵌套问题
// const p1 = new Promise(function(resolve, reject) {
//   // ...
// });

// const p2 = new Promise(function(resolve, reject) {
//   // ...
//   resolve(p1);
// });
/*** 
 * 上面代码中，p1和p2都是 Promise 的实例，但是p2的resolve方法将p1作为参数，即一个异步操作的结果是返回另一个异步操作。
   注意，这时p1的状态就会传递给p2，也就是说，p1的状态决定了p2的状态。如果p1的状态是pending，
   那么p2的回调函数就会等待p1的状态改变；如果p1的状态已经是resolved或者rejected，那么p2的回调函数将会立刻执行。
 * 
*/

// Promise.prototype.finally()
// Promise
// .then(result => {})
// .catch(error => {})
// .finally(() => {});
// let arr = ['a','b','c'];
// let iter = arr[Symbol.iterator]();

// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

// function* f() {
//   console.log('执行了！')
// }

// var generator = f();

// setTimeout(function () {
//   generator.next()
// }, 2000);
// require('babel-polyfill');

//下面这段代码运行有问题的 用 Generator 函数和for...of循环，实现斐波那契数列的例子
// import 'babel-polyfill';
// function* fibonacci() {
//   let [prev, curr] = [0, 1];
//   for (;;) {
//     yield curr;
//     [prev, curr] = [curr, prev + curr];
//   }
// }

// for (let n of fibonacci()) {
//   if (n > 1000) break;
//   console.log(n);
// }

//类的实例
// class Point{
//   constructor(x,y){
//       this.x = x;
//       this.y = y;
//   }
//   toString(){
//       return '(' + this.x + ',' + this.y + ')' ;
//   }
// }

// var point = new Point(2,3);
// console.log(point.toString());
// console.log(point.hasOwnProperty('x'));
// console.log(point.hasOwnProperty('y'));
// console.log(point.hasOwnProperty('toString'));
// console.log(point.__proto__.hasOwnProperty('toString'));
//小结：实例的属性除非显式定义在其本身（即定义在this对象上），否则都是定义在原型上（即定义在class上）

// class Point{

// }
// var p1 = new Point(2,3);
// var p2 = new Point(1,4);
// // console.log(p1.__proto__ === p2.__proto__);

// p1.__proto__.printName = function (){
//   return 'Oops';
// }
// console.log(p1.printName());
// console.log(p2.printName());

// var p3 = new Point(4,2);
// console.log(p3.printName());


// const MyClass = class Me {
//   getClassName() {
//     return Me.name;
//   }
// };
// let inst = new MyClass();
// inst.getClassName() // Me
// Me.name // ReferenceError: Me is not defined
// //如果类的内部没用到的话，可以省略Me，也就是可以写成下面的形式。
// const MyClass = class { /* ... */ }; //语法格式
// let person = new class {
//   constructor(name) {
//     this.name = name;
//   }

//   sayName() {
//     console.log(this.name);
//   }
// }('张三');

// person.sayName(); // "张三"

// const bar = Symbol('bar');
// const snaf = Symbol('snaf');
// export default class myClass{
//   //公有方法
//   foo(baz){
//     this[bar](baz);
//   }
//   //私有方法
//   [bar](baz){
//     return this[snaf] = baz;
//   }
// }
//bar和snaf都是Symbol值，导致第三方无法获取到它们，因此达到了私有方法和私有属性的效果。
// class Logger {
//   constructor() { //在构造函数中绑定this(解决方法一，还有两种方法：使用箭头函数)
//     this.printName = this.printName.bind(this);
//     // this.printName = (name = 'there') => {
//     //   this.print(`Hello ${name}`);
//     // };
//   }
//   printName(name = 'Hante') {
//     this.print(`Hello ${name}`); //this默认指向实例

//   }

//   print(text) {
//     console.log(text);
//   }
// }

// const logger = new Logger();
// const { printName } = logger;
// printName(); // 通过解构，单独调用方法 TypeError: Cannot read property 'print' of undefined

//get set
// class Myclass{
//   constructor(){
//     //...
//   }
//   get prop(){
//     console.log('getter');
//     return 'getter';
//   }
//   set prop(value){
//     console.log('setter:' + value);
//   }
// }
// let inst = new Myclass();
// inst.prop = 123;
// inst.prop;


/*Class 的 Generator 方法  
Symbol.iterator方法返回一个Foo类的默认遍历器，for...of循环会自动调用这个遍历器
*/
// class Foo{
//   constructor(...args){
//     this.args = args;
//   }
//   * [Symbol.iterator](){
//      for(let arg of this.args){
//        yield arg;
//      }
//   }
// }
// for(let x of new Foo('hello','world')){
//   console.log(x);
// }

//Class 的静态方法
// class Foo {
//   static classMethod() {
//     return 'hello';
//   }
// }

// console.log(Foo.classMethod()) // 'hello'

// var foo = new Foo();
// foo.classMethod()
// TypeError: foo.classMethod is not a function


//注意，如果静态方法包含this关键字，这个this指的是类，而不是实例
// class Foo {
//   static bar () {
//     this.baz();
//   }
//   static baz () {
//     console.log('hello');
//   }
//   baz () {
//     console.log('world');
//   }
// }

// Foo.bar() // hello


//父类的静态方法，可以被子类继承。
// class Foo {
//   static classMethod() {
//     return 'hello';
//   }
// }

// class Bar extends Foo {
// }

// Bar.classMethod() // 'hello'


//利用这个特点，可以写出不能独立使用、必须继承后才能使用的类。
// class Shape {
//   constructor() {
//     if (new.target === Shape) {
//       throw new Error('本类不能实例化');
//     }
//   }
// }

// class Rectangle extends Shape {
//   constructor(length, width) {
//     super();
//     // ...
//   }
// }

// var x = new Shape();  // 报错
// var y = new Rectangle(3, 4);  // 正确
// 上面代码中，Shape类不能被实例化，只能用于继承。
// 注意，在函数外部，使用new.target会报错。


//Class 的继承

// class Point { /* ... */ }

// class ColorPoint extends Point {
//   constructor() {
//     super();
//   }
// }

// let cp = new ColorPoint(); // ReferenceError

// class Point {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }
// }

// class ColorPoint extends Point {
//   constructor(x, y, color) {
//     //this.color = color; // ReferenceError 因为子类实例的构建，是基于对父类实例加工，只有super方法才能返回父类实例。(ES6)
//     super(x, y);
//     this.color = color; // 正确
//   }
// }


//prototype每个函数都有这个原型属性，是一个指针指向一个对象
//__proto__是对象的隐式原型，指向构造该对象的构造函数的原型
// class A {
// }

// class B extends A {
// }

// B.__proto__ === A // true
// B.prototype.__proto__ === A.prototype // true

//MIxin模式实现对象的继承

// const a = {
//   a: 'a'
// };
// const b = {
//   b: 'b'
// };
// const c = {...a, ...b}; // {a: 'a', b: 'b'}


//下面是一个更完备的实现，将多个类的接口“混入”（mix in）另一个类。
// function mix(...mixins) {
//   class Mix {}

//   for (let mixin of mixins) {
//     copyProperties(Mix, mixin); // 拷贝实例属性
//     copyProperties(Mix.prototype, mixin.prototype); // 拷贝原型属性
//   }
//   return Mix;
// }

// function copyProperties(target, source) {
//   for (let key of Reflect.ownKeys(source)) {
//     if ( key !== "constructor"
//       && key !== "prototype"
//       && key !== "name"
//     ) {
//       let desc = Object.getOwnPropertyDescriptor(source, key);
//       Object.defineProperty(target, key, desc);
//     }
//   }
// }
// //上面代码的mix函数，可以将多个对象合成为一个类。使用的时候，只要继承这个类即可。
// class DistributedEdit extends mix(Loggable, Serializable) {
//   // ...
// }

//类的修饰符
// @testable
// class MyTestableClass { //目前是提案阶段
//   // ...
// }
// function testable(target) {
//   target.isTestable = true;
// }
// MyTestableClass.isTestable // true

// bad
// var a = 1, b = 2, c = 3;

// good
// const a = 1,
//       b = 2,
//       c = 3;
// console.log(a,b,c);
// best
// const [a, b, c] = [1, 2, 3];


//字符串
// bad
// const a = "foobar";
// const b = 'foo' + a + 'bar';

// // acceptable
// const c = `foobar`;
// // good
// const a = 'foobar';
// const b = `foo${a}bar`;
// const c = 'foobar';

// const arr = [1,2,3,4];
// const first = arr[0];
// const second =arr[1];

// const [first,second] = arr;


//优先使用解构赋值
//函数的参数如果是对象的成员，优先使用解构赋值。
// bad
// function getFullName(user) {
//   const firstName = user.firstName;
//   const lastName = user.lastName;
// }

// function getFullName(user){
//    const firstName = user.firstName;
//    const lastName = user.lastName;
// }

// // good
// function getFullName(obj) {
//   const { firstName, lastName } = obj;
// }

// function getFullName(obj){
//   const {firstName,lastName} = obj;
// }
// // best
// function getFullName({ firstName, lastName }) {
// }

// function getFullName({firstName,lastName}){

// }

//如果函数返回多个值，优先使用对象的解构赋值，而不是数组的解构赋值，这样便于以后添加返回值，以及更改返回值的顺序
//bad
// function processInput(input){
//   return [left, right,top,bottom];
// }
// //good
// function processInput(input){
//   return {left, right,top, bottom};
// }
// const {left,rignt} = processInput(input);


//对象
// bad
// const a = { k1: v1, k2: v2, };
// const b = {
//   k1: v1,
//   k2: v2
// };

// // good
// const a = { k1: v1, k2: v2 };
// const b = {
//   k1: v1,
//   k2: v2,  //编码习惯，自己需要注意的
// };


//对象尽量静态化，一旦定义，就不得随意添加新的属性。如果添加属性不可避免，要使用Object.assign方法。

// // bad
// const a = {};
// a.x = 3;

// // if reshape unavoidable
// const a = {};
// Object.assign(a, { x: 3 });
// // Object.assign(a, { x: 3 });


// // good
// const a = { x: null };
// a.x = 3;


//数组
//使用扩展运算符（...）拷贝数组。

// bad
// const len = items.length;
// const itemsCopy = [];
// let i;

// for (i = 0; i < len; i++) {
//   itemsCopy[i] = items[i];
// }

// // good
// const itemsCopy = [...items];
// const itemsCopy = [...items];

// //使用 Array.from 方法，将类似数组的对象转为数组。
// const foo = document.querySelectorAll('.foo');
// const nodes = Array.from(foo);

//函数
//立即执行函数
// (function(){
//   console.log('welcome to the zoo');
// })();

// (() => {
//   console.log('welcome to the zoo');
// })();

// (function(){
//   console.log('welcome to the zoo');
// })();

// (() => {
//   console.log('welcome to the zoo');
// })();

//那些需要使用函数表达式的场合，尽量用箭头函数代替。因为这样更简洁，而且绑定了 this。
//bad
// [1,2,3].map(function(x){
//   return x*x;
// });

// //good
// [1,2,3].map((x) =>{
//   return x*x;
// });

// //best
// [1,2,3].map(x => x*x);

//箭头函数取代了Function.prototype.bind,不应再有 self/_this/that绑定this
//简单的、单行的、不会复用的函数，建议采用箭头函数。如果函数体较为复杂，行数较多，还是应该采用传统的函数写法。
//bad
// const self = this;
// const boundMethod = function(...params){
//   return method.apply(self, params);
// } 

// //acceptable
// const boundMethod = method.bind(this);

// //best
// const boundMethod = (...params) => method.apply(this, params);
//箭头函数取代Function.prototype.bind，不应再用 self/_this/that 绑定 this。
//箭头函数取代Function.prototype.bind,不应该再用 self/_this/that 绑定 this。


//建议： 简单的，单行的，不会复用的函数，建议采用箭头函数
//       如果函数体较为复杂，行数较多，还是应该采用传统的函数写法


//所有的配置项都应该集中在一个对象，放在最后一个参数，布尔值不可以直接作为参数
//bad
// function divide(a,b,option = false){}

// //good
// function divide(a,b,{option = false} = {}){}


//不要在函数体内使用arguments变量，使用rest运算符（...）
//arguments是类数组对象， rest运算符可以提供一个真正的数组
//bad
// function concatenateAll(){
//   const args = Array.prototype.slice.call(arguments); //把类数组转为数组
//   return args.join('|');
// }
// console.log(concatenateAll('hello','world'));

// function concatenateAll(...args){ //推荐
//   return args.join('|');
// }
// console.log(concatenateAll('welcome','to','the','zoo'));

// //使用默认值语法设置函数参数的默认值。

// // bad
// function handleThings(opts) {
//   opts = opts || {};
// }

// // good
// function handleThings(opts = {}) {
//   // ...
// }

//注意区分 Object 和 Map，只有模拟现实世界的实体对象时，才使用 Object。如果只是需要key: value的数据结构，使用 Map 结构。因为 Map 有内建的遍历机制。

// let map = new Map(arr);

// for (let key of map.keys()) {
//   console.log(key);
// }

// for (let value of map.values()) {
//   console.log(value);
// }

// for (let item of map.entries()) {
//   console.log(item[0], item[1]);
// }

var arr = [['name', '张三'], ['title', 'Author']];
var map = new Map(arr);
/* <Object> is not iterable
    at new Map (<anonymous>) */
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
   for (var _iterator = map.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var key = _step.value;

      console.log(key);
   }
} catch (err) {
   _didIteratorError = true;
   _iteratorError = err;
} finally {
   try {
      if (!_iteratorNormalCompletion && _iterator.return) {
         _iterator.return();
      }
   } finally {
      if (_didIteratorError) {
         throw _iteratorError;
      }
   }
}

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
   for (var _iterator2 = map.values()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var value = _step2.value;

      console.log(value);
   }
} catch (err) {
   _didIteratorError2 = true;
   _iteratorError2 = err;
} finally {
   try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
         _iterator2.return();
      }
   } finally {
      if (_didIteratorError2) {
         throw _iteratorError2;
      }
   }
}

var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
   for (var _iterator3 = map.entries()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var item = _step3.value;

      console.log(item[0], item[1]);
   }
} catch (err) {
   _didIteratorError3 = true;
   _iteratorError3 = err;
} finally {
   try {
      if (!_iteratorNormalCompletion3 && _iterator3.return) {
         _iterator3.return();
      }
   } finally {
      if (_didIteratorError3) {
         throw _iteratorError3;
      }
   }
}
