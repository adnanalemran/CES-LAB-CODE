document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const userId = document.getElementById('userId').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, name, email, password }),
    }).then(response => response.text())
      .then(data => alert(data));
});

document.getElementById('addBookForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const isbn = document.getElementById('isbn').value;
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const price = document.getElementById('price').value;

    fetch('http://localhost:5000/api/addBook', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ isbn, title, author, price }),
    }).then(response => response.text())
      .then(data => alert(data));
});

document.getElementById('searchBookForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('searchTitle').value;

    fetch(`http://localhost:5000/api/searchBook?title=${title}`)
        .then(response => response.json())
        .then(data => {
            const results = document.getElementById('searchResults');
            results.innerHTML = '';
            data.forEach(book => {
                const div = document.createElement('div');
                div.textContent = `${book.title} by ${book.author} - $${book.price}`;
                results.appendChild(div);
            });
        });
});

document.getElementById('placeOrderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const userId = document.getElementById('orderUserId').value;
    const bookIsbns = document.getElementById('bookIsbns').value.split(',');

    fetch('http://localhost:5000/api/placeOrder', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, bookIsbns }),
    }).then(response => response.json())
      .then(data => {
          const result = document.getElementById('orderResult');
          result.innerHTML = `Order placed successfully! Order ID: ${data.orderId}, Total Amount: $${data.totalAmount}`;
      });
});
