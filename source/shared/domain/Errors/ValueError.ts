// Libraries

// Same Shared Module Layer

// Lower Shared Module Layers

// Types

// Interfaces

// Constants


/**
 * @description 
 */
export default class ValueError extends Error
{

  [property: string | symbol]: unknown;

  // public ATTRIBUTES

  // protected ATTRIBUTES

  // private ATTRIBUTES

  // public static ATTRIBUTES

  // protected static ATTRIBUTES

  // private static ATTRIBUTES

  // Constructor, Getters, Setters

  public constructor(value: unknown, expected: string)
  {
    const valueRepr = (
      value === undefined ? 'undefined' :
      value === null ? 'null' :
      Object.is(value, NaN) ? 'NaN' :
      `${value.constructor.name}(${value.toString()})`
    );

    super(`Invalid value ${valueRepr} for ${expected}.`);
  }

  // public METHODS

  // protected METHODS

  // private METHODS

  // public static METHODS

  // protected static METHODS

  // private static METHODS

} //:: class
