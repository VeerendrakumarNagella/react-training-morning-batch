const details = {
  name: "test",
  getName: function () {
    console.log(this.name);
    const outerThis = this;
    const getNameInner = () => {
      console.log(outerThis.name, this.name);
    };
    getNameInner();
  },
};

details.getName();
