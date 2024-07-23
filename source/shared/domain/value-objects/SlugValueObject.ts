// Libraries

// Same Shared Module Layer

import StringValueObject from './StringValueObject';

// Lower Shared Module Layers

// Types

type T = string;

// Interfaces

// Constants


/**
 * @description 
 */
export default class SlugValueObject extends StringValueObject
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

  public override equals(other: SlugValueObject): boolean
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

  public static override isValid(value: string): boolean
  {
    return (value.constructor === String) && (value.length > 0);
  }

  public static override from(value: T): SlugValueObject
  {
    if (!this.isValid(value)) {
      throw new Error(`Invalid value ${value?.constructor.name}(${String(value)}) for ${this.name}.`);
    }
    return new this(value);
  }

  // protected static METHODS

  // private static METHODS

} //:: class
