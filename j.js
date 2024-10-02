const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const signUpBtn = document.getElementById('signUpBtn');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

signUpBtn.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent form submission if needed
    // Redirect to another page
    window.location.href = "thank-you.html"; // Replace with your target URL
});
