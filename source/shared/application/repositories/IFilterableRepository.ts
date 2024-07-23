// Libraries

// Same Shared Module Layer

// Lower Shared Module Layers

import Entity from '../../domain/Entity';

// Types

// Interfaces

// Constants


/**
 * @description 
 */
export default interface IFilterableRepository<R = Iterable<Entity>>
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

  filter(...args: unknown[]): Promise<R>;

  // protected METHODS

  // private METHODS

  // public static METHODS

  // protected static METHODS

  // private static METHODS

} //:: class
