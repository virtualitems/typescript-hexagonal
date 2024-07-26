// Libraries

// Same Shared Module Layer

import ValueObject from './ValueObject';

import ValueError from '../errors/ValueError';

// Lower Shared Module Layers

// Types

type T = Date;

// Interfaces

// Constants


/**
 * @description 
 */
export default class DateValueObject extends ValueObject
{

  [property: string | symbol]: unknown;

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

  public override equals(other: DateValueObject): boolean
  {
    return this._value.getTime() === other.value.getTime();
  }

  public override toString(): string
  {
    return this._value.toString();
  }

  public isAfter(other: DateValueObject): boolean
  {
    return this._value > other.value;
  }

  public isBefore(other: DateValueObject): boolean
  {
    return this._value < other.value;
  }

  // protected METHODS

  // private METHODS

  // public static METHODS

  public static override isValid(value: Date): boolean
  {
    return !isNaN(value.getTime());
  }

  public static override from(value: T): DateValueObject
  {
    if (!this.isValid(value)) {
      throw new ValueError(value, this.name);
    }
    return new this(value);
  }

  // protected static METHODS

  // private static METHODS

} //:: class
