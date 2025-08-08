// Dynamically display the current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Dynamically display last modified date
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

// Simple Image Carousel

(function initCarousel() {
  const carouselImgs = document.querySelectorAll(".carousel-img");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  if (!carouselImgs.length || !prevBtn || !nextBtn) {
    // No carousel on this page — skip without error.
    return;
  }

  let current = 0;

  function showImage(index) {
    carouselImgs.forEach(img => img.classList.remove("active"));
    const safeIndex = ((index % carouselImgs.length) + carouselImgs.length) % carouselImgs.length;
    carouselImgs[safeIndex].classList.add("active");
    current = safeIndex;
  }

  function nextImage() { showImage(current + 1); }
  function prevImage() { showImage(current - 1); }

  nextBtn.addEventListener("click", nextImage);
  prevBtn.addEventListener("click", prevImage);

  // Show the first image immediately
  showImage(0);

  // Auto-cycle only if there’s more than one image
  if (carouselImgs.length > 1) {
    const intervalId = setInterval(nextImage, 5000);
    // (Optional) pause when tab is hidden
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) clearInterval(intervalId);
    });
  }
})();


// ==== Gallery fade-in (scoped & cached images safe) ====
document.addEventListener("DOMContentLoaded", () => {
  const galleryImgs = document.querySelectorAll(".gallery img[loading='lazy']");
  if (!galleryImgs.length) return;

  galleryImgs.forEach(img => {
    const markLoaded = () => img.classList.add("loaded");

    if (img.complete && img.naturalHeight !== 0) {
      // Already loaded from cache
      markLoaded();
    } else {
      img.addEventListener("load", markLoaded, { once: true });
      img.addEventListener("error", markLoaded, { once: true }); // don't leave it invisible on error
    }
  });
});