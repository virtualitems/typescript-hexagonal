// Libraries

// Same Shared Module Layer

import Entity from '@shared/domain/Entity';
import IIdentifiable from '@shared/domain/IIdentifiable';
import ISlugable from '@shared/domain/ISlugable';

import EmailValueObject from '@shared/domain/value-objects/EmailValueObject';
import SymbolValueObject from '@shared/domain/value-objects/SymbolValueObject';
import StringValueObject from '@shared/domain/value-objects/StringValueObject';

// Lower Shared Module Layers

// Other Modules

// Same Layer

// Lower Layers

// Types

// Interfaces

// Constants


/**
 * @description 
 */
export default class User extends Entity implements IIdentifiable, ISlugable
{

  [property: string | symbol]: unknown;

  // public ATTRIBUTES

  public id?: SymbolValueObject;

  public slug?: SymbolValueObject;

  public email?: EmailValueObject;

  public name?: StringValueObject;

  // protected ATTRIBUTES

  // private ATTRIBUTES

  // public static ATTRIBUTES

  // protected static ATTRIBUTES

  // private static ATTRIBUTES

  // Constructor, Getters, Setters

  public constructor()
  {
    super();
  }

  // public METHODS

  public override equals(other: User): boolean
  {

    if (this.id !== undefined && other.id !== undefined && this.id.equals(other.id)) {
      return true;
    }

    if (this.slug !== undefined && other.slug !== undefined && this.slug.equals(other.slug)) {
      return true;
    }

    return false;

  }

  public override flatten(): Record<string, unknown>
  {
    return {
      id: this.id?.value,
      slug: this.slug?.value,
      name: this.name?.value,
      email: this.email?.value
    };
  }

  public override toString(): string
  {
    return String({
      id: this.id?.toString(),
      slug: this.slug?.toString(),
      name: this.name?.toString(),
      email: this.email?.toString()
    });
  }

  // protected METHODS

  // private METHODS

  // public static METHODS

  // protected static METHODS

  // private static METHODS

} //:: class
