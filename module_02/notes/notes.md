## Notes

### Types & Conditionals

#### Conditionnaly run JS code

- applications need the ability to do things based on different conditions
- there are two ways of modifying flow control to achieve this

  1. **if/else** statements :
  ```
  if (prefersDarkMode) {
    document.body.style.background = 'black';
  } else if (prefersSolarizedMode) {
    document.body.style.background = 'palegoldenrod';
  } else {    
    document.body.style.background = 'ghostwhite';
  }
  ```

  - N/B : if/else statements work according to the condition which is met first
  
  2. **switch** statements :
  ```
  switch (colorMode) {
    case "solarized":
      document.body.style.background = 'palegoldenrod';
    break;
    case 'dark':
      document.body.style.background = 'black';
    break;
    default:
      document.body.style.background = 'ghostwhite';
  }
  ```
  
  - N/B : in switch statements, if none of the cases match, the default case runs


### Types and how they can be changed

- there are two ways to convert data from one type to another in JS :
  1. **explicit** type conversion : where we tell JS that we want to change 
     the data types 
  2. **implicit** ( automatic ) type conversion ( coercion ) : in which JS changes 
     data types automatically
     ```
     console.log("10" + 20);
     ```
     
- all data in JS can be divided in two categories :
  1. **truthy**
  2. **falsy**

- **falsy** values are _false_, _0_, _''_, _null_, _undefined_, _NaN_
- all other values are **truthy**
- when working with **falsy** values :
  1. avoid direct comparisons in conditionals
  2. use triple equals ( strict equals operator ) to prevent type conversion
  3. convert to real Boolean values where needed


### Shorten conditionals with ternaries

- if/else statements can be repetitive
- in order to conditionnaly assign a variable without repetition,
  we can use **ternary operators** :
  ```
  const cartItemCount = isAuthenticated ? 1 : 0;
  ```
  
- N/B : continue to use if/else statements and not ternaries :
  1. if you want to perform an action
  2. if the condition is complex

- the ternary operator is an expression not a statement


### Even Shorter Conditionals with Short-Circuiting
- we can make conditionals shorter with **logical operators** such
  as || ( or ) or && ( and ) 
- this is known as **short-circuiting**
  ```
  const username = response || "guest";
  const username = isEmailVerified && response || "guest";
  ```
  
- N/B : **operator precedence** ( the order in which the operations are performed )
  means that && will be performed before ||
  if we need to change this, we can use parentheses ( || ) which have the
  highest operator precedence of all
  ```
  const username = isEmailVerified && (response || "guest");
  ```

