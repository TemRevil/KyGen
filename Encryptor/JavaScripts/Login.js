const loginHeaderButton = document.getElementById('login-header-button');
const loginContainer = document.getElementById('login-container');
const loginOpacity = document.getElementById('LoginOpacity');
const loginForm = document.getElementById('login-form');

document.addEventListener('DOMContentLoaded', function () {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');
    const successMessage = document.getElementById('success-message');

    // تأكد من مسح المحتوى الحالي للحقول عند تحميل الصفحة
    usernameInput.value = '';
    passwordInput.value = '';
    successMessage.value = '';
    errorMessage.value = '';

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const username = usernameInput.value;
        const password = passwordInput.value;

        // مسح الرسالتين عند بدء محاولة جديدة
        errorMessage.textContent = '';
        successMessage.textContent = '';

        // قم بإجراء التحقق من صحة اسم المستخدم وكلمة المرور هنا
        if (username == 'Revil21' && password == 'Revil21') {
            // إذا نجح تسجيل الدخول، قم بتحديث عنصر الرسالة برسالة النجاح
            successMessage.textContent = 'Welcome Mr.Revil!';
        }
    });
});

// --------------------------------------------------------------------------------------
