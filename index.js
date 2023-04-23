

const jsonServer = require("json-server");
//la siguiente linea es de cors sin este llaman
const cors = require('cors');
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);
//y esta es la 2 linea

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://myfist-json-serve.herokuapp.com/");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
  
});

server.use(cors()); 
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});


