# 💡 Gerador de Frases Motivacionais

Uma aplicação web simples e interativa feita com **JavaScript**. Ela exibe frases inspiradoras de forma aleatória diretamente no navegador, sem necessidade de conexão com servidores ou bibliotecas externas.

---

## 📋 Sobre o Projeto

Esse projeto foi criado para praticar conceitos essenciais do desenvolvimento front-end. O foco está em trabalhar com arrays, gerar números aleatórios e atualizar o conteúdo da página de forma dinâmica, sem recorrer a frameworks.

### Funcionalidades

- Armazenamento de uma lista de frases motivacionais, cuidadosamente selecionadas.

- Seleção aleatória de uma frase a cada clique, sem usar bibliotecas adicionais.

- Exibição da frase escolhida em um elemento específico da página, atualizando o conteúdo em tempo real.

---

## ⚙️ Como Funciona

A função principal `choosePhrase()` realiza três etapas claras e diretas:

1. **Geração do índice:** Usa `Math.random()` para gerar um número entre 0 e 1, multiplica pelo número total de frases e arredonda para baixo com `Math.floor()` para garantir um índice válido dentro do array.

2. **Seleção:** Pega a frase que está na posição sorteada dentro do array `phrases`.

3. **Renderização:** Coloca a frase selecionada no elemento HTML com o ID `phrase`, alterando o conteúdo com `innerHTML`.

```javascript