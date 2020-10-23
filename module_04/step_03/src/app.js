// -4.56
const user = {
  name: 'john',
  username: 'johndoe',
  email: 'john@doe.com',
  details: {
    title: 'programmer'
  }
};

// const { username, email } = user;
// const { name, details: { title } } = user;

function displayUser() {
  console.log(`username: ${username}, email: ${email}`);
}

// function displayUserBio() {
//   console.log(`${name} is a great ${title}`);
// }

function displayUserBio({ name, details: { title } }) {
  console.log(`${name} is a great ${title}`);
}

// displayUser();
displayUserBio(user);
