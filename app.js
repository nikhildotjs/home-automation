import Express from 'express';
import { Server } from 'http';
import routes from './src/routes'

// Create a new express app
let app = Express();

// Set up routing
routes.configure(app);

const server = new Server(app);
const port = process.env.PORT || 3000;
server.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.info(`Server running on http://localhost:${port}`);
});