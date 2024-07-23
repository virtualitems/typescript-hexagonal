// Libraries

// Same Shared Module Layer

import UseCase from '../../shared/application/UseCase';

import type Repository from '../../shared/application/repositories/Repository';
import type IStorableRepository from '../../shared/application/repositories/IStorableRepository';

// Lower Shared Module Layers

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
export default class CreateResourcesUseCase extends UseCase
{

  // public ATTRIBUTES

  // protected ATTRIBUTES

  // private ATTRIBUTES

  // public static ATTRIBUTES

  // protected static ATTRIBUTES

  // private static ATTRIBUTES

  // Constructor, Getters, Setters

  // public METHODS

  public override async execute(repository: Repository & IStorableRepository, resource: Resource): Promise<void>
  {
    await repository.store(resource);
  }

  // protected METHODS

  // private METHODS

  // public static METHODS

  // protected static METHODS

  // private static METHODS

} //:: class
