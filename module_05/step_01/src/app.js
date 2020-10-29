const todos = [];

const todo1 = {
  text: 'wash the dishes',
  complete: false
};

const todo2 = {
  text: 'do laundry',
  complete: false
};

todos.push(todo1, todo2);

// const index = [todos.length-1];
// console.log(index);

todos.pop();

// console.log(todos);

// Challenge:
// 1. Create an array - favouriteSongs[] -  and add your 3 favourite songs using push()
// 2. Log out the last song in the array, and make it so that your solution will log out the last one regardless of how many items there are in the array
// 3. Invoke the pop method on your created array. What values do you have left in the array?

const favouriteSongs = [];

favouriteSongs.push('song_01');
favouriteSongs.push('song_02');
favouriteSongs.push('song_03');

favouriteSongs.pop();

const lastIndex = [favouriteSongs.length-1];
console.log(favouriteSongs[lastIndex]);
