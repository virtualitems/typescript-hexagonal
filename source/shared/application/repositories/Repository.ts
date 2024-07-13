// Libraries

// Same Shared Module Layer

import type DatabaseManager from '../databases/DatabaseManager';

// Lower Shared Module Layers

// Types

// Interfaces

// Constants


/**
 * @description Represents a data source.
 */
export default abstract class Repository<M extends DatabaseManager = DatabaseManager>
{

  // Public Attributes

  // Protected Attributes

  protected _manager: M;

  // Private Attributes

  // Public Static Attributes

  // Protected Static Attributes

  // Private Static Attributes

  // Constructor, Getters, Setters

  constructor(manager: M)
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
