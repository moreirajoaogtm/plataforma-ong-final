// js/mascaras.js

function aplicarMascaraCPF(valor) {
  return valor
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
    .slice(0, 14);
}

function aplicarMascaraTelefone(valor) {
  return valor
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .slice(0, 15);
}

function aplicarMascaraCEP(valor) {
  return valor
    .replace(/\D/g, '')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .slice(0, 9);
}

document.addEventListener('DOMContentLoaded', function () {
  const cpfInput = document.getElementById('cpf');
  const telefoneInput = document.getElementById('telefone');
  const cepInput = document.getElementById('cep');

  if (cpfInput) {
    cpfInput.addEventListener('input', function () {
      this.value = aplicarMascaraCPF(this.value);
    });
  }

  if (telefoneInput) {
    telefoneInput.addEventListener('input', function () {
      this.value = aplicarMascaraTelefone(this.value);
    });
  }

  if (cepInput) {
    cepInput.addEventListener('input', function () {
      this.value = aplicarMascaraCEP(this.value);
    });
  }
});
