"use strict";

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

// let jspang='技术胖x';
// let blog = '非常高兴你能看到这篇文章，我是你的老朋友技术胖。这节课我们学习字符串模版。';
// if(blog.includes(jspang)){  // 返回true /false
//     console.log(blog.includes(jspang));
//     alert("include");
//   }else{
//       alert("not include");
//   }
//   if(blog.indexOf(jspang)){  //此方法有bug? **********************
//       alert("indexOf方法判断是否包含： 包含");
//       console.log(blog.indexOf(jspang));
//   }else{
//     alert("indexOf方法：not include");      
//   }
// document.write('jspang|'.repeat(3));
//alert('jspang|'.repeat(3));

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
//console.log(arr);
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
var arr1 = [1, 2, 3, 4, 5, 6];
var arr2 = arr1.map(function (item) {
  return item * item;
});
alert(arr2);
//console.log(arr.map(x=>'web'));
