## BANK-TS 📌
[👮] **Autor**: Pedro Henrique.  
[📅] **Data**: 22/02/2026.  
[📌] **Tipo**: Banco Digital (Simulação).  

---
**Bank-ts** é um sistema que simula um sistema bancário. Todos os métodos só podem ser executados via código. Eu optei por este modo para mostrar de forma direta como funciona a aplicação de conceitos sem interações com o usuário (interface ou input). O sistema conta com diversas funcionalidades: CRUD (criar conta, atualizar contar, deletar consta e pegar contas), sacar, depositar, ver saldo (crédito e débito), limite crédito, pedir empréstimo, comprar com débito ou crédito, realizar transferência via pix e login.

---
### TECNOLOGIAS E CONCEITOS UTILIZADOS 💻
**[⚙️] Tecnologias**: javascript e typescript.  
**[📗] Conceitos**: modules, interface-ts, poo, localstorage, regExp, typeAlias, generics e narrowing.  

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

---
### FUNCIONALIDADES DO SISTEMA ✅
**[✅] CRUD BANK**: Criar conta, atualizar conta, deletar conta e listar contas.  
**[✅] Login**: Realizar login na conta.  
**[✅] Dados**: Todos os dados são salvos em localstorage.  
**[✅] Notificaõess**: Contas que há movimentações são notificadas, as notificações mais comuns são: empréstimo, compra realizada, saque realizado, déposito realizado, pix enviando ou recebido, etc.  
**[✅] Operações Bancárias**: Ver saldo (crédito e débito), sacar, depositar, pedir empréstimo, transferir via pix, comprar no débito e/ou crédito.  
**[✅] Controle total** do sistema via código para entendimento de conceitos sem a utilização de interface interativa.   

---

## 📸 Demonstração do Sistema

### 🆕 Criando Conta

<p align="left">
  <img src="images/criando_conta.png" width="800"/>
  <br/>
  <img src="images/criando_conta_resultado.png" width="800"/>
  <br/>
  <img src="images/criando_conta_outro_resultado.png" width="800"/>
</p>

---

### 🗑️ Deletando Conta

<p align="left">
  <img src="images/deletando_conta.png" width="800"/>
  <br/>
  <img src="images/deletando_conta_resultado.png" width="800"/>
</p>

---

### ✏️ Atualizando Conta

<p align="left">
  <img src="images/atualizando_conta.png" width="800"/>
  <br/>
  <img src="images/atualizando_conta_resultado.png" width="800"/>
</p>

---

### 🔐 Login na Conta "Orlando"

<p align="left">
  <img src="images/fazendo_login.png" width="800"/>
  <br/>
  <img src="images/fazendo_login_resultado.png" width="800"/>
  <br/>
  <img src="images/fazendo_login_outro_resultado.png" width="800"/>
</p>

---

### 💰 Realizando Depósito

<p align="left">
  <img src="images/fazendo_deposito.png" width="800"/>
  <br/>
  <img src="images/fazendo_deposito_resultado.png" width="800"/>
</p>

---

### 💸 Realizando Saque

<p align="left">
  <img src="images/fazendo_saque.png" width="800"/>
  <br/>
  <img src="images/fazendo_saque_resultado.png" width="800"/>
</p>

---

### 🏦 Pedido de Empréstimo

<p align="left">
  <img src="images/fazendo_emprestimo.png" width="800"/>
  <br/>
  <img src="images/fazendo_emprestimo_resultado.png" width="800"/>
</p>

---

### 📊 Visualizando Saldo e Limite

<p align="left">
  <img src="images/vendo_saldo_limite.png" width="800"/>
  <br/>
  <img src="images/vendo_saldo_limite_resultado.png" width="800"/>
</p>

---

### 💳 Compra com Crédito

<p align="left">
  <img src="images/comprando_com_credito.png" width="800"/>
  <br/>
  <img src="images/comprando_com_credito_resultado.png" width="800"/>
</p>

---

### 💳 Compra com Débito

<p align="left">
  <img src="images/compra_com_debito.png" width="800"/>
  <br/>
  <img src="images/compra_com_debito_resultado.png" width="800"/>
</p>

---

### ⚡ Transferência via Pix

<p align="left">
  <img src="images/transferindo_pix.png" width="800"/>
  <br/>
  <img src="images/transferindo_pix_resultado.png" width="800"/>
</p>

---

### 🔑 Login na Conta "Pedro"

<p align="left">
  <img src="images/fazendo_login_outra_conta.png" width="800"/>
  <br/>
  <img src="images/fazendo_login_outra_conta_resultado.png" width="800"/>
</p>

--- 

### 🤖 Comandos

```js

// Para criar, atualizar e deletar.

bank.accountCreate(name, cpf, password, email, telephone); // susbtitua os campos com os dados
bank.accountUpdate(cpf, password); // susbtitua os campos com os dados
bank.accountDelete(cpf, password); // susbtitua os campos com os dados

// Login

export const login = new Login(cpf, password); // substitua os campos om os dados

// Quando o sistema identificar login, as operações podem ser executadas

operations.buyWithCredit(value) // value = valor da compra
operations.buyWithDebit(value) // value = valor da compra
operations.lending(value, installMentsQuantity) // value = valor do empréstimo | installMentsQuantity = quantidade de parcelas
operations.sake(value) // value = valor que será sacado
operations.transfer(value, key) // value = quantidade que será transferira | key = chave pix do destinário 
operations.deposit(value) // value = valor que será depositado
operations.seeLimit() // mostra o limite de crédito
operations.seeBalance() // mostra o saldo da conta (débito).

```

---

### 📗 Tutorial para usar o sistema

```git

O node.js precisa estar instalado.
O typescript precisa estar instalado. npm install typescript -g

Use o seguinte comando para clonar o repositório: git clone https://github.com/eupedrobarbosa03/bank-ts.git 

Recomendo a instalação do live server do vscode para facilitar o uso.
Clique no index.ts como o botão direito, clique em "open in integrated Terminal", após abrir o terminal, execute o comando tsc -w e clique em "Go live" no canto inferior direito.
O index.ts é o controle de todo o sistema. Leia os comandos e veja os print's para ver o funcionamento do sistema.

Os dados são salvos em localstorage, sempre que for executar um comando, esteja atento para não executar o comando duas vezes de forma não intencional.
Exemplo: operations.deposit(500), se eu der CTRL + S duas vezes, esse comando será executado duas vezes, logo, a conta possuirá 1000 de saldo.
Outro exemplo: bank.accountCreate("pedro", "12345678910", "pedro123", "pedro@gmail", "61 123456789"); ao dar CTRL + S duas vezes,  na primeira execução o sistema fará o salvamento no storage, na segunda execução o sistema retornará erro porque os dados são iguais, e isso é bom. Execute o mesmo comando com outros dados para criar outra conta. Sempre apague ou edite o comando para tal finalidade.

```
