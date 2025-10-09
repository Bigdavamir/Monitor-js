/**
 * Responsible for attaching to events and handling local storage "cookie" checks
 */

// Register as apex module so this module can be instantiated after everybody is registered.
require("gliffy/amd/apexModuleManager").
define("gliffy/confluence/versionselection/versionSelectionController", [
    "jquery",
    "gliffy/url",
    "gliffy/confluence/pageFacade",
    "gliffy/confluence/versionselection/versionSelectionDialogController"
], function($, url, pageFacade, versionSelectionDialogController) {
    "use strict";

    // check for edited pinned version local storage "cookie"
    var checkForEdit = function () {
        var diagramEditedDataString = window.localStorage.getItem("com.gliffy.confluence.diagram.edited");
        if (diagramEditedDataString) {
            window.localStorage.removeItem("com.gliffy.confluence.diagram.edited");
            var data = JSON.parse(diagramEditedDataString);
            if (data) {
                // Execute only when there is an element that matches the data.referencePageId parameter.
                var parsedUrlParameters = url.parse(data.url).queryParams;
                var attachmentVersion = 0;
                if (parsedUrlParameters.originalAttachmentVersion) {
                    attachmentVersion = parseInt(parsedUrlParameters.originalAttachmentVersion);
                } else if (parsedUrlParameters.attachmentVersion) {
                    attachmentVersion = parseInt(parsedUrlParameters.attachmentVersion);
                }

                var diagramReferencesThatMatch = pageFacade.getDiagramReferences().filter(function (diagramReference) {
                    // TODO: GCONF-2181 This will probably have issues with linked diagrams.
                    return (diagramReference.name === parsedUrlParameters.name);
                });
                var isPinned = parsedUrlParameters.isPinned === "true" ? true : false;
                if (attachmentVersion > 0 && isPinned && (parsedUrlParameters.inline === "true" || diagramReferencesThatMatch.length > 0)) {
                    var diagramReference = {
                        ownerPageId: parsedUrlParameters.ceoid,
                        name: parsedUrlParameters.name,
                        version: attachmentVersion
                    };

                    versionSelectionDialogController.showUnpinMacroDiagramVersionDialog({
                        ownerPageId: diagramReference.ownerPageId,
                        diagramName: diagramReference.name,
                        attachmentVersion: diagramReference.version,
                        referencePageId: AJS.params.pageId,
                        contextPath: AJS.Confluence.getContextPath(),
                        onComplete: function (pinnedVersionWasSelected) {
                            if (!pinnedVersionWasSelected) {
                                pageFacade.unpinDiagramReferenceVersion(diagramReference);
                            }
                        }
                    });
                }
            }
        }
    }

    AJS.bind("gliffy.confluence.inlineEditorClosed", function () {
        checkForEdit();
    });

    $(function () {
        checkForEdit();
    });
});
