// Libraries

// Same Shared Module Layer

// Lower Shared Module Layers

// Types

// Interfaces

// Constants


/**
 * @description 
 */
export default abstract class ValueObject
{

  // public ATTRIBUTES

  // protected ATTRIBUTES

  // private ATTRIBUTES

  // public static ATTRIBUTES

  // protected static ATTRIBUTES

  // private static ATTRIBUTES

  // Constructor, Getters, Setters

  public abstract get value(): string | number | bigint | boolean | object | null;

  // public METHODS

  public abstract equals(other: ValueObject): boolean;

  public abstract toString(): string;

  // protected METHODS

  // private METHODS

  // public static METHODS

  public static isValid(value: any): boolean
  {
    return value !== null && value !== undefined && !isNaN(value);
  }

  public static from(_value: any, ..._args: any[]): ValueObject
  {
    throw new Error('Impossible to create an instance from abstract class ValueObject');
  }

  // protected static METHODS

  // private static METHODS

} //:: class
