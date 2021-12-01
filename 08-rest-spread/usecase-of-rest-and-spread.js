const MathLibrary = {
  calculateProduct(a, b) {
    return a * b;
  },
  multiply(a, b) {
    return a * b;
  },
};

// ###
const MathLibrary = {
  calculateProduct(...rest) {
    return this.multiply(...rest);
  },
  multiply(a, b) {
    return a * b;
  },
};
