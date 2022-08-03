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

# Endpoints

# Comentários e Observações
