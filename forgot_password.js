// Simulated backend logic
const fakeOtp = "123456"; // This would normally come from the backend

// Step 1: Handle email submission
document.getElementById("emailForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission

  const emailInput = document.getElementById("email");
  const email = emailInput.value.trim();
  const messageElement = document.getElementById("message");

  // Validate email
  if (!validateEmail(email)) {
    messageElement.textContent = "Please enter a valid email address.";
    messageElement.style.color = "red";
    messageElement.classList.remove("hidden");
    return;
  }

  // Simulate sending OTP
  setTimeout(() => {
    messageElement.textContent = "OTP has been sent to your email.";
    messageElement.style.color = "green";
    messageElement.classList.remove("hidden");
    document.getElementById("emailForm").classList.add("hidden");
    document.getElementById("otpForm").classList.remove("hidden");
  }, 1000);
});

// Step 2: Handle OTP and password submission
document.getElementById("otpForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission

  const otpInput = document.getElementById("otp");
  const newPasswordInput = document.getElementById("newPassword");
  const otp = otpInput.value.trim();
  const newPassword = newPasswordInput.value.trim();
  const messageElement = document.getElementById("message");

  // Validate OTP
  if (otp !== fakeOtp) {
    messageElement.textContent = "Invalid OTP. Please try again.";
    messageElement.style.color = "red";
    messageElement.classList.remove("hidden");
    return;
  }

  // Validate password
  if (newPassword.length < 6) {
    messageElement.textContent = "Password must be at least 6 characters long.";
    messageElement.style.color = "red";
    messageElement.classList.remove("hidden");
    return;
  }

  // Simulate password change success
  setTimeout(() => {
    messageElement.textContent = "Your password has been successfully changed.";
    messageElement.style.color = "green";
    messageElement.classList.remove("hidden");
    document.getElementById("otpForm").reset();
    document.getElementById("otpForm").classList.add("hidden");
  }, 1000);
});

// Email validation function
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
