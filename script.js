// JavaScript for form submission and validation
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const formMessage = document.getElementById('formMessage');

    // Simple validation
    if (name === "" || email === "") {
        formMessage.style.color = "red";
        formMessage.innerHTML = "Please fill out all fields.";
    } else {
        formMessage.style.color = "green";
        formMessage.innerHTML = "Thank you for contacting us, " + name + ". We will get back to you soon!";
        document.getElementById('contactForm').reset(); // Reset the form after submission
    }
});
