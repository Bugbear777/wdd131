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

// ==== Book With Us (Activities array + form) ====
(function initBookingPage() {
  const form = document.getElementById("bookingForm");
  const select = document.getElementById("activity");
  if (!form || !select) return; // not on this page

  const ACTIVITIES = [
    { id: "pink-jeep",  name: "Pink Jeep: Broken Arrow",           category: "Tour",     durationHrs: 2 },
    { id: "vortex",     name: "Vortex Meditation Experience",      category: "Wellness", durationHrs: 1.5 },
    { id: "stargazing", name: "Guided Stargazing",                 category: "Night",    durationHrs: 2 },
    { id: "wine",       name: "Verde Valley Wine Tasting",         category: "Food",     durationHrs: 4 },
    { id: "heli",       name: "Helicopter: Red Rocks Loop",        category: "Flight",   durationHrs: 0.5 },
    { id: "cathedral",  name: "Sunrise Cathedral Rock Hike",       category: "Hike",     durationHrs: 3 },
    { id: "tlaque",     name: "Tlaquepaque Art Walk (guided)",     category: "Art",      durationHrs: 1.5 },
  ];

  // Populate the select (grouped by category to show off the array a bit)
  const byCategory = ACTIVITIES.reduce((acc, a) => {
    (acc[a.category] ||= []).push(a);
    return acc;
  }, {});

  // Clear the placeholder (keep the first option)
  select.length = 1;

  Object.entries(byCategory).forEach(([cat, items]) => {
    const group = document.createElement("optgroup");
    group.label = cat;
    items.forEach(a => {
      const opt = document.createElement("option");
      opt.value = a.id;
      opt.textContent = a.name;
      group.appendChild(opt);
    });
    select.appendChild(group);
  });

  // Helpful defaults
  const dateEl = document.getElementById("date");
  const timeEl = document.getElementById("time");
  if (dateEl && !dateEl.value) dateEl.valueAsDate = new Date(); // today
  if (timeEl && !timeEl.value) timeEl.value = "09:00";

  // Submit handler
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;

    const data = Object.fromEntries(new FormData(form).entries());
    const chosen = ACTIVITIES.find(a => a.id === data.activity);

    // Persist to localStorage as an array so you can build a “My Requests” view later
    const KEY = "rrr:bookingRequests";
    const current = JSON.parse(localStorage.getItem(KEY) || "[]");
    current.push({
      ...data,
      activityName: chosen?.name || data.activity,
      ts: new Date().toISOString(),
    });
    localStorage.setItem(KEY, JSON.stringify(current));

    alert(
      `Request received!\n\n` +
      `Activity: ${chosen?.name}\n` +
      `Date: ${data.date} ${data.time}\n` +
      `Party: ${data.party}\n` +
      `Name: ${data.fullName}\n` +
      `Email: ${data.email}`
    );

    form.reset();
    select.selectedIndex = 0;
    if (dateEl) dateEl.valueAsDate = new Date();
    if (timeEl) timeEl.value = "09:00";
  });
})();

