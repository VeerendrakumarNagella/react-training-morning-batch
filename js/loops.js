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

for (let i = 1; i <= starLength; i++) {
  console.log(" ".repeat(starLength - i) + "* ".repeat(i));
}

for (let i = starLength; i >= 1; i--) {
  console.log(" ".repeat(starLength - i) + "* ".repeat(i));
}

const userDetails = {
  name: "Veerendra",
  age: 28,
  gender: "Male",
  city: "Hyderabad",
  name: "test",
};

console.log(userDetails);

const propArr = [];
const valueArr = [];

for (const key in userDetails) {
  propArr.push(key);
  valueArr.push(userDetails[key]);
}

const propArr1 = Object.keys(userDetails);
const valueArr1 = Object.values(userDetails);
console.log(propArr, propArr1, valueArr, valueArr1);

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
