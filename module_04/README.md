# Objects & Maps


## intro

-   what problems objects solve
-   primitive vs object types
-   get and modify object data
-   easier objects with destructuring
-   merge objects with spread operator
-   how maps can do what objects can&rsquo;t


## use objects for managing key-value pairs

-   objects are used to store unchanging, key-value data.
-   think of variables as boxes and objects as file cabinets. keys are names of files, and values are the content of the files.
-   keys can only be strings, but values can be any data type, including other objects.
-   nested objects :
    
    ```js
    {
        key: {
            key: 'value'
        }
    }
    ```

-   objects can also include functions :
    
    ```js
    {
        sayHi() { console.log('hi'); }
    }
    ```

-   [code](step_01/src/app.js)


## understand primitive vs object types

-   **primitive** data types ( undefined, null, boolean, number, string and symbol ) are *passed by value* : data is passed into a copy of the original value, meaning that the following code returns true:
    
    ```js
    const num = 'hello world';
    const anotherNum = 'hello world';
    console.log(num === anotherNum);
    ```

-   **objects** are data structures which can hold any number of primitives. they do not return equal even if they are the same. this is because they are *passed by reference*.
-   whenever we pass an object to a variable or a function, either one just holds a reference to it.
-   this means that the following code updates both `obj` and `anotherObj` at once :
    
    ```js
    const obj = {};
    const anotherObj = obj;
    anotherObj.a = 1;
    console.log(obj);
    ```

-   **note:** although this behaviour allows us to dynamically add properties to objects, it can cause problems. we&rsquo;ll learn how to fix these in the following screencasts.


## get and modify object data

-   values in an object can be changed or updated using the dot syntax:
    
    ```js
    colors.red = '#f00';
    ```

-   we can add properties to objects ( as long as they are valid strings ) by using quotes: ( this can include spaces )
    
    ```js
    'yellow Color': '#ff0';
    ```

-   the square brackets notation ( [] ) allows us to get values with spaces:
    
    ```js
    console.log(colors['yellow Color']);
    ```

-   we can also use the square brackets notation to dynamically add new key-value pairs to our object:
    
    ```js
    const color = {
        'yellow Color': '#ff0',
        blue: '#00f',
        orange: '#f60',
        [color]: hexCode
    }
    ```

-   the `delete` operator allows us to remove a property:
    
    ```js
    delete colors['yellow Color'];
    ```

-   [code](step_02/src/app.js)


## easy property access with destructuring

-   object destructuring allows us to pull properties from an object and make them into variables:
    
    ```js
    const { username, email } = user;
    ```

-   we destructure nested object as follow:
    
    ```js
    const { name, details: { title } } = user;
    ```

-   [code](step_03/src/app.js)


## merge objects with object spread

-   `Object.assign()` allows us to merge properties from two or more objects into a new object:
    
    ```js
    Object.assign({}, user, newUser);
    ```

-   however, this is not very intuitive or readable. a cleaner way of doing this is to use the `spread` operator ( &#x2026; ) :
    
    ```js
    const createdUser = { ...user, ...newUser, verified: false };
    ```

-   [code](step_04/src/app.js)
