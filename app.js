// ==========================
//            ä
// ==========================

// --- Mettre à jour l'année dans le footer ---
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}