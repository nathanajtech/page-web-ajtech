// ============================================
// AJ-TECH — Animations au scroll
// Fichier : js/animations.js
// ============================================
'use strict';
document.addEventListener('DOMContentLoaded', () => {
// Apparition au scroll (Intersection Observer)
const animatedEls = document.querySelectorAll('.animate-on-scroll, .animate-left, .animate-right');
if (animatedEls.length > 0) {
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('visible');
observer.unobserve(entry.target); // Observe une seule fois
}
});
}, {
threshold: 0.15, // Déclenche quand 15% de l'élément est visible
rootMargin: '0px 0px -50px 0px',
});
animatedEls.forEach(el => observer.observe(el));
}
// Bouton retour en haut
// Crée le bouton dynamiquement
const btn = document.createElement('button');
btn.className = 'back-to-top';
btn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
btn.setAttribute('aria-label', 'Retour en haut');
document.body.appendChild(btn);
// Affiche/cache selon le scroll
window.addEventListener('scroll', () => {
if (window.scrollY > 300) {
btn.classList.add('visible');
} else {
btn.classList.remove('visible');
}
});
// Clique → remonte en haut
btn.addEventListener('click', () => {
window.scrollTo({ top: 0, behavior: 'smooth' });
});
// Ajoute animate-on-scroll aux cards
// Appliqué automatiquement aux éléments de grille
document.querySelectorAll('.card, .value-card, .team-card, .project-card').forEach(el => {
el.classList.add('animate-on-scroll');
});
});