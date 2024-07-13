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
export default
  abstract class
    InMemoryDatabaseManager<O extends Record<string, any> = Record<string, any>>
  extends
    DatabaseManager
{

  // public ATTRIBUTES

  // protected ATTRIBUTES

  // private ATTRIBUTES

  // public static ATTRIBUTES

  // protected static ATTRIBUTES

  // private static ATTRIBUTES

  // Constructor, Getters, Setters

  // public METHODS

  public abstract all(...args: any[]): Promise<Iterable<O>>;

  public abstract filter(...args: any[]): Promise<Iterable<O>>;

  public abstract store(...args: any[]): Promise<void>;

  public abstract update(...args: any[]): Promise<void>;

  public abstract delete(...args: any[]): Promise<void>;

  // protected METHODS

  // private METHODS

  // public static METHODS

  // protected static METHODS

  // private static METHODS

} //:: class
