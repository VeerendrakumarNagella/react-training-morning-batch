const a = 10;
const b = 20;
const c = 30;
const d = a + b + c;

const str1 = "40";
const str2 = "20";

console.log(str1 + str2, str1 - str2, str1 * str2, str1 / str2); // 4020, 20, 800, 2
console.log("40" + "20e", "40" - "20e", "40" * "20e", "40" / "20e"); // 4020e, NaN, NaN, NaN

const name1 = "test";
const name2 = "user";

const isUndefined = undefined;

console.log(d + name1); // 60test
console.log(d + name1 + name2); // 60tes ser
console.log(a + b + c + name1 + name2); // 60testuser
console.log(a + name1 + b + c + name2); // "10test2030user"
console.log(a + name1 + b * c + name2); // "10test600user"
console.log(a + name1 + c - b + name2); // "NaNuser"
console.log(a + name1 / c - b + name2); // "NaNuser"
console.log(a + name1 + c + b / name2); // "10test30NaN"
console.log(a + name1 + c - b / name2); // NaN

console.log(1 + true, "test" + true); // 2, testtrue
console.log(1 + false, "test" + false); // 1, testfalse
console.log(1 + "test" + true - true + true, "test" - false); // NaN, NaN

let val = "true";
val = "false";

console.log(val);

const carObj = {
  carName: "Defender",
  carBrand: "Range Rover",
  carFuelType: "Petrol",
  carSeatingCapacity: 5,
  carMilage: 6.8,
  carIgnitionStart: function () {
    console.log("Car has started");
  },
  carIgnitionStop: function () {
    console.log("Car has stopped");
  },
};
