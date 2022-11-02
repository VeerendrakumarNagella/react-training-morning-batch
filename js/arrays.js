const arr = [10, 20, 30];
arr[100] = 100;
arr[90] = "test";
const lastIndex = arr.length - 1;
const obj = { name: "test" };
console.log(Array.isArray(arr));
console.log(Array.isArray(obj));

console.log([10, 20, 30].toString());
console.log([10, 20, 30].join(":"));

const a = [10, 20];
const b = [50, 60];

a.push(30); // a = [10, 20, 30]
b.unshift(41); // b = [40, 50, 60]

// a.pop() // a = [10, 20]
// b.shift() // b = [50, 60]

const c = [a, b]; // length - 2 [[10, 20, 30], [40, 50, 60]]
const d = [...a, ...b]; // length - 6 [10, 20, 30, 40, 50, 60]

// const isEvery = d.every(function (val) {
//   if (val % 10 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// });
// const isEvery = d.every(function (val) {
//   return val % 10 === 0;
// });

const isEvery = d.every((val) => val % 10 === 0);

console.log(isEvery);

// const filItems = d.filter((val) => val % 10 === 0);
const filItems = d.filter((val) => {
  if (val % 10 === 0) {
    return true;
  }
  return false;
});

console.log(filItems);

const findVal = d.find((val) => val % 10 === 0);

console.log(findVal);

const isSome = d.some((val) => val % 10 !== 0);

console.log(isSome);

const userDetails = [
  { name: "test", age: 28 },
  {
    name: "test2",
    age: 30,
  },
  {
    name: "test3",
    age: 30,
  },
  {
    name: "test4",
    age: 30,
  },
  {
    name: "veerendra",
    age: 28,
  },
];

const findUserName = "Veerendra";

// const deletedArr = userDetails.filter(
//   (user) =>
//     !user.name.toLowerCase().trim().includes(findUserName.toLowerCase().trim())
// ); // filter is soft delete

// console.log(deletedArr);
// const findIndexVal = userDetails.findIndex((user) =>
//   user.name.toLowerCase().trim().includes(findUserName.toLowerCase().trim())
// ); // Splice is hard delete

// userDetails.splice(findIndexVal, 1);

console.log("userDetails", userDetails);

const findUser = userDetails.find((user) =>
  user.name.trim().toLowerCase().includes(findUserName.toLowerCase().trim())
);

console.log(findUser);

const includesArr = ["veerendra", "rajesh", "ramu", "shiva"];

console.log(includesArr.reverse(), includesArr);

console.log(includesArr.includes("shiva"));

const sliceArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const slicedArr = sliceArr.slice(2, 5);

console.log(slicedArr, sliceArr);

const spliceArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const splicedArr = spliceArr.splice(2, 5);

console.log(splicedArr, spliceArr);

const strSortArr = [
  "abc",
  "test",
  "bbc",
  "dac",
  "ccd",
  "hyz",
  "HYZ",
  "Gdf",
  "Aad",
];

console.log(strSortArr, strSortArr.sort());

const numSortArr = [1, 2, 22, 10, 55, 6, 22, 57, 7, 8, 9, 11, 45];

console.log(
  numSortArr,
  numSortArr.sort((a, b) => b - a)
);
