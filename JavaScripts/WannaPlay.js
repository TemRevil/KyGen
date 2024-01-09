const passwordInput = document.querySelector('.p-playpass');
const rule1 = document.querySelector('.p-rule-box.r1');
const rule2 = document.querySelector('.p-rule-box.r2');
const rule3 = document.querySelector('.p-rule-box.r3');
const rule4 = document.querySelector('.p-rule-box.r4');
const rule5 = document.querySelector('.p-rule-box.r5');
const surrenderButton = document.querySelector('.p-playpass-surrender');
const surrenderMessage = document.querySelector('.p-surrender-message');
const copyButton = document.querySelector('.p-playpass-copy');
const copyMessage = document.querySelector('.p-copy-message');
const winnerMessage = document.querySelector('.p-winner-message');

passwordInput.addEventListener('input', function () {
    validateRule1();
    validateRule2();
    validateRule3();
    validateRule4();
    validateRule5();
    checkAllRules();
});

surrenderButton.addEventListener('click', function () {
    passwordInput.disabled = true;
    surrenderMessage.classList.remove('p-display');
    winnerMessage.classList.add('p-display');
});

copyButton.addEventListener('click', function () {
    passwordInput.select();
    document.execCommand('copy');

    copyMessage.classList.remove('p-display');

    setTimeout(function () {
        copyMessage.classList.add('p-display');
    }, 2000);
});

function validateRule1() {
    if (passwordInput.value.length > 0) {
        rule1.classList.remove('p-display');
        if (passwordInput.value.length >= 6) {
            rule1.classList.add('active');
            rule2.classList.remove('p-display');
            rule2.classList.remove('active');
        } else {
            rule1.classList.remove('active');
        }
    } else {
        rule1.classList.remove('active');
    }
}

function validateRule2() {
    const numbersCount = (passwordInput.value.match(/\d/g) || []).length;
    if (rule1.classList.contains('active') && numbersCount >= 3) {
        rule2.classList.add('active');
        rule3.classList.remove('p-display');
    } else {
        rule2.classList.remove('active');
    }
}

function validateRule3() {
    const uppercaseCount = (passwordInput.value.match(/[A-Z]/g) || []).length;
    if (rule2.classList.contains('active') && uppercaseCount > 0) {
        rule3.classList.add('active');
        rule4.classList.remove('p-display');
    } else {
        rule3.classList.remove('active');
    }
}

function validateRule4() {
    if (rule3.classList.contains('active') && /[!@#]/.test(passwordInput.value)) {
        rule4.classList.add('active');
        rule5.classList.remove('p-display');
    } else {
        rule4.classList.remove('active');
    }
}

function validateRule5() {
    const monthRegex = /(January|February|March|April|May|June|July|August|September|October|November|December)/i;
    if (rule4.classList.contains('active') && monthRegex.test(passwordInput.value)) {
        rule5.classList.add('active');
    } else {
        rule5.classList.remove('active');
    }
}

function checkAllRules() {
    if (rule1.classList.contains('active') && rule2.classList.contains('active') && rule3.classList.contains('active') && rule4.classList.contains('active') && rule5.classList.contains('active')) {
        winnerMessage.classList.remove('p-display');
        surrenderMessage.classList.add('p-display');
    } else {
        winnerMessage.classList.add('p-display');
        surrenderMessage.classList.add('p-display');
    }
}
