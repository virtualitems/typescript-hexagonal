// Libraries

// Shared Module

import type DataManager from '@shared/application/data/DataManager';

import Repository from '@shared/application/data/Repository';

// Other Modules

// Same Layer

import type IUsersDataManager from './IUsersDataManager';

// Lower Layers

import type User from '../domain/User';

import UsersService from '../domain/UsersService';

// Types

type TManager = DataManager & IUsersDataManager;

// Interfaces

// Constants


/**
 * @description 
 */
export default
  class
    UsersRepository
  extends
    Repository<TManager>
{

  [property: string | symbol]: unknown;

  // public ATTRIBUTES

  // protected ATTRIBUTES

  // private ATTRIBUTES

  // public static ATTRIBUTES

  // protected static ATTRIBUTES

  // private static ATTRIBUTES

  // Constructor, Getters, Setters

  public constructor(manager: TManager)
  {
    super(manager);
  }

  // public METHODS

  public async all(): Promise<Iterable<User>>
  {
    await this._manager.connect();
    const query = await this._manager.all();
    const data = Array.from(query).map(UsersService.createUser);
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
