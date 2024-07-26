// MatmanSearchBar.js

export function filterCatalogue(searchInput, categoriesDiv) {
    const searchValue = searchInput.toLowerCase();
    const categoryDivs = categoriesDiv.querySelectorAll('.category');
    
    categoryDivs.forEach(categoryDiv => {
        const categoryName = categoryDiv.querySelector('h2').textContent.toLowerCase();
        const productsDivs = categoryDiv.querySelectorAll('.product');
        
        // Check if category name or any product matches the search input
        const isCategoryVisible = categoryName.includes(searchValue);
        let isCategoryProductVisible = isCategoryVisible;
        
        productsDivs.forEach(productDiv => {
            const productName = productDiv.querySelector('.product-details h3').textContent.toLowerCase();
            const productDescription = productDiv.querySelector('.product-details p').textContent.toLowerCase();
            const isProductVisible = productName.includes(searchValue) || productDescription.includes(searchValue);
            productDiv.style.display = isProductVisible ? 'flex' : 'none';
            if (isProductVisible) {
                isCategoryProductVisible = true;
            }
        });
        
        categoryDiv.style.display = isCategoryProductVisible ? 'block' : 'none';
    });
}
