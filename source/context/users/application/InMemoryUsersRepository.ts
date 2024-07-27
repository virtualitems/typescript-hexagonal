// Libraries

// Same Shared Module Layer

import Repository from '../../../shared/application/data/Repository';
import IReadableRepository from '../../../shared/application/data/IReadable';

import type InMemoryDataManager from '../../../shared/application/data/InMemoryDataManager';

// Lower Shared Module Layers

// Other Modules

// Same Layer

// Lower Layers

import UsersService from '../domain/UsersService';

import type User from '../domain/User';

// Types

// Interfaces

// Constants


/**
 * @description 
 */
export default
  class
    InMemoryUsersRepository
  extends
    Repository<InMemoryDataManager>
  implements
    IReadableRepository<Record<string | symbol, unknown>>
{

  [property: string | symbol]: unknown;

  // public ATTRIBUTES

  // protected ATTRIBUTES

  // private ATTRIBUTES

  // public static ATTRIBUTES

  // protected static ATTRIBUTES

  // private static ATTRIBUTES

  // Constructor, Getters, Setters

  public constructor(manager: InMemoryDataManager)
  {
    super(manager);
  }

  // public METHODS

  public async all(): Promise<Iterable<User>>
  {
    await this._manager.connect();
    const query = await this._manager.all();
    const data = Array.from(query).map(raw => UsersService.createUser(raw));
    await this._manager.disconnect();
    return data;
  }

  public async store(data: User): Promise<void>
  {
    await this._manager.connect();
    await this._manager.store(data.flatten());
    await this._manager.disconnect();
  }

  public async update(target: User, data: Record<string, unknown>): Promise<void>
  {
    await this._manager.connect();
    await this._manager.update(target.flatten(), data);
    await this._manager.disconnect();
  }

  public async delete(target: User): Promise<void>
  {
    await this._manager.connect();
    await this._manager.delete(target.flatten());
    await this._manager.disconnect();
  }

  // protected METHODS

  // private METHODS

  // public static METHODS

  // protected static METHODS

  // private static METHODS

} //:: class
