// استهدف عناصر الراديو والمربعات النصية والتحقق من التغيير
const feedbackRadio = document.getElementById("h-footer-form-feedback");
const contactRadio = document.getElementById("h-footer-form-contact");
const feedbackForm = document.getElementById("h-footer-form");
const emailInput = document.getElementById("h-footer-form-email");
const numberInput = document.getElementById("h-footer-form-number");

feedbackRadio.addEventListener("change", function () {
    if (feedbackRadio.checked) {
        // قم بتفعيل خيار الردود
        contactRadio.checked = false;
        // قم بتمكين حقل البريد الإلكتروني (المطلوب)
        emailInput.setAttribute("required", "true");
        // قم بإلغاء تمكين حقل الرقم (اختياري)
        numberInput.removeAttribute("required");
    }
});

contactRadio.addEventListener("change", function () {
    if (contactRadio.checked) {
        // قم بتعطيل خيار الردود
        feedbackRadio.checked = false;
        // قم بتمكين حقل الرقم (اختياري)
        numberInput.setAttribute("required", "true");
        // قم بإلغاء تمكين حقل البريد الإلكتروني (المطلوب)
        emailInput.removeAttribute("required");
    }
});

//--------------------------------------------------------------------------------------------
// Phone Numbers Form

const phoneInputField = document.querySelector("#h-footer-form-number");
const phoneInput = window.intlTelInput(phoneInputField, {
    preferredCountries: ["eg", "us"],
    utilsScript:
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});
