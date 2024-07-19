// Libraries

// Same Shared Module Layer

import type Command from './Command';

// Lower Shared Module Layers

// Types

// Interfaces

// Constants


/**
 * @description 
 */
export default abstract class Bus
{

  // public ATTRIBUTES

  // protected ATTRIBUTES

  // private ATTRIBUTES

  // public static ATTRIBUTES

  // protected static ATTRIBUTES

  // private static ATTRIBUTES

  // Constructor, Getters, Setters

  // public METHODS

  public abstract subscribe(key: unknown, handler: unknown): void;

  public abstract unsubscribe(key: unknown, handler: unknown): void;

  public abstract dispatch(command: Command): void;

  // protected METHODS

  // private METHODS

  // public static METHODS

  // protected static METHODS

  // private static METHODS

} //:: class
