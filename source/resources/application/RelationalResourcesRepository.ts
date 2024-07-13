// Libraries

// Same Shared Module Layer

import Repository from '../../shared/application/repositories/Repository';
import IStorableRepository from '../../shared/application/repositories/IStorableRepository';
import IDeletableRepository from '../../shared/application/repositories/IDeletableRepository';
import IFilterableRepository from '../../shared/application/repositories/IFilterableRepository';
import IReadableRepository from '../../shared/application/repositories/IReadableRepository';
import IUpdatableRepository from '../../shared/application/repositories/IUpdatableRepository';

import type SQLiteDatabaseManager from '../../shared/adapters/databases/SQLiteDatabaseManager';

// Lower Shared Module Layers

import Resource from '../domain/Resource';

import SlugValueObject from '../../shared/domain/value-objects/SlugValueObject';
import StringValueObject from '../../shared/domain/value-objects/StringValueObject';
import NumericValueObject from '../../shared/domain/value-objects/NumericValueObject';

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
    RelationalResourcesRepository
  extends
    Repository<SQLiteDatabaseManager>
  implements
    IDeletableRepository,
    IFilterableRepository,
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

  public constructor(manager: SQLiteDatabaseManager)
  {
    super(manager);
  }

  // public METHODS

  public async all(): Promise<Iterable<Resource>>
  {
    this._manager.connect();

    const rawDataIterable = await this._manager.query('SELECT * FROM resources');

    const rawDataList = Array.from(rawDataIterable) as (
      Array<{ id: number; slug: string; name: string; price: number }>
    );

    const data = rawDataList.map((rawData) => {
      return new Resource(
        SlugValueObject.from(rawData.slug),
        StringValueObject.from(rawData.name),
        NumericValueObject.from(rawData.price)
      );
    });

    this._manager.disconnect();

    return data;
  }

  public async filter(_query: Partial<Resource>): Promise<Iterable<Resource>>
  {
    throw new Error('Method not implemented.');
  }

  public async store(_data: Resource): Promise<void>
  {
    throw new Error('Method not implemented.');
  }

  public async update(_query: Partial<Resource>, _data: Partial<Resource>): Promise<void>
  {
    throw new Error('Method not implemented.');
  }

  public async delete(_query: Partial<Resource>): Promise<void>
  {
    throw new Error('Method not implemented.');
  }

  // protected METHODS

  // private METHODS

  // public static METHODS

  // protected static METHODS

  // private static METHODS

} //:: class
