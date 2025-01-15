function validateForm() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var username = document.getElementById("username").value;
    var userType = document.getElementById("userType").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
  
    // Check if any field is empty
    if (firstName == "" || lastName == "" || username == "" || userType == "" || password == "" || email == "" || mobile == "") {
      alert("All fields must be filled out!");
      return false;
    }
  
    // Validate email format
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email.match(emailPattern)) {
      alert("Please enter a valid email address.");
      return false;
    }
  
    // Validate mobile number (10 digits)
    var mobilePattern = /^[0-9]{10}$/;
    if (!mobile.match(mobilePattern)) {
      alert("Please enter a valid mobile number (10 digits).");
      return false;
    }
  
    return true;
  }
  
  function togglePassword() {
    var passwordField = document.getElementById("password");
    var showPasswordCheckbox = document.getElementById("showPassword");
  
    // Toggle password visibility based on checkbox state
    if (showPasswordCheckbox.checked) {
      passwordField.type = "text";
    } else {
      passwordField.type = "password";
    }
  }