# Arrays & Sets

## flexible collections with array

- arrays are data structures for managing collections of data where order is important.

  ```js
  const todos = [];
  ```

- there are a number of built-in methods which enable us to manage the data in an array. for example `.push()`, which adds an element to the end of an array and `.pop()`, which removes an array&rsquo;s last element.

  ```js
  todos.push(todo1, todo2);
  todos.pop();
  ```

- [code](step_01/src/app.js)

## check if elements exist in array

- introducing some useful array methods: `.includes()` tells us whether a certain element exists in an array:

  ```js
  console.log(temperatures.includes(50));
  ```

- `.some()` checks whether one or more elements in an array meets a given condition:

  ```js
  const result = temperatures.some((temperature) => temperature.isRecordTemp);
  ```

- `.every()` tells us whether a condition is true for all the elements in an array:

  ```js
  const result = temperatures.every((temperature) => !temperature.isRecordTemp);
  ```

- [code](step_02/src/app.js)

## perform action on all elements

- `.map` allows us to transform each element of an array and create a new array:

  ```js
  const newTemps = temperatures.map((temperature) =>
    temperature.degrees > 70 ? { ...temperature, isHigh: true } : temperature
  );
  ```

- `.forEach()` works in a similar way but does not create a new array, and instead applies a given action to an existing array.
- Methods can be chained
- [code](step_03/src/app.js)

## get subsets of arrays

- `.map()` always returns an array of the same length as the original.
- `.filter()` allows us to return just part of the data.

  ```js
  const result = restaurants.filter((restaurant) =>
    restaurant.name.startWith("C")
  );
  ```

- `.find()` works in the same way as `.filter()` but returns just one array element.

  ```js
  const result = restaurants.find(
    (restaurant) =>
      restaurant.name.toLowerCase().includes("north") &&
      restaurant.milesAway < 2
  );
  ```

- [code](step_04/src/app.js)

## transform arrays with reduce

## mold arrays with spread operator
