let array = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7];

function findThreeLargestNumbers(array) {
  let small = -Infinity,
    mid = -Infinity,
    large = -Infinity;
  array.forEach((num) => {
    if (num >= small) {
      if (num <= mid) {
        small = num;
      } else if (num <= large) {
        small = mid;
        mid = num;
      } else {
        small = mid;
        mid = large;
        large = num;
      }
    }
  });
  return [small, mid, large];
}
console.log(findThreeLargestNumbers(array));

// a, b, c
