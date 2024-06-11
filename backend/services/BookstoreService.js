class BookstoreService {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    searchBook(title) {
        return this.books.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
    }

    getAllBooks() {
        return this.books;
    }

    placeOrder(user, bookIsbns) {
        const orderedBooks = this.books.filter(book => bookIsbns.includes(book.isbn));
        return {
            user,
            orderedBooks
        };
    }
}

module.exports = BookstoreService;
