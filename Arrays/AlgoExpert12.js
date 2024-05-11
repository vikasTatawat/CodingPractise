let array = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3];

function longestPeak(array) {
  let longestPeak = 0;
  let i = 1;
  while (i < array.length - 1) {
    let peak = array[i] > array[i - 1] && array[i] > array[i + 1];
    if (!peak) {
      i++;
      continue;
    }
    let leftIndex = i - 2;
    while (i >= 0 && array[leftIndex] < array[leftIndex + 1]) {
      leftIndex--;
    }
    let rightIndex = i + 2;
    while (i < array.length && array[rightIndex] < array[rightIndex - 1]) {
      rightIndex++;
    }
    let currentPeak = rightIndex - leftIndex - 1;
    longestPeak = Math.max(longestPeak, currentPeak);
    i = rightIndex;
  }
  return longestPeak;
}

console.log(longestPeak(array));
