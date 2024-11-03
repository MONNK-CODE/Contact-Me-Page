document.addEventListener('DOMContentLoaded', function() {
    (function(){
        emailjs.init("YOUR_PUBLIC_KEY"); // Insert your public key here
    })();

    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            // Extract data from the form fields
            const firstName = document.querySelector('[name="first_name"]').value;
            const lastName = document.querySelector('[name="last_name"]').value;
            const emailAddress = document.querySelector('[name="email"]').value;
            const message = document.querySelector('[name="message"]').value;

            // Send email using EmailJS API
            emailjs.send("SERVICE_ID", "TEMPLATE_ID", { // Replace this your actual Service ID and Template ID
                first_name: firstName,
                last_name: lastName,
                email: emailAddress,
                message: message,
            })
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    swal({
                        title: "Success!",
                        text: "Your message has been sent successfully!",
                        icon: "success",
                    });
                    form.reset(); // This resets the form fields
                })
                .catch(function(error) {
                    console.log('FAILED...', error);
                    swal({
                        title: "Failed!",
                        text: "Failed to send the message, please try again.",
                        icon: "error",
                    });
                });
        });
    } else {
        console.log('Form not found');
    }
});
