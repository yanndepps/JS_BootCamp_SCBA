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

