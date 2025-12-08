// js/templates.js

const Templates = {
  home: `
    <section class="hero">
      <div class="container">
        <h1 id="titulo-principal">Instituto Luz do Caminho</h1>
        <p>
          O Instituto Luz do Caminho é uma organização da sociedade civil que atua na
          promoção da educação, cultura e inclusão social em comunidades em situação de vulnerabilidade.
        </p>

        <figure class="hero-image">
          <img src="img/banner-home.jpg" alt="Voluntários sorrindo em uma ação social do Instituto Luz do Caminho" width="800">
          <figcaption>Ações de impacto realizadas com o apoio de voluntários e doadores.</figcaption>
        </figure>
      </div>
    </section>

    <section class="section" aria-labelledby="missao-visao-valores">
      <div class="container">
        <h2 id="missao-visao-valores">Missão, Visão e Valores</h2>

        <div class="grid-3">
          <article class="card">
            <h3>Missão</h3>
            <p>
              Promover oportunidades de desenvolvimento humano, por meio de projetos educacionais,
              culturais e sociais, fortalecendo indivíduos e comunidades.
            </p>
          </article>

          <article class="card">
            <h3>Visão</h3>
            <p>
              Ser referência em transformação social, impactando positivamente milhares de pessoas em todo o Brasil.
            </p>
          </article>

          <article class="card">
            <h3>Valores</h3>
            <ul>
              <li>Transparência</li>
              <li>Respeito à dignidade humana</li>
              <li>Responsabilidade social</li>
              <li>Ética e integridade</li>
              <li>Colaboração e empatia</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section class="section" aria-labelledby="historia">
      <div class="container">
        <h2 id="historia">Nossa história</h2>
        <p>
          Fundado em 2015, o Instituto Luz do Caminho nasceu da vontade de um grupo de amigos
          de levar educação, arte e esperança para crianças e jovens de periferias urbanas.
        </p>
        <p>
          Hoje, desenvolvemos projetos contínuos de reforço escolar, oficinas culturais,
          formação profissional básica e apoio às famílias.
        </p>
        <figure>
          <img src="img/projeto1.jpg" alt="Crianças participando de oficina de reforço escolar" width="600">
          <figcaption>Oficinas de reforço escolar realizadas semanalmente.</figcaption>
        </figure>
      </div>
    </section>

    <section class="section" aria-labelledby="contato">
      <div class="container">
        <h2 id="contato">Informações de contato</h2>
        <p><strong>Endereço:</strong> Rua Caminho de Luz, 777 - Grajaú - São Paulo/SP</p>
        <p><strong>Telefone/WhatsApp:</strong> (11) 97445-2405</p>
        <p><strong>E-mail:</strong> contato@luzdocaminho.org.br</p>

        <h3>Redes sociais</h3>
        <ul class="social-links">
          <li><a href="#" rel="noopener noreferrer">Instagram</a></li>
          <li><a href="#" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="#" rel="noopener noreferrer">YouTube</a></li>
        </ul>
      </div>
    </section>
  `,

  projetos: `
    <section class="section">
      <div class="container">
        <header class="section-header">
          <h1>Projetos Sociais e Voluntariado</h1>
          <p>
            Nossos projetos são construídos com base na participação de voluntários e doadores
            que acreditam na transformação social.
          </p>
        </header>

        <section aria-labelledby="projetos-ativos">
          <h2 id="projetos-ativos">Projetos ativos</h2>

          <article class="card project-card">
            <h3>Projeto Caminhos da Educação</h3>
            <figure>
              <img src="img/projeto2.jpg" alt="Professor auxiliando aluno em sala de aula comunitária" width="600">
              <figcaption>Reforço escolar e apoio pedagógico para crianças do ensino fundamental.</figcaption>
            </figure>
            <p>
              Aulas de reforço escolar, acompanhamento pedagógico e oficinas de leitura para crianças de 7 a 14 anos.
            </p>
            <p><strong>Impacto:</strong> +150 crianças atendidas por ano.</p>
            <p><strong>Precisa de voluntários em:</strong> Alfabetização, matemática básica e apoio em tarefas escolares.</p>
          </article>

          <article class="card project-card">
            <h3>Projeto Arte que Transforma</h3>
            <figure>
              <img src="img/voluntarios.jpg" alt="Jovens participando de atividade cultural com música e dança" width="600">
              <figcaption>Oficinas culturais que desenvolvem habilidades artísticas e sociais.</figcaption>
            </figure>
            <p>
              Oficinas de música, dança e teatro para jovens e adolescentes, estimulando expressão, criatividade e autoestima.
            </p>
            <p><strong>Impacto:</strong> +80 jovens atendidos por semestre.</p>
            <p><strong>Precisa de voluntários em:</strong> Artes cênicas, dança, produção cultural e apoio de bastidores.</p>
          </article>
        </section>

        <section class="callout" aria-labelledby="como-ser-voluntario">
          <h2 id="como-ser-voluntario">Como ser voluntário</h2>
          <p>
            Para se candidatar ao voluntariado, acesse a página de
            <a href="#cadastro" data-route="#cadastro">cadastro</a>, preencha seus dados e indique as áreas de interesse.
          </p>
          <p>
            Nossa equipe entra em contato para alinhar horários, perfil de atuação e capacitação inicial.
          </p>
        </section>

        <section aria-labelledby="como-doar">
          <h2 id="como-doar">Como doar</h2>
          <p>
            Sua doação ajuda a manter nossos projetos ativos e a ampliar nosso impacto nas comunidades atendidas.
          </p>
          <ul>
            <li>Doação pontual (transferência, PIX, boleto);</li>
            <li>Doação recorrente mensal;</li>
            <li>Doação de materiais (alimentos, livros, instrumentos, computadores, etc.).</li>
          </ul>
          <p><strong>Dados para doação (exemplo):</strong></p>
          <p><strong>Chave PIX:</strong> doacoes@luzdocaminho.org.br</p>
          <p><strong>Banco:</strong> 000 - Banco Exemplo | <strong>Agência:</strong> 0000 | <strong>Conta:</strong> 00000-0</p>
        </section>
      </div>
    </section>
  `,

  cadastro: `
    <section class="section">
      <div class="container">
        <header class="section-header">
          <h1>Cadastro de Voluntário / Doador</h1>
          <p>
            Preencha o formulário abaixo para se cadastrar como voluntário, doador ou apoiador da nossa causa.
          </p>
          <figure>
            <img src="img/cadastro-banner.jpg" alt="Pessoa preenchendo formulário em um computador" width="700">
            <figcaption>Cadastro simples e seguro para participação em nossos projetos.</figcaption>
          </figure>
        </header>

        <section aria-labelledby="formulario-cadastro">
          <h2 id="formulario-cadastro">Formulário de cadastro</h2>

          <form id="form-cadastro" novalidate>
            <fieldset>
              <legend>Dados pessoais</legend>

              <div class="form-group">
                <label for="nome-completo">Nome completo*</label>
                <input
                  type="text"
                  id="nome-completo"
                  name="nome-completo"
                  required
                  minlength="5"
                  autocomplete="name"
                >
              </div>

              <div class="form-group">
                <label for="email">E-mail*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  autocomplete="email"
                >
              </div>

              <div class="form-group">
                <label for="cpf">CPF*</label>
                <input
                  type="text"
                  id="cpf"
                  name="cpf"
                  required
                  inputmode="numeric"
                  placeholder="000.000.000-00"
                >
              </div>

              <div class="form-group">
                <label for="telefone">Telefone / WhatsApp*</label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  required
                  inputmode="tel"
                  placeholder="(11) 99999-9999"
                >
              </div>

              <div class="form-group">
                <label for="data-nascimento">Data de nascimento*</label>
                <input
                  type="date"
                  id="data-nascimento"
                  name="data-nascimento"
                  required
                >
              </div>
            </fieldset>

            <fieldset>
              <legend>Endereço</legend>

              <div class="form-group">
                <label for="endereco">Endereço (Rua, número, complemento)*</label>
                <input
                  type="text"
                  id="endereco"
                  name="endereco"
                  required
                  autocomplete="street-address"
                >
              </div>

              <div class="form-group">
                <label for="cep">CEP*</label>
                <input
                  type="text"
                  id="cep"
                  name="cep"
                  required
                  inputmode="numeric"
                  placeholder="00000-000"
                >
              </div>

              <div class="form-group">
                <label for="cidade">Cidade*</label>
                <input
                  type="text"
                  id="cidade"
                  name="cidade"
                  required
                  autocomplete="address-level2"
                >
              </div>

              <div class="form-group">
                <label for="estado">Estado*</label>
                <select id="estado" name="estado" required>
                  <option value="">Selecione</option>
                  <option value="SP">SP - São Paulo</option>
                  <option value="RJ">RJ - Rio de Janeiro</option>
                  <option value="MG">MG - Minas Gerais</option>
                  <option value="ES">ES - Espírito Santo</option>
                </select>
              </div>
            </fieldset>

            <fieldset>
              <legend>Perfil de participação</legend>

              <div class="form-group">
                <p>Como você deseja participar?*</p>
                <label>
                  <input type="radio" name="tipo-participacao" value="voluntario" required>
                  Voluntário(a)
                </label>
                <label>
                  <input type="radio" name="tipo-participacao" value="doador">
                  Doador(a)
                </label>
                <label>
                  <input type="radio" name="tipo-participacao" value="ambos">
                  Ambos
                </label>
              </div>

              <div class="form-group">
                <p>Áreas de interesse (se for voluntário):</p>
                <label>
                  <input type="checkbox" name="areas-interesse" value="educacao">
                  Educação e reforço escolar
                </label>
                <label>
                  <input type="checkbox" name="areas-interesse" value="cultura">
                  Cultura e arte
                </label>
                <label>
                  <input type="checkbox" name="areas-interesse" value="administrativo">
                  Apoio administrativo
                </label>
                <label>
                  <input type="checkbox" name="areas-interesse" value="comunicacao">
                  Comunicação e mídias sociais
                </label>
              </div>

              <div class="form-group">
                <label for="mensagem">Conte um pouco sobre você</label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows="4"
                  maxlength="500"
                  placeholder="Fale brevemente sobre sua experiência, habilidades ou motivação para participar."
                ></textarea>
              </div>
            </fieldset>

            <div class="form-actions">
              <button type="submit" class="btn btn-primary">Enviar cadastro</button>
              <button type="reset" class="btn btn-secondary">Limpar</button>
            </div>

            <div id="form-messages" class="form-messages" aria-live="polite"></div>
          </form>
        </section>
      </div>
    </section>
  `
};
