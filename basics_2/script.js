// "use strict";

// let message = "Good Morning!",
//     name = "John",
//     action = "Get Lost";

// const BIRTHDAY = "45.17.2165"

// [message, name, action].forEach(alert)

// ======================================================


// let str = "not";
// let str2 = `I\'m so ${str} glad to see you`;
// alert(str2)

// alert(`I have ${1 + 2} more braincells than you!`);

// let num = 1234;
// let imcool = true;
// let problems = null;
// let future = undefined;

// typeof undefined // "undefined"

// typeof 0 // "number"

// typeof 10n // "bigint"

// typeof true // "boolean"

// typeof "foo" // "string"

// typeof Symbol("id") // "symbol"

// typeof Math // "object"  (1)

// typeof null // "object"  (2)

// typeof alert // "function"  (3)


// =====================================================


// let user_name = prompt("What's your name?", "chort");
// alert(`Your name is ${user_name}`);

// let isCool = confirm("Are you cool?");
// if (isCool == true) {
//     alert("No, you're not.");
// } else {
//     alert("Yes, you're not.");
// }


// ======================================================


// let hour = 12;
// let isWeekend = true;
// let minute = 30;

// if (hour < 10 || hour > 18 || isWeekend) {
//   alert( 'The office is closed.' ); // it is the weekend
// }

// if (hour == 12 && minute == 30) {
//   alert( 'The time is 12:30' );
// }

// alert( !true ); // false
// alert( !0 ); // true


// ======================================================


// let firstName = null;
// let lastName = null;
// let nickName = "Supercoder";

// // shows the first defined value:
// alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder


// =======================================================


// for (let i = 0; i < 3; i++) {
//   alert(i); // 0, 1, 2
// }
// alert(i); // error, no such variable


// let i = 0;
// do {
//   alert( i );
//   i++;
// } while (i < 3);


// let sum = 0;
// while (true) {
//   let value = +prompt("Enter a number", '');
//   if (!value) break; // (*)
//   sum += value;
// }
// alert( 'Sum: ' + sum );


// outer: for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     let input = prompt(`Value at coords (${i},${j})`, '');
//     // if an empty string or canceled, then break out of both loops
//     if (!input) break outer; // (*)
//     // do something with the value...
//   }
// }
// alert('Done!');


// ================================================


// let arg = prompt("Enter a value?");
// switch (arg) {
//   case '0':
//   case '1':
//     alert( 'One or zero' );
//     break;

//   case '2':
//     alert( 'Two' );
//     break;

//   case 3:
//     alert( 'Never executes!' );
//     break;
//   default:
//     alert( 'An unknown value' );
// }


// ==================================================


// function showPrimes(n) {

//   for (let i = 2; i < n; i++) {
//     if (!isPrime(i)) continue;

//     alert(i);  // a prime
//   }
// }

// function isPrime(n) {
//   for (let i = 2; i < n; i++) {
//     if ( n % i == 0) return false;
//   }
//   return true;
// }


// ===================================================


// let age = prompt("What is your age?", 18);

// let welcome = (age < 18) ?
//   () => alert('Hello!') :
//   () => alert("Greetings!");

// welcome();


// ====================================================



