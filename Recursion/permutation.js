let array = [1, 2, 3];

function getPermutations(array) {
  // Write your code here.
  let permutations = [];
  getPermutationsHelper(array, [], permutations);
  return permutations;
}

function getPermutationsHelper(array, currentPermutation, permutations) {
  if (!array.length && currentPermutation.length) {
    permutations.push(currentPermutation);
  } else {
    for (let i = 0; i < array.length; i++) {
      let newArray = array.slice(0, i).concat(array.slice(i + 1));
      let newPermutation = currentPermutation.concat([array[i]]);
      getPermutationsHelper(newArray, newPermutation, permutations);
    }
  }
}
