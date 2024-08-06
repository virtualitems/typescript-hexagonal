/**
 * @fileoverview provides a set of functions to check the type of a value using the typeof operator.
 *
 * @example is.valuable(1) // true
 * @example is.valuable(null) // false
 * @example is.not.number(100) // false
 */

export default {
    array: Array.isArray,
    bigint: (value: unknown) => ('bigint' === typeof value),
    boolean: (value: unknown) => ('boolean' === typeof value),
    function: (value: unknown) => ('function' === typeof value),
    instanceOf: (value: unknown, constructor: Function) => value instanceof constructor,
    integer: Number.isInteger,
    number: (value: unknown) => (!Object.is(value, NaN) && !Object.is(value, Infinity) && !Object.is(value, -Infinity) && ('number' === typeof value)),
    object: (value: unknown) => (value !== null) && ('object' === typeof value),
    string: (value: unknown) => ('string' === typeof value),
    symbol: (value: unknown) => ('symbol' === typeof value),
    valuable: (value: unknown) => (value !== undefined) && (value !== null) && !Object.is(value, NaN),
    not: {
        array: (value: unknown) => !Array.isArray(value),
        bigint: (value: unknown) => ('bigint' !== typeof value),
        boolean: (value: unknown) => ('boolean' !== typeof value),
        function: (value: unknown) => ('function' !== typeof value),
        instanceOf: (value: unknown, constructor: Function) => !(value instanceof constructor),
        integer: (value: unknown) => !Number.isInteger(value),
        number: (value: unknown) => Object.is(value, NaN) || Object.is(value, Infinity) || Object.is(value, -Infinity) || ('number' !== typeof value),
        object: (value: unknown) => (value === null) || ('object' !== typeof value),
        string: (value: unknown) => ('string' !== typeof value),
        symbol: (value: unknown) => ('symbol' !== typeof value),
        valuable: (value: unknown) => (value === undefined) || (value === null) || Object.is(value, NaN),
    },
};
