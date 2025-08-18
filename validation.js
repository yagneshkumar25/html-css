const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    if (!validateInput()) {
        e.preventDefault();
    }
});

function validateInput() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();
    let success = true;
    if (usernameValue === '') {
        success = false;
        setMsg(username, 'Username is required');
    } 
    else {
        setSuccess(username);
    }
    if (emailValue === '') {
        success = false;
        setMsg(email, 'Email is required');
    } 
    else if (!validateEmail(emailValue)) {
        success = false;
        setMsg(email, 'Please enter a valid email address');
    } 
    else {
        setSuccess(email);
    }
    if (passwordValue === '') {
        success = false;
        setMsg(password, 'Password is required');
    } 
    else if (passwordValue.length < 8) {
        success = false;
        setMsg(password, 'Password must be at least 8 characters');
    } 
    else if (!validatePassword(passwordValue)) {
        success = false;
        setMsg(password, '1 UpperCase,1 LowerCase,1 digit,1 symbol');
    } 
    else {
        setSuccess(password);
    }
    if (confirmPasswordValue === '') {
        success = false;
        setMsg(confirmPassword, 'Confirm Password is required');
    } 
    else if (confirmPasswordValue !== passwordValue) {
        success = false;
        setMsg(confirmPassword, 'Passwords do not match');
    } 
    else {
        setSuccess(confirmPassword);
    }
    return success;
}
function setMsg(element, message) {
    const inputGroup = element.parentElement;
    const msgElement = inputGroup.querySelector('.msg');
    msgElement.innerText = message;
    msgElement.style.color = 'red';
}
function setSuccess(element) {
    const inputGroup = element.parentElement;
    const msgElement = inputGroup.querySelector('.msg');
    msgElement.innerText = '';
}
function validateEmail(email) {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
}
function validatePassword(password) {
    return /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[\W_]).{8,}$/.test(password);
}