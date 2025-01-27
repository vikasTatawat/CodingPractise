let queries = [3, 2, 1, 2, 6];

function minimumWaitingTime(queries) {
  let sorted = queries.sort((a, b) => a - b); 
  let duration = 0;
  for (let i = 0; i < sorted.length; i++) {
    let currentTotal = sorted[i];
    let queriesLeft = sorted.length - (i + 1);
    duration += currentTotal * queriesLeft;
  }
  return duration;
}


console.log(minimumWaitingTime(queries));
