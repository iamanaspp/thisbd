// Initialize page effects when the window is loaded
window.addEventListener('load', () => {
    createConfetti();
    startEmojiMovements();
    enablePhotoLightbox();
    handleScrollAnimations();
    randomHighlightPhotos();
});

// Function to create confetti burst on page load
function createConfetti() {
    const confettiCount = 50;
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        document.body.appendChild(confetti);
        animateConfetti(confetti);
    }
}

// Animate confetti falling
function animateConfetti(confetti) {
    const duration = Math.random() * 3 + 2; // 2-5 seconds
    const delay = Math.random() * 2; // random delay
    const position = Math.random() * 100; // random horizontal position
    confetti.style.left = `${position}%`;
    confetti.style.animationDuration = `${duration}s`;
    confetti.style.animationDelay = `${delay}s`;

    confetti.addEventListener('animationend', () => {
        confetti.remove(); // Remove confetti after fall
    });
}

// Function to start subtle emoji movements
function startEmojiMovements() {
    const emojis = document.querySelectorAll('.emoji');
    emojis.forEach(emoji => {
        emoji.style.animationDuration = `${Math.random() * 10 + 5}s`; // Random floating duration
    });
}

// Enable photo lightbox effect (zoom in when clicked)
function enablePhotoLightbox() {
    const photos = document.querySelectorAll('.photo-frame img');
    photos.forEach(photo => {
        photo.addEventListener('click', () => {
            openLightbox(photo);
        });
    });
}

// Open photo in a lightbox with zoom effect
function openLightbox(photo) {
    const lightbox = document.createElement('div');
    lightbox.classList.add('lightbox');
    const img = document.createElement('img');
    img.src = photo.src;
    lightbox.appendChild(img);
    document.body.appendChild(lightbox);

    // Close lightbox when clicked
    lightbox.addEventListener('click', () => {
        lightbox.remove();
    });
}

// Handle scroll animations for fading in elements
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.container, .photo-gallery, .final-message');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.3 });

    elements.forEach(element => {
        observer.observe(element);
    });
}

// Randomly highlight photos with a glow effect
function randomHighlightPhotos() {
    const photos = document.querySelectorAll('.photo-frame img');
    setInterval(() => {
        const randomPhoto = photos[Math.floor(Math.random() * photos.length)];
        randomPhoto.classList.add('highlight');
        setTimeout(() => {
            randomPhoto.classList.remove('highlight');
        }, 3000); // Highlight for 3 seconds
    }, 5000); // Every 5 seconds
}

// Generate random color for dynamic elements
function getRandomColor() {
    const colors = ['#FF6F61', '#FFB3C1', '#FAD0C4', '#FBC2EB', '#FFA69E', '#FF9A9E'];
    return colors[Math.floor(Math.random() * colors.length)];
}
