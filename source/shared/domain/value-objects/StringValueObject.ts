// Libraries

// Same Shared Module Layer

import ValueObject from './ValueObject';

// Lower Shared Module Layers

// Types

type T = string;

// Interfaces

// Constants


/**
 * @description 
 */
export default class StringValueObject extends ValueObject
{

  // public ATTRIBUTES

  // protected ATTRIBUTES

  protected readonly _value: T

  // private ATTRIBUTES

  // public static ATTRIBUTES

  // protected static ATTRIBUTES

  // private static ATTRIBUTES

  // Constructor, Getters, Setters

  protected constructor(value: T)
  {
    super();
    this._value = value;
  }

  public override get value(): T
  {
    return this._value;
  }

  // public METHODS

  public override equals(other: StringValueObject): boolean
  {
    return this._value === other.value;
  }

  public override toString(): string
  {
    return this._value;
  }

  // protected METHODS

  // private METHODS

  // public static METHODS

  public static override isValid(value: any): boolean
  {
    return value.constructor === String;
  }

  public static override from(value: T): StringValueObject
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