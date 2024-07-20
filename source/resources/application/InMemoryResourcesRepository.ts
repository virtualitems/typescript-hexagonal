// Libraries

// Same Shared Module Layer

import Repository from '../../shared/application/repositories/Repository';
import IStorableRepository from '../../shared/application/repositories/IStorableRepository';
import IDeletableRepository from '../../shared/application/repositories/IDeletableRepository';
import IReadableRepository from '../../shared/application/repositories/IReadableRepository';
import IUpdatableRepository from '../../shared/application/repositories/IUpdatableRepository';

import type InMemoryDataManager from '../../shared/application/data/InMemoryDataManager';

// Lower Shared Module Layers

import type Resource from '../domain/Resource';

// Other Modules

// Same Layer

// Lower Layers

// Types

// Interfaces

// Constants


/**
 * @description 
 */
export default
  class
    InMemoryResourcesRepository
  extends
    Repository<InMemoryDataManager<Resource>>
  implements
    IDeletableRepository,
    IReadableRepository,
    IStorableRepository,
    IUpdatableRepository
{

  // public ATTRIBUTES

  // protected ATTRIBUTES

  // private ATTRIBUTES

  // public static ATTRIBUTES

  // protected static ATTRIBUTES

  // private static ATTRIBUTES

  // Constructor, Getters, Setters

  public constructor(manager: InMemoryDataManager<Resource>)
  {
    super(manager);
  }

  // public METHODS

  public async all(): Promise<Iterable<Resource>>
  {
    this._manager.connect();
    const data = await this._manager.all();
    this._manager.disconnect();
    return data;
  }

  public async store(data: Resource): Promise<void>
  {
    this._manager.connect();
    this._manager.store(data);
    this._manager.disconnect();
  }

  public async update(target: Resource, data: Partial<Resource>): Promise<void>
  {
    this._manager.connect();
    this._manager.update(target, data);
    this._manager.disconnect();
  }

  public async delete(target: Resource): Promise<void>
  {
    this._manager.connect();
    this._manager.delete(target);
    this._manager.disconnect();
  }

  // protected METHODS

  // private METHODS

  // public static METHODS

  // protected static METHODS

  // private static METHODS

} //:: class
