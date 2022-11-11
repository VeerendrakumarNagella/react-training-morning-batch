const userName = "Test user";

console.log("this global", this);

const userDetails = {
  name: "Test",
  city: "Hyd",
  getDetails: function () {
    const outerThis = this; // can access this
    const userAge = 28;
    console.log(userName);
    console.log("this outer", this);

    function getInnerData() {
      const age = 30;
      const innerThis = this; // can't access this
      console.log(outerThis.name, outerThis.city);
      console.log(innerThis.name, innerThis.city);
      console.log(userName, userAge);
      console.log("this inner", this);
    }
    getInnerData();
  },
};

userDetails.getDetails();
