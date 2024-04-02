let strings = ['a','b','c','d'];

// 4*4 = 16 bytes of storage (because one character takes 4 bytes and here we have 4 elements the array so to space taken be 16 bytes)

//lookup
console.log(strings[1]);

// Lookups are O(1) Time complexity why?
// Because We dont have to loop through anything to find it that is why O(1) time complexity



// Adding an element at the last of the array

console.log(string.push("e"));

// Adding an element at the last of the array has O(1) time complexity because 
// of the same reason, in this also we dont have to loop throught the elements



// Deleting an element from the last of the array

console.log(string.pop());
// Deleting an element from the last of the array has O(1) time complexity because 
// of the same reason, in this also we dont have to loop throught the elements



// Adding a element at the start of the array

console.log(string.unshift('x'));

// Adding an element at the start on the array has O(n) time complexity because after adding the value
// at the start, the memory will be allocated to the rest of the element again as the indexes
// of all the elements will be incremented by 1.


// Adding a element at the middle of the array

console.log(string.splice(3,0,'alien'));

// Adding an element at the middle on the array has O(n) time complexity because after adding the value
// at the middle, the memory will be allocated to the rest of the element again as the indexes
// of all the elements will be incremented by 1.







