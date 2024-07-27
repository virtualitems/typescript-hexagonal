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
export default abstract class InMemoryDataManager extends DataManager
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

  public abstract all(): Promise<Iterable<Record<string | symbol, unknown>>>;

  public abstract store(data: Record<string | symbol, unknown>): Promise<unknown>;

  public abstract update(target: Record<string | symbol, unknown>, data: Partial<Record<string | symbol, unknown>>): Promise<unknown>;

  public abstract delete(target: Record<string | symbol, unknown>): Promise<unknown>;

  // protected METHODS

  // private METHODS

  // public static METHODS

  // protected static METHODS

  // private static METHODS

} //:: class
