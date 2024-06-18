const characters = " ";
const document = "hello";
function generateDocument(characters, document) {
  // Write your code here.
  let charactersSet = {};

  for (let i = 0; i < characters.length; i++) {
    let char = characters[i];
    if (!(char in charactersSet)) {
      charactersSet[char] = 1;
    } else {
      charactersSet[char]++;
    }
  }
  for (let j = 0; j < document.length; j++) {
    const newChar = document[j];

    if (newChar in charactersSet) {
      charactersSet[newChar]--;
      if (charactersSet[newChar] < 0) {
        return false;
      }
    } else {
      return false;
    }
  }

  return true;
}
console.log(generateDocument(characters, document));
