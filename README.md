# Capital Cards API

Capital Cards API é uma aplicação Back-End desenvolvida usando o framework Express, tendo como objetivo
fornecer as rotas necessárias para interagir com os dados armazenados em um arquivo JSON simulando um
banco NoSQL. Essa API foi baseada em um projeto já existe que incluía a configuração inicial, todos os
arquivos públicos e uma biblioteca responsável pelas operações de leitura e escrita no arquivo JSON.

As rotas nessa aplicação foram incialmente desenvolvidas pensando em cobrir apenas as necessidades básicas
solicitadas: a listagem de todos os usuários, a listagem das oportunidades de um usuário e a alteração do
status de uma oportunidade. Porém, também foram criadas rotas de adição e deleção de recursos, procurando
usar todas as funções incluídas na biblioteca de manipulação do banco dados.

Com o objetivo do teste técnico em mente, foram adicionados breves comentários em inglês em cada arquivo
JavaScript descrevendo sua funcionalidade. A última parte dessa documentação também possui alguns comentários
e observações sobre as decisões e comprometimentos feitos durante o processo de desenvolvimento.

<br/>

## Funcionalidades

- Adição de um novo usuário
- Listagem de todos os usuários
- Busca por um usuário específico e suas oportunidades
- Deleção de um usuário
- Adição de uma nova oportunidade
- Alteração do status de uma oportunidade
- Deleção de uma oportunidade

<br/>

## Como Executar

A aplicação pode ser iniciada usando um dos seguintes comandos, dependendo do gerenciador de pacote utilizado
para instalar suas dependências:

### `npm run start`

### ou

### `yarn start`

<br/>

As rotas da API poderão ser acessadas a partir de http://localhost:4000.

<br/>

# Rotas

Dentro do projeto existe uma pasta chamada "workspace" com um arquivo JSON contendo todas as rotas e alguns
exemplos de como utilizá-las. Para fazer essa importação, será necessário utilizar a aplicação
[Insomnia](https://insomnia.rest/).
Se não tiver acesso à essa aplicação ou preferir utilizar algum outro método para testar as rotas, todas elas
estarão exemplificadas logo abaixo:

<br>

> ## Users

<br>

## POST/api/users

### Descrição

_Envio:_

```json
{
  "name": string,
  "email": strig,
  "isActive": boolean,
  "phone": string,
  "revenue": number,
  "agreedTerms": boolean
}
```

_Respota:_

> 201

```json
{
  "user": {
    "name": string,
    "email": strig,
    "isActive": boolean,
    "phone": string,
    "revenue": number,
    "agreedTerms": boolean
  }
}
```

---

<br>

## GET/api/users

### Descrição

_Envio:_

```json
No body
```

_Respota:_

> 200

```json
{
  "users": [
    {
      "name": string,
      "email": strig,
      "isActive": boolean,
      "phone": string,
      "revenue": number,
      "agreedTerms": boolean
    }
  ]
}
```

---

<br>

## GET/api/users/:user_email

### Descrição

_Envio:_

```json
No body
```

_Respota:_

> 200

```json
{
  "user": {
    "name": string,
    "email": string,
    "isActive": boolean,
    "phone": string,
    "revenue": number,
    "agreedTerms": boolean
  },
  "opportunities": [
    {
      "name": string,
      "limit": number,
      "interest": number,
      "term": number,
      "isActive": boolean
    }
  ]
}
```

---

<br>

## DELETE/api/users/:user_email

### Descrição

_Envio:_

```json
No body
```

_Respota:_

> 204

```json
No body
```

---

<br>

> ## Opportunities

<br>

## POST/api/users/:user_email/opportunities

### Descrição

_Envio:_

```json
{
  "name": string,
  "limit": number,
  "interest": number,
  "term": number,
  "isActive": boolean
}
```

_Respota:_

> 201

```json
{
  "opportunities": [
    {
      "name": string,
      "limit": number,
      "interest": number,
      "term": number,
      "isActive": boolean
    }
  ]
}
```

---

<br>

## PATCH/api/users/:user_email/opportunities/:opportunity_name

### Descrição

_Envio:_

```json
No body
```

_Respota:_

> 200

```json
{
  "opportunities": [
    {
      "name": string,
      "limit": number,
      "interest": number,
      "term": number,
      "isActive": boolean
    }
  ]
}
```

---

<br>

## DELETE/api/users/:user_email/opportunities/:opportunity_name

### Descrição

_Envio:_

```json
No body
```

_Respota:_

> 204

```json
No body
```

---

# Comentários e Observações
