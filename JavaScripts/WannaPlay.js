const passwordInput = document.querySelector('.p-playpass');
const rule1 = document.querySelector('.p-rule-box.r1');
const rule2 = document.querySelector('.p-rule-box.r2');

// حدث عند كتابة أي شيء في الحقل
passwordInput.addEventListener('input', function () {
    validateRule1();
    validateRule2();
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
    const numbersCount = (passwordInput.value.match(/\d/g) || []).length; if (numbersCount >= 3) {
        rule2.classList.add('active');
    } else {
        rule2.classList.remove('active');
    }
}
