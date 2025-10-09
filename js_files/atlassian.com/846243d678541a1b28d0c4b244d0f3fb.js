define("gliffy/confluence/editor/editorLauncher",
    [
        "jquery",
        "gliffy/objectValidatorFactory",
        "gliffy/confluence/versionselection/versionSelectionDialogController"
    ],
    function($, objectValidatorFactory, versionSelectionDialogController) {
        "use strict";

        var determineWhetherToDisplayInitialDialog = function(contextPath, diagramName, ownerPageId, attachmentVersion, callback) {
            if (attachmentVersion && attachmentVersion > 0) {
                $.ajax({
                    url: contextPath + '/rest/gliffy/1.0/diagrams/allVersionInformation',
                    type: 'GET',
                    data: {
                        name: diagramName,
                        pageId: ownerPageId
                    },
                    success: function (response) {
                        callback(response.numRevisions !== parseInt(attachmentVersion));
                    },
                    error: function (response) {
                        callback(false);
                    }
                });
            } else {
                callback(false);
            }
        }

        //url: linkUrl,
        //    attachmentVersion: attachmentVersion,
        //    ownerPageId: parsedUrlParameters.ceoid,
        //    referencePageId: parsedUrlParameters.pageId,
        //    diagramName: parsedUrlParameters.name
        return {
            launchEditorFromViewPage: function (parameters) {
                parameters = $.extend({
                    contextPath: AJS.Confluence.getContextPath()
                }, parameters);

                window.open(parameters.url, '_self');
            },
            launchEditorFromEditPage: function(parameters) {
                parameters = $.extend({
                    contextPath: AJS.Confluence.getContextPath()
                }, parameters);
                parameters.isPinned = (parameters.attachmentVersion) ? true : false;
                parameters.attachmentVersion = parameters.attachmentVersion;
                AJS.trigger("gliffy.confluence.launchInlineEditor", [parameters]);
            }
        };
    }
);
