function handleFormSubmit(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  const form = event.target;
  const messageContainer = document.getElementById("form-message");
 
  // Gather form data for Netlify submission
  const formData = new FormData(form);

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => {
      // Display the success message
      messageContainer.style.display = "block";
      messageContainer.textContent = "Köszönjük az üzeneted! A jelentkezés véglegesítéséhez kérlek, hogy vásárold meg az alábbi jegyek egyikét!";
      messageContainer.classList.add("form-control", "con-validate");
      messageContainer.style.textAlign = "center";
      messageContainer.style.backgroundColor = "#dff0d8"; // Optional: Add a light green background
      messageContainer.style.color = "#3c763d"; // Optional: Add a dark green text color
      messageContainer.style.marginTop = "15px"; // Added margin-top for spacing

      // Optionally clear the form fields
      form.reset();
    })
    .catch((error) => {
      console.error("Form submission failed", error);
      messageContainer.style.display = "block";
      messageContainer.textContent = "Oops! There was a problem submitting your form.";
      messageContainer.classList.add("form-control", "con-validate");
      messageContainer.style.textAlign = "center";
      messageContainer.style.backgroundColor = "#f2dede"; // Optional: Add a light red background
      messageContainer.style.color = "#a94442"; // Optional: Add a dark red text color
      messageContainer.style.marginTop = "20px"; // Added margin-top for spacing
    });
}
