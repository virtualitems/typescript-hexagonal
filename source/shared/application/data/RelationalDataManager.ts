// Libraries

// Same Shared Module Layer

import DataManager from './DataManager';

// Lower Shared Module Layers

// Types

// Interfaces

// Constants


/**
 * @description 
 */
export default abstract class RelationalDataManager extends DataManager
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

  public abstract define(...args: unknown[]): void;

  public abstract mutation(...args: unknown[]): void;

  public abstract query(...args: unknown[]): void;

  // protected METHODS

  // private METHODS

  // public static METHODS

  // protected static METHODS

  // private static METHODS

} //:: class
