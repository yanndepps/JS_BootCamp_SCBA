// perform action on all elements
// .map transforms an array and gives us a new one with that
// transformed data

const temperatures = [
  { degrees: 69, isRecordTemp: false },
  { degrees: 82, isRecordTemp: true },
  { degrees: 73, isRecordTemp: false },
  { degrees: 64, isRecordTemp: false }
];

const newTemps = temperatures.map(temperature =>
  temperature.degrees > 70 ? { ...temperature, isHigh: true } : temperature
);

// console.log(newTemps);

// .forEach() just iterates through each elements and apply the
// given action to each of them and does not create an array.

newTemps.forEach(temperature => {
  if (temperature.isHigh) {
    console.log(`Temperature ${temperature.degrees} was a record high last week!`);
  }
});

// we can use method chaining :
temperatures.map(temperature =>
  temperature.degrees > 70 ? { ...temperature, isHigh: true } : temperature
) .forEach(temperature => {
  if (temperature.isHigh) {
    console.log(`Temperature ${temperature.degrees} was a record high last week!`);
  }
});
