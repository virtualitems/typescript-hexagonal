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
    InMemoryDatabaseManager<T extends Record<string, any> = Record<string, any>>
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

  public abstract all(): Promise<Iterable<T>>;

  public abstract store(data: T): Promise<void>;

  public abstract update(target: T, data: Partial<T>): Promise<void>;

  public abstract delete(target: T): Promise<void>;

  // protected METHODS

  // private METHODS

  // public static METHODS

  // protected static METHODS

  // private static METHODS

} //:: class
