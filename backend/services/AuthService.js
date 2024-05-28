const User = require('../models/User');

class AuthService {
    constructor() {
        this.users = [];
    }
    registerUser(user) {
        this.users.push(user);
    }
    authenticate(email, password) {
        return this.users.find(user => user.email === email && user.password === password);
    }
}

module.exports = AuthService;