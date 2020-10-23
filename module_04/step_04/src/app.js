const user = {
  name: "",
  username: "",
  phoneNumber: "",
  email: "",
  password: "",
  verified: true
};

const newUser = {
  username: 'johndoe',
  email: 'john@doe.com',
  password: 'mypassword'
}

// update an object with properties from an other one
// Object.assign(user, newUser);
// the problem is that the original object is being mutated as well
// console.log(user);
// we can fix this by adding an empty object:
// console.log( Object.assign({}, user, newUser, { verified: false }) );
// console.log(user);

// using the spread operator in an immutable way:
// note that the order matters: the last value provided is used

const createdUser = { ...user, ...newUser, verified: false };
console.log(createdUser);
console.log(user);
