// Libraries

// Same Shared Module Layer

import DataManager from '../DataManager';

// Lower Shared Module Layers

// Types

// Interfaces

// Constants


/**
 * @description 
 */
export default
  abstract class
    InMemoryDataManager<T extends Record<string, unknown> = Record<string, unknown>>
  extends
    DataManager
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

  public abstract store(data: T): Promise<unknown>;

  public abstract update(target: T, data: Partial<T>): Promise<unknown>;

  public abstract delete(target: T): Promise<unknown>;

  // protected METHODS

  // private METHODS

  // public static METHODS

  // protected static METHODS

  // private static METHODS

} //:: class
