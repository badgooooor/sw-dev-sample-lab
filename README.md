# sw-dev-sample-lab
An example lab for Software Development Process. The main objective if for experimenting building frontend page for login and understanding concept of software development in both frontend and backend.
The code in the lab is a full backend API for user registration and login and an example frontend registration and login (which is left empty for all of you to fill the page and try to do some login!)

## Prerequisite (install before running both of it!)
- MySQL database (with a database named "swDevLab" created)
- Node and npm

## Installation
- Enter frontend folder and run "npm install"
- Enter backend folder and run "npm install", then change parameter for database in app.js file (line 12-18)

## Running for development
Frontend side, you can run with "npm run start", the port will be available at localhost:3000
Backend side, you can run with "node app.js", the port will be available at localhost:5000

## References for implementation
- React Hooks Quick Refs (https://www.codenothing.co/blogs/react-hook-in-3-minutes/)
- Example of React Hook in a form (for entry -- please try with useState as a Register.js component first) (https://rangle.io/blog/simplifying-controlled-inputs-with-hooks/)
- Axios for sending requests to backend (https://kapeli.com/cheat_sheets/Axios.docset/Contents/Resources/Documents/index)
