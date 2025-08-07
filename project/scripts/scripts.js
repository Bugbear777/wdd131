// Dynamically display the current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Dynamically display last modified date
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

// Simple Image Carousel

const images = document.querySelectorAll('.carousel-img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let current = 0;

function showImage(index) {
  images.forEach(img => img.classList.remove('active'));
  images[index].classList.add('active');
}

function nextImage() {
  current = (current + 1) % images.length;
  showImage(current);
}

function prevImage() {
  current = (current - 1 + images.length) % images.length;
  showImage(current);
}

nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);

// Auto-cycle every 5 seconds
setInterval(nextImage, 5000);

