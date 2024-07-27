// Libraries

// Same Shared Module Layer

import IStorable from '@shared/application/data/IStorable';
import Repository from '@shared/application/data/Repository';
import UseCase from '@shared/application/UseCase';

// Lower Shared Module Layers

// Other Modules

// Same Layer

import CreateUserDTO from '@context/users/application/CreateUserDTO';

// Lower Layers

import UsersService from '@context/users/domain/UsersService';

// Types

type TRepository = Repository & IStorable;

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
    const data = {
      slug: (dto.slug === undefined ? undefined : Symbol.for(dto.slug)),
      name: dto.name,
      email: dto.email
    };

    const entity = UsersService.createUser(data);
    await this._repository.store(entity);
  }

  // protected METHODS

  // private METHODS

  // public static METHODS

  // protected static METHODS

  // private static METHODS

} //:: class
