const passwordInput = document.querySelector('.p-playpass');
const rule1 = document.querySelector('.p-rule-box.r1');
const rule2 = document.querySelector('.p-rule-box.r2');
const rule3 = document.querySelector('.p-rule-box.r3');
const rule4 = document.querySelector('.p-rule-box.r4');
const rule5 = document.querySelector('.p-rule-box.r5');
const rule6 = document.querySelector('.p-rule-box.r6');
const rule7 = document.querySelector('.p-rule-box.r7');
const rule8 = document.querySelector('.p-rule-box.r8');
const rule9 = document.querySelector('.p-rule-box.r9');
const rule10 = document.querySelector('.p-rule-box.r10');
const rule11 = document.querySelector('.p-rule-box.r11');
const rule12 = document.querySelector('.p-rule-box.r12');
const rule13 = document.querySelector('.p-rule-box.r13');
const rule14 = document.querySelector('.p-rule-box.r14');
const rule15 = document.querySelector('.p-rule-box.r15');
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
    validateRule8();
    validateRule9();
    validateRule10();
    validateRule11();
    validateRule12();
    validateRule13();
    validateRule14();
    validateRule15();
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

passwordInput.addEventListener('input', function () {
    const passwordLength = passwordInput.value.length;
    const playpassNumber = document.querySelector('.p-playpass-number');
    playpassNumber.textContent = passwordLength;
});


function validateRule1() {
    if (passwordInput.value.length > 0) {
        rule1.classList.remove('p-display');
        if (passwordInput.value.length >= 6) {
            rule1.classList.add('active');
            rule2.classList.remove('p-display');
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
        "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "UnitedKingdom", "United States", "UnitedStates", "Uruguay", "Uzbekistan", "Vanuatu",
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

    const countryIsrael = [ "Israel" ]
    const wrongCountry = document.querySelector('.p-country-wrong');
    const countryRegexIsrael = new RegExp(`(${countryIsrael.join('|')})`, 'i');
    const enteredCountryisrael = passwordInput.value.trim().toLowerCase();
    
    if (countryRegexIsrael.test(enteredCountryisrael)) {
        wrongCountry.classList.remove('p-display')
    }
    else {
        wrongCountry.classList.add('p-display')
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
    const sponsors = ['Microsoft', 'Netflix', 'Playstation', 'microsoft', 'netflix', 'playstation'];
    const includesSponsor = sponsors.some(sponsor => passwordInput.value.includes(sponsor));

    if (rule7.classList.contains('active') && includesSponsor) {
        rule8.classList.add('active');
        rule9.classList.remove('p-display');
    } else {
        rule8.classList.remove('active');
    }
}

function validateRule9() {
    const periodicTableSymbols = [
        'H', 'He', 'Li', 'Be', 'B', 'C', 'N', 'O', 'F', 'Ne', 'Na', 'Mg', 'Al', 'Si', 'P', 'S', 'Cl', 'K', 'Ar', 'Ca',
        'Sc', 'Ti', 'V', 'Cr', 'Mn', 'Fe', 'Ni', 'Co', 'Cu', 'Zn', 'Ga', 'Ge', 'As', 'Se', 'Br', 'Kr', 'Rb', 'Sr', 'Y', 'Zr',
        'Nb', 'Mo', 'Tc', 'Ru', 'Rh', 'Pd', 'Ag', 'Cd', 'In', 'Sn', 'Sb', 'Te', 'I', 'Xe', 'Cs', 'Ba', 'La', 'Ce', 'Pr', 'Nd',
        'Pm', 'Sm', 'Eu', 'Gd', 'Tb', 'Dy', 'Ho', 'Er', 'Tm', 'Yb', 'Lu', 'Hf', 'Ta', 'W', 'Re', 'Os', 'Ir', 'Pt', 'Au', 'Hg',
        'Tl', 'Pb', 'Bi', 'Th', 'Pa', 'U', 'Np', 'Pu', 'Am', 'Cm', 'Bk', 'Cf', 'Es', 'Fm', 'Md', 'No', 'Lr', 'Rf', 'Db', 'Sg',
        'Bh', 'Hs', 'Mt', 'Ds', 'Rg', 'Cn', 'Nh', 'Fl', 'Mc', 'Lv', 'Ts', 'Og'
    ];
    const enteredPassword = passwordInput.value.toUpperCase();

    if (rule8.classList.contains('active') && periodicTableSymbols.some(symbol => enteredPassword.includes(symbol))) {
        rule9.classList.add('active');
        rule10.classList.remove('p-display');
    } else {
        rule9.classList.remove('active');
    }
}

function validateRule10() {
    const cityNames = [
        "Cairo", "Lagos", "Cape Town", "Nairobi", "Algiers", "Sydney", "Melbourne", "Brisbane", "Auckland", "Perth",
        "London", "Paris", "Berlin", "Moscow", "Madrid", "Rome", "Stockholm", "Athens", "Vienna", "Warsaw", "Viena",
        "New York", "Los Angeles", "Toronto", "Chicago", "Mexico City", "Bayonne", "Sao Paulo", "Rio de Janeiro", "Buenos Aires", "Lima",
        "Bogota", "Prague", "Tokyo", "Beijing", "Santiago", "Mumbai", "Seoul", "Caracas", "Casablanca", "Montevideo", "Liverpool", "Brighton", "Manchester City",
    ];
    const cityRegexPattern = new RegExp(`(${cityNames.join('|')})`, 'i');
    const enteredCity = passwordInput.value.trim().toLowerCase();

    if (rule9.classList.contains('active') && cityRegexPattern.test(enteredCity)) {
        rule10.classList.add('active');
        rule11.classList.remove('p-display');
    } else {
        rule10.classList.remove('active');
    }
    checkAllRules();
}

function validateRule11() {
    const fruitNames = [
        "apple", "orange", "banana", "grape", "strawberry", "watermelon", "kiwi", "mango", "pineapple", "peach",
        "pear", "plum", "cherry", "lemon", "lime", "blueberry", "raspberry", "blackberry", "avocado", "coconut",
        "fig", "grapefruit", "pomegranate", "papaya", "apricot", "nectarine", "cranberry", "cantaloupe", "honeydew", "date",
        "dragon fruit", "guava", "kiwifruit", "passion fruit", "lychee", "mango", "persimmon", "star fruit", "watermelon", "elderberry",
        "boysenberry", "kiwano", "ackee", "breadfruit", "carambola", "currant", "feijoa", "jambul", "kumquat", "loquat",
        "longan", "salak", "sapote", "soursop", "ugli fruit", "yuzu", "plantain", "rambutan", "tamarillo", "tamarind",
        "ugli fruit", "yuzu"
    ];
    const fruitRegexPattern = new RegExp(`(${fruitNames.join('|')})`, 'i');
    const enteredPassword = passwordInput.value.trim().toLowerCase();

    if (rule10.classList.contains('active') && fruitRegexPattern.test(enteredPassword)) {
        rule11.classList.add('active');
        rule12.classList.remove('p-display');
    } else {
        rule11.classList.remove('active');
    }
}

function validateRule12() {
    const daysOfWeek = [
        "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"
    ];
    const daysOfWeekRegexPattern = new RegExp(`(${daysOfWeek.join('|')})`, 'i');
    const enteredPassword = passwordInput.value.trim().toLowerCase();

    if (daysOfWeekRegexPattern.test(enteredPassword)) {
        rule12.classList.add('active');
        rule13.classList.remove('p-display');
    } else {
        rule12.classList.remove('active');
    }
}

function validateRule13() {
    const colorNames = [
        "AliceBlue", "AntiqueWhite", "Beige", "Bisque", "BlanchedAlmond", "BurlyWood", "Cornsilk", "Gainsboro", "GhostWhite", "Honeydew",
        "Ivory", "Lavender", "LavenderBlush", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGreen",
        "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSteelBlue", "LightYellow", "MintCream", "MistyRose", "Moccasin",
        "DimGray", "FireBrick", "ForestGreen", "MediumBlue", "MediumSlateBlue", "MidnightBlue", "SaddleBrown", "Sienna", "SlateGray", "SteelBlue",
        "Red", "Blue", "Green", "Yellow", "Purple", "Orange", "Pink", "Brown", "Gray", "Black", "White"
    ];

    const colorRegexPattern = new RegExp(`(${colorNames.join('|')})`, 'i');
    const enteredColor = passwordInput.value.trim();

    if (rule12.classList.contains('active') && colorRegexPattern.test(enteredColor)) {
        rule13.classList.add('active');
        rule14.classList.remove('p-display');
    } else {
        rule13.classList.remove('active');
    }
}

function validateRule14() {
    const moresDecodeWord = ["Thank"];

    const moresDecodeRegexPattern = new RegExp(`(${moresDecodeWord.join('|')})`, 'i');
    const enteredPassword = passwordInput.value.trim().toLowerCase();

    if (rule13.classList.contains('active') && moresDecodeRegexPattern.test(enteredPassword)) {
        rule14.classList.add('active');
        rule15.classList.remove('p-display');
    } else {
        rule14.classList.remove('active');
    }
}

function validateRule15() {
    const ASCIIDecodeWords = ["You"];

    const ASCIIDecodeRegexPattern = new RegExp(`(${ASCIIDecodeWords.join('|')})`, 'i');
    const enteredPassword = passwordInput.value.trim().toLowerCase();

    if (rule14.classList.contains('active') && ASCIIDecodeRegexPattern.test(enteredPassword)) {
        rule15.classList.add('active');
    } else {
        rule15.classList.remove('active');
    }
}

function checkAllRules() {
    const isAllRulesPassed = 
        rule1.classList.contains('active') &&
        rule2.classList.contains('active') &&
        rule3.classList.contains('active') &&
        rule4.classList.contains('active') &&
        rule5.classList.contains('active') &&
        rule6.classList.contains('active') &&
        rule7.classList.contains('active') &&
        rule8.classList.contains('active') &&
        rule9.classList.contains('active') &&
        rule10.classList.contains('active')&&
        rule11.classList.contains('active')&&
        rule12.classList.contains('active')&&
        rule13.classList.contains('active')&&
        rule14.classList.contains('active')&&
        rule15.classList.contains('active');

    if (isAllRulesPassed) {
        winnerMessage.classList.remove('p-display');
        surrenderMessage.classList.add('p-display');
    } else {
        winnerMessage.classList.add('p-display');
    }
}
