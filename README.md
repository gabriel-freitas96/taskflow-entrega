# ⚡ TaskFlow

> Sistema web de gerenciamento de projetos e tarefas em equipe, desenvolvido como projeto acadêmico da disciplina de Desenvolvimento Web.

---

## 👥 Integrantes

| Nome   | GitHub             |
|--------|--------------------|
| Gabriel | [@gabriel-freitas96](https://github.com/gabriel-freitas96) |
| Henry   | @henryGaldino      |
| Miguel  | @miguelViana       |
| Erick   | @ericKsm7          |

---

## 📋 Descrição do Sistema

O **TaskFlow** é uma aplicação web voltada para o **gerenciamento de projetos e tarefas no ambiente acadêmico e empresarial**. O sistema permite que times organizem suas atividades de forma centralizada, acompanhem o progresso de cada tarefa, definam responsáveis e prazos, e visualizem os detalhes de cada projeto.

Como diferencial, a aplicação conta com um **Assistente de IA integrado** (powered by Claude da Anthropic), que interpreta os dados dos projetos e auxilia o usuário a tomar decisões de forma mais inteligente — como identificar tarefas atrasadas, sugerir prioridades ou gerar resumos automáticos.

Esta é a **Fase 1** do projeto, com foco no desenvolvimento do frontend. Nenhuma API externa de dados ou banco de dados real foi utilizado nesta fase; os dados são simulados (mockados) diretamente no código.

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão | Finalidade |
|---|---|---|
| **React** | 18.2.0 | Biblioteca principal para construção da UI |
| **React Router DOM** | 6.22.0 | Navegação entre páginas (SPA) |
| **React Scripts** | 5.0.1 | Toolchain de build (Create React App) |
| **CSS Modules / Inline Styles** | — | Estilização por componente |
| **API Claude (Anthropic)** | claude-sonnet-4 | Assistente de IA integrado |
| **Dados Mockados** | — | Simulação do backend |

---

## 🖥️ Telas Desenvolvidas

### 1. 🔐 Login (`/`)
Tela de autenticação do usuário com:
- Formulário com campos de **e-mail** e **senha**
- Validação de campos obrigatórios via atributo `required`
- Redirecionamento para o Dashboard após login
- Link de navegação para a tela de Cadastro

### 2. 📝 Cadastro (`/cadastro`)
Tela de criação de nova conta com:
- Formulário com campos de **nome completo**, **e-mail** e **senha**
- Validação de campos obrigatórios
- Redirecionamento para a tela de Login após cadastro
- Link de navegação de volta para o Login

### 3. 📊 Dashboard (`/dashboard`)
Tela principal após o login com:
- Listagem dos **projetos em cards**
- Cada card exibe o nome e a descrição do projeto
- Botão "Ver Detalhes" que redireciona para a página do projeto
- Navbar de navegação global

### 4. 📁 Detalhes do Projeto (`/projeto/:id`)
Tela de visualização de um projeto específico com:
- Cabeçalho com nome e descrição do projeto
- **Lista de tarefas** do projeto com: título, responsável, prazo e status
- Badge de status (`Em Andamento`, `Concluído`, `Pendente`) com estilo visual diferenciado
- Botão de atalho para criação de nova tarefa

### 5. ➕ Nova Tarefa (`/nova-tarefa`)
Formulário de criação de tarefa com:
- Campos: **título da tarefa**, **responsável** e **prazo**
- Validação de campos obrigatórios
- Botões de **Salvar** (redireciona ao Dashboard) e **Cancelar** (volta à tela anterior)

### 6. 👤 Perfil (`/perfil`)
Tela de perfil do usuário com:
- Exibição do **avatar** com iniciais
- Informações do usuário: nome, e-mail e função
- Dados mockados simulando o usuário logado

### 7. ✨ Assistente de IA (componente flutuante)
Componente disponível globalmente com:
- **Chat interativo** com o modelo Claude da Anthropic
- Contexto dinâmico injetado no prompt com dados reais dos projetos e tarefas
- Sugestões de perguntas rápidas (tarefas atrasadas, resumo dos projetos, prioridades)
- Indicador de digitação animado enquanto aguarda resposta
- Interface flutuante (FAB) que abre/fecha o painel de chat

---

## 📁 Estrutura de Pastas

```
Taskflow/
├── public/
│   └── index.html
├── src/
│   ├── Componentes/
│   │   ├── AIAssistente/
│   │   │   └── AIAssistente.jsx
│   │   ├── Sidebar/
│   │   │   └── Sidebar.jsx
│   │   └── Topbar/
│   │       └── Topbar.jsx
│   ├── data/
│   │   └── initialData.js
│   ├── pages/
│   │   ├── Cadastro.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Login.jsx
│   │   ├── Membros.jsx
│   │   ├── NovaTarefa.jsx
│   │   ├── Perfil.jsx
│   │   └── ProjetoDetalhes.jsx
│   ├── styles/
│   │   └── GlobalStyle.jsx
│   ├── utils/
│   ├── App.jsx
│   └── index.js
├── package-lock.json
├── package.json
└── README.md
```

---

## 🗺️ Rotas da Aplicação

| Rota | Componente | Descrição |
|------|-----------|-----------|
| `/` | `Login` | Tela de autenticação |
| `/cadastro` | `Cadastro` | Cadastro de novo usuário |
| `/dashboard` | `Dashboard` | Visão geral dos projetos |
| `/projeto/:id` | `ProjetoDetalhes` | Detalhes e tarefas de um projeto |
| `/nova-tarefa` | `NovaTarefa` | Formulário para criar nova tarefa |
| `/perfil` | `Perfil` | Perfil do usuário logado |

---

## 🚀 Como Rodar o Projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) v16 ou superior
- npm (incluído com o Node.js)

### Passo a passo

```bash
# 1. Clone o repositório
git clone https://github.com/gabriel-freitas96/taskflow-entrega.git

# 2. Entre na pasta do projeto
cd taskflow-entrega/Taskflow

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm start
```

A aplicação estará disponível em: **http://localhost:3000**

### Credenciais de acesso (dados mockados)

```
E-mail: admin@taskflow.com
Senha:  123456
```

> Qualquer e-mail e senha preenchidos também redirecionam para o Dashboard, pois a autenticação é simulada nesta fase.

---

## 🤖 Assistente de IA — Como Funciona

O componente `AIAssistente` realiza chamadas diretas à [API de Mensagens da Anthropic](https://docs.anthropic.com/pt/api/messages), utilizando o modelo **claude-sonnet-4**.

A cada mensagem enviada pelo usuário, o sistema:

1. Gera um **contexto dinâmico** com os dados atuais dos projetos e tarefas (total, concluídas, atrasadas, responsáveis e prazos)
2. Injeta esse contexto como `system prompt` na requisição
3. Envia o histórico completo da conversa para manter coerência nas respostas
4. Exibe a resposta da IA no painel de chat em tempo real

**Sugestões de perguntas disponíveis:**
- "Quais tarefas estão atrasadas?"
- "Resumo dos meus projetos"
- "O que fazer primeiro hoje?"

---

## 📌 Observações Finais

- Esta é a **Fase 1** do projeto, com foco exclusivo no **frontend**.
- Nenhuma API de dados real ou banco de dados foi utilizado — todos os dados são **mockados** diretamente nos componentes.
- A integração com backend (autenticação real, persistência de dados) será implementada nas próximas fases.
- O componente de IA (`AIAssistente`) **já realiza chamadas reais** à API da Anthropic.

---

<p align="center">Desenvolvido por Gabriel, Henry, Miguel e Erick · 2025/2026</p>
