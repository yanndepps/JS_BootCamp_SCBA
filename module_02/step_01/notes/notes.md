## Notes

### Types & Conditionals

#### conditionnaly run JS code

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


### types and how they can be changed

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
