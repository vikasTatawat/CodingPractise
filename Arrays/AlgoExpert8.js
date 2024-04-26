let arrayOne = [-1, 5, 10, 20, 28, 3];
let arrayTwo = [26, 134, 135, 15, 17];

function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.
  let lastSmallestDiff = Infinity;
  let lastArray = [];
  let sortedArrayOne = arrayOne.sort((a, b) => a - b);
  let sortedArrayTwo = arrayTwo.sort((a, b) => a - b);
  let left = 0;
  let right = 0;
  let current = Infinity;
  while (left < sortedArrayOne.length && right < sortedArrayTwo.length) {
    let firstNum = sortedArrayOne[left];
    let secondNum = sortedArrayTwo[right];

    if (firstNum < secondNum) {
      current = secondNum - firstNum;
      left++;
    } else if (secondNum < firstNum) {
      current = firstNum - secondNum;
      right++;
    } else {
      return [firstNum, secondNum];
    }
    if (current < lastSmallestDiff) {
      lastSmallestDiff = current;
      lastArray = [firstNum, secondNum];
    }
  }
  return lastArray;
}

console.log(smallestDifference(arrayOne, arrayTwo));
