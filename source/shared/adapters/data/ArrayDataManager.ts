// Libraries

// Same Shared Module Layer

// Lower Shared Module Layers

import InMemoryDataManager from '@shared/application/data/InMemoryDataManager';

// Types

// Interfaces

// Constants


/**
 * @description 
 */
export default class ArrayDataManager<T extends TObject> extends InMemoryDataManager
{

  [property: string | symbol]: unknown;

  // Public Attributes

  // Protected Attributes

  protected _connection: T[] | null;

  protected _database: T[];

  // Private Attributes

  // Public Static Attributes

  // Protected Static Attributes

  // Private Static Attributes

  // Constructor, Getters, Setters

  constructor(database: T[])
  {
    super();
    this._database = database;
    this._connection = null;
  }

  // Public Methods

  public override async connect(): Promise<void>
  {
    this._connection = this._database;  // Set the connection
  }

  public override async disconnect(): Promise<void>
  {
    this._connection = null;  // Clear the connection
  }

  public override async all(): Promise<T[]>
  {

    if (!this._connection) {
      throw new Error('Database not connected.');
    }

    return Array.from(this._connection);
  }

  public override async store(data: T): Promise<void>
  {

    if (!this._connection) {
      throw new Error('Database not connected.');
    }

    this._connection.push(data);

  }

  public override async update(target: Partial<T>, data: Partial<T>): Promise<void>
  {

    if (!this._connection) {
      throw new Error('Database not connected.');
    }

    for (const item of this._connection) {

      let match = true;

      for (const key in target) {

        if (target[key] === undefined) {
          continue;
        }

        if (item[key] !== target[key]) {
          match = false;
          break;
        }

      }

      if (match) {
        Object.assign(item, data);
      }

    } //:: for

  }

  public override async delete(target: Partial<T>): Promise<void>
  {

    if (!this._connection) {
      throw new Error('Database not connected.');
    }

    for (let i = 0; i < this._connection.length; i++) {

      const item = this._connection[i];

      for (const key in item) {
        if (item[key] !== target[key]) {
          continue;
        }
      }

      this._connection.splice(i, 1);

    } //:: for

  }

  // Protected Methods

  // Private Methods

  // Public Static Methods

  // Protected Static Methods

  // Private Static Methods

} //:: class
