let array = [3, 5, -4, 8, 11, 1, -1, 6];
let targetSum = 10;

function twoNumberSum(array, targetSum) {
  // Write your code here.
  let left = 0;
  let right = array.length - 1;
  let newArray = array.sort((a, b) => a - b);

  let finalArray = [];
  while (left < right) {
    let sum = newArray[left] + newArray[right];
    if (sum < targetSum) {
      left++;
    }
    if (sum > targetSum) {
      right--;
    }
    if (sum == targetSum) {
      finalArray.push(newArray[left], newArray[right]);
      left++;
      right--;
    }
  }
  return finalArray;
}

console.log(twoNumberSum(array, targetSum));
