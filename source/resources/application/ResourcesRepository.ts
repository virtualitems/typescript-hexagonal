// Libraries

// Same Shared Module Layer

import Repository from '../../shared/application/repositories/Repository';
import IStorable from '../../shared/application/repositories/IStorable';
import IDeletable from '../../shared/application/repositories/IDeletable';
import IFilterable from '../../shared/application/repositories/IFilterable';
import IReadable from '../../shared/application/repositories/IReadable';
import IUpdatable from '../../shared/application/repositories/IUpdatable';

import type DatabaseManager from '../../shared/application/repositories/DatabaseManager';

// Lower Shared Module Layers

import type Resource from '../domain/Resource';

// Other Modules

// Same Layer

// Lower Layers

// Types

type TDatabaseManager = (
  DatabaseManager &
  IStorable &
  IDeletable &
  IFilterable<Resource[]> &
  IReadable<Resource[]> &
  IUpdatable
);

// Interfaces

// Constants


/**
 * @description 
 */
export default class ResourcesRepository
  extends Repository<TDatabaseManager>
  implements IStorable, IDeletable, IFilterable, IReadable, IUpdatable
{

  // public ATTRIBUTES

  // protected ATTRIBUTES

  // private ATTRIBUTES

  // public static ATTRIBUTES

  // protected static ATTRIBUTES

  // private static ATTRIBUTES

  // Constructor, Getters, Setters

  public constructor(manager: TDatabaseManager)
  {
    super(manager);
  }

  // public METHODS

  public async all(): Promise<Resource[]>
  {
    this._manager.connect();
    const data = await this._manager.all();
    this._manager.disconnect();
    return data;
  }

  public async filter(query: Partial<Resource>): Promise<Resource[]>
  {
    this._manager.connect();
    const data = await this._manager.filter(query);
    this._manager.disconnect();
    return data;
  }

  public async store(data: Resource): Promise<void>
  {
    this._manager.connect();
    this._manager.store(data);
    this._manager.disconnect();
  }

  public async update(query: Partial<Resource>, data: Partial<Resource>): Promise<void>
  {
    this._manager.connect();
    this._manager.update(query, data);
    this._manager.disconnect();
  }

  public async delete(query: Partial<Resource>): Promise<void>
  {
    this._manager.connect();
    this._manager.delete(query);
    this._manager.disconnect();
  }

  // protected METHODS

  // private METHODS

  // public static METHODS

  // protected static METHODS

  // private static METHODS

} //:: class
