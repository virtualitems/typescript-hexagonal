import express from 'express';
import resources from './resources';

const app = express();

const resourcesExpressPlugin = new resources.ResourcesExpressPlugin('/resources');

resourcesExpressPlugin.install(app);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});