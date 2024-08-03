// Libraries

// Shared Module

import UseCase from '@shared/application/UseCase';

// Other Modules

// Same Layer

import type UsersRepository from './UsersRepository';
import type CreateUserDTO from './CreateUserDTO';

// Lower Layers

import UsersService from '../domain/UsersService';

// Types

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

  protected _repository: UsersRepository;

  // private ATTRIBUTES

  // public static ATTRIBUTES

  // protected static ATTRIBUTES

  // private static ATTRIBUTES

  // Constructor, Getters, Setters

  public constructor(repository: UsersRepository)
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
