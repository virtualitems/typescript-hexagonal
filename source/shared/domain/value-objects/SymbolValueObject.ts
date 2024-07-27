// Libraries

// Same Shared Module Layer

import ValueObject from '@shared/domain/value-objects/ValueObject';

import ValueError from '@shared/domain/errors/ValueError';

// Lower Shared Module Layers

// Types

type T = symbol;

// Interfaces

// Constants


/**
 * @description 
 */
export default class SymbolValueObject extends ValueObject
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

  public override equals(other: SymbolValueObject): boolean
  {
    return this.value === other.value;
  }

  public override toString(): string
  {
    return this.value.description ?? this.value.toString();
  }

  // protected METHODS

  // private METHODS

  // public static METHODS

  public static override isValid(value: unknown): boolean
  {
    return ('symbol' === typeof value);
  }

  public static from(value: T): SymbolValueObject
  {
    if (!this.isValid(value)) {
      throw new ValueError(value, this.name);
    }
    return new this(value);
  }

  // protected static METHODS

  // private static METHODS

} //:: class
