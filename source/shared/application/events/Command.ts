// Libraries

// Same Shared Module Layer

import Event from './Event';

// Lower Shared Module Layers

// Other Modules

// Interfaces

// Constants


/**
 * @description 
 */
export default abstract class Command extends Event
{

  // public ATTRIBUTES

  // protected ATTRIBUTES

  // private ATTRIBUTES

  // public static ATTRIBUTES

  // protected static ATTRIBUTES

  // private static ATTRIBUTES

  // Constructor, Getters, Setters

  public constructor(details?: Record<string, unknown>)
  {
    super(Date.now(), details);
  }

  // public METHODS

  // protected METHODS

  // private METHODS

  // public static METHODS

  // protected static METHODS

  // private static METHODS

} //:: class
