document.getElementById('calculate-btn').addEventListener('click', function() {
    const display = document.getElementById('temperature-display');

    // Show "Calculating..." for 2 seconds
    display.innerText = 'Calculating...';

    // After 2 seconds, show a random temperature between 15°C and 35°C
    setTimeout(() => {
        const randomTemperature = (Math.random() * (35 - 15) + 15).toFixed(1);
        display.innerText = `${randomTemperature} °C`;
    }, 2000);
});
