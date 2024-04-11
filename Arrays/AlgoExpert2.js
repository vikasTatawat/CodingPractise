let array = [5, 1, 22, 25, 6, -1, 8, 10];
let sequence = [1, 6, -1, 10];
function isValidSubsequence(array, sequence) {
  // Write your code here.
  let seqIndex = 0;
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] == sequence[seqIndex]) {
      newArray.push(array[i]);
      seqIndex++;
    }
  }
  return newArray.length == sequence.length;
}

console.log(isValidSubsequence(array, sequence));
