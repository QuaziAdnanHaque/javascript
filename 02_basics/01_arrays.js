const myArr = [0, 1, 2, 3, 4, 5]
const myHeros= ["Iron Man", "Captain America", "Thor", "Hulk"]

const myArr2 = new Array(1, 2, 3, 4, 5)
// console.log(myArr);

// Array Method

// 1. push() - adds an element to the end of the array
myArr.push(6)
myArr.push(7)
// console.log(myArr);
// 2. pop() - removes the last element of the array
myArr.pop()
// console.log(myArr);
// 4. unshift() - adds an element to the beginning of the array
myArr.unshift(9)
// console.log(myArr);
// 3. shift() - removes the first element of the array
myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(8));
// console.log(myArr.indexOf(4));

const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);

// Slice, Splice

// 1. slice() - returns a shallow copy of a portion of an array
// console.log("A", myArr);
const myn1 = myArr.slice(1, 4)
// console.log(myn1);
// console.log("B", myArr);
// 2. splice() - adds or removes elements from an array
const myn2 = myArr.splice(0, 4)
// console.log(myn2);
// console.log("C", myArr);
// 2.1. splice() with 3 arguments - adds an element to the array
myArr.splice(2, 0, "Iron Man")
console.log(myArr);