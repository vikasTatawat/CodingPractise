let array = [3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4];

function kadanesAlgorithm(array) {
  let sumTillNow = array[0];
  let result = array[0];
  for (let i = 1; i < array.length; i++) {
    const num = array[i];
    sumTillNow = Math.max(sumTillNow+num, num);
    result = Math.max(sumTillNow, result);
  }
  return result;
}

console.log(kadanesAlgorithm(array));
