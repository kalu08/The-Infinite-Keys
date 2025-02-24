(function() {
    // Initialize EmailJS with your user ID
    emailjs.init("_liy9oXcoOnBmpRP6"); // Replace with your actual EmailJS user ID

    const form = document.getElementById('form-contact1');
    const successDiv = document.getElementById('mail_success');
    const failedDiv = document.getElementById('mail_failed');
    const submitButton = document.getElementById('send-contact-1');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Hide both messages initially
            successDiv.style.display = 'none';
            failedDiv.style.display = 'none';
            
            // Disable submit button and show loading state
            submitButton.disabled = true;
            submitButton.textContent = 'Sending...';

            // Prepare template parameters
            const templateParams = {
                user_name: document.getElementById('name-contact-1').value,
                user_email: document.getElementById('email-contact').value,
                message: document.getElementById('message-contact').value
            };

            // Send email using EmailJS
            emailjs.send('service_6xcdg9o', 'template_zuddbxo', templateParams)
                .then(function() {
                    // Show success message
                    successDiv.style.display = 'block';
                    failedDiv.style.display = 'none';
                    // Reset form
                    form.reset();
                })
                .catch(function(error) {
                    // Show error message
                    successDiv.style.display = 'none';
                    failedDiv.style.display = 'block';
                    console.error('EmailJS error:', error);
                })
                .finally(function() {
                    // Reset button state
                    submitButton.disabled = false;
                    submitButton.textContent = 'Send Now';
                });
        });
    }
})();