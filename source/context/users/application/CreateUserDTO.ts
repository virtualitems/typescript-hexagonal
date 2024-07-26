// Libraries

// Same Shared Module Layer

import DataTransferObject from '../../../shared/application/DataTransferObject';

// Lower Shared Module Layers

// Other Modules

// Same Layer

// Lower Layers

// Types

// Interfaces

// Constants


/**
 * @description 
 */
export default class CreateUserDTO extends DataTransferObject
{

  [property: string | symbol]: unknown;

  // public ATTRIBUTES

  // protected ATTRIBUTES

  // private ATTRIBUTES

  // public static ATTRIBUTES

  // protected static ATTRIBUTES

  // private static ATTRIBUTES

  // Constructor, Getters, Setters

  public constructor (
    public readonly slug?: string,
    public readonly name?: string,
    public readonly email?: string,
  ) {
    super();
  }

  // public METHODS

  // protected METHODS

  // private METHODS

  // public static METHODS

  // protected static METHODS

  // private static METHODS

} //:: class
