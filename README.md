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
exemplos de como utilizá-las. Para importar esses dados, será necessário utilizar a aplicação
[Insomnia](https://insomnia.rest/).
Se não tiver acesso à essa aplicação ou preferir utilizar algum outro método para testar as rotas, todas elas
estarão exemplificadas logo abaixo:

<br>

> # Users

<br>

## POST/api/users

#### Verifica se todos os campos estão corretamente preenchidos e se o "email" já não está em uso. Se tudo estiver de acordo, adiciona um novo usuário ao banco de dados

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

<br>

## GET/api/users

#### Retorna uma lista com todos os usuários

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

<br>

## GET/api/users/:user_email

#### Retorna um usuário e suas oportunidades

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

<br>

## DELETE/api/users/:user_email

#### Deleta um usuário do banco de dados

_Envio:_

```json
No body
```

_Respota:_

> 204

```json
No body
```

<br>

> # Opportunities

<br>

## POST/api/users/:user_email/opportunities

#### Verifica se todos os campos estão corretamente preenchidos e se o "name" já não está em uso. Se tudo estiver de acordo, adiciona uma nova oportunidade ao banco de dados

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

<br>

## PATCH/api/users/:user_email/opportunities/:opportunity_name

#### Inverte o valor do campo "isActive" de uma oportunidade

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

<br>

## DELETE/api/users/:user_email/opportunities/:opportunity_name

#### Deleta uma oportunidade do banco de dados

_Envio:_

```json
No body
```

_Respota:_

> 204

```json
No body
```

<br>

# Comentários e Observações

Logo no início do projeto, minha ideia original era desenvolver toda a aplicação usando TypeScript e ESLint. Eu
já fiz algumas aplicações usando os dois enquanto estudava na Kenzie (como
[essa aqui](https://github.com/gabriel-de-azevedo/capstone-node)
) e imaginei que não teria muita dificuldade , mas tive alguns problemas com a configuração e decidi ainda no
primeiro dia que ia deixar isso de lado.
Isso porque nesse dia mesmo recebi a notícia de que seria interessante fazer o Front-End também e, como já fazia
vários meses que eu nem abria uma aplicação React, optei por começar logo o projeto, mesmo sem esses extras, para
garantir que teria tempo de entregar tudo, caso tivesse alguma dificuldade com o Front.

No Back-End, a primeira coisa que fiz foi alterar o padrão de importação do projeto de commonJS para ES6, usando um
pacote chamado "cjs-to-es6". Atualmente ele já não recebe mais suporte e também não consegue converter absolutamente
tudo corretamente mas, para esse projeto mais pequeno, ele me atendeu bem e fez quase tudo automaticamente. Depois
disso, organizei o projeto da forma que eu normalmente trabalho com Express e já comecei a implementar as rotas
básicas para o Front funcionar.

Tive que fazer algumas alterações durante a integração com o Front, como trocar a porta padrão que o Back iria rodar
e instalar a biblioteca "cors" para permitir Cross Origin Request Sharing. Além disso, também "limpei" algumas das
respostas da API para facilitar na hora de receber esses dados.

Só depois que concluí o Front foi que retornei para o Back. Quis usar todas as funções fornecidas no projeto original
e também trabalhar um pouco com a validação de dados usando a biblioteca "yup". Como eu ainda tinha um dia "extra" no
meu cronograma, usei ele para implementar tanto as rotas de adição quanto deleção de recursos.

Finalmente, o último dia eu tirei principalmente para trabalhar na documentação e revisar alguns comentários, além de
testar toda a aplicação uma última vez para ter certeza que ficou tudo funcionando certinho.

Agradeço desde já a oportunidade de mostrar um pouco do que consigo fazer e fico a disposição para fazer qualquer outro
teste ou esclarecer quaisquer dúvidas que tenham sobre meus conhecimentos técnicos.
