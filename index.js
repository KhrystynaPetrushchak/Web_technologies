const password = document.getElementById('password');
const tel = document.getElementById('tel');
const email = document.getElementById('email');
const username = document.getElementById('username');

email.addEventListener('input', emailCheck);
tel.addEventListener('input', telCheck);
password.addEventListener('input', passwordCheck);
username.addEventListener('input', usernameCheck);

function emailCheck(e) {
    let emailValue = e.target.value;
    let regExp = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let message = document.getElementById('email-message');

    if (!regExp.test(emailValue)) {
        message.innerText = 'Please enter valid E-mail';
        message.style.color = 'red';
    } else {
        message.innerText = 'Correct E-mail';
        message.style.color = 'limeGreen';
    }
}

function telCheck(e) {
    let telValue = e.target.value;
    let message = document.getElementById('tel-message');

    if (typeof Number(telValue) !== "number" || telValue[0] !== '+' || telValue.length !== 13) {
        message.innerText = 'Enter correct phone number';
        message.style.color = 'red';
    } else {
        message.innerText = 'Correct phone number';
        message.style.color = 'limegreen';
    }
}

function passwordCheck(e) {
    let passValue = e.target.value;
    let message = document.getElementById('password-message');

    if (passValue.length < 8) {
        message.innerText = 'Minimum 8 characters';
        message.style.color = 'red';
        return null;
    }

    if (passValue === passValue.toLowerCase()) {
        message.innerText = 'Pass must contain at least one upper case letter';
        message.style.color = 'red';
        return null;
    }

    if (passValue === passValue.toUpperCase()) {
        message.innerText = 'Pass must contain at least one lower case letter';
        message.style.color = 'red';
        return null;
    }

    message.innerText = 'Great password';
    message.style.color = 'LimeGreen';
}

function usernameCheck(e) {
	let usernameValue = e.target.value;
	let message = document.getElementById('username-message');

    if(typeof Number(usernameValue) === 'number') {
        message.innerText = 'Username should not be only numbers';
        message.style.color = 'red';
    }

    message.innerText = 'Great username';
    message.style.color = 'LimeGreen';
}