// Function to update price for each card
function updatePrice(cardId, basePrice, hasFiftyPercentOption = false) {
  const priceDisplay = document.getElementById(`price-display-${cardId}`);
  const checkoutButton = document.getElementById(`checkout-button-${cardId}`);

  if (!priceDisplay || !checkoutButton) return;

  // Set the default price display
  priceDisplay.textContent = `${basePrice.toLocaleString('ro-RO', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })} lei`;

  // If price options exist, handle dynamic updates
  if (hasFiftyPercentOption) {
    const priceOptions = document.getElementById(`price-options-${cardId}`);

    if (priceOptions) {
      priceOptions.addEventListener('change', function () {
        const selectedValue = this.value;

        const price =
          selectedValue === "50" ? basePrice * 0.5 : basePrice;

        priceDisplay.textContent = `${price.toLocaleString('ro-RO', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })} lei`;
      });
    }
  }

  // Handle button click for redirecting to URLs
  checkoutButton.addEventListener('click', function () {
    let redirectUrl = '';

    if (cardId === 1) {
      redirectUrl = "https://buy.stripe.com/cNicMXbnc4n87lhbW48Zq0d";
    } else if (cardId === 2) {
      redirectUrl = "https://buy.stripe.com/7sY7sDfDs6vgdJFe4c8Zq0c";
    } else if (cardId === 3) {
      redirectUrl = "https://buy.stripe.com/eVq28j76WcTE351aS08Zq0b";
    }

    if (redirectUrl) {
      window.location.href = redirectUrl;
    }
  });
}

// Initialize cards
updatePrice(1, 600);
updatePrice(2, 2000, true);
updatePrice(3, 2600, true);