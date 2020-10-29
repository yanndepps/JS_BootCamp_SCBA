const temperatures = [
  {
    degrees: 69,
    isRecordTemp: false
  },
  {
    degrees: 82,
    isRecordTemp: false
  },
  {
    degrees: 73,
    isRecordTemp: false
  },
  {
    degrees: 64,
    isRecordTemp: false
  }
];

// console.log(temperatures.indexOf(50) > -1);
// console.log(temperatures.includes(73));

// is there at least one ? true : false
// const result = temperatures.some(temp => temp.isRecordTemp);
// console.log(result);

// now check for every element
const newresult = temperatures.every(temp => !temp.isRecordTemp);
// console.log(newresult);
//
// Challenge:
// Here's a list of 5 most popular songs on Spotify.
// 1) Check if any song has won a Grammy
// 2) Check if all the songs were streamed for at least 1.5 million times
// Note: the timesStreamed value is already in million

const songs = [
    {song: "Shape of You", timesStreamed: 2.384, wonGrammy: true},
    {song: "One Dance", timesStreamed: 1.791, wonGrammy: false},
    {song: "Rockstar", timesStreamed: 1.781	, wonGrammy: false},
    {song: "Closer", timesStreamed: 1.688, wonGrammy: false},
    {song: "Thinking Out Loud", timesStreamed: 1.461, wonGrammy: true}
]


const hasWonGrammy = songs.some(song => song.wonGrammy);
const megaStreamed = songs.every(song => song.timesStreamed >= 1.5);

// console.log(megaStreamed);
