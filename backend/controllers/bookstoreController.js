const AuthService = require('../services/AuthService');
const BookstoreService = require('../services/BookstoreService');
const Book = require('../models/Book');
const User = require('../models/User');

const authService = new AuthService();
const bookstoreService = new BookstoreService();

const registerUser = (req, res) => {
    const { userId, name, email, password } = req.body;
    const user = new User(userId, name, email, password);
    authService.registerUser(user);
    res.send('User registered successfully');
};

const addBook = (req, res) => {
    const { isbn, title, author, price } = req.body;
    const book = new Book(isbn, title, author, price);
    bookstoreService.addBook(book);
    res.send('Book added successfully');
};



const searchBook = (req, res) => {
    const { title } = req.query;
    const books = bookstoreService.searchBook(title);
    res.json(books);
};

const placeOrder = (req, res) => {
    const { userId, bookIsbns } = req.body;
    const user = authService.users.find(user => user.userId === userId);
    if (user) {
        const order = bookstoreService.placeOrder(user, bookIsbns);
        res.json(order);
    } else {
        res.status(404).send('User not found');
    }
};

const showAllBooks = (req, res) => {
    const books = bookstoreService.getAllBooks();
    res.json(books);
};


module.exports = {
    registerUser,
    addBook,
    searchBook,
    placeOrder,
    showAllBooks,
};