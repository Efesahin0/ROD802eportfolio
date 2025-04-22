// Simple form submission handling
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const name = form.name.value;
      alert(`Thank you, ${name}! Your message has been received.`);
      form.reset();
    });
  });
  