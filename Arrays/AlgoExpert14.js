let array = [2, 1, 5, 2, 3, 3, 4];

function firstDuplicateValue(array) {
  // Write your code here.
  let seen = {};
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if(element in seen){
      return element;
    }
    seen[element] = 1;

  }
  return [];
}

console.log(firstDuplicateValue(array));