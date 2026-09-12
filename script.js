
// ---- PROJETOS ----
const projects = [
  {
    title: "Sistema de Gestão de Biblioteca",
    description: "Aplicação desktop desenvolvida em Java para gerenciamento de uma biblioteca.",
    fullDescription: "Sistema desenvolvido em Java para gerenciamento de uma biblioteca, com funcionalidades de cadastro e consulta de livros, autores, categorias, editoras e usuários. A aplicação utiliza Java Swing para a construção da interface gráfica e JDBC para a comunicação e integração com o banco de dados MySQL.",
    image: "images/projetos/sistema-de-gestao.png", 
    tags: ["Java, Java Swing, MySQL, JDBC"],
    demoLink: "", // opcional: link de demonstração ao vivo
    repoLink: "https://github.com/layssasuelen03-creator/Gestao-de-Biblioteca---LBD.git"
  },

  {
    title: "wynk_scp",
    description: "Plataforma web multi-tenant para gestão de operações de shopping centers.",
    fullDescription: "Plataforma API-First desenvolvida para gerenciamento de shopping centers, com suporte a múltiplos tenants e funcionalidades de gestão de lojas, promoções, conteúdos, usuários e analytics. O projeto utiliza tecnologias como Node.js, TypeScript, PostgreSQL, Drizzle ORM e Docker.",
    image: "images/projetos/shopping-centers.jpeg", 
    tags: ["Node.js, TypeScript, API REST, Docker"],
    demoLink: "", // opcional: link de demonstração ao vivo
    repoLink: "https://github.com/B2CExpress/wynk_scp.git"
  },
  
  {
    title: "Fabrika-Malharia",
    description: "Sistema web para gestão e acompanhamento dos processos de produção de uma fábrica de malharia.",
    fullDescription: "Aplicação web desenvolvida para auxiliar no gerenciamento da produção de uma fábrica de malharia, permitindo o acompanhamento de pedidos, tecidos e etapas de produção. O sistema possui dashboard com métricas e indicadores, além de telas para cadastro e consulta de tecidos, gerenciamento de pedidos, detalhes de produção e configurações.",
    image: "images/projetos/fabrika-malharia.png", 
    tags: ["HTML, CSS, JavaScript"],
    demoLink: "", // opcional: link de demonstração ao vivo
    repoLink: "https://github.com/layssasuelen03-creator/Fabrika-Malharia.git"
  },

  {
    title: "CursoFeedback",
    description: "Sistema web simples para coleta de feedbacks de alunos em um curso online.",
    fullDescription: "Aplicação desenvolvida com Node.js e Express.js para coletar e gerenciar feedbacks de alunos de um curso online. Os dados são armazenados em memória durante a execução do servidor.",
    image: "images/projetos/curso.png", 
    tags: ["HTML, CSS, JavaScript, Node.js, Express.js"],
    demoLink: "", // opcional: link de demonstração ao vivo
    repoLink: "https://github.com/layssasuelen03-creator/Ativisades-de-Programa-o-Web/tree/8144cf06282bd1edc47bc79aeccf4de43909bb61/Atividade%205%20-%20Node.js%20e%20Express"
  },

  {
    title: "Sistema de Gestão de Estoque",
    description: "Sistema em Java para gerenciamento de produtos, fornecedores, categorias e movimentações de estoque.",
    fullDescription: "Projeto desenvolvido para praticar Programação Orientada a Objetos, utilizando Hibernate para persistência, MySQL como banco de dados e o padrão DAO para organização do acesso aos dados. O sistema possui operações de cadastro e consulta executadas pelo terminal.",
    image: "images/projetos/sistema.png", 
    tags: ["Java, Hibernate, MySQL"],
    demoLink: "", // opcional: link de demonstração ao vivo
    repoLink: "https://github.com/layssasuelen03-creator/programacao-orientada-a-objetos-2s-2025/tree/40e7c0647f509297b2d0e910969e5ce6ccd91f21/Sistema%20de%20Gest%C3%A3o%20de%20Estoque"
  },

  {
    title: "Mundo de Ordem Paranormal",
    description: "Quiz interativo inspirado no universo fictício de Ordem Paranormal, que revela qual personagem combina com o perfil do participante.",
    fullDescription: "Projeto desenvolvido em HTML, CSS e JavaScript, no qual cada resposta possui uma pontuação predefinida. Ao finalizar o quiz, as pontuações são somadas e o resultado determina qual personagem de Ilha das Sombras do Mundo de Ordem Paranormal corresponde às escolhas do participante.",
    image: "images/projetos/quiz.png", 
    tags: ["HTML, CSS, JavaScript"],
    demoLink: "", // opcional: link de demonstração ao vivo
    repoLink: "https://github.com/layssasuelen03-creator/Ativisades-de-Programa-o-Web/tree/8144cf06282bd1edc47bc79aeccf4de43909bb61/Mundo%20de%20Ordem%20Paranormal"
  },

  {
    title: "Sistema de Biblioteca",
    description: "Sistema web para gerenciamento de livros e empréstimos, com perfis de bibliotecário e leitor.",
    fullDescription: "Projeto desenvolvido com Node.js, Express, MySQL, HTML, CSS e JavaScript. O sistema permite gerenciar o catálogo de livros, controlar empréstimos e devoluções, além de aplicar diferentes permissões e regras de negócio para bibliotecários e leitores",
    image: "images/projetos/biblioteca.png", 
    tags: ["HTML, CSS, JavaScript, Node.js, Express, MySQL"],
    demoLink: "", // opcional: link de demonstração ao vivo
    repoLink: "https://github.com/tioace/PROJETO-PW-BIBLIOTECA.git"
  },

];

// CERTIFICADOS 
const certificates = [

  {
    title: "Curso de Java",
    image: "images/certificados/Certificado_Minicurso de Java.png"

  },
 
  {
    title: "Trilha Git e GitHub",
    image: "images/certificados/certificate -  trilha Git e GitHub.png"

  },

  {
    title: "Trilha Métodos Ágeis",
    image: "images/certificados/certificate - trilha Métodos Ágeis.png"

  },

  {
    title: "Trilha Soluções Tecnoçógicas com CBL (Challenge Based Learning)",
    image: "images/certificados/certificate - trilha Soluções Tecnoçógicas com CBL (Challenge Based Learning).png"

  },

  {
    title: "Curso de Conceitos e Fundamentos de Algoritmos e Programação Orientada a Objetos com Swift",
    image: "images/certificados/Conceitos_e_Fundamentos_Algoritmos_e_Programação_Orientada_a_Objetos_com_Swift-Certificado_2162.png"

  },

  {
    title: "Curso de Inglês",
    image: "images/certificados/Certificado de Inglês.png" 

  },
];

// TEXTOS DOS CARDS "Objetivo / Experiência / Competências / Disponibilidade 
const modalContent = {
  objetivo: {
    title: "Objetivo",
    html: `<p>Atuar como desenvolvedora Back-End, aprofundando conhecimentos em Java e Spring Boot,
    enquanto sigo construindo soluções completas com Node.js, TypeScript e front-end web —
    sempre alinhando as entregas às necessidades reais do negócio.</p>`
  },
  experiencia: {
    title: "Experiência",
    html: `
      <p><strong>Residência Tecnológica — Wynk</strong></p>
      <ul>
        <li>Back-End de plataforma para gestão de conteúdos, promoções e analytics de shopping centers</li>
        <li>Modelagem da estrutura do banco de dados</li>
        <li>Node.js, TypeScript, Prisma ORM, APIs REST, Docker</li>
      </ul>
      <p><strong>Residência Tecnológica — Fabrika Malharia</strong></p>
      <ul>
        <li>Front-End de sistema interno para cadastro de matérias-primas</li>
        <li>HTML, CSS e JavaScript</li>
      </ul>
    `
  },
  competencias: {
    title: "Competências",
    html: `<ul>
      <li>Java &amp; Programação Orientada a Objetos</li>
      <li>Spring Boot (básico)</li>
      <li>Node.js, TypeScript, JavaScript</li>
      <li>APIs REST e bancos de dados relacionais</li>
      <li>Git &amp; GitHub, Docker</li>
      <li>Metodologias ágeis (Scrum)</li>
    </ul>`
  },
  disponibilidade: {
  
    title: "Disponibilidade",
    html: `<p>Remoto ou presencial. Aberta a estágio e oportunidades júnior em desenvolvimento
    Back-End e Full Stack.</p>`
  },
  anos: {
   
    title: "Anos de experiência",
    html: `<p>Em formação contínua em desenvolvimento de software, com experiência prática
    obtida em projetos de Residência Tecnológica.</p>`
  }
};

// STACK TECNOLÓGICA (ícones via skillicons.dev) 
const stack = [
  { name: "HTML", icon: "html" },
  { name: "CSS", icon: "css" },
  { name: "JavaScript", icon: "js" },
  { name: "Node.js", icon: "nodejs" },
  { name: "TypeScript", icon: "ts" },
  { name: "Java", icon: "java" },
  { name: "Spring Boot", icon: "spring" },
  { name: "Git", icon: "git" },
];

//Texto do efeito de digitação no Início ----
const typingPhrases = [
  "Estudante de Ciência da Computação",
  "Foco em Back-End com Java & Spring Boot",
  "Quero me especializar em Cybersecurity"
];

/* LÓGICA DO SITE */

// Tela de abertura Só avança para o site ao clicar no link "layssa.dev" 
const intro = document.getElementById("intro");
const introLink = document.querySelector(".intro-link");
introLink.addEventListener("click", (e) => {
  e.preventDefault();
  intro.classList.add("hidden");
});

// Menu mobile
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const menuToggle = document.getElementById("menuToggle");
const navLinksWrap = document.querySelector(".nav-links");
menuToggle.addEventListener("click", () => navLinksWrap.classList.toggle("open"));
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => navLinksWrap.classList.remove("open"));
});

// Destaque do link ativo por seção 
const navLinks = document.querySelectorAll(".nav-link");
const navSections = document.querySelectorAll("main > section");
const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
        });
      }
    });
  },
  { rootMargin: "-40% 0px -50% 0px" }
);
navSections.forEach((s) => navObserver.observe(s));

// Efeito de digitação
const typingEl = document.getElementById("typingText");
let phraseIndex = 0, charIndex = 0, deleting = false;

function typeLoop() {
  const phrase = typingPhrases[phraseIndex];
  if (!deleting) {
    typingEl.textContent = phrase.slice(0, ++charIndex);
    if (charIndex === phrase.length) { deleting = true; setTimeout(typeLoop, 1400); return; }
  } else {
    typingEl.textContent = phrase.slice(0, --charIndex);
    if (charIndex === 0) { deleting = false; phraseIndex = (phraseIndex + 1) % typingPhrases.length; }
  }
  setTimeout(typeLoop, deleting ? 35 : 55);
}
if (!prefersReducedMotion) typeLoop(); else typingEl.textContent = typingPhrases[0];

// Abas do Portfólio 
const tabButtons = document.querySelectorAll(".tab-btn");
const tabPanels = document.querySelectorAll(".tab-panel");
tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabButtons.forEach((b) => b.classList.remove("active"));
    tabPanels.forEach((p) => p.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById(`${btn.dataset.tab}-tab`).classList.add("active");
  });
});

// Botões dos cards de estatística que abrem uma aba específica
document.querySelectorAll("[data-scroll]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetId = btn.dataset.scroll;
    const tabName = targetId.replace("-tab", "").replace("#", "");
    const tabBtn = document.querySelector(`.tab-btn[data-tab="${tabName}"]`);
    if (tabBtn) tabBtn.click();
    document.getElementById("portfolio").scrollIntoView({ behavior: "smooth" });
  });
});

// Renderizar dos Projetos 
const projectsGrid = document.getElementById("projectsGrid");
const projectsEmptyHint = document.getElementById("projectsEmptyHint");

function renderProjects() {
  if (projects.length === 0) {
    projectsEmptyHint.hidden = false;
    return;
  }
  projectsGrid.innerHTML = projects.map((p, i) => `
    <article class="project-card">
      ${p.image ? `<img class="project-thumb" src="${p.image}" alt="${p.title}">` : ""}
      <div class="project-body">
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <div class="project-links">
          ${p.demoLink ? `<a href="${p.demoLink}" target="_blank" rel="noopener">Ver demo ↗</a>` : `<span class="disabled">Sem demo</span>`}
          <button type="button" class="detail-btn" data-project="${i}">Detalhes →</button>
        </div>
      </div>
    </article>
  `).join("");

  document.querySelectorAll(".detail-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const p = projects[btn.dataset.project];
      modalTitle.textContent = p.title;
      modalBody.innerHTML = `
        <p>${p.fullDescription || p.description}</p>
        <div class="project-stack" style="margin:1rem 0;">
          ${p.tags.map((t) => `<span>${t}</span>`).join("")}
        </div>
        ${p.repoLink ? `<a href="${p.repoLink}" target="_blank" rel="noopener" class="btn btn-ghost">Repositório ↗</a>` : ""}
        ${p.demoLink ? `<a href="${p.demoLink}" target="_blank" rel="noopener" class="btn btn-primary" style="margin-left:0.6rem;">Ver demo ↗</a>` : ""}
      `;
      modalOverlay.classList.add("open");
    });
  });
}

//Renderizar dos Certificados 
const certsGrid = document.getElementById("certsGrid");
const certsEmptyHint = document.getElementById("certsEmptyHint");

function renderCertificates() {
  if (certificates.length === 0) {
    certsEmptyHint.hidden = false;
    return;
  }
  certsGrid.innerHTML = certificates.map((c) => `
    <article class="cert-card">
      <img src="${c.image}" alt="${c.title}">
      <p>${c.title}</p>
    </article>
  `).join("");
}

// Renderizar do Stack 
const stackGrid = document.getElementById("stackGrid");
function renderStack() {
  stackGrid.innerHTML = stack.map((s) => `
    <div class="stack-item">
      <img src="https://skillicons.dev/icons?i=${s.icon}" alt="${s.name}">
      <span>${s.name}</span>
    </div>
  `).join("");
}

// Contadores automáticos (Projetos / Certificados) 
document.getElementById("statProjetos").textContent = projects.length;
document.getElementById("statCertificados").textContent = certificates.length;

renderProjects();
renderCertificates();
renderStack();


const modalOverlay = document.getElementById("modalOverlay");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");
const modalClose = document.getElementById("modalClose");

document.querySelectorAll("[data-modal]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const data = modalContent[btn.dataset.modal];
    if (!data) return;
    modalTitle.textContent = data.title;
    modalBody.innerHTML = data.html;
    modalOverlay.classList.add("open");
  });
});
modalClose.addEventListener("click", () => modalOverlay.classList.remove("open"));
modalOverlay.addEventListener("click", (e) => { if (e.target === modalOverlay) modalOverlay.classList.remove("open"); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") modalOverlay.classList.remove("open"); });

// Formulário de comentários 
const messageForm = document.getElementById("messageForm");
const formPhoto = document.getElementById("formPhoto");
const fileUploadText = document.getElementById("fileUploadText");

formPhoto.addEventListener("change", () => {
  fileUploadText.textContent = formPhoto.files[0] ? formPhoto.files[0].name : "Escolher Foto de Perfil";
});

messageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("formName").value.trim();
  const message = document.getElementById("formMessage").value.trim();
  addComment(name, message);
  messageForm.reset();
  fileUploadText.textContent = "Escolher Foto de Perfil";
});

// ---- Comentários ----
// Começa vazio: só aparecem aqui os comentários que visitantes reais escreverem.
// IMPORTANTE: como o site é estático (sem servidor), cada comentário fica salvo
// apenas no navegador de quem escreveu — não é compartilhado entre visitantes.
//Tenho que aplica a correção em relação a isso, para que os cometarios fiquem salvos no servidor e sejam compartilhados
const commentsList = document.getElementById("commentsList");
const commentCount = document.getElementById("commentCount");
const STORAGE_KEY = "layssa_portfolio_comments";

function getComments() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; }
  catch { return []; }
}

function saveComments(list) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

function addComment(name, message) {
  const list = getComments();
  list.unshift({ name: name || "Anônimo", message, date: new Date().toLocaleDateString("pt-BR") });
  saveComments(list);
  renderComments();
}

function renderComments() {
  const list = getComments();
  commentCount.textContent = list.length;
  if (list.length === 0) {
    commentsList.innerHTML = `<p class="comments-empty">Ainda não há comentários. Seja a primeira pessoa a escrever!</p>`;
    return;
  }
  commentsList.innerHTML = list.map((c) => `
    <div class="comment-item">
      <div class="c-head"><span>${c.name}</span><time>${c.date}</time></div>
      <p>${c.message}</p>
    </div>
  `).join("");
}
renderComments();
