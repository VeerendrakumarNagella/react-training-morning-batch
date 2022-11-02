// 1. simple if, 2. if else, 3. ladder if, 4. nested if

// simple if

const age = 18;

if (age >= 18) {
  console.log("Major");
}

// if else

const userName = "Veerendra Kumar Nagella";
const searchStr = " veer    ";

if (userName.toLowerCase().trim().includes(searchStr.toLowerCase().trim())) {
  console.log("Username found");
} else {
  console.log("username not found");
}

// ladder if

const getGrade = (marks) => {
  if (marks >= 90) {
    return "First class with Distinction";
  } else if (marks < 90 && marks >= 75) {
    return "A grade";
  } else if (marks < 75 && marks >= 60) {
    return "B grade";
  } else if (marks < 60 && marks >= 55) {
    return "C grade";
  } else if (marks < 55 && marks >= 35) {
    return "D grade";
  } else {
    return "Fail";
  }
};

const seshaGrade = getGrade(50);
const shivaGrade = getGrade(60);
const manasaGrade = getGrade(70);
const veeruGrade = getGrade(90);
const rajeshGrade = getGrade(70);
const praveenGrade = getGrade(10);

console.log(
  seshaGrade,
  shivaGrade,
  manasaGrade,
  veeruGrade,
  rajeshGrade,
  praveenGrade
);

// nested if
const a = 10;
const b = 20;
const c = 14;

if (a > b) {
  if (a > c) {
    console.log("A is big");
  } else {
    console.log("C is big");
  }
} else {
  if (b > c) {
    console.log("B is big");
  } else {
    console.log("C is big");
  }
}

// Switch

const day = new Date().getDay();

switch (day) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  default:
    console.log("Saturday");
}
