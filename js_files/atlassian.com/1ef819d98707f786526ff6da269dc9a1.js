/**
 * Utility class for validating an object's values. Useful for constructors.
 */
define("gliffy/objectValidatorFactory", [
    'jquery',
    'underscore',
    'gliffy/util'
    ], function ($, _, util) {
        "use strict";
        var ObjectValidator = function (parameters) {
            // parameters:
            //   keyToPredicateMap
            //       key - the key of the value to pass through predicate (i.e. predicate.func(object[key]))
            //       predicate
            //           func - a function that takes a value and returns a boolean.
            //           failureMessage - the message to display when func(object[key]) == false.
            //
            //   description - string description of the object displayed upon failures.
            //

            var fail = function (key, value, failureMessage) {
                throw new Error(util.format("{0} {1} value ({2}) failed predicate: {3}", parameters.description, key, $.isFunction(value) ? "[function]" : value, failureMessage));
            };

            if (!_.isString(parameters.description)) {
                parameters.description = "ObjectValidator construction parameters";
                fail("description", parameters.description, "Expected value to be a string.");
            }

            if (typeof parameters.keyToPredicateMap === 'undefined') {
                parameters.description = "ObjectValidator construction parameters";
                fail("keyToPredicateMap", parameters.keyToPredicateMap, "Expected value to be defined.");
            }

            $.each(parameters.keyToPredicateMap, function (key, predicate) {
                if (!_.isFunction(predicate.func)) {
                    fail("keyToPredicateMap " + key + ".func", predicate.func, "Expected value to be a function.");
                }
                if (!_.isString(predicate.failureMessage)) {
                    fail("keyToPredicateMap " + key + ".failureMessage", predicate.failureMessage, "Expected value to be a string.");
                }
            });

            this._ = {
                keyToPredicateMap: parameters.keyToPredicateMap,
                fail: fail
            };
        };

        ObjectValidator.prototype.validate = function (value) {
            var self = this;
            if (value == null) {
                throw new Error("ObjectValidator.validate() requires non-null input.");
            }
            $.each(self._.keyToPredicateMap, function (key, predicate) {
                if (!predicate.func(value[key])) {
                    self._.fail(key, value[key], predicate.description);
                }
            });
        }

        return {
            create: function(parameters) {
                return new ObjectValidator(parameters);
            },
            predicates: {
                isString: {
                    func: _.isString,
                    failureMessage: "Expected value to be a string."
                },
                isNumber: {
                    func: _.isNumber,
                    failureMessage: "Expected value to be a number."
                },
                isFunction: {
                    func: _.isFunction,
                    failureMessage: "Expected value to be a function."
                },
                isArray: {
                    func: _.isArray,
                    failureMessage: "Expected value to be an array."
                },
                isTruthy: {
                    func: function (value) {
                        return value == true; // coercion intentional
                    },
                    failureMessage: "Expected value to be truthy."
                },
                isFalsey: {
                    func: function (value) {
                        return value == false; // coercion intentional
                    },
                    failureMessage: "Expected value to be falsey."
                },
                isDefinedAndNotNull: {
                    func: function (value) {
                        return value != null; // coercion intentional, to include undefined.
                    },
                    failureMessage: "Expected value to be defined and not null."
                },
                containsAnyKey: {
                    func: function (value) {
                        return Object.keys(value).length > 0;
                    },
                    failureMessage: "Expected value to contain at least one key."
                }
            }
        };
    }
);
