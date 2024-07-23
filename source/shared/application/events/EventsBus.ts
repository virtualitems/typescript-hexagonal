// Libraries

// Same Shared Module Layer

import type Event from './Event';

// Lower Shared Module Layers

// Types

// Interfaces

// Constants


/**
 * @description 
 */
export default abstract class EventsBus
{

  [property: string | symbol]: unknown;

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

  public abstract dispatch(event: Event): void;

  // protected METHODS

  // private METHODS

  // public static METHODS

  // protected static METHODS

  // private static METHODS

} //:: class
