// Libraries

// Same Shared Module Layer

import IReadable from '../../shared/application/repositories/IReadable';
import IStorable from '../../shared/application/repositories/IStorable';
import Repository from '../../shared/application/repositories/Repository';
import Service from '../../shared/application/services/Service';

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

  public static create(name: string, price: number): Resource
  {
    const entityID = SlugValueObject.fromCurrentDate();
    const entityName = StringValueObject.from(name);
    const entityPrice = NumericValueObject.from(price);

    return new Resource(entityID, entityName, entityPrice);
  }

  public static async all(repository: Repository & IReadable<Resource[]>): Promise<Resource[]>
  {
    return await repository.all();
  }

  public static async store(repository: Repository & IStorable, resources: Resource[]): Promise<void>
  {
    for (const resource of resources) {
      await repository.store(resource);
    }
  }

  // protected static METHODS

  // private static METHODS

} //:: class
