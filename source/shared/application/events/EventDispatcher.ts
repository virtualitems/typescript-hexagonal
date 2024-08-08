// Libraries

// Same Layer

import type Event from './Event';
import type EventHandler from './EventHandler';

// Lower Layers

// Types

// Interfaces

// Constants


/**
 * @description 
 */
export default abstract class EventDispatcher
{

    [property: string | symbol]: unknown;

    // public ATTRIBUTES

    // protected ATTRIBUTES

    // private ATTRIBUTES

    // public static ATTRIBUTES

    // protected static ATTRIBUTES

    // private static ATTRIBUTES

    // Constructor, Getters, Setters

    // public METHODS

    public abstract subscribe(key: unknown, handler: EventHandler): void;

    public abstract unsubscribe(key: unknown, handler: EventHandler): void;

    public abstract dispatch(event: Event<unknown>): void;

    // protected METHODS

    // private METHODS

    // public static METHODS

    // protected static METHODS

    // private static METHODS

} //:: class
