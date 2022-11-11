const userdetails = {
  name: "seshu",
  age: 26,
  gender: "male",
  city: "Hyderabad",
};
console.log(userdetails);

const propArr = [];
const valueArr = [];

for (const key in userdetails) {
  propArr.push(key);
  valueArr.push(userdetails[key]);
}

const propArr1 = Object.keys(userDetails);
const valueArr1 = Object.values(userDetails);
console.log(propArr, propArr1, valueArr, valueArr1);

const persondetails = {
  name: "seshadri",
  age: 26,
  gender: "male",
  city: "Hyderabad",
};
console.log(persondetails);

const propArrr = [];
const valueArrr = [];
for (const key in persondetails) {
  propArrr.push(key);
  valueArrr.push(persondetails[key]);
}
const PropArr8 = Object.keys(persondetails);
const valueArr8 = Object.values(persondetails);
console.log(propArrr, valueArrr, PropArr8, valueArr8);
