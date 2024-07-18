// Libraries

// Same Shared Module Layer

// Lower Shared Module Layers

import InMemoryDatabaseManager from '../../application/databases/InMemoryDatabaseManager';

import type Entity from '../../domain/entities/Entity';

// Types

// Interfaces

// Constants


/**
 * @description 
 */
export default
  class
    ArrayDatabaseManager<T extends Entity>
  extends
    InMemoryDatabaseManager
{

  // Public Attributes

  // Protected Attributes

  protected readonly database: Array<T>;

  protected _connection: Array<T> | null;

  // Private Attributes

  // Public Static Attributes

  // Protected Static Attributes

  // Private Static Attributes

  // Constructor, Getters, Setters

  constructor(database: Array<T>)
  {
    super();
    this.database = database;
    this._connection = null;
  }

  // Public Methods

  public override async connect()
  {
    this._connection = this.database;
  }

  public override async disconnect()
  {
    this._connection = null;
  }

  public override async all(): Promise<Array<T>>
  {

    if (!this._connection) {
      throw new Error('Database not connected.');
    }

    return this._connection;
  }

  public override async store(data: T): Promise<void>
  {

    if (!this._connection) {
      throw new Error('Database not connected.');
    }

    this._connection.push(data);

  }

  public override async update(target: T, data: Partial<T>): Promise<void>
  {

    if (!this._connection) {
      throw new Error('Database not connected.');
    }

    const ent = this._connection.find((obj: T) => target.equals(obj));

    if (ent) {
      Object.assign(ent, data);
    }

  }

  public override async delete(target: T): Promise<void>
  {

    if (!this._connection) {
      throw new Error('Database not connected.');
    }

    const index = this._connection.findIndex((obj: T) => target.equals(obj));

    if (index >= 0) {
      this._connection.splice(index, 1);
    }

  }

  // Protected Methods

  // Private Methods

  // Public Static Methods

  // Protected Static Methods

  // Private Static Methods

} //:: class
