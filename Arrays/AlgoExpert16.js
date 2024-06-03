let seats = [1, 0, 1, 0, 0, 0, 1];

function bestSeat(seats) {
  let left = 0;
  let right = 1;
  let gap = 0;
  let best = -1;

  while (right < seats.length) {
    if (seats[right] == 1) {
      let findgap = right - left - 1;
      if (findgap > gap) {
        gap = findgap;
        best = Math.floor((right + left) / 2);
      }
      left = right;
      right = left + 1;
    } else {
      right++;
    }
  }

  return best;
}

console.log(bestSeat(seats));
