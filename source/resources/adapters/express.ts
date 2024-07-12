// Libraries

import { type Application, type Request, type Response } from 'express';

// Same Shared Module Layer

import InMemoryDatabaseManager from '../../shared/adapters/repositories/InMemoryDatabaseManager';

// Lower Shared Module Layers

// Other Modules

// Same Layer

// Lower Layers

import ResourcesRepository from '../application/ResourcesRepository';
import ResourcesService from '../application/ResourcesService';

import Resource from '../domain/Resource';

// Types

// Interfaces

// Constants


/**
 * @description 
 */
export default class ResourcesExpressPlugin
{

  // public ATTRIBUTES

  // protected ATTRIBUTES

  // private ATTRIBUTES

  // public static ATTRIBUTES

  // protected static ATTRIBUTES

  protected readonly _prefix: string;

  // private static ATTRIBUTES

  // Constructor, Getters, Setters

  public constructor(prefix: string)
  {
    this._prefix = prefix;
  }

  get prefix(): string
  {
    return this._prefix;
  }

  // public METHODS

  // protected METHODS

  // private METHODS

  // public static METHODS

  public install(app: Application)
  {
    app.get(this._prefix + '/test', async (_: Request, res: Response) => {

      const res1 = ResourcesService.create('1', 200);
      const res2 = ResourcesService.create('2', 200);

      const mgr = new InMemoryDatabaseManager<Resource>([]);
      const rep = new ResourcesRepository(mgr);

      await ResourcesService.store(rep, [res1, res2]);

      const resources = await ResourcesService.all(rep);

      res.json(resources);
    });
  }

  // protected static METHODS

  // private static METHODS

} //:: class
