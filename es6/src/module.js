/*Module的语法*/
// 需要特别注意的是，export命令规定的是对外的接口，必须与模块内部的变量建立一一对应关系。
// 输出变量
//方法一
// export var firstName = 'Michael';
// export var lastName = 'Jackson';
// export var year = 1958;
// //方法二
// var firstName = 'Michael';
// var lastName = 'Jackson';
// var year = 1958;
// export {firstName, lastName, year};
// //方法三
// var n = 1;
// export {n as m}

// //报错写法
// // export 1;
// // //报错
// // var m = 1;
// // export m;


// //输出方法
// function v1() { /*... */ }
// function v2() { /*... */ }

// export {
//   v1 as streamV1,
//   v2 as streamV2,
//   v2 as streamLatestVersion
// };

// //报错写法如下:
// // function f(){}
// // export f;

// //正确
// export function f(){ }

// //正确
// function f(){}
// export {f};
// //export语句输出的接口，与其对应的值是动态绑定关系，即通过该接口，可以取到模块内部实时的值。
// //export命令可以出现在模块的任何位置，只要处于模块顶层就可以。

// //import
// import {firstName,lastName,year} from 'xxx.js';
// function setName(element){
//    element.textContent = firstName + '' + lastName;
// }

// //别名
// import {lastName as lName} from ''

// //模块路径相对路径、绝对路径
// import {myMethod} from 'util';

// //import命令具有提升效果，会提升到整个模块的头部
// foo();
// import { foo } from 'my_module';

// //通过 Babel 转码，CommonJS 模块的require命令和 ES6 模块的import命令，可以写在同一个模块里面，但是最好不要这样做。

// //export default
// // export-default.js
// export default function () {
//    console.log('foo');
// }
// // 或者写成

// function foo() {
//     console.log('foo');
//   }
  
// export default foo;

// // import-default.js
// import customName from './export-default';  //这时import命令后面，不使用大括号
// customName(); // 'foo'

// //default对比查看
// // 第一组
// export default function crc32() { // 输出
//     // ...
// }
// import crc32 from 'crc32'; // 输入
// //一个模块只能有一个默认输出，因此export default命令只能使用一次。所以，import命令后面才不用加大括号，因为只可能唯一对应export default命令。
// // 第二组
// export function crc32() { // 输出
// // ...
// };
// import {crc32} from 'crc32'; // 输入
//本质上，export default就是输出一个叫做default的变量或方法，然后系统允许你为它取任意名字。所以，下面的写法是有效的。


//export default命令用在非匿名函数前，也是可以的。
// export-default.js
// export default function foo() {
//     console.log('foo');
//   }
  
//   // 或者写成
  
//   function foo() {
//     console.log('foo');
//   }
  
//   export default foo; 



//export与import的复合写法
export { foo, bar } from 'my_module';

// 可以简单理解为
import { foo, bar } from 'my_module';
export { foo, bar };
//上面代码中，export和import语句可以结合在一起，写成一行。但需要注意的是，写成一行以后，foo和bar实际上并没有被导入当前模块，只是相当于对外转发了这两个接口，导致当前模块不能直接使用foo和bar。



//










