// Libraries

// Same Shared Module Layer

import ArrayDatabaseManager from '../../shared/adapters/databases/ArrayDatabaseManager';

// Lower Shared Module Layers

// Other Modules

// Same Layer

// Lower Layers

import InMemoryResourcesRepository from '../application/InMemoryResourcesRepository';
import ResourcesService from '../application/ResourcesService';

import type Resource from '../domain/Resource';

// Types

// Interfaces

// Constants


/**
 * @description 
 */
export default class ResourcesCLI
{

  // public ATTRIBUTES

  // protected ATTRIBUTES

  // private ATTRIBUTES

  // public static ATTRIBUTES

  // protected static ATTRIBUTES

  // private static ATTRIBUTES

  // Constructor, Getters, Setters

  // public METHODS

  public static async test()
  {
    const res1 = ResourcesService.create('AAA', '1', 100);
    const res2 = ResourcesService.create('BBB', '2', 200);

    const mgr = new ArrayDatabaseManager<Resource>([]);
    const rep = new InMemoryResourcesRepository(mgr);

    await ResourcesService.store(rep, [res1, res2]);

    const data = await ResourcesService.all(rep);

    return data;
  }

  // protected METHODS

  // private METHODS

  // public static METHODS

  // protected static METHODS

  // private static METHODS

} //:: class
