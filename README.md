# Task Management App

A MERN application for managing tasks.

![image](https://github.com/ratnasree-ghosh/task-management-app/assets/86732136/276d7019-6334-493a-9182-32c1aa5b8270)

Editing Tasks-

![task-img-2](https://github.com/ratnasree-ghosh/task-management-app/assets/86732136/c3e1df53-6dba-4868-8bbc-1f8618ac15ab)

User Login Page-

![task-img-3](https://github.com/ratnasree-ghosh/task-management-app/assets/86732136/197c2e1b-4b93-4f10-94cc-e86ce237f114)

User Signup Page-

![task-img-4](https://github.com/ratnasree-ghosh/task-management-app/assets/86732136/ed8560a9-86a5-4f28-b771-fc03f325cd55)

## Table of Contents!

- [Demo User](#demo-user-credentials)
- [Features](#features)
- [Tools and Technologies](#tools-and-technologies)
- [Dependencies](#dependencies)
- [Prerequisites](#prerequisites)
- [Installation and setup](#installation-and-setup)
- [Backend API](#backend-api)
- [frontend pages](#frontend-pages)
- [npm scripts](#npm-scripts)
- [Useful Links](#useful-links)
- [Contact](#contact)


## Demo user Credentials
- website- https://task-management-app-liard.vercel.app/
- username- demo1234
- password- 12345678

## Features

### User-side features

- Signup
- Login
- Logout
- Add tasks
- View tasks
- Update tasks
- Delete tasks

### Developer-side features

- Form validations in frontend and backend
- Fully Responsive Navbar
- Token based Authentication
- Relevant redirects
- Global user state using Redux
- Custom Loaders
- Use of layout component for pages
- Use of theme colors
- some external css file and used Material UI
- Dynamic document titles
- Redirect to home page after login
- Use of various React hooks
- Routes protection
- Middleware for verifying the user in backend
- Use of different HTTP status codes for sending responses
- Standard pratices followed

## Tools and Technologies

- HTML
- CSS
- Javascript
- Material UI
- Node.js
- Express.js
- React
- Redux
- Mongodb

## Dependencies

Following are the major dependencies of the project:

- axios
- react
- react-dom
- react-redux
- react-router-dom
- redux
- bcrypt
- cors
- dotenv
- express
- jsonwebtoken
- mongoose
- cookie-parser
- crypto-js


## Prerequisites

- Node.js must be installed on the system.
- You should have a MongoDB database.
- You should have a code editor (preferred: VS Code)

## Installation and Setup

1. Install all the dependencies

   ```sh
   yarn 
   ```

2. Create a file named ".env" inside the backend folder. In that .env file there will be PORT,TOKEN_SECRET_KEY,PASSWORD_SECRET_KEY,MONGODB_URL you need to assign.

3. Start the application

   ```sh
   yarn start
   ```

4. Go to http://localhost:3000

## Backend API

<pre>
- POST     auth/signup
- POST     auth/login
- POST     auth/verify-token
- POST     boards/${boardId}/sections
- PUT      boards/${boardId}/sections/${sectionId}
- DELETE   boards/${boardId}/sections/${sectionId}
- POST     boards/${boardId}/tasks
- PUT      boards/${boardId}/tasks/update-position
- DELETE   boards/${boardId}/tasks/${taskId}
- PUT      boards/${boardId}/tasks/${taskId}
- GET      boards
- GET      boards/${id}
- GET      boards/favourites
- PUT      boards
- PUT      boards/${id}
- DELETE   boards/${id}
- POST     boards

</pre>

## Frontend pages

<pre>
- /                 
- /signup           
- /login            
- /boards            
- boards/:boardId    
</pre>

## npm scripts


Inside frontend folder:

- `yarn start`: Starts frontend in development mode
- `yarn run build`: Builds the frontend for production to the build folder
- `yarn test`: Launches the test runner in the interactive watch mode
- `yarn run eject`: This will remove the single build dependency from the frontend.

Inside backend folder:

- `yarn start`: Starts backend using nodemon.

## Useful Links

- This project

  - Github Repo: https://github.com/ratnasree-ghosh/task-management-app

- Official Docs

  - Reactjs docs: https://reactjs.org/docs/getting-started.html
  - npmjs docs: https://classic.yarnpkg.com/lang/en/docs/
  - Mongodb docs: https://docs.mongodb.com/manual/introduction/
  - Github docs: https://docs.github.com/en/get-started/quickstart/hello-world


- Download links

  - Nodejs download: https://nodejs.org/
  - VS Code download: https://code.visualstudio.com/

- Cheatsheets
  - Git cheatsheet: https://education.github.com/git-cheat-sheet-education.pdf
  - VS Code keyboard shortcuts: https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf
  - CSS Selectors Cheatsheet: https://frontend30.com/css-selectors-cheatsheet/

## Contact

- Email: ghoshratnasree817@gmail.com
- Linkedin: https://www.linkedin.com/in/ratnasree-ghosh-302460216/
