const arr = [1, 2, 3, 4, 5];
const newArr1 = [];
const newArr2 = [];
const newArr3 = [];
const filVal = 4;

for (let i = arr.length - 1; i >= 0; i--) {
  newArr1.push(arr[i] * 2);
}
for (let i = 0; i < arr.length; i++) {
  newArr2.push(arr[i] + 1);
}

for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== filVal) {
    newArr3.push(arr[i]);
  }
}

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === filVal) {
    console.log(true);
    break;
  }
}

for (let i = 0; i < arr.length; i++) {
  if (arr[i] <= 0) {
    console.log(false);
    break;
  }
}

console.log(newArr1, newArr2, newArr3);

// * * * * *
//  * * * *
//   * * *
//    * *
//     *

// *
// * *
// * * *
// * * * *
// * * * * *

//     *
//    * *
//   * * *
//  * * * *
// * * * * *
const starLength = 5;

for (let i = 1; i <= starLength; i++) {
  console.log("* ".repeat(i));
}

let starslength = 5;
for (let i = 0; i <= starslength; i++) {
  console.log("* ".repeat(i));
}

for (let i = 1; i <= starLength; i++) {
  console.log(" ".repeat(starLength - i) + "* ".repeat(i));
}
let starlength = 5;
for (let i = 1; i <= starlength; i++) {
  console.log(" ".repeat(starlength - i) + "* ".repeat(i));
}

for (let i = starLength; i >= 1; i--) {
  console.log(" ".repeat(starLength - i) + "* ".repeat(i));
}

// for (const key in userDetails) {
//   console.log(`The user ${key}: ${userDetails[key]}, `);
// }

// how to reomve duplicate values in an array

const duplicateArr = [4, 2, 3, 6, 2, 3, 4, 3, 4, 6, 3, 6, 7, 8, 1, 2];
const newArr = [];

for (let i = 0; i < duplicateArr.length; i++) {
  if (!newArr.includes(duplicateArr[i])) {
    newArr.push(duplicateArr[i]);
  }
}

console.log([...new Set(duplicateArr)], newArr);

const numberss = [2, 2, 2, 4, 4, 6, 6, 7, 7, 1, 5, 9, 9];
const newarr1 = [];
console.log([...new Set(numberss)], newarr1);

const arr23 = [1, 1, 2, 3, 3, 4, 4, 5, 5, 6, 6];
const arr25 = console.log([...new Set(arr23)]);
