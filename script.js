// script.js
let lastScrollTop = 0; // Variable pour suivre la position de défilement précédente
const header = document.getElementById('header'); // Sélectionne l'en-tête

window.addEventListener('scroll', function() {
    let currentScroll = window.scrollY || document.documentElement.scrollTop; // Obtient la position actuelle de défilement

    if (currentScroll > lastScrollTop) {
        // Défilement vers le bas
        header.style.transform = 'translateY(-100%)'; // Cache l'en-tête en le déplaçant vers le haut
    } else {
        // Défilement vers le haut
        header.style.transform = 'translateY(0)'; // Affiche l'en-tête en le ramenant à sa position d'origine
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Met à jour la position précédente du défilement
});
