Olá ^^, me chamo Jonnas Willian e este é um projeto feito em Node para aplicação de um CRUD
O projeto de CRUD de quadro de usuários feito em Node, [nome stack front-end] e [nome banco de dados].
Nela poderá criar e manipular os usuários criados dentro de um banco de dados

- Para criar novos usuários, siga o modelo abaixo na rota "http://localhost:3030/user-list"

<img src="https://user-images.githubusercontent.com/61368318/151267482-8e694055-f76a-41b3-abc7-28d57eebc26a.jpeg">

- Para realizar um Update em seu usuários, siga o modelo abaixo na rota "http://localhost:3030/user-update/id:"
- OBS: No local do "id" insira o ID do usuário a ser modificado

<img src="https://user-images.githubusercontent.com/61368318/151267770-b92326b9-a100-40f1-9fb2-f5303492ff7c.jpeg">

- Caso queira deletar algum usuário, basta seguir o exemplo na rota "http://localhost:3030/user-delete/id:"
- OBS: No local do "id" insira o ID do usuário a ser excluido

<img src="https://user-images.githubusercontent.com/61368318/151267971-688ab14f-3167-4bd0-a18e-d15ea5f1e96e.jpeg">

- E para verificar os usuários salvos, utilize a rota "http://localhost:3030/user-list"

<img src = "https://user-images.githubusercontent.com/61368318/151268106-f79e6039-de96-4f62-a3c9-e23647ffcb24.jpeg">


Instruções Do Processo De Criação Do Projeto

 - Comece o projeto com node utilizando o comando "npm init"
 - Em seguida instale o Express com o comando "npm install express"
 - Também instale o sequelize "yarn add sequelize-cli -D" e "yarn add sequelize"
 - Nodemon para ajudar no controle do server "yarn add nodemon"
 - Instale o mysql com o crontole "yarn add mysql2"
 - Cire o banco de dados utilizando "yarn sequelize db:create"
 - Crie uma migration usando "yarn sequelize migration:create --name=create-user"