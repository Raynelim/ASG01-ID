// Function to show success popup
function showAddToCartPopup() {
    // Create popup container
    const popup = document.createElement('div');
    popup.className = 'cart-popup';
    popup.innerHTML = `
        <div class="popup-content">
            <div class="tick-icon">✓</div>
            <p>Item successfully added to cart</p>
        </div>
    `;
    
    // Add popup to body
    document.body.appendChild(popup);
    
    // Trigger animation
    setTimeout(() => {
        popup.classList.add('show');
    }, 10);
    
    // Remove popup after 1 seconds
    setTimeout(() => {
        popup.classList.remove('show');
        setTimeout(() => {
            popup.remove();
        }, 100);
    }, 1000);
}

// Add event listeners to all "Add to Cart" buttons
document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.buy-btn');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            showAddToCartPopup();
        });
    });
});
