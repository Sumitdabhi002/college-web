function validateLogin() {
    const userType = document.getElementById('userType').value;
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Define user credentials for validation
    const credentials = {
        student: { username: 'student', password: 'student123' },
        teacher: { username: 'teacher', password: 'teacher123' },
        admin: { username: 'admin', password: 'admin123' }
    };

    // Validate the input
    if (userType && credentials[userType]) {
        if (username === credentials[userType].username && password === credentials[userType].password) {
            // Redirect to the appropriate home page
            if (userType === 'student') {
                window.location.href = 'student_home.html';
            } else if (userType === 'teacher') {
                window.location.href = 'teacher_home.html';
            } else if (userType === 'admin') {
                window.location.href = 'admin_home.html';
            }
        } else {
            alert('Invalid username or password.');
        }
    } else {
        alert('Please select a valid user type and enter your credentials.');
    }

    // Prevent the form from submitting
    return false;
}
