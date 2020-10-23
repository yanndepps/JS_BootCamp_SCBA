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
// displayUserBio(user);

// Challenge:
// The recommendations object contains a set of of nice places to visit in Brighton, UK,
// organized by what you'd like to do (eat pancakes, drink coffee etc).

// 1. Destructure the places to drink (coffee and beer) from recommendations
// 2. Destructure the places to listen to music
// 3. Write a function that takes the recommendations object as an argument and that
//      a) Logs out the music venues in recommendations when invoked
//      b) Uses object descructuring to get the "traditional" and "jazz" keys from the argument

const recommendations = {
  pancakes: 'Nowhere Man',
  riceBowls: 'Pompoko',
  beer: 'The Craft Beer Co.',
  coffee: 'Coffee Roasters',
  small_plates: 'Venetian Plates',
  music: {
    traditional: 'Fiddler\s Elbow',
    jazz: 'The Paris House'
  }
}

// 1.
const { coffee, beer } = recommendations;
// console.log('coffee:', coffee);
// console.log('beer:', beer);
// 2.
const { music: { traditional, jazz } } = recommendations;
// console.log('jazz music:', jazz);
// console.log('traditional music:', traditional);
// 3.
function musicVenues({ music: { traditional, jazz } }) {
  console.log(`music venues in the area: ${traditional} and ${jazz}`);
}

musicVenues(recommendations);
