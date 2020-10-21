
function handleLikePose(step) {
  let likeCount = 0;
  return function addLike() {
    likeCount += step;
    return likeCount;
  }
}

const like = handleLikePose(2);

// console.log(like());
// console.log(like());
// console.log(like());

// Challenge : write a countdown function with a hard-coded starting number inside
// starting goal : write a countdown function that can count from a provided number
// with a provided step.

function countdown(start, step) {
  // let startNum = start + step;
  let startNum = start;
  return function result() {
    startNum -= step;
    return startNum;
  }
}

const countingDown = countdown(6, 2);
// console.log(countingDown());
// console.log(countingDown());
// console.log(countingDown());
