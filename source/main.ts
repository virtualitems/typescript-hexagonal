import { program } from 'commander';
import express from 'express';
import resources from './resources';


function cli(argv: string[])
{

  program.option('-t, --test', 'testing flow');

  program.parse(argv);

  resources.cli.test().then(console.log);

}


function web() {

  const app = express();

  const routes = resources.web.routes('/resources');

  app.get(routes.test.url, routes.test.handler);

  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });

}


if (process.argv.length <= 2) {
  web();
} else {
  cli(process.argv);
}
