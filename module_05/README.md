# Arrays & Sets


## flexible collections with array

-   arrays are data structures for managing collections of data where order is important.
    
    ```js
    const todos = [];
    ```

-   there are a number of built-in methods which enable us to manage the data in an array. for example `.push()`, which adds an element to the end of an array and `.pop()`, which removes an array&rsquo;s last element.
    
    ```js
    todos.push(todo1, todo2);
    todos.pop();
    ```
-   [code](step_01/src/app.js)


## check if elements exist in array

-   introducing some useful array methods: `.includes()` tells us whether a certain element exists in an array:
    
    ```js
    console.log(temperatures.includes(50));
    ```

-   `.some()` checks whether one or more elements in an array meets a given condition:
    
    ```js
    const result = temperatures.some(temperature => temperature.isRecordTemp);
    ```

-   `.every()` tells us whether a condition is true for all the elements in an array:
    
    ```js
    const result = temperatures.every(temperature => !temperature.isRecordTemp);
    ```

-   [code](step_02/src/app.js)


## perform action on all elements


## get subsets of arrays


## transform arrays with reduce


## mold arrays with spread operator
