let array = [2, 1, 2, 2, 2, 3, 4, 2];
let toMove = 2;

function moveElementToEnd(array, toMove) {
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    let num1 = array[left];
    let num2 = array[right];

    while (num2 == toMove && left < right) {
      right--;
      num2 = array[right];
    }
    if (num1 == toMove && left < right) {
      swap(array, left, right);
    }
    left++;
  }
  return array;
}

function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

console.log(moveElementToEnd(array, toMove));
