const string = "aA";

function runLengthEncoding(string) {
  // Write your code here.
  let currentLetter = string[0].toString();
  let currentLetterCounts = 0;
  let result = "";
  for (let i = 0; i < string.length; i++) {
    const element = string[i].toString();
    console.log(
      "element",
      element,
      "currentLetter",
      currentLetter,
      "currentLetterCounts",
      currentLetterCounts
    );
    if (element != currentLetter || currentLetterCounts == 9) {
      console.log("here");
      result += "" + currentLetterCounts + "" + currentLetter;
      currentLetterCounts = 1;
      currentLetter = element;
      if (i == string.length - 1) {
        result += "" + currentLetterCounts + "" + currentLetter;
      }
    } else {
      console.log("here2");

      currentLetterCounts++;

      if (i == string.length - 1) {
        result += "" + currentLetterCounts + "" + currentLetter;
      }
    }
  }
  return result;
}

console.log(runLengthEncoding(string));
