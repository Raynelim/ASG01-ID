// Get the login form
var form = document.getElementById("loginForm");

// Listen for form submission
form.addEventListener("submit", function(event) {
    event.preventDefault(); // stop form from submitting

    // Get input values
    var emailInput = document.getElementById("email").value;
    var passwordInput = document.getElementById("password").value;

    // Simple email check
    if (emailInput.indexOf("@gmail.com") === -1) {
        alert("Wrong email format. Must end with @gmail.com");
        return; // stop execution
    }

    // Simple password check
    if (passwordInput.length < 6) {
        alert("Wrong password. Must be at least 6 characters");
        return;
    }

    // If everything is fine
    alert("Login successful!");
});
