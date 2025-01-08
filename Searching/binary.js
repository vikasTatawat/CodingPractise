let array = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73];
let target = 33;

function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;
  while (left <= right) {
    let mid = Math.ceil((left + right) / 2);

    if (array[mid] < target) {
      left = mid + 1; // Move left to the right of mid
    } else if (array[mid] > target) {
      right = mid - 1; // Move right to the left of mid
    }
  }
  return -1;
}
console.log(binarySearch(array, target));
