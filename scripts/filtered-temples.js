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

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
    {
    templeName: "Mesa Arizona",
    location: "Mesa, Arizona",
    dedicated: "1927, October, 23",
    area: 75000,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/mesa-arizona-temple/mesa-arizona-temple-186.jpg"
  },
    {
    templeName: "Gilbert Arizona",
    location: "Gilbert, Arizona",
    dedicated: "2014, March, 2",
    area: 85326,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/gilbert-arizona-temple/gilbert-arizona-temple-3802.jpg"
  },
    {
    templeName: "Gila Valley Arizona",
    location: "Gila Valley, Arizona",
    dedicated: "2010, May, 23",
    area: 18561,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/the-gila-valley-arizona-temple/the-gila-valley-arizona-temple-4020.jpg"
  },
  // Add more temple objects here...
];

// Create the gallery container inside the <main>
const main = document.querySelector("main");
const gallery = document.createElement("div");
gallery.classList.add("gallery");
main.appendChild(gallery);

// Create and append a card for each temple
temples.forEach(temple => {
  const figure = document.createElement("figure");

  const img = document.createElement("img");
  img.src = temple.imageUrl;
  img.alt = temple.templeName;
  img.loading = "lazy"; // Native lazy loading

  const caption = document.createElement("figcaption");
  caption.innerHTML = `
    <h3>${temple.templeName}</h3>
    <p><strong>Location:</strong> ${temple.location}</p>
    <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
    <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
  `;

  figure.appendChild(img);
  figure.appendChild(caption);
  gallery.appendChild(figure);
});

// Reusable function to render temple cards
function displayTemples(templeList) {
  gallery.innerHTML = ""; // Clear previous contents

  templeList.forEach(temple => {
    const figure = document.createElement("figure");

    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.loading = "lazy";

    const caption = document.createElement("figcaption");
    caption.innerHTML = `
      <h3>${temple.templeName}</h3>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
    `;

    figure.appendChild(img);
    figure.appendChild(caption);
    gallery.appendChild(figure);
  });
}

// Parse the year from the dedicated string
function getYear(dedicated) {
  return parseInt(dedicated.split(",")[0]);
}

// Filtering logic
const filters = {
  home: () => temples,
  old: () => temples.filter(t => getYear(t.dedicated) < 1900),
  new: () => temples.filter(t => getYear(t.dedicated) > 2000),
  large: () => temples.filter(t => t.area > 90000),
  small: () => temples.filter(t => t.area < 10000),
};

// Navigation event handling
["home", "old", "new", "large", "small"].forEach(id => {
  document.getElementById(id).addEventListener("click", (e) => {
    e.preventDefault();
    displayTemples(filters[id]());
  });
});


// Initial display
displayTemples(temples);
