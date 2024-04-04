let string = "Hi My name is Vikas";
let arrayFromString = string.split('');
let start = 0;
let end = arrayFromString.length - 1;

while(start < end){
    let valueAtStart = arrayFromString[start];
    let valueAtEnd = arrayFromString[end];

    arrayFromString[start] = valueAtEnd;
    arrayFromString[end] = valueAtStart;
    start++;
    end--;
}
console.log(arrayFromString.join(''));
