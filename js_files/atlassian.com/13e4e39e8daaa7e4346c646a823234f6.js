/**
 * Exists to require, and therefore execute, application-level bits like DOM controllers.
 * This must be included as the final resource of the web-resource definition
 */
;(function($, apexModuleManager) {
    // Wait for DOM to be loaded before instantiating apex modules.
    $(function () {
        apexModuleManager.instantiateAll();
        apexModuleManager.reset();
    });
})(require('jquery'), require('gliffy/amd/apexModuleManager'));

