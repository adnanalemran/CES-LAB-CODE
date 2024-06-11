const User = require("./User");

class Admin extends User {
  constructor(userId, name, email, password, permissions) {
    super(userId, name, email, password);
    this.permissions = permissions;
  }

  authenticate(email, password) {
    if (email === this.email && password === this.password) {
      return true;
    }
    return false;
  }
}

module.exports = Admin;
