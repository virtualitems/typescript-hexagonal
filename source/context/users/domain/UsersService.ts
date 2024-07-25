// Libraries

// Same Shared Module Layer

import EmailValueObject from '../../../shared/domain/value-objects/EmailValueObject';
import SlugValueObject from '../../../shared/domain/value-objects/SlugValueObject';
import StringValueObject from '../../../shared/domain/value-objects/StringValueObject';

// Lower Shared Module Layers

// Other Modules

// Same Layer

import User from './User';

// Lower Layers

// Types

// Interfaces

// Constants


/**
 * @description 
 */
export default class UsersService
{

  [property: string | symbol]: unknown;

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

  public static createUser(slug: string, data?: {name?: string, email?: string}): User
  {
    const entity = new User(SlugValueObject.from(slug));

    if (data === undefined) {
      return entity;
    }

    if (data.name !== undefined) {
      entity.name = StringValueObject.from(data.name);
    }

    if (data.email !== undefined) {
      entity.email = EmailValueObject.from(data.email);
    }

    return entity;
  }

  // protected static METHODS

  // private static METHODS

} //:: class
