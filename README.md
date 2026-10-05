# 📚 BookWise

Plataforma de descoberta e avaliação de livros desenvolvida com **Next.js, TypeScript e Prisma**.

O BookWise permite explorar livros, visualizar informações detalhadas, consultar avaliações de outros usuários e compartilhar suas próprias experiências através de avaliações.

A aplicação também possui autenticação de usuários, gerenciamento de sessões e integração com banco de dados relacional.

## 🚀 Features

* Autenticação de usuários
* Login utilizando provedores externos
* Sessões persistentes
* Catálogo de livros
* Página de detalhes dos livros
* Avaliações e notas
* Feed com avaliações recentes
* Busca e filtragem de livros
* Livros populares
* Perfil de usuário
* Categorias de livros
* Relacionamento entre usuários, livros e avaliações
* Loading states com Skeleton
* Interface responsiva
* Animações de interface
* Gerenciamento de dados assíncronos

## 🛠️ Technologies

### Front-end

* **Next.js 14**
* **React 18**
* **TypeScript**
* **Tailwind CSS**
* **DaisyUI**
* **Radix UI**
* **Phosphor Icons**

### State & Data Fetching

* **TanStack React Query**
* **React Query Devtools**
* **Axios**
* **React Context API**

### Back-end & Database

* **Next.js API Routes**
* **Prisma ORM**
* **MySQL**

### Authentication

* **NextAuth.js**
* **Prisma Adapter**

### UI & UX

* **React Loading Skeleton**
* **React Content Loader**
* **Auto Animate**
* **Next.js Font Optimization**

## 🧠 Concepts Applied

O projeto envolve diversos conceitos importantes para o desenvolvimento de aplicações Full-Stack modernas:

* Server-side e client-side rendering
* Next.js App Router
* Dynamic Routes
* API integration
* Authentication
* Session management
* OAuth
* ORM
* Relational databases
* Database relationships
* Prisma Client
* Global state management
* Custom Hooks
* Server state management
* Data fetching with React Query
* Loading states
* Componentization
* TypeScript
* Responsive UI
* Separation of responsibilities

## 🏗️ Application Architecture

O projeto utiliza o Next.js como base para integrar diferentes partes da aplicação:

```text
                 ┌────────────────────┐
                 │      Next.js       │
                 │   App Router       │
                 └─────────┬──────────┘
                           │
              ┌────────────┴────────────┐
              │                         │
       ┌──────▼──────┐          ┌───────▼───────┐
       │   React UI  │          │  API / Server  │
       │ Components  │          │    Logic       │
       └──────┬──────┘          └───────┬───────┘
              │                         │
       ┌──────▼────────┐         ┌──────▼───────┐
       │ React Query  │         │    Prisma    │
       │    Axios     │         │     ORM      │
       └──────────────┘         └──────┬───────┘
                                       │
                                ┌──────▼───────┐
                                │    MySQL     │
                                └──────────────┘
```

## 🗃️ Database

O banco de dados utiliza **MySQL**, com o **Prisma ORM** para modelagem e acesso aos dados.

Principais entidades:

```text
User
 │
 ├── Accounts
 ├── Sessions
 └── Ratings
          │
          ▼
         Book
          │
          ▼
       Category
```

### Main Models

* `User` — usuários da aplicação
* `Book` — livros disponíveis
* `Category` — categorias dos livros
* `Rating` — avaliações realizadas pelos usuários
* `Account` — contas vinculadas à autenticação
* `Session` — sessões autenticadas

O relacionamento entre livros e categorias utiliza uma tabela intermediária, permitindo uma relação **many-to-many**.

## 📂 Project Structure

```text
src/
├── app/
│   ├── components/      # Reusable UI components
│   ├── providers/       # Application providers
│   ├── components/      # Application components
│   ├── @types/          # TypeScript types
│   ├── api/             # API-related functionality
│   └── ...
│
├── lib/                 # External service configuration
├── utils/               # Utility functions
│
prisma/
├── schema.prisma        # Database schema
└── seed.ts              # Database seed
```

## ⚙️ Getting Started

### Prerequisites

Before starting, make sure you have installed:

* Node.js
* npm
* MySQL

### Installation

Clone the repository:

```bash
git clone https://github.com/ReinaldoARamos/bookwise-2.0.git
```

Enter the project directory:

```bash
cd bookwise-2.0
```

Install the dependencies:

```bash
npm install
```

### Environment Variables

Create a `.env` file in the root of the project with the required environment variables.

Example:

```env
DATABASE_URL="mysql://USER:PASSWORD@localhost:3306/bookwise"
NEXTAUTH_SECRET="your-secret"
NEXTAUTH_URL="http://localhost:3000"
```

Depending on the authentication configuration, additional provider credentials may also be required.

### Database Setup

Generate the Prisma Client:

```bash
npx prisma generate
```

Run the database migrations:

```bash
npx prisma migrate dev
```

Populate the database using the seed:

```bash
npx prisma db seed
```

### Running the project

Start the development server:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:3000
```

## 📜 Available Scripts

| Command         | Description                   |
| --------------- | ----------------------------- |
| `npm run dev`   | Starts the development server |
| `npm run build` | Creates the production build  |
| `npm run start` | Starts the production server  |
| `npm run lint`  | Runs ESLint                   |

## 🎯 Project Goals

The main goal of BookWise was to build a complete Full-Stack application while working with technologies and concepts commonly found in modern web development.

The project focuses particularly on:

* Building applications with Next.js
* Working with authentication and sessions
* Modeling relational data
* Using Prisma as an ORM
* Connecting an application to MySQL
* Managing asynchronous server state
* Consuming APIs with Axios
* Creating reusable React components
* Building a responsive interface
* Organizing a larger React/Next.js application

## 🔮 Possible Improvements

Some possible future improvements include:

* Book recommendation system
* Advanced search and filtering
* Pagination or infinite scrolling
* Reading lists
* Favorite books
* User statistics
* Rating editing and deletion
* Admin dashboard
* Improved accessibility
* Automated tests
* Better error handling
* Production deployment
* Image optimization and CDN
* More authentication providers

## 👨‍💻 Author

**Reinaldo Aparecido Ramos**

Full-Stack Developer focused on building modern web applications with **React, Next.js, TypeScript and Node.js**.

* GitHub: https://github.com/ReinaldoARamos
* LinkedIn: https://www.linkedin.com/in/reinaldo-aparecido/
