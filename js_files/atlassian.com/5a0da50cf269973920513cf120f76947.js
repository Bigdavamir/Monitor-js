/**
 * Simple mechanism for automatic AMD apex module (such as DOM controllers) instantiation.
 * May not be necessary after integrating RequireJS optimizer.
 *
 * define() passes through all arguments to AMD loader, storing away the ID for instantiation later. So far, all apex
 * classes have only had to add the line "require("gliffy/amd/apexModuleManager")." before the standard AMD define()
 * call.
 *
 * Example use:
 *      <this file toward beginning of batch.js>
 *
 *      require("gliffy/amd/apexModuleManager").
 *      define("my/new/class/id", ...)
 *      define("my/new/class2/id", ...)
 *      ....
 *
 *      ;(function($, apexModuleManager) {
 *          // Wait for DOM to be loaded before instantiating apex modules.
 *          $(function () {
 *              apexModuleManager.instantiateAll();
 *              apexModuleManager.reset();
 *          });
 *      })(require('jquery'), require('gliffy/amd/apexModuleManager'));

 *     <end of batch.js>
 */
define("gliffy/amd/apexModuleManager", function() {
    var apexModuleIds = [];

    return {
        reset: function() {
            apexModuleIds = [];
        },
        define: function() {
            // pass the arguments directly to define(), but register the first argument as module ID.
            apexModuleIds.push(arguments[0]);
            window.define.apply(window, arguments);
        },
        instantiateAll: function() {
            apexModuleIds.forEach(function(apexModuleId) {
                require(apexModuleId);
            });
        }
    };

});