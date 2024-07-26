document.addEventListener('DOMContentLoaded', () => {
    // Function to filter catalogue based on search input
    function filterCatalogue() {
        const searchInput = document.getElementById('searchInput').value.toLowerCase();
        const categoriesDiv = document.getElementById('categories');
        const categoryDivs = categoriesDiv.querySelectorAll('.category');

        categoryDivs.forEach(categoryDiv => {
            const categoryName = categoryDiv.querySelector('h2').textContent.toLowerCase();
            const productsDivs = categoryDiv.querySelectorAll('.product');

            // Check if category name or any product matches the search input
            const isCategoryVisible = categoryName.includes(searchInput);
            let isCategoryProductVisible = isCategoryVisible;

            productsDivs.forEach(productDiv => {
                const productName = productDiv.querySelector('.product-details h3').textContent.toLowerCase();
                const productDescription = productDiv.querySelector('.product-details p').textContent.toLowerCase();
                const isProductVisible = productName.includes(searchInput) || productDescription.includes(searchInput);
                productDiv.style.display = isProductVisible ? 'flex' : 'none';
                if (isProductVisible) {
                    isCategoryProductVisible = true;
                }
            });

            categoryDiv.style.display = isCategoryProductVisible ? 'block' : 'none';
        });
    }

    // Attach event listener to search input
    document.getElementById('searchInput').addEventListener('input', filterCatalogue);
});
