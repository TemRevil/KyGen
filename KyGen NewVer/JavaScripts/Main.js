// Make Sure That You Want To Leave The Padge
window.addEventListener('beforeunload', function (e) {
    const passwordInput = document.getElementById('Password');
    
    if (passwordInput.value !== '') {
        e.preventDefault();
        e.returnValue = '';
    }
});

// -------------------------------------------------------------------------------

// Range Value Container
document.addEventListener('DOMContentLoaded', function () {
    var range = document.getElementById('range');
    var rangeValue = document.getElementById('rangeValue');
    rangeValue.textContent = range.value;
    range.addEventListener('input', function () {
        rangeValue.textContent = range.value;
    });
});

// -------------------------------------------------------------------------------

// Copy Container By Touch
const passwordInput = document.getElementById('Password');
const copyText = document.createElement('span');
copyText.id = 'CopyText';
passwordInput.parentNode.insertBefore(copyText, passwordInput.nextSibling);

function handleMouseEnter() {
    copyText.textContent = '';
}

function handleMouseLeave() {
    copyText.textContent = '';
}

function handleCopyClick() {
    passwordInput.select();
    document.execCommand('copy');
    copyText.textContent = '';
}

passwordInput.addEventListener('mouseenter', handleMouseEnter);
passwordInput.addEventListener('mouseleave', handleMouseLeave);
passwordInput.addEventListener('click', handleCopyClick);

// -------------------------------------------------------------------------------

// The Main Event
const generateButton = document.getElementById('Generate');
const numCheckbox = document.getElementById('btncheck1');
const abcCheckbox = document.getElementById('btncheck2');
const abcdCheckbox = document.getElementById('btncheck3');
const symbolsCheckbox = document.getElementById('btncheck4');
const newPasswordInput = document.getElementById('Password');
const rangeInput = document.getElementById('range');

function generatePassword() {
    const length = rangeInput.value;
    const characters = [];

    if (numCheckbox.checked) {
        characters.push('1234567890');
    }
    if (abcCheckbox.checked) {
        characters.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    }
    if (abcdCheckbox.checked) {
        characters.push('abcdefghijklmnopqrstuvwxyz');
    }
    if (symbolsCheckbox.checked) {
        characters.push('!@#$%^&*');
    }

    if (characters.length === 0) {
        alert('Choose Your Options!');
        return;
    }

    const charset = characters.join('');
    let password = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    newPasswordInput.value = password;
}

// rangeInput.addEventListener('change', generatePassword);
generateButton.addEventListener('click', generatePassword);

// -------------------------------------------------------------------------------------
