let coins = [5, 7, 1, 1, 2, 3, 22];

// Logic: In Minimum Change you can not make Question - The logic is that after sorting the coins you can not make the
// (totalChange + 1) if the current coin is greater than (totalChange + 1)
function nonConstructibleChange(coins) {
  let newSortedArrayOfCoins = coins.sort((a, b) => a - b);

  let totalChange = 0;
  for (let i = 0; i < newSortedArrayOfCoins.length; i++) {
    const element = newSortedArrayOfCoins[i];
    if (element > totalChange + 1) {
      return totalChange + 1;
    } else {
      totalChange += element;
    }
  }
  return totalChange + 1;
}

console.log(nonConstructibleChange(coins));
