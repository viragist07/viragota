// Function to update price for each card
function updatePrice(cardId, basePrice, hasFiftyPercentOption = false) {
  const priceDisplay = document.getElementById(`price-display-${cardId}`);
  const checkoutButton = document.getElementById(`checkout-button-${cardId}`);

  // Set the default price display
  priceDisplay.textContent = `${basePrice.toLocaleString('ro-RO', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })} lei`;

  // If price options exist, handle dynamic updates
  if (hasFiftyPercentOption) {
    const priceOptions = document.getElementById(`price-options-${cardId}`);

    priceOptions.addEventListener('change', function () {
      const selectedValue = this.value;
      if (selectedValue === "50") {
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
  }

  // Handle button click for redirecting to URLs
  checkoutButton.addEventListener('click', function () {
    let redirectUrl = '';

    // Define URLs for redirection based on cardId and selection
    if (cardId === 1) {
      redirectUrl = "https://book.stripe.com/dR64hn5kpb985W08wG";
    } else if (cardId === 2 || cardId === 3) {
      const selectedValue = document.getElementById(`price-options-${cardId}`).value;
      if (cardId === 2) {
        if (selectedValue === "50") {
          // No action
        } else if (selectedValue === "100") {
          // No action
        }
      } else if (cardId === 3) {
        if (selectedValue === "50") {
          // No action
        } else if (selectedValue === "100") {
          // No action
        }
      }
    }

    // Redirect if a valid URL is set
    if (redirectUrl) {
      window.location.href = redirectUrl;
    }
  });
}

// Initialize cards
updatePrice(1, 600); // Card 1: "Konferencia" (no price selector)
updatePrice(2, 2080, true); // Card 2: "Workshop" (with price selector)
updatePrice(3, 2240, true); // Card 3: "Konferencia és Workshop" (with price selector)
