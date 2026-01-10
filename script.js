document.addEventListener('mousemove', e => {
    // Přičítáme window.scrollY k vertikální poloze myši
    const x = e.clientX;
    const y = e.clientY + window.scrollY;
    document.body.style.setProperty('--mouse-x', x + 'px');
    document.body.style.setProperty('--mouse-y', y + 'px');
  });
// ===== HAMBURGER MENU =====
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.hamburger');
    const navigationMenu = document.querySelector('.menu');

    if (hamburgerButton && navigationMenu) {
        hamburgerButton.addEventListener('click', () => {
            // Přepne třídu pro animaci hamburger ikony (na křížek/zpět)
            hamburgerButton.classList.toggle('is-active');
            // Přepne ARIA atribut pro přístupnost
            const isExpanded = hamburgerButton.getAttribute('aria-expanded') === 'true' || false;
            hamburgerButton.setAttribute('aria-expanded', !isExpanded);
            // Přepne třídu pro zobrazení/skrytí navigačního menu
            navigationMenu.classList.toggle('is-active');
        });
    } else {
        console.error('Chyba: Hamburger tlačítko nebo navigační menu nebylo nalezeno!');
    }
});
document.querySelector('.menu')
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
        <p><strong>Status:</strong> ${trener.Status}</p>
        <div class="progress">
          <div class="progress-bar"></div>
        </div>
      `;
      container.appendChild(karta);
      const bar = karta.querySelector(".progress-bar");
      let progress = 0;
      let growInterval = null;
      let shrinkInterval = null;
      const cil = parseInt(trener.Training_start);
// NAJETÍ MYŠÍ
      karta.addEventListener("mouseenter", () => {
      clearInterval(shrinkInterval);
      clearInterval(growInterval);
      growInterval = setInterval(() => {
        if (progress >= cil) {
          clearInterval(growInterval);
        } else {
          progress++;
          bar.style.width = progress + "%";
        }
      }, 15);
    });
// ODJETÍ MYŠÍ
karta.addEventListener("mouseleave", () => {
  clearInterval(growInterval);
  clearInterval(shrinkInterval);

  shrinkInterval = setInterval(() => {
    if (progress <= 0) {
      clearInterval(shrinkInterval);
    } else {
      progress--;
      bar.style.width = progress + "%";
    }
  }, 10); // menší = rychlejší návrat
});
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
class Prihlaska {
    constructor(jmeno, email, zprava) {
        this.jmeno = jmeno;
        this.email = email;
        this.zprava = zprava;
    }
}
const seznamPrihlasek = [];
const form = document.getElementById("prihlaseniForm");
const ulSeznam = document.getElementById("seznamPrihlasek");
form.addEventListener("submit", function(e) {
    e.preventDefault();
    const jmeno = document.getElementById("jmeno").value;
    const email = document.getElementById("email").value;
    const zprava = document.getElementById("zprava").value;

    const novaPrihlaska = new Prihlaska(jmeno, email, zprava);
    seznamPrihlasek.push(novaPrihlaska);

    const li = document.createElement("li");
    li.textContent = `Jméno: ${jmeno}, Email: ${email}, Zpráva: ${zprava}`;
    ulSeznam.appendChild(li);

    form.reset();
});

