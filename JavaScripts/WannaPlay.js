const passwordInput = document.querySelector('.p-playpass');
const rule1 = document.querySelector('.p-rule-box.r1');
const rule2 = document.querySelector('.p-rule-box.r2');
const surrenderButton = document.querySelector('.p-playpass-surrender');
const surrenderMessage = document.querySelector('.p-surrender-message');
const copyButton = document.querySelector('.p-playpass-copy');
const copyMessage = document.querySelector('.p-copy-message');
const winnerMessage = document.querySelector('.p-winner-message');


passwordInput.addEventListener('input', function () {
    validateRule1();
    validateRule2();
    checkAllRules();
});

surrenderButton.addEventListener('click', function () {
    passwordInput.disabled = true;
    surrenderMessage.classList.remove('p-display');
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
    if (numbersCount >= 3) {
        rule2.classList.add('active');
    } else {
        rule2.classList.remove('active');
    }
}

function checkAllRules() {
    if (rule1.classList.contains('active') && rule2.classList.contains('active')) {
        winnerMessage.classList.remove('p-display');
    } else {
        winnerMessage.classList.add('p-display');
    }
}
