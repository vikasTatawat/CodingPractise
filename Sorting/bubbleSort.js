let array = [8, 5, 2, 9, 5, 6, 3];

function bubbleSort(array) {
  let isSorted = false;
  let counter = 0;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < array.length - 1 - counter; i++) {
      const current = array[i];
      const next = array[i + 1];
      if (next < current) {
        swap(array, i, i + 1);
        isSorted = false;
      }
    }
    counter++;

  }

  return array;
}
function swap(array, first, second) {
  let temp = array[second]; // [8,5], temp = 5, array[5,]
  array[second] = array[first];
  array[first] = temp;
}


console.log(bubbleSort(array));
