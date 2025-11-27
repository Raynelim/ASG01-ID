// Get the Registration form
var form = document.getElementById("RegistrationForm");

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
        alert("Unable to create password. Must be at least 6 characters");
        return;
    }

    // If everything is fine
    alert("Registration successful!");
    localStorage.setItem("LoggedIn", "true");
    window.location.href = "Home.html"; // go to home page
});
