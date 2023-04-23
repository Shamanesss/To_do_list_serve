

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router();
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;
// he cambiado el archivo index.js por server.js
index.use(middlewares);
index.use(router);

index.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});


//solucionar Problema con las cors
// const express = require('express');
// const cors = require('cors');

// const app = express();

// app.use(cors({
//   origin: '*',
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   preflightContinue: false,
//   optionsSuccessStatus: 204
// }));


