function handleFormSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const messageContainer = document.getElementById("form-message");

  // Gather form data for Netlify submission
  const formData = new FormData(form);

  // If you're using a honeypot, don't submit when it's filled
  if (formData.get('bot-field')) {
    // likely a bot — just abort quietly
    return;
  }

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => {
      messageContainer.style.display = "block";
      messageContainer.textContent = "Thank you for your message!";
      messageContainer.classList.add("form-control", "con-validate");
      messageContainer.style.textAlign = "center";
      messageContainer.style.backgroundColor = "#dff0d8";
      messageContainer.style.color = "#3c763d";

      form.reset();
    })
    .catch((error) => {
      console.error("Form submission failed", error);
      messageContainer.style.display = "block";
      messageContainer.textContent = "Oops! There was a problem submitting your form.";
      messageContainer.classList.add("form-control", "con-validate");
      messageContainer.style.textAlign = "center";
      messageContainer.style.backgroundColor = "#f2dede";
      messageContainer.style.color = "#a94442";
    });
}
