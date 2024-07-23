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
    HttpDataManager
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

  public abstract get(...args: [any]): Promise<unknown>;

  public abstract post(...args: [any]): Promise<unknown>;

  public abstract put(...args: [any]): Promise<unknown>;

  public abstract patch(...args: [any]): Promise<unknown>;

  public abstract delete(...args: [any]): Promise<unknown>;

  // protected METHODS

  // private METHODS

  // public static METHODS

  // protected static METHODS

  // private static METHODS

} //:: class
