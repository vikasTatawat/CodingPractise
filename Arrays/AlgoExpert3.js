let array = [-10, -11, 3, 5, 6, 8, 9];

function sortedSquaredArray(array) {
  // Write your code here.
  let left = 0;
  let right = array.length - 1;
  let result = [];
  for (let i = array.length - 1; i >= 0; i--) {
    if (Math.abs(array[left]) < Math.abs(array[right])) {
      result[i] = array[right] * array[right];
      right--;
    } else {
      result[i] = array[left] * array[left];
      left++;
    }
  }
  return result;
}
console.log(sortedSquaredArray(array));
