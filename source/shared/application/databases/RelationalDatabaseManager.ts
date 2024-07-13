// Libraries

// Same Shared Module Layer

import DatabaseManager from './DatabaseManager';

// Lower Shared Module Layers

// Types

// Interfaces

// Constants


/**
 * @description 
 */
export default abstract class RelationalDatabaseManager extends DatabaseManager
{

  // public ATTRIBUTES

  // protected ATTRIBUTES

  // private ATTRIBUTES

  // public static ATTRIBUTES

  // protected static ATTRIBUTES

  // private static ATTRIBUTES

  // Constructor, Getters, Setters

  // public METHODS

  public abstract query(...args: any[]): Promise<Iterable<unknown>>;

  public abstract mutation(...args: any[]): Promise<void>;

  // protected METHODS

  // private METHODS

  // public static METHODS

  // protected static METHODS

  // private static METHODS

} //:: class
