// Libraries

// Same Layer

// Lower Layers

import type Command from '../../application/events/Command';
import type CommandHandler from '../../application/events/CommandHandler';

import CommandsBus from '../../application/events/CommandsBus';

// Types

// Interfaces

// Constants


/**
 * @description 
 */
export default class InMemoryCommandBus extends CommandsBus
{

  [property: string | symbol]: unknown;

  // public ATTRIBUTES

  // protected ATTRIBUTES

  protected readonly _observers: Map<Function, Set<CommandHandler>>;

  // private ATTRIBUTES

  // public static ATTRIBUTES

  // protected static ATTRIBUTES

  // private static ATTRIBUTES

  // Constructor, Getters, Setters

  public constructor()
  {
    super();
    this._observers = new Map<Function, Set<CommandHandler>>();
  }

  // public METHODS

  public subscribe(constructor: Function, handler: CommandHandler): void
  {

    const list = this._observers.get(constructor);

    if (list === undefined) {
      this._observers.set(constructor, new Set([handler]));

    } else {
      list.add(handler);

    }

  }

  public unsubscribe(constructor: Function, handler: CommandHandler): void
  {
    const list = this._observers.get(constructor);

    if (list === undefined) {
      return;
    }

    list.delete(handler);

    if (list.size === 0) {
      this._observers.delete(constructor);
    }

  }

  public dispatch(command: Command): void
  {
    const list = this._observers.get(command.constructor);

    if (list === undefined) {
      return;
    }

    for (const handler of list) {
      handler.handle(command.details);
    }

  }

  // protected METHODS

  // private METHODS

  // public static METHODS

  // protected static METHODS

  // private static METHODS

} //:: class
