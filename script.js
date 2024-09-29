// Sample Products Data
const products = [
    { id: 1, name: "Product 1", description: "This is a great product.", image: "https://via.placeholder.com/300x400", link: "https://example.com/product1" },
    { id: 2, name: "Product 2", description: "This is a fantastic product.", image: "https://via.placeholder.com/300x400", link: "https://example.com/product2" },
    { id: 3, name: "Product 3", description: "You'll love this product.", image: "https://via.placeholder.com/300x400", link: "https://example.com/product3" },
    { id: 4, name: "Product 4", description: "A must-have item.", image: "https://via.placeholder.com/300x400", link: "https://example.com/product4" },
    { id: 5, name: "Product 5", description: "Highly recommended!", image: "https://via.placeholder.com/300x400", link: "https://example.com/product5" }
];

// Ensure product grid exists
const productGrid = document.getElementById('product-grid');
if (!productGrid) {
    console.error('Element with id "product-grid" not found!');
} else {
    // Load products into grid
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-name">${product.name}</div>
            <div class="product-description">${product.description}</div>
        `;

        // Add event listener to handle click on product
        productDiv.addEventListener('click', () => {
            window.location.href = product.link;
        });

        productGrid.appendChild(productDiv);
    });

    // Animate products on load
    gsap.fromTo(".product", {scale: 0}, {scale: 1, duration: 0.8, stagger: 0.2, ease: "elastic"});
}

// Toggle mobile menu visibility with animation
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active'); // Add or remove the "active" class to animate
});

// Search functionality
function searchProduct() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchInput));
    
    productGrid.innerHTML = ''; // Clear current products
    filteredProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-name">${product.name}</div>
            <div class="product-description">${product.description}</div>
        `;

        // Add event listener for redirection
        productDiv.addEventListener('click', () => {
            window.location.href = product.link;
        });

        productGrid.appendChild(productDiv);
    });

    // Reanimate filtered products
    gsap.fromTo(".product", {scale: 0}, {scale: 1, duration: 0.8, stagger: 0.2, ease: "elastic"});
}
