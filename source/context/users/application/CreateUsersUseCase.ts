// Libraries

// Same Shared Module Layer

import UseCase from '../../../shared/application/UseCase';

import type Repository from '../../../shared/application/repositories/Repository';
import type IStorableRepository from '../../../shared/application/repositories/IStorableRepository';

// Lower Shared Module Layers

// Other Modules

// Same Layer

import CreateUserDTO from './CreateUserDTO';
import UsersService from '../domain/UsersService';

// Lower Layers

// Types

// Interfaces

// Constants


/**
 * @description 
 */
export default class CreateUsersUseCase extends UseCase
{

  // public ATTRIBUTES

  // protected ATTRIBUTES

  protected _repository: Repository & IStorableRepository;

  // private ATTRIBUTES

  // public static ATTRIBUTES

  // protected static ATTRIBUTES

  // private static ATTRIBUTES

  // Constructor, Getters, Setters

  public constructor(repository: Repository & IStorableRepository)
  {
    super();
    this._repository = repository;
  }

  // public METHODS

  public override async execute(dto: CreateUserDTO): Promise<void>
  {
    const entity = UsersService.createUser(dto.slug, {name: dto.name, email: dto.email});
    await this._repository.store(entity);
  }

  // protected METHODS

  // private METHODS

  // public static METHODS

  // protected static METHODS

  // private static METHODS

} //:: class
