// Libraries

// Same Shared Module Layer

// Lower Shared Module Layers

// Other Modules

// Same Layer

// Lower Layers

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


export default {
  routes
};
