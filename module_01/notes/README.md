# Notes
- [Notes](#notes)
  - [variables & strings](#variables--strings)
  - [strict mode](#strict-mode)
  - [use let & const](#use-let--const)
  - [const](#const)
  - [why block scoping matters](#why-block-scoping-matters)
  - [how template literals improve strings](#how-template-literals-improve-strings)
  - [how variables should be named](#how-variables-should-be-named)


## variables & strings

- variables are like boxes, places to store data
  ```
  var firstName = "John";
  ```
  
- name must only contain letters, numbers or symbols $ _
- first character must not be a number
- names must not use reserved words such as **var**
- camel-cased

## strict mode

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
  
## use let & const

- with the release of ES6, two new ways to declare variables were
  introduced, namely **let** and **const** 
- these two new ways to declare variables solve a lot of issues which
  had been there in the language for a long time
- using **let** we can declare variables which are _blocked scoped_ but can
  be reassigned to different values
- using **const**, which is also _blocked scoped_, we can create variables
  which can not be reassigned
- temporal dead zone : space between declaration and accessibilty

## const

- **const** has restrictions which make the code more readable :
  1. must be initialized with a value 
  2. can't be reassigned after declaration
  
- declaring a variable with the keyword **const** makes it easier to
  understand the code
- as we know that **const** doesn't allow the variable to be reassigned,
  we can be sure of its value and usage throughout the entire code
  
## why block scoping matters

- as we know that **block** in JS can be defined by a set of opening and
  closing curly brackets
- therefore, using variables with blocking scope helps a lot in keeping 
  the global scope less polluted
- also, it helps reducing the chances or errors to occur because of variables
  with same name disturbing the logic and flow
- **var** is known to create the problematic **variable shadowing**
- let and const are **block scoped**

## how template literals improve strings

- template literals improve our code by allowing us to :
  1. add variables inside strings ( string interpolation )
  ```
  let message = `Hi ${username}, how are you?`;
  ```
  2. use quotes inside strings
  ```
  `He said, "I am a string."`;
  ```
  3. write multi-line strings
  ```
  const threeLines = `This is a string 
  that spans across 
  three lines.
  `;
  ```
  
## how variables should be named

 - variable identifiers should be self-descriptive and shouldn't
   require comments for others to know what they hold
 - variables are case-sensitive and should be written in camelCase
   ```
   let fullName = `${firstName} ${lastName}`;
   ```
   
 - variables which hold booleans are usually prefixed with **is** or **has**
   ```
   let isModalVisible = true;
   ```
   
- variables which should not be changed ( including by other devs ) should
  be named in ALL CAPS
  ```
  const COLOR_RED = '#f00';
  ```
