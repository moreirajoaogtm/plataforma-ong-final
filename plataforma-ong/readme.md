📌 Plataforma Web – Instituto Luz do Caminho (SPA)

Este projeto foi desenvolvido como parte da EP3 – Desenvolvimento Web, com o objetivo de transformar a interface estática criada na EP2 em uma aplicação web dinâmica, utilizando JavaScript avançado, SPA (Single Page Application), manipulação do DOM, validação de dados e armazenamento local.

🚀 Funcionalidades Implementadas
✔️ SPA (Single Page Application)

Navegação dinâmica entre páginas utilizando hashchange.

As páginas Início, Projetos e Cadastro são carregadas via JavaScript.

Sistema de templates gerenciado por templates.js.

✔️ Manipulação Avançada do DOM

Renderização dinâmica dos templates dentro da área <main id="app">.

Destaque automático para o item ativo do menu.

Exibição dinâmica de mensagens de erro e sucesso no formulário.

✔️ Sistema de Templates JavaScript

Conteúdo dividido em:

Templates.home

Templates.projetos

Templates.cadastro

✔️ Validação de Formulário com Consistência dos Dados

Implementado em validation.js:

Verificação de:

Nome

E-mail válido

CPF (estrutura e quantidade de dígitos)

Telefone (DDD obrigatório)

Idade mínima (16 anos)

Endereço completo

Estado, cidade e CEP

Tipo de participação

Exibição dinâmica de erros com estilo visual.

Feedback ao usuário para preenchimento incorreto.

✔️ Armazenamento com LocalStorage

Os cadastros são salvos localmente pelo módulo:

saveCadastro()

getCadastros()

✔️ Código Modular e Organizado

/js/app.js → inicialização e comportamentos globais

/js/router.js → sistema de rotas da SPA

/js/templates.js → HTML das páginas

/js/validation.js → validação

/js/storage.js → localStorage