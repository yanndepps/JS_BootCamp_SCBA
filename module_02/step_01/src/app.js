"use strict";

// if statements - evaluate boolean values
// else - provided when the if condition is not met

// const preferDarkMode = false;
// const preferSolarizeMode = true;

// if (preferDarkMode) {
//   console.log('dark mode set!');
//   document.body.style.background = 'black';
// } else if (preferSolarizeMode) {
//   console.log('solarize mode set!');
//   document.body.style.background = 'palegoldenrod';
// } else {
//   console.log('light mode set!');
//   document.body.style.background = 'ghostwhite';
// }

// Challenges
// Challenge 1: create a conditional that logs out "Good morning!", "Good evening!" and so on depending on the value of time (<- a variable)

// Challenge 2: Rewrite the whole thing as a switch statement

// const time = 'morning';

// if (time === 'morning') {
//   console.log('good morning');
// } else if (time === 'evening') {
//   console.log('good evening');
// } else if (time === 'night') {
//   console.log('good night');
// } else {
//   console.log('good afternoon');
// }

// switch (time) {
//   case 'morning':
//     console.log('good morning');
//     break;
//   case 'evening':
//     console.log('good evening');
//     break;
//   case 'afternoon':
//     console.log('good afternoon');
//     break;
//   default:
//     console.log('hello');
// }

// types and how they can be changed
/*
 * primitive types :
 *
 * string
 * number
 * boolean
 * undefined
 * null
 * symbol
 *
 * everything else - Object type
 */

// let message = 'some string';
// console.log(typeof message);
// console.log(typeof 47);
// console.log(typeof true);
// console.log(typeof window);

// Explicit type conversion :
// console.log(String(42));

// Implicit type conversion ( coercion )

// let coer = '1' * '2';
// console.log(coer);
// console.log(typeof coer);

// avoid direct comparisons in conditionals :
// const userName = '';
// if (!userName) {
//   console.log('no user');
// }

// use triple equals ( strict equals operator ) : it will prevent coercion
// if (null === undefined) {
//   console.log('equals');
// } else {
//   console.log('not equals');
// }

// convert to real Boolean values when needed :
if (Boolean(NaN) === Boolean(NaN)) {
  console.log('equals');
} else {
  console.log('not equals');
}
