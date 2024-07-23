// Libraries

// Same Shared Module Layer

import ArrayDataManager from './ArrayDataManager';

// Lower Shared Module Layers

import DataManagerFactory from '../../application/DataManagerFactory';

// Types

type TGeneric = Record<string, unknown>;

// Interfaces

// Constants


/**
 * @description 
 */
export default class ArrayDataManagerFactory<T extends TGeneric> extends DataManagerFactory
{

  // public ATTRIBUTES

  // protected ATTRIBUTES

  // private ATTRIBUTES

  // public static ATTRIBUTES

  // protected static ATTRIBUTES

  // private static ATTRIBUTES

  // Constructor, Getters, Setters

  // public METHODS

  public override async connect(database?: []): Promise<ArrayDataManager<T>>
  {
    return new ArrayDataManager<T>(database ?? []);
  }

  // protected METHODS

  // private METHODS

  // public static METHODS

  // protected static METHODS

  // private static METHODS

} //:: class
