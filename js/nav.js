// ============================================
// AJ-TECH — Navigation
// Fichier : js/nav.js
// ============================================
'use strict';
document.addEventListener('DOMContentLoaded', () => {
const header = document.getElementById('main-header');
const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');
const langBtn = document.getElementById('lang-btn');
const langDrop = document.getElementById('lang-dropdown');
// Header sticky au scroll
const handleScroll = () => {
	if (window.scrollY > 50) {
		header.classList.add('scrolled');
	} else {
		header.classList.remove('scrolled');
	}
};
window.addEventListener('scroll', handleScroll);
handleScroll(); // Vérifie au chargement

// Menu burger mobile
if (burger && navLinks) {
	burger.addEventListener('click', () => {
		burger.classList.toggle('open');
		navLinks.classList.toggle('open');
	});

	// Ferme le menu au clic sur un lien
	navLinks.querySelectorAll('.nav-link').forEach(link => {
		link.addEventListener('click', () => {
			burger.classList.remove('open');
			navLinks.classList.remove('open');
		});
	});
}

// Dropdown langue
if (langBtn && langDrop) {
	langBtn.addEventListener('click', (e) => {
		e.stopPropagation();
		langDrop.classList.toggle('open');
	});

	// Ferme au clic en dehors
	document.addEventListener('click', () => {
		langDrop.classList.remove('open');
	});
}

// Ferme le menu si clic en dehors
document.addEventListener('click', (e) => {
	if (navLinks && burger && !navLinks.contains(e.target) && !burger.contains(e.target)) {
		burger.classList.remove('open');
		navLinks.classList.remove('open');
	}
});
});