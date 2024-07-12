// Libraries

import { type Request, type Response } from 'express';

// Same Shared Module Layer

import InMemoryDatabaseManager from '../../shared/adapters/repositories/InMemoryDatabaseManager';

// Lower Shared Module Layers

// Other Modules

// Same Layer

// Lower Layers

import ResourcesRepository from '../application/ResourcesRepository';
import ResourcesService from '../application/ResourcesService';

import type Resource from '../domain/Resource';

// Types

// Interfaces

// Constants


/**
 * @description 
 */
export default class ResourcesExpressController
{

  // public ATTRIBUTES

  // protected ATTRIBUTES

  // private ATTRIBUTES

  // public static ATTRIBUTES

  // protected static ATTRIBUTES

  // private static ATTRIBUTES

  // Constructor, Getters, Setters

  // public METHODS

  // protected METHODS

  // private METHODS

  // public static METHODS

  public static async test(_: Request, res: Response)
  {
    const res1 = ResourcesService.create('1', 200);
    const res2 = ResourcesService.create('2', 200);

    const mgr = new InMemoryDatabaseManager<Resource>([]);
    const rep = new ResourcesRepository(mgr);

    await ResourcesService.store(rep, [res1, res2]);

    const resources = await ResourcesService.all(rep);

    res.json(resources.map(res => res.flatten()));
  }

  // protected static METHODS

  // private static METHODS

} //:: class
