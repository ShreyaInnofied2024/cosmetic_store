function validateForm() {
    // Clear previous error messages
    document.getElementById("nameError").style.display = "none";
    document.getElementById("emailError").style.display = "none";
    document.getElementById("messageError").style.display = "none";
    
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var valid = true;

    // Validate Name
    if (name.trim() === "") {
        document.getElementById("nameError").style.display = "block";
        valid = false;
    }

    // Validate Email
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").style.display = "block";
        valid = false;
    }

    // Validate Message
    if (message.trim() === "") {
        document.getElementById("messageError").style.display = "block";
        valid = false;
    }

    // If the form is valid, show success message
    if (valid) {
        document.getElementById("contact-form").reset();  // Reset form fields
        document.getElementById("successMessage").style.display = "block"; // Show success message
    }

    // Return false to prevent form submission for demonstration purposes
    return false;
}

const menuToggle = document.querySelector('.menu-toggle');
const closeBtn = document.querySelector('.close-btn');
const drawer = document.querySelector('.drawer');

// Function to open the drawer
menuToggle.addEventListener('click', (e) => {
    drawer.classList.add('open');
    e.stopPropagation(); // Prevent click event from bubbling up
});

// Function to close the drawer when clicking on the close button
closeBtn.addEventListener('click', (e) => {
    drawer.classList.remove('open');
    e.stopPropagation();
});

// Function to close the drawer when clicking outside of it
document.addEventListener('click', (e) => {
    if (!drawer.contains(e.target) && !menuToggle.contains(e.target)) {
        drawer.classList.remove('open');
    }
});

// Stop event propagation for clicks inside the drawer
drawer.addEventListener('click', (e) => {
    e.stopPropagation();
});
