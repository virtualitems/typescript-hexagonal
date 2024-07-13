// Libraries

import sqlite3 from 'sqlite3';

// Same Shared Module Layer

// Lower Shared Module Layers

import RelationalDatabaseManager from '../../application/databases/RelationalDatabaseManager';

// Types

// Interfaces

// Constants


/**
 * @description 
 */
export default class SQLiteDatabaseManager extends RelationalDatabaseManager
{

  // public ATTRIBUTES

  // protected ATTRIBUTES

  protected readonly _name: string;

  protected _database: sqlite3.Database | null;

  // private ATTRIBUTES

  // public static ATTRIBUTES

  // protected static ATTRIBUTES

  // private static ATTRIBUTES

  // Constructor, Getters, Setters

  public constructor(name: string)
  {
    super();
    this._name = name;
    this._database = null;
  }

  // public METHODS

  public override connect(): Promise<void>
  {

    const cb = (resolve: Function, reject: Function) => {
      this._database = new sqlite3.Database(this._name, (error: Error | null) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    };

    return new Promise<void>(cb);
  }

  public override disconnect(): Promise<void>
  {

    const cb = (resolve: Function, reject: Function) => {

      if (this._database === null) {
        resolve();
        return;
      }

      this._database.close((error: Error | null) => {

        if (error) {
          reject(error);
          return;
        }

        resolve();

      }); //:: close

    };  //:: cb

    return new Promise<void>(cb);

  } //:: disconnect

  public override query(statement: string): Promise<Iterable<unknown>>
  {
    const cb = (resolve: Function, reject: Function) => {

      if (this._database === null) {
        reject(new Error('Database is not connected.'));
        return;
      }

      this._database.all(statement, (error: Error | null, rows: Array<unknown>) => {

        if (error) {
          reject(error);
          return;
        }

        resolve(rows);

      }); //:: all

    }; //:: cb

    return new Promise<Iterable<unknown>>(cb);
  }

  public override mutation(statement: string): Promise<void>
  {
    const cb = (resolve: Function, reject: Function) => {

      if (this._database === null) {
        reject(new Error('Database is not connected.'));
        return;
      }

      this._database.run(statement, (error: Error | null) => {

        if (error) {
          reject(error);
          return;
        }

        resolve();

      }); //:: run

    }; //:: cb

    return new Promise<void>(cb);
  }

  // protected METHODS

  // private METHODS

  // public static METHODS

  // protected static METHODS

  // private static METHODS

} //:: class
