document.getElementById('signupBtn').addEventListener('click', function() {
    window.location.href = 'signup.html'; // Change this to your actual signup page
});

// Fade-in effect on scroll
window.addEventListener('scroll', function() {
    const featuresSection = document.querySelector('.features');
    const rect = featuresSection.getBoundingClientRect();
    
    // Check if the features section is in the viewport
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        featuresSection.classList.add('visible');
    }
});
