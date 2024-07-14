let array = [8, 5, 2, 9, 5, 6, 3];

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let j = i;
    while (j > 0 && array[j] < array[j - 1]) {
      swap(array, j, j - 1);
      j--;
    }
  }

  return array;
}
function swap(array, first, second) {
  let temp = array[second];
  array[second] = array[first];
  array[first] = temp;
}

console.log(insertionSort(array));
