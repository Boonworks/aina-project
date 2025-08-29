// ==========================
//            ä
// ==========================

// --- Mettre à jour l'année dans le footer ---
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// --- Gestion du thème jour/nuit ---
const toggle = document.getElementById('theme-toggle');
const root = document.documentElement;

// Fonction d'application du thème
function setTheme(mode) {
  if (mode === 'dark') {
    root.setAttribute('data-theme', 'dark');
    if (toggle) toggle.textContent = "🌙";
    localStorage.setItem('theme', 'dark');
  } else {
    root.setAttribute('data-theme', 'light');
    if (toggle) toggle.textContent = "☀️";
    localStorage.setItem('theme', 'light');
  }
}

// Événement clic sur le bouton
if (toggle) {
  toggle.addEventListener('click', () => {
    const isDark = root.getAttribute('data-theme') === 'dark';
    setTheme(isDark ? 'light' : 'dark');
  });
}

// Initialiser le thème depuis localStorage (ou défaut : clair)
const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);
s