function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior
  
    const form = event.target;
  
    // Gather form data for Netlify submission
    const formData = new FormData(form);
  
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        // Show success popup message
        alert("Thank you for your message!");
  
        // Optionally clear the form fields
        form.reset();
      })
      .catch((error) => {
        console.error("Form submission failed", error);
        alert("Oops! There was a problem submitting your form.");
      });
  }
  