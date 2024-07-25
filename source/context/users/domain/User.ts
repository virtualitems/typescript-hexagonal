// Libraries

// Same Shared Module Layer

import EmailValueObject from '../../../shared/domain/value-objects/EmailValueObject';
import Entity from '../../../shared/domain/Entity';

import SlugValueObject from '../../../shared/domain/value-objects/SlugValueObject';
import StringValueObject from '../../../shared/domain/value-objects/StringValueObject';

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
export default class User extends Entity
{

  [property: string | symbol]: unknown;

  // public ATTRIBUTES

  public email?: EmailValueObject;

  public name?: StringValueObject;

  // protected ATTRIBUTES

  protected _id?: SlugValueObject;

  protected _slug?: SlugValueObject;

  // private ATTRIBUTES

  // public static ATTRIBUTES

  // protected static ATTRIBUTES

  // private static ATTRIBUTES

  // Constructor, Getters, Setters

  public constructor()
  {
    super();
  }

  public override get id(): SlugValueObject | undefined
  {
    return this._id;
  }

  public override set id(value: SlugValueObject | undefined)
  {
    this._id = value;
  }

  public override get slug(): SlugValueObject | undefined
  {
    return this._slug;
  }

  public override set slug(value: SlugValueObject | undefined)
  {
    this._slug = value;
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
