# Projeto P2 - Sistema de Gerenciamento Acadêmico

Este projeto é um sistema de gerenciamento acadêmico que inclui funcionalidades para gerenciar Professores, Alunos, Aulas e Matrículas. Ele utiliza as seguintes tecnologias:

- **Angular** no front-end para construção da interface de usuário.
- **Node.js** com **Express** no back-end para a criação da API.
- **MySQL** como banco de dados relacional para armazenamento de dados.
- **Knex.js** como query builder para facilitar a interação com o banco de dados.

Siga as instruções abaixo para configurar e executar o projeto na sua máquina.

## Requisitos

Para rodar este projeto, você precisará ter as seguintes tecnologias instaladas em sua máquina:

- **Node.js** (versão 14 ou superior): Para executar o servidor backend e o Angular.
- **Angular CLI** (versão 12 ou superior): Para desenvolvimento e execução do front-end.
- **MySQL** (versão 5.7 ou superior): Para o banco de dados.
- **Git**: Para clonar o repositório.

## Instruções para Configuração

### 1. Clonar o Repositório

Primeiro, clone o repositório para sua máquina local:

```bash
git clone git@github.com:matheusfarnetani/unifeob-LTP-P2.git
cd unifeob-LTP-P2
```

### 2. Criar o Banco de Dados

1. Abra seu MySQL e execute os seguintes arquivos SQL para criar o banco de dados e popular os dados iniciais:

   - **schema.sql**: Cria as tabelas necessárias para o projeto.
   - **inserts.sql**: Popula as tabelas com dados iniciais.

```sql
source ./database/schema.sql;
source ./database/inserts.sql;
```

### 3. Configurar o Arquivo de Conexão do Banco de Dados

Edite o arquivo `./backend/src/db/knexfile.js` para garantir que as credenciais do banco de dados estejam adequadas para a sua máquina local. Você precisará definir os seguintes parâmetros:

- **host**: Endereço do servidor do MySQL (geralmente `localhost`)
- **user**: Nome de usuário do MySQL
- **password**: Senha do MySQL
- **database**: Nome do banco de dados (que você criou com o schema.sql)

### Exemplo de Configuração (`knexfile.js`):

```javascript
module.exports = {
  client: 'mysql2',
  connection: {
    host: 'localhost',
    user: 'seu_usuario',
    password: 'sua_senha',
    database: 'nome_do_banco'
  }
};
```

### 4. Executar o Servidor Backend

1. Navegue até o diretório do backend e instale as dependências:

   ```bash
   cd backend
   npm install
   ```

2. Execute o servidor backend:

   ```bash
   npm start
   ```

   O servidor backend estará rodando em `http://localhost:3000`.

### 5. Executar o Servidor Frontend

1. Navegue até o diretório do frontend e instale as dependências:

   ```bash
   cd ../frontend
   npm install
   ```

2. Execute o servidor frontend:

   ```bash
   ng serve
   ```

   O servidor frontend, desenvolvido em Angular, estará rodando em `http://localhost:4200`.

## Uso

Acesse `http://localhost:4200` no navegador para usar o sistema de gerenciamento acadêmico. Você poderá navegar entre as funcionalidades de Professores, Alunos, Aulas e Matrículas.

## Problemas Conhecidos
- Certifique-se de que as configurações do banco de dados no `knexfile.js` estão corretas.
- Caso o servidor backend não consiga conectar ao banco de dados, revise suas credenciais e permissões.

## Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir uma **issue** ou enviar um **pull request**.

## Licença
Este projeto está sob a licença MIT.

