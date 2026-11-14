# ⛽ Calculadora de Álcool ou Gasolina

<p align="center">
  <b>Aplicação web desenvolvida para consolidar fundamentos de JavaScript, manipulação do DOM e boas práticas de estruturação de front-end.</b><br>
  Uma solução prática e direta para calcular o custo-benefício entre combustíveis na hora de abastecer.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Concluído-success?style=for-the-badge" alt="Status Concluído">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap">
</p>

---

## 💡 Sobre o Projeto

Este projeto coloca em prática conceitos essenciais de desenvolvimento web e lógica de programação aplicados a um problema real. A aplicação implementa a **regra dos 70%** para comparar o rendimento energético e financeiro entre etanol e gasolina: caso a razão entre o preço do álcool e o da gasolina seja maior ou igual a **0.7**, o sistema indica o abastecimento com gasolina; caso contrário, recomenda o álcool.

Além da lógica matemática, o foco do desenvolvimento foi aplicar **separação de responsabilidades** (mantendo a camada de comportamento isolada da estrutura HTML), tratamento de entradas do usuário (conversão de strings e suporte ao padrão decimal brasileiro com vírgula) e feedback dinâmico na interface.

---

## 🛠️ Tecnologias e Conceitos Aplicados

* **HTML5:** Estruturação semântica e acessibilidade de formulários.
* **CSS3 & Bootstrap 4.5:** Prototipação rápida, responsividade e componentes visuais (*cards* e alertas).
* **JavaScript (ES6+):** Validação de dados, conversão de tipos (`parseFloat`), manipulação de strings e atualização dinâmica do DOM.
* **Git & GitHub:** Controle de versão com histórico limpo e organização modular de diretórios.

---

## 📂 Estrutura de Pastas

A arquitetura do projeto foi pensada para manter o código limpo e fácil de dar manutenção:

```text
alcool-gasolina/
├── js/
│   └── script.js    # Regras de negócio, validações e manipulação do DOM
├── index.html       # Estrutura da interface e integração com Bootstrap
└── README.md        # Documentação técnica do projeto
