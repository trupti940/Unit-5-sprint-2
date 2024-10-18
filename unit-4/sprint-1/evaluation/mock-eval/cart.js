function CartItems(){
    const cartContainer = document.getElementById('carts');
    cartContainer.innerHTML = '';

    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart.forEach(users =>{
        const CartItem = document.createElement('div');
        CartItem.classList.add(cart-item);
        CartItem.innerHTML = `
        <h3>${users.name}</h3>
        <p>${users.email}</p>
        <button onclick="deleteFromCart(${users.id})">Delete</button>
        `;
        cartContainer.appendChild(CartItem);
    });
        
}
function deleteFromCart(userId){
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(users => users.id !== userId);
    localStorage.setItem('cart',JSON.stringify(cart));
    CartItems();
}
document.addEventListener('DOMContentLoaded',CartItems);