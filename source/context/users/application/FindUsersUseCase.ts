// Libraries

// Same Shared Module Layer

import DataManager from '@shared/application/data/DataManager';
import UseCase from '@shared/application/UseCase';

// Lower Shared Module Layers

// Other Modules

// Same Layer

import type FindUserDTO from './FindUserDTO';
import type IUsersDataManager from './IUsersDataManager';

// Lower Layers

// Types

type TManager = DataManager & IUsersDataManager;

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

  public override async execute(target: Partial<FindUserDTO>): Promise<Iterable<FindUserDTO>>
  {
    await this._manager.connect();
    const data = await this._manager.filter(target);
    await this._manager.disconnect();
    return data;
  }

  // protected METHODS

  // private METHODS

  // public static METHODS

  // protected static METHODS

  // private static METHODS

} //:: class
