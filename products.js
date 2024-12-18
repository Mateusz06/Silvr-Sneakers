// JavaScript for the price filter functionality
const minPriceInput = document.getElementById('min-price');
const maxPriceInput = document.getElementById('max-price');

// Function to handle changes to the price inputs
function updatePriceFilter() {
    const minPrice = parseFloat(minPriceInput.value);
    const maxPrice = parseFloat(maxPriceInput.value);

    // Validate and update the price range
    if (minPrice && maxPrice && minPrice <= maxPrice) {
        console.log(`Filtering products from $${minPrice} to $${maxPrice}`);
        // Here you can add the code to filter products based on price
    } else {
        // Handle invalid inputs, e.g., resetting to default values or showing a message
        console.log("Invalid price range");
    }
}

// Add event listeners to the price input fields
minPriceInput.addEventListener('input', updatePriceFilter);
maxPriceInput.addEventListener('input', updatePriceFilter);
