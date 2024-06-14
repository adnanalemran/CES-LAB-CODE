const express = require('express');
const BookstoreController = require('../controllers/BookstoreController');

const router = express.Router();
const bookstoreController = new BookstoreController();

router.post('/register', bookstoreController.registerUser.bind(bookstoreController));
router.post('/addBook', bookstoreController.addBook.bind(bookstoreController));
router.get('/books', bookstoreController.showAllBooks.bind(bookstoreController));
router.get('/searchBook', bookstoreController.searchBook.bind(bookstoreController));
router.post('/placeOrder', bookstoreController.placeOrder.bind(bookstoreController));
router.get('/users', bookstoreController.showAllUsers.bind(bookstoreController));  

module.exports = router;
