const string = "abcdcaf";

function firstNonRepeatingCharacter(string) {
  let object = {};
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (!(char in object)) {
      object[char] = 1;
    } else {
      object[char] += 1;
    }
  }
  for (let j = 0; j < string.length; j++) {
    const char = string[j];
    if (object[char] == 1) {
      return j;
    }
  }

  return -1;
}
console.log(firstNonRepeatingCharacter(string));
