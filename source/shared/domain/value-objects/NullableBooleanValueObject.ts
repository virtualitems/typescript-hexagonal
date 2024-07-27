// Libraries

// Same Shared Module Layer

import ValueObject from '@shared/domain/value-objects/ValueObject';

import ValueError from '@shared/domain/errors/ValueError';

// Lower Shared Module Layers

// Types

type T = boolean | null;

// Interfaces

// Constants


/**
 * @description 
 */
export default class NullableBooleanValueObject extends ValueObject
{

  [property: string | symbol]: unknown;

  // public ATTRIBUTES

  public override readonly value: T;

  // protected ATTRIBUTES

  // private ATTRIBUTES

  // public static ATTRIBUTES

  // protected static ATTRIBUTES

  // private static ATTRIBUTES

  // Constructor, Getters, Setters

  protected constructor(value: T)
  {
    super();
    this.value = value;
  }

  // public METHODS

  public override equals(other: NullableBooleanValueObject): boolean
  {
    return this.value === other.value;
  }

  public override toString(): string
  {
    return String(this.value);
  }

  public isIndeterminate(): boolean
  {
    return this.value === null;
  }

  // protected METHODS

  // private METHODS

  // public static METHODS

  public static override isValid(value: unknown): boolean
  {
    return (value === null) || (value === true) || (value === false);
  }

  public static from(value: T): NullableBooleanValueObject
  {
    if (!this.isValid(value)) {
      throw new ValueError(value, this.name);
    }
    return new this(value);
  }

  // protected static METHODS

  // private static METHODS

} //:: class
