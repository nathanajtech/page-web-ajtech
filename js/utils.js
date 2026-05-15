// ============================================
// AJ-TECH — Utilitaires JS
// Fichier : js/utils.js
// ============================================
'use strict';
// Sélecteur raccourci
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);
// Ajouter/retirer une classe
const addClass = (el, cls) => el && el.classList.add(cls);
const removeClass = (el, cls) => el && el.classList.remove(cls);
const toggleClass = (el, cls) => el && el.classList.toggle(cls);
const hasClass = (el, cls) => el && el.classList.contains(cls);
// Scroll fluide vers un élément
const scrollTo = (target) => {
const el = $(target);
if (el) el.scrollIntoView({ behavior: 'smooth' });
};
// Debounce — évite les appels trop fréquents
const debounce = (fn, delay = 100) => {
let timer;
return (...args) => {
clearTimeout(timer);
timer = setTimeout(() => fn(...args), delay);
};
};
// Exposer globalement
window.AJUtils = { $, $$, addClass, removeClass, toggleClass, hasClass, scrollTo,
debounce };