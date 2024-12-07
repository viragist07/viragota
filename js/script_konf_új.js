// Function to update price for each card
function updatePrice(cardId, basePrice, hasFiftyPercentOption = false) {
    const priceOptions = document.getElementById(`price-options-${cardId}`);
    const priceDisplay = document.getElementById(`price-display-${cardId}`);
    const originalPriceDisplay = document.getElementById(`original-price-${cardId}`);
    const checkoutButton = document.getElementById(`checkout-button-${cardId}`);

    // Calculate and display the original price (20% higher)
    const originalPrice = basePrice * 1.2;
    originalPriceDisplay.textContent = `${originalPrice.toLocaleString('ro-RO', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })} lei`;
    originalPriceDisplay.style.textDecoration = 'line-through';

    // Set the default price display
    priceDisplay.textContent = `${basePrice.toLocaleString('ro-RO', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })} lei`;

    // Update price dynamically when dropdown changes
    priceOptions.addEventListener('change', function () {
        const selectedValue = this.value;
        let price = basePrice;

        if (selectedValue === "50" && hasFiftyPercentOption) {
            price = basePrice * 0.5;
        }

        priceDisplay.textContent = `${price.toLocaleString('ro-RO', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        })} lei`;
    });

    // Handle button click for redirecting to URLs
    checkoutButton.addEventListener('click', function () {
        const selectedValue = priceOptions.value;

        // Define URLs for redirection
        let redirectUrl = '';
        if (cardId === 1 && (selectedValue === "default" || selectedValue === "100")) {
            redirectUrl = "https://buy.stripe.com/8wM0177sxa543NS003";
        } else if (cardId === 2) {
            if (selectedValue === "50") {
                redirectUrl = "#";
            } else if (selectedValue === "100") {
                redirectUrl = "#";
            }
        } else if (cardId === 3) {
            if (selectedValue === "50") {
                redirectUrl = "#";
            } else if (selectedValue === "100") {
                redirectUrl = "#";
            }
        }

        // Redirect to the URL if valid
        if (redirectUrl) {
            window.location.href = redirectUrl;
        } else {
            alert("Kérjük, válassz egy lehetőséget a folytatáshoz.");
        }
    });
}

// Initialize cards
updatePrice(1, 450); // Card 1: "Konferencia"
updatePrice(2, 2080, true); // Card 2: "Workshop"
updatePrice(3, 2240, true); // Card 3: "Konferencia és Workshop"
