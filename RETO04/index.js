let cartCount = 0;
const cartItems = [];

function addToCart() {
    const quantity = parseInt(document.getElementById('quantity').value);
    const productName = document.querySelector('.product-info h1').textContent;
    const price = document.querySelector('.product-info .price').textContent;
    
    cartCount += quantity;
    document.getElementById('cart-count').textContent = cartCount;

    cartItems.push({ productName, price, quantity });
    alert("Producto agregado al carrito");
}

document.getElementById('cart-button').addEventListener('click', function() {
    const cartList = document.getElementById('cart-items');
    cartList.innerHTML = ''; // Limpiar lista
    
    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.productName} - ${item.price} x ${item.quantity}`;
        cartList.appendChild(li);
    });
    
    document.getElementById('cart-popup').style.display = 'block';
});

function closeCart() {
    document.getElementById('cart-popup').style.display = 'none';
}

function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}

window.addEventListener("load", function() {
    setTimeout(function() {
        document.getElementById("preloader").style.display = "none";
    }, 3000); // Espera de 3 segundos antes de ocultar el preloader
});
