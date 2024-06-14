const User = require('../models/User');

class AuthService {
  async registerUser(user) {
    try {
      const newUser = new User(user);
      await newUser.save();
    } catch (err) {
      throw new Error('Error registering user: ' + err.message);
    }
  }

  async findUserById(userId) {
    return await User.findOne({ userId });
  }

  async getAllUsers() {
    try {
      return await User.find();
    } catch (err) {
      throw new Error('Error fetching users: ' + err.message);
    }
  }
}

module.exports = AuthService;
