// Função para preencher o carrinho na página de checkout
function updateCheckout() {
    const checkoutItemsDiv = document.getElementById('checkout-items');
    const totalPriceSpan = document.getElementById('total-price');
    
    checkoutItemsDiv.innerHTML = '';  // Limpa os itens anteriores
    let total = 0;
    
    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('checkout-item');
        itemDiv.innerHTML = `
            <p>${item.name} - R$ ${item.price.toFixed(2)}</p>
        `;
        checkoutItemsDiv.appendChild(itemDiv);
        total += item.price;
    });

    totalPriceSpan.textContent = total.toFixed(2);
}

// Simulação de confirmação de pagamento
function confirmPayment() {
    alert('Pagamento confirmado! Obrigado por comprar na Elle Fitwear! 💖');
    cart = [];
    updateCart();
    window.location.href = "index.html";  // Volta para a página inicial
}

// Quando a página de checkout for carregada, atualiza o carrinho
document.addEventListener('DOMContentLoaded', updateCheckout);

// Função de confirmação de pagamento
function confirmPayment() {
    alert('Pagamento confirmado! Obrigado por comprar na Elle Fitwear! 💖');
    cart = [];  // Limpa o carrinho
    updateCart();  // Atualiza a visualização do carrinho
    window.location.href = "index.html";  // Redireciona para a página inicial
}