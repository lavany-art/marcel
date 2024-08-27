// script.js

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('query');
    const searchQueryElement = document.getElementById('search-query');
    const resultsContainer = document.getElementById('results-container');

    searchQueryElement.textContent = query || 'No query provided';

    // Simulate fetching search results (replace with actual fetch call)
    fetchResults(query).then(products => {
        displayResults(products);
    }).catch(error => {
        console.error('Error fetching results:', error);
        resultsContainer.innerHTML = '<p>There was an error fetching results. Please try again later.</p>';
    });

    function fetchResults(query) {
        // Simulate an API call with a static set of products
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const allProducts = [
                    { name: 'Product 1', price: '$19.99', image: 'product1.jpg' },
                    { name: 'Product 2', price: '$29.99', image: 'product2.jpg' },
                    { name: 'Product 3', price: '$39.99', image: 'product3.jpg' },
                    { name: 'Product 1', price: '$19.99', image: 'product4.jpg' },
                    { name: 'Product 2', price: '$29.99', image: 'product5.jpg' },
                    { name: 'Product 3', price: '$39.99', image: 'product6.jpg' },
                    { name: 'Product 1', price: '$19.99', image: 'product7.jpg' },
                    { name: 'Product 2', price: '$29.99', image: 'product8.jpg' },
                    { name: 'Product 3', price: '$39.99', image: 'product9.jpg' },
                    { name: 'Product 1', price: '$19.99', image: 'product10.jpg' },
                    { name: 'Product 2', price: '$29.99', image: 'product12.jpg' },
                    { name: 'Product 3', price: '$39.99', image: 'product13.jpg' },
                    { name: 'Product 1', price: '$19.99', image: 'product14.jpg' },
                    { name: 'Product 2', price: '$29.99', image: 'product15.jpg' },
                    { name: 'Product 3', price: '$39.99', image: 'product16.jpg' },
                    { name: 'Product 1', price: '$19.99', image: 'product17.jpg' },
                    { name: 'Product 2', price: '$29.99', image: 'product18.jpg' },
                    { name: 'Product 3', price: '$39.99', image: 'product19.jpg' },
                    { name: 'Product 1', price: '$19.99', image: 'product20.jpg' },
                    { name: 'Product 2', price: '$29.99', image: 'product21.jpg' },
                    { name: 'Product 3', price: '$39.99', image: 'product22.jpg' },
                    { name: 'Product 1', price: '$19.99', image: 'product23.jpg' },
                    { name: 'Product 2', price: '$29.99', image: 'product24.jpg' },
                    { name: 'Product 3', price: '$39.99', image: 'product25.jpg' },
                    
                    // Add more products as needed
                ];
                const filteredProducts = allProducts.filter(product =>
                    product.name.toLowerCase().includes(query.toLowerCase())
                );
                resolve(filteredProducts);
            }, 500); // Simulated delay
        });
    }

    function displayResults(products) {
        resultsContainer.innerHTML = ''; // Clear previous results
        if (products.length === 0) {
            resultsContainer.innerHTML = '<p>No results found. Please try a different search.</p>';
        } else {
            products.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.className = 'product';
                productDiv.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p><strong>${product.price}</strong></p>
                    <a href="#" class="button">Buy Now</a>
                `;
                resultsContainer.appendChild(productDiv);
            });
        }
    }
});
