let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function transposeMatrix(matrix) {
  // Write your code here.
 
  let results = [];

  for (let col = 0; col < matrix[0].length ; col++) {
    innerArray = [];
    results.push(innerArray);
    for (let row = 0; row < matrix.length; row++) {
        innerArray.push(matrix[row][col]);

    }
  }
  return results;
}

console.log("transposeMatrix", transposeMatrix(matrix));
