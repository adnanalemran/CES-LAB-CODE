const AuthService = require('../services/AuthService');
const BookstoreService = require('../services/BookstoreService');

class BookstoreController {
  constructor() {
    this.authService = new AuthService();
    this.bookstoreService = new BookstoreService();
  }

  async registerUser(req, res) {
    try {
      const { userId, name, email, password } = req.body;
      const user = { userId, name, email, password };
      await this.authService.registerUser(user);
      res.send('User registered successfully');
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  async addBook(req, res) {
    try {
      const { isbn, title, author, price } = req.body;
      const book = { isbn, title, author, price };
      await this.bookstoreService.addBook(book);
      res.send('Book added successfully');
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  async searchBook(req, res) {
    try {
      const { title } = req.query;
      const books = await this.bookstoreService.searchBook(title);
      res.json(books);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  async placeOrder(req, res) {
    try {
      const { userId, bookIsbns } = req.body;
      const user = await this.authService.findUserById(userId);
      if (user) {
        const order = await this.bookstoreService.placeOrder(user, bookIsbns);
        res.json(order);
      } else {
        res.status(404).send('User not found');
      }
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  async showAllBooks(req, res) {
    try {
      const books = await this.bookstoreService.getAllBooks();
      res.json(books);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  async showAllUsers(req, res) {
    try {
      const users = await this.authService.getAllUsers();
      res.json(users);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
}

module.exports = BookstoreController;
