// NOTE: this is used outside of Applinks. See atlassian-plugin.xml for more details about the associated restrictions

(function(AppLinksI18n, ApplinksDocs, ApplinksEvents) {
    var $ = AJS.$;

    /**
     * The triggering of AppLinks initialisation can be customised by setting a function on
     * AJS.AppLinksInitialisationBinder. The binder function should take a single argument which is a zero-arg function to
     * run and should execute this function when appropriate.
     */
    AppLinks = $.extend(window.AppLinks || {}, {
        Event: {
            NAMESPACE: 'applinks'
        },
        I18n: AppLinksI18n,
        Docs: ApplinksDocs
    });
    AppLinks.Event = $.extend(window.AppLinks.Event, ApplinksEvents);

    // Is there an overridden initialisation binder?
    if (AJS.AppLinksInitialisationBinder) {
        AppLinks.initialisationBinder = AJS.AppLinksInitialisationBinder;
    } else {
        // The default bind if no specific binder is specified
        AppLinks.initialisationBinder = function(f) {
            AJS.toInit(f);
        }
    }

    function parseJsonResponse(xhr) {
        var respJSON = xhr.responseText;
        var respObj;
        try {
            respObj = JSON.parse(respJSON);
        } catch (e) {
            console && console.error && console.error('invalid JSON response', respJSON, xhr);
        }
        return respObj || {};
    }

    var restUrlVersionMatch = new RegExp('rest/applinks(?:.*?)/(\\d\\.\\d|\\d)/');
    /**
     * Determine the REST endpoint version of a given URL.
     * @param url
     */
    function versionOf(url) {
        var results = restUrlVersionMatch.exec(url);
        return results && results.length === 2 ? results[1] : false;
    }

    AppLinks.initialisationBinder(function() {
        AppLinks = $.extend(window.AppLinks || {}, {
            failure: function(data) {
                if (data.status == 401) {
                    window.location.reload();
                } else {
                    var message = AppLinks.parseError(data);
                    var errorDivs = $('.page-error');

                    if (errorDivs.length > 0) {
                        errorDivs.html(message).fadeIn('slow');
                    } else {
                        alert('REST request failed: ' + message);
                    }
                }
            },
            jsonRequest: function(url, type, data, success, error, beforeSend) {
                if (data) {
                    data = JSON.stringify(data);
                }
                $(".page-error").fadeOut('fast');
                if (!error) error = AppLinks.failure;
                return jQuery.ajax({
                    url: url,
                    type: type,
                    data: data,
                    dataType: 'json',
                    contentType: "application/json; charset=utf-8",
                    beforeSend: beforeSend,
                    cache: false,
                    success: success,
                    error: error,
                    jsonp: false
                });
            },
            xmlRequest: function(url, type, data, success, error, beforeSend) {
                if (data) {
                    data = JSON.stringify(data);
                }
                $(".page-error").fadeOut('fast');
                if (!error) error = AppLinks.failure;
                return jQuery.ajax({
                    url: url,
                    type: type,
                    data: data,
                    dataType: 'xml',
                    contentType: "application/xml; charset=utf-8",
                    beforeSend: beforeSend,
                    cache: false,
                    success: success,
                    error: error
                });
            },
            parseError: function(errorData) {
                var error = parseJsonResponse(errorData);
                var message = error && error.message;
                if (message) {
                    return $.isArray(message) ? message.join(' ') : message;
                }
                if (errorData) {
                    return errorData.statusText ? errorData.statusText : errorData;
                }
                return 'An unknown error occurred. Check the console logs for details.';
            },
            put: function(url, data, success, error, beforeSend) {
                return AppLinks.jsonRequest(url, 'PUT', data, success, error, beforeSend);
            },
            post: function(url, data, success, error, beforeSend) {
                return AppLinks.jsonRequest(url, 'POST', data, success, error, beforeSend);
            },
            update: function(data, success, error, beforeSend) {
                var selfLink = AppLinks.self_link(data);
                /**
                 * Adapt to the version of the endpoint and the HTTP verb it uses.
                 * yes, this is not "REST-ful". The verb is wrong. It has been wrong since 2014.
                 * It is simpler to adapt than it is to release a new endpoint.
                 */
                var restMethod = versionOf(selfLink) === '1.0' ? AppLinks.put : AppLinks.post;
                restMethod(selfLink, data, success, error, beforeSend);
            },
            get: function(url, success, error, beforeSend) {
                return AppLinks.jsonRequest(url, 'GET', null, success, error, beforeSend);
            },
            getXml: function(url, success, error, beforeSend) {
                return AppLinks.xmlRequest(url, 'GET', null, success, error, beforeSend);
            },
            self_link: function(item) {
                for (var i = 0, _i = item.link.length; i < _i; i++) {
                    var link = item.link[i];
                    if (link.rel == "self") return link.href;
                }

                throw "No self-link found";
            },
            del: function(urlOrObject, success, error, beforeSend) {
                var url;
                if (typeof(urlOrObject) == 'string') url = urlOrObject;
                else url = AppLinks.self_link(urlOrObject);
                return AppLinks.jsonRequest(url, 'DELETE', null, success, error, beforeSend);
            },
            SPI: $.extend({}, {
                API_VERSION: "1.0",
                REST_RESOURCE_URL: AJS.contextPath() + "/rest/applinks/",
                BASE_URL: AJS.contextPath() + "/rest/applinks/1.0",
                OAUTH_REST_RESOURCE_URL: AJS.contextPath() + "/rest/applinks-oauth/",
                OAUTH_BASE_URL: AJS.contextPath() + "/rest/applinks-oauth/1.0",

                /**
                 * Update the API version and associated urls.
                 * @param version
                 */
                setApiVersion: function(version){
                    AppLinks.SPI.API_VERSION = version;
                    AppLinks.SPI.setBaseUrl(AppLinks.SPI.REST_RESOURCE_URL + AppLinks.SPI.API_VERSION);
                },
                setBaseUrl: function(url){
                    AppLinks.SPI.BASE_URL = url;
                },
                setOAuthBaseUrl: function(url){
                    AppLinks.SPI.OAUTH_BASE_URL = url;
                },
                /**
                 * Build a base URL for rest calls using the specified baseUrl.
                 * @param baseUrl
                 * @returns {string}
                 */
                getRemoteRestBaseUrl: function(baseUrl) {
                    return baseUrl + "/rest/applinks/" + AppLinks.SPI.API_VERSION;
                },
                /**
                 * Build a base URL for plugin servlet calls using the specified baseUrl.
                 * @param baseUrl
                 * @returns {string}
                 */
                getRemotePluginServletBaseUrl: function(baseUrl) {
                    return baseUrl + "/plugins/servlet";
                },
                getAllLinks: function(success, failure) {
                    var url = AppLinks.SPI.BASE_URL + "/applicationlink";
                    return AppLinks.get(url, success, failure);
                },
                getAllLinksWithAuthInfo: function(success, failure) {
                    var url = AppLinks.SPI.BASE_URL + "/listApplicationlinks";
                    return AppLinks.get(url, success, failure);
                },
                getApplicationLinkState: function(id, success, failure) {
                    var url = AppLinks.SPI.BASE_URL + "/listApplicationlinkstates/id/" + id;
                    return AppLinks.get(url, success, failure);
                },
                getLinksOfType: function(typeId, success, failure) {
                    var url = AppLinks.SPI.BASE_URL + "/applicationlink/type/" + typeId;
                    return AppLinks.get(url, success, failure);
                },
                tryToFetchManifest: function(url, success, failure) {
                    var restUrl = AppLinks.SPI.BASE_URL + '/applicationlinkForm/manifest.json?url=' + encodeURIComponent(url);
                    return AppLinks.get(restUrl, success, failure, function(jqxhr) {
                        jqxhr.setRequestHeader("X-Atlassian-Token", "no-check");
                    });
                },
                getManifestFor: function(id, success, failure) {
                    var url = AppLinks.SPI.BASE_URL + '/manifest/' + id + ".json";
                    return AppLinks.get(url, success, failure);
                },
                getLocalManifest: function(success, failure){
                    var url = AppLinks.SPI.BASE_URL + '/manifest.json';
                    return AppLinks.get(url, success, failure);
                },
                /**
                 * Attempt to get the Manifest of the remote application, via a direct REST call.
                 * Requires CORS enabled on the REST resource.
                 * @param url
                 * @param success
                 * @param failure
                 * @returns {*}
                 */
                getRemoteManifest: function(remoteBaseUrl, success, failure){
                    var remoteManifestUrl = AppLinks.SPI.getRemoteRestBaseUrl(remoteBaseUrl) + '/manifest.json';
                    return AppLinks.get(remoteManifestUrl, success, failure);
                },
                /**
                 * Attempt to get the OAuth Consumer Info of the remote application, via a direct call.
                 * Requires CORS enabled on the REST resource.
                 * @param url
                 * @param success
                 * @param failure
                 * @returns {*}
                 */
                getRemoteOAuthConsumerInfo: function(remoteBaseUrl, success, failure){
                    var remoteManifestUrl = AppLinks.SPI.getRemotePluginServletBaseUrl(remoteBaseUrl) + '/oauth/consumer-info';
                    return AppLinks.getXml(remoteManifestUrl, success, failure);
                },
                getApplinkStatus: function (applinkId, success, failure) {
                    var url = AppLinks.SPI.BASE_URL + '/status/' + applinkId;
                    return AppLinks.get(url, success, failure);
                },
                createStaticUrlAppLink: function(applicationType, success, failure) {
                    var restUrl = AppLinks.SPI.BASE_URL + '/applicationlinkForm/createStaticUrlAppLink?typeId=' + applicationType;
                    return AppLinks.post(restUrl, null, success, failure);
                },
                createLink: function(applicationLink, username, password, createTwoWayLink, customRpcUrl, rpcUrl, configFormValues, success, failure) {
                    var url = AppLinks.SPI.BASE_URL + '/applicationlinkForm/createAppLink';
                    var data = {
                        applicationLink: applicationLink,
                        username: username,
                        password: password,
                        createTwoWayLink: createTwoWayLink,
                        customRpcURL: customRpcUrl,
                        rpcUrl: rpcUrl,
                        configFormValues: configFormValues
                    };
                    return AppLinks.post(url, data, success, failure);
                },
                createLinkWithOrphanedTrust : function(applicationLink, username, password, createTwoWayLink, customRpcUrl, rpcUrl, configFormValues, orphanedTrust, success, failure) {
                    var url = AppLinks.SPI.BASE_URL + '/applicationlinkForm/createAppLink';
                    var data = {
                        applicationLink: applicationLink,
                        username: username,
                        password: password,
                        createTwoWayLink: createTwoWayLink,
                        customRpcURL: customRpcUrl,
                        rpcUrl: rpcUrl,
                        configFormValues: configFormValues,
                        orphanedTrust: orphanedTrust
                    };
                    return AppLinks.post(url, data, success, failure);
                },
                verifyTwoWayLinkDetails : function (remoteUrl, rpcUrl, username, password, success, failure) {
                    var url = AppLinks.SPI.BASE_URL + '/applicationlinkForm/details';
                    var data = {
                        username: username,
                        password: password,
                        remoteUrl: remoteUrl,
                        rpcUrl: rpcUrl
                    };
                    return AppLinks.post(url, data, success, failure);
                },
                getApplicationLinkInfo: function (appId, success, error) {
                    var url = AppLinks.SPI.BASE_URL + "/applicationlinkInfo/id/" + appId;
                    return AppLinks.get(url, success, error);
                },
                deleteLink: function(applicationLink, reciprocate, success, error) {
                    var url = AppLinks.SPI.BASE_URL + "/applicationlink/" + applicationLink.id;
                    if (reciprocate) url += "?reciprocate=true";
                    return AppLinks.del(url, success, error);
                },
                makePrimary: function(applicationLink, success) {
                    var url = AppLinks.SPI.BASE_URL + "/applicationlink/primary/" + applicationLink.id;
                    return AppLinks.post(url, null, success);
                },
                relocate: function(applicationLink, newUrl, suppressWarnings, success, error) {
                    var url = AppLinks.SPI.BASE_URL + "/relocateApplicationlink/" + applicationLink.id + "?newUrl=" + encodeURIComponent(newUrl) +
                        "&nowarning=" + (suppressWarnings ? "true" : "false");
                    return AppLinks.post(url, null, success, error);
                },
                legacyUpgrade: function(applicationLink, success, error) {
                    var url = AppLinks.SPI.BASE_URL + "/upgrade/legacy/" + applicationLink.id;
                    return AppLinks.post(url, null, success, error);
                },
                ualUpgrade: function(applicationLink, body, success, error) {
                    var url = AppLinks.SPI.BASE_URL + "/upgrade/ual/" + applicationLink.id;
                    return AppLinks.post(url, body, success, error);
                },
                getEntityTypesForApplicationType: function(applicationType, success, error) {
                    var url = AppLinks.SPI.BASE_URL + "/type/entity/" + applicationType;
                    return AppLinks.get(url, success, error);
                },
                getLocalEntitiesWithLinksToApplication: function(applicationLinkId, success, error) {
                    var url = AppLinks.SPI.BASE_URL + "/entitylink/localEntitiesWithLinksTo/" + applicationLinkId + ".json";
                    return AppLinks.get(url, success, error);
                },
                getEntityLinksForApplication: function(applicationLinkId, success, error) {
                    var url = AppLinks.SPI.BASE_URL + "/entities/" + applicationLinkId + ".json";
                    AppLinks.get(url, success, error);
                },
                getEntityLinksForApplicationUsingAnonymousAccess: function(applicationLinkId, success, error) {
                    var url = AppLinks.SPI.BASE_URL + "/entities/anonymous/" + applicationLinkId + ".json";
                    return AppLinks.get(url, success, error);
                },
                createNonUalEntityLink: function(localType, localKey, applicationId, remoteTypeId, remoteKey, name, success, error) {
                    var url = AppLinks.SPI.BASE_URL + "/entitylink/" + localType + "/" + localKey + "?reciprocate=false";
                    var data = {
                        applicationId: applicationId,
                        typeId: remoteTypeId,
                        key: remoteKey,
                        name: name,
                        isPrimary: false
                    };
                    return AppLinks.put(url, data, success, error);
                },
                createEntityLink: function(localType, localKey, entity, reciprocate, success, failure) {
                    var url = AppLinks.SPI.BASE_URL + "/entitylink/" + localType + "/" + localKey + "?reciprocate=";
                    url += (reciprocate ? "true" : "false");
                    return AppLinks.put(url, entity, success, failure);
                },
                getConfiguredEntityLinks: function(localType, localKey, success, error) {
                    var url = AppLinks.SPI.BASE_URL + "/entitylink/primaryLinks/" + localType + "/" + localKey + ".json";
                    return AppLinks.get(url, success, error);
                },
                deleteEntityLink: function(localTypeId, localKey, entity, reciprocate, success, error) {
                    var url = AppLinks.SPI.BASE_URL + "/entitylink/" + localTypeId + "/" + localKey + "?typeId=" + entity.typeId + "&key=" + entity.key + "&applicationId=" + entity.applicationId + "&reciprocate=" + reciprocate;
                    return AppLinks.del(url, success, error);
                },
                makePrimaryEntityLink: function(localTypeID, localKey, entity, success, error) {
                    var url = AppLinks.SPI.BASE_URL + "/entitylink/primary/" + localTypeID + "/" + localKey + "?typeId=" + entity.typeId + "&key=" + entity.key + "&applicationId=" + entity.applicationId;
                    return AppLinks.post(url, null, success, error);
                },
                canDeleteAppLink: function(applicationId, success, error) {
                    var url = AppLinks.SPI.BASE_URL + "/permission/reciprocate-application-delete/" + applicationId;
                    return AppLinks.get(url, success, error);
                },
                canDeleteEntityLink: function(localTypeId, localKey, entity, success, error) {
                    var url = AppLinks.SPI.BASE_URL + "/permission/reciprocate-entity-delete/" + entity.applicationId + "/" + localTypeId + "/" + localKey + "/" + entity.typeId + "/" + entity.key;
                    return AppLinks.get(url, success, error);
                },
                canCreateReciprocateEntityLink: function(applicationId, success, error) {
                    var url = AppLinks.SPI.BASE_URL + "/permission/reciprocate-entity-create/" + applicationId;
                    return AppLinks.get(url, success, error);
                },
                processPermissionCode: function(settings) {
                    var config = {
                        noPermission: function() {},
                        missing: function() {},
                        credentialsRequired: function(authUrl) {},
                        authenticationFailed: function(authUrl) {},
                        noAuthentication: function(authUrl) {},
                        noAuthenticationConfigured: function() {},
                        noConnection: function() {},
                        allowed: function() {},
                        unrecognisedCode: function(code) {},
                        updateView: function(message, icon, button) {}
                    };

                    if (!settings) settings = {};

                    settings = $.extend(config, settings);

                    return function(data) {
                        var code = data.code;
                        if (code == "NO_PERMISSION") {
                            settings.noPermission();
                        } else if (code == "MISSING") {
                            settings.missing();
                        } else if (code == "CREDENTIALS_REQUIRED") {
                            settings.credentialsRequired(data.url);
                        } else if (code == "AUTHENTICATION_FAILED") {
                            settings.authenticationFailed(data.url);
                        } else if (code == "NO_AUTHENTICATION") {
                            settings.noAuthentication(data.url);
                        } else if (code == "NO_AUTHENTICATION_CONFIGURED") {
                            settings.noAuthenticationConfigured();
                        } else if (code == "NO_CONNECTION") {
                            settings.noConnection();
                        } else if (code == "ALLOWED") {
                            settings.allowed();
                        } else {
                            settings.unrecognisedCode(data.code);
                        }
                    };
                },
                addAuthenticationTrigger: function(target, authUrl, callbacks) {
                    if (!callbacks) {
                        callbacks = {};
                    }

                    if (typeof callbacks.onSuccess == "undefined") {
                        callbacks.onSuccess = function() {
                            location.reload();
                        }
                    }

                    if (typeof callbacks.onFailure == "undefined") {
                        callbacks.onFailure = function() {
                            return true;
                        }
                    }
                    //Unbind previous click listener, otherwise we might end up opening multiple windows.
                    $(target).off('click.applinks');
                    $(target).on('click.applinks', function() {
                        if (callbacks.before) {
                            callbacks.before();
                        }
                        AppLinks.authenticateRemoteCredentials(authUrl, callbacks.onSuccess, callbacks.onFailure);
                    });
                },
                deleteOrphanedTrust: function(id, type, success, error) {
                    var url = AppLinks.SPI.BASE_URL + "/orphaned-trust/" + type + "/" + id;
                    return AppLinks.del(url, success, error);
                },
                getOrphanedTrust: function(success, error) {
                    var url = AppLinks.SPI.BASE_URL + "/orphaned-trust/";
                    return AppLinks.get(url, success, error);
                },
                showCreateEntityLinkSuggestion: function() {
                    return true;
                },
                getApplicationLink: function(id, success, failure) {
                    var url = AppLinks.SPI.BASE_URL + '/applicationlink/' + id;
                    return AppLinks.get(url, success, failure);
                },
                createApplicationLink: function(id, name, rpcUrl, displayUrl, typeId, success, failure) {
                    var url = AppLinks.SPI.BASE_URL + '/applicationlink';
                    var data = {
                        id: id,
                        name: name,
                        rpcUrl: rpcUrl,
                        displayUrl: displayUrl,
                        typeId: typeId
                    };
                    return AppLinks.put(url, data, success, failure);
                },
// TODO APLDEV-3 extract OAuth creation code into OAuth specific js files in the Oauth plugin.
                createConsumer: function(id, key, name, description, sharedSecret, publicKey, twoLOAllowed, executingTwoLOUser, twoLOImpersonationAllowed, outgoing, success, failure) {
                    var url = AppLinks.SPI.OAUTH_BASE_URL + '/applicationlink/' + id + '/authentication/consumer';
                    var data = {
                        key: key,
                        name: name,
                        description: description,
                        sharedSecret: sharedSecret,
                        publicKey: publicKey,
                        outgoing: outgoing,
                        twoLOAllowed: twoLOAllowed,
                        executingTwoLOUser: executingTwoLOUser,
                        twoLOImpersonationAllowed: twoLOImpersonationAllowed
                    };
                    return AppLinks.put(url, data, success, failure);
                },
                createConsumerAutoConfigure: function(id, twoLOAllowed, executingTwoLOUser, twoLOImpersonationAllowed, success, failure) {
                    var url = AppLinks.SPI.OAUTH_BASE_URL + '/applicationlink/' + id + '/authentication/consumer?autoConfigure=true';
                    var data = {
                        twoLOAllowed: twoLOAllowed,
                        executingTwoLOUser: executingTwoLOUser,
                        twoLOImpersonationAllowed: twoLOImpersonationAllowed
                    };
                    return AppLinks.put(url, data, success, failure);
                },
                registerProvider: function(id, provider, config, success, failure) {
                    var url = AppLinks.SPI.BASE_URL + '/applicationlink/' + id + '/authentication/provider';
                    var data = {
                        config : config,
                        provider : provider
                    };
                    return AppLinks.put(url, data, success, failure);
                },
                enableFeature: function(featureName, success, failure) {
                    var url = AppLinks.SPI.BASE_URL + '/features/' + featureName;
                    return AppLinks.put(url, {}, success, failure);
                },
                disableFeature: function(featureName, success, failure) {
                    var url = AppLinks.SPI.BASE_URL + '/features/' + featureName;
                    return AppLinks.del(url, success, failure);
                }
            }, (window.AppLinks && window.AppLinks.SPI) || {})
        });

        AppLinks.UI = {
            showInfoBox: function(message) {
                $('.aui-message.aui-message-success').remove();
                AppLinks.UI.createMessage('success', message, 'page-info');
            },
            hideInfoBox: function() {
                $('.aui-message.aui-message-success').remove();
            },
            showErrorBox: function(message) {
                AppLinks.UI.createMessage('error', message, 'page-error');
            },
            hideErrorBox: function() {
                $('.aui-message.aui-message-error').remove();
            },
            showWarningBox: function(messages) {
                if ($.isArray(messages) && messages.length > 0) {
                    var ulEl = $("<ul></ul>");
                    $(messages).each(function(index) {
                        ulEl.append($("<li/>", {
                            text: messages[index]
                        }));
                    });
                    var messageEl = $('<div class="page-warning"></div>').append(ulEl);
                    AppLinks.UI.createMessage('warning', messageEl.html(), 'page-warning');
                } else {
                    AppLinks.UI.createMessage('warning', messages, 'page-warning');
                }
            },
            hideWarningBox: function() {
                $('.aui-message.aui-message-warning').remove();
            },
            shortenString: function(message, maxLength) {
                if (message.length  > maxLength) {
                    message = message.substring(0, maxLength) + "...";
                }
                return message;
            },
            createMessage: function(type, message, cssClass) {
                var messageEl = $('<div class="' + cssClass + '">');
                messageEl.html(message);
                AJS.messages[type](".applinks-message-bar", {
                    title: "",
                    body: messageEl.wrap('<div></div>').parent().html(),
                    closeable: true
                });
                $(document).trigger(AppLinks.Event.Legacy.MESSAGE_BOX_DISPLAYED);
            },
            displayValidationErrorMessages: function (errorClass, rootEl, messages) {
                if ($.isArray(messages)) {
                    $(messages).each(function(i,v) {
                        var d = $('<div class="error applinks-error">');
                        d.text(v);
                        $(rootEl).find("." + errorClass).append(d);
                    });
                } else if(typeof messages != 'undefined'){
                    var d = $('<div class="error applinks-error">');
                    d.text(messages.toString());
                    $(rootEl).find("." + errorClass).append(d);
                }
            },
            displayValidationError: function(errorClass, rootEl, errorFn) {
                return function(xhr) {
                    if (xhr.status == 401) {
                        window.location.reload();
                        return;
                    }
                    $('.applinks-error').remove();
                    $('aui-spinner').remove();

                    var respObj = parseJsonResponse(xhr);
                    var messages = respObj.message;

                    if (typeof respObj.fields == "undefined") {
                        AppLinks.UI.displayValidationErrorMessages(errorClass, rootEl, messages);
                    } else {
                        var fields = respObj.fields;
                        $(fields).each(function(index) {
                            var d = $('<div class="error applinks-error" id="' + fields[index] + '-error">');
                            d.text(messages[index]);
                            if ($(rootEl).find('.' + fields[index]).length > 0) {
                                d.insertAfter($(rootEl).find('.' + fields[index]));
                            } else {
                                d.insertAfter($(rootEl).find('.' + errorClass).append(d));
                            }
                        });
                    }
                    $(rootEl).find('.' + errorClass).addClass("fully-populated-errors");
                    if (errorFn) {
                        errorFn();
                    }
                }
            },
            addProtocolToURL : function(url) {
                var newUrl = $.trim(url);
                var tempURL = newUrl.toLowerCase();
                var hasProtocol = false;
                if (tempURL.length >= 7) {
                    if (tempURL.substring(0,7).indexOf('http') != -1) {
                        hasProtocol = true;
                    }
                }
                //default protocol is http
                if (!hasProtocol) {
                    newUrl = 'http://' + newUrl;
                }
                return newUrl;
            },
            /**
             * Similar to the standard Javascript join() method, but nicer in that
             * it uses a different delimiter for the last node (by default "and"),
             * so that:
             * {code}
             * "1, 2 and 3" == prettyJoin(['1', '2', '3'], function(value) {return value;});
             * {code}
             *
             * @param inputArray
             * @param resolveFn
             * @param finalDelimiter
             */
            prettyJoin : function(inputArray, resolveFn, finalDelimiter) {
                if (!finalDelimiter) {
                    finalDelimiter = "and";
                }
                var maxLength = inputArray.length;
                var message = "";
                $.each(inputArray, function(index, value) {
                    if (index == (maxLength - 1) && maxLength > 1) {
                        message += " " + finalDelimiter + "  " + resolveFn(value);
                    } else {
                        message += resolveFn(value);
                        if (index + 2 < maxLength) {
                            message += ", ";
                        }
                    }
                });
                return message;
            },
            showLoadingIcon: function(element) {
                $('<aui-spinner size="small" class="applinks-loading"></aui-spinner>').insertBefore(element);
            },
            hideLoadingIcon: function(element) {
                $(element).prev('aui-spinner').remove();
            },
            findUrl: function(text) {
                var url = undefined;
                var lcText = text.toLowerCase();
                var startOfUrl = lcText.indexOf('http:');
                if (startOfUrl == -1) {
                    startOfUrl = lcText.indexOf('https:');
                }
                if (startOfUrl > -1) {
                    var endOfUrl = lcText.indexOf(' ', startOfUrl);
                    if (endOfUrl == -1) {
                        endOfUrl = lcText.length;
                    }
                    url = text.substring(startOfUrl, endOfUrl); // use _case-sensitive_ version to retrieve the actual URL
                }
                return url;
            },
            findApplicationType : function(id) {
                id = id.toLowerCase();
                if (id.indexOf("jira") != -1) {
                    return "jira";
                } else if (id.indexOf("fisheye") != -1) {
                    return "fecru";
                } else if (id.indexOf("confluence") != -1) {
                    return "confluence";
                } else if (id.indexOf("refapp") != -1) {
                    return "refapp";
                } else {
                    return undefined;
                }
            },
            escapeSelector: function(selector) {
                // based on http://samuelsjoberg.com/archive/2009/09/escape-jquery-selectors
                return selector.replace(/([#;&,\.\+\*\~':"\!\^$\[\]\(\)=>\|])/g, "\\$1");
            },
            sanitiseHTML: function(input) {
                var replacements = {
                    "<": "&lt;",
                    '"': "&quot;",
                    "&": "&amp;"
                };
                return input.replace(/[<"&]/g, function(match) {
                    return replacements[match];
                });
            },
            refreshOrphanedTrust: function() {
                // post dialog -- check whether we need to remove any orphaned-trust entries
                var updateOrphanedTrust = function(data) {
                    $("tr.orphaned-trust-row").each(function() {
                        var $this = $(this);
                        var id = $this.attr("data-id");
                        var type = $this.attr("data-type");
                        var stillExists = false;
                        for (var i = 0; i < data.orphanedTrust.length; i++) {
                            var ot = data.orphanedTrust[i];
                            if (id == ot.id && type == ot.type) {
                                stillExists = true;
                                break;
                            }
                        }
                        if (!stillExists) {
                            $this.remove();
                            if (data.orphanedTrust.length == 0) {
                                // we just removed the last orphaned trust cert, hide warning!
                                $(".orphaned-trust-warning").hide();
                            }
                        }
                    });
                };

                AppLinks.SPI.getOrphanedTrust(updateOrphanedTrust);
            },
            removeCssClass: function(element, prefix) {
                $(element).removeClass( function(index, className) {
                    var classes = className.split(' ');
                    var classToRemove = "";
                    $.each(classes, function(index, value) {
                        if (value.indexOf(prefix) != -1) {
                            classToRemove = value;
                        }
                    });
                    return classToRemove;
                } );
            }
        };

        /**
         * Add jQuery event system to AppLinks.UI namespace.
         */
        (function(){
            var eventBus = $({});
            $.each(['bind', 'unbind', 'trigger'], function(i, current){
                AppLinks.UI[current] = function(){
                    return eventBus[current].apply(eventBus, arguments);
                }
            });
        })();

        $(document).trigger(AppLinks.Event.PREREADY);
        $(document).trigger(AppLinks.Event.READY);
    });
})(require('applinks/common/i18n'), require('applinks/common/docs'), require('applinks/common/events'));
