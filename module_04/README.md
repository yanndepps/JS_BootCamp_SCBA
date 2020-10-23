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

-   [code](step_02/src/app.js)
