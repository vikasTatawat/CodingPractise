let strings = ["abc", "bcd", "cbad"];

function commonCharacters(strings) {
  // Write your code here.
  if (strings.length == 1) {
    return strings[0].split("");
  }else{
    let stringCharInObjects = {};

    for (let i = 0; i < strings[0].length; i++) {
      const char =  strings[0][i];
      if(!(char in stringCharInObjects)){
        stringCharInObjects[char] = strings.length - 1;
      }
    }
    let result = [];
    for (let i = 1; i < strings.length; i++) {
      const element = strings[i];
      let newObject = {};
      for (let j = 0; j < element.length; j++) {
        const char = element[j];
        if(!(char in newObject)){
          if((char in stringCharInObjects)){
            stringCharInObjects[char]--;
            if(stringCharInObjects[char] < 1){
              result.push(char);
            }
          }
        }
        newObject[char] = 1;
      }
    }

    return result;

  }
  
}

console.log(commonCharacters(strings));
