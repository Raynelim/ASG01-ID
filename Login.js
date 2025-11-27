// Get the form and inputs
var form = document.getElementById("loginForm");
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");

// Get the forgot password link
var forgotLink = document.getElementById("forgotPassword");

// Listen for form submission
form.addEventListener("submit", function(event) {
    event.preventDefault(); // stop form from submitting

    var emailValue = emailInput.value;
    var passwordValue = passwordInput.value;

    // Email validation
    if (emailValue.indexOf("@gmail.com") === -1) {
        alert("Wrong email format. Must end with @gmail.com");
        return; // stop execution
    }

    // Password validation
    if (passwordValue.length < 6) {
        alert("Wrong password. Must be at least 6 characters");
        return; // stop execution
    }

    // If everything is correct
    alert("Login successful!");
});

// Forgot password functionality
forgotLink.addEventListener("click", function(event) {
    event.preventDefault(); // prevent link from navigating
    alert("A password reset has been sent to your email.");
});
