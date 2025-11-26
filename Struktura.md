web-project/
├─ README.md # krátký popis projektu + instrukce pro běh
│ └─ index.html
│
├─ /assets
│ ├─ /css
│ │ └─ styles.css # hlavní CSS (buildovaný Tailwind nebo vlastní)
│ ├─ /js
│ │ ├─ main.js # inicializace, společné funkce
│ │ ├─ about.js # načítání about JSON
│ │ ├─ trener.js # načítání trenérů JSON
│ │ └─ contact.js # odesílání formuláře (AJAX)
│ └─ /img
│ ├─ /about
│ ├─ /shiba
│ └─ /puppies
│
├─ /data
│ ├─ about.json
│ ├─ trener.json
│ ├─ conditions.json
│ └─ contact.json
│
├─ /api
│ └─ getPuppies.php # endpoint vracející puppies.json
│
└─ /docs # dokumentace