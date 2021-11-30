function User(id) {
  this.id = id;
}

function generateId() {
  return Math.random() * 999999;
}

// function createAdminUser(user) {
//   user.admin = true;

//   return user;
// }

function createAdminUser(user = new User(generateId())) {
  user.admin = true;

  return user;
}

const user = new User(generateId());
createAdminUser(user);
// createAdminUser();
