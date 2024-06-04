let array = [1, 2, 3, 2, 2, 1, 2];
function majorityElement(array) {
  // Write your code here.
  let arrayInObject = {};
  let greatestCount = 0;
  let greatestCountNum = array[0];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element in arrayInObject) {
      arrayInObject[element] += 1;
      if (arrayInObject[element] > greatestCount) {
        greatestCount = arrayInObject[element];
        greatestCountNum = element;
      }
    }else{
      arrayInObject[element] = 1;
    }
  }
  return greatestCountNum;
}

console.log(majorityElement(array));
