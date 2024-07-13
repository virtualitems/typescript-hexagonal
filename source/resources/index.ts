// Libraries

// Same Shared Module Layer

// Lower Shared Module Layers

// Other Modules

// Same Layer

// Lower Layers

import ResourcesCLI from './adapters/ResourcesCLI';
import ResourcesExpressController from './adapters/ResourcesExpressController';

// Types

// Interfaces

// Constants

// Functions

function routes(prefix: string)
{
  return {
    test: {
      url: prefix + '/test',
      handler: ResourcesExpressController.test,
    }
  };
}


const cli = {
  test: ResourcesCLI.test
};


export default {
  web: { routes },
  cli
};
