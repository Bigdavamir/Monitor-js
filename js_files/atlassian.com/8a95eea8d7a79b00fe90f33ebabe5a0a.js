/**
 * Central place for creating promises in order to abstract URLs from controller code, as well as providing a means for
 * asynchronous mocks/testing.
 *
 * NOTE: /confluence/rest/api/* are only present in Confluence 5.5+
 */
define("gliffy/confluence/rest/webRequestPromiseFactory", [
        "jquery",
        "gliffy/confluence/rest/urlFactory"
    ], function($, urlFactory) {
        "use strict";


        return {
            /**
             * AJAX response spec
             *   pageTitle: the title of the page that was modified
             *   spaceName: the name of the space containing the page that was modified
             *   targetPageUrl: a URL that links to the page that was modified. This URL is relative to the base Confluence URL.
             */
            buildPrependDiagramToPagePromise: function (parameters) {

                var postUrl = urlFactory.buildPrependDiagramToPageUrl(parameters);

                /**
                 * GCONF-2306: Save-as operation (from the Gliffy editor). If we have access to the Gliffy editor stage, then send the diagram
                 * content directly from the stage. This ensures that any unsaved changes made to the stage will be properly transferred during
                 * the save-as operation. If we do not have access to the editor, then the POST url has sufficient parameters to copy the attachment.
                 */
                if (window.GLIFFY && window.GLIFFY.Mouse && window.GLIFFY.Mouse.editor) {

                    var gliffyEditor = window.GLIFFY.Mouse.editor;
                    var diagramObject = gliffyEditor.getDocumentManager().getActiveDocument().toObject(); // diagram content from the editor stage
                    var gliffyEditorStage = gliffyEditor.getDocumentManager().getActiveStage();

                    // Show a spinner while we export the image
                    if (window.GLIFFY.Spinner) {
                        window.GLIFFY.Spinner.show($('body'));
                    }

                    // Get image data from the Editor stage
                    return gliffyEditor.getDocumentManager().getImageData(gliffyEditorStage, "image/png", function(imageDataUrl, deferred) {
                        diagramObject.image = imageDataUrl;
                        deferred.resolve(diagramObject);
                    }, false, 1).then(function() {
                        return gliffyEditor.getDocumentManager().getHTMLData(gliffyEditorStage)
                    }).then(function(html) {
                        diagramObject.html = html;
                        // Then return a promise that makes a POST request to the server, containing the diagram and image data url
                        return $.ajax({
                            type: "POST",
                            contentType: "application/json",
                            data: JSON.stringify(diagramObject),
                            url: postUrl
                        });
                    });
                } else {
                    /**
                     * Copy-to operation (from the Confluence macro viewer): the Gliffy editor is not available.
                     * Do not send raw diagram and image data to the REST endpoint, and instead use the attachment pointers to copy the attachments.
                     */
                    return $.post(postUrl);
                }
            },

            /**
             * AJAX directly returned by Atlassian REST interface
             */
            buildGetSpacesPromise: function (startIndex, countLimit) {
                return $.get(urlFactory.buildGetSpacesUrl(startIndex, countLimit));
            },

            /**
             * AJAX directly returned by Atlassian REST interface
             */
            buildSpaceSearchPromise: function (searchString, startIndex, countLimit, page) {
                return $.get(urlFactory.buildSpaceSearchUrl(searchString, startIndex, countLimit, page));
            },

            /**
             * AJAX directly returned by Atlassian REST interface
             */
            buildPageSearchPromise: function (searchString, spaceKeys, startIndex, countLimit) {
                return $.get(urlFactory.buildPageSearchUrl(searchString, spaceKeys, startIndex, countLimit));
            },

            /**
             * AJAX response spec
             *   array of
             *     id: the diagram id
             *     title: the title of the diagram
             *     fileName: the filename of the diagram
             */
            buildGetDiagramsInPagePromise: function (pageId) {
                return $.get(urlFactory.buildGetDiagramsInPageUrl(pageId));
            },

            /**
             * AJAX response spec
             *   exists: boolean
             */
            buildPageWithTitleExistsInSpacePromise: function (pageTitle, spaceKey) {
                return $.get(urlFactory.buildPageWithTitleExistsInSpaceUrl(pageTitle, spaceKey));
            },

            buildUnlinkDiagramPromise: function(parameters) {
                return $.post(urlFactory.buildUnlinkDiagramUrl(parameters));
            },

            buildGetPageContentPromise: function(pageId) {
                return $.ajax(urlFactory.buildPageContentUrl(pageId));
            },

            buildPutPageContentPromise: function(pageId, pageContent) {
                return $.ajax({
                    type: "PUT",
                    contentType: "application/json; charset=utf-8",
                    url: urlFactory.buildPageContentUrl(pageId),
                    data: JSON.stringify(pageContent),
                    dataType: "text",
                    processData: false
                });
            },

            buildGetEditPagePermissionPromise: function(gliffyAPIRootServiceURL, pageId) {
                return $.ajax({
                    type: 'GET',
                    url: urlFactory.buildPageEditPermissionUrl(gliffyAPIRootServiceURL, pageId),
                    dataType: "json",
                    cache: false
                });
            },

            buildGetEditDiagramPermissionPromise: function(pageId, diagramName) {
                return $.ajax({
                    type: 'GET',
                    url: urlFactory.buildEditDiagramPermissionUrl(pageId, diagramName),
                    dataType:"json",
                    cache:false
                });
            },

            buildGetCreateAttachmentPermissionPromise: function(pageId) {
                return $.ajax({
                    type: 'GET',
                    url: urlFactory.buildCreateAttachmentPermissionUrl(pageId),
                    dataType:"json",
                    cache:false
                });
            },

            buildGetPropertyValuePromise: function(propertyId) {
                var deferred = new $.Deferred();
                $.get(urlFactory.buildPropertyUrl(propertyId)).then(function(response) {
                    deferred.resolve(response);
                });
                return deferred;
            },

            buildGetDiagramVersionsPromise: function(ownerPageId, diagramName) {
                return $.get(urlFactory.buildGetDiagramVersionsUrl(ownerPageId, diagramName));
            }
        };
    }
);
