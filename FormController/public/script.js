// Select form and inputs
const form = document.getElementById('userForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');

// Error messages
const usernameError = document.getElementById('usernameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

// Add event listener for form submission
form.addEventListener('submit', (event) => {
    let valid = true;

    // Clear previous error messages
    clearErrors();

    // Validate Username
    if (username.value.trim() === '') {
        valid = false;
        usernameError.textContent = 'Username is required';
    }

    // Validate Email
    if (email.value.trim() === '') {
        valid = false;
        emailError.textContent = 'Email is required';
    } else if (!isValidEmail(email.value)) {
        valid = false;
        emailError.textContent = 'Enter a valid email';
    }

    // Validate Password
    if (password.value.trim() === '') {
        valid = false;
        passwordError.textContent = 'Password is required';
    } else if (password.value.length < 6) {
        valid = false;
        passwordError.textContent = 'Password must be at least 6 characters';
    }

    // Prevent form submission if not valid
    if (!valid) {
        event.preventDefault();
    }
});

// Clear error messages
function clearErrors() {
    usernameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
}

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
