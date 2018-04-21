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
// //字符串解构
// const [a,b,c,d,e,f] = "Panda";
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// 扩展运算符和rest运算符
function test1(arg) {
    // console.log(arg[0]);
    // console.log(arg[1]);
    // console.log(arg[2]);
    // console.log(arg[3]);
    console.log(test1);
}
test1(1, 2, 3);
