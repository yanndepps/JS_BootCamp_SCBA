"use strict";

// if statements - evaluate boolean values
// else - provided when the if condition is not met

const preferDarkMode = false;
const preferSolarizeMode = true;

if (preferDarkMode) {
  console.log('dark mode set!');
  document.body.style.background = 'black';
} else if (preferSolarizeMode) {
  console.log('solarize mode set!');
  document.body.style.background = 'palegoldenrod';
} else {
  console.log('light mode set!');
  document.body.style.background = 'ghostwhite';
}
