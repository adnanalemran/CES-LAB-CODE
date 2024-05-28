const express = require('express');
const {
    registerUser,
    addBook,
    searchBook,
    placeOrder
} = require('../controllers/bookstoreController');

const router = express.Router();

router.post('/register', registerUser);
router.post('/addBook', addBook);
router.get('/searchBook', searchBook);
router.post('/placeOrder', placeOrder);

module.exports = router;