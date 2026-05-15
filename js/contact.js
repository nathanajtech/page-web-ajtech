// ============================================
// AJ-TECH — Formulaire de Contact
// Fichier : js/contact.js
// ============================================
'use strict';
document.addEventListener('DOMContentLoaded', () => {
const form = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const successEl = document.getElementById('form-success');
if (!form) return; // Pas sur cette page
form.addEventListener('submit', async (e) => {
	e.preventDefault();

	// Validation basique
	const name = form.querySelector('#name').value.trim();
	const email = form.querySelector('#email').value.trim();
	const message = form.querySelector('#message').value.trim();
	if (!name || !email || !message) {
		alert('Merci de remplir tous les champs obligatoires.');
		return;
	}
	// Validation email
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(email)) {
		alert('Veuillez entrer une adresse email valide.');
		return;
	}

	// Envoi vers Formspree
	submitBtn.disabled = true;
	submitBtn.textContent = 'Envoi en cours...';
	try {
		const response = await fetch(form.action, {
			method: 'POST',
			body: new FormData(form),
			headers: { 'Accept': 'application/json' },
		});
		if (response.ok) {
			// Succès !
			form.style.display = 'none';
			successEl.style.display = 'flex';
		} else {
			throw new Error('Erreur serveur');
		}
	} catch (err) {
		alert('Erreur lors de l\'envoi. Essayez via WhatsApp.');
		submitBtn.disabled = false;
		submitBtn.textContent = 'Envoyer le message';
	}
});
});