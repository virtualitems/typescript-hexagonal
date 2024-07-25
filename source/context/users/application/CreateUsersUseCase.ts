// Libraries

// Same Shared Module Layer

import IStorableRepository from '../../../shared/application/repositories/IStorableRepository';
import Repository from '../../../shared/application/repositories/Repository';
import UseCase from '../../../shared/application/UseCase';

// Lower Shared Module Layers

// Other Modules

// Same Layer

import CreateUserDTO from './CreateUserDTO';

// Lower Layers

import UsersService from '../domain/UsersService';

// Types

type TRepository = Repository & IStorableRepository;

// Interfaces

// Constants


/**
 * @description 
 */
export default class CreateUsersUseCase extends UseCase
{

  [property: string | symbol]: unknown;

  // public ATTRIBUTES

  // protected ATTRIBUTES

  protected _repository: TRepository;

  // private ATTRIBUTES

  // public static ATTRIBUTES

  // protected static ATTRIBUTES

  // private static ATTRIBUTES

  // Constructor, Getters, Setters

  public constructor(repository: TRepository)
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
