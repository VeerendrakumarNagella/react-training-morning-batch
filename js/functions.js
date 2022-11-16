/**
 * With params, with return
 * With params, without return
 * Without params, with return
 * Without params, without return
 */

function add(a, b) {
  return a + b;
}

const sub = (a, b) => {
  const res = a - b;
  console.log(res);
};

const mul = () => {
  const a = 10;
  const b = 20;
  return a * b;
};

const div = () => {
  const a = 10;
  const b = 20;
  console.log(b / a);
};

console.log(add(10, 20));
sub(20, 10);
console.log(mul());
div();

let name = "      seshadri      ";
let name1 = "     Devarapu      ";

const namechanges = (add) => {
  return add.trim().toUpperCase().length;
};
console.log(namechanges(name));
console.log(namechanges(name1));
