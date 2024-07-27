// Libraries

// Same Shared Module Layer

import DataManager from '../../../shared/application/data/DataManager';
import IReadable from '../../../shared/application/data/IReadable';
import UseCase from '../../../shared/application/UseCase';

// Lower Shared Module Layers

// Other Modules

// Same Layer

import type FindUserDTO from './FindUserDTO';

// Lower Layers

// Types

type TManager = DataManager & IReadable<TObject>;

// Interfaces

// Constants


/**
 * @description 
 */
export default class FindUsersUseCase extends UseCase
{

  [property: string | symbol]: unknown;

  // public ATTRIBUTES

  // protected ATTRIBUTES

  protected _manager: TManager;

  // private ATTRIBUTES

  // public static ATTRIBUTES

  // protected static ATTRIBUTES

  // private static ATTRIBUTES

  // Constructor, Getters, Setters

  public constructor(manager: TManager)
  {
    super();
    this._manager = manager;
  }

  // public METHODS

  public override async execute(): Promise<Iterable<FindUserDTO>>
  {
    await this._manager.connect();
    const data = await this._manager.all();
    await this._manager.disconnect();
    return data;
  }

  // protected METHODS

  // private METHODS

  // public static METHODS

  // protected static METHODS

  // private static METHODS

} //:: class
