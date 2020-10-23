// the doulbe curly bracket is called the object literal syntax
// objectName.methodName()
// objectName.key

const obj = {
  sayHi() {
    console.log('hi');
  }
}

// obj.sayHi();

const blue= '#00f';
const orange= '#f60';

const colors = {
  yellow: '#ff0',
  blue,
  orange
}

// console.log(colors);
// console.log(colors.yellow);

// Challenge:
// 1. Create three variables - bar, cafe, restaurant - and set their values to a bar, a cafe and a restaurant in your city
// 2. Create an object - favouritePlaces - and populate it with your variables from task 1
// 3. If you're not already using the object property shorthand, refactor your code to do so
// 4. Create a method on the object - greeting() -  that logs out a message to the console
// 5. Invoke the greeting() method and also log out your favourite restaurant to the console

const bar = 'staedlibar';
const cafe = 'mona';
const restaurant = 'kung-fu burger';

const favouritePlaces = {
  bar,
  cafe,
  restaurant,
  greetings() {
    console.log(`my favourite restaurant is: ${restaurant} !`);
  }
}

favouritePlaces.greetings();
