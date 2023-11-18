const loginHeaderButton = document.getElementById('login-header-button');
const loginContainer = document.getElementById('login-container');
const loginOpacity = document.getElementById('LoginOpacity');
const loginForm = document.getElementById('login-form');

let isLoginContainerVisible = false;

loginHeaderButton.addEventListener('click', function (e) {
    e.preventDefault();

    if (isLoginContainerVisible) {
        closeLoginContainer();
    } else {
        openLoginContainer();
    }
});

function openLoginContainer() {
    loginContainer.style.display = 'block';
    loginOpacity.style.display = 'block';
    document.body.style.overflow = 'hidden';
    isLoginContainerVisible = true;
}

function closeLoginContainer() {
    loginContainer.style.display = 'none';
    loginOpacity.style.display = 'none';
    document.body.style.overflow = 'auto';
    isLoginContainerVisible = false;
}

// إضافة مراقب للنقرات على document
document.addEventListener('click', function (e) {
    // التحقق مما إذا كان النقر خارج عنصر الـ login ولا يمثل النقر على loginHeaderButton أو loginForm
    if (
        !loginContainer.contains(e.target) &&
        e.target !== loginHeaderButton &&
        e.target !== loginForm
    ) {
        closeLoginContainer();
    }
});

// --------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');
    const successMessage = document.getElementById('success-message');
    const optionsButton = document.getElementById('OptionsButton');

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

            // إخفاء زر Login وإظهار ايقونة الخيارات
            loginHeaderButton.style.display = 'none';

            // إخفاء قائمة تسجيل الدخول
            loginContainer.style.display = 'none';
            loginOpacity.style.display = 'none';
            optionsButton.style.display = 'block';
            document
        }
    });
});

// --------------------------------------------------------------------------------------

// إنشاء زر خيارات جديد وإضافته إلى الصفحة
const optionsButton = document.createElement('button');
optionsButton.textContent = 'Options';
optionsButton.style.position = 'fixed';
optionsButton.style.top = '1%';
optionsButton.style.right = '2%';
document

// إظهار صندوق صغير من زر OptionsButton
optionsButton.addEventListener('click', function () {
    const optionsBox = document.createElement('div');
    optionsBox.textContent = 'Log Out';
    optionsBox.style.position = 'absolute';
    optionsBox.style.top = optionsButton.offsetTop + optionsButton.clientHeight + 10;
    optionsBox.style.left = optionsButton.offsetLeft + 100;
    document.body.appendChild(optionsBox);
});
