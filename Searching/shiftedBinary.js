let array = [72, 73, 0, 1, 21, 33, 37, 45, 61, 71];
let target = 72;

function shiftedBinarySearch(array, target) {
  return binarySearch(array, target, 0, array.length - 1);
}
function binarySearch(array, target, left, right) {
  if (left > right) return -1;
  let middle = Math.floor((left + right) / 2);
  let potentailMatch = array[middle];
  let leftNum = array[left];
  let rightNum = array[right];
  if (target === potentailMatch) {
    return middle;
  } else if (leftNum <= potentailMatch) {
    if (target < potentailMatch && target >= leftNum) {
      return binarySearch(array, target, left, middle - 1);
    }else{
      return binarySearch(array, target, middle + 1, right);
    }
  }else{
    if (target > potentailMatch && target <= rightNum) {
      return binarySearch(array, target, middle + 1, right);
    }else{
      return binarySearch(array, target, left, middle - 1);
    }
  }
}

console.log(shiftedBinarySearch(array, target));
