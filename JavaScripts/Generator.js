document.addEventListener('DOMContentLoaded', function () {
var range = document.querySelector('.g-range-input');
var rangeValue = document.querySelector('.g-range-number');
rangeValue.textContent = range.value;
range.addEventListener('input', function () {
    rangeValue.textContent = range.value;
});

const generateButton = document.querySelector('.g-range-gen');
const generateButton2 = document.querySelector('.g-password-gen');
const newPasswordInput = document.querySelector('.g-password-input');
const newPasswordSave = document.querySelector('.g-password-save-input');
const checkButtons = document.querySelectorAll('.g-check-widgets button');

generateButton.addEventListener('click', function () {
    generatePassword();
});
generateButton2.addEventListener('click', function () {
    generatePassword();
});

checkButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        toggleButton(button);
    });
});

function toggleButton(button) {
    const isChecked = button.getAttribute('data-checked') === 'true';
    button.setAttribute('data-checked', !isChecked);
    generatePassword();
}

function generatePassword() {
    const length = range.value;

    const characters = [];

checkButtons.forEach(function (button) {
    if (button.getAttribute('data-checked') === 'true') {
        switch (button.className) {
            case 'g-check-1':
                characters.push('1234567890');
                break;
            case 'g-check-2':
                characters.push('abcdefghijklmnopqrstuvwxyz');
                break;
            case 'g-check-3':
                characters.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
                break;
            case 'g-check-4':
                characters.push('!@#$%^&*');
                break;
            // يمكنك إضافة خيارات إضافية هنا
        }
    }
});

if (characters.length === 0) {
    alert('Choose Your Options!');
    return;
}

const charset = characters.join('');
let password = '';

for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
}

    newPasswordInput.value = password;
    newPasswordSave.value = password;
}
// -------------------------------------------------------------------------------
// Copy Container By Touch
const copyText = document.createElement('span');
copyText.id = 'yourCopyTextID'; // استبدال بالـ ID الصحيح
newPasswordInput.parentNode.insertBefore(copyText, newPasswordInput.nextSibling);

function handleMouseEnter() {
    copyText.textContent = '';
}

function handleMouseLeave() {
    copyText.textContent = '';
}

function handleCopyClick() {
    newPasswordInput.select();
    document.execCommand('copy');
    copyText.textContent = 'Copied To Clipboard';
}
newPasswordInput.addEventListener('mouseenter', handleMouseEnter);
newPasswordInput.addEventListener('mouseleave', handleMouseLeave);
newPasswordInput.addEventListener('click', handleCopyClick);
});

// -------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
    const copyButton = document.querySelector('.g-password-copy');
    const passwordInput = document.querySelector('.g-password-input');

    copyButton.addEventListener('click', function () {
        // تحديد النص في حقل النص
        passwordInput.select();

        // نسخ النص إلى الحافظة (Clipboard)
        document.execCommand('copy');

        // إخفاء النص المحدد
        window.getSelection().removeAllRanges();

        // إظهار رسالة أو إجراء إضافي إذا كان ذلك ضروريًا
        alert('Password copied to clipboard!');
    });
});
// -------------------------------------------------------------------------------
// The Checked Button Numbers
document.addEventListener('DOMContentLoaded', function () {
    const checkButton1 = document.querySelector('.g-check-1');

    checkButton1.setAttribute('data-checked', 'true');
    
    function toggleButton(button) {
        const isChecked = button.getAttribute('data-checked') === 'true';
        button.setAttribute('data-checked', !isChecked);
    }
});

// -------------------------------------------------------------------------------
document.querySelector('.btn-primary.g-password-save-modal').addEventListener('click', function () {
    const emailInput = document.querySelector('.g-save-email');
    const passwordInput = document.querySelector('.g-password-save-input');
    const email = emailInput.value;
    const userPassword = passwordInput.value;

    // تحقق من أن كل حقول البريد الإلكتروني وكلمة المرور ليست فارغة
    if (email.trim() !== '' && userPassword.trim() !== '') {
        savePass(email, userPassword);
    } else {
        // إذا كان أي من حقول البريد الإلكتروني أو كلمة المرور فارغًا
        alert('Please fill in all fields before saving.');
    }
});

function savePass(email, userPassword) {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-US', {  day: 'numeric', month: 'long', year: 'numeric' });    
    const fileContent = `Date: ${formattedDate}\nEmail: ${email}\nPassword: ${userPassword}\n\nMade By Encryptor©`;

    const blob = new Blob([fileContent], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Encryptor.txt';

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
}
