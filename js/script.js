let cart = [];
let cartVisible = false;

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');

    cartItems.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    cartCount.textContent = cart.length;
    cartTotal.textContent = total.toFixed(2);
}

function toggleCart() {
    const cartDiv = document.getElementById('cart');
    cartVisible = !cartVisible;
    if (cartVisible) {
        cartDiv.classList.add('open');
    } else {
        cartDiv.classList.remove('open');
    }
}

function checkout() {
    const cartDiv = document.getElementById('cart');
    cartDiv.innerHTML = `
        <h2>Pagamento</h2>
        <p>Escaneie o QR Code abaixo para pagar via Pix:</p>
        <img src="https://via.placeholder.com/250x250.png?text=QR+Code+Pix" alt="QR Code Pix" style="width:100%;border-radius:10px;">
        <p style="margin-top:10px;font-weight:bold;">Total: R$ ${cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}</p>
        <button onclick="confirmPayment()">Confirmar Pagamento</button>
    `;
}

function confirmPayment() {
    alert('Pagamento confirmado! Obrigado por comprar na Elle Fitwear! 💖');
    cart = [];
    updateCart();
    toggleCart();
}

