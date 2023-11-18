document.addEventListener('DOMContentLoaded', function () {
    const passwordInput = document.getElementById('Password');
    const copyButton = document.getElementById('CopyButton');
    const copyMessage = document.getElementById('CopyMessage'); // العنصر الجديد لرسالة النسخ

    copyButton.addEventListener('click', function () {
        passwordInput.select();

        try {
            const successful = document.execCommand('copy');
            if (successful) {
                // تحديث نص رسالة النسخ وتطبيق التنسيق
                copyMessage.textContent = 'Copied to clipboard!';
                copyMessage.classList.remove('error'); // إزالة التنسيق في حالة وجوده
                copyMessage.classList.add('success'); // تنسيق نجاح النسخ
            } else {
                copyMessage.textContent = 'Copy failed. Please select the text and press Ctrl+C (Cmd+C on Mac) to copy.';
                copyMessage.classList.remove('success'); // إزالة تنسيق نجاح النسخ
                copyMessage.classList.add('error'); // تنسيق فشل النسخ
            }
        } catch (err) {
            copyMessage.textContent = 'An error occurred while copying. Please try again.';
            copyMessage.classList.remove('success'); // إزالة تنسيق نجاح النسخ
            copyMessage.classList.add('error'); // تنسيق فشل النسخ
        }
    });
});
