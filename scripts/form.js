// Dynamically display the current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Dynamically display last modified date
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

const products = [
      { name: "Smart Speaker X1" },
      { name: "EcoFan Breeze 2000" },
      { name: "SolarCharge 10K" },
      { name: "AquaFilter Pro" }
    ];

    const productSelect = document.getElementById("product");
    products.forEach(product => {
      const option = document.createElement("option");
      option.value = product.name;
      option.textContent = product.name;
      productSelect.appendChild(option);
    });