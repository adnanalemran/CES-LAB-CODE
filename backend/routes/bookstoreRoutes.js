const express = require('express');
const {
    registerUser,
    addBook,
    searchBook,
    showAllBooks,
    placeOrder
} = require('../controllers/bookstoreController');

const router = express.Router();

router.post('/register', registerUser);
router.post('/addBook', addBook);
router.get('/books', showAllBooks);

router.get('/searchBook', searchBook);
router.post('/placeOrder', placeOrder);

module.exports = router;