const userDetails = {
  firstName: "Test",
  lastName: "User",
  fullName: function (city) {
    return (
      "Full Name of the user is: " +
      this.firstName +
      " " +
      this.lastName +
      " and coming from: " +
      city
    );
  },
};

userDetails.email = "test@email.com";
userDetails.age = 28;
userDetails.address = {
  street: "3rd",
  area: "Gachibowli",
  city: "Hyderabad",
};

const user = new Object({ firstName: "Test1", lastName: "User1" });

// console.log(userDetails.firstName, user.firstName, userDetails.address.city);

const a = 10;

let b = a;

b = 20;

// console.log(a, b);

// const userDetails1 = userDetails;
// userDetails1.firstName = "User";

// console.log(userDetails, userDetails1);

const prop = "firstName";

// userDetails[prop] === userDetails["firstName"]

console.log(
  userDetails.lastName,
  userDetails[prop],
  userDetails["email"],
  userDetails.fullName("Hyderabad")
);

//

const obj = {
  name: "siva",
  age: 24,
  address: {
    street: "Gachibowli",
    state: "Telangana",
  },
};
console.log(obj.name, obj.address.street);
