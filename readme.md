# 🧠 Lambda Calculus - Fundamentos e Implementação

Este repositório tem como objetivo apresentar os fundamentos do **Lambda Cálculo** (ou *Lambda Calculus*), um dos pilares da computação teórica e base dos paradigmas de programação funcional.

---

## 📘 O que é Lambda Calculus?

O **Lambda Cálculo** é um sistema formal criado por **Alonzo Church** nos anos 1930. Ele fornece uma maneira de definir funções e aplicar funções a argumentos usando apenas três construções:

1. **Variáveis** – representam valores ou funções (`x`, `y`, etc.)
2. **Abstração** – define funções anônimas (`λx. x`)
3. **Aplicação** – aplica uma função a um argumento (`(λx. x) y`)

É minimalista, mas poderoso o suficiente para representar qualquer computação (Turing completo).

---

## 🧩 Conceitos Básicos

| Conceito        | Exemplo           | Descrição                                                         |
| --------------- | ----------------- | ----------------------------------------------------------------- |
| Variável        | `x`               | Representa um valor.                                              |
| Abstração       | `λx. x`           | Função anônima que retorna o próprio argumento.                   |
| Aplicação       | `(λx. x) y`       | Aplica a função ao argumento `y`.                                 |
| Redução (β)     | `(λx. x) y → y`   | Processo de simplificar uma expressão.                            |
| Composição      | `λx. f (g x)`     | Função composta.                                                  |
| Church Encoding | `λf. λx. f (f x)` | Representação de números, booleanos, listas, etc. usando funções. |

---

## 💻 Estrutura do Projeto

```
lambda-calculus/
├── index.html                     # Frontend da calculadora
├── src/
│   ├── app.js                     # Interações da interface
│   ├── lambda-calculus.js         # Núcleo com combinadores e números de Church
│   └── styles.css                 # Estilos do frontend
└── README.md
```

---

## 🛠 Tecnologias

Este projeto pode ser implementado em várias linguagens. Algumas sugestões:

* **JavaScript** – pela simplicidade e ampla adoção.
* **Haskell** – por ser funcional puro.
* **Python** – pela legibilidade e comunidade.
* **OCaml / Scala / Rust** – para mais performance ou aprendizado avançado.

---

## 🚀 Como executar

1. Abra a pasta no VS Code.
2. Abra o arquivo `index.html` no navegador (ou use a extensão Live Server).
3. Use os botões de exemplos e a calculadora para testar expressões.

---

## 📚 Sugestões de Estudo

* Livro: *Types and Programming Languages* – Benjamin C. Pierce
* Curso: [Structure and Interpretation of Computer Programs](https://mitpress.mit.edu/sites/default/files/sicp/index.html)
* Artigo: *An Introduction to Lambda Calculus and Functional Programming*

---

## 🤔 Por que aprender isso?

* Fundamento teórico da computação.
* Base para entender linguagens como Haskell, Lisp, Elixir, F#, Scala.
* Desenvolve raciocínio lógico e abstração.

---

## 🧠 Exemplos Clássicos

```plaintext
Identidade:      λx. x
K combinator:    λx. λy. x
Not:             λb. b (λx. false) (λx. true)
Boolean True:    λt. λf. t
Boolean False:   λt. λf. f
```

---

## 📩 Contribuições

Sinta-se à vontade para abrir issues, enviar pull requests ou propor novos exemplos!

---

## 📝 Licença

Distribuído sob a licença MIT. Consulte `LICENSE` para mais informações.
