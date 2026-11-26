# Registros de Uso de IA

## Descrição do Projeto

Este projeto consiste no desenvolvimento de um backend para o gerenciamento de registros de uso de Inteligência Artificial (IA). O sistema permite cadastrar usuários, registrar informações sobre o uso de sistemas de IA e consultar os níveis de risco.

## Diagrama de Classes

O diagrama de classes do projeto está disponível na pasta `docs`, com o nome `der_uso_ia.png`.

![Diagrama de Classes](docs/der_uso_ia.png)

## Tecnologias Utilizadas

- Node.js
- Express
- MySQL
- JavaScript
- Visual Studio Code
- Thunder Client

## Estrutura do Projeto

```text
pbe_uso_ia/
├── db/
│   └── script.sql
├── docs/
│   └── der_uso_ia.png
├── src/
│   ├── controllers/
│   │   ├── usoia.js
│   │   └── usuario.js
│   ├── db.js
│   └── routes.js
├── server.js
├── package.json
├── package-lock.json
└── .gitignore
```

## Funcionalidades

### Usuários
- Cadastrar usuários.
- Listar usuários.
- Buscar usuário por ID.
- Atualizar usuários.
- Excluir usuários.
- Realizar login.

### Registros de Uso de IA
- Cadastrar registros de uso de IA.
- Listar registros.
- Buscar registro por ID.
- Atualizar registros.
- Excluir registros.
- Consultar resumo da quantidade de registros por nível de risco (Baixo, Médio e Alto).

## Banco de Dados

O banco de dados utilizado é o MySQL, com o nome `usos_ia`.

O banco possui duas tabelas principais:

- `usuario`: armazena os dados dos usuários.
- `usoia`: armazena os registros de utilização de Inteligência Artificial.

A tabela `usoia` possui uma chave estrangeira que relaciona cada registro ao usuário responsável.

O script de criação do banco de dados está localizado em `db/script.sql`.

## Como Executar o Projeto

1. Abra a pasta do projeto no Visual Studio Code.
2. Abra o terminal.
3. Instale as dependências:

```bash
npm install
```

4. Configure a conexão com o banco de dados no arquivo `src/db.js`.
5. Execute o projeto:

```bash
npm run dev
```

6. O
