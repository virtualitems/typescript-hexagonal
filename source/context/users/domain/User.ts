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

  // protected ATTRIBUTES

  protected readonly _slug: SlugValueObject;

  protected _name?: StringValueObject;

  protected _email?: EmailValueObject;

  // private ATTRIBUTES

  // public static ATTRIBUTES

  // protected static ATTRIBUTES

  // private static ATTRIBUTES

  // Constructor, Getters, Setters
  public constructor(slug: SlugValueObject)
  {
    super();
    this._slug = slug;
  }

  public get slug(): SlugValueObject
  {
    return this._slug;
  }

  public get name(): StringValueObject | undefined
  {
    return this._name;
  }

  public set name(value: StringValueObject)
  {
    this._name = value;
  }

  public get email(): EmailValueObject | undefined
  {
    return this._email;
  }

  public set email(value: EmailValueObject)
  {
    this._email = value;
  }

  // public METHODS

  public override equals(other: User): boolean
  {
    return this._slug.equals(other.slug);
  }

  public override flatten(): Record<string, unknown>
  {
    return {
      id: this._slug.value,
      name: this._name?.value,
      email: this._email?.value
    };
  }

  public override toString(): string
  {
    return String({
      id: this._slug.toString(),
      name: this._name?.toString(),
      email: this._email?.toString()
    });
  }

  // protected METHODS

  // private METHODS

  // public static METHODS

  // protected static METHODS

  // private static METHODS

} //:: class
