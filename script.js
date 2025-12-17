async function nacistJSON(cesta) {
  try {
    const response = await fetch(cesta);
    if (!response.ok) {
      throw new Error(`Chyba sítě: ${response.status}`);
    }

    const data = await response.json();
    const container = document.getElementById("trenery-container");

    data.forEach(trener => {
      const karta = document.createElement("div");
      karta.classList.add("trener-karta");

      karta.innerHTML = `
        <h3>${trener.Name}</h3>
        <p><strong>Pohlaví:</strong> ${trener.Gender}</p>
        <p><strong>Narození:</strong> ${trener.birth}</p>
        <p><strong>Licence:</strong> ${trener.Licence}</p>
        <p><strong>Licence activ:</strong> ${trener.Licence_activ ? "Ano" : "Ne"}</p>
        <p><strong>Status:</strong> ${trener.Status}</p>
      `;

      container.appendChild(karta);
    });

  } catch (error) {
    console.error("Načtení JSON selhalo:", error);
  }
}

nacistJSON("DATA/trenery.json");
