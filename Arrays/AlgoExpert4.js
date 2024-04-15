let competitions = [
  ["HTML", "C#"],
  ["C#", "Python"],
  ["Python", "HTML"],
];
let results = [0, 0, 1];
function tournamentWinner(competitions, results) {
  // Write your code here.
  let highestYet = 0; //3
  let highestTeam = ""; // html
  let scores = {}; //c#: 3
  for (let i = 0; i < competitions.length; i++) {
    const element = competitions[i];
    let winnerKey = results[i] == 0 ? 1 : 0;

    let winner = element[winnerKey];
    if (winner in scores) {
      scores[winner] += 3;
    } else {
      scores[winner] = 3;
    }

    if (highestYet < scores[winner]) {
      highestYet = scores[winner];
      highestTeam = winner;
    }
  }
  return highestTeam;
}

console.log(tournamentWinner(competitions, results));
