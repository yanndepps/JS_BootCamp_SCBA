const nums = {
  1: 1,
  true: true
};

// console.log(Object.keys(nums));

const map1 = new Map([
  [ 1, 1 ],
  [ true, true ]
]);

map1.set('key', 'value');

// console.log([...map1.keys()]);

// map1.forEach((value, key) => {
//   console.log(key, value)
// });

const user1 = 'john';
const user2 = 'mary';

const secretKey1 = 'afdffuzi';
const secretKey2 = 'vnvnkdke';

const secretMap = new Map([
  [ user1, secretKey1 ],
  [ user2, secretKey2 ]
]);

// use WeakMap() for better garbage collection
// const secretMap = new WeakMap([
//   [ user1, secretKey1 ],
//   [ user2, secretKey2 ]
// ]);

const key = secretMap.get(user1);
// console.log(key);

// convert this object to a map:
const user = {
  name: 'garcia',
  verified: false
};

const userMap = new Map([
  [ 'name', 'garcia' ],
  [ 'verified', true ]
]);

// userMap.forEach((value, key) => {
//   console.log(key, value);
// });

// console.log(userMap.size);

// challenge:
// 1. Take the object (contains a favourite place in Brighton, UK), and turn it into a Map
// 2. Add a boolean property 'visited', to indicate places that you've been to it
// 3. Add an integer property 'averageBill' with how much you spend there on average
// 4. Fetch one of the properties using the get() method

const favouritePlace = {
  music: 'jazz',
  name: 'Paris House'
};

const favPlaceMap = new Map([
  [ 'music', 'jazz' ],
  [ 'name', 'Paris House' ]
]);

favPlaceMap.set('visited', true);
favPlaceMap.set('averageBill', 367);

const style = favPlaceMap.get('music');
const bill = favPlaceMap.get('averageBill');

// console.log(bill);
