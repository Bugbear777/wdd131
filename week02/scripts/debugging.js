const radiusOutput = document.getElementById('radius');
const areaOutput = document.getElementById('area'); // Corrected selector

const PI = 3.14159;

// First radius
let radius = 10;
let area = PI * radius * radius;
radiusOutput.textContent = radius;
areaOutput.textContent = area.toFixed(2); // Optional: format to 2 decimals

// Update to second radius
radius = 20;
area = PI * radius * radius;
radiusOutput.textContent = radius;
areaOutput.textContent = area.toFixed(2);
