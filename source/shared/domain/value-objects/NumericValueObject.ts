// Libraries

// Same Shared Module Layer

import ValueObject from './ValueObject';

import ValueError from '../errors/ValueError';

// Lower Shared Module Layers

// Types

type T = number;

// Interfaces

// Constants


/**
 * @description 
 */
export default class NumericValueObject extends ValueObject
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

  public override equals(other: NumericValueObject): boolean
  {
    return this._value === other.value;
  }

  public override toString(): string
  {
    return this._value.toString();
  }

  public isInteger(): boolean
  {
    return Number.isInteger(this._value);
  }

  public isZero(): boolean
  {
    return this._value === 0;
  }

  public isPositive(): boolean
  {
    return this._value > 0;
  }

  public isNegative(): boolean
  {
    return this._value < 0;
  }

  public isOdd(): boolean
  {
    return (this._value & 1) === 1;
  }

  public isEven(): boolean
  {
    return (this._value & 1) === 0;
  }

  public isBetween(min: T, max: T, inclusiveMin = true, inclusiveMax = true): boolean
  {

    if (inclusiveMin && inclusiveMax) {
      return this._value >= min && this._value <= max;
    }

    if (inclusiveMin) {
      return this._value >= min && this._value < max;
    }

    if (inclusiveMax) {
      return this._value > min && this._value <= max;
    }

    return this._value > min && this._value < max;

  }

  // protected METHODS

  // private METHODS

  // public static METHODS

  public static override isValid(value: number): boolean
  {
    return (
      value.constructor === Number
      && !Object.is(value, NaN)
      && !Object.is(value, Infinity)
      && !Object.is(value, -Infinity)
    );
  }

  public static override from(value: T): NumericValueObject
  {
    if (!this.isValid(value)) {
      throw new ValueError(value, this.name);
    }
    return new this(value);
  }

  // protected static METHODS

  // private static METHODS

} //:: class
