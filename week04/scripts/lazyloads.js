// Dynamically display the current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Dynamically display last modified date
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll("img[loading='lazy']");

  images.forEach(img => {
    img.addEventListener("load", () => {
      img.classList.add("loaded");
    });
  });
  
  // Set current year and last modified in the footer
  document.getElementById("currentyear").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;
});
