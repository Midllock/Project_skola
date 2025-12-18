// ===== TRENÉŘI =====
async function nacistTrenery(cesta) {
  try {
    const response = await fetch(cesta);
    if (!response.ok) throw new Error(response.status);

    const data = await response.json();
    const container = document.getElementById("trenery-container");

    data.forEach(trener => {
      const karta = document.createElement("div");
      karta.classList.add("trener-karta");

      // barva podle licence
      if (trener.Licence_aktivni) {
        karta.classList.add("aktivni");
      } else {
        karta.classList.add("neaktivni");
      }

      karta.innerHTML = `
        <h3>${trener.Name}</h3>
        <p><strong>Pohlaví:</strong> ${trener.Gender}</p>
        <p><strong>Narození:</strong> ${trener.birth}</p>
        <p><strong>Licence:</strong> ${trener.Licence}</p>
        <p><strong>Licence aktivní:</strong> ${trener.Licence_aktivni ? "Ano" : "Ne"}</p>
        <p><strong>Status:</strong> ${trener.Status}</p>
      `;

      container.appendChild(karta);
    });

  } catch (error) {
    console.error("Chyba při načítání trenérů:", error);
  }
}

nacistTrenery("DATA/trenery.json");


// ===== KONTAKTY =====
async function nacistKontakty(cesta) {
  try {
    const response = await fetch(cesta);
    if (!response.ok) throw new Error(response.status);

    const data = await response.json();
    const container = document.getElementById("kontakt-container");

    data.forEach(contact => {
      const karta = document.createElement("div");
      karta.classList.add("kontakt-karta");

      karta.innerHTML = `
        <h3>${contact.Jméno}</h3>
        <p><strong>Email:</strong> ${contact.Email}</p>
        <p><strong>Telefon:</strong> ${contact.Telefon}</p>
      `;

      container.appendChild(karta);
    });

  } catch (error) {
    console.error("Chyba při načítání kontaktů:", error);
  }
}

nacistKontakty("DATA/kontakty.json");
