/* eslint-disable @atlassian/confluence-server/must-use-amd */

require('confluence/module-exporter').safeRequire('confluence/dialog', function(confluenceDialog) {
    'use strict';

    AJS.ConfluenceDialog = confluenceDialog.component;

    // Automatically bind our components when a dialog is shown
    AJS.toInit(confluenceDialog.initialiser);
});
