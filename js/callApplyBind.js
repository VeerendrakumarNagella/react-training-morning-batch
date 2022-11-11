const userDetails = {
  name: "Test",
  age: 28,
  getDetails: function () {
    console.log(this.name, this.age);
  },
};

function getDetails(city, company) {
  return `My name is ${this.name}, age is ${this.age} and from ${city}, working in ${company}`;
}

const callVal = getDetails.call(userDetails, "Hyd", "Carelon");
const applyVal = getDetails.apply(userDetails, ["Hyd", "Carelon"]);
const bindVal = getDetails.bind(userDetails, "Hyd", "Carelon")();
console.log(callVal, applyVal, bindVal);

function outerFunc(outer) {
  return function (inner) {
    return function (innerMost) {
      return outer + " " + inner + " " + innerMost;
    };
  };
}

const outerFunc2 = (outer) => (inner) => (innerMost) =>
  outer + " " + inner + " " + innerMost;

console.log(outerFunc("Test")("Test Inner")("Test InnerMost"));
console.log(outerFunc2("Test")("Test Inner")("Test InnerMost"));

function hof(func) {
  return (num) => {
    return num + func(2) * 6;
  };
}

const hocFunc = (num) => {
  return num * num;
};

console.log(hof(hocFunc)(4));
