const toggle = document.getElementById('sunlight-toggle');
const statusDisplay = document.getElementById('status-display');

toggle.addEventListener('change', function() {
    if (this.checked) {
        statusDisplay.innerText = 'Artificial sunlight is ON';
        statusDisplay.style.color = '#FFEB3B'; // Yellow color for ON state
    } else {
        statusDisplay.innerText = 'Artificial sunlight is OFF';
        statusDisplay.style.color = '#F44336'; // Red color for OFF state
    }
});
