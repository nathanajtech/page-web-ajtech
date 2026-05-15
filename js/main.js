// ============================================
// AJ-TECH — Main JS
// Fichier : js/main.js
// ============================================
'use strict';
document.addEventListener('DOMContentLoaded', () => {
	// Marque le lien actif selon la page
	const currentPage = window.location.pathname.split('/').pop() || 'index.html';
	document.querySelectorAll('.nav-link').forEach(link => {
		const href = link.getAttribute('href');
		if (href === currentPage) {
			link.classList.add('active');
		} else {
			link.classList.remove('active');
		}
	});

	// Année copyright dynamique
	const yearEls = document.querySelectorAll('.copyright-year');
	yearEls.forEach(el => {
		el.textContent = new Date().getFullYear();
	});

	// Log de bienvenue (mode développement)
	console.log('%c AJ-TECH %c Site chargé avec succès !',
		'background:#00209F;color:#FFD700;font-weight:bold;font-size:16px;padding:4px 8px;',
		'color:#00209F;font-size:14px;'
	);
});