class UserDetails {
  constructor(val1, val2) {
    this.a = val1;
    this.b = val2;
  }

  getDetails(userName) {
    return userName;
  }
}

class Child extends UserDetails {}

const user = new UserDetails(10, 20);
const childUser = new Child(30, 40);

console.log(user.a, user.getDetails("Test user"), user.b);
console.log(childUser.a, childUser.getDetails("Test childUser"), childUser.b);
