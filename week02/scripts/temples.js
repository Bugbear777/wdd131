// Dynamically display the current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Dynamically display last modified date
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

const hamburgerBtn = document.getElementById('hamburgerBtn');
const primaryNav = document.getElementById('primaryNav');

hamburgerBtn.addEventListener('click', () => {
  const isOpen = primaryNav.classList.toggle('open');
  hamburgerBtn.textContent = isOpen ? '✖' : '☰';
  hamburgerBtn.setAttribute('aria-expanded', isOpen);
});

