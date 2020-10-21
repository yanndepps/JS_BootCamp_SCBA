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
