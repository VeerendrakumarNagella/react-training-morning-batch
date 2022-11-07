let a = 10;
let b = 20;
a = a + b; // a += b

const c = a + b;
b = a;
// console.log(a++); // 30
console.log(++a); // 31
const d = a + b;

console.log(a, b, c, d); // 30, 30, 50, 60

// console.log(0.2 + 0.3 === 0.5);
