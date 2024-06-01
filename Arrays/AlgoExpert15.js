let array = [
  [1, 2],
  [3, 5],
  [4, 7],
  [6, 8],
  [9, 10],
];

function mergeOverlappingIntervals(array) {
  // Write your code here.
  let mergedIntervals = [];
  const sortedIntervals = array.sort((a, b) => a[0] - b[0]);
  let currentInterval = sortedIntervals[0];
  mergedIntervals.push(currentInterval);
  for (const nextInterval of sortedIntervals) {
    const [_, currentIntervaEnd] = currentInterval;
    const [nextIntervalStart, nextIntervalEnd] = nextInterval;
    if (currentIntervaEnd >= nextIntervalStart) {
      currentInterval[1] = Math.max(currentIntervaEnd, nextIntervalEnd);
    } else {
      currentInterval = nextInterval;
      mergedIntervals.push(currentInterval);
    }
  }
  return mergedIntervals;
}

console.log(mergeOverlappingIntervals(array));
