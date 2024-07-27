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

  public abstract all(): Promise<Iterable<TObject>>;

  public abstract store(data: TObject): Promise<unknown>;

  public abstract update(target: TObject, data: Partial<TObject>): Promise<unknown>;

  public abstract delete(target: TObject): Promise<unknown>;

  // protected METHODS

  // private METHODS

  // public static METHODS

  // protected static METHODS

  // private static METHODS

} //:: class
