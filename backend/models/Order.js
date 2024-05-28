class Order {
    constructor(orderId, user, books, totalAmount) {
        this.orderId = orderId;
        this.user = user;
        this.books = books;
        this.totalAmount = totalAmount;
    }
}

module.exports = Order;
