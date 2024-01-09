const passwordInput = document.querySelector('.p-playpass');
const rule1 = document.querySelector('.p-rule-box.r1');
const rule2 = document.querySelector('.p-rule-box.r2');
const rule3 = document.querySelector('.p-rule-box.r3');
const rule4 = document.querySelector('.p-rule-box.r4');
const rule5 = document.querySelector('.p-rule-box.r5');
const rule6 = document.querySelector('.p-rule-box.r6');
const rule7 = document.querySelector('.p-rule-box.r7');
const rule8 = document.querySelector('.p-rule-box.r8');
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
    validateRule6();
    validateRule7();
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
    if (rule3.classList.contains('active') && /[!@#$%^&*()+=]/.test(passwordInput.value)) {
        rule4.classList.add('active');
        rule5.classList.remove('p-display');
    } else {
        rule4.classList.remove('active');
    }
}

function validateRule5() {
    const monthRegex = /(January|February|March|April|May|June|July|August|September|October|November|December)/i;
    if (rule3.classList.contains('active') && monthRegex.test(passwordInput.value)) {
        rule5.classList.add('active');
        rule6.classList.remove('p-display');
    } else {
        rule5.classList.remove('active');
    }
}

function validateRule6() {
    const countryNames = [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria",
        "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
        "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon",
        "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba",
        "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador",
        "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany",
        "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India",
        "Indonesia", "Iran", "Iraq", "Ireland", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati",
        "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein",
        "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius",
        "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal",
        "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine",
        "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis",
        "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles",
        "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname",
        "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey",
        "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu",
        "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
    ];

    const countryRegexPattern = new RegExp(`(${countryNames.join('|')})`, 'i');
    const enteredCountry = passwordInput.value.trim().toLowerCase();

    if (rule5.classList.contains('active') && countryRegexPattern.test(enteredCountry)) {
        rule6.classList.add('active');
        rule7.classList.remove('p-display');
    } else {
        rule6.classList.remove('active');
    }
}

function validateRule7() {
    const numbersSum = passwordInput.value
        .split('')
        .map(char => parseInt(char))
        .filter(value => !isNaN(value))
        .reduce((sum, value) => sum + value, 0);

    if (rule6.classList.contains('active') && numbersSum === 25) {
        rule7.classList.add('active');
        rule8.classList.remove('p-display');
    } else {
        rule7.classList.remove('active');
    }
}

function validateRule8() {
    const sponsors = ['Microsoft', 'Netflix', 'Playstation'];
    const includesSponsor = sponsors.some(sponsor => passwordInput.value.includes(sponsor));

    if (rule7.classList.contains('active') && includesSponsor) {
        rule8.classList.add('active');
    } else {
        rule8.classList.remove('active');
    }
}

function checkAllRules() {
    if (rule1.classList.contains('active') && rule2.classList.contains('active') && rule3.classList.contains('active') && rule4.classList.contains('active') && rule5.classList.contains('active') && rule6.classList.contains('active') && rule7.classList.contains('active') && rule8.classList.contains('active')) {
        winnerMessage.classList.remove('p-display');
        surrenderMessage.classList.add('p-display');
    } else {
        winnerMessage.classList.add('p-display');
        surrenderMessage.classList.add('p-display');
    }
}
