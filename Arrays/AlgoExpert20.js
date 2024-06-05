let dishes = [5, -10];
let target = -4;

function sweetAndSavory(dishes, target) {
  // Write your code here.
  let sweet = [];
  let savory = [];
  let result = [0,0];
  let bestMatch = Infinity;
  for (let i = 0; i < dishes.length; i++) {
    const element = dishes[i];
    if (element > 0) {
      savory.push(element);
    } else {
      sweet.push(element);
    }
  }
  let sortedSweets = sweet.sort((a, b) => b - a);
  let sortedSavory = savory.sort((a, b) => a - b);
  let left = 0;
  let right = 0;
  while ((left < sortedSweets.length) && (right < sortedSavory.length)) {
    let sum = sortedSweets[left] + sortedSavory[right];
    console.log('sum',sum, sortedSweets[left], sortedSavory[right], 'left', left, 'right',right );

    if(sum <= target){
      let currentDiff = target - sum;
      if(currentDiff < bestMatch){
        result = [sortedSweets[left], sortedSavory[right]];
        bestMatch = currentDiff;
      }
      right++;
    }else{
      left++;
    }
  }
  return result;
}

console.log(sweetAndSavory(dishes, target));
