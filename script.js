var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    // Profile picture
    var profilePictureInput = document.getElementById('profilePicture');
    var profilePictureFile = (profilePictureInput === null || profilePictureInput === void 0 ? void 0 : profilePictureInput.files) ? profilePictureInput.files[0] : null;
    // Form elements
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    var usernameElement = document.getElementById('username');
    if (profilePictureFile && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement && usernameElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var username = usernameElement.value;
        // Create a URL for the profile picture file
        var profilePictureURL = URL.createObjectURL(profilePictureFile);
        // Create resume output
        var resumeOutput = "\n            <h2>Resume</h2>\n            ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\" style=\"width: 150px; height: 150px; object-fit: cover;\"/>") : '', "\n            <p><strong>Name:</strong> <span id=\"edit-name\" class=\"editable\">").concat(name_1, "</span></p>\n            <p><strong>Email:</strong> <span id=\"edit-email\" class=\"editable\">").concat(email, "</span></p>\n            <p><strong>Phone Number:</strong> <span id=\"edit-phone\" class=\"editable\">").concat(phone, "</span></p>\n            <h3>Education</h3>\n            <p id=\"edit-education\" class=\"editable\">").concat(education, "</p>\n            <h3>Experience</h3>\n            <p id=\"edit-experience\" class=\"editable\">").concat(experience, "</p>\n            <h3>Skills</h3>\n            <p id=\"edit-skills\" class=\"editable\">").concat(skills, "</p>\n        ");
        var uniquePath = "resumes/".concat(username.replace(/\s+/g, '_'), "_cv.html");
        var downloadLink_1 = document.createElement('a');
        downloadLink_1.href = 'data:text/html; charset=utf-8,' + encodeURIComponent(resumeOutput);
        downloadLink_1.download = uniquePath;
        downloadLink_1.textContent = 'Download Your 2024 Resume';
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.appendChild(downloadLink_1);
            // Add copy link button functionality
            var copyLinkButton = document.getElementById('copyLinkButton');
            if (copyLinkButton) {
                copyLinkButton.addEventListener('click', function () {
                    // Create a temporary input to copy the link
                    var tempInput = document.createElement('input');
                    tempInput.value = downloadLink_1.href;
                    document.body.appendChild(tempInput);
                    tempInput.select();
                    document.execCommand('copy');
                    document.body.removeChild(tempInput);
                    alert('Sharable link copied to clipboard!');
                });
            }
            makeEditable(); // Make fields editable
        }
        else {
            console.error('Resume output element not found');
        }
    }
    else {
        console.error('One or more form elements are missing');
    }
});
function makeEditable() {
    var editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            if (currentElement.tagName === "P" || currentElement.tagName === "SPAN") {
                var input_1 = document.createElement('input');
                input_1.type = 'text';
                input_1.value = currentValue;
                input_1.classList.add('editing-input');
                input_1.addEventListener('blur', function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = 'inline';
                    input_1.remove();
                });
                currentElement.style.display = 'none';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}
