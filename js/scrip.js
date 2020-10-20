// alert('hello world');
// alert(1/0)

// 嵌入一个变量,仅仅在反引号内有效，其他引号不允许这种嵌入。
// let name = "John";
// alert( `Hello, ${name}!` ); // Hello, John! 

// let name = "Ilya";
// alert( `hello ${1}` ); // ?
// alert( `hello ${"name"}` ); // ?
// alert( `hello ${name}` ); // ?

// let age = prompt('How old are you?', 100);
// alert(`You are ${age} years old!`); // You are 100 years old!

// let isBoss = confirm("Are you the boss?");
// alert( isBoss ); // 如果“确定”按钮被按下，则显示 true


// 对数字无效
// let x = 1;
// alert( +x ); // 1

// let y = -2;
// alert( +y ); // -2

// // 转化非数字
// alert( +true ); // 1
// alert( +"" );   // 0

// let year = 2020
// if (year == 2020) {
//     alert( "That's correct!" );
//     alert( "You're so smart!" );
//   }

// let userName = prompt("Who's there?", '');

// if (userName == 'Admin') {

//   let pass = prompt('Password?', '');

//   if (pass == 'TheMaster') {
//     alert( 'Welcome!' );
//   } else if (pass == '' || pass == null) {
//     alert( 'Canceled' );
//   } else {
//     alert( 'Wrong password' );
//   }

// } else if (userName == '' || userName == null) {
//   alert( 'Canceled' );
// } else {
//   alert( "I don't know you" );
// }

// let i = 0;
// while (i < 3) { // 依次显示 0、1 和 2
//   alert( i );
//   i++;
// }

// for (let i = 0; i < 3; i++) { // 结果为 0、1、2
//     alert(i);
//   }

// function showMessage() {
//     alert('1111');
// }

// showMessage()

// function showMessage(from, text) { // 参数：from 和 text
//     alert(from + ': ' + text);
//   }
  
//   showMessage('Ann', 'Hello!'); // Ann: Hello! (*)

// function checkAge(age) {
//     if (age >= 18) {
//       return true;
//     } else {
//       return confirm('Got a permission from the parents?');
//     }
//   }
  
//   let age = prompt('How old are you?', 18);
  
//   if ( checkAge(age) ) {
//     alert( 'Access granted' );
//   } else {
//     alert( 'Access denied' );
//   }
  
  function sayHi() {
    alert( "Hello" );
  }
  
  alert( sayHi ); // 显示函数代码