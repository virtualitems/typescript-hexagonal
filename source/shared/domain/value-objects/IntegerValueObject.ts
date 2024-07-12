// Libraries

// Same Shared Module Layer

import NumericValueObject from './NumericValueObject';

// Lower Shared Module Layers

// Types

type T = number;

// Interfaces

// Constants


/**
 * @description 
 */
export default class IntegerValueObject extends NumericValueObject
{

  // public ATTRIBUTES

  // protected ATTRIBUTES

  // private ATTRIBUTES

  // public static ATTRIBUTES

  // protected static ATTRIBUTES

  // private static ATTRIBUTES

  // Constructor, Getters, Setters

  protected constructor(value: T)
  {
    super(value);
  }

  // public METHODS

  public override equals(other: NumericValueObject): boolean
  {
    return this._value === other.value;
  }

  public override toString(): string
  {
    return this._value.toString();
  }

  // protected METHODS

  // private METHODS

  // public static METHODS

  public static override isValid(value: any): boolean
  {
    return Number.isInteger(value);
  }

  public static override from(value: T): IntegerValueObject
  {
    if (!this.isValid(value))
    {
      throw new Error(`Invalid value ${value?.constructor.name}(${String(value)}) for ${this.name}.`);
    }
    return new this(value);
  }

  // protected static METHODS

  // private static METHODS

} //:: class
