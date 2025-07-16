const jsonServer = require('json-server');

const data = require('./mocks/data.json');
const routes = require('./mocks/routes.json');

const server = jsonServer.create();
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.rewriter(routes));
server.use(router);

server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-type, Accept");
    next();
});

server.listen(3200, () => {
    console.log('Servidor rodando na porta 3200, acesse o link http://localhost:3200');
});
