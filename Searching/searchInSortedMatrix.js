let matrix = [
  [1, 4, 7, 12, 15, 1000],
  [2, 5, 19, 31, 32, 1001],
  [3, 8, 24, 33, 35, 1002],
  [40, 41, 42, 44, 45, 1003],
  [99, 100, 103, 106, 128, 1004],
];

let target = 99;
function searchInSortedMatrix(matrix, target) {
  let row = 0;
  let col = matrix[0].length - 1;
  while (row < matrix.length && col >= 0) {
    let current = matrix[row][col];
    if (current > target) {
      col--;
    } else if (current < target) {
      row++;
    } else {
      return [row, col];
    }
  }
  return [-1, -1];
}
console.log(searchInSortedMatrix(matrix, target));
