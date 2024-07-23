// Libraries

// Same Shared Module Layer

// Lower Shared Module Layers

// Other Modules

// Interfaces

// Constants


/**
 * @description 
 */
export default abstract class Event
{

  // public ATTRIBUTES

  public readonly timestamp: number;

  public readonly details?: Record<string, any>;

  // protected ATTRIBUTES

  // private ATTRIBUTES

  // public static ATTRIBUTES

  // protected static ATTRIBUTES

  // private static ATTRIBUTES

  // Constructor, Getters, Setters

  public constructor(timestamp: number, details?: Record<string, any>)
  {
    this.timestamp = timestamp;
    this.details = details;
  }

  // public METHODS

  // protected METHODS

  // private METHODS

  // public static METHODS

  // protected static METHODS

  // private static METHODS

} //:: class
