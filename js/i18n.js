// ============================================
// AJ-TECH — Système de Traduction (i18n)
// Fichier : js/i18n.js
// ============================================
'use strict';
// Langue par défaut
const DEFAULT_LANG = 'fr';
let currentLang = localStorage.getItem('ajtech-lang') || DEFAULT_LANG;
let translations = {};
// Charge le fichier JSON de la langue
async function loadTranslations(lang) {
try {
const res = await fetch(`lang/${lang}.json`);
if (!res.ok) throw new Error(`Fichier ${lang}.json introuvable`);
translations = await res.json();
applyTranslations();
updateLangDisplay(lang);
localStorage.setItem('ajtech-lang', lang);
currentLang = lang;
document.documentElement.lang = lang;
} catch (err) {
console.warn('i18n erreur:', err);
// Repli sur le français si erreur
if (lang !== DEFAULT_LANG) loadTranslations(DEFAULT_LANG);
}
}
// Applique les traductions à tous les éléments data-i18n
function applyTranslations() {
document.querySelectorAll('[data-i18n]').forEach(el => {
const key = el.getAttribute('data-i18n');
const text = getNestedValue(translations, key);
if (text) el.textContent = text;
});
}
// Récupère une valeur imbriquée (ex: 'hero.title' → translations.hero.title)
function getNestedValue(obj, key) {
return key.split('.').reduce((acc, k) => acc && acc[k], obj);
}
// Met à jour l'affichage du bouton langue
function updateLangDisplay(lang) {
const el = document.getElementById('current-lang');
if (el) el.textContent = lang.toUpperCase();
}
// Fonction globale appelée par les boutons HTML
function setLang(lang) {
loadTranslations(lang);
// Ferme le dropdown
const drop = document.getElementById('lang-dropdown');
if (drop) drop.classList.remove('open');
}
// Expose setLang globalement (utilisé dans onclick HTML)
window.setLang = setLang;
// Initialisation au chargement
document.addEventListener('DOMContentLoaded', () => {
loadTranslations(currentLang);
});