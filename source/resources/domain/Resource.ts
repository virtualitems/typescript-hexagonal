// Libraries

// Same Shared Module Layer

import Entity from '../../shared/domain/entities/Entity';

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

  protected readonly _id: SlugValueObject;

  protected _name: StringValueObject;

  protected _price: NumericValueObject;

  // private ATTRIBUTES

  // public static ATTRIBUTES

  // protected static ATTRIBUTES

  // private static ATTRIBUTES

  // Constructor, Getters, Setters
  public constructor(id: SlugValueObject, name: StringValueObject, price: NumericValueObject)
  {
    super();
    this._id = id;
    this._name = name;
    this._price = price;
  }

  public get id(): SlugValueObject
  {
    return this._id;
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
    return this._id.equals(other.id);
  }

  public override toString(): string
  {
    return String({
      id: this._id.toString(),
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
