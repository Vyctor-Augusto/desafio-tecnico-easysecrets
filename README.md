# Desafio técnico - Easysecrets

Automação de testes end-to-end para a aplicação **Demoblaze**, utilizando **Playwright** com **TypeScript**.

---

## Objetivo

Este projeto tem como objetivo automatizar o fluxo principal da aplicação Demoblaze, contemplando os seguintes cenários solicitados no desafio técnico:

- Cadastro de usuário
- Login
- Adição de produto ao carrinho
- Remoção de produto do carrinho

Aplicação testada:

```text
https://www.demoblaze.com/index.html
```

---

## Tecnologias e bibliotecas utilizadas

- **Node.js**
- **TypeScript**
- **Playwright**
- **@playwright/test**

---

## Escolha das bibliotecas

### Playwright

O **Playwright** foi escolhido por ser uma ferramenta moderna para automação de testes end-to-end, permitindo simular interações reais de usuário no navegador.

Ele também oferece suporte a múltiplos navegadores, como:

- Chromium
- Firefox
- WebKit

Isso permite validar o comportamento da aplicação em diferentes engines de navegador.

### TypeScript

O **TypeScript** foi utilizado por oferecer tipagem estática, melhor organização do código e maior segurança durante o desenvolvimento.

Com TypeScript, é mais fácil identificar erros antes da execução dos testes, além de melhorar a leitura e manutenção do projeto.

### @playwright/test

O `@playwright/test` foi utilizado como test runner do projeto.

Ele fornece recursos importantes como:

- execução de testes;
- asserções;
- relatórios;
- configuração por navegador;
- screenshots, vídeos e traces em caso de falha;
- suporte a `test.step()` para organizar melhor os testes.

---

## Estrutura do projeto

```text
demoblaze-playwright/
│
├── pages/
│   ├── HomePage.ts
│   ├── SignupPage.ts
│   ├── LoginPage.ts
│   ├── ProductPage.ts
│   └── CartPage.ts
│
├── tests/
│   ├── home.spec.ts
│   └── demoblaze.spec.ts
│
├── utils/
│   └── testData.ts
│
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.ts
└── README.md
```

> As pastas `playwright-report/` e `test-results/` são geradas automaticamente após a execução dos testes e não precisam ser versionadas.

---

## Organização das pastas

### `pages/`

Contém os arquivos responsáveis por representar as páginas e componentes da aplicação.

Essa pasta concentra as ações realizadas em cada tela, seguindo o padrão **Page Object Model**.

### `tests/`

Contém os arquivos de teste automatizado.

Nessa pasta ficam os cenários executados pelo Playwright.

### `utils/`

Contém dados e recursos auxiliares utilizados nos testes.

Neste projeto, essa pasta armazena os dados de teste em `testData.ts`.

---

## Arquitetura utilizada

O projeto utiliza o padrão **Page Object Model**, também conhecido como **POM**.

Nesse padrão, as ações de cada página ficam separadas em classes específicas dentro da pasta `pages`.

O objetivo é deixar os testes mais:

- limpos;
- legíveis;
- reutilizáveis;
- fáceis de manter.

### Responsabilidade de cada arquivo

| Arquivo | Responsabilidade |
|---|---|
| `HomePage.ts` | Ações da página inicial, como abrir cadastro, login, carrinho e selecionar produto |
| `SignupPage.ts` | Preenchimento e envio do formulário de cadastro |
| `LoginPage.ts` | Preenchimento e envio do formulário de login |
| `ProductPage.ts` | Ação de adicionar produto ao carrinho |
| `CartPage.ts` | Validação, remoção e conferência de produtos no carrinho |
| `testData.ts` | Centralização dos dados utilizados nos testes |
| `demoblaze.spec.ts` | Teste principal do fluxo de cadastro, login, carrinho e remoção |
| `home.spec.ts` | Teste simples para validar o acesso à página inicial |

---

## Dados de teste

Os dados utilizados nos testes estão centralizados no arquivo:

```text
utils/testData.ts
```

O usuário de teste é gerado dinamicamente utilizando `Date.now()`.

Exemplo:

```ts
username: `vyctor_${Date.now()}`
```

Essa decisão evita conflito com usuários já cadastrados anteriormente na aplicação, já que o Demoblaze não permite cadastrar o mesmo usuário mais de uma vez.

---

## Como instalar o projeto

Clone o repositório:

```bash
git clone URL_DO_REPOSITORIO
```

Acesse a pasta do projeto:

```bash
cd desafio-tecnico-easysecrets
```

Instale as dependências:

```bash
npm install
```

Instale os navegadores do Playwright:

```bash
npx playwright install
```

---

## Como executar os testes

Executar todos os testes configurados:

```bash
npm test
```

Executar os testes no Chromium:

```bash
npm run test:chromium
```

Executar os testes no Chromium com navegador visível:

```bash
npm run test:headed
```

Executar os testes no Firefox:

```bash
npm run test:firefox
```

Executar os testes no Firefox com navegador visível:

```bash
npm run test:firefox:headed
```

Executar com a interface visual do Playwright:

```bash
npm run test:ui
```

Abrir o relatório HTML:

```bash
npm run report
```

---

## Scripts disponíveis

Os scripts foram configurados no `package.json` para facilitar a execução dos testes.

| Script | Comando executado | Finalidade |
|---|---|---|
| `npm test` | `playwright test` | Executa todos os testes configurados |
| `npm run test:chromium` | `playwright test --project=chromium` | Executa os testes apenas no Chromium |
| `npm run test:headed` | `playwright test --headed --project=chromium` | Executa os testes no Chromium com o navegador visível |
| `npm run test:firefox` | `playwright test --project=firefox` | Executa os testes apenas no Firefox |
| `npm run test:firefox:headed` | `playwright test --headed --project=firefox` | Executa os testes no Firefox com o navegador visível |
| `npm run test:ui` | `playwright test --ui` | Abre a interface visual do Playwright |
| `npm run report` | `playwright show-report` | Abre o relatório HTML da última execução |

---

## Fluxo automatizado

O teste principal está no arquivo:

```text
tests/demoblaze.spec.ts
```

Ele executa as seguintes etapas:

1. Acessa a página inicial
2. Abre o modal de cadastro
3. Cadastra um novo usuário
4. Abre o modal de login
5. Realiza login com o usuário cadastrado
6. Seleciona o produto `Samsung galaxy s6`
7. Adiciona o produto ao carrinho
8. Valida que o produto foi adicionado ao carrinho
9. Remove o produto do carrinho
10. Valida que o produto foi removido

---

## Testes implementados

### `home.spec.ts`

Teste simples responsável por validar se a página inicial do Demoblaze é carregada corretamente.

Validações realizadas:

- A página abre corretamente
- O título contém `STORE`
- O link `Sign up` está visível
- O link `Log in` está visível

### `demoblaze.spec.ts`

Teste principal responsável por validar o fluxo completo solicitado no desafio.

Validações realizadas:

- Cadastro de usuário com sucesso
- Login com usuário cadastrado
- Produto adicionado ao carrinho
- Produto exibido no carrinho
- Produto removido do carrinho
- Produto não aparece mais após a remoção

---

## Observações técnicas

O site Demoblaze utiliza alertas nativos do navegador em algumas ações, como:

- cadastro de usuário;
- adição de produto ao carrinho.

Por isso, o projeto trata esses alertas utilizando o evento `dialog` do Playwright.

Exemplo:

```ts
const dialogPromise = this.page.waitForEvent('dialog');

await this.page.getByRole('link', { name: 'Add to cart' }).click();

const dialog = await dialogPromise;
expect(dialog.message()).toContain('Product added');
await dialog.accept();
```

Essa abordagem garante que o teste aguarde o alerta ser exibido, valide a mensagem apresentada e aceite o alerta antes de continuar o fluxo.

---

## Uso de `test.step()`

O teste principal foi dividido em etapas utilizando `test.step()`.

Exemplo:

```ts
await test.step('Cadastrar um novo usuário', async () => {
  await homePage.openSignUpModal();
  await signupPage.signup(testUser.username, testUser.password);
});
```

Essa decisão melhora a leitura do relatório e facilita a identificação da etapa exata em que uma possível falha ocorreu.

---

## Decisões técnicas tomadas

### Uso de Page Object Model

O padrão **Page Object Model** foi utilizado para separar a lógica dos testes da lógica de interação com as páginas.

Com isso, o teste principal fica mais legível e os seletores ficam centralizados nas classes de página.

### Separação em camadas

O projeto foi dividido em:

- `pages`: ações das páginas;
- `tests`: cenários de teste;
- `utils`: dados auxiliares.

Essa separação facilita manutenção, leitura e reutilização do código.

### Dados dinâmicos

O nome do usuário é gerado dinamicamente com `Date.now()` para evitar falhas por tentativa de cadastro de usuário já existente.

### Tratamento de alertas

Como o Demoblaze utiliza alertas nativos do navegador, foi necessário tratar esses eventos com `waitForEvent('dialog')`.

### Seletores mais específicos

O seletor do carrinho utiliza o ID `#cartur`, pois o texto `Cart` poderia gerar conflito com o botão `Add to cart`.

### Validação do carrinho

A validação do carrinho utiliza seletores voltados para a tabela HTML da página, tornando a checagem mais direta.

### Execução cross-browser

O projeto foi validado nos navegadores Chromium, Firefox e WebKit, aproveitando o suporte cross-browser do Playwright.

---

## Diferenciais implementados

Além do fluxo obrigatório solicitado no desafio, o projeto também inclui:

- Estrutura com **Page Object Model**;
- Separação entre testes, páginas e dados de teste;
- Dados dinâmicos para cadastro de usuário;
- Tratamento de alertas nativos com `dialog`;
- Divisão do teste principal em etapas com `test.step()`;
- Scripts personalizados no `package.json`;
- Execução validada em Chromium, Firefox e WebKit;
- Relatório HTML do Playwright;
- `.gitignore` configurado para evitar versionamento de arquivos gerados automaticamente;
- Teste adicional para validação da página inicial.

---

## Execução validada

O fluxo principal foi executado com sucesso nos navegadores **Chromium**, **Firefox** e **WebKit**.

Resultado obtido:

```text
6 passed
```

Comando validado:

```bash
npm test
```

Também foram validados comandos individuais por navegador:

```bash
npm run test:chromium
```

```bash
npm run test:firefox
```

```bash
npx playwright test tests/demoblaze.spec.ts --project=webkit --headed
```

---

## Relatório de execução

Após executar os testes, o relatório pode ser aberto com:

```bash
npm run report
```

O relatório apresenta:

- testes executados;
- status de sucesso ou falha;
- tempo de execução;
- navegador utilizado;
- etapas do fluxo automatizado.

---

## Observação sobre navegadores

Os testes foram validados com sucesso nos navegadores:

- Chromium
- Firefox
- WebKit

O Playwright permite execução cross-browser, e o projeto foi validado nos três navegadores configurados por padrão.

---

## Status do projeto

Projeto finalizado com o fluxo principal automatizado e validado com sucesso.

Status atual:

```text
Testes passando no Chromium, Firefox e WebKit
```