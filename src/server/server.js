import express, { Router } from 'express';
import fetch from 'node-fetch';

export function Server() {
  const app = express();
  const router= Router();

  app.use(express.json());

  router.get('/getTaxis', async (req, res) => {
    const latitude = req.query.latitude;
    const longitude = req.query.longitude;
    const response = await fetch(`https://qa-interview-test.splytech.dev/api/drivers?latitude=${latitude}&longitude=${longitude}&count=5`, {});
    const data = await response.json();
    res.header({"Access-Control-Allow-Origin": "*"});
    res.json(data);
  });

  app.use('/', router);
  return app;
}

function initServer() {
  const port = Number(process.env.PORT) || 4000;
  const server = Server();

  server.listen(port, () => {
    console.log(`listening on port ${port}`);
  });
}

initServer()