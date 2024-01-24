const loginHeaderButton = document.getElementById('login-header-button');
const loginContainer = document.getElementById('login-container');
const loginOpacity = document.getElementById('LoginOpacity');
const loginForm = document.getElementById('login-form');

document.addEventListener('DOMContentLoaded', function () {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');
    const successMessage = document.getElementById('success-message');

    usernameInput.value = '';
    passwordInput.value = '';
    successMessage.textContent = '';
    errorMessage.textContent = '';

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const username = usernameInput.value;
        const password = passwordInput.value;

        errorMessage.textContent = '';
        successMessage.textContent = '';

        if (username === 'Revil' && password === 'Revil21') {
            successMessage.textContent = 'Welcome Mr.Revil!';
            window.location.href = 'Dashboard/Dashboard.html';
        } else {
            errorMessage.textContent = 'Invalid username or password.';
        }
    });
});
