let array = [8, 5, 2, 9, 5, 6, 3];

function selectionSort(array) {
  // Write your code here.
  let startIndex = 0;

  while (startIndex < array.length - 1) {
    let smallIndex = startIndex;
    for (let i = startIndex + 1; i < array.length; i++) {
      if (array[smallIndex] > array[i]) {
        smallIndex = i;
      }
    }
    swap(array, startIndex, smallIndex);
    startIndex++;
  }
  return array;
}

function swap(array, first, second) {
  let temp = array[second];
  array[second] = array[first];
  array[first] = temp;
}

console.log(selectionSort(array));
