document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const responseDiv = document.getElementById("formResponse");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        // Reset previous message
        responseDiv.textContent = "";
        responseDiv.style.color = "red";

        if (!name || !email || !message) {
            responseDiv.textContent = "Please fill out all fields.";
            return;
        }

        if (!validateEmail(email)) {
            responseDiv.textContent = "Please enter a valid email address.";
            return;
        }

        // If everything is valid
        responseDiv.style.color = "green";
        responseDiv.textContent = "Your message has been sent successfully!";
        form.reset();
    });

    function validateEmail(email) {
        // Simple email pattern
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    }
});
