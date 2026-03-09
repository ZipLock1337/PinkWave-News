// Get references to the login form and the error message element
const form = document.getElementById("loginForm");
const errorMessage = document.getElementById("errorMessage");

// Hardcoded valid credentials for demonstration purposes
// (in production, replace with secure authentication)
const VALID_EMAIL = "yuliia.horbatiukova.editor@pinkwave.ie";
const VALID_PASSWORD = "12345yullia";

// Add submit event listener to the login form
form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get trimmed values from the email and password input fields
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Check if entered credentials match the valid ones
  if (email === VALID_EMAIL && password === VALID_PASSWORD) {
    localStorage.setItem("isEditorLoggedIn", "true");
    window.location.href = "editor.html";
  } else {
    errorMessage.style.display = "block";
  }
});

// Hide the error message when the user starts typing again
document.getElementById("email").addEventListener("input", () => {
  errorMessage.style.display = "none";
});
document.getElementById("password").addEventListener("input", () => {
  errorMessage.style.display = "none";
});