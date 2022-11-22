import next from 'next';
import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import routes from '../routes/';

dotenv.config();
const dev = process.env.NODE_ENV !== 'production';
const domain = process.env.SERVER_DOMAIN;
const apiPath = process.env.API_PATH;
const port = process.env.SERVER_PORT;
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.use(express.json());
    server.use(express.urlencoded({ extended: true }));

    server.use(apiPath, routes);

    server.all('*', (req: Request, res: Response) => {
      return handle(req, res);
    });

    server.listen(port, (err?: any) => {
      if (err) throw err;
      console.log(`> Ready on ${domain}:${port} - env ${process.env.NODE_ENV}`);
    });
  })
  .catch((err: any) => {
    console.error(err);
    process.exit(1);
  });
