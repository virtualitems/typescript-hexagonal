// Libraries

// Same Shared Module Layer

// Lower Shared Module Layers

import DatabaseManager from '../../application/repositories/DatabaseManager';
import IDeletable from '../../application/repositories/IDeletable';
import IFilterable from '../../application/repositories/IFilterable';
import IReadable from '../../application/repositories/IReadable';
import IStorable from '../../application/repositories/IStorable';
import IUpdatable from '../../application/repositories/IUpdatable';

// Types

// Interfaces

// Constants


/**
 * @description 
 */
export default class InMemoryDatabaseManager<T extends Record<string, any>>
  extends DatabaseManager
  implements IDeletable, IFilterable, IReadable, IStorable, IUpdatable
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

  constructor(database: Array<any>)
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

  public async all(): Promise<Array<T>>
  {

    if (!this._connection) {
      throw new Error('Database not connected.');
    }

    return this._connection;
  }

  public async filter(query: Partial<T>): Promise<Array<T>>
  {

    if (!this._connection) {
      throw new Error('Database not connected.');
    }

    return this._connection.filter((obj: T) => this.matches(obj, query));

  }

  public async store(data: T): Promise<void>
  {

    if (!this._connection) {
      throw new Error('Database not connected.');
    }

    this._connection.push(data);

  }

  public async update(query: Partial<T>, data: Partial<T>): Promise<void>
  {

    if (!this._connection) {
      throw new Error('Database not connected.');
    }

    const ent = this._connection.find((obj: T) => this.matches(obj, query));

    if (ent) {
      Object.assign(ent, data);
    }

  }

  public async delete(query: Partial<T>): Promise<void>
  {

    if (!this._connection) {
      throw new Error('Database not connected.');
    }

    const index = this._connection.findIndex((obj: T) => this.matches(obj, query));

    if (index >= 0) {
      this._connection.splice(index, 1);
    }

  }

  // Protected Methods

  // Private Methods

  private matches(complete: Record<string, any>, partial: Record<string, any>) {
    for (const key in partial) {
      if (partial[key] !== complete[key]) {
        return false;
      }
    }

    return true;
  }

  // Public Static Methods

  // Protected Static Methods

  // Private Static Methods

} //:: class
