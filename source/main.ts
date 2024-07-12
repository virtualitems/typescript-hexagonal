import express from 'express';
import resources from './resources';

const app = express();

const routes = resources.routes('/resources');

app.get(routes.test.url, routes.test.handler);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});