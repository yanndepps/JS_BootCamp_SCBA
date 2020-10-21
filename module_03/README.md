# Functions


## why we need functions

-   to perform similar actions in many places in a program without code repetition, we need to use *functions*.
    
    ```js
    function echo(input) {
        console.log(input);
    }
    ```

-   **NB:** a variable declared in a function only exists inside that function.
    
    ```js
    function echo(input) {
        let greeting;
        console.log(input);
    }
    ```

-   however, a function can access variables declared outside of its scope. it can also be passed input via *arguments*.
    
    ```js
    let greeting = 'hi';
    
    function echo(input) {
        console.log(`${greeting} ${input}`);
    }
    echo(42);
    ```

-   [code](step_01/src/app.js)


## what is a closure and why it matters

-   a closure is an inner function that is inside its outer function&rsquo;s scope and has access to its variables:
    
    ```js
    function handleLikePost(step) {
        let likeCount = 0;
        return function addLike() {
            likeCount += step;
            return likeCount;
        }
        addLike();
    }
    ```
    
    1.  Closures are a property of JavaScript functions.
    2.  Call functions in different scope than where function was originaly defined.
    3.  Closures allow us to remember or keep track of certain values.

-   [code](step_02/src/app.js)


## better functions with default parameters

-   default function values enable us to save default values directly onto our function parameters. these are then used if the value is undefined in the function :
    
    ```js
    function convertTemp(celsius, decimalPlaces = 1) {
        const fahrenheit = celsius * 1.8 + 32;
        return Number(fahrenheit.toFixed(decimalPlaces));
    }
    ```

-   [code](step_03/src/app.js)


## shorter functions with arrow functions

-   arrow functions allow us to write more concise code. they are :
    1.  function expressions ( assigned to a variable ).
    2.  anonymous ( can&rsquo;t give them a name ).
-   implicit returns mean that the value following the => is always returned, so the `return` keyword is not needed.

```js
const capitalize = name => `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
```

-   [code](step_04/src/app.js)


## partial application for single-responsibility functions

-   rather than having one function which does multiple actions, *partial application* allows us to split functions into those which have single, clearly-defined responsibilities.
-   this improves code readability and allows us to separate our concerns.

```js
function getData(baseURL) {
    return function(route) {
        return function(callback) {
            fetch(`${baseURL}${route}`)
                .then(response => response.json())
                .then(data => callback(data));
        }
    }
}
```

-   [code](step_05/src/app.js)
