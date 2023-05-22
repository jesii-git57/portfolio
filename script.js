// Access the contact form element
const contactForm = document.getElementById('contact-form');

// Add an event listener to the form submission
contactForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  
  // Get the form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  // Perform some validation
  if (name === '' || email === '' || message === '') {
    alert('Please fill in all fields');
    return;
  }
  
  // Display a success message
  alert('Message sent successfully!');
  
  // Reset the form
  contactForm.reset();
});