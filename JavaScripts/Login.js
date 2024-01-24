document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');

    if (loginForm) {
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
    } else {
        console.error('Login form not found in the HTML.');
    }
});
