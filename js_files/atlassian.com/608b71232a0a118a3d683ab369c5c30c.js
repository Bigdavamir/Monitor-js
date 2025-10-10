/**
 * Save As/CopyTo dialog common logic.
 */
define("gliffy/confluence/versionselection/versionSelectionDialogFactory",
    [
        "jquery",
        "gliffy/controls/imageselection/imageSelectionControlFactory",
        "gliffy/objectValidatorFactory"
    ],
    function($, imageSelectionControlFactory, objectValidatorFactory) {
        "use strict";

        // GCONF-1922: Add diagram thumbnails to pinned version dialogs.
        //
        // PARAMETERS:
        //   parameters
        //   - headerText: Text to display in header area of dialog.
        //   - promptText: Text to display above image selection widgets.
        //   - attachmentVersion: The number of the pinned version.
        //   - diagramName: the name of the diagram (included in macro).
        //   - ownerPageId: ID of page that diagram is contained within.
        //   - referencePageId: ID of page that diagram reference is contained within.
        //   - pinnedIsDefault: true if pinned version should be default selection, false if latest version should be default selection.
        //   - onComplete: A callback that gets executed up dialog dismissal.
        //      * Argument pinnedVersionWasSelected: true if pinned version selected, false if latest version is selected.
        var VersionSelectionDialog = function (parameters) {
            var self = this;
            var parameters = $.extend({
                onCancel: function () {
                    // intentionally empty
                }
            }, parameters);
            objectValidatorFactory.create({
                description: "VersionSelectionDialog constructor parameters",
                keyToPredicateMap: {
                    "headerText": objectValidatorFactory.predicates.isString,
                    "promptText": objectValidatorFactory.predicates.isString,
                    "attachmentVersion": objectValidatorFactory.predicates.isNumber,
                    "diagramName": objectValidatorFactory.predicates.isString,
                    "ownerPageId": objectValidatorFactory.predicates.isDefinedAndNotNull,
                    "referencePageId": objectValidatorFactory.predicates.isDefinedAndNotNull,
                    "pinnedIsDefault": objectValidatorFactory.predicates.isDefinedAndNotNull,
                    "onComplete": objectValidatorFactory.predicates.isFunction
                }
            }).validate(parameters);

            this._ = {
                hasBeenShown: false,
                parameters: parameters,
                pinnedVersionIsSelected: parameters.pinnedIsDefault,
                buildDom: function () {
                    var bodyHtml = gliffySoy.dialog.version.versionSelectionDialogBody({
                        promptText: parameters.promptText
                    });

                    var dom = $(bodyHtml);

                    var widgetArea = dom.find(".gliffy-image-selection-widget-area");
                    var pinnedVersionControl = imageSelectionControlFactory.create({
                        parent: widgetArea,
                        labelText: AJS.format("Version {0}", parameters.attachmentVersion),
                        imageUrl: AJS.format('{0}/download/attachments/{1}/{2}.png?api=v2&version={3}&modificationDate=0', self._.parameters.contextPath, self._.parameters.ownerPageId, encodeURIComponent(self._.parameters.diagramName), self._.parameters.attachmentVersion),
                        isSelected: parameters.pinnedIsDefault
                    });

                    var latestVersionControl = imageSelectionControlFactory.create({
                        parent: widgetArea,
                        labelText: "Latest",
                        imageUrl: AJS.format('{0}/download/attachments/{1}/{2}.png?api=v2&timestamp={3}&version={4}',
                                                self._.parameters.contextPath,
                                                self._.parameters.ownerPageId,
                                                encodeURIComponent(self._.parameters.diagramName),
                                                new Date().getTime(),
                                                self._.parameters.pagePin || 0),
                        isSelected: !parameters.pinnedIsDefault
                    });

                    pinnedVersionControl.getDomRoot().addClass("left");
                    latestVersionControl.getDomRoot().addClass("right");

                    pinnedVersionControl.addSelectionChangedListener(function(event) {
                        if(event.isSelected) {
                            latestVersionControl.setIsSelected(false);
                            self._.pinnedVersionIsSelected = true;
                        }
                    });

                    latestVersionControl.addSelectionChangedListener(function(event) {
                        if(event.isSelected) {
                            pinnedVersionControl.setIsSelected(false);
                            self._.pinnedVersionIsSelected = false;
                        }
                    });

                    return dom;
                }
            }
        };

        VersionSelectionDialog.prototype.show = function () {
            var self = this;
            if (self._.hasBeenShown) {
                throw new Error("versionSelectionDialogFactory can be shown only once per instance lifetime.");
            }

            var dialog = new AJS.Dialog({
                width: 600,
                height: 380,
                closeOnOutsideClick: false
            });
            dialog.addHeader(self._.parameters.headerText);
            dialog.addPanel("", self._.buildDom(), "panel-body");

            dialog.addLink("Cancel", function (dialog) {
                dialog.remove();
            }, 'aui-button gliffy-dialog-cancel version-dialog-cancel');

            dialog.addButton("Select", function (dialog) {
                dialog.remove();
                self._.parameters.onComplete(self._.pinnedVersionIsSelected);
            }, 'version-dialog-select');
            dialog.show();
            self._.hasBeenShown = true;
        };

        return {
            create: function(parameters) {
                return new VersionSelectionDialog(parameters);
            }
        }
    }
);
