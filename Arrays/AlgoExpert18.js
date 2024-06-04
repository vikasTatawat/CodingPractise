let nums = [4, 5, 1, 3];
function missingNumbers(nums) {

  let result = [];
  let numsSet = new Set(nums);
  for (let i = 1; i <= nums.length + 2 ; i++) {
    if(!numsSet.has(i)){
      result.push(i)
    }
  }
  return result;
}

console.log(missingNumbers(nums));
