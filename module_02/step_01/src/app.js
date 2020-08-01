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

// Types and how they can be changed
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

// Avoid direct comparisons in conditionals :
// const userName = '';
// if (!userName) {
//   console.log('no user');
// }

// Use triple equals ( strict equals operator ) : it will prevent coercion
// if (null === undefined) {
//   console.log('equals');
// } else {
//   console.log('not equals');
// }

// Convert to real Boolean values when needed :
// if (Boolean(NaN) === Boolean(NaN)) {
//   console.log('equals');
// } else {
//   console.log('not equals');
// }

// Challenge 1:
// What will the following console logs display? (they're all true and false)

// console.log("Challenge 1:");
// console.log(!undefined); // true
// console.log(Boolean(NaN)); // false
// console.log(false === false); // true
// console.log(5 === "5"); // false
// console.log("Hello" == "hello"); // false

// Challenge 2:
// What will the following console logs display? (they're all true and false)
// console.log("Challenge 2:");
// console.log(Boolean(0)); // false
// console.log(Boolean("0")); // true
// console.log(Boolean("")); // false
// console.log(!null); // true
// console.log(!!"hello"); // true

// Challenge 3:
// List all the falsy values in JavaScript
// NaN, undefined, 0, "", null, false

// shorten conditionals with ternaries :
// const isAuthenticated = true;
// let cartItemCount = 0;

// if (isAuthenticated) {
//   // add item to cart
//   cartItemCount = 1;
//   console.log('cart:', cartItemCount);
// } else {
//   // tell user to log in
//   cartItemCount = 0;
//   // console.log('please log in!');
//   console.log('cart:', cartItemCount);
// }

// const isAuthenticated = true;
// const cartItemCount = isAuthenticated ? 1 : 0;
// console.log(cartItemCount);

// const age = 20;
// let greeting;

// if (age < 10) {
//   greeting = 'hey there!';
// } else {
//   greeting = 'interesting age!';
// }

// console.log(greeting);

// const age = 20;
// const greeting = age < 10 ? 'hey there!' : 'interesting age!';
// console.log(greeting);

// Chain multiple ternaries together :

// const age = 15;
// let greeting;

// if (age < 10) {
//   greeting = 'hey there!';
// } else if (age > 18) {
//   greeting = 'Greetings!'
// } else if (age > 15) {
//   greeting = 'whats up!'
// } else {
//   greeting = 'interesting age!';
// }

// console.log(greeting);

// const age = 15;
// const greeting = age < 10 ? "Hey there" : age > 18 ? "Greetings" : age > 10 ? "What's up?" : "That's an interesting age!";
// console.log(greeting);

// Challenge 1: Check if the user is allowed to add an "iPad" to its shopping cart. Write a ternary that sets the shoppingCart variable to "iPad" if the user is authenticated, and an empty string if the user isn't authenticated

// const isAuthenticated = true;
// let shoppingCart;

// write your code here
// const isAuthenticated = true;
// const shoppingCart = isAuthenticated ? 'iPad' : 'no user';
// console.log("shoppingCart: ", shoppingCart);


// Challenge 2: Check if user is old enough. Write a ternary that sets allowedAccess to true if the age is 18 or more, or false if not
// const age = 20;
// let allowedAccess;

// write your code here
// const age = 18;
// const allowedAccess = age >= 18 ? 1 : 0;

// console.log("allowedAccess: ", allowedAccess);

// Even Shorter Conditionals with Short-Circuiting
// const response = 'yann';
// let userName;

// if (response) {
//   userName = response;
// } else {
//   userName = 'guest';
// }

// const response = 'yann';
// const userName = response ? response : 'guest';

// console.log(userName);

// 1. using || ( OR operator ) -> return the truthy valuev:
// if we have a value, use it. otherwise use the fallback
// const response = 'yann';
// const userName = response || 'guest';
// console.log(userName);

// 2. evalute multiple conditions with && ( AND operator ) -> return the falsy value
const response = 'yann';
const isEmailVerified = true;

// const userName = response && isEmailVerified || 'guest';
// one value being falsy, returns fallback. take care of the order of operation with && !
// be careful of operator precedence : the order in which the operation are performed
// && as higher order precedence over || for instance. we can use () to overwrite
// operator precedence :
const userName = isEmailVerified && (response || 'guest');
// that's because () have the highest order in JS
// so if we want one expression to be evaluated first, we wrap it into ()
// const userName = isEmailVerified && response || 'guest';
// console.log(userName);
