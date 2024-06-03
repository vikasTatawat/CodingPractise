let nums =  [4, 2, -1, -1, 3];

function zeroSumSubarray(nums) {
  // Write your code here.
 let seen = new Set([0]);
 let lastSum = 0;
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    lastSum +=  element;
    if(seen.has(lastSum)) return true;
    seen.add(lastSum);
  }
  return false;
}

console.log(zeroSumSubarray(nums));
