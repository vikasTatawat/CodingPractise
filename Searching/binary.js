let array =  [0, 1, 21, 33, 45, 45, 61, 71, 72, 73];
let target = 33;

function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;
  while (left <= right) {
    let mid = Math.ceil((left + right) / 2);

    if (array[mid] == target) {
      return mid;
    } else if (array[mid] < target) {
      left++;
    } else if (array[mid] > target) {
      right--;
    }
  }
  return -1;

}
console.log(binarySearch(array, target));