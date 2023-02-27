# Backend Chronicle

## Pre requisites

- Docker and docker-compose
- Node JS
- NPM

## Getting Started

```sh
  git clone <repo>
  cd <repo>
  npm i
```

```sh
  cd docker
  docker-compose up -d
```

```sh
  npm run dev
```

Para conectar com o pgAdmin, o IP do banco é obtido com:

```sh
  docker inspect <nome-do-container-do-banco>
```

- pgAdmin em localhost:81
- Banco PostgreSQL em localhost:5432
- API em localhost:8080