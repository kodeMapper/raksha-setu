// script.js

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Message sent! Thank you for reaching out.');
    this.reset(); // Reset the form
});
