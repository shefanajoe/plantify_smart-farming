const toggle = document.getElementById('irrigation-toggle');
const statusDisplay = document.getElementById('status-display');

toggle.addEventListener('change', function() {
    if (this.checked) {
        statusDisplay.innerText = 'Plant is being watered';
        statusDisplay.style.color = '#4CAF50'; // Green color for ON state
    } else {
        statusDisplay.innerText = 'Irrigation is OFF';
        statusDisplay.style.color = '#F44336'; // Red color for OFF state
    }
});
