// Libraries

// Same Shared Module Layer

import DataManager from '@shared/application/data/DataManager';

// Lower Shared Module Layers

// Types

// Interfaces

// Constants


/**
 * @description 
 */
export default abstract class StorageDataManager extends DataManager
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

  public abstract get(key: unknown): Promise<unknown>;

  public abstract set(key: unknown): Promise<unknown>;

  public abstract remove(): Promise<unknown>;

  // protected METHODS

  // private METHODS

  // public static METHODS

  // protected static METHODS

  // private static METHODS

} //:: class
