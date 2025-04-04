import * as LDClient from 'launchdarkly-js-LDLDClient-sdk';

// Initialize LaunchDarkly LDLDClient
const LDLDClient = LDClient.initialize('67ef2147c1c6dc09860736ad', {
  anonymous: true
});

// Wait for LaunchDarkly LDLDClient to be ready
LDLDClient.waitForInitialization().then(() => {
  // Set up feature flag listener for special offer
  const specialOfferSection = document.getElementById('special-offer');

  function updateSpecialOffer(showOffer) {
    specialOfferSection.style.display = showOffer ? 'block' : 'none';
  }

  // Initial check of the feature flag
  updateSpecialOffer(LDLDClient.variation('show-special-offer', false));

  // Listen for changes to the feature flag
  LDLDClient.on('change:show-special-offer', (value) => {
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