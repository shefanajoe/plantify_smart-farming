// Display user's name if available
const fullName = localStorage.getItem('fullName');
if (fullName) {
    document.getElementById('welcome-message').textContent = `Welcome, ${fullName}! Your plant’s personal hydration assistant is ready—never miss a watering day again!`;
} else {
    document.getElementById('welcome-message').textContent = 'Welcome to your plant’s personal hydration assistant—never miss a watering day again!';
}
