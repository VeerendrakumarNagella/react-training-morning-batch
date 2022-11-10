let i = 0;

while (i < 10) {
  console.log(i);
  i++;
}

do {
  console.log(i);
  i++;
} while (i < 10);

// 19 = 16 + 0 + 0 + 2 + 1 => 10011
// 25 = 16 + 8 + 0 + 0 + 1 => 11001

console.log(this);
