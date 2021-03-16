# DesafioNave
  Desafio de seleção para vaga de estágio Backend Nave
 
 # Questões Teste de lógica 
   Para acessar as questões do teste de lógica acesse o link: https://codesandbox.io/s/teste-estagio-template-forked-rnx7h?file=/index.html.

 # Desafio Backend
 
 Esse projeto foi desenvolvido com node.js, utilizando as seguintes dependências: 
  
 * Express
 * Objection
 * Knex
 * Nodemon
 * body-parser
  
  ## Configuração
  
  Para a persistência dos dados foi  utilizado o Banco de Dados PostegreSQL, contudo você configurar o Banco de Dados de sua preferência no arquivo: "knexfile.js". Para mais informações acesse a documentação do [knex](http://knexjs.org).
  Obs: Lembre-se de atualizar o "knexfile.js" de acordo com seu banco, usuário e senha.
  
  ## Make it run
  Instalando as dependências:
  ```
  npm install
  ```
  Criando as tabelas no Banco de Dados:
  ```
  knex migrate:latest
  ```
  Rodando no servidor:
   ```
   npm start
   ```
   ## Dificuldades
   Durante a implementação do projeto tentei utilizar o Mysql com o knex, porém após várias tentantivas resolvi reimplementar utilizando postgreSQL e objection.
  
