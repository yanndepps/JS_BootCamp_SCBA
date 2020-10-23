const color = 'green';
const hexCode = '#0f0';

const colors = {
  'yellow Color': '#ff0',
  blue: '#00f',
  orange: '#f60',
  [color]: hexCode
}

// mutating the object after it's been made, or add it directly above
// colors[color] = hexCode;

// values can change and updated at any time after an object has been created
colors.red = '#foo';
colors.red = '#f00';

// console.log(colors);
// console.log(colors['yellow Color']);


function getColor(key) {
  return colors[key];
}

console.log(getColor('blue'));
console.log(getColor([color]));

delete colors['yellow Color'];
console.log(colors);
