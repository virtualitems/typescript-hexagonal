// Libraries

// Same Shared Module Layer

// Lower Shared Module Layers

import EventsBus from '../../application/events/EventsBus';

import type Command from '../../application/events/Command';

// Types

type THandler = (payload: Record<string, any> | undefined) => void;

// Interfaces

// Constants


/**
 * @description 
 */
export default class InMemoryCommandBus extends EventsBus
{

  // public ATTRIBUTES

  // protected ATTRIBUTES

  protected readonly _observers: Map<Function, Set<THandler>>;

  // private ATTRIBUTES

  // public static ATTRIBUTES

  // protected static ATTRIBUTES

  // private static ATTRIBUTES

  // Constructor, Getters, Setters

  public constructor()
  {
    super();
    this._observers = new Map<Function, Set<THandler>>();
  }

  // public METHODS

  public subscribe(constructor: Function, handler: THandler): void
  {

    const list = this._observers.get(constructor);

    if (list === undefined) {
      this._observers.set(constructor, new Set([handler]));

    } else {
      list.add(handler);

    }

  }

  public unsubscribe(constructor: Function, handler: THandler): void
  {
    const list = this._observers.get(constructor);

    if (list === undefined) {
      return;
    }

    list.delete(handler);

  }

  public dispatch(command: Command): void
  {
    const list = this._observers.get(command.constructor);

    if (list === undefined) {
      return;
    }

    for (const handler of list) {
      handler(command.details);
    }

  }

  // protected METHODS

  // private METHODS

  // public static METHODS

  // protected static METHODS

  // private static METHODS

} //:: class
