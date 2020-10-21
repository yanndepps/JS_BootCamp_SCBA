// input -> performs an action
// input -> returns some data


function echo(input, greeting) {
  return `${greeting} ${input}`;
}

const result = echo(42, 'hi');
// console.log(result);

// ---

const user1 = 'Reed';
const user2 = 'Doug';

function sendUserMessage(user, text) {
  return `User ${user} says: ${text}`;
}

// console.log(sendUserMessage(user1, "Jumbo Brain !"));
// console.log(sendUserMessage(user2, "Pongus Solaris !"));

// Challenge: write a function splitBill() that lets you know how much
// you need to pay to split any bill between you and your friends.
// it should return a message with a number.

function splitBill(amount, friends) {
  return `each person needs to pay ${Math.ceil( amount / friends )}`;
}

// console.log(splitBill(10, 2));
// console.log(splitBill(16, 4));
// console.log(splitBill(350, 9));
