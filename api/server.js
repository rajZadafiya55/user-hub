import jsonServer from 'json-server';

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = jsonServer.create();
// Path to the db.json file
const router = jsonServer.router(path.join(__dirname, '../db.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);
// Re-route /api/* to /* so the router handles it correctly
server.use(jsonServer.rewriter({
  '/api/*': '/$1',
}));
server.use(router);

export default server;
