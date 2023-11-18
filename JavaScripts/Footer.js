const footer = document.getElementById('main-footer');
const AboutUsButton = document.getElementById('AboutUsButton');
const kygenAboutUs = document.getElementById('KyGenAboutUs');
const kygenVersion = document.getElementById('KyGenVersion');

let isFooterRaised = false;

AboutUsButton.addEventListener('click', function (e) {
    e.preventDefault();
    
    if (isFooterRaised) {
        // إذا كان ال footer في حالة مرفوعة، قم بإعادته للوضع العادي
        footer.style.transform = 'translateY(0%)';
        isFooterRaised = false;
        KyGenAboutUsDiv.style.display = 'none';
        VerticalLine.style.display = 'none';
        ImgAboutUs.style.display = 'none';
        LiveAboutUs.style.display = 'none';
        ID.style.display = 'none';
        NoIdeasDiv.style.display = 'none';
        //----------------------------------------
        FeedbackForm.style.display = 'none';
        LockLapDiv.style.display = 'none';
    } else {
        // إذا كان ال footer في حالة عادية، قم برفعه للأعلى
        footer.style.transform = 'translateY(-60%)';
        isFooterRaised = true;
        KyGenAboutUsDiv.style.display = 'block'; // إظهار العنصر عند الضغط على About Us
        kygenTitle.style.transform = 'translateY(-60%)';
        kygenVersion.style.display = 'block'; // إظهار العنصر عند الضغط على About Us
        VerticalLine.style.display = 'block'; // إظهار العنصر عند الضغط على About Us
        ImgAboutUs.style.display = 'block'; // إظهار العنصر عند الضغط على About Us
        LiveAboutUs.style.display = 'block';
        ID.style.display = 'block'; // إظهار العنصر عند الضغط على About Us
        NoIdeasDiv.style.display = 'block'; // إظهار العنصر عند الضغط على About Us
    }
});

//--------------------------------------------------------------------------------------------

const FeedbackButton = document.getElementById('FeedbackButton');

FeedbackButton.addEventListener('click', function (e) {
    e.preventDefault();
    
    if (isFooterRaised) {
        // إذا كان ال footer في حالة مرفوعة، قم بإعادته للوضع العادي
        footer.style.transform = 'translateY(0%)';
        isFooterRaised = false;
        KyGenAboutUsDiv.style.display = 'none';
        VerticalLine.style.display = 'none';
        ImgAboutUs.style.display = 'none';
        LiveAboutUs.style.display = 'none';
        ID.style.display = 'none';
        NoIdeasDiv.style.display = 'none';
        FeedbackForm.style.display = 'none';
        LockLapDiv.style.display = 'none';
    } else {
        // إذا كان ال footer في حالة عادية، قم برفعه للأعلى
        footer.style.transform = 'translateY(-60%)';
        isFooterRaised = true;
        FeedbackForm.style.display = 'block';
        LockLapDiv.style.display = 'block';
    }
});
// استهدف عناصر الراديو والمربعات النصية والتحقق من التغيير
const feedbackRadio = document.getElementById("FeedbackRadioL");
const contactRadio = document.getElementById("ContactRadioL");
const feedbackForm = document.getElementById("FeedbackForm");
const emailInput = document.getElementById("Email");
const numberInput = document.getElementById("Number");

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
