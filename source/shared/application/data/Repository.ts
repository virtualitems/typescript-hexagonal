// Libraries

// Same Layer

import type DataManager from './DataManager';

// Lower Layers

// Types

// Interfaces

// Constants


/**
 * @description Represents a data source.
 */
export default abstract class Repository<M extends DataManager = DataManager>
{

  [property: string | symbol]: unknown;

  // Public Attributes

  // Protected Attributes

  protected _manager: M;

  // Private Attributes

  // Public Static Attributes

  // Protected Static Attributes

  // Private Static Attributes

  // Constructor, Getters, Setters

  public constructor(manager: M)
  {
    this._manager = manager;
  }

  public get manager(): M
  {
    return this._manager;
  }

  public set manager(manager: M)
  {
    this._manager = manager;
  }

  // Public Methods

  // Protected Methods

  // Private Methods

  // Public Static Methods

  // Protected Static Methods

  // Private Static Methods

} //:: class
