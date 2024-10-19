// Countdown Timer
const birthdayDate = new Date('October 20, 2024 00:00:00').getTime();
const countdownElement = document.getElementById('countdown');

const countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const distance = birthdayDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        clearInterval(countdownInterval);
        countdownElement.innerHTML = "It's Ananja's Birthday!";
        document.getElementById('surpriseMessage').classList.remove('hidden');
    }
}, 1000);

document.getElementById('surpriseButton').addEventListener('click', function() {
    window.location.href = 'surprise.html';
});
