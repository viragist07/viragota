// Function to update price for each card
function updatePrice(cardId, basePrice, hasFiftyPercentOption = false) {
    const priceOptions = document.getElementById(`price-options-${cardId}`);
    const priceDisplay = document.getElementById(`price-display-${cardId}`);
    const checkoutButton = document.getElementById(`checkout-button-${cardId}`);
  
    // Set the default price display
    priceDisplay.textContent = `${basePrice.toLocaleString('ro-RO', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })} lei`;
  
    // Update price dynamically when dropdown changes
    priceOptions.addEventListener('change', function () {
      const selectedValue = this.value;
      if (selectedValue === "50" && hasFiftyPercentOption) {
        const price = basePrice * 0.5;
        priceDisplay.textContent = `${price.toLocaleString('ro-RO', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })} lei`;
      } else {
        priceDisplay.textContent = `${basePrice.toLocaleString('ro-RO', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })} lei`;
      }
    });
  
    // Handle button click for redirecting to URLs
    checkoutButton.addEventListener('click', function () {
      const selectedValue = priceOptions.value;
  
      // Define URLs for redirection
      let redirectUrl = '';
      if (cardId === 1 && (selectedValue === "default" || selectedValue === "100")) {
        redirectUrl = "#";
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
  updatePrice(2, 2100, true); // Card 2: "Workshop"
  updatePrice(3, 2300, true); // Card 3: "Konferencia és Workshop"
  