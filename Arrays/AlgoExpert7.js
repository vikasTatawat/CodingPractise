let array = [12, 3, 1, 2, -6, 5, -8, 6];
let targetSum = 0;
/*
will take three pointers 
1 will be current index
2nd will be index+1
3rd will be last index
*/
function threeNumberSum(array, targetSum) {
  let results = [];

  let sortedArray = array.sort((a, b) => a - b);
  console.log("sortedArray", sortedArray);
 
  for (let i = 0; i < sortedArray.length; i++) {
    let left = i + 1;
    let right = sortedArray.length - 1;
  
    const cn = sortedArray[i];
    while (left < right) {
      let sum = cn + sortedArray[left] + sortedArray[right];
      console.log('sum',sum, cn, sortedArray[left], sortedArray[right]);
      if (sum == targetSum) {
        results.push([cn, sortedArray[left], sortedArray[right]]);
        left++;
        right--;
      }
      if (sum > targetSum) {
        right--;
      }
      if (sum < targetSum) {
        left++;
      }
    }

  }
  return results;
}

console.log(threeNumberSum(array, targetSum));
