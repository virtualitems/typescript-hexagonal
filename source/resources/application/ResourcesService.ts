// Libraries

// Same Shared Module Layer

import Service from '../../shared/application/services/Service';

import type Repository from '../../shared/application/repositories/Repository';
import type IDeletableRepository from '../../shared/application/repositories/IDeletableRepository';
import type IReadableRepository from '../../shared/application/repositories/IReadableRepository';
import type IStorableRepository from '../../shared/application/repositories/IStorableRepository';
import type IUpdatableRepository from '../../shared/application/repositories/IUpdatableRepository';

// Lower Shared Module Layers

import NumericValueObject from '../../shared/domain/value-objects/NumericValueObject';
import SlugValueObject from '../../shared/domain/value-objects/SlugValueObject';
import StringValueObject from '../../shared/domain/value-objects/StringValueObject';

// Other Modules

// Same Layer

// Lower Layers

import Resource from '../domain/Resource';

// Types

// Interfaces

// Constants


/**
 * @description 
 */
export default class ResourcesService extends Service
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

  public static createResource(slug: string, name: string, price: number): Resource
  {
    const entityID = SlugValueObject.from(slug);
    const entityName = StringValueObject.from(name);
    const entityPrice = NumericValueObject.from(price);

    return new Resource(entityID, entityName, entityPrice);
  }

  public static async all(repository: Repository & IReadableRepository<Iterable<Resource>>): Promise<Iterable<Resource>>
  {
    return await repository.all();
  }

  public static async store(repository: Repository & IStorableRepository, resource: Resource): Promise<void>
  {
    await repository.store(resource);
  }

  public static async update(repository: Repository & IUpdatableRepository, resource: Resource, data: Partial<Resource>): Promise<void>
  {
    await repository.update(resource, data);
  }

  public static async delete(repository: Repository & IDeletableRepository, resource: Resource): Promise<void>
  {
    await repository.delete(resource);
  }

  // protected static METHODS

  // private static METHODS

} //:: class
