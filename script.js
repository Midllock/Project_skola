async function nacistJSON(cesta) {
  try {
    // 1. Asynchronní požadavek na načtení souboru
    const response = await fetch(cesta);

    // 2. Kontrola stavu odpovědi
    if (!response.ok) {
      throw new Error(`Chyba sítě: ${response.status}`);
    }

    // 3. Asynchronní parsování (převod textu na JavaScriptový objekt)
    const data = await response.json();
    
    // 4. Vrácení dat nebo práce s nimi
    console.log('Načtená data (Async/Await):', data);
    return data;

  } catch (error) {
    console.error('Načtení JSON selhalo:', error);
    return null;
  }
}

// Spuštění funkce
nacistJSON('DATA\trenery.json');