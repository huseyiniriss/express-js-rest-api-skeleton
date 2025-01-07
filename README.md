# Express JS Rest API Skeleton

This is a skeleton for a REST API using Express JS. It includes the following features:
* Sequelize ORM
* Controller, Service, Model structure (Repository pattern)
* Validation using Joi


## Installation

1. run `npm install` to install all dependencies
2. run `npm run dev` to start the server

## Project Structure

```
├── bin
│   └── www
├── config
│   ├── config.json
├── controllers
│   └── user.controller.js
├── migrations
│   ├── 20250105003540-create-users-table.js
├── models
│   └── user.model.js
├── repositories
│   └── user.repository.js
├── routes
│   └── user.routes.js
├── services
│   └── user.service.js
├── validators
│   └── user.validator.js
├── app.js
├── package.json
└── README.md
```

### bin folder
* www: This file is used to start the server

### config folder
* config.json: This file is used to configure the database connection

### controllers folder
* user.controller.js: This file is used to handle the request and response

### migrations folder
* 20250105003540-create-users-table.js: This file is used to create the users table

### models folder
* user.model.js: This file is used to define the user model

### repositories folder
* user.repository.js: This file is used to interact with the database

### routes folder
* user.routes.js: This file is used to define the user routes

### services folder
* user.service.js: This file is used to define the user service

### validators folder
* user.validator.js: This file is used to validate the user input

### app.js
* This file is used to configure the express app

### package.json
* This file is used to define the project dependencies

### README.md
* This file is used to describe the project

## Usage

1. run `npx sequelize-cli db:create` to create the database
2. run `npx sequelize-cli db:migrate` to run the migrations
3. run `npm run dev` to start the server
* The server will start at `http://localhost:3000`

## API Endpoints
* GET `/users`: Get all users
* POST `/users`: Create a new user
* GET `/users/:id`: Get a user by id
* PUT `/users/:id`: Update a user by id
* DELETE `/users/:id`: Delete a user by id

