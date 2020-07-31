## Notes

### Variables & Strings

- variables are like boxes, places to store data
  ```
  var firstName = "John";
  ```
  
- name must only contain letters, numbers or symbols $ _
- first character must not be a number
- names must not use reserved words such as **var**
- camel-cased

### Better code with strict mode

1. sloppy mode : default in scripts
2. strict mode : throws more errors, prevents some pitfalls
   of the language
 
- to use strict mode, we add the following code at the top of our JS files :
  ```
  "use strict";
  ```

- if we forget the **var** keyword when creating a variable in sloppy mode
  it becomes a property of the global object
  **strict mode** prevents this
  
- **hoisting** : JS's ability to lift up variable declarations to the top
  of the file 
  ( access a variable before it has been created )
  
### Use let & const over var 

- with the release of ES6, two new ways to declare variables were
  introduced, namely **let** and **const** 
- these two new ways to declare variables solve a lot of issues which
  had been there in the language for a long time
- using **let** we can declare variables which are _blocked scoped_ but can
  be reassigned to different values
- using **const**, which is also _blocked scoped_, we can create variables
  which can not be reassigned
- temporal dead zone : space between declaration and accessibilty
