let array = [5, 1, 4, 2];

function arrayOfProducts(array) {
  let result = new Array(array.length).fill(1);
  let leftProduct = 1;
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    result[i] = leftProduct;
    leftProduct *= element;
  }
  let rightProduct = 1;
  for (let i =  array.length -1; i > -1; i--) {
    result[i] *= rightProduct;
    rightProduct *= array[i];
  }
  return result;
}

console.log(arrayOfProducts(array));