const Book = require('../models/Book');

class BookstoreService {
  async addBook(book) {
    try {
      const newBook = new Book(book);
      await newBook.save();
    } catch (err) {
      throw new Error('Error adding book: ' + err.message);
    }
  }

  async searchBook(title) {
    return await Book.find({ title: new RegExp(title, 'i') });
  }

  async getAllBooks() {
    return await Book.find();
  }

  async placeOrder(user, bookIsbns) {
    // Implement order placement logic here, if needed
  }
}

module.exports = BookstoreService;
