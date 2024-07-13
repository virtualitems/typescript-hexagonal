// Libraries

import { type Request, type Response } from 'express';

// Same Shared Module Layer

import SQLiteDatabaseManager from '../../shared/adapters/databases/SQLiteDatabaseManager';

// Lower Shared Module Layers

// Other Modules

// Same Layer

// Lower Layers

import RelationalResourcesRepository from '../application/RelationalResourcesRepository';

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
    const sqliteManager = new SQLiteDatabaseManager('resources.db');
    const sqliteRepository = new RelationalResourcesRepository(sqliteManager);

    const resources = await sqliteRepository.all();

    res.json(Array.from(resources).map(res => res.flatten()));
  }

  // protected static METHODS

  // private static METHODS

} //:: class
