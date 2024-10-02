document.getElementById('calculate-btn').addEventListener('click', function() {
    const display = document.getElementById('moisture-display');

    // Set "Calculating..." message and reset moisture
    display.innerText = 'Calculating...';
    display.classList.remove('show-moisture'); // Hide moisture before calculating

    // After 2 seconds, show a random moisture level between 10% and 100%
    setTimeout(() => {
        const randomMoisture = (Math.random() * (100 - 10) + 10).toFixed(1);
        display.innerText = `${randomMoisture} %`;
        display.classList.add('show-moisture'); // Animate the appearance of moisture
    }, 2000);
});
