
import { client } from './client';

LDClient.on('ready', () => {
  console.log('LaunchDarkly client is ready');
  // ...existing code...
});



// Wait for LaunchDarkly LDClient to be ready
LDClient.waitForInitialization().then(() => {
  // Set up feature flag listener for special offer
  const specialOfferSection = document.getElementById('special-offer');

  function updateSpecialOffer(showOffer) {
    specialOfferSection.style.display = showOffer ? 'block' : 'none';
  }

  // Initial check of the feature flag
  updateSpecialOffer(LDClient.variation('show-special-offer', false));

  // Listen for changes to the feature flag
  LDClient.on('change:show-special-offer', (value) => {
    updateSpecialOffer(value);
  });
});

// Handle form submission
const form = document.querySelector('form[name="newsletter"]');
const successMessage = document.querySelector('.success-message');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  try {
    const formData = new FormData(form);
    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString()
    });

    // Show success message
    form.reset();
    successMessage.style.display = 'block';
    setTimeout(() => {
      successMessage.style.display = 'none';
    }, 5000);
  } catch (error) {
    console.error('Error submitting form:', error);
    alert('There was an error submitting the form. Please try again.');
  }
});