// Libraries

// Same Shared Module Layer

// Lower Shared Module Layers

// Types

type TValue = string | number | bigint | boolean | object | null;

// Interfaces

// Constants


/**
 * @description 
 */
export default abstract class ValueObject
{

  [property: string | symbol]: unknown;

  // public ATTRIBUTES

  // protected ATTRIBUTES

  // private ATTRIBUTES

  // public static ATTRIBUTES

  // protected static ATTRIBUTES

  // private static ATTRIBUTES

  // Constructor, Getters, Setters

  public abstract get value(): TValue;

  // public METHODS

  public abstract equals(other: ValueObject): boolean;

  public abstract toString(): string;

  // protected METHODS

  // private METHODS

  // public static METHODS

  public static isValid(value: unknown): boolean
  {
    return value !== null && value !== undefined && !Object.is(value, NaN);
  }

  public static from(_value: TValue, ..._args: unknown[]): ValueObject
  {
    throw new Error('Impossible to create an instance from abstract class ValueObject');
  }

  // protected static METHODS

  // private static METHODS

} //:: class
