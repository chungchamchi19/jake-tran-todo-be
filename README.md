# Overview

[1. Introduction](https://github.com/chungchamchi19/jake-tran-todo-fe?tab=readme-ov-file#1-introduction)
- [Features](https://github.com/chungchamchi19/jake-tran-todo-fe?tab=readme-ov-file#features)
- [Demo](https://github.com/chungchamchi19/jake-tran-todo-fe?tab=readme-ov-file#demo)
- [Source code](https://github.com/chungchamchi19/jake-tran-todo-fe?tab=readme-ov-file#source-code)

[2. Prerequisites](https://github.com/chungchamchi19/jake-tran-todo-fe?tab=readme-ov-file#2-prerequisites)
- [Backend](https://github.com/chungchamchi19/jake-tran-todo-fe?tab=readme-ov-file#backend)
- [Frontend](https://github.com/chungchamchi19/jake-tran-todo-fe?tab=readme-ov-file#frontend)

[3. Installation & Configuration](https://github.com/chungchamchi19/jake-tran-todo-fe?tab=readme-ov-file#3-installation--configuration)
- [Backend Setup](https://github.com/chungchamchi19/jake-tran-todo-fe?tab=readme-ov-file#backend-setup)
- [Frontend Setup](https://github.com/chungchamchi19/jake-tran-todo-fe?tab=readme-ov-file#frontend-setup)

# 1. Introduction

## Features

Task Description:

Develop a basic Todo List application that includes both a front end built with React and a back end API. 

The purpose of this task is to create a simple application that allows users to add, display, and delete todo items.

## Demo

> [Front-end](https://jake-tran-todo-fe.vercel.app/)

> [Back-end](https://jake-tran-todo-be.onrender.com)

## Source code

> [Front-end](https://github.com/chungchamchi19/jake-tran-todo-fe)

> [Back-end](https://github.com/chungchamchi19/jake-tran-todo-be)

# 2. Prerequisites
- Modular architecture with NodeJS, ORM
- Front-end using ReactJS with TailwindCSS for UI styles component
- Cross platform: run it on Windows, Linux, MacOS
- Support Docker out of the box for easy deployment

## Backend
                    
Branch  | Express | TypeORM | Postgres
-------|------ | -------|------
master  | v4.17.1 | v0.3.16 | v16.3

## Frontend
                    
Branch | ReactJS| TailwindCss 
-------| -------|------
master  | v18.2.0 | v3.3.3

# 3. Installation & Configuration

## Backend Setup

### 1. Clone repository and install dependencies
- Clone repository from github
```bash
git clone https://github.com/chungchamchi19/jake-tran-todo-be
```
```bash
cd jake-tran-todo-be
```

### 2. Setup and start application with development mode

Setup a development with Docker.

- copy .env, docker-compose.yml, dockerfile:

```bash
cp .env.local .env && cp docker-compose.dev.yml docker-compose.yml && cp Dockerfile.dev Dockerfile
```

- build container:

```bash
docker-compose build
```

- install dependencies:

```bash
docker-compose run backend yarn install
```

### 3. Running the Application in development mode

```bash
docker-compose up
```

Server is running at http://localhost:5001

### 4. Start test

```bash
docker-compose run backend yarn test --coverage
```

### 5. Setup and start application with production mode

Setup a development with Docker.

- copy .env, docker-compose.yml, dockerfile:

```bash
cp .env.prod .env && cp docker-compose.prod.yml docker-compose.yml && cp Dockerfile.prod Dockerfile
```

- build container:

```bash
docker-compose build
```

- start container

```bash
docker-compose up
```

## 6. Deploy Backend to Render

Check out our [Deploy a Node Express App on Render](https://docs.render.com/deploy-node-express-app) for more details.

## Frontend Setup

### 1. Clone repository and install dependencies

```bash
git clone https://github.com/chungchamchi19/jake-tran-todo-fe
```

```bash
cd jake-tran-todo-fe
```

### 2. Copy env
```bash
cp .env.example .env
```

### 3. Install dependencies
```bash
yarn install
```

## 4. Start application

```bash
yarn dev
```

Run the app in the development mode
Open http://localhost:3000 to view in the browser.

## 5. Run test suite

```bash
yarn test --coverage
```

## 6. Deploy Frontend to Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.