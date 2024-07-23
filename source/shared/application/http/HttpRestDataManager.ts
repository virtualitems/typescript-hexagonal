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
    HttpRestDataManager
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

  public abstract get(...args: [unknown]): Promise<unknown>;

  public abstract post(...args: [unknown]): Promise<unknown>;

  public abstract put(...args: [unknown]): Promise<unknown>;

  public abstract patch(...args: [unknown]): Promise<unknown>;

  public abstract delete(...args: [unknown]): Promise<unknown>;

  // protected METHODS

  // private METHODS

  // public static METHODS

  // protected static METHODS

  // private static METHODS

} //:: class
