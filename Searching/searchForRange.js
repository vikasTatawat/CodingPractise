let array = [0, 1, 21, 33, 45, 45, 45, 45, 45, 45, 61, 71, 73];
let target = 45;

function searchForRange(array, target) {
  // Write your code here.
  let finalResult = [-1, -1];
  binarySearch(array, target, 0, array.length - 1, finalResult, true);
  binarySearch(array, target, 0, array.length - 1, finalResult, false);
  return finalResult;
}
function binarySearch(array, target, left, right, finalResult, goLeft) {
  while (left <= right) {
    let mid = Math.ceil((left + right) / 2);
    if (array[mid] < target) {
      left = mid + 1; // Move left to the right of mid
    } else if (array[mid] > target) {
      right = mid - 1; // Move right to the left of mid
    } else {
      if (goLeft) {
        if (mid === 0 || array[mid - 1] !== target) {
          finalResult[0] = mid;
          return;
        } else {
          right = mid - 1;
        }
      } else {
        if (mid === array.length - 1 || array[mid + 1] !== target) {
          finalResult[1] = mid;
          return;
        } else {
          left = mid + 1;
        }
      }
    }
  }
}

console.log(searchForRange(array, target));
