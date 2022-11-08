const fullName = "test user";

console.log(fullName.sub);

const name1 = "     veerendra.NAGElla@gmail.com    ";
const name2 = "   test@MAil.com   ";

const nameConventionChange = (name) => {
  return name.trim().toLowerCase();
};

console.log("My name is " + fullName + " and coming from Hyderabad");
console.log(`My name is ${fullName} and coming from Hyderabad`);

console.log(nameConventionChange(name1));
console.log(nameConventionChange(name2));

// "     veerendra.NAGElla@gmail.com    " - "veerendra.nagella@gmail.com"

// "   test@MAil.com   " - "test@mail.com"

// "MyJavaScript";

/**
 * M    y    J    a    v    a    S    c    r    i    p    t
 *
 * 0    1    2    3    4    5    6    7    8    9   10   11
 *
 * -12 -11 -10   -9   -8   -7   -6   -5   -4   -3   -2   -1
 *
 * */

// Palindrome
const isPalindromeValidate = (str) => {
  if (str.charAt(0) !== str.charAt(str.length - 1)) {
    return false;
  }
  return str === str.split("").reverse().join("");
};
console.log(isPalindromeValidate("racecar"));
console.log(isPalindromeValidate("racecara"));
console.log(isPalindromeValidate("abcba"));

// Anagram

const isAnagram = (str1, str2) => {
  return str1.split("").sort().join("") === str2.split("").sort().join("");
};
console.log(isAnagram("veerendra", "reedrvean"));
console.log(isAnagram("veerendra", "reedrvban"));
console.log(isAnagram("veerendra", "gattsasdas"));
