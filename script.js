// Countdown Target Date
const targetDate = new Date("May 20, 2026 00:00:00").getTime();

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

// Countdown Function
setInterval(() => {

  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );

  const minutes = Math.floor(
    (distance % (1000 * 60 * 60)) / (1000 * 60)
  );

  const seconds = Math.floor(
    (distance % (1000 * 60)) / 1000
  );

  daysEl.innerHTML = days;
  hoursEl.innerHTML = hours;
  minutesEl.innerHTML = minutes;
  secondsEl.innerHTML = seconds;

}, 1000);


// Popup Elements
const popup = document.getElementById("popup");

const surpriseBtn = document.getElementById("surpriseBtn");

const closePopup = document.getElementById("closePopup");


// Open Popup
surpriseBtn.addEventListener("click", () => {

  popup.classList.add("active");

  createHearts();

});


// Close Popup
closePopup.addEventListener("click", () => {

  popup.classList.remove("active");

});


// Floating Hearts Effect
function createHearts(){

  for(let i = 0; i < 40; i++){

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "💖";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = Math.random() * 25 + 20 + "px";

    heart.style.animationDuration = Math.random() * 3 + 3 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {

      heart.remove();

    }, 6000);
  }
}