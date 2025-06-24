// let arr = [1, 2];
// arr.push(3);
// console.log(arr); // [1, 2, 3]
// let arr = [1, 2, 3];
// arr.pop();
// console.log(arr); // [1, 2]
// let arr = [2, 3];
// arr.unshift(1);
// console.log(arr); // [1, 2, 3]
// let arr = [1, 2, 3];
// arr.shift();
// console.log(arr); // [2, 3]

// let a = [1, 2];
// let b = [3, 4];
// let result = a.concat(b);
// console.log(result); // [1, 2, 3, 4]

// let arr = [1, 2, 3, 4];
// let part = arr.slice(1, 3);
// console.log(part); // [2, 3]

// let arr = [10, 20, 30];
// console.log(arr.indexOf(20)); // 1

// let arr = [10, 20, 30];
// console.log(arr.includes(20)); // true

// let arr = [5, 12, 18];
// let result = arr.find(x => x > 10);
// console.log(result); // 12 callback krta h and then return

//  callback krega


// let arr = [10, 15, 20];
// let result = arr.filter(x => x > 10);
// console.log(result); // [15, 20] callback krega and return

// let arr = [1, 2, 3];
// let squared = arr.map(x => x * x);
// console.log(squared); // [1, 4, 9] call back krke return krega


// let arr = [4, 1, 3];
// arr.sort(); // lexicographic by default
// console.log(arr); // [1, 3, 4]


// let arr = [1, 2, 3];
// arr.reverse();
// console.log(arr); // [3, 2, 1]

// function sum(a, b) {
//   return a + b;
// }



// let arr = [1, 2, 3];
// let str = arr.join("-");
// console.log(str); // "1-2-3" convert to string

// let arr = [1, 2, 3];
// console.log(arr.toString()); // "1,2,3" default string conversion

// let arr = [2, 4, 6];
// console.log(arr.every(x => x % 2 === 0)); // true
//  callback and check if all match 

// let arr = [1, 3, 5, 6];
// console.log(arr.some(x => x % 2 === 0)); // true
// check if some match

// let arr = [1, [2, [3]]];
// console.log(arr.flat(2)); // [1, 2, 3]
//flatten nested arrays

// fill(value, start, end) – Fill with value

// let arr = [1, 2, 3, 4];
// arr.fill(0, 1, 3);
// console.log(arr); // [1, 0, 0, 4]

// at(index) – Safe index access (supports negative)

// let arr = [10, 20, 30];
// console.log(arr.at(-1)); // 30

//   let obj = {
//             name: "secretKi",
//             symbol: "L"
//         };

//         let symbol = "name";
//         console.log(obj[symbol]); // Accessing via variable key

//         let arr1 = [1, 2, 3, 1, 2, 3];
//         let arr2 = [4, 5, 6];
//         let result = arr1.concat(arr2);
//         console.log("Concat:", result); // [1,2,3,1,2,3,4,5,6]

        // Flatten nested array
//         let arr = [1, 2, [3, 4, [5, 6]]];
//         console.log("Flattened:", arr.flat(2));


// let obj = { a: 1, b: 2 };
// let newObj = { c: 3, d: 4 };

// let combinedObj = Object.assign({}, obj, newObj);
// console.log(combinedObj);

// console.log(...obj,...newObj);

// let sum = (a, b) => a + b;
// console.log(sum(8, 9));

// let strArr = ["1", "2", "3"];
// let numArr = strArr.map(Number);
// console.log(numArr); // [1, 2, 3]

// function addition(n1, n2) {
//     if (typeof n1 !== "number" || typeof n2 !== "number") {
//         console.log("Please enter valid numbers");
//         return;
//     }
//     console.log(n1 + n2);
// }

// typeof "hi"       // "string"
// typeof 123        // "number"
// typeof true       // "boolean"
// typeof []         // "object"
// typeof {}         // "object"
// typeof null       // "object" (JS quirk)
// typeof undefined  // "undefined"

// let arr = [2, 5, 8, 9, 10];

// function callback(ele, i, arr) {
//   console.log(ele, i, arr);
// }

// arr.forEach(callback);


// function homework(callback) {
//   console.log("Doing homework.........");
//   setTimeout(function () {
//     console.log("Homework done!");
//     callback();
//   }, 3000); // Waits 3 seconds
// }

// function dance() {
//   console.log("Completed homework. Now dancing!");
// }

// homework(dance);
