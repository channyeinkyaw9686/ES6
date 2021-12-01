const companies = [
  { name: "Google", location: "Mountain View" },
  { name: "Facebook", location: "Menlo Park" },
  { name: "Uber", location: "San Francisco" },
];

// ES5
var location = companies[0].location;

// ES6
const [{ location }] = companies;
location;

// usecase
const Google = {
  locations: ["Mountain View", "New Yourk", "Londo"],
};

const {
  locations: [location],
} = Google;

location;
