// Libraries

// Same Shared Module Layer

import Entity from '../../shared/domain/Entity';

import NumericValueObject from '../../shared/domain/value-objects/NumericValueObject';
import SlugValueObject from '../../shared/domain/value-objects/SlugValueObject';
import StringValueObject from '../../shared/domain/value-objects/StringValueObject';

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
export default class Resource extends Entity
{

  // public ATTRIBUTES

  // protected ATTRIBUTES

  protected readonly _slug: SlugValueObject;

  protected _name: StringValueObject;

  protected _price: NumericValueObject;

  // private ATTRIBUTES

  // public static ATTRIBUTES

  // protected static ATTRIBUTES

  // private static ATTRIBUTES

  // Constructor, Getters, Setters
  public constructor(slug: SlugValueObject, name: StringValueObject, price: NumericValueObject)
  {
    super();
    this._slug = slug;
    this._name = name;
    this._price = price;
  }

  public get slug(): SlugValueObject
  {
    return this._slug;
  }

  public get name(): StringValueObject
  {
    return this._name;
  }

  public set name(name: StringValueObject)
  {
    this._name = name;
  }

  public get price(): NumericValueObject
  {
    return this._price;
  }

  public set price(price: NumericValueObject)
  {
    this._price = price;
  }

  // public METHODS

  public override equals(other: Resource): boolean
  {
    return this._slug.equals(other.slug);
  }

  public override flatten(): Record<string, any>
  {
    return {
      id: this._slug.value,
      name: this._name.value,
      price: this._price.value
    };
  }

  public override toString(): string
  {
    return String({
      id: this._slug.toString(),
      name: this._name.toString(),
      price: this._price.toString()
    });
  }

  // protected METHODS

  // private METHODS

  // public static METHODS

  // protected static METHODS

  // private static METHODS

} //:: class
