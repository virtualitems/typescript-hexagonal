// Libraries

// Same Layer

// Lower Layers

// Types

type TValue = string | symbol | number | bigint | boolean | object | null;

// Interfaces

// Constants


/**
 * @description 
 */
export default abstract class ValueObject
{

    [property: string | symbol]: unknown;

    // public ATTRIBUTES

    public abstract readonly value: TValue;

    // protected ATTRIBUTES

    // private ATTRIBUTES

    // public static ATTRIBUTES

    // protected static ATTRIBUTES

    // private static ATTRIBUTES

    // Constructor, Getters, Setters

    // public METHODS

    public abstract equals(other: ValueObject): boolean;

    // protected METHODS

    // private METHODS

    // public static METHODS

    public static isValid(value: unknown): boolean
    {
        return value !== null && value !== undefined && !Object.is(value, NaN);
    }

    // protected static METHODS

    // private static METHODS

} //:: class
