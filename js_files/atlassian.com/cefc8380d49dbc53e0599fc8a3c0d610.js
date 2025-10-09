define("gliffy/confluence/rest/urlFactory", [
    "gliffy/url"
], function(url) {
    "use strict";

    //GCONF-2677: following line sets the Confluence base url based on browser location instead of Confluence base URL.
    var confluenceBaseUrl = window.location.protocol + "//" + window.location.host + AJS.contextPath();

    var rootGliffyApiUrl = confluenceBaseUrl + "/rest/gliffy/1.0";

    return {
        buildPrependDiagramToPageUrl: function(parameters) {
            return url.buildRootedPathAndQuery(rootGliffyApiUrl,
                [
                    "diagrams",
                    "saveas",
                    parameters.sourcePageId,
                    parameters.sourceDiagramName
                ],
                {
                    sourceDiagramVersion: parameters.sourceDiagramVersion,
                    targetPageId: parameters.targetPageId,
                    space: parameters.targetSpaceKey,
                    targetDiagramName: parameters.targetDiagramName,
                    targetPageTitle: parameters.targetPageTitle,
                    includeAlertLinkUrlParams: parameters.includeAlertLinkUrlParams
                }
            );
        },

        buildGetSpacesUrl: function (startIndex, countLimit) {
            // Works only on 5.5+, but is Confluence native and probably faster
            //return $.ajax(GLIFFY.baseConfluenceUrl + "/rest/api/space?start=" + startIndex + "&limit=" + countLimit);

            // Works on 5.1+
            return url.buildRootedPathAndQuery(rootGliffyApiUrl,
                [
                    "spaces"
                ],
                {
                    start: startIndex,
                    limit: countLimit
                }
            );
        },

        buildSpaceSearchUrl: function (searchString, startIndex, countLimit, page) {
            return url.buildRootedPathAndQuery(rootGliffyApiUrl,
                [
                    "spaces"
                ],
                {
                    searchTerm: searchString,
                    start: startIndex,
                    limit: countLimit,
                    page: page
                }
            );
            return rootGliffyApiUrl + "/" + pathAndQuery;
        },

        // Works only on 5.5+
        //var buildPageSearchUrl = function(searchString, spaceKeys, startIndex, countLimit) {
        //    var cql = "type=page ";
        //
        //    if(spaceKeys) {
        //        cql += "and (";
        //        spaceKeys.forEach(function(key, index) {
        //            if(index > 0) {
        //                cql += " or ";
        //            }
        //            cql += 'space=' + key;
        //        });
        //        cql += ") ";
        //    }
        //
        //    if(searchString) {
        //        cql += 'and title ~'"' + searchString + '"';
        //    }
        //
        //    var url = rootConfluenceApiUrl + "/rest/api/content/search?cql=" + encodeURIComponent(cql);
        //    url += "&start=" + startIndex + "&limit=" + countLimit + "&expand=space";
        //
        //    return url;
        //}

        buildPageSearchUrl: function (searchString, spaceKeys, startIndex, countLimit) {
            return url.buildRootedPathAndQuery(rootGliffyApiUrl,
                [
                    "page",
                    "search"
                ],
                {
                    searchTerm: searchString || "",
                    start: startIndex,
                    limit: countLimit,
                    expand: 'space',
                    spaceKeys: spaceKeys && spaceKeys.join(",")
                }
            );
        },

        // We must pass in the rootGliffyAPI separately from what's configured above, since
        // AJS.params.baseUrl and GLIFFY.baseConfluenceUrl are not always set when this is called
        buildPageEditPermissionUrl: function(gliffyAPIRootServiceURL, pageId) {
            return AJS.format("{0}/ceo/{1}/permission", gliffyAPIRootServiceURL, pageId);
        },

        buildGetDiagramsInPageUrl: function (pageId) {
            return url.buildRootedPathAndQuery(rootGliffyApiUrl,
                [
                    "page",
                    pageId,
                    "diagrams"
                ]
            );
        },

        buildPageWithTitleExistsInSpaceUrl: function (pageTitle, spaceKey) {
            return confluenceBaseUrl + '/rest/api/content?' + 'spaceKey=' + spaceKey +
                    '&title=' + encodeURIComponent(pageTitle);
        },

        buildUnlinkDiagramUrl: function(parameters) {
            return url.buildRootedPathAndQuery(rootGliffyApiUrl,
                [
                    "diagrams",
                    "unlink",
                    parameters.sourcePageId,
                    parameters.sourceDiagramName
                ],
                {
                    sourceDiagramVersion: parameters.sourceDiagramVersion,
                    targetPageId: parameters.targetPageId,
                    targetDiagramName: parameters.targetDiagramName
                }
            );
        },

        buildPageContentUrl: function(pageId) {
            return AJS.format("{0}/rest/api/content/{1}?expand=body.storage,version,space,ancestors", confluenceBaseUrl, pageId);
        },

        buildEditDiagramPermissionUrl: function(ownerPageId, diagramName) {
            return url.buildRootedPathAndQuery(rootGliffyApiUrl,
                [
                    "ceo",
                    ownerPageId,
                    "diagrams",
                    diagramName,
                    "permission"
                ]
            );
        },

        buildCreateAttachmentPermissionUrl: function(ownerPageId) {
            return url.buildRootedPathAndQuery(rootGliffyApiUrl,
                [
                    "ceo",
                    ownerPageId,
                    "permission"
                ]
            );
        },

        buildPropertyUrl: function(propertyId) {
            return url.buildRootedPathAndQuery(rootGliffyApiUrl,
                [
                    "properties",
                    propertyId
                ]
            );
        },

        buildDiagramPreviewImageUrl: function(ownerPageId, diagramName, diagramVersion) {
            return url.buildRootedPathAndQuery(rootGliffyApiUrl,
                [
                    "diagrams",
                    "preview"
                ],
                {
                    name: diagramName,
                    pageId: ownerPageId,
                    version: diagramVersion
                }
            );
        },

        buildDiagramThumbnailImageUrl: function(ownerPageId, diagramName, diagramVersion) {
            return url.buildRootedPathAndQuery(rootGliffyApiUrl,
                [
                    "diagrams",
                    "thumbnail"
                ],
                {
                    name: diagramName,
                    pageId: ownerPageId,
                    version: diagramVersion
                }
            );
        },

        buildGetDiagramVersionsUrl: function(ownerPageId, diagramName) {
            return url.buildRootedPathAndQuery(rootGliffyApiUrl,
                [
                    "diagrams",
                    "allVersionInformation"
                ],
                {
                    pageId: ownerPageId,
                    name: diagramName
                }
            );
        },

        buildCreateEmbedLinkUrl: function () {
            return url.buildRootedPathAndQuery(rootGliffyApiUrl,
                [
                    "embeddedDiagrams"
                ]
            );
        },

        buildDeactivateEmbedLinkUrl: function () {
            return url.buildRootedPathAndQuery(rootGliffyApiUrl,
                [
                    "embeddedDiagrams",
                    "deactivate"
                ]
            );
        }
    };
});
