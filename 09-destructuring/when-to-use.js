function signup({ username, password, email, dateOfBirth, city }) {
  // create new user
}

const user = {
  username: "myname",
  password: "mypassword",
  email: "myemail@mail.com",
  dateOfBirth: "1/1/1900",
  city: "New York",
};

signup(user);

// usecase
const points = [
  [4, 5],
  [10, 1],
  [0, 40],
];

points.map(([x, y]) => {
  return { x, y };
});
