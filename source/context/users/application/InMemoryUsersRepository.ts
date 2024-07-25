// Libraries

// Same Shared Module Layer

import Repository from '../../../shared/application/repositories/Repository';

import type InMemoryDataManager from '../../../shared/application/data/InMemoryDataManager';

// Lower Shared Module Layers

import type User from '../domain/User';

// Other Modules

// Same Layer

// Lower Layers

// Types

// Interfaces

// Constants


/**
 * @description 
 */
export default class InMemoryUsersRepository extends Repository<InMemoryDataManager>
{

  [property: string | symbol]: unknown;

  // public ATTRIBUTES

  // protected ATTRIBUTES

  protected readonly _database: User[];

  // private ATTRIBUTES

  // public static ATTRIBUTES

  // protected static ATTRIBUTES

  // private static ATTRIBUTES

  // Constructor, Getters, Setters

  public constructor(manager: InMemoryDataManager, database: User[])
  {
    super(manager);
    this._database = database;
  }

  // public METHODS

  public async all(): Promise<Iterable<Record<string, unknown>>>
  {
    await this._manager.connect(this._database);
    const query = await this._manager.all();
    await this._manager.disconnect();
    return query;
  }

  public async store(data: User): Promise<void>
  {
    await this._manager.connect(this._database);
    await this._manager.store(data.flatten());
    await this._manager.disconnect();
  }

  public async update(target: User, data: User): Promise<void>
  {
    await this._manager.connect(this._database);
    await this._manager.update(target.flatten(), data.flatten());
    await this._manager.disconnect();
  }

  public async delete(target: User): Promise<void>
  {
    await this._manager.connect(this._database);
    await this._manager.delete(target.flatten());
    await this._manager.disconnect();
  }

  // protected METHODS

  // private METHODS

  // public static METHODS

  // protected static METHODS

  // private static METHODS

} //:: class
