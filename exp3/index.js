const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validateInputs()) {
      return false;
    }
})
function validateSkills(El) {
    El.preventDefault();
    var skills = skillsTextarea.value.trim(); 
    if (skills === "") {
        El.placeholder = "Skills field is blank.";
        return false;
    }
    return true;
}

function validateInputs() {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();
    const genderMale = document.getElementById('male');
    const genderFemale = document.getElementById('female');
    const dobVal = dob.value;
    const cnameVal = document.getElementById('cname').value;
    const yearVal = parseInt(document.getElementById('year').value);
    const deptVal = document.getElementById('dept').value.trim();
    const phoneVal = document.getElementById('phone').value;
    const agreeCheckbox = document.getElementById('agree');
  
    let success = true;
    if (deptVal === '-select-') { 
        window.alert("Please select the department");
    }
    if (usernameVal === '') {
        success = false;
        setError(username, 'Username is required')
    } else {
        setSuccess(username)
    }
    
    if (emailVal === '') {
        success = false;
        setError(email, 'Email is required')
    } else if (!validateEmail(emailVal)) {
        success = false;
        setError(email, 'Please enter a valid email')
    } else {
        setSuccess(email)
    }
    if (passwordVal === '') {
        success = false;
        setError(password, 'Password is required')
    } else if (passwordVal.length < 8) {
        success = false;
        setError(password, 'Password must be at least 8 characters long')
    } else {
        setSuccess(password)
    }

    if (cpasswordVal === '') {
        success = false;
        setError(cpassword, 'Confirm password is required')
    } else if (cpasswordVal !== passwordVal) {
        success = false;
        setError(cpassword, 'Password does not match')
    } else {
        setSuccess(cpassword);
    }
    if (!genderMale.checked && !genderFemale.checked) {
        success = false;
     window.alert("please enter the Gender");
    } 
    if (dobVal === '') {
        success = false;
        setError(dob, 'Date of Birth is required');
    } else {
        const currentDate = new Date();
        const selectedDate = new Date(dobVal);
        if (selectedDate > currentDate) {
            success = false;
            setError(dob, 'Please select a date in the past');
        } else {
            setSuccess(dob);
        }
    }
    if (isNaN(yearVal) || yearVal < 1 || yearVal > 5) {
        success = false;
        setError(document.getElementById('year'), 'Please enter a valid year of study (1 to 5)');
    } else {
        setSuccess(document.getElementById('year'));
    }
    if (cnameVal === '') {
        success = false;
        setError(document.getElementById('cname'), 'College name is required');
    } else {
        setSuccess(document.getElementById('cname'));
    }
    if (phoneVal === '' || isNaN(phoneVal) || phoneVal.length !== 10) {
        success = false;
        setError(document.getElementById('phone'), 'Please enter a valid phone number');
    } else {
        setSuccess(document.getElementById('phone'));
    }
    if (!agreeCheckbox.checked) {
        window.alert("Please agree to the terms");
        success = false;
    } else {
        setSuccess(agreeCheckbox.parentElement);
    }
   
    return success;
}

function setError(element, message) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');
    errorElement.innerText = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}

function setSuccess(element) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}


const validateEmail = (email) => {
    return String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
};
