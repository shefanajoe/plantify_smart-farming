const features = document.querySelector('.features');

// Pause scrolling on hover and resume on mouse leave
features.addEventListener('mouseover', () => {
    features.style.animationPlayState = 'paused';
});

features.addEventListener('mouseout', () => {
    features.style.animationPlayState = 'running';
});
