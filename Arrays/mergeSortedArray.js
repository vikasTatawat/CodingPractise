let arr1  = [0,3,4,31];
let arr2 = [4,6,30];

let arrayItem1 = arr1[0];
let arrayItem2 = arr2[0];
let i = 1;
let j = 1;

let resultingArray = [];
while(arrayItem1 || arrayItem2){
    if(!arrayItem2 || arrayItem1 < arrayItem2){
        console.log('Pushing',arrayItem1);

        resultingArray.push(arrayItem1);
        arrayItem1 = arr1[i];
        i++;
    }else{
        console.log('Pushing',arrayItem2);

        resultingArray.push(arrayItem2);
        arrayItem2 = arr2[j];
        j++;
    }
}

console.log(resultingArray);
