/**
 * @fileoverview provides a set of functions to check the type of a value using the typeof operator.
 *
 * @example is.valuable(1) // true
 * @example is.valuable(null) // false
 * @example is.not.number(100) // false
 */

export default {
    valuable: (value: unknown) => (value !== undefined) && (value !== null) && !Object.is(value, NaN),
    object: (value: unknown) => (value !== null) && ('object' === typeof value),
    boolean: (value: unknown) => ('boolean' === typeof value),
    number: (value: unknown) => (!Object.is(value, NaN) && ('number' === typeof value)),
    bigint: (value: unknown) => ('bigint' === typeof value),
    string: (value: unknown) => ('string' === typeof value),
    symbol: (value: unknown) => ('symbol' === typeof value),
    function: (value: unknown) => ('function' === typeof value),
    not: {
        valuable: (value: unknown) => (value === undefined) || (value === null) || Object.is(value, NaN),
        object: (value: unknown) => (value === null) || ('object' !== typeof value),
        boolean: (value: unknown) => ('boolean' !== typeof value),
        number: (value: unknown) => Object.is(value, NaN) || ('number' !== typeof value),
        bigint: (value: unknown) => ('bigint' !== typeof value),
        string: (value: unknown) => ('string' !== typeof value),
        symbol: (value: unknown) => ('symbol' !== typeof value),
        function: (value: unknown) => ('function' !== typeof value),
    },
};
