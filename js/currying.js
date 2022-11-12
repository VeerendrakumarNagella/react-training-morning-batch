const getOuterName = (a) => (b) => a + b + "Test";

const getOuterName2 = () => {
  return () => {
    return "test";
  };
};

function getOuterName3() {
  return function () {
    return "test";
  };
}

// const getInnerFunc = getOuterName();

// console.log(getInnerFunc());

console.log(getOuterName(10)(20));

// pure function
function add(a, b) {
  return a + b;
}
console.log(add(2, 3));
console.log(add(2, 3));
console.log(add(2, 3));

// impure function
function getOtp(digit) {
  const val1 = "9".repeat(digit);
  const val2 = 1 + "0".repeat(digit - 1);
  return Math.floor(Math.random() * Number(val1) + Number(val2));
}

console.log(getOtp(4), getOtp(4), getOtp(4), getOtp(6), getOtp(8));
