// Dynamically display the current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Dynamically display last modified date
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;



// Static temperature and wind speed values (as displayed on the HTML)
const temperatureC = 20; // °C
const windSpeedKmh = 3; // km/h



// Function to calculate wind chill in °C
function calculateWindChill(tempC, windKmh) {
  // Formula from Environment Canada
  return (
    13.12 +
    0.6215 * tempC -
    11.37 * Math.pow(windKmh, 0.16) +
    0.3965 * tempC * Math.pow(windKmh, 0.16)
  ).toFixed(1);
}

// DOM update logic
window.addEventListener("DOMContentLoaded", () => {
  const windChillElement = document.getElementById("windChill");

  if (temperatureC <= 10 && windSpeedKmh > 4.8) {
    const windChill = calculateWindChill(temperatureC, windSpeedKmh);
    windChillElement.innerHTML = `<b>Wind Chill:</b> ${windChill} °C`;
  } else {
    windChillElement.innerHTML = `<b>Wind Chill:</b> N/A`;
  }
});