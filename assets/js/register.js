// Password Toggle
const toggle = document.getElementById("togglePassword");

if (toggle) {
  const password = document.getElementById("password");
  const eyeOpen = document.getElementById("eyeOpen");
  const eyeClosed = document.getElementById("eyeClosed");

  toggle.addEventListener("click", () => {
    const isPassword = password.type === "password";

    password.type = isPassword ? "text" : "password";
    eyeOpen.style.display = isPassword ? "none" : "block";
    eyeClosed.style.display = isPassword ? "block" : "none";
  });
}

// Buttons 
const buttons = document.querySelectorAll(".signup-btn");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      window.location.href = "signin.html";
    });
  });