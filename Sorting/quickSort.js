let array = [8, 5, 2, 9, 5, 6, 3];

function quickSort(array) {
  // Write your code here.
  quickSortHelper(array, 0, array.length - 1);
}
function quickSortHelper(array, startIndex, endIdx) {
  if (startIndex >= endIdx) return;
  let pivotIdx = startIndex;
  let leftIdx = startIndex + 1;
  let rightIdx = endIdx;
  while (rightIdx >= leftIdx) {
    if (array[leftIdx] > array[pivotIdx] && array[rightIdx] < array[pivotIdx]) {
      swap(leftIdx, rightIdx, array);
    }
    if (array[leftIdx] <= array[pivotIdx]) {
      leftIdx++;
    }
    if (array[rightIdx >= array[pivotIdx]]) {
      rightIdx--;
    }
  }
  swap(pivotIdx, rightIdx, array);
  let leftSubarrayIsSmaller =
    rightIdx - 1 - startIndex < endIdx - (rightIdx + 1);
  if (leftSubarrayIsSmaller) {
    quickSortHelper(array, startIndex, rightIdx - 1);
    quickSortHelper(array, rightIdx + 1, endIdx);
  } else {
    quickSortHelper(array, rightIdx + 1, endIdx);
    quickSortHelper(array, startIndex, rightIdx - 1);
  }
}
function swap(first, second, array) {
  let temp = array[second];
  array[second] = array[first];
  array[first] = temp;
}

console.log(quickSort(array));
