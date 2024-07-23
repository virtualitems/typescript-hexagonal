// Libraries

// Same Shared Module Layer

import type DataManager from '../DataManager';

// Lower Shared Module Layers

// Types

// Interfaces

// Constants


/**
 * @description Represents a data source.
 */
export default abstract class Repository
{

  // Public Attributes

  // Protected Attributes

  protected _manager: DataManager;

  // Private Attributes

  // Public Static Attributes

  // Protected Static Attributes

  // Private Static Attributes

  // Constructor, Getters, Setters

  public constructor(manager: DataManager)
  {
    this._manager = manager;
  }

  public get manager(): DataManager
  {
    return this._manager;
  }

  public set manager(manager: DataManager)
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
