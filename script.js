const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.querySelector('.container');

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});
document.getElementById('forgotPassword').addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'reset-password.html';
});

document.getElementById('backToSignIn').addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'index.html';
});
// Handle form submissions
document.getElementById('signUpForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Account created successfully!');
    // Here, you would typically send the form data to the server
});

document.getElementById('signInForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Logged in successfully!');
    // Here, you would typically send the form data to the server
});
