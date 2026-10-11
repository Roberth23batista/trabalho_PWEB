# API REST - Usuários, Despesas e Agendamentos

API REST com operações de **CRUD** (criar, listar, atualizar e apagar) para 3 entidades relacionadas: **Usuários**, **Despesas** e **Agendamentos**.

**Tecnologias:** Node.js, Express, Sequelize e SQLite.

**Integrantes:**
- Roberth Batista da Silva
- Marcello Otávio Soares dos Santos

---

## Estrutura do projeto

```
trabalho_pweb/
├── database.sqlite          # banco SQLite (criado automaticamente)
├── package.json
├── README.md
└── src/
    ├── app.js               # ponto de entrada do servidor
    ├── database.js          # configuração do Sequelize
    ├── models/
    │   ├── index.js         # associações entre os models
    │   ├── Usuario.js
    │   ├── Despesa.js
    │   └── Agendamento.js
    ├── rotas/
    │   ├── usuarios.js
    │   ├── despesas.js
    │   └── agendamentos.js
    └── comandos/
        ├── criar.js
        ├── listar.js
        ├── atualizar.js
        └── apagar.js
```

## Como executar

**Pré-requisito:** Node.js instalado.

```bash
# 1. Instalar as dependências
npm install

# 2. Iniciar o servidor
node src/app.js
```

O servidor sobe em **http://localhost:3000** (use `http`, não `https`).
As tabelas são criadas automaticamente na primeira execução (`sequelize.sync()`).

## Modelos de dados

### Usuario
| Campo | Tipo    | Obrigatório | Observação     |
|-------|---------|-------------|----------------|
| id    | Inteiro | automático  | chave primária |
| nome  | String  | sim         |                |
| email | String  | sim         | único          |

### Despesa
| Campo     | Tipo    | Obrigatório | Observação                     |
|-----------|---------|-------------|--------------------------------|
| id        | Inteiro | automático  | chave primária                 |
| consulta  | String  | sim         | descrição da consulta          |
| valor     | Float   | sim         |                                |
| idUsuario | Inteiro | -           | chave estrangeira para Usuario |

### Agendamento
| Campo      | Tipo    | Obrigatório | Observação                     |
|------------|---------|-------------|--------------------------------|
| id         | Inteiro | automático  | chave primária                 |
| nome       | String  | sim         |                                |
| nomeMedico | String  | sim         |                                |
| idUsuario  | Inteiro | -           | chave estrangeira para Usuario |

## Relacionamentos

- Um **Usuário** possui várias **Despesas** (1:N).
- Um **Usuário** possui vários **Agendamentos** (1:N).
- Ao apagar um usuário, suas despesas e agendamentos também são apagados (`ON DELETE CASCADE`).

## Endpoints

Todos os endpoints recebem e retornam **JSON**.

| Método | Rota                | Descrição                                   |
|--------|---------------------|---------------------------------------------|
| GET    | `/usuarios`         | Lista todos os usuários                     |
| POST   | `/usuarios`         | Cria um usuário                             |
| PUT    | `/usuarios/:id`     | Atualiza um usuário                         |
| DELETE | `/usuarios/:id`     | Apaga um usuário                            |
| GET    | `/despesas`         | Lista todas as despesas (com o usuário)     |
| POST   | `/despesas`         | Cria uma despesa                            |
| PUT    | `/despesas/:id`     | Atualiza uma despesa                        |
| DELETE | `/despesas/:id`     | Apaga uma despesa                           |
| GET    | `/agendamentos`     | Lista todos os agendamentos (com o usuário) |
| POST   | `/agendamentos`     | Cria um agendamento                         |
| PUT    | `/agendamentos/:id` | Atualiza um agendamento                     |
| DELETE | `/agendamentos/:id` | Apaga um agendamento                        |

## Exemplos de uso

### Criar usuário

`POST /usuarios`

```json
{
  "nome": "Maria Silva",
  "email": "maria@email.com"
}
```

Resposta `201 Created`:

```json
{
  "mensagem": "Usuário criado com sucesso",
  "item": {
    "id": 1,
    "nome": "Maria Silva",
    "email": "maria@email.com",
    "createdAt": "2025-01-01T12:00:00.000Z",
    "updatedAt": "2025-01-01T12:00:00.000Z"
  }
}
```

### Criar despesa

`POST