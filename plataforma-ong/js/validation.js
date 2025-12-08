// js/validation.js

function showFormMessage(message, type = 'error') {
  const box = document.getElementById('form-messages');
  if (!box) return;

  box.textContent = message;
  box.className = `form-messages form-messages--${type}`;
}

function clearFormMessages() {
  const box = document.getElementById('form-messages');
  if (!box) return;
  box.textContent = '';
  box.className = 'form-messages';
}

function setFieldError(input, hasError) {
  if (!input) return;
  if (hasError) {
    input.classList.add('input-error');
  } else {
    input.classList.remove('input-error');
  }
}

// Helpers simples
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidCPF(cpf) {
  // remove tudo que não é número
  const clean = cpf.replace(/\D/g, '');
  return clean.length === 11;
}

function isValidPhone(phone) {
  const clean = phone.replace(/\D/g, '');
  return clean.length >= 10; // 10 ou 11 dígitos
}

function getAgeFromDate(dateString) {
  const today = new Date();
  const birth = new Date(dateString);
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
}

function initCadastroFormValidation() {
  const form = document.getElementById('form-cadastro');
  if (!form) return;

  clearFormMessages();

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    clearFormMessages();

    const nome = form['nome-completo'];
    const email = form['email'];
    const cpf = form['cpf'];
    const telefone = form['telefone'];
    const dataNascimento = form['data-nascimento'];
    const endereco = form['endereco'];
    const cep = form['cep'];
    const cidade = form['cidade'];
    const estado = form['estado'];
    const tipoParticipacao = form['tipo-participacao'];

    let hasError = false;

    // Zera erros visuais
    [nome, email, cpf, telefone, dataNascimento, endereco, cep, cidade, estado].forEach(input => {
      setFieldError(input, false);
    });

    if (!nome.value.trim() || nome.value.trim().length < 5) {
      setFieldError(nome, true);
      showFormMessage('O nome precisa ter pelo menos 5 caracteres.', 'error');
      hasError = true;
    } else if (!isValidEmail(email.value.trim())) {
      setFieldError(email, true);
      showFormMessage('Digite um e-mail válido.', 'error');
      hasError = true;
    } else if (!isValidCPF(cpf.value.trim())) {
      setFieldError(cpf, true);
      showFormMessage('Digite um CPF válido com 11 dígitos.', 'error');
      hasError = true;
    } else if (!isValidPhone(telefone.value.trim())) {
      setFieldError(telefone, true);
      showFormMessage('Digite um telefone válido (com DDD).', 'error');
      hasError = true;
    } else if (!dataNascimento.value) {
      setFieldError(dataNascimento, true);
      showFormMessage('Informe sua data de nascimento.', 'error');
      hasError = true;
    } else if (getAgeFromDate(dataNascimento.value) < 16) {
      setFieldError(dataNascimento, true);
      showFormMessage('Você precisa ter pelo menos 16 anos para se cadastrar.', 'error');
      hasError = true;
    } else if (!endereco.value.trim()) {
      setFieldError(endereco, true);
      showFormMessage('Informe seu endereço completo.', 'error');
      hasError = true;
    } else if (!cep.value.trim()) {
      setFieldError(cep, true);
      showFormMessage('Informe um CEP válido.', 'error');
      hasError = true;
    } else if (!cidade.value.trim()) {
      setFieldError(cidade, true);
      showFormMessage('Informe a cidade.', 'error');
      hasError = true;
    } else if (!estado.value) {
      setFieldError(estado, true);
      showFormMessage('Selecione o estado.', 'error');
      hasError = true;
    } else if (!tipoParticipacao.value) {
      showFormMessage('Selecione como deseja participar (voluntário, doador ou ambos).', 'error');
      hasError = true;
    }

    if (hasError) {
      return;
    }

    // Se chegou até aqui, está válido
    const areas = Array.from(form.querySelectorAll('input[name="areas-interesse"]:checked'))
      .map(input => input.value);

    const payload = {
      nome: nome.value.trim(),
      email: email.value.trim(),
      cpf: cpf.value.trim(),
      telefone: telefone.value.trim(),
      dataNascimento: dataNascimento.value,
      endereco: endereco.value.trim(),
      cep: cep.value.trim(),
      cidade: cidade.value.trim(),
      estado: estado.value,
      tipoParticipacao: tipoParticipacao.value,
      areasInteresse: areas,
      mensagem: form['mensagem'].value.trim()
    };

    saveCadastro(payload);
    form.reset();
    clearFormMessages();
    showFormMessage('Cadastro enviado com sucesso! Obrigado por participar.', 'success');
  });
}
