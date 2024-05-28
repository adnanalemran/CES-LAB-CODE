const Order = require('../models/Order');

class BookstoreService {
    constructor() {
        this.books = [];
        this.orders = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    searchBook(title) {
        return this.books.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
    }

    placeOrder(user, bookIsbns) {
        const books = this.books.filter(book => bookIsbn => bookIsbns.includes(book.isbn));
        const totalAmount = books.reduce((sum, book) => sum + book.price, 0);
        const order = new Order(this.orders.length + 1, user, books, totalAmount);
        this.orders.push(order);
        return order;
    }
}

module.exports = BookstoreService;