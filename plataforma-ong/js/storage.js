// js/storage.js

const STORAGE_KEY = 'cadastrosInstitutoLuz';

function saveCadastro(data) {
  const lista = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  lista.push({
    ...data,
    dataCadastro: new Date().toISOString()
  });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(lista));
}

function getCadastros() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}
