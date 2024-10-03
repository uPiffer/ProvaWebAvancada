# Prova Web Avançada

Esta API é uma implementação de um sistema de gerenciamento de usuários, posts e comentários, utilizando o Prisma ORM e SQLite como banco de dados.

## Tecnologias Utilizadas

- Node.js
- Express
- Prisma
- SQLite
- bcryptjs (para hashing de senhas)
- jsonwebtoken (para autenticação)

## Estrutura do Projeto

- `controllers/`: Contém a lógica de negócio da aplicação.
  - `userController.ts`
  - `postController.ts`
  - `commentController.ts`
- `models/`: Contém os modelos da aplicação.
  - `user.ts`
  - `post.ts`
  - `comment.ts`
- `routes/`: Define as rotas da API.
  - `userRoutes.ts`
  - `postRoutes.ts`
  - `commentRoutes.ts`
- `prisma/`: Contém o schema do Prisma.
  - `schema.prisma`
- `.env`: Contém as variáveis de ambiente.

### Usuários

- `POST /users/register`: Registrar um novo usuário.
- `POST /users/login`: Fazer login.
- `GET /users`: Listar todos os usuários.

### Posts

- `POST /posts`: Criar um novo post.
- `GET /posts`: Listar todos os posts.

### Comentários

- `POST /comments`: Criar um novo comentário.
- `GET /comments/:post_id`: Listar todos os comentários de um post.

## Configuração

1. Execute `npm install` para instalar as dependências.
2. Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

   ```plaintext
   DATABASE_URL="file:./dev.db"
   JWT_SECRET="mysecret"
