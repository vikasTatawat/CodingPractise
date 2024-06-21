const words = ["aaa", "bbbb"];
function semordnilap(words) {
  // Write your code here.
  let setOfWords = new Set(words);
  let result = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    let changeToArray = word.split("");
    let reversed = changeToArray.reverse().join("");
    if (reversed != word) {
      if (setOfWords.has(reversed)) {
        result.push([word, reversed]);
        setOfWords.delete(word);
      }
    }
  }
  return result;
}

console.log(semordnilap(words));
