let string = "xyz";
let key = 2;
function caesarCipherEncryptor(string, key) {
  // Write your code here.
  let result = ''

  let arrayOfAphabets = "abcdefghijklmnopqrstuvwxyz".split("");
  let newKey = key % 25;
  for (let i = 0; i < string.length; i++) {
    const element = string[i];
    let index = arrayOfAphabets.indexOf(element);
    let newIndex = ((index + key) % 26);
    result += arrayOfAphabets[newIndex];
   }
   return result;
}

console.log(caesarCipherEncryptor(string, key));
