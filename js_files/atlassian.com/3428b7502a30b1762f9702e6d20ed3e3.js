WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.auiplugin:split_aui.behaviour.event-bus', location = 'aui.chunk.87c53d26d7a3720c53f4--6212a4090f4e427518ae.js' */
"use strict";(globalThis.webpackChunk_auiRuntime=globalThis.webpackChunk_auiRuntime||[]).push([[5970],{},u=>{u.O(0,[4496,5131,2178,9146,6319,7463],(()=>{return a=2440,u(u.s=a);var a}));u.O()}]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.analytics.analytics-client:js-events', location = 'js/event-queue-init.js' */
(function(){AJS.EventQueue=AJS.EventQueue||[];var b=Array.prototype.push;AJS.EventQueue.push=function(a){a.time=(new Date).getTime();b.call(AJS.EventQueue,a)};AJS.Analytics={triggerPrivacyPolicySafeEvent:function(a,c){AJS.log("WARN: 'triggerPrivacyPolicySafeEvent' has been deprecated");AJS.EventQueue.push({name:a,properties:c})}}})();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.analytics.analytics-client:policy-update-init', location = 'js/policy-update-init.js' */
AJS.toInit(function(){WRM.data.claim("com.atlassian.analytics.analytics-client:policy-update-init.policy-update-data-provider")&&WRM.require("wrc!com.atlassian.analytics.analytics-client:policy-update")});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.analytics.analytics-client:programmatic-analytics-init', location = 'js/programmatic-analytics-init.js' */
(function(){WRM.data.claim("com.atlassian.analytics.analytics-client:programmatic-analytics-init.programmatic-analytics-data-provider")&&WRM.require("wrc!com.atlassian.analytics.analytics-client:programmatic-analytics")})();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:split_aui.pattern.multi-step-progress', location = 'aui.chunk.683b49531072242a01e7--58404a1f1469c40f49a9.js' */
"use strict";(globalThis.webpackChunk_auiRuntime=globalThis.webpackChunk_auiRuntime||[]).push([[4798],{6410:(u,a,i)=>{i.r(a)}},u=>{u.O(0,[1263,5366,3910],(()=>{return a=6410,u(u.s=a);var a}));u.O()}]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-progress-tracker:progress-tracker-resources', location = '/js/progress-tracker.js' */

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:application-header-administration-cog-resource', location = 'header/cog.js' */
var NavLinks=function(b){b.ApplicationHeader=function(c){c.Cog=function(){return{getDropdown:function(){var a=AJS.$("#system-admin-menu-content");if(0<a.length)return a;a=AJS.$("#admin-menu-link-content");return 0<a.length?a:AJS.$("#bamboo\\.global\\.header-admin\\.menu")}}}();return c}(b.ApplicationHeader||{});return b}(NavLinks||{});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:administration-shortcuts-resources', location = 'adminshortcuts/adminshortcuts.soy' */
// This file was automatically generated from adminshortcuts.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace navlinks.templates.adminshortcuts.
 */

if (typeof navlinks == 'undefined') { var navlinks = {}; }
if (typeof navlinks.templates == 'undefined') { navlinks.templates = {}; }
if (typeof navlinks.templates.adminshortcuts == 'undefined') { navlinks.templates.adminshortcuts = {}; }


navlinks.templates.adminshortcuts.section = function(opt_data, opt_ignored) {
  var param5 = '<ul class="aui-list-truncate">';
  var linkList7 = opt_data.links;
  var linkListLen7 = linkList7.length;
  for (var linkIndex7 = 0; linkIndex7 < linkListLen7; linkIndex7++) {
    var linkData7 = linkList7[linkIndex7];
    param5 += '<li><a href="' + soy.$$escapeHtml(linkData7.link) + '">' + soy.$$escapeHtml(linkData7.label) + '</a></li>';
  }
  param5 += '</ul>';
  var output = '' + aui.dropdown2.section({id: 'nl-remote-admin-section', label: 'Other applications', content: param5});
  return output;
};
if (goog.DEBUG) {
  navlinks.templates.adminshortcuts.section.soyTemplateName = 'navlinks.templates.adminshortcuts.section';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:administration-shortcuts-resources', location = 'adminshortcuts/adminnavlinks.js' */
var NavLinks=function(b){b.AdminShortcuts=function(){var c=function(){AJS.$("#nl-remote-admin-section").on("click","a",function(){NL.trackEvent("remoteAdminItemSelected",NL.getCurrentApplication(),$(this).attr("href"))})};return{render:function(){AJS.$.ajax({url:AJS.contextPath()+"/rest/menu/latest/admin",cache:!1,dataType:"json"}).done(function(a){a=a.filter(function(d){return!d.local});a.length&&(a=navlinks.templates.adminshortcuts.section({links:a}),b.ApplicationHeader.Cog.getDropdown().append(a),
c())})}}}();return b}(NavLinks||{});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:administration-shortcuts', location = 'adminshortcuts/adminshortcuts-cdn.js' */
AJS.toInit(function(){AJS.DarkFeatures&&AJS.DarkFeatures.isEnabled("rotp.admin.shortcuts")&&NavLinks.AdminShortcuts.render()});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:split_aui.splitchunk.vendors--e6639db5ee', location = 'aui.chunk.40d9cac9e70a5743d779--bed67c9397ac99529008.js' */
(globalThis.webpackChunk_auiRuntime=globalThis.webpackChunk_auiRuntime||[]).push([[6140],{1891:(E,u,i)=>{var n,e,t;
/*!
 * jQuery UI Keycode 1.13.3
 * https://jqueryui.com
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * https://jquery.org/license
 */!function(o){"use strict";e=[i(4440),i(3309)],void 0===(t="function"==typeof(n=function(E){return E.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}})?n.apply(u,e):n)||(E.exports=t)}()}}]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:split_jquery.ui.keycode', location = 'aui.chunk.6d27a8badbc102f7bf0b--1c8f557807b6e794adce.js' */
"use strict";(globalThis.webpackChunk_auiRuntime=globalThis.webpackChunk_auiRuntime||[]).push([[1191],{465:(u,a,e)=>{e.r(a),e.d(a,{default:()=>i});e(1891);const i="jquery"}},u=>{u.O(0,[9100,6140,4496],(()=>{return a=465,u(u.s=a);var a}));u.O()}]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:rotp-projectshortcuts', location = 'projectshortcuts/projectshortcuts.soy' */
// This file was automatically generated from projectshortcuts.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace navlinks.templates.projectshortcuts.
 */

if (typeof navlinks == 'undefined') { var navlinks = {}; }
if (typeof navlinks.templates == 'undefined') { navlinks.templates = {}; }
if (typeof navlinks.templates.projectshortcuts == 'undefined') { navlinks.templates.projectshortcuts = {}; }


navlinks.templates.projectshortcuts.dialogContent = function(opt_data, opt_ignored) {
  return '' + ((opt_data.localShortcuts && opt_data.localShortcuts.length > 0) ? navlinks.templates.projectshortcuts.dialogContentShortcuts({shortcuts: opt_data.localShortcuts, listClass: 'projectshortcut-links'}) : '') + ((opt_data.remoteShortcuts != null) ? (opt_data.remoteShortcuts.length > 0) ? '<h2 class="projectshortcuts-heading">Related Links</h2>' + navlinks.templates.projectshortcuts.dialogContentShortcuts(soy.$$augmentMap(opt_data.remoteShortcuts, {shortcuts: opt_data.remoteShortcuts, listClass: 'projectshortcut-links'})) : '' : navlinks.templates.projectshortcuts.dialogLoading(null));
};
if (goog.DEBUG) {
  navlinks.templates.projectshortcuts.dialogContent.soyTemplateName = 'navlinks.templates.projectshortcuts.dialogContent';
}


navlinks.templates.projectshortcuts.headingWrapper = function(opt_data, opt_ignored) {
  return '<div class="project-dialog-header-wrapper"><div class="project-header"><img class="project-img" src="' + soy.$$escapeHtml(opt_data.logoUrl) + '"><h2 class="dialog-title">' + soy.$$escapeHtml(opt_data.title) + '</h2></div><div class="project-content-wrapper">' + soy.$$filterNoAutoescape(opt_data.contentHtml) + '</div></div>';
};
if (goog.DEBUG) {
  navlinks.templates.projectshortcuts.headingWrapper.soyTemplateName = 'navlinks.templates.projectshortcuts.headingWrapper';
}


navlinks.templates.projectshortcuts.dialogContentShortcuts = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  var output = '<ul' + ((opt_data.listClass) ? ' class="' + soy.$$escapeHtml(opt_data.listClass) + '"' : '') + '>';
  var shortcutList35 = opt_data.shortcuts;
  var shortcutListLen35 = shortcutList35.length;
  for (var shortcutIndex35 = 0; shortcutIndex35 < shortcutListLen35; shortcutIndex35++) {
    var shortcutData35 = shortcutList35[shortcutIndex35];
    output += '<li' + ((shortcutIndex35 == shortcutListLen35 - 1) ? ' class="last"' : '') + '>' + navlinks.templates.projectshortcuts.dialogContentShortcut(shortcutData35) + '</li>';
  }
  output += '</ul>';
  return output;
};
if (goog.DEBUG) {
  navlinks.templates.projectshortcuts.dialogContentShortcuts.soyTemplateName = 'navlinks.templates.projectshortcuts.dialogContentShortcuts';
}


navlinks.templates.projectshortcuts.dialogContentShortcut = function(opt_data, opt_ignored) {
  return '<a href="' + soy.$$escapeHtml(opt_data.link) + '"' + ((opt_data.tooltip) ? ' title="' + soy.$$escapeHtml(opt_data.tooltip) + '"' : '') + '>' + soy.$$escapeHtml(opt_data.label) + '</a>';
};
if (goog.DEBUG) {
  navlinks.templates.projectshortcuts.dialogContentShortcut.soyTemplateName = 'navlinks.templates.projectshortcuts.dialogContentShortcut';
}


navlinks.templates.projectshortcuts.dialogLoading = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '<div class="projectshortcuts-loading">' + ((opt_data.text) ? soy.$$escapeHtml(opt_data.text) : '') + '</div>';
};
if (goog.DEBUG) {
  navlinks.templates.projectshortcuts.dialogLoading.soyTemplateName = 'navlinks.templates.projectshortcuts.dialogLoading';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:rotp-projectshortcuts', location = 'projectshortcuts/projectshortcuts.js' */
(function(g,r){function n(){return g(".project-shortcut-dialog-trigger img").attr("src")}function k(a){a.localShortcuts&&(c.getCurrentPanel().html(navlinks.templates.projectshortcuts.headingWrapper({title:a.entity.title,logoUrl:n(),contentHtml:navlinks.templates.projectshortcuts.dialogContent(a)})),l(c))}function l(a){a=a.popup.element;var h=a.find(".dialog-panel-body"),m=a.find(".dialog-components");h.height("auto");a.height(m.outerHeight()-1);g(".aui-shadow").remove()}function p(a,h){return g.ajax({url:a,
cache:!1,data:h,dataType:"json"})}var c,e={};g(document).on("click",".project-shortcut-dialog-trigger",function(a){function h(d){e[b].localShortcuts=d.shortcuts;k(e[b])}function m(d){e[b].remoteShortcuts=d.shortcuts;k(e[b])}var f=g(this),b=f.data("key"),q=f.data("name");f=f.data("entity-type");"undefined"!==typeof b&&(a.preventDefault(),c=(new AJS.Dialog({width:600,keypressListener:function(d){d.which==jQuery.ui.keyCode.ESCAPE&&c.remove()},id:"project-shortcuts-dialog"})).addCancel("Close",function(){c.remove()}).addPanel("",
navlinks.templates.projectshortcuts.headingWrapper({title:q,logoUrl:n(),contentHtml:navlinks.templates.projectshortcuts.dialogLoading({text:"Retrieving links…"})})).show(),l(c),e[b]?k(e[b]):(e[b]={entity:{title:q},localShortcuts:null,remoteShortcuts:null},p(AJS.contextPath()+"/rest/project-shortcuts/1.0/local/"+b,{entityType:f}).done(h),p(AJS.contextPath()+"/rest/project-shortcuts/1.0/remote/"+b,{entityType:f}).done(m).fail(function(){var d=c.getCurrentPanel().body.find(".project-content-wrapper");
d.find(".projectshortcuts-loading").remove();AJS.messages.error(d,{body:"Could not retrieve remote project shortcuts",closeable:!1});l(c)})))})})(jQuery,window.NL=window.NL||{});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:atlassian-ui-popup-display-controller', location = 'popups/DisplayController.js' */
AJS.Popups=AJS.Popups||{};AJS.Popups.DisplayController=function(){var a=[],c=!1,d=!1;AJS.toInit(function(){setTimeout(function(){AJS.Popups.DisplayController.render()},0)});return{request:function(b){a.push(b);c&&!1===d&&this.render()},render:function(){a.sort(function(b,e){return b.weight-e.weight});c=!0;0!==a.length&&(d=!0,a[0].show())}}}();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:split_aui.page.iconography', location = 'aui.chunk.5822db8c38c18b1d1ca2--fbc29624b75ce9a7c2dd.js' */
"use strict";(globalThis.webpackChunk_auiRuntime=globalThis.webpackChunk_auiRuntime||[]).push([[3008],{9794:(u,a,i)=>{i.r(a)}},u=>{u.O(0,[1263,5828,5388,9489],(()=>{return a=9794,u(u.s=a);var a}));u.O()}]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.extra.jira:jira-issues-view-mode-resources', location = 'jira/jira-issues-view-mode/main.js' */
require(["ajs","jquery"],function(a,d){var c=function(){var b=d(".wiki-content [data-jira-key][data-client-id]");if(0==b.length)return!1;WRM.require("wr!confluence.extra.jira:jira-issues-view-mode-async-resource",function(){require(["confluence/jim/jira/jira-issues-view-mode/lazy-loading","confluence/jim/jira/jira-issues-view-mode/fix-ui"],function(e,f){e.init(b).done(function(){f.fixBreakIconInOldConf()})})})};a.toInit(c);a.bind("ic-jim-async-supported",c)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.extra.jira:amd-support', location = 'amd/confluence-shim.js' */
define("confluence/jim/confluence-shim",function(){return window.Confluence});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.extra.jira:amd-support', location = 'amd/amd-exporter.js' */
define("confluence/jim/amd/module-exporter",[],function(){var f={namespace:function(d,e,a){var b=d.split(".");a=a||window;var c,h=b.length-1;for(c=0;c<h;c++){var g=a[b[c]];a=null!=g?g:a[b[c]]={}}a[b[c]]&&window.console&&window.console.warn&&window.console.warn('Value of "'+d+'" was overridden');a[b[c]]=e||a[b[c]]||{};return a[b[c]]},safeRequire:function(d,e){define&&void 0===define.amd&&(d=require(d),e&&e(d))},exportModuleAsGlobal:function(d,e,a){f.safeRequire(d,function(b){f.namespace(e,b);a&&a(b)})}};
return f});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-frontend:querystring', location = '/includes/js/api/querystring.js' */
define("confluence/api/querystring",[],function(){return{stringify:function(a){var c="",b;for(b in a)for(var d=0;d<a[b].length;d++)c+="\x26"+b,a[b][d]&&(c+="\x3d"+a[b][d]);return c.substring(1)},stringifyMap:function(a){var c="";a=Array.from(a);for(var b=0;b<a.length;b++)for(var d=a[b][0],f=a[b][1],e=0;e<f.length;e++)c+="\x26"+d,f[e]&&(c+="\x3d"+f[e]);return c.substring(1)},parse:function(a){var c={};if(a){"?"===a.substr(0,1)&&(a=a.substr(1));a=a.split("\x26");for(var b=0;b<a.length;b++){var d=a[b].split("\x3d");
c[d[0]]||(c[d[0]]=[]);c[d[0]].push(a[b].substring(d[0].length+1))}}return c},parseMap:function(a){var c=new Map;if(a){"?"===a.substr(0,1)&&(a=a.substr(1));a=a.split("\x26");for(var b=0;b<a.length;b++){var d=a[b].split("\x3d");c.has(d[0])||c.set(d[0],[]);c.get(d[0]).push(a[b].substring(d[0].length+1))}}return c}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-frontend:url', location = '/includes/js/api/url.js' */
define("confluence/api/url",["confluence/api/querystring","jquery"],function(d,f){var g=/([^?|#]+)[?]?([^#]*)[#]?(.*)/,e=["source","urlPath","queryParams","anchor"];return{parse:function(a){var b={};if(a=g.exec(a)){for(var c=0;c<e.length;c++)b[e[c]]=a[c];b.queryParams=d.parse(b.queryParams)}return b},parseUrl:function(a){var b=new Map;if(a=g.exec(a)){for(var c=0;c<e.length;c++)b.set(e[c],a[c]);b.set("queryParams",d.parseMap(b.get("queryParams")))}return b},format:function(a){return f.isEmptyObject(a)?
"":(a.urlPath?a.urlPath:"")+(f.isEmptyObject(a.queryParams)?"":"?"+d.stringify(a.queryParams))+(a.anchor?"#"+a.anchor:"")},formatUrl:function(a){return 0===a.size?"":(a.get("urlPath")?a.get("urlPath"):"")+(0===a.get("queryParams").size?"":"?"+d.stringifyMap(a.get("queryParams")))+(a.get("anchor")?"#"+a.get("anchor"):"")}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-frontend:analytics-support', location = '/includes/js/analytics-support.js' */
define("confluence/analytics-support","jquery ajs confluence/meta window document confluence/api/url".split(" "),function(k,r,m,l,n,g){function t(){if("undefined"===typeof p){var a=k._data(l,"events");p=a&&a.analytics&&0<a.analytics.length}return p}var e=Object.create(null),p;e.setAnalyticsSource=function(a,c){t()&&a.attr("href",function(d,b){d=encodeURIComponent(c);b=g.parseUrl(b);0!==b.size&&b.get("queryParams").set("src",[d]);return g.formatUrl(b)})};e.srcRemovedUrl=function(a){a=g.parseUrl(a);
a.get("queryParams").delete("src");for(var c=Array.from(a.get("queryParams").keys()),d=0;d<c.length;d++){var b=c[d],f=b.split(".");3===f.length&&"src"===f[0]&&a.get("queryParams").delete(b);"jwt"===b&&a.get("queryParams").delete(b)}return g.formatUrl(a)};e.srcParamValues=function(a){return(a=g.parseUrl(a).get("queryParams"))&&a.get("src")?a.get("src"):[]};e.srcAttrParamValues=function(a){a=g.parseUrl(a).get("queryParams");for(var c=Object.create(null),d=Array.from(a.keys()),b=0;b<d.length;b++){var f=
d[b],h=f.split(".");if(3===h.length&&"src"===h[0]){var q=h[1];h=h[2];c[q]=c[q]||Object.create(null);c[q][h]=decodeURIComponent(a.get(f)[0])}}return c};e.extractAnalyticsData=function(a){var c=[],d=e.srcParamValues(a);a=e.srcAttrParamValues(a);for(var b=0;b<d.length;b++){var f=d[b];c.push({src:f,attr:a[f]||{}})}return c};e.publish=function(a,c){r.trigger("analytics",{name:a,data:c||{}})};e.init=function(){var a=e.extractAnalyticsData(n.URL),c={userKey:m.get("remote-user-key"),pageID:m.get("page-id"),
draftID:m.get("draft-id")};if(0<a.length){for(var d=0;d<a.length;d++){var b=a[d],f=k.extend({},c,b.attr);e.publish("confluence.viewpage.src."+b.src,f)}l.history&&l.history.replaceState&&(a=e.srcRemovedUrl(n.URL),n.URL!==a&&l.history.replaceState(null,"",a))}else e.publish("confluence.viewpage.src.empty",c)};return e});require("confluence/module-exporter").exportModuleAsGlobal("confluence/analytics-support","AJS.Confluence.Analytics",function(k){require("ajs").toInit(k.init)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:lodash-amd', location = 'applinks/internal/lib/lodash-amd-global.js' */
define('applinks/lib/lodash', function() {
        if (!window._) {
            throw "lodash not found";
        }
        return window._;
    });
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-lib', location = 'applinks/internal/lib/lib-version.js' */
// NOTE: this is in "lib" because it's required by aui-amd.js. This module _cannot_ have any dependencies on non-lib
// modules (like "common")
define('applinks/lib/version', [
    'applinks/lib/lodash'
], function(
    _
) {

    function checkIntValue(value, desc) {
        if (_.isUndefined(value)) {
            return 0;
        } else if (typeof value !== 'number' || isNaN(value)) {
            throw new Error(desc + ': expected a number, was: <' + value + '>');
        } else {
            return Math.floor(value);
        }
    }

    function checkVersionObject(object, desc) {
        if (!object || !(object instanceof Version)) {
            throw new Error(desc + ': expected a Version object, was: <' + object + '>');
        }
        return object;
    }

    function compareInt(intOne, intTwo) {
        return intOne > intTwo ? 1 : intOne == intTwo ? 0 : -1;
    }

    /**
     * Constructs a version object that contains version information and can be compared with other version objects.
     *
     * @param major major version component
     * @param minor minor version component
     * @param bugfix bugfix version component
     * @constructor
     */
    function Version(major, minor, bugfix) {
        this.major = checkIntValue(major, 'major');
        this.minor = checkIntValue(minor, 'minor');
        this.bugfix = checkIntValue(bugfix, 'bugfix');
    }

    /**
     * Constructs a Version by parsing a version string.
     *
     * @param versionString version string to parse, expected to be in the form of <major>.<minor>.<bugfix>
     * @param versionDesc what version does the `versionString` represent
     */
    Version.parse = function(versionString, versionDesc) {
        versionDesc = versionDesc || 'versionString';
        if (!versionString) {
            throw new Error(versionDesc + ': expected a non-empty string');
        }
        var versionSplit = versionString.split('.');
        if (versionSplit.length !== 3) {
            throw new Error(versionDesc + ': expected <major>.<minor>.<bugfix> string, was: <' + versionString + '>');
        }
        return new Version(parseInt(versionSplit[0]), parseInt(versionSplit[1]), parseInt(versionSplit[2]));
    };

    /**
     * Comparator function to sort Version objects.
     *
     * @param versionOne first version object
     * @param versionTwo second version object
     * @returns {Number} comparison result
     * @see Version.compareTo(that)
     */
    Version.comparator = function(versionOne, versionTwo) {
        return checkVersionObject(versionOne, 'versionOne').compareTo(checkVersionObject(versionTwo, 'versionTwo'));
    };

    /**
     * Return -1, 0 or 1 as this Version object represents a version less than, equal to, or greater than `that`.
     *
     * @param that the other version to compare to
     * @returns {Number} comparison result
     */
    Version.prototype.compareTo = function(that) {
        checkVersionObject(that, 'that');
        var majorResult = compareInt(this.major, that.major);
        if (majorResult != 0) {
            return majorResult;
        }
        var minorResult = compareInt(this.minor, that.minor);
        if (minorResult != 0) {
            return minorResult;
        }
        return compareInt(this.bugfix, that.bugfix);
    };

    Version.prototype.greaterThan = function(that) {
        return this.compareTo(that) > 0;
    };

    Version.prototype.greaterThanOrEqual = function(that) {
        return this.compareTo(that) >= 0;
    };

    Version.prototype.lessThan = function(that) {
        return this.compareTo(that) < 0;
    };

    Version.prototype.lessThanOrEqual = function(that) {
        return this.compareTo(that) <= 0;
    };

    Version.prototype.equals = function(that) {
        return this.compareTo(that) == 0;
    };

    Version.prototype.toMinor = function() {
        return new Version(this.major, this.minor);
    };

    Version.prototype.toMajor = function() {
        return new Version(this.major);
    };

    Version.prototype.toString = function() {
        return this.major + '.' + this.minor + '.' + this.bugfix;
    };

    return Version;
});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-lib', location = 'applinks/internal/lib/aui-version-details.js' */
define('applinks/lib/aui-version-details', [
    'applinks/lib/version'
], function(
    Version
) {
    // minimum 5.9.x AUI versions - lower versions ship with bugs that break some of the Applinks functionality.
    var MINIMUM_59_VERSION = new Version(5, 9, 13);
    var VERSION_58 = new Version(5, 8);
    var VERSION_59 = new Version(5, 9);

    function checkVersion(version) {
        // if 5.9, must be >= the minimum required 5.9.x version
        if (version.lessThan(MINIMUM_59_VERSION) || version.lessThan(VERSION_59)) {
            throw new Error('AUI version ' + version + ' is too low, you need to upgrade AUI to ' + MINIMUM_59_VERSION
                + ' for Applinks to work');
        }
    }

    function addVersionDetails(AJS) {
        var ajsVersion = Version.parse(AJS.version, 'AUI version');
        checkVersion(ajsVersion);

        AJS.versionDetails = ajsVersion;
        AJS.versionDetails.is58 = ajsVersion.toMinor().equals(VERSION_58);
        AJS.versionDetails.is59 = ajsVersion.toMinor().equals(VERSION_59);

        return AJS;
    }

    return  {
        /**
         * Check AUI version for compatibility with Applinks and add `versionDetails` field.
         */
        addVersionDetails: addVersionDetails
    };
});

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-lib', location = 'applinks/internal/lib/console-amd.js' */
define('applinks/lib/console', function() {
    return window.console;
});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-lib', location = 'applinks/internal/lib/jquery-amd.js' */
define('applinks/lib/jquery', function() {
   return window.jQuery;
});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-lib', location = 'applinks/internal/lib/aui-amd.js' */
define('applinks/lib/aui', [
    'applinks/lib/window',
    'applinks/lib/aui-version-details'
], function(
    window,
    VersionDetails
) {
    var AJS = window.AJS;
    if (!AJS) {
        throw new Error('window.AJS not defined, cannot load AUI');
    }

    return VersionDetails.addVersionDetails(AJS);
});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-lib', location = 'applinks/internal/lib/wrm-amd.js' */
/**
 * Define Web resource manager as an AMD dependency. This should also be present in apps using Atlassian Plugins Web
 * Resources framework.
 */
define('applinks/lib/wrm', function() {
   return window.WRM;
});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-lib', location = 'applinks/internal/lib/skate-amd.js' */
define('applinks/lib/skate', function() {
   // window.skate is not exposed as a global from AUI 5.9, this will return undefined with that version or later
   return window.skate;
});

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-lib', location = 'applinks/internal/lib/window-amd.js' */
/**
 * Define window as AMD module to facilitate unit testing of some modules
 */
define('applinks/lib/window', function() {
    return window;
});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-lib', location = 'applinks/internal/lib/spi-amd.js' */
/**
 * Define the Applinks SPI functions as AMD module to facilitate unit testing of some modules
 */
define('applinks/lib/spi', function() {
    return {get:
        function (){
            //required since code that depends on this global is run before the global is defined,
            // can be eliminated once this module is made properly AMD
            return AppLinks.SPI;
    }}
});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-lib', location = 'applinks/internal/lib/applinks-creation-amd.js' */
/**
 * Define the Applinks creation resources  as AMD module to facilitate unit testing of some modules
 */
define('applinks/lib/creation', function() {
    return {
        get: function () {
            //required since code that depends on this global is run before the global is defined,
            // can be eliminated once this module is made properly AMD
            return AppLinks.Creation;
        }
    }
});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-common-exported', location = 'applinks/internal/common/docs.js' */
define('applinks/common/docs', [
    'applinks/lib/jquery',
    'applinks/lib/aui',
    'applinks/common/help-paths'
], function(
    $,
    AJS,
    ApplinksHelpPaths
) {
    // NOTE: should be moved to applinks/feature/help-link, see APLDEV-593

    return {
        /**
         * NOTE: this is a dynamically generated version of the link build in macros.vm, any update here should be
         * applied there.
         * @method createDocLink
         * @param pageKey a key that maps to a page in ual-help-paths.properties
         * @param sectionKey (Optional) a key that maps to an anchor section id in ual-help-paths.properties
         * @param classNames (Optional) Whitespace separated list of additional class names
         * @return an html &lt;a&gt; element targeting the specified page & section
         */
        createDocLink: function(pageKey, sectionKey, classNames) {
            return this._createDocLink(pageKey, sectionKey, classNames, "Help");
        },
        createDocLinkIcon: function(pageKey, sectionKey, classNames) {
            return this._createDocLink(pageKey, sectionKey, classNames, '')
                .append($('<span/>', {
                    "class": 'aui-icon aui-icon-small aui-iconfont-help',
                    "text": "Help"
                }));
        },

        _createDocLink: function(pageKey, sectionKey, classNames, text) {
            if (!classNames) {
                classNames = '';
            } else {
                classNames = ' ' + classNames;
            }
            return $('<a/>', {
                'class': 'ual-help-link help-link' + classNames,
                href: this.getDocHref(pageKey, sectionKey),
                target: '_blank',
                'data-help-link-key': pageKey,
                text: text,
                title: "Help"
            });
        },

        /**
         * @method getDocHref
         * @param pageKey a key that maps to a page in ual-help-paths.properties
         * @param sectionKey (Optional) a key that maps to an anchor section id in ual-help-paths.properties
         * @return the url of the given page and section (if specified)
         */
        getDocHref: function(pageKey, sectionKey) {
            var link = ApplinksHelpPaths.getFullPath(pageKey);
            if (sectionKey) {
                link += '#' + ApplinksHelpPaths.getPath(sectionKey);
            }
            return link;
        }
    };

});

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-common-exported', location = 'applinks/internal/common/help-paths.js' */
define('applinks/common/help-paths', [
    'applinks/lib/console',
    'applinks/lib/wrm',
    'applinks/lib/lodash',
    'applinks/common/modules',
    'applinks/common/preconditions'
], function(
    console,
    WRM,
    _,
    ApplinksModules,
    Preconditions
) {
    // NOTE: should be moved to applinks/feature/help-link, see APLDEV-593

    // lazy-load help paths, facilitates unit-testing
    var allHelpPaths = _.memoize(function() {
        var helpPaths = WRM.data.claim(ApplinksModules.dataFqn(ApplinksModules.COMMON_EXPORTED, 'applinks-help-paths'));
        if (!helpPaths.entries) {
            console.warn('Help paths not found, all help links are likely to be broken.');
        }
        return helpPaths.entries || {};
    });

    var getPath = function(key, sectionKey) {
        Preconditions.nonEmptyString(key, 'key');
        var path = allHelpPaths()[key] || key;
        if (sectionKey) {
            Preconditions.nonEmptyString(sectionKey, 'sectionKey');
            var prefix = path.replace(/\+/g, ''); // "g" flag to remove _all_ '+' signs
            path += '#' +prefix + '-' + sectionKey;
        }
        return path;
    };

    function endsWith(string, suffix) {
        return string.indexOf(suffix, string.length - suffix.length) !== -1;
    }

    function addSuffixIfRequired(string, suffix) {
        return endsWith(string, suffix) ? string : string + suffix;
    }

    return {
        /**
         * @param key {string} key to get the path for
         * @returns {string} relative help path that can be appended to any relevant docs base URL
         */
        getPath: getPath,

        /**
         * @param key {string} key to get the path for
         * @param sectionKey {string} optional key of the anchor on the target page
         * @returns {string} full help path including the base URL
         */
        getFullPath: function(key, sectionKey) {
            var baseUrl = this.baseUrl();
            return addSuffixIfRequired(baseUrl, '/') + this.getPath(key, sectionKey);
        },

        /**
         * @returns {string} configured base URL for the help paths
         */
        baseUrl: _.partial(getPath, 'applinks.docs.root')
    }
});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-common-exported', location = 'applinks/internal/common/events.js' */
define('applinks/common/events', [
    'applinks/lib/jquery',
    'applinks/lib/lodash',
    'applinks/lib/window',
    'applinks/common/preconditions'
], function(
    $,
    _,
    window,
    Preconditions
) {
    var PREFIX = 'applinks.event.';

    function applinksEvent(eventId) {
        return PREFIX + Preconditions.nonEmptyString(eventId, 'eventId');
    }

    /**
     * Provides common Applinks event IDs and a simple event system facade API. This is a preferred way to subscribe to
     * and raise Applinks-specific events as it does not depend on a specific event bus or event target (such as
     * `document`), as well as facilitates unit testing.
     */
    return {
        PREREADY: applinksEvent('preready'),
        READY: applinksEvent('ready'),

        /**
         * Raised when applinks list is first loaded
         */
        APPLINKS_LOADED: applinksEvent('loaded'),
        /**
         * Raised when applinks list is updated
         */
        APPLINKS_UPDATED: applinksEvent('updated'),

        /**
         * This event is only raised when linking to Atlassian applications
         * Can be consumed by other plugins
         */
        NEW_APPLINK_CREATED: applinksEvent('created'),

        /**
         * Raised when orphaned upgrade operation succeeds in creating a new Applink from the orphaned relationship
         */
        ORPHANED_UPGRADE: applinksEvent('orphaned.upgrade'),

        /**
         * Raised when v3 onboarding has finished or, or has never run on the current page (and won't).
         */
        V3_ONBOARDING_FINISHED: applinksEvent('v3-onboarding-finished'),

        // legacy events
        Legacy: {
            MESSAGE_BOX_DISPLAYED: applinksEvent('message-box-displayed')
        },

        ATLASSIAN_OAUTH2_INCOMING_LINK_CREATED: applinksEvent('atlassian-oauth2-ui-incoming-link-created'),

        ATLASSIAN_OAUTH2_OUTGOING_LINK_CREATED: applinksEvent('atlassian-oauth2-ui-outgoing-link-created'),

        ATLASSIAN_OAUTH2_DIALOG_CLOSED: applinksEvent('atlassian-oauth2-ui-dialog-closed'),

        applinksEvent: applinksEvent,

        on: function(events, handler, context) {
            var handlerWithContext = context ? _.bind(handler, context) : handler;
            $(window.document).on(events, handlerWithContext);
        },

        off: function(events, handler) {
            $(window.document).off(events, handler);
        },

        trigger: function(event, data) {
            $(window.document).trigger(event, data);
        }
    }
});

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-common-exported', location = 'applinks/internal/common/i18n.js' */
define('applinks/common/i18n', [
    'applinks/lib/lodash',
    'applinks/lib/jquery',
    'applinks/lib/wrm',
    'applinks/common/modules',
    'applinks/common/preconditions',
    'applinks/common/products'
], function(
    _,
    $,
    WRM,
    ApplinksModules,
    Preconditions,
    ApplinksProducts
) {
    var getAllEntityTypes = _.memoize(function() {
        var val = WRM.data.claim(ApplinksModules.dataFqn(ApplinksModules.COMMON_EXPORTED, 'entity-types'));
        return Preconditions.hasValue(val, 'entity-types', 'Entity Types data not found');
    });

    var getAllAuthTypes = _.memoize(function() {
        var val = WRM.data.claim(ApplinksModules.dataFqn(ApplinksModules.COMMON_EXPORTED, 'authentication-types'));
        return Preconditions.hasValue(val, 'authentication-types', 'Authentication Types data not found');
    });

    return {
        
        /**
         * @param typeId ID of the application type to resolve
         * @returns {string} resolved i18n-ed type name, or the original `typeId` if there is no mapping
         */
        getApplicationTypeName: function(typeId) {
            return ApplinksProducts.getTypeName(typeId);
        },

        /**
         * @param typeId ID of the entity type to resolve
         * @returns {string} resolved i18n-ed singular entity type name, or the original `typeId` if there is no mapping
         */
        getEntityTypeName: function(typeId) {
            return getAllEntityTypes().singular[typeId] || typeId;
        },

        /**
         * @param typeId ID of the entity type to resolve
         * @returns {string} resolved i18n-ed plural entity type name, or the original `typeId` if there is no mapping
         */
        getPluralizedEntityTypeName: function(typeId) {
            return getAllEntityTypes().plural[typeId] || typeId;
        },

        /**
         * @param type ID of the authentication type to resolve (usually in a form of full class name)
         * @returns {string} resolved i18n-ed authentication type name, or the original `type` if there is no mapping
         */
        getAuthenticationTypeName: function(type) {
            return getAllAuthTypes()[type] || type;
        }
    };
});

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-common-exported', location = 'applinks/internal/common/modules.js' */
/**
 * Applinks plugin modules core constants and definitions.
 */
define('applinks/common/modules', function() {
    return {
        /**
         * Applinks plugin key
         */
        PLUGIN_KEY: 'com.atlassian.applinks.applinks-plugin',

        // key web resource keys
        COMMON_EXPORTED: 'applinks-common-exported',
        COMMON: 'applinks-common',

        /**
         * Fully qualifies a module name using the plugin key.
         *
         * @param {string} moduleName module name to qualify
         * @returns {string} fully qualified name
         */
        fqn: function(moduleName) {
            return this.PLUGIN_KEY + ':' + moduleName;
        },

        /**
         * Fully qualifies web-resource data using module name and data key.
         *
         * @param {string} moduleName module name
         * @param {string} dataKey key of the data element
         * @returns {string} fully qualified name
         */
        dataFqn: function(moduleName, dataKey) {
            return this.fqn(moduleName) + '.' + dataKey;
        }
    };
});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-common-exported', location = 'applinks/internal/common/preconditions.js' */
define('applinks/common/preconditions', [
    'applinks/lib/lodash'
], function(
    _
) {
    function nonEmptyString(value, varName, customMessage) {
        return _checkArgument(
            _.isString(value) && !_.isEmpty(value),
            customMessage,
            _withVarName(varName, ': expected a non-empty string, was: <' + value + '>'),
            value
        );
    }

    function isFunction(value, varName, customMessage) {
        return _checkArgument(
            _.isFunction(value),
            customMessage,
            _withVarName(varName, ': expected a function, was: ' + value),
            value
        );
    }

    function isArray(value, varName, customMessage) {
        return _checkArgument(
            _.isArray(value),
            customMessage,
            _withVarName(varName, ': expected an array, was: ' + value),
            value
        );
    }

    function hasValue(value, varName, customMessage) {
        return _checkArgument(
            value,
            customMessage,
            _withVarName(varName, ': expected a value'),
            value
        );
    }

    function _checkArgument(test, message, defaultMessage, actualValue) {
        var actualMessage = message ? message : defaultMessage;
        if (!test) {
            throw new Error(actualMessage)
        }
        return actualValue || test;
    }

    function _withVarName(varName, msg) {
        return (varName || '[unspecified]') + msg;
    }

    return {
        // applinks support 1.5.2+ underscore and its lodash counterparts
        // _.partial works differently in lodash@2.x vs its newer and underscore versions
        //  thus replacing _.partial with vanilla JS for full compatibility
        checkArgument: function(test, message, actualValue) {
            return _checkArgument(test, message, '', actualValue);
        },
        nonEmptyString: nonEmptyString,
        isArray: isArray,
        isFunction: isFunction,
        hasValue: hasValue
    };
});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-common-exported', location = 'applinks/internal/common/products.js' */
define('applinks/common/products', [
    'applinks/lib/lodash',
    'applinks/lib/wrm',
    'applinks/common/modules',
    'applinks/common/preconditions'
], function(
    _,
    WRM,
    ApplinksModules,
    Preconditions
) {
    var getAllTypes = _.memoize(function() {
        var val = WRM.data.claim(ApplinksModules.dataFqn(ApplinksModules.COMMON_EXPORTED, 'applinks-types'));
        return Preconditions.hasValue(val, 'types', 'Application Types data not found');
    });

    /**
     * @param typeId ID of the application type to resolve
     * @returns {string} resolved i18n-ed type name, or the original `typeId` if there is no mapping
     */
    function getTypeName(typeId) {
        return getAllTypes()[typeId] || typeId;
    }

    /**
     * Map of Atlassian product keys to application type IDs
     */
    return {
        BAMBOO: 'bamboo',
        BITBUCKET: 'stash', // special case, see java class com.atlassian.applinks.application.bitbucket.BitbucketApplicationTypeImpl.TYPE_ID
        CONFLUENCE: 'confluence',
        FECRU: 'fecru',
        JIRA: 'jira',
        REFAPP: 'refapp',
        STASH: 'stash',
        getTypeName: getTypeName
    };
});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:split_aui.core', location = 'aui.chunk.3e5c32567dc20a97c718--675884e99867aa61ce6a.js' */
"use strict";(globalThis.webpackChunk_auiRuntime=globalThis.webpackChunk_auiRuntime||[]).push([[7493],{},u=>{u.O(0,[4496,5131,2178,9146,1646,1166,6319,7522,7463,9416],(()=>{return a=2341,u(u.s=a);var a}));u.O()}]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-util-js', location = 'applinks/internal/non-amd/rest-service.js' */
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

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-util-js', location = 'applinks/internal/non-amd/autocomplete.js' */
// NOTE: this is used outside of Applinks. See atlassian-plugin.xml for more details about the associated restrictions

AJS.$(document).bind(AppLinks.Event.READY, function() {
/**
 * TODO: THIS CODE IS COPIED FROM CONFLUENCE and should be part of AUI/AJS.
 * IF AUI comes with the InputDrivenDropDown when can remove this file.
 * https://studio.atlassian.com/browse/AJS-471
 *
 * A simple cache manager that supports a
 * FIFO cache invalidation strategy.
 *
 * @class cacheManager
 * @namespace AJS.Confluence
 * @constructor
 * @param cacheSize the size of the cache before keys are invalidated
 */
AppLinks.autoComplete = {
        cacheManager : function (cacheSize) {
    var cache = {},
        cacheStack = [],
        cacheSize = cacheSize || 30;

    return {
        /**
         * Return the value stored in the cache for the given key
         * @method get
         * @param key {String}
         */
        get: function(key) {
            return cache[key];
        },
        /**
         * Put the given key, value in the cache
         * @method put
         * @param key {String}
         * @param value {Object}
         */
        put: function(key, value) {
            cache[key] = value;
            cacheStack.push(key);
            if (cacheStack.length > cacheSize) {
                delete cache[cacheStack.shift()];
            }
        },
        /**
         * Clear the cache.
         */
        clear : function() {
            cache = {};
            cacheStack = [];
        }
    };
}};


(function($){
    /**
     * Check that all items in the drop down can be displayed - show ellipses at the end of any that
     * are too long. Also remove any unused properties that the dropDown may have stored for each
     * item in the list.
     *
     * @method truncateText
     * @private
     */
    var truncateText = function (dd) {
        AJS.log("InputDrivenDropDown: truncating text");
        var width = dd.$.closest(".aui-dropdown").width(),
            rightPadding = 20; // add some padding so the ellipsis doesn't run over the edge of the box

        $("a span:not(.icon)", dd.$).each(function () {
            var $a = $(this),
                elpss = $("<var></var>").html("&#8230;"),
                elwidth = elpss.width(),
                isLong = false;

            $a.wrapInner($("<em>"));
            $("em", $a).each(function () {
                var $label = $(this);

                $label.show();
                if (this.offsetLeft + this.offsetWidth > width) {
                    var childNodes = this.childNodes,
                        success = false;

                    for (var j = childNodes.length - 1; j >= 0; j--) {
                        var childNode = childNodes[j],
                            truncatedChars = 1,
                            valueAttr = (childNode.nodeType == 3) ? "nodeValue" : "innerHTML",
                            nodeText = childNode[valueAttr];

                        do {
                            if (truncatedChars <= nodeText.length) {
                                childNode[valueAttr] = nodeText.substr(0, nodeText.length - truncatedChars++);
                            } else { // if we cannot fit even one character of the next word, then try truncating the node just previous to this
                                break;
                            }
                        } while (this.offsetLeft + this.offsetWidth + elwidth > width - rightPadding);

                        if (truncatedChars <= nodeText.length) {
                            // we've managed truncate part of the word and fit it in
                            success = true;
                            break;
                        }
                    }

                    if (success) {
                        isLong = true;
                    } else {
                        $label.hide();
                    }
                }
            });
            if (isLong) {
                $a.append(elpss);
                this.elpss = elpss;
            }
        });
    };

    var highlightTokens = function(dd, tokens) {
        if (!tokens.length || !tokens[0]) return;

        AJS.log("InputDrivenDropDown: highlighting tokens");

        // escape regex chars .*+?|()[]{}\ first
        for (var i = 0, ii = tokens.length; i < ii; i++) {
            var token = tokens[i];
            tokens[i] = token ? token.replace(/[\.\*\+\?\|\(\)\[\]{}\\]/g, "\\$") : "";
        }

        var regex = new RegExp("(" + tokens.join("|") + ")", "gi");

        $("li a:not(.dropdown-prevent-highlight) span", dd.$).each(function() {
            var span = $(this),
                html = span.html().replace(regex, "<strong>$1</strong>");
            span.html(html);
        });
    };

    /**
     * Builds and shows the dropdown.
     *
     * @param idd the InputDrivenDropdown
     * @param dropdownData in the form { matrix, query, queryTokens }
     * @private
     */
    var makeDropdown = function (idd, dropdownData) {
        var options = idd.options,
            old_dd = idd.dd;

        if (old_dd) {
            old_dd.hide();
            old_dd.$.remove();
        }

        options.ajsDropDownOptions = options.ajsDropDownOptions || {};
        if (options.ajsDropDownOptions && !options.ajsDropDownOptions.alignment) { // default to left alignment
            options.ajsDropDownOptions.alignment = "left";
        }
        //this needs to be moved into aui
        options.ajsDropDownOptions.selectionHandler = options.ajsDropDownOptions.selectionHandler || function(e, element) {
            if(e.type != "click") {
                e.preventDefault();
                $("a",element).click();
                document.location = $("a",element).attr("href");
            }
        };

        /* Fixing an AUI bug in here:  AJS.dropdown puts the raw 'matrix[i].name' as html, without escaping it !
           The solution is to override their displayHandler
         */
        /**
         * Escape obj.name and return it
         */
        options.ajsDropDownOptions.displayHandler = function (obj) {
            return AJS.escapeHtml(obj.name);
        }

        var dd = idd.dd = new AJS.dropDown(dropdownData.matrix, options.ajsDropDownOptions)[0];

        // could move into dropdown.js in AUI
        if (options.ajsDropDownOptions && options.ajsDropDownOptions.className) {
            dd.$.addClass(options.ajsDropDownOptions.className);
        }

        // place the created drop down using the configured dropdownPlacement function
        // if there is none then use a default behaviour
        if (options.dropdownPlacement) {
            options.dropdownPlacement(dd.$);
        } else {
            AJS.log("No dropdownPlacement function specified. Appending dropdown to the body.");
            $("body").append(dd.$);
        }

        highlightTokens(dd, dropdownData.queryTokens || [dropdownData.query]);
        truncateText(dd);

        if (options.dropdownPostprocess) {
            options.dropdownPostprocess(dd.$);
        }
        dd.show(idd._effect);

        if (typeof options.onShow == "function") {
            options.onShow.call(dd, dd.$);
        }

        return dd;
    };

    /**
     * Provides a controller-agnostic object that listens for controller changes and populates a dropdown
     * via a callback. Most aspects can be customized via the options object parameter.
     * <br>
     * Options are:
     * <li>
     *   getDataAndRunCallback - (required) callback method used to provide data for the dropdown. It must take
     *                          two parameters, user input value and the callback function to execute.
     * </li>
     * <li>
     *   onShow - function to call when the drop-down is displayed
     * </li>
     * <li>
     *   dropdownPlacement - a function that will be called with the drop down and which should place it in the
     *                          correct place on the page. The supplied arguments are 1) the input that issued the
     *                          search, 2) the dropDown to be placed.
     * </li>
     * <li>
     *   ajsDropDownOptions - any options the underlying dropDown component can handle expects
     * </li>
     * <li>
     *   onDeath - callback to run when dropdown dies
     * </li>
     * @class InputDrivenDropDown
     * @namespace AJS
     */
    function InputDrivenDropDown(id, options) {
        this._effect = "appear";
        this._timer = null;

        this.id = id;
        this.options = options;
        this.inactive = false;
        this.busy = false;
        this.cacheManager = AppLinks.autoComplete.cacheManager();
    }

    /**
     * Clears the cache.
     */
    InputDrivenDropDown.prototype.clearCache = function () {
        this.cacheManager.clear();
    };

    /**
     * This method should be called when the user input for this dropdown has changed.
     * It will check the cache before fetching data (via options.getDataAndRunCallback)
     * and displaying the dropdown.
     *
     * @param value {String} the new value of the user input
     * @param force {Boolean} force a change to occur regardless of user input
     */
    InputDrivenDropDown.prototype.change = function (value, force) {
        var t = this;
        if (value != t._value || force) {
            t._value = value;
            t.busy = false;

            clearTimeout(t._timer);

            if (force || (/\S{0,}/).test(value)) {
                var cachedVal = t.cacheManager.get(value);
                if (cachedVal) {
                    makeDropdown(t, cachedVal);
                } else {
                    t.busy = true;
                    t._timer = setTimeout(function () { // delay sending a request to give the user a chance to finish typing their search term(s)
                        t.options.getDataAndRunCallback.call(t, value, t.show);
                    }, 200);
                }
            } else {
                t.dd && t.dd.hide();
            }
        }
    };

    /**
     * Gets the number of visible options in the dropdown.
     */
    InputDrivenDropDown.prototype.dropDownLength = function () {
        return this.dd.links ? this.dd.links.length : 0;
    };
    
    /**
     * Gets the specified menu item from the dropdown list.
     * 
     * @param index {Integer} the 0-based index of the dropdown option list
     */
    InputDrivenDropDown.prototype.dropDownItem = function (index) {
        return this.dropDownLength() > index ? this.dd.links[index] : null;
    };
    
    /**
     * Hides the drop down
     */
    InputDrivenDropDown.prototype.hide = function () {
        this.dd && this.dd.hide();
    };

    /**
     * Hides and removes the drop down from the DOM.
     */
    InputDrivenDropDown.prototype.remove = function () {
        var dd = this.dd;
        if (dd) {
            this.hide();
            dd.$.remove();
        }
        this.inactive = true;
        this.options.onDeath && this.options.onDeath();
    };

    /**
     * Shows the drop down with the given matrix data and query.
     * <br>
     * Matrix property should be an array of arrays, where the sub-arrays represent the different
     * search categories.
     *
     * Expected properties of category sub-array objects are:
     *  - href
     *  - name
     *  - className
     *  - html (optional, replaces href and name)
     *  - icon (optional)
     *
     *
     * @param matrix {Array} matrix to populate the drop down from
     * @param query {String} the user input string that triggered this show
     * @param queryTokens {Array} an array of strings of the query tokens. Use for highlighting search terms.
     */
    InputDrivenDropDown.prototype.show = function (matrix, query, queryTokens) {
        if (this.inactive) {
            AJS.log("Quick search abandoned before server response received, ignoring. " + this);
            return;
        }

        var dropdownData = {
            matrix: matrix,
            query: query,
            queryTokens: queryTokens
        };
        this.cacheManager.put(query, dropdownData);

        makeDropdown(this, dropdownData);
        this.busy = false;
    };

    /**
     * Returns an InputDrivenDropDown. See InputDrivenDropDown for more documentation.
     * @param options {Object} options for the InputDrivenDropDown
     * @constructor
     */
    AppLinks.inputDrivenDropdown = function (options) {
        return new InputDrivenDropDown("inputdriven-dropdown", options);
    };

})(jQuery);
});

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-util-js', location = 'js/fecru-compatibility.js' */
if (jQuery != undefined && AJS != undefined) jQuery = AJS.$; // make sure we're extending the correct jQuery
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:feature-oauth-dance', location = 'applinks/internal/feature/oauth/oauth-callback.js' */
define('applinks/feature/oauth-callback', [
    'applinks/lib/window',
    'applinks/lib/lodash',
    'applinks/common/preconditions'
], function(
    window,
    _,
    Preconditions
) {
    function OAuthCallback(url) {
        Preconditions.nonEmptyString(url, 'url');
        this._url = url;
    }

    OAuthCallback.prototype.source = function(source) {
        Preconditions.hasValue(source, 'source');
        this._source = source;
        return this;
    };

    OAuthCallback.prototype.onSuccess = function(callback) {
        Preconditions.isFunction(callback, 'onSuccess');
        this._onSuccess = callback;
        return this;
    };

    OAuthCallback.prototype.onFailure = function(callback) {
        Preconditions.isFunction(callback, 'onFailure');
        this._onFailure = callback;
        return this;
    };

    // API for OAuth to invoke callbacks
    OAuthCallback.prototype.success = function() {
        this.oauthWindow.close();
        if (this._onSuccess) {
            this._onSuccess(this._source);
        }
        // free up the oauthCallback object
        delete window.oauthCallback;
    };

    OAuthCallback.prototype.failure = function() {
        this.oauthWindow.close();
        if (this._onFailure) {
            this._onFailure(this._source);
        }
        // free up the oauthCallback object
        delete window.oauthCallback;
    };

    // start the dance
    OAuthCallback.prototype.open = function() {
        // required for OAuth callbacks to fire
        window.oauthCallback = this;
        this.oauthWindow = window.open(this._url, 'com_atlassian_applinks_authentication');
    };

    return OAuthCallback;
});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:feature-oauth-dance', location = 'applinks/internal/feature/oauth/oauth-dance.js' */
define('applinks/feature/oauth-dance', [
    'applinks/lib/console',
    'applinks/lib/jquery',
    'applinks/lib/lodash',
    'applinks/lib/window',
    'applinks/common/events',
    'applinks/common/preconditions',
    'applinks/feature/oauth-callback'
], function(
    console,
    $,
    _,
    window,
    ApplinksEvents,
    Preconditions,
    OAuthCallback
) {
    /**
     * Creates a new OAuth Dance. This initializes elements found by `selector` within `scope` to initiate the OAuth
     * dance on click. The elements need to have a `data-authorisation-uri` attribute that points to the authorisation
     * page to open.
     *
     * @param scope {string} optional selector for scope, if not defined then global `document` will be used
     * @param selector {string} selector for the DOM elements to initialize OAuth dance for. If not defined then scope will be used
     * @constructor
     */
    function OAuthDance(scope, selector) {
        this._scope = scope || window.document;
        this._selector = selector;
    }

    OAuthDance.prototype.onSuccess = function(callback) {
        Preconditions.isFunction(callback, 'onSuccess');
        this._onSuccess = callback;
        return this;
    };

    OAuthDance.prototype.onFailure = function(callback) {
        Preconditions.isFunction(callback, 'onFailure');
        this._onFailure = callback;
        return this;
    };

    OAuthDance.prototype.defaultSuccess = function() {
        return this.onSuccess(function() {
            window.location.reload()
        });
    };

    OAuthDance.prototype.defaultFailure = function() {
        return this.onFailure(function() { return true });
    };

    /**
     * Wire up click events for the selected elements to initiate OAuth dance.
     */
    OAuthDance.prototype.initialize = function() {
        var that = this;
        if (this._selector) {
            $(this._scope).on('click', this._selector, function(e) {
                e.preventDefault();
                that._open($(this));
            });
        } else {
            $(this._scope).on('click', function(e) {
                e.preventDefault();
                that._open($(this));
            });
        }
    };

    /**
     * Start the OAuth dance for the given selector/scope.
     */
    OAuthDance.prototype.start = function() {
        var $scope = $(this._scope);
        var $element = this._selector ? $scope.find(this._selector) : $scope;
        this._open($element);
    };

    OAuthDance.prototype._open = function(element) {
        if (element.length !== 1) {
            console.warn('Could not trigger OAuth dance, the source is not a single HTML element: ' + element);
            return;
        }
        
        var authorisationUri = element.attr('data-authorisation-uri');

        if (authorisationUri) {
            this._onSuccess || this.defaultSuccess();
            this._onFailure || this.defaultFailure();
            new OAuthCallback(authorisationUri)
                .source(element)
                .onSuccess(this._onSuccess)
                .onFailure(this._onFailure)
                .open();
        } else {
            console.warn('Could not trigger OAuth dance, data-authorisation-uri missing for: ' + element);
        }
    };

    return OAuthDance;
});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-oauth-ui', location = 'js/oauth-dialog.js' */
// NOTE: this is used outside of Applinks. See atlassian-plugin.xml for more details about the associated restrictions

/**
 * @deprecated use applinks/feature/oauth-callback and applinks/feature/oauth-dance AMD module
 */
(function($, ApplinksEvents, OAuthCallback) {
    // rest-service.js will load the AppLinks name space
    AppLinks.authenticateRemoteCredentials = function (url, onSuccess, onFailure) {
        $('.applinks-error').remove();
        new OAuthCallback(url).onSuccess(onSuccess).onFailure(onFailure).open();
    };
})(require('applinks/lib/jquery'), require('applinks/common/events'), require('applinks/feature/oauth-callback'));

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.extra.jira:common', location = 'util/retry-caller.js' */
define("confluence/jim/util/retry-caller",["ajs","jquery","underscore"],function(r,d,h){return function(k,a){a=a||{};var l=a.args,m="function"===typeof a.tester?a.tester:function(){return!0},e=a.delays||[.1,.3,.5,.7,1],n=e.length,c=d.Deferred(),p=c.promise(),b=a.context||c,f=0,g=function(){if(f===n)return c.rejectWith(b,[b,"exceed-maximum-called-times",""]);var q=e[f++];h.delay(function(){d.when(k.apply(b,l)).then(function(){c.notify.apply(b,arguments);m.apply(b,arguments)?g():c.resolveWith(b,arguments)},
function(){c.rejectWith(b,arguments)})},q)};g();return p}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.extra.jira:common', location = 'util/common.js' */
AJS.JiraIssues={Remote:{}};var appLinksI18n={entries:{}};
jQuery(document).ready(function(){AJS.JiraIssues=jQuery.extend(AJS.JiraIssues||{},{bindOAuthLink:function(a,b){var d=function(){b()},e=function(){},k=a.attr("href");a.click(function(l){AppLinks.authenticateRemoteCredentials(k,d,e);l.preventDefault()})},getOAuthRealm:function(a){a=a.getResponseHeader("WWW-Authenticate")||"";return(a=/OAuth realm="([^"]+)"/.exec(a))?a[1]:null}});jQuery("a.static-oauth-init").each(function(){AJS.JiraIssues.bindOAuthLink(jQuery(this),function(){window.location.reload()})});
jQuery("a.anonymous-init").each(function(a,b){a=encodeURIComponent(window.location.pathname.replace(Confluence.getContextPath(),""));a=Confluence.getContextPath()+"/login.action?os_destination\x3d"+a;AJS.$(b).attr("href",a)});var w=function(a){for(var b=AJS.JiraIssues.Remote[a],d="",e=0;e<b.length;e++)d+=b[e].key+(e<b.length-1?",":"");var k=function(c){c="/sr/jira.issueviews:searchrequest-xml/temp/SearchRequest.xml?jqlQuery\x3d"+encodeURIComponent("issuekey in ("+c+")")+"\x26returnMax\x3dtrue";return contextPath+
"/plugins/servlet/issue-retriever?appId\x3d"+a+"\x26url\x3d"+encodeURIComponent(c)+"\x26columns\x3dsummary\x26columns\x3dtype\x26columns\x3dresolution\x26columns\x3dstatus"},l=function(c){AJS.$("item",c).each(function(){for(var m=AJS.$("link",this).text(),h=AJS.$("key",this).text(),f=AJS.$("summary",this).text(),p=AJS.$("type",this),g="-1"!=AJS.$("resolution",this).attr("id"),v=AJS.$("status",this),r=AJS.$(".unknown-jira-issue."+h),q=0;q<r.length;q++){var t=AJS.$("\x3ca style\x3d\"background-image: url('"+
p.attr("iconUrl")+'\')" href\x3d"'+m+'"\x3e\x3c/a\x3e');t.text(h);var u=AJS.$('\x3cspan class\x3d"jira-status"\x3e\x3c/span\x3e');u.text(v.text().toUpperCase());var n=AJS.$('\x3cspan class\x3d"jira-issue'+(g?" resolved":"")+'" \x3e\x3c/span\x3e');n.append(t);n.append(document.createTextNode(" - "+f+" - "));n.append(u);AJS.$(r[q]).replaceWith(n)}})};d=k(d);AJS.$.ajax({url:d,success:l,error:function(c){if(401==c.status){var m=AJS.JiraIssues.getOAuthRealm(c);if(m){var h={};AJS.$(b).each(function(){if(!h[this.key]){h[this.key]=
!0;var f=AJS.$('\x3cspan class\x3d"oauth-msg"\x3e - \x3ca class\x3d"oauth-init" href\x3d"'+m+'"\x3e'+"Authenticate"+"\x3c/a\x3e "+"to see issue details"+"\x3c/span\x3e");AJS.$(".unknown-jira-issue."+this.key).addClass("single-issue-oauth").append(f)}});AJS.JiraIssues.bindOAuthLink(AJS.$(".single-issue-oauth a.oauth-init"),function(){window.location.reload()})}}else 400==c.status&&1<b.length&&AJS.$(b).each(function(){var f=this.key,p=k(f);
AJS.$.ajax({url:p,success:l,error:function(g){g=AJS.$(".unknown-jira-issue."+f);g.removeClass("single-issue-oauth");AJS.$(".oauth-msg",g).remove();g.addClass("jira-error")}})})}})};AJS.$(".unknown-jira-issue").each(function(a,b){b=AJS.$(b);a=b.attr("data-app-link");b=b.attr("data-key");AJS.JiraIssues.Remote[a]=AJS.JiraIssues.Remote[a]||[];AJS.JiraIssues.Remote[a].push({key:b})});for(var x in AJS.JiraIssues.Remote)w(x)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.extra.jira:web-resources', location = 'templates/extra/jira/jiraIssues.js' */
jQuery(document).ready(function(){var k=jQuery.extend(window.JiraIssues||{},{ADG_ENABLED:4E3<=AJS.Meta.getNumber("build-number"),ADG_FONT_SIZE_OVER_FLEXIGRID_FONT_SIZE_RATIO:14/11,onSuccessFunction:function(b){if(!jQuery("fieldset input[name\x3d'height']",b).length){var a=jQuery(".bDiv table[id^\x3d'jiraissues_table']",b)[0],c=a.grid;a=a.clientHeight+jQuery(".hDiv",b)[0].clientHeight;jQuery(".bDiv",b).css("height",a+"px");c.options.height=a;c.fixHeight(a)}},onErrorFunction:function(b,a,c,e,d){c=jQuery("#"+
a);d=e.getResponseHeader("WWW-Authenticate")||"";if("401"==e.status&&-1!=d.indexOf("OAuth")){if(e=/OAuth realm="([^"]+)"/.exec(d)){c.empty();k.bigMessageFunction(a,'\x3ca class\x3d"oauth-init" href\x3d"'+e[1]+'"\x3e'+"Authenticate"+"\x3c/a\x3e "+"to retrieve your issues"+"\x3c/span\x3e");jQuery(".bmDiv",b).css({"z-index":2});var l=function(){window.location.reload()},h=function(){};a=jQuery(".oauth-init",c.parent());var m=a.attr("href");a.click(function(g){AppLinks.authenticateRemoteCredentials(m,
l,h);g.preventDefault()});AJS.$(".gBlock").remove()}}else if("400"==e.status)k.bigMessageFunction(a,"The Jira server was not able to process the search. This may indicate a problem with the syntax of this macro. Alternatively, if this table is requesting specific issue keys, you may not have permission to view one of these issues.");else{var f=jQuery("iframe.jiraissues_errorMsgSandbox",b);f.on("load",function(){var g=this.contentWindow||this.contentDocument;g=jQuery((g.document?g.document:g).body);jQuery("a",g).each(function(){this.target="_top"});jQuery(".pPageStat",b).empty().text(g.text());g=jQuery("div.bmDiv",b)[0];f.removeClass("hidden");f.css({height:g.clientHeight+
"px",width:g.clientWidth+"px"})});f[0].src=jQuery("fieldset input[name\x3d'retrieverUrlHtml']",b).val();k.bigMessageFunction(a,f)}jQuery(b).find(".pReload").removeClass("loading");c[0].grid.loading=!1;jQuery(b).find(".pButton").each(function(){jQuery(this).removeClass("pBtnOver");jQuery(this).css({cursor:"default",opacity:"0.3"})});jQuery(b).find("span.pcontrol input").prop("readonly",!0)},onReloadFunction:function(b,a,c){jQuery(".bmDiv",a).remove();jQuery(".bmDistance",a).remove();c.onSubmit=function(){k.reloadOnSubmitFunction(b,
c);return!0}},reloadOnSubmitFunction:function(b,a){a.params=[{name:"useCache",value:!1}];a.onSubmit=function(){k.onSubmitFunction(b,a);return!0}},onSubmitFunction:function(b,a){a.params=[{name:"useCache",value:b}]},showTrustWarningsFunction:function(b,a){b=jQuery(b).children(".trusted_warnings");a.trustedMessage?(b.find("td:last").html(a.trustedMessage),b.css("display","block")):b.css("display","none")},preProcessFunction:function(b,a,c,e,d){c&&k.showTrustWarningsFunction(b,e);0==e.total&&(jQuery(".pPageStat",
b).html(d),k.bigMessageFunction(a,d),jQuery(".pReload",b).removeClass("loading"))},bigMessageFunction:function(b,a){var c=jQuery("\x3cdiv\x3e\x3c/div\x3e"),e=jQuery("\x3cdiv\x3e\x3c/div\x3e");c.addClass("bmDistance");e.addClass("bmDiv");"string"==typeof a?e.html("\x3cp\x3e\x3cstrong\x3e"+a+"\x3c/strong\x3e\x3c/p\x3e"):a.appendTo(e);jQuery("#"+b).after(e).after(c)},getParamsFrom:function(b){var a={};b.children("input").each(function(){a[jQuery(this).attr("name")]=jQuery(this).val()});return a},initializeColumnWidth:function(b,
a){var c={},e=function(p){return k.ADG_ENABLED?Math.round(p*k.ADG_FONT_SIZE_OVER_FLEXIGRID_FONT_SIZE_RATIO):p};if(!a||!a.length)return c;b=b.width()-(37+11*a.length);for(var d=!1,l=!1,h=0,m=e(140),f=0,g=a.length;f<g;f++){var n=a[f].name;switch(n){case "summary":d=!0;h++;break;case "description":l=!0;h++;break;case "type":h++;c[n]=30;b-=30;break;case "priority":h++;c[n]=50;b-=50;break;case "status":h++;c[n]=e(100);b-=e(100);break;case "key":h++;c[n]=e(90);b-=e(90);break;case "comments":case "attachments":case "version":case "component":case "resolution":h++;
c[n]=e(80);b-=e(80);break;default:c[n]=m}}if(d||l)b-=m*(a.length-h),d&&l?(c.summary=Math.max(b/2,250),c.description=Math.max(b/2,250)):d?c.summary=Math.max(b,250):c.description=Math.max(b,250);else if(!d&&!l&&a.length>h)for(m=b/(a.length-h),f=0;f<g;f++)({resolution:!0,key:!0,type:!0,priority:!0,status:!0})[a[f]]||(c[a[f]]=m);return c}});jQuery(".jiraissues_table").each(function(b,a){var c=jQuery(a),e=c.children("fieldset"),d=k.getParamsFrom(e),l="jiraissues_table_"+b;c.append('\x3ctable id\x3d"'+
l+'" style\x3d"display:none"\x3e\x3c/table\x3e');c.css("width",d.width);var h=[];e.children(".columns").each(function(f){var g=jQuery(this).hasClass("nowrap");h[f]={display:this.name,name:this.value,nowrap:g,sortable:!0,align:"left"}});var m=k.initializeColumnWidth(c,h);jQuery.each(h,function(f,g){g.width=m[g.name]});b=jQuery("\x3cdiv\x3e\x3c/div\x3e");jQuery("\x3ca\x3e\x3c/a\x3e").attr({rel:"nofollow",href:d.clickableUrl}).text(d.title).appendTo(b);jQuery("#"+l).flexigrid({url:d.retrieverUrlHtml,
method:"GET",dataType:"json",colModel:h,sortname:d.sortField,sortorder:d.sortOrder,usepager:!0,title:b.html(),page:parseInt(d.requestedPage,10),useRp:!1,rp:parseInt(d.resultsPerPage,10),showTableToggleBtn:!0,height:d.height?parseInt(d.height,10):480,onSuccess:function(){k.onSuccessFunction(a)},onSubmit:function(){k.onSubmitFunction(d.useCache,this);return!0},preProcess:function(f){k.preProcessFunction(a,l,d.showTrustWarnings,f,d.nomsg);return f},onError:function(f,g,n){k.onErrorFunction(a,l,d.jiraissuesError,
f,g,n)},onReload:function(){k.onReloadFunction(d.useCache,a,this);return!0},errormsg:d.errormsg,pagestat:d.pagestat,procmsg:d.procmsg,nomsg:d.nomsg})});jQuery(".jiraissues_count").each(function(b,a){var c=jQuery(a);jQuery.ajax({cache:!1,type:"GET",url:c.find(".url").text(),data:{useCache:c.find(".use-cache").text(),rp:c.find(".rp").text(),showCount:"true"},success:function(e){var d=c.find(".result");1==e?d.text(AJS.format("{0} issue",e)):d.text(AJS.format("{0} issues",
e));d.removeClass("hidden");jQuery(".calculating, .error, .data",c).remove()},error:function(e){var d=jQuery(".error",c).removeClass("hidden"),l=e.getResponseHeader("WWW-Authenticate")||"",h=!1;if(401===e.status&&-1!=l.indexOf("OAuth")){var m=/OAuth realm="([^"]+)"/.exec(l);m&&(d.empty().append(AJS.$("\x3ca/\x3e",{href:m[1],"class":"oauth-init"}).text("Authenticate").click(function(){AppLinks.authenticateRemoteCredentials(m[1],function(){window.location.reload()},function(){});
return!1})).append(AJS.$("\x3cspan/\x3e",{text:" "+"to retrieve your issues"})),h=!0)}h||d.text(AJS.format(d.text(),e.status));jQuery(".calculating, .result, .data",c).remove()}})})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:split_aui.component.banner', location = 'aui.chunk.a99c8194d69cbe10f181--e0454091656e3e5b60d6.js' */
"use strict";(globalThis.webpackChunk_auiRuntime=globalThis.webpackChunk_auiRuntime||[]).push([[8359],{1935:(e,n,t)=>{t.r(n),t.d(n,{banner:()=>s});var r=t(9501),a=t(1415),i=t(9392),o=t(1005);function u(e){const n=document.getElementById("header");if(!n)throw new Error('Unable to find the application header. Please ensure that an element with the ID "header" is present in the DOM');const t=function({body:e="",type:n="error"}){const t=document.createElement("div");t.className=`aui-banner aui-banner-${n}`,t.setAttribute("role","alert"),t.innerHTML=e;const r=document.createElement("div");return r.innerText=`${n}`,r.classList.add("assistive"),t.prepend(r),t}(e);return function(e,n){n.prepend(e),(0,r.recomputeStyle)(e)}(t,n),function(e){const n=e.querySelectorAll(".aui-banner[hidden]"),t=o.getMessageLogger("Banner [hidden] attribute",{removeInVersion:"10.0.0",sinceVersion:"9.8.0",deprecationType:"ATTRIBUTE",extraInfo:"The hidden attribute on the banner is no longer effective. Future banner function calls won't remove banners with this attribute."});n.forEach((function(e){t(),e.remove()}))}(n),t}(0,a.default)("aui/banner",u),(0,i.default)("banner",u);const s=u}},e=>{e.O(0,[4496,1263,5131,5366,2178,3910,3447,5388,2016,8235,1700],(()=>{return n=1935,e(e.s=n);var n}));e.O()}]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.synchrony-interop:synchrony-status-banner-loader', location = '/js/synchrony-down-banner-loader.js' */
require(["ajs","wrm","aui/banner","wrm/context-path","confluence/api/event"],function(a,b,c,d,e){a.toInit(function(){!0===b.data.claim("com.atlassian.confluence.plugins.synchrony-interop:synchrony-status-banner-loader.synchrony-status")&&(c({body:"There\u0027s a problem with collaborative editing. People may be unable to save or publish."+'\x26nbsp;\x3ca href\x3d"'+d()+'/admin/confluence-collaborative-editor-plugin/configure.action"\x3e'+"Troubleshoot this problem"+"\x3c/a\x3e"}),e.trigger("confluence.header-resized"))})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'templates/recently.soy' */
// This file was automatically generated from recently.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace RY.Templates.
 */

if (typeof RY == 'undefined') { var RY = {}; }
if (typeof RY.Templates == 'undefined') { RY.Templates = {}; }


RY.Templates.body = function(opt_data, opt_ignored) {
  return '<div id="recently-viewed" class="aui-group"><div class="aui-item"><div class="top"><div class="filter"><form class="aui"><input class="filter-input text" type="text" placeholder="' + soy.$$escapeHtmlAttribute('Filter') + '"></form></div></div><div class="pages"></div></div></div>';
};
if (goog.DEBUG) {
  RY.Templates.body.soyTemplateName = 'RY.Templates.body';
}


RY.Templates.pageCollection = function(opt_data, opt_ignored) {
  return '<div class="groups"></div><div class="empty"></div>';
};
if (goog.DEBUG) {
  RY.Templates.pageCollection.soyTemplateName = 'RY.Templates.pageCollection';
}


RY.Templates.pageGroup = function(opt_data, opt_ignored) {
  return '<h3>' + soy.$$escapeHtml(opt_data.title) + '</h3><ul></ul>';
};
if (goog.DEBUG) {
  RY.Templates.pageGroup.soyTemplateName = 'RY.Templates.pageGroup';
}


RY.Templates.pageItem = function(opt_data, opt_ignored) {
  return '<a href=' + soy.$$escapeHtmlAttributeNospace(soy.$$filterNormalizeUri(opt_data.href)) + '><div class="page-icon"><span class="aui-icon content-type-' + soy.$$escapeHtmlAttribute(opt_data.type) + '">' + soy.$$escapeHtml(opt_data.type) + '</span></div><div class="page-title"><span class="ellipsis" href=' + soy.$$escapeHtmlAttributeNospace(soy.$$filterNormalizeUri(opt_data.href)) + '>' + soy.$$escapeHtml(opt_data.title) + ' - ' + soy.$$escapeHtml(opt_data.space) + '</span></div></a>';
};
if (goog.DEBUG) {
  RY.Templates.pageItem.soyTemplateName = 'RY.Templates.pageItem';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'js/util.js' */
var RY=RY||{};
(function(){var b=new Date,h=(new Date(b)).getTime(),k=(new Date(b.getFullYear(),b.getMonth(),b.getDate())).getTime(),l=(new Date(b.getFullYear(),b.getMonth(),b.getDate()-1)).getTime();RY.util=RY.Util={analytics:{trackDialogOpen:function(){AJS.trigger("analytics",{name:"recently-viewed-dialog-open"})},trackPageOpen:function(){AJS.trigger("analytics",{name:"recently-viewed-page-open"})}},quote:function(a){return a.replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")},diffInDays:function(a,c){return Math.floor((a-c)/
864E5)},daysSince:function(a){return a>=k?0:a>=l?1:RY.util.diffInDays(h,a)},wait:function(a,c,m){var d,e,f,n=function(){e=setTimeout(function(){a.apply(m,f)},c)};return function(){f=arguments;var g=new Date;d&&g-d<c&&clearTimeout(e);n();d=g}}}})();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'js/page-storage.js' */
var RY=RY||{};
RY.RecentPageStorage=function(f){var c={},g=function(){var b=function(a,d){return"lastSeen"===a&&_.isString(d)?(new Date(d)).getTime():d};try{c=JSON.parse(f.getItem("com.atlassian.confluence.plugins.recently.viewed.pages.v1"),b)||{}}catch(a){c={}}return c},h=function(){var b=_.values(c),a=b.length-100;if(0<a){var d=_.sortBy(b,function(e){return e.lastSeen});_.times(a,function(){var e=d.shift();delete c[e.id]})}};this.addCurrentPage=function(b){if(b.id&&b.title){g();var a=c[b.id];a||(c[b.id]=a={});
a=_.extend(a,b);a.lastSeen=(new Date).getTime();a.count=a.count+1||1;h();try{f.setItem("com.atlassian.confluence.plugins.recently.viewed.pages.v1",JSON.stringify(c))}catch(d){}}};this.getPages=function(){return _.values(g())}};
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'js/filter.js' */
var RY=RY||{};
RY.FilterView=Backbone.View.extend({className:"filter",events:{"input .filter-input":"onInput","keyup .filter-input":"onInput","keydown .filter-input":"onKeydown"},initialize:function(){_.bindAll(this,"render","onInput","onKeydown","search");this.navigationEvents=this.options.navigationEvents;this.onInput=RY.util.wait(this.onInput,100,this)},render:function(){this.$input=this.$(".filter-input");return this},onInput:function(a){a&&_.contains([37,38,39,40],a.which)||this.search()},onKeydown:function(a){switch(a.which){case 13:this.navigationEvents.trigger("select");a.preventDefault();
a.stopPropagation();break;case 38:this.navigationEvents.trigger("previous");a.preventDefault();break;case 40:this.navigationEvents.trigger("next"),a.preventDefault()}},search:function(){var a=this.$input.val();this.collection.search(a)}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'js/page-model.js' */
var RY=RY||{};
(function(){var d="undefined"!=typeof ConfluenceMobile?ConfluenceMobile.AppData.get("confluence-context-path"):AJS.contextPath();RY.Page=Backbone.Model.extend({href:function(){return d+this.get("url")},daysSinceLastSeen:function(){return RY.util.daysSince(this.get("lastSeen"))}});RY.PageCollection=Backbone.Collection.extend({model:RY.Page,url:d+"/rest/recentlyviewed/1.0/recent?includeTrashedContent\x3dtrue",search:function(a){if(0===this._queryLength(a))var c=this.models;else{var e=a.match(/[^\s-]+/g);
c=this.filter(function(b){var f=b.get("title");b=b.get("space");var g=(f+b).toLowerCase();return _.all(e,function(h){return-1!==g.indexOf(h.toLowerCase())})})}this.trigger("filter",c,a);return c},_queryLength:function(a){return String.prototype.trim?a.trim().length:AJS.$.trim(a).length},comparator:function(a){return-a.get("lastSeen")}})})();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'js/page.js' */
var RY=RY||{};RY.PageView=Backbone.View.extend({tagName:"li",className:"ry-page",template:RY.Templates.pageItem,initialize:function(){_.bindAll(this,"hide","show","render")},hide:function(){this.$el.hide().removeClass("shown")},show:function(){this.$el.show().addClass("shown")},render:function(){var a=this.model.toJSON();a.href=this.model.href();this.$el.html(this.template(a));return this}});
RY.PageGroupView=Backbone.View.extend({className:"group",template:RY.Templates.pageGroup,initialize:function(){_.bindAll(this,"hide","hideAll","show","showBorder","showPages","add","render");this.title=this.options.title;this.modelViews={}},hide:function(){this.$el.hide()},hideAll:function(){this.$el.removeClass("border").hide();_.invoke(_.values(this.modelViews),"hide")},show:function(){this.$el.show()},showBorder:function(){this.$el.addClass("border")},showPages:function(a){var b=this,c=!1;_.each(a,
function(f){if(f=b.modelViews[f.cid])c=!0,f.show()});c&&this.show();return c},add:function(a){var b=new RY.PageView({model:a});this.modelViews[a.cid]=b;this.$list.append(b.render().el)},render:function(){this.$el.html(this.template({title:this.title}));this.$list=this.$("ul");return this}});
RY.PageNavigator=function(a,b,c){function f(e){pageItems=a.find("li.shown");var g=pageItems.index(pageItems.filter(".highlight"));d&&d.removeClass("highlight");e+=g;0>e&&(e=pageItems.length-1);e>=pageItems.length&&(e=0);d=pageItems.eq(e);d.addClass("highlight")}function h(){if(d.length){var e=b.children(),g=b.height(),l=d.outerHeight(!0),k=d.position().top;0>k?0===a.find("li.shown").index(d)?b.scrollTop(0):b.scrollTop(d.offset().top-e.offset().top):k>g&&b.scrollTop(d.offset().top-e.offset().top-g+
l)}}var d=null;c.on("select",function(){if(d&&d.is(":visible")){RY.util.analytics.trackPageOpen();var e=d.find(".page-title span").attr("href");window.location=e}},this);c.on("previous",function(){f(-1);h()},this);c.on("next",function(){f(1);h()},this)};
RY.PageCollectionView=Backbone.View.extend({template:RY.Templates.pageCollection,events:{"click .page-title a":RY.util.analytics.trackPageOpen},initialize:function(){_.bindAll(this,"checkEmpty","filter","_groupForPage","addOne","showEmptyMessage","clearEmptyMessage","addAll","render");this.modelViews={};this.collection.on("reset",this.addAll,this);this.collection.on("add",this.addOne,this);this.collection.on("filter",this.filter,this)},checkEmpty:function(a,b){var c=this.collection.isEmpty();a=0===
a.length;c||a?(c?b="Sorry mate, looks like you haven\u0027t visited any pages yet.":(b=AJS.contextPath()+"/dosearchsite.action?queryString\x3d"+encodeURIComponent(b),b="We didn\u0027t find any matching pages in your history."+" "+AJS.format("\u003ca href=\u0022{0}\u0022\u003eClick here\u003c/a\u003e to search for this term instead.",b)),this.showEmptyMessage(b)):this.clearEmptyMessage()},filter:function(a,b){this.checkEmpty(a,b||"");b=[this.$today,this.$yesterday,this.$older];_.invoke(b,
"hideAll");var c=[];_.each(b,function(f){f.showPages(a)&&c.push(f)});1<c.length&&(c.pop(),_.invoke(c,"showBorder"))},_groupForPage:function(a){a=a.daysSinceLastSeen();return 0===a?this.$today:1===a?this.$yesterday:this.$older},addOne:function(a){this._groupForPage(a).add(a)},showEmptyMessage:function(a){this.$(".empty").html(AJS.$("\x3cp\x3e").html(a))},clearEmptyMessage:function(){this.$(".empty").html("")},addAll:function(){this.collection.each(this.addOne)},render:function(){this.$el.html(this.template());
this.$today=new RY.PageGroupView({title:"Today"});this.$yesterday=new RY.PageGroupView({title:"Yesterday"});this.$older=new RY.PageGroupView({title:"Older"});var a=this.$(".groups");a.append(this.$today.render().el);a.append(this.$yesterday.render().el);a.append(this.$older.render().el);
_.invoke([this.$today,this.$yesterday,this.$older],"hideAll");return this}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:main-resources', location = 'js/main.js' */
var RY=RY||{};
AJS.toInit(function(b){b("#view-user-history-link").unbind("click");b("#view-user-history-link").click(function(a){a.preventDefault();a=new AJS.Dialog({width:600,height:500,id:"recently-viewed-dialog",closeOnOutsideClick:!0});var c=b(RY.Templates.body());a.addHeader("Recently viewed pages");a.addPanel("SinglePanel",c);a.addLink("Close",function(d){d.hide()});var g=b("\x3cdiv\x3e",{"class":"dialog-tip"}).text("Hint: type \u0022g\u0022 and then \u0022r\u0022 anywhere to quickly open this menu");
a.popup.element.find(".dialog-button-panel").append(g);var e=new RY.PageCollection,f=new RY.PageCollectionView({collection:e});c.find(".pages").html(f.render().el);a.gotoPanel(0);a.show();var h=b("#recently-viewed-dialog").spin("large");e.fetch({success:function(){h.spinStop();var d=_.extend({},Backbone.Events);new RY.PageNavigator(f.$el,c.parent(),d);(new RY.FilterView({collection:e,el:c.find(".filter"),navigationEvents:d})).render().search()}});RY.util.analytics.trackDialogOpen()})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.heatmapper.atlassian-heatmapper-plugin:heat-mapper-events-resources', location = 'js/heat-mapper-dom.js' */
(function(G){try{if(window.AJS&&!AJS.DarkFeatures.isEnabled("heatmapper")){return 
}window.HeatMapper=window.HeatMapper||{};
var E="\"#$%&'()*+,./:;<=>?@[\\]^`{|}~";
function C(J,I,L,K){if(window.AJS&&window.AJS.log){window.AJS.log(J,I,L,K)
}}function D(I){if(!I){return null
}var N="",K;
var M=I.split(" ");
for(var L=0,J=M.length;
L<J;
L++){K=G.trim(M[L]);
if(K.length){N+="."+K
}}return N
}function F(L){var J="";
for(var K=0,I=L.length;
K<I;
K++){var M=L.charAt(K);
if(E.indexOf(M)>=0){J+="\\"
}J+=M
}return J
}function A(I){var K=[];
for(var J in I){if(I.hasOwnProperty(J)&&(J==="name"||J.indexOf("id")>=0)){K.push(J)
}}return K
}var B={click:"a,input,button,textarea,.aui-button",mousedown:"select"};
HeatMapper.DOM={find:function(){return G.find(HeatMapper.DOM.findSelector)
},findSelector:G.map(B,function(I){return I
}).join(","),eventSelectors:B,findAsSelectors:function(){return HeatMapper.DOM.mapToUniqueSelectors(HeatMapper.DOM.find())
},uniqueSelector:function(I){try{if(!I.jquery){I=G(I)
}if(I.attr("id")){return"#"+I.attr("id")
}var K=I.closest("[id]").attr("id")||"";
if(K.length){K="#"+K+" "
}var R=D(I.attr("class"));
var L=K+R;
if(R&&R.length&&G(L).length===1){return L
}var S=HeatMapper.DOM.getAttributes(I);
var T=A(S);
var N;
for(var M=0,J=T.length;
M<J;
M++){N=K+"["+T[M]+'="'+F(S[T[M]])+'"]';
if(G(N).length===1){return N
}}var P=K+I[0].nodeName;
if(R){P+=R
}var Q=G(P).index(I);
return P+":eq("+Q+")"
}catch(O){C("Failed to get selector for:");
C(I);
C(O);
return null
}},mapToUniqueSelectors:function(I){return G.map(I,function(J){return HeatMapper.DOM.uniqueSelector(J)
})
},getAttributes:function(M){if(!M||!M.length){return{}
}var N={};
var K=M[0].attributes;
for(var L=0,J=K.length;
L<J;
L++){var I=K[L];
N[I.name]=I.value
}return N
}}
}catch(H){if(AJS){AJS.log("heat-mapper-dom.js - unexpected exception");
AJS.log(H)
}}})(window.jQuery);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.heatmapper.atlassian-heatmapper-plugin:heat-mapper-events-resources', location = 'js/heat-mapper-events.js' */
AJS.toInit(function(C){try{if(window.AJS&&!AJS.DarkFeatures.isEnabled("heatmapper")){return 
}window.HeatMapper=window.HeatMapper||{};
if(!AJS.EventQueue&&!HeatMapper.Events){AJS.log("Analytics support not installed. Not tracking click events.");
return 
}function A(I){var H=window.location;
return{selector:HeatMapper.DOM.uniqueSelector(I),element:I[0].nodeName,hostname:H.hostname,port:H.port,protocol:H.protocol,path:H.pathname,userAgent:navigator.userAgent}
}function G(H){if(AJS.EventQueue){AJS.trigger("analyticsEvent",{name:"heatmapper-click",data:H})
}else{if(HeatMapper.Events){HeatMapper.Events.publish("heatmapper",H)
}}}function B(J){var I=C(J.currentTarget);
var H=A(I);
J.heatMapperHandled=true;
G(H)
}var E=C(document);
E.delegate(HeatMapper.DOM.eventSelectors.click,"click",B);
E.delegate(HeatMapper.DOM.eventSelectors.mousedown,"mousedown",B);
var F=jQuery.Event.prototype.stopPropagation;
jQuery.Event.prototype.stopPropagation=function(){try{if(this.currentTarget&&!this.heatMapperHandled&&this.type==="click"){var H=C(this.currentTarget);
if(H.is(HeatMapper.DOM.findSelector)){B(this)
}}}catch(I){AJS.log("Failed to intercept stopPropagation properly - skipping event capture");
AJS.log(I)
}return F.call(this)
}
}catch(D){AJS.log("heat-mapper-events.js - unexpected exception");
AJS.log(D)
}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:spacemenu-resources', location = 'js/space-menu.js' */
AJS.toInit(function(a){var c=a(Confluence.Templates.BrowseSpaces.spacesLink());a("#space-directory-link").replaceWith(a(c));var e=function(d){var b=a("#space-menu-link-content");b.html(d.template);AJS&&AJS.Confluence&&AJS.Confluence.Analytics&&AJS.Confluence.Analytics.setAnalyticsSource&&AJS.Confluence.Analytics.setAnalyticsSource(b.find("a"),"spacemenu");a("#create-space-header").click(function(){AJS.trigger("analytics",{name:"create-space-from-header"});Confluence.SpaceBlueprint.Dialog.launch();
return!1})};a("#space-menu-link-content").on("aui-dropdown2-show",function(){AJS.trigger("analytics",{name:"open-space-menu"});a("#space-menu-link-content .aui-dropdown2-section")&&a("#space-menu-link-content .aui-dropdown2-section").length||a.ajax({url:Confluence.getContextPath()+"/rest/ia/1.0/spacesmenu",type:"GET",dataType:"json",cache:!1,success:e});return!1})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:spacemenu-resources', location = 'soy/space-menu.soy' */
// This file was automatically generated from space-menu.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.BrowseSpaces.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.BrowseSpaces == 'undefined') { Confluence.Templates.BrowseSpaces = {}; }


Confluence.Templates.BrowseSpaces.spacesLink = function(opt_data, opt_ignored) {
  return '' + aui.dropdown2.trigger({menu: {id: 'space-menu-link-content'}, id: 'space-menu-link', tagName: 'a', extraClasses: 'aui-nav-link', title: 'Spaces', showIcon: false, text: 'Spaces'}) + aui.dropdown2.contents({id: 'space-menu-link-content', extraClasses: 'aui-style-default aui-dropdown2-in-header'});
};
if (goog.DEBUG) {
  Confluence.Templates.BrowseSpaces.spacesLink.soyTemplateName = 'Confluence.Templates.BrowseSpaces.spacesLink';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:space-ia-analytics', location = 'js/space-ia-analytics.js' */
(function(f){function d(){var b=f(".acs-side-bar"),a=b.find("a:not(.external_link a, #acs-configure-link)");c(a,"sidebar");a=b.find("[data-collapsed-tooltip\x3d'"+AJS.I18n.getText("Pages")+"']");c(a,"sidebar-pages");a=b.find("[data-collapsed-tooltip\x3d'"+AJS.I18n.getText("Blog")+"']");c(a,"sidebar-blogs");a=b.find(".quick-links-section li:not(.external_link) a");c(a,"spaceshortcut");a=b.find(".ia-secondary-container a:not(.more-children-link)");"pages"==b.find(".ia-secondary-container").data("tree-type")?
c(a,"contextnavchildmode"):"page-tree"==b.find(".ia-secondary-container").data("tree-type")?c(a,"contextnavpagetreemode"):c(a,"contextnav")}function e(b){return function(){AJS.trigger("analytics",{name:"space-ia-nav",data:{linkType:b}})}}var c=AJS.Confluence.Analytics.setAnalyticsSource;AJS.toInit(function(b){b(".acs-side-bar").find(".ia-secondary-container .more-children-link").click(e("context-nav.more-children"));AJS.bind("sidebar.exit-configure-mode",d);AJS.bind("sidebar.flyout-triggered",function(a,
g){e("flyout-triggered."+g.flyout)()});AJS.bind("pagetree-children-loaded",d);d()})})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.support:atl-tags', location = 'includes/js/atl-tags.js' */

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-feature-discovery-plugin:confluence-feature-discovery-plugin-resources', location = '/js/confluence-feature-discovery-plugin.js' */
(function(q){function k(b){void 0===g&&(g=JSON.parse(AJS.Meta.get("discovered-plugin-features")||"{}"));return b?g[b]||[]:g}function m(b,e){b=k(b);for(var d=0,f=b.length;d<f;d++)if(b[d]===e)return!0;return!1}Confluence.FeatureDiscovery={};var g,n=!1,r=WRM.data.claim("com.atlassian.confluence.plugins.confluence-feature-discovery-plugin:confluence-feature-discovery-plugin-resources.test-mode");Confluence.FeatureDiscovery.forPlugin=function(b,e){function d(a){a=parseInt(f.getItem(a),10);return isNaN(a)?
0:a}var f=Confluence.storageManager("feature-discovery."+b);e=e||3;return{addDiscoveryView:function(a){var c=d(a)+1;f.setItem(a,c)},shouldShow:function(a,c){if(c=!0===c&&r){a:{c="com.atlassian.webdriver.discovery\x3d"+b+":"+a;for(var p=document.cookie.split(";"),l=0;l<p.length;l++){for(var h=p[l];" "===h.charAt(0);)h=h.substring(1);if(-1!==h.indexOf(c)){c=!0;break a}}c=!1}c=!c}return c||n||m(b,a)?!1:d(a)>=e?(this.markDiscovered(a),!1):n=!0},markDiscovered:function(a,c){m(b,a)||AJS.safeAjax({url:AJS.contextPath()+
"/rest/feature-discovery/1.0/discovered/"+b+"/"+a,type:"POST",data:{},success:function(){k(b).unshift(a);f.removeItem(a);AJS.trigger("feature-discovered",{pluginKey:b,featureKey:a});c&&q.isFunction(c)&&c()}})},listDiscovered:function(){return k(b).slice(0)}}}})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-quicknav:quicknav-resources', location = 'js/quick-nav.js' */
define("confluence-quicknav/quick-nav",["jquery","confluence/api/logger"],function(d,n){var g=[],f,h=function(a){return function(b){a.closest("form").find(".quick-nav-drop-down").append(b)}},k=function(a){"undefined"!==typeof a?g.push(a):n.log("WARN: Attempted to add a dropdown post-process function that was undefined.")},p=function(a){d("a",a).each(function(){var b=d(this),c=b.find("span").data("properties");(c=c?c.spaceName:null)&&!b.is(".content-type-spacedesc")&&(b.after(b.clone().attr("class",
"space-name").html(c)),b.parent().addClass("with-space-name"))})};return{addDropDownPostProcess:k,setMakeParams:function(a){f=a},init:function(){var a=d("#quick-search-query"),b=h(a),c=d("#space-blog-quick-search-query"),l=d("#confluence-space-key");a.quicksearch("/rest/quicknav/1/search",null,{dropdownPlacement:b,dropdownPostprocess:function(e){d.each(g,function(q,m){m&&m(e)})},makeParams:function(e){return f?f(e):{query:e}},ajsDropDownOptions:{className:"quick-search-dropdown"}});k(p);c.length&&
l.length&&c.quicksearch("/rest/quicknav/1/search?type\x3dblogpost\x26spaceKey\x3d"+d("\x3ci\x3e\x3c/i\x3e").html(l.attr("content")).text(),null,{dropdownPlacement:h(c)})}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-quicknav/quick-nav","Confluence.QuickNav");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.pas:pas-everypage-static', location = 'js/store_js/store.js' */
(function(){var C=function(G,H){return Object.prototype.hasOwnProperty.call(G,H)
};
var B=function(G){var I=0;
for(var H in G){if(C(G,H)){I++
}}return I
};
var D=function(K,I,J){var H=K.length>>>0;
for(var G=(J<0)?Math.max(0,H+J):J||0;
G<H;
G++){if(K[G]===I){return G
}}return -1
};
var F=function(I,G,H){return D(I,G,H)!==-1
};
var A=function(H,G){if(!F(H,G)){H.push(G)
}return H
};
var E=this.Store=function(G,I,H){this.name=G;
this.defaults=I||{};
this.watcherSpeed=H||500;
this.listeners={};
this.applyDefaults()
};
E.clear=function(){localStorage.clear()
};
E.prototype.applyDefaults=function(){for(var G in this.defaults){if(C(this.defaults,G)&&this.get(G)===undefined){this.set(G,this.defaults[G])
}}return this
};
E.prototype.watcher=function(I){if(this.watcherTimer){clearTimeout(this.watcherTimer)
}if(B(this.listeners)||I){this.newObject=this.toObject();
if(this.oldObject){for(var G in this.newObject){if(C(this.newObject,G)&&this.newObject[G]!==this.oldObject[G]){this.fireEvent(G,this.newObject[G])
}}for(var G in this.oldObject){if(C(this.oldObject,G)&&!C(this.newObject,G)){this.fireEvent(G,this.newObject[G])
}}}this.oldObject=this.newObject;
var H=this;
this.watcherTimer=setTimeout(function(){H.watcher()
},this.watcherSpeed)
}return this
};
E.prototype.get=function(G){var H=localStorage.getItem("store."+this.name+"."+G);
if(H===null){return undefined
}try{return JSON.parse(H)
}catch(I){return null
}};
E.prototype.set=function(G,H){if(H===undefined){this.remove(G)
}else{if(typeof H==="function"){H=null
}try{H=JSON.stringify(H)
}catch(I){H=null
}localStorage.setItem("store."+this.name+"."+G,H)
}return this
};
E.prototype.remove=function(G){localStorage.removeItem("store."+this.name+"."+G);
return this.applyDefaults()
};
E.prototype.reset=function(){var G="store."+this.name+".";
for(var H=(localStorage.length-1);
H>=0;
H--){if(localStorage.key(H).substring(0,G.length)===G){localStorage.removeItem(localStorage.key(H))
}}return this.applyDefaults()
};
E.prototype.toObject=function(){var G={};
var H="store."+this.name+".";
for(var J=(localStorage.length-1);
J>=0;
J--){if(localStorage.key(J).substring(0,H.length)===H){var I=localStorage.key(J).substring(H.length);
var K=this.get(I);
if(K!==undefined){G[I]=K
}}}return G
};
E.prototype.fromObject=function(G,I){if(!I){this.reset()
}for(var H in G){if(C(G,H)){this.set(H,G[H])
}}return this
};
E.prototype.addEvent=function(G,H){this.watcher(true);
if(!this.listeners[G]){this.listeners[G]=[]
}A(this.listeners[G],H);
return this
};
E.prototype.removeEvent=function(G,I){for(var H=(this.listeners[G].length-1);
H>=0;
H--){if(this.listeners[G][H]===I){this.listeners[G].splice(H,1)
}}if(!this.listeners[G].length){delete this.listeners[G]
}return this
};
E.prototype.fireEvent=function(I,L){var K=[I,"*"];
for(var J=0;
J<K.length;
J++){var G=K[J];
if(this.listeners[G]){for(var H=0;
H<this.listeners[G].length;
H++){this.listeners[G][H](L,I,this.name)
}}}return this
}
}());
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.pas:pas-everypage-static', location = 'js/pasConfig.js' */
var Atlassian=Atlassian||{};
Atlassian.PAS={timeUpdateInterval:60000,pollingInterval:15*60*1000,url:AJS.contextPath()+"/rest/pas/latest/announcement",store:new Store("Atlassian.PAS.Announcements."+document.location.hostname+AJS.contextPath()+"."+AJS.$("meta[name='ajs-remote-user']").attr("content")),nextAnnouncementKey:"nextAnnouncement",timeStampKey:"timeStamp"};
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.pas:pas-everypage-static', location = 'js/pas.js' */
AJS.$(function(){AJS.$.ajaxSetup({cache:false});
var H=null;
var K=null;
var A=null;
var C=0;
var Q=function(){Atlassian.PAS.announcement=AJS.$("<div id='pas-announcement'/>");
Atlassian.PAS.announcementText=AJS.$("<span/>").appendTo(Atlassian.PAS.announcement);
Atlassian.PAS.announcementUrl=AJS.$("<a id='more-info' target='_blank'>(more info)</a>").appendTo(Atlassian.PAS.announcement);
AJS.$("<button id='dismiss-announcement' class='pas-announcement-right'>&#x2716;</button>").click(G).appendTo(Atlassian.PAS.announcement);
Atlassian.PAS.announcementTime=AJS.$("<span class='pas-announcement-right'/>").appendTo(Atlassian.PAS.announcement);
Atlassian.PAS.announcement.hide();
AJS.$("#header").before(Atlassian.PAS.announcement)
};
var L=function(U){var X=function(d,e,b){d=""+d;
while(d.length<b){d=e+d
}return d
};
var W=function(d,c){var b=d+" "+c;
if(d!=1){b+="s"
}return b
};
var a=60000;
var Y=3600000;
var V=86400000;
if(U<a){return"in less than a minute"
}else{if(U<Y){return"in "+W(Math.round(U/a),"min")
}else{if(U<V){return"in "+W(Math.round(U/Y),"hour")+" "+W(Math.round((U%Y)/a),"minute")
}else{var Z=new Date();
Z.setSeconds(Z.getSeconds()+Math.round(U/1000));
return(X(Z.getFullYear(),"0",4)+"/"+X(Z.getMonth()+1,"0",2)+"/"+X(Z.getDate(),"0",2)+" "+X(Z.getHours(),"0",2)+":"+X(Z.getMinutes(),"0",2))
}}}};
var B=function(){if(AJS.$(window).scrollTop()>0){Atlassian.PAS.announcement.addClass("pas-persistent-header")
}else{Atlassian.PAS.announcement.removeClass("pas-persistent-header");
AJS.trigger("confluence.header-resized")
}};
var N=function(){if(H!=null){clearTimeout(H)
}if(K!=null){clearTimeout(K)
}if(A!=null){clearInterval(A)
}Atlassian.PAS.announcement.hide();
AJS.$(window).unbind("scroll",B)
};
var S=function(V){B();
var U=function(){Atlassian.PAS.announcement.show();
AJS.trigger("confluence.header-resized")
};
if(V==true){Atlassian.PAS.announcement.slideDown("fast",function(){U()
})
}else{U()
}};
var G=function(){Atlassian.PAS.announcement.slideUp("fast",function(){Atlassian.PAS.announcement.hide();
AJS.trigger("confluence.header-resized")
});
var V=Atlassian.PAS.announcement.attr("announcementId");
var U=new Date();
U.setDate(U.getDate()+1);
var W=V+"; "+U.toUTCString();
document.cookie="pas_dismiss="+W+"; path=/"
};
var D=function(Z){var X=document.cookie.split(";");
for(var W=0;
W<X.length;
W++){var V=X[W];
var a=V.indexOf("=");
var U=AJS.$.trim(V.substr(0,a));
var Y=AJS.$.trim(V.substr(a+1));
if(U=="pas_dismiss"){return Y==Z
}}return false
};
var F=function(){if(C>0){var U=C-Atlassian.PAS.timeUpdateInterval;
C=U;
Atlassian.PAS.announcementTime.text(L(U))
}else{clearInterval(A);
A=null
}};
var P=function(W){var V=function(){return W.timeToStart-M()
};
if(W==null||W.message==null||D(W.id)){return 
}C=W.timeLeft;
AJS.$(window).bind("scroll",B);
Atlassian.PAS.announcementText.html(W.message);
Atlassian.PAS.announcementTime.text(L(C));
A=setInterval(F,Atlassian.PAS.timeUpdateInterval);
if(W.url){Atlassian.PAS.announcementUrl.attr("href",W.url);
Atlassian.PAS.announcementUrl.show()
}else{Atlassian.PAS.announcementUrl.hide()
}var X=Atlassian.PAS.announcement.attr("announcementId");
var Y=(X&&X!=W.id);
Atlassian.PAS.announcement.attr("announcementId",W.id);
var U=W.duration;
W.timeToStart=V();
if(W.timeToStart>0){U+=W.timeToStart;
H=setTimeout(function(){S(Y)
},W.timeToStart)
}else{S(Y)
}if(U>0){K=setTimeout(function(){N()
},U)
}};
var O=function(){AJS.$.ajax({type:"GET",contentType:"application/json",url:Atlassian.PAS.url,cache:false,global:false,timeout:5000,async:false,success:function(U,V){R(Atlassian.PAS.timeStampKey,T());
R(Atlassian.PAS.nextAnnouncementKey,U)
},error:function(W,U,V){AJS.log("Could not get announcement from server.")
}})
};
var T=function(){return new Date().getTime()
};
var M=function(){return(T()-I(Atlassian.PAS.timeStampKey))
};
function I(U){return Atlassian.PAS.store.get(U)
}function R(U,V){return Atlassian.PAS.store.set(U,V)
}function J(){var V=I(Atlassian.PAS.timeStampKey);
var U=M();
return V==undefined||U>Atlassian.PAS.pollingInterval
}function E(){AJS.$("#more-info").live("click",function(U){AJS.trigger("analyticsEvent",{name:"com.atlassian.plugins.pas.more-info.click",data:{message:AJS.$("#pas-announcement span:first").text()}})
});
AJS.$("#dismiss-announcement").live("click",function(U){AJS.trigger("analyticsEvent",{name:"com.atlassian.plugins.pas.dismiss-announcement.click",data:{message:AJS.$("#pas-announcement span:first").text()}})
})
}E();
Q();
if(J()){O()
}P(I(Atlassian.PAS.nextAnnouncementKey))
});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-license-banner:confluence-license-banner-resources', location = '/js/confluence-license-banner.js' */
require(["ajs","jquery"],function(c,b){c.toInit(function(){var g=WRM.data.claim("com.atlassian.confluence.plugins.confluence-license-banner:confluence-license-banner-resources.license-details");if(g){var d={destroyBanner:function(){b("#license-banner").slideUp(function(){b("#license-banner").remove()})},remindMeLater:function(){b.ajax({type:"POST",dataType:"json",contentType:"application/json; charset\x3dutf-8",data:JSON.stringify({atl_token:c.Meta.get("atl-token")}),url:c.contextPath()+"/rest/licensebanner/1.0/reminder/later"});
d.destroyBanner()},remindMeNever:function(){b.ajax({type:"POST",dataType:"json",contentType:"application/json; charset\x3dutf-8",data:JSON.stringify({atl_token:c.Meta.get("atl-token")}),url:c.contextPath()+"/rest/licensebanner/1.0/reminder/never"});d.destroyBanner()},createBanner:function(a){var f;a.showLicenseExpiryBanner?f=Confluence.Templates.LicenseBanner.expiryBanner({days:a.daysBeforeLicenseExpiry,mac:a.renewUrl,sales:a.salesUrl}):a.showMaintenanceExpiryBanner&&(f=Confluence.Templates.LicenseBanner.maintenanceBanner({days:a.daysBeforeMaintenanceExpiry,
mac:a.renewUrl,sales:a.salesUrl}));f&&(a=b(f),b("#full-height-container").prepend(a),b("#license-banner-later").click(function(e){e.preventDefault();d.remindMeLater()}),b("#license-banner-never").click(function(e){e.preventDefault();d.remindMeNever()}),a.find(".aui-message .aui-close-button").click(function(e){e.preventDefault();d.remindMeLater()}))}};d.createBanner(g)}else c.warn("Unable to claim my required data")})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-license-banner:confluence-license-banner-resources', location = 'soy/confluence-license-banner.soy' */
// This file was automatically generated from confluence-license-banner.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.LicenseBanner.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.LicenseBanner == 'undefined') { Confluence.Templates.LicenseBanner = {}; }


Confluence.Templates.LicenseBanner.wrapper = function(opt_data, opt_ignored) {
  return '<div>' + soy.$$filterNoAutoescape(opt_data.contentHTML) + '</div>';
};
if (goog.DEBUG) {
  Confluence.Templates.LicenseBanner.wrapper.soyTemplateName = 'Confluence.Templates.LicenseBanner.wrapper';
}


Confluence.Templates.LicenseBanner.expiryBanner = function(opt_data, opt_ignored) {
  var output = '';
  var renewTag__soy8 = '<a id="license-banner-my-link" target="_blank" href="' + soy.$$escapeHtml(opt_data.mac) + '">';
  var end__soy12 = '</a>';
  var mailTag__soy14 = '<a id="license-banner-sales-link" target="_blank" href="' + soy.$$escapeHtml(opt_data.sales) + '">';
  output += Confluence.Templates.LicenseBanner.wrapper({contentHTML: '<div id="license-banner" class="aui-message aui-message-warning closeable"><div id="license-banner-content" data-days="' + soy.$$escapeHtml(opt_data.days) + '" data-subscription="true">' + ((opt_data.days < 0) ? soy.$$filterNoAutoescape(AJS.format('Your subscription has expired. This site is now read-only. To keep using Confluence, {0}renew online{1} or {2}contact us{3}.',renewTag__soy8,end__soy12,mailTag__soy14,end__soy12)) : (opt_data.days == 0) ? soy.$$filterNoAutoescape(AJS.format('Your subscription will expire today and your site will become read-only. To keep using Confluence, {0}renew online{1} or {2}contact us{3}.',renewTag__soy8,end__soy12,mailTag__soy14,end__soy12)) : soy.$$filterNoAutoescape(AJS.format('Your subscription will expire in {0,choice,1#{0} day|1\x3c{0} days}. Your site will become read-only after the expiry. To keep using Confluence, {1}renew online{2} or {3}contact us{4}.',opt_data.days,renewTag__soy8,end__soy12,mailTag__soy14,end__soy12))) + '</div>' + ((opt_data.days > 7) ? '<button type="button" class="aui-close-button" aria-label="Close"></button>' : '') + '</div>'});
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.LicenseBanner.expiryBanner.soyTemplateName = 'Confluence.Templates.LicenseBanner.expiryBanner';
}


Confluence.Templates.LicenseBanner.maintenanceBanner = function(opt_data, opt_ignored) {
  var output = '';
  var renewTag__soy39 = '<a id="license-banner-my-link" target="_blank" href="' + soy.$$escapeHtml(opt_data.mac) + '">';
  var end__soy43 = '</a>';
  var later__soy45 = '<a href="#" id="license-banner-later">';
  var never__soy47 = '<a href="#" id="license-banner-never">';
  output += Confluence.Templates.LicenseBanner.wrapper({contentHTML: '' + aui.message.warning({content: '<div id="license-banner-content" data-days="' + soy.$$escapeHtml(opt_data.days) + '" data-subscription="false">' + ((opt_data.days < 0) ? soy.$$filterNoAutoescape(AJS.format('You no longer have access Support and Updates. {0}Renew online{1}, {2}remind me later{3} or {4}never remind me again{5}.',renewTag__soy39,end__soy43,later__soy45,end__soy43,never__soy47,end__soy43)) : (opt_data.days == 0) ? soy.$$filterNoAutoescape(AJS.format('You will lose access to Support and Updates today. {0}Renew online{1}, {2}remind me later{3} or {4}never remind me again{5}.',renewTag__soy39,end__soy43,later__soy45,end__soy43,never__soy47,end__soy43)) : soy.$$filterNoAutoescape(AJS.format('You will lose access to Support and Updates in {0,choice,1#{0} day|1\x3c{0} days}. {1}Renew online{2}, {3}remind me later{4} or {5}never remind me again{6}.',opt_data.days,renewTag__soy39,end__soy43,later__soy45,end__soy43,never__soy47,end__soy43))) + '</div>', id: 'license-banner'})});
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.LicenseBanner.maintenanceBanner.soyTemplateName = 'Confluence.Templates.LicenseBanner.maintenanceBanner';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-browser-metrics:legacy-browser-metrics', location = '/js/legacy/browser-metrics.js' */
(function(){var b=window.BrowserMetrics||{};b.isFunction=function(e){return!!(e&&e.constructor&&e.call&&e.apply)};b.isEnabled=function(){void 0===b.enabled&&(b.enabled=!0);return b.enabled};window.BrowserMetrics=b})();
(function(){(window.BrowserMetrics||{}).isEnabled()&&(window.ATL_PERF||(window.ATL_PERF={}),window.ATL_PERF.initPageLoad=function(b){function e(){var c=m();c&&n(function(d,a){d="browser.metrics."+d;a={version:5,page:c,value:12E3<a?"x":Math.ceil(a/100),rawValue:Math.round(a)};AJS.Analytics?AJS.Analytics.triggerPrivacyPolicySafeEvent(d,a):AJS.trigger("analyticsEvent",{name:d,data:a})})}function h(){if(b.performance.timing.loadEventEnd)try{e()}catch(c){window.console&&window.console.log("Error reporting browser metrics: "+
c)}else setTimeout(h,1E3)}var p=function(){var c=/^(\w+):\/\/([^\/]*)(.*)$/;return function(d){var a=d.match(c);return a?{scheme:a[1],host:a[2],path:a[3]}:{path:d}}}(),n=function(){var c="secureConnectionStart requestStart responseStart responseEnd domContentLoadedEventStart domContentLoadedEventEnd loadEventEnd".split(" ");return function(d){if(b.performance){var a=b.performance.timing,f=a.navigationStart;if(f)for(var g=0;g<c.length;++g){var k=c[g],l=a[k];l&&d(k,l-f)}}}}(),m=function(){var c=[{key:"LOGIN",
pattern:/^\/login.*/i},{key:"J-DASH",pattern:/^\/secure\/dashboard\.jspa.*/i},{key:"J-ISSUE",pattern:/^\/browse\/\w+\-\w+.*/i},{key:"J-NAV",pattern:/^\/issues.*/i},{key:"J-RAPID",pattern:/secure\/rapidboard\.jspa/i},{key:"SD-AGENT",pattern:/^(\/\w+)?\/servicedesk\/agent\/.*/i},{key:"SD-CUSTOMER",pattern:/^(\/\w+)?\/servicedesk\/customer\/.*/i},{key:"C-DASH",pattern:/^\/wiki(\/)?(\?.*|#.*)?$/i},{key:"C-DASH",pattern:/^\/wiki\/dashboard\.action.*$/i},{key:"C-SPACE",pattern:/^\/wiki\/display\/\w+(\?.*|#.*)?$/i},
{key:"C-PAGE",pattern:/^\/wiki\/display\/\w+\/.*/i},{key:"C-PAGE",pattern:/^\/wiki\/pages\/viewpage\.action.*/i},{key:"C-BLOG",pattern:/^\/wiki\/display\/~\w+\/\d+\/\d+\/\d+\/.*/i},{key:"C-EDITOR",pattern:/^\/wiki\/pages\/editpage\.action.*/i},{key:"C-CREATE",pattern:/^\/wiki\/pages\/createpage\.action.*/i}];return function(){for(var d=p(b.location.href).path,a=0;a<c.length;++a){var f=c[a];if(d.match(f.pattern))return f.key}return null}}();b.performance&&b.performance.timing&&h()})})();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-browser-metrics:legacy-browser-metrics', location = '/js/legacy/browser-metrics-events.js' */
(function(){(window.BrowserMetrics||{}).isEnabled()&&(window.ATL_PERF||(window.ATL_PERF={}),window.ATL_PERF.initEvents=function(b){function g(){return b.performance&&b.performance.now?b.performance.now():(new Date).getTime()}var f={};return{start:function(a){f[a===Object(a)?a.eventName+"."+a.eventType:a]=g()},end:function(a,e){var c=a===Object(a)?a.eventName+"."+a.eventType:a;if(!f[c])throw"Error logging browser metrics event end: no start event for key '"+c+"'";var d=g()-f[c];f[c]=null;c=a===Object(a)?
a.eventName:a;a=a===Object(a)?a.eventType:"";e="browser.metrics.e."+c+(e?"."+e:"");d={version:5,value:12E3<d?"x":Math.ceil(d/100),rawValue:Math.round(100*d)/100,eventType:a};b.AJS.Analytics?b.AJS.Analytics.triggerPrivacyPolicySafeEvent(e,d):b.AJS.trigger("analyticsEvent",{name:e,data:d})}}})})();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-browser-metrics:legacy-browser-metrics', location = '/js/legacy/browser-metrics-init.js' */
(function(){(window.BrowserMetrics||{}).isEnabled()&&(.1>Math.random()&&window.ATL_PERF&&window.ATL_PERF.initPageLoad&&window.ATL_PERF.initPageLoad(window),window.ATL_PERF&&window.ATL_PERF.initEvents&&(window.BrowserMetrics=window.ATL_PERF.initEvents(window)))})();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:rotp-menu', location = 'appswitcher/appswitcher.soy' */
// This file was automatically generated from appswitcher.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace navlinks.templates.appswitcher.
 */

if (typeof navlinks == 'undefined') { var navlinks = {}; }
if (typeof navlinks.templates == 'undefined') { navlinks.templates = {}; }
if (typeof navlinks.templates.appswitcher == 'undefined') { navlinks.templates.appswitcher = {}; }


navlinks.templates.appswitcher.switcher = function(opt_data, opt_ignored) {
  return '' + ((true) ? navlinks.templates.appswitcher_old.switcher(opt_data) : '');
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher.switcher.soyTemplateName = 'navlinks.templates.appswitcher.switcher';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:rotp-menu', location = 'appswitcher/appswitcher_old.js' */
var APPSWITCHER_TRIGGER_CLICK="appswitcher.trigger.click",APPSWITCHER_DROPDOWN_SHOW="appswitcher.dropdown.show",APPSWITCHER_DROPDOWN_DISPLAY_ERROR="appswitcher.dropdown.display.error",APPSWITCHER_APP_LINK_CLICK="appswitcher.app.link.click",APPSWITCHER_CONFIGURE_LINK_CLICK="appswitcher.configure.link.click";
(function(a,g){g.AppSwitcher=function(e){var h=AJS.contextPath()+"/plugins/servlet/customize-application-navigator",c=this;this.$dropdown=null;e=a.extend({dropdownContents:null},e);this.getLinks=function(){return a.ajax({url:AJS.contextPath()+"/rest/menu/latest/appswitcher",cache:!1,dataType:"json"}).done(this.updateDropdown).fail(this.showError)};this.getDropdown=function(){this.$dropdown||(this.$dropdown=a(e.dropdownContents),this.isUserAdmin=this.$dropdown.data("is-user-admin"));return this.$dropdown};
this.updateDropdown=function(b){a(function(){c.getDropdown().html(navlinks.templates.appswitcher_old.applications({apps:b,showAdminLink:c.isUserAdmin,adminLink:h}));c.bindAnalyticsHandlers()})};this.bindAnalyticsHandlers=function(){a(".app-switcher-trigger").on("click",function(){AJS.trigger("analyticsEvent",{name:APPSWITCHER_TRIGGER_CLICK})});a("#app-switcher").on("aui-dropdown2-show",function(){AJS.trigger("analyticsEvent",{name:APPSWITCHER_DROPDOWN_SHOW})});a("#app-switcher .nav-link").on("click",
function(){var b="custom",d=a(this).find("a").attr("href"),f=window.location.hostname;d&&-1<d.indexOf("bitbucket.org")?b="bitbucket-cloud":-1<d.indexOf(f+"/wiki")?b="confluence":-1<d.indexOf(f+"/build")?b="bamboo":-1<d.indexOf(f)&&(b="jira");AJS.trigger("analyticsEvent",{name:APPSWITCHER_APP_LINK_CLICK,data:{product:b}})});a(".nav-link-edit-wrapper").on("click",function(){AJS.trigger("analyticsEvent",{name:APPSWITCHER_CONFIGURE_LINK_CLICK})})};this.showError=function(){a(function(){AJS.trigger("analyticsEvent",
{name:APPSWITCHER_DROPDOWN_DISPLAY_ERROR});c.getDropdown().html(navlinks.templates.appswitcher_old.error()).off(".appswitcher").on("click.appswitcher",".app-switcher-retry",c.retryLoading.bind(c))})};this.retryLoading=function(b){this.getDropdown().html(navlinks.templates.appswitcher_old.loading());this.getLinks();b&&b.stopPropagation()};this.getLinks()};a(function(){!0===a("#app-switcher").data("is-switcher")&&new g.AppSwitcher({dropdownContents:"#app-switcher"})})})(jQuery,window.NL=window.NL||
{});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:rotp-menu', location = 'appswitcher/appswitcher_old.soy' */
// This file was automatically generated from appswitcher_old.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace navlinks.templates.appswitcher_old.
 */

if (typeof navlinks == 'undefined') { var navlinks = {}; }
if (typeof navlinks.templates == 'undefined') { navlinks.templates = {}; }
if (typeof navlinks.templates.appswitcher_old == 'undefined') { navlinks.templates.appswitcher_old = {}; }


navlinks.templates.appswitcher_old.applications = function(opt_data, opt_ignored) {
  return '' + navlinks.templates.appswitcher_old.applicationsSection({list: opt_data.apps, listClass: 'nav-links', showDescription: opt_data.showDescription}) + ((opt_data.custom) ? navlinks.templates.appswitcher_old.applicationsSection({list: opt_data.custom, showDescription: opt_data.showDescription}) : '') + ((opt_data.showAdminLink) ? navlinks.templates.appswitcher_old.adminSection(opt_data) : '');
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher_old.applications.soyTemplateName = 'navlinks.templates.appswitcher_old.applications';
}


navlinks.templates.appswitcher_old.applicationsSection = function(opt_data, opt_ignored) {
  var output = '';
  if (opt_data.list.length > 0) {
    var param19 = '<ul' + ((opt_data.listClass) ? ' class="' + soy.$$escapeHtml(opt_data.listClass) + '"' : '') + '>';
    var linkList27 = opt_data.list;
    var linkListLen27 = linkList27.length;
    for (var linkIndex27 = 0; linkIndex27 < linkListLen27; linkIndex27++) {
      var linkData27 = linkList27[linkIndex27];
      param19 += navlinks.templates.appswitcher_old.applicationsItem(soy.$$augmentMap(linkData27, {showDescription: opt_data.showDescription}));
    }
    param19 += '</ul>';
    output += aui.dropdown2.section({content: param19});
  }
  return output;
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher_old.applicationsSection.soyTemplateName = 'navlinks.templates.appswitcher_old.applicationsSection';
}


navlinks.templates.appswitcher_old.applicationsItem = function(opt_data, opt_ignored) {
  return '<li class="nav-link' + ((opt_data.self) ? ' nav-link-local' : '') + '"><a href="' + soy.$$escapeHtml(opt_data.link) + '" class="aui-dropdown2-radio ' + ((opt_data.self) ? 'aui-dropdown2-checked' : '') + '" title="' + soy.$$escapeHtml(opt_data.link) + '"><span class="nav-link-label">' + soy.$$escapeHtml(opt_data.label) + '</span>' + ((opt_data.showDescription && opt_data.description) ? '<span class="nav-link-description">' + soy.$$escapeHtml(opt_data.description) + '</span>' : '') + '</a></li>';
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher_old.applicationsItem.soyTemplateName = 'navlinks.templates.appswitcher_old.applicationsItem';
}


navlinks.templates.appswitcher_old.adminSection = function(opt_data, opt_ignored) {
  return '' + aui.dropdown2.section({content: '<ul class="nav-links"><li><a class="nav-link-edit-wrapper" href="' + soy.$$escapeHtml(opt_data.adminLink) + '"><span class="nav-link-edit">' + soy.$$filterNoAutoescape('Configure\x26hellip;') + '</span></a></li></ul>'});
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher_old.adminSection.soyTemplateName = 'navlinks.templates.appswitcher_old.adminSection';
}


navlinks.templates.appswitcher_old.error = function(opt_data, opt_ignored) {
  return '<div class="app-switcher-error">' + soy.$$filterNoAutoescape('Something went wrong, please \x3cspan class\x3d\x22app-switcher-retry\x22\x3etry again\x3c/span\x3e.') + '</div>';
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher_old.error.soyTemplateName = 'navlinks.templates.appswitcher_old.error';
}


navlinks.templates.appswitcher_old.loading = function(opt_data, opt_ignored) {
  return '<div class="app-switcher-loading">' + soy.$$filterNoAutoescape('Loading\x26hellip;') + '</div>';
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher_old.loading.soyTemplateName = 'navlinks.templates.appswitcher_old.loading';
}


navlinks.templates.appswitcher_old.trigger = function(opt_data, opt_ignored) {
  return '<span class="aui-icon aui-icon-small aui-iconfont-appswitcher">' + soy.$$escapeHtml('Linked Applications') + '</span>';
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher_old.trigger.soyTemplateName = 'navlinks.templates.appswitcher_old.trigger';
}


navlinks.templates.appswitcher_old.switcher = function(opt_data, opt_ignored) {
  var output = '';
  var loadingContent__soy79 = '' + navlinks.templates.appswitcher_old.loading(null);
  var triggerContent__soy81 = '' + navlinks.templates.appswitcher_old.trigger(null);
  output += aui.dropdown2.dropdown2({menu: {id: 'app-switcher', content: loadingContent__soy79, extraClasses: 'aui-style-default', extraAttributes: {'data-is-user-admin': false, 'data-is-switcher': 'true'}}, trigger: {tagName: 'button', showIcon: false, content: triggerContent__soy81, extraClasses: 'app-switcher-trigger aui-dropdown2-trigger-arrowless', extraAttributes: {href: '#app-switcher'}}});
  return output;
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher_old.switcher.soyTemplateName = 'navlinks.templates.appswitcher_old.switcher';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-frontend:common-header-resources', location = '/includes/js/header-user-menu.js' */
define("confluence/header-user-menu",["jquery","confluence/meta","underscore"],function(a,b,c){function d(){var e=b.get("current-user-avatar-uri-reference");a("#user-menu-link").find(".aui-avatar-inner img").attr("src",e)}return function(){c.defer(d)}});require("confluence/module-exporter").safeRequire("confluence/header-user-menu",function(a){require("ajs").toInit(a)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-frontend:general-analytics-bindings', location = '/includes/js/analytics-bindings.js' */
define("confluence/analytics-bindings",["jquery","confluence/analytics-support"],function(a,d){return function(){function e(b,c){a(b).on("click",".view-historical-version-trigger",function(){d.publish("confluence.page.view-historical.from-"+(c||"unknown"))})}function f(b,c){a(b).on("click",".restore-historical-version-trigger",function(){d.publish("confluence.page.restore-historical.from-"+(c||"unknown"))})}function g(b,c){a("#header .aui-header-secondary "+b).on("click",function(){var h=a(this).hasClass("aui-dropdown2-active")?
"expanded":"collapsed";d.publish("confluence.header.dropdown."+c,{state:h})})}e("#page-history-warning","navigation");e("#page-history-container","history");e(".diff-menu","diff");f("#page-history-warning","navigation");f("#page-history-container","history");g("#admin-menu-link","administration");g("#user-menu-link","profile")}});require("confluence/module-exporter").safeRequire("confluence/analytics-bindings",function(a){require("ajs").toInit(a)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-frontend:split_vendors~benefits~color-scheme~copy-heading-link~date-time~skip-links~table-styles-editor~theme-switc~8335ef94', location = 'vendors~benefits~color-scheme~copy-heading-link~date-time~skip-links~table-styles-editor~theme-switc~8335ef94.js' */
(window.atlassianWebpackJsonpe19a4f58490c3d96a3072d1e47cd0e73=window.atlassianWebpackJsonpe19a4f58490c3d96a3072d1e47cd0e73||[]).push([["vendors~benefits~color-scheme~copy-heading-link~date-time~skip-links~table-styles-editor~theme-switc~8335ef94"],{6:function(e,t,n){!function(e,t,a){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=r(t),l=r(a);const i=function(){try{return n(297)}catch(e){return null}}();function c(e,...n){let a=0;const r={};n=n.map(e=>{if(t.isValidElement(e)){const t=`!PLACEHOLDER_${++a}!`;return r[t]=e,t}return e});const i=l.default(e,...n).split(/(!PLACEHOLDER_\d+!)/g);if(1===i.length)return i.join("");const c=i.map((e,n)=>o.default.createElement(t.Fragment,{key:n},n%2?r[e]:e));return o.default.createElement(t.Fragment,null,c)}const s={getText:(...e)=>{if(!i)return console.warn('Call to "getText" function was not replaced with either raw translation or call to "format" function. Have you included the "jsI18n" transformation in Web Resource Manager?'),c(...e);let t;try{WRM.I18n.format=c,t=i.getText.apply(null,e)}finally{WRM.I18n.format=l.default}return t}};e.I18n=s,e.format=c,Object.defineProperty(e,"__esModule",{value:!0})}(t,n(0),n(296))}}]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-super-batch:split_vendors~react~react-dom~react-dom-client~react-dom-server', location = 'vendors~react~react-dom~react-dom-client~react-dom-server.js' */
(window.atlassianWebpackJsonp72e8e6db7d5e073657900987d0037a3a=window.atlassianWebpackJsonp72e8e6db7d5e073657900987d0037a3a||[]).push([[4],{150:function(e,t,r){"use strict";
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=Symbol.for("react.element"),o=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),f=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),d=Symbol.iterator;var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,b={};function m(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||_}function v(){}function S(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||_}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=m.prototype;var w=S.prototype=new v;w.constructor=S,h(w,m.prototype),w.isPureReactComponent=!0;var E=Array.isArray,k=Object.prototype.hasOwnProperty,$={current:null},R={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,r){var o,u={},a=null,c=null;if(null!=t)for(o in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(a=""+t.key),t)k.call(t,o)&&!R.hasOwnProperty(o)&&(u[o]=t[o]);var i=arguments.length-2;if(1===i)u.children=r;else if(1<i){for(var f=Array(i),s=0;s<i;s++)f[s]=arguments[s+2];u.children=f}if(e&&e.defaultProps)for(o in i=e.defaultProps)void 0===u[o]&&(u[o]=i[o]);return{$$typeof:n,type:e,key:a,ref:c,props:u,_owner:$.current}}function g(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var j=/\/+/g;function O(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function x(e,t,r,u,a){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var i=!1;if(null===e)i=!0;else switch(c){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case n:case o:i=!0}}if(i)return a=a(i=e),e=""===u?"."+O(i,0):u,E(a)?(r="",null!=e&&(r=e.replace(j,"$&/")+"/"),x(a,t,r,"",(function(e){return e}))):null!=a&&(g(a)&&(a=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,r+(!a.key||i&&i.key===a.key?"":(""+a.key).replace(j,"$&/")+"/")+e)),t.push(a)),1;if(i=0,u=""===u?".":u+":",E(e))for(var f=0;f<e.length;f++){var s=u+O(c=e[f],f);i+=x(c,t,r,s,a)}else if("function"==typeof(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e)))for(e=s.call(e),f=0;!(c=e.next()).done;)i+=x(c=c.value,t,r,s=u+O(c,f++),a);else if("object"===c)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function P(e,t,r){if(null==e)return e;var n=[],o=0;return x(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function I(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var T={current:null},V={transition:null},A={ReactCurrentDispatcher:T,ReactCurrentBatchConfig:V,ReactCurrentOwner:$};t.Children={map:P,forEach:function(e,t,r){P(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return P(e,(function(){t++})),t},toArray:function(e){return P(e,(function(e){return e}))||[]},only:function(e){if(!g(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=m,t.Fragment=u,t.Profiler=c,t.PureComponent=S,t.StrictMode=a,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=h({},e.props),u=e.key,a=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,c=$.current),void 0!==t.key&&(u=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(f in t)k.call(t,f)&&!R.hasOwnProperty(f)&&(o[f]=void 0===t[f]&&void 0!==i?i[f]:t[f])}var f=arguments.length-2;if(1===f)o.children=r;else if(1<f){i=Array(f);for(var s=0;s<f;s++)i[s]=arguments[s+2];o.children=i}return{$$typeof:n,type:e.type,key:u,ref:a,props:o,_owner:c}},t.createContext=function(e){return(e={$$typeof:f,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=g,t.lazy=function(e){return{$$typeof:y,_payload:{_status:-1,_result:e},_init:I}},t.memo=function(e,t){return{$$typeof:p,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=V.transition;V.transition={};try{e()}finally{V.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return T.current.useCallback(e,t)},t.useContext=function(e){return T.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return T.current.useDeferredValue(e)},t.useEffect=function(e,t){return T.current.useEffect(e,t)},t.useId=function(){return T.current.useId()},t.useImperativeHandle=function(e,t,r){return T.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return T.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return T.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return T.current.useMemo(e,t)},t.useReducer=function(e,t,r){return T.current.useReducer(e,t,r)},t.useRef=function(e){return T.current.useRef(e)},t.useState=function(e){return T.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return T.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return T.current.useTransition()},t.version="18.1.0"},20:function(e,t,r){"use strict";e.exports=r(150)}}]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-super-batch:split_react', location = 'react.js' */
(window.atlassianWebpackJsonp72e8e6db7d5e073657900987d0037a3a=window.atlassianWebpackJsonp72e8e6db7d5e073657900987d0037a3a||[]).push([[10],{149:function(a,e,d){"use strict";d.r(e);var n=d(20),s=d.n(n),t=d(2);Object(t.a)("react",()=>({default:s.a,...n}))}},[[149,0,2,4,1]]]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-frontend:split_benefits~color-scheme~copy-heading-link~date-time~skip-links~table-styles-editor~theme-switcher~them~0355ead0', location = 'benefits~color-scheme~copy-heading-link~date-time~skip-links~table-styles-editor~theme-switcher~them~0355ead0.js' */
(window.atlassianWebpackJsonpe19a4f58490c3d96a3072d1e47cd0e73=window.atlassianWebpackJsonpe19a4f58490c3d96a3072d1e47cd0e73||[]).push([["benefits~color-scheme~copy-heading-link~date-time~skip-links~table-styles-editor~theme-switcher~them~0355ead0"],[function(e,a){e.exports=require("react")}]]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-frontend:split_benefits~color-scheme~copy-heading-link~date-time~skip-links~table-styles-editor~theme-switcher-loader', location = 'benefits~color-scheme~copy-heading-link~date-time~skip-links~table-styles-editor~theme-switcher-loader.js' */
(window.atlassianWebpackJsonpe19a4f58490c3d96a3072d1e47cd0e73=window.atlassianWebpackJsonpe19a4f58490c3d96a3072d1e47cd0e73||[]).push([["benefits~color-scheme~copy-heading-link~date-time~skip-links~table-styles-editor~theme-switcher-loader"],{296:function(e,i){e.exports=WRM.format},297:function(e,i){if(void 0===require("wrm/i18n")){var n=new Error("Cannot find module 'require('wrm/i18n')'");throw n.code="MODULE_NOT_FOUND",n}e.exports=require("wrm/i18n")}}]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-frontend:split_skip-links', location = 'skip-links.js' */
(window.atlassianWebpackJsonpe19a4f58490c3d96a3072d1e47cd0e73=window.atlassianWebpackJsonpe19a4f58490c3d96a3072d1e47cd0e73||[]).push([["skip-links"],{464:function(e,i,n){"use strict";n.r(i);var t=n(6),s=n(43),o=n.n(s),r=n(23),a=n.n(r),l=n(35);Object(l.a)("confluence/skip-links-loader",()=>{const e={rerenderSkipLinks(){e._removeExistingSkipLinks(),e._reloadAutoMappedElements();const i=r.document.getElementById("header");i.dispatchEvent(new CustomEvent("confluence.skip-links-loader.rerender-skip-links",{bubbles:!0}));const n=[],t=e._documentContainsCustomTabIndexes();if([...e._skipLinks,...e._skipLinksAutoMapped].forEach(i=>{const s=e._renderSkipLink(i,t);s&&(n.length||(s.title=s.textContent),n.push(s))}),n.length){const e=r.document.createElement("ul");e.style.listStyle="none",e.className="skip-links-list",i.insertBefore(e,i.firstChild),n.forEach(i=>{const n=r.document.createElement("li");n.append(i),e.append(n)})}},addSkipLink:i=>(i.href?1:0)+(i.skipToCssPath?1:0)+(i.onclick?1:0)>1?(o.a.error("skip-links-loader: use one of the properties: href/skipToCssPath/onclick. value:",i),!1):(r.document.dispatchEvent(new CustomEvent("confluence.skip-links-loader.add-skip-link",{detail:i})),e._skipLinks.push(i),!0),removeSkipLink(i){r.document.dispatchEvent(new CustomEvent("confluence.skip-links-loader.remove-skip-link",{detail:i})),e._skipLinks=e._skipLinks.filter(e=>e!==i)},_skipLinks:[],_skipLinksAutoMapped:[],_isVisible:e=>e.offsetWidth>0&&e.offsetHeight>0,_verifyOnlyIfExists(i){if(void 0===i.onlyIfExists)return!0;if("string"!=typeof i.onlyIfExists)return o.a.error('skip-links-loader: "onlyIfExists" only supports undefined and a string css path. value:',i.onlyIfExists,i),!1;const n=r.document.querySelector(i.onlyIfExists);return!!n&&(!!i.ignoreVisibility||e._isVisible(n))},_renderSkipLink(i,n){const t=r.document.createElement("a");if(t.className="aui-skip-link",t.setAttribute("aui-skip-link-auto-generated",""),n&&t.setAttribute("tabindex","1"),t.textContent=i.content,e._verifyOnlyIfExists(i))return i.href&&(t.href=i.href,t.onclick=e=>{e.preventDefault();const n=r.document.querySelector(i.href);n?(n.focus(),r.document.activeElement===n||n.hasAttribute("tabindex")||(n.setAttribute("tabindex","-1"),n.focus())):o.a.error(`skip-links-loader: no element found based on css "${i.href}"`)}),(i.skipToCssPath||i.el)&&(t.href="",t.onclick=e=>{e.preventDefault();const n=i.el||r.document.querySelector(i.skipToCssPath);n?(n.focus(),r.document.activeElement===n||n.hasAttribute("tabindex")||(n.setAttribute("tabindex","0"),n.focus(),r.document.activeElement!==n&&o.a.error(`skip-links-loader: can\`t focus element based on css "${i.skipToCssPath}"`),n.removeAttribute("tabindex"))):o.a.error(`skip-links-loader: no element found based on css "${i.skipToCssPath}"`)}),i.onclick&&(t.href="",t.onclick=e=>{e.preventDefault(),i.onclick()}),t},_removeExistingSkipLinks(){[...r.document.querySelectorAll("#header .skip-links-list")].forEach(e=>e.parentNode.removeChild(e))},_reloadAutoMappedElements(){e._skipLinksAutoMapped=[...r.document.querySelectorAll("[aui-skip-link-target]")].filter(i=>i.hasAttribute("aui-skip-link-ignore-visibility")||e._isVisible(i)).map(e=>({content:t.format("Skip to {0}",e.getAttribute("aui-skip-link-target")),el:e}))},_documentContainsCustomTabIndexes:()=>[...r.document.querySelectorAll("[tabindex]")].some(e=>parseInt(e.getAttribute("tabindex"),10)>0)};return e});r.document.addEventListener("DOMContentLoaded",()=>{a.a.require(["confluence/skip-links-loader","ajs"],(e,i)=>{(e=>{const i={sidebar:"sidebar",mainContent:"main content",breadcrumbs:"breadcrumbs",search:"search"};t.format("Skip to {0}",i.sidebar),e.addSkipLink({onlyIfExists:"#nav-sidebar",href:"#nav-sidebar",ignoreVisibility:!0,content:t.format("Skip to {0}",i.sidebar)}),e.addSkipLink({onlyIfExists:".ia-splitter .ia-splitter-left .acs-side-bar .acs-side-bar-space-info",skipToCssPath:".ia-splitter .ia-splitter-left .acs-side-bar .acs-side-bar-space-info a",ignoreVisibility:!0,content:t.format("Skip to {0}",i.sidebar)}),e.addSkipLink({onlyIfExists:"#main",href:"#main",ignoreVisibility:!0,content:t.format("Skip to {0}",i.mainContent)}),e.addSkipLink({onlyIfExists:"#breadcrumbs > li",href:"#breadcrumbs",ignoreVisibility:!0,content:t.format("Skip to {0}",i.breadcrumbs)}),e.addSkipLink({onlyIfExists:"#quick-search-query",href:"#quick-search-query",ignoreVisibility:!0,content:t.format("Skip to {0}",i.search)})})(e),e.rerenderSkipLinks(),i.bind("rte-ready rte-quick-edit-ready",()=>e.rerenderSkipLinks())})})}},[[464,"manifest","vendors~backbone~color-scheme~copy-heading-link~date-time~deprecated-dialog~form-state-control~inlin~b2589942","vendors~backbone~copy-heading-link~date-time~deprecated-dialog~form-state-control~inline-dialog~jque~28f2adbc","vendors~benefits~color-scheme~copy-heading-link~date-time~skip-links~table-styles-editor~theme-switc~8335ef94","copy-heading-link~date-time~deprecated-dialog~form-state-control~inline-dialog~locale~skip-links~tab~827d69cb","benefits~color-scheme~copy-heading-link~date-time~skip-links~table-styles-editor~theme-switcher~them~0355ead0","benefits~color-scheme~copy-heading-link~date-time~skip-links~table-styles-editor~theme-switcher-loader","deprecated-dialog~inline-dialog~skip-links"]]]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-frontend:split_vendors~color-scheme~render-benefits-modal~theme-switcher~theme-switcher-listener~theme-switcher-loader', location = 'vendors~color-scheme~render-benefits-modal~theme-switcher~theme-switcher-listener~theme-switcher-loader.js' */
(window.atlassianWebpackJsonpe19a4f58490c3d96a3072d1e47cd0e73=window.atlassianWebpackJsonpe19a4f58490c3d96a3072d1e47cd0e73||[]).push([["vendors~color-scheme~render-benefits-modal~theme-switcher~theme-switcher-listener~theme-switcher-loader"],{1:function(e,t,n){"use strict";n.d(t,"a",(function(){return N})),n.d(t,"b",(function(){return C})),n.d(t,"c",(function(){return F})),n.d(t,"d",(function(){return A})),n.d(t,"e",(function(){return P}));var r=n(0),o=n(67),a=(n(25),n(59),n(81),n(36)),c=n(130),u=n(131),i=n(95),s=/[A-Z]|^ms/g,l=/_EMO_([^_]+?)_([^]*?)_EMO_/g,f=function(e){return 45===e.charCodeAt(1)},d=function(e){return null!=e&&"boolean"!=typeof e},p=Object(i.a)((function(e){return f(e)?e:e.replace(s,"-$&").toLowerCase()})),v=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(l,(function(e,t,n){return y={name:t,styles:n,next:y},t}))}return 1===u.a[e]||f(e)||"number"!=typeof t||0===t?t:t+"px"};function h(e,t,n){if(null==n)return"";if(void 0!==n.__emotion_styles)return n;switch(typeof n){case"boolean":return"";case"object":if(1===n.anim)return y={name:n.name,styles:n.styles,next:y},n.name;if(void 0!==n.styles){var r=n.next;if(void 0!==r)for(;void 0!==r;)y={name:r.name,styles:r.styles,next:y},r=r.next;return n.styles+";"}return function(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=h(e,t,n[o])+";";else for(var a in n){var c=n[a];if("object"!=typeof c)null!=t&&void 0!==t[c]?r+=a+"{"+t[c]+"}":d(c)&&(r+=p(a)+":"+v(a,c)+";");else if(!Array.isArray(c)||"string"!=typeof c[0]||null!=t&&void 0!==t[c[0]]){var u=h(e,t,c);switch(a){case"animation":case"animationName":r+=p(a)+":"+u+";";break;default:r+=a+"{"+u+"}"}}else for(var i=0;i<c.length;i++)d(c[i])&&(r+=p(a)+":"+v(a,c[i])+";")}return r}(e,t,n);case"function":if(void 0!==e){var o=y,a=n(e);return y=o,h(e,t,a)}break;case"string":}if(null==t)return n;var c=t[n];return void 0!==c?c:n}var y,b=/label:\s*([^\s;\n{]+)\s*(;|$)/g;var m=function(e,t,n){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var r=!0,o="";y=void 0;var a=e[0];null==a||void 0===a.raw?(r=!1,o+=h(n,t,a)):o+=a[0];for(var u=1;u<e.length;u++)o+=h(n,t,e[u]),r&&(o+=a[u]);b.lastIndex=0;for(var i,s="";null!==(i=b.exec(o));)s+="-"+i[1];return{name:Object(c.a)(o)+s,styles:o,next:y}},g=n(44),x={}.hasOwnProperty,O=r.createContext("undefined"!=typeof HTMLElement?Object(o.a)({key:"css"}):null);O.Provider;var w=function(e){return Object(r.forwardRef)((function(t,n){var o=Object(r.useContext)(O);return e(t,o,n)}))};var _=r.createContext({});var k="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",j=function(e,t){var n={};for(var r in t)x.call(t,r)&&(n[r]=t[r]);return n[k]=e,n},E=function(e){var t=e.cache,n=e.serialized,r=e.isStringTag;return Object(a.c)(t,n,r),Object(g.a)((function(){return Object(a.b)(t,n,r)})),null};var S=w((function(e,t,n){var o=e.css;"string"==typeof o&&void 0!==t.registered[o]&&(o=t.registered[o]);var c=e[k],u=[o],i="";"string"==typeof e.className?i=Object(a.a)(t.registered,u,e.className):null!=e.className&&(i=e.className+" ");var s=m(u,void 0,r.useContext(_));i+=t.key+"-"+s.name;var l={};for(var f in e)x.call(e,f)&&"css"!==f&&f!==k&&(l[f]=e[f]);return l.ref=n,l.className=i,r.createElement(r.Fragment,null,r.createElement(E,{cache:t,serialized:s,isStringTag:"string"==typeof c}),r.createElement(c,l))})),A=(n(14),function(e,t){var n=arguments;if(null==t||!x.call(t,"css"))return r.createElement.apply(void 0,n);var o=n.length,a=new Array(o);a[0]=S,a[1]=j(e,t);for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}),C=w((function(e,t){var n=e.styles,o=m([n],void 0,r.useContext(_)),c=r.useRef();return Object(g.b)((function(){var e=t.key+"-global",n=new t.sheet.constructor({key:e,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),r=!1,a=document.querySelector('style[data-emotion="'+e+" "+o.name+'"]');return t.sheet.tags.length&&(n.before=t.sheet.tags[0]),null!==a&&(r=!0,a.setAttribute("data-emotion",e),n.hydrate([a])),c.current=[n,r],function(){n.flush()}}),[t]),Object(g.b)((function(){var e=c.current,n=e[0];if(e[1])e[1]=!1;else{if(void 0!==o.next&&Object(a.b)(t,o.next,!0),n.tags.length){var r=n.tags[n.tags.length-1].nextElementSibling;n.before=r,n.flush()}t.insert("",o,n,!1)}}),[t,o.name]),null}));function F(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return m(t)}var P=function(){var e=F.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},T=function e(t){for(var n=t.length,r=0,o="";r<n;r++){var a=t[r];if(null!=a){var c=void 0;switch(typeof a){case"boolean":break;case"object":if(Array.isArray(a))c=e(a);else for(var u in c="",a)a[u]&&u&&(c&&(c+=" "),c+=u);break;default:c=a}c&&(o&&(o+=" "),o+=c)}}return o};function $(e,t,n){var r=[],o=Object(a.a)(e,r,n);return r.length<2?n:o+t(r)}var M=function(e){var t=e.cache,n=e.serializedArr;return Object(g.a)((function(){for(var e=0;e<n.length;e++)Object(a.b)(t,n[e],!1)})),null},N=w((function(e,t){var n=[],o=function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];var c=m(r,t.registered);return n.push(c),Object(a.c)(t,c,!1),t.key+"-"+c.name},c={css:o,cx:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return $(t.registered,o,T(n))},theme:r.useContext(_)},u=e.children(c);return!0,r.createElement(r.Fragment,null,r.createElement(M,{cache:t,serializedArr:n}),u)}))},12:function(e,t,n){var r=n(361),o=n(362),a=n(212),c=n(363);e.exports=function(e,t){return r(e)||o(e,t)||a(e,t)||c()},e.exports.__esModule=!0,e.exports.default=e.exports},130:function(e,t,n){"use strict";function r(e){for(var t,n=0,r=0,o=e.length;o>=4;++r,o-=4)t=1540483477*(65535&(t=255&e.charCodeAt(r)|(255&e.charCodeAt(++r))<<8|(255&e.charCodeAt(++r))<<16|(255&e.charCodeAt(++r))<<24))+(59797*(t>>>16)<<16),n=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&n)+(59797*(n>>>16)<<16);switch(o){case 3:n^=(255&e.charCodeAt(r+2))<<16;case 2:n^=(255&e.charCodeAt(r+1))<<8;case 1:n=1540483477*(65535&(n^=255&e.charCodeAt(r)))+(59797*(n>>>16)<<16)}return(((n=1540483477*(65535&(n^=n>>>13))+(59797*(n>>>16)<<16))^n>>>15)>>>0).toString(36)}n.d(t,"a",(function(){return r}))},131:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1}},14:function(e,t){function n(){return e.exports=n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,n.apply(null,arguments)}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports},147:function(e,t,n){"use strict";(function(e){n.d(t,"b",(function(){return f})),n.d(t,"a",(function(){return d}));var r=n(256),o="__PLATFORM_FEATURE_FLAGS__",a=void 0!==e&&void 0!==e.env,c=!!a&&"true"===e.env.ENABLE_PLATFORM_FF,u=!!a&&"true"===e.env.STORYBOOK_ENABLE_PLATFORM_FF,i=c||u,s={earlyResolvedFlags:new Map,booleanResolver:function(e){return!1}},l="undefined"!=typeof window?window:globalThis;function f(e){l[o].booleanResolver=e}function d(e){if(i)return Object(r.a)('[%s]: The feature flags were enabled while running tests. The flag "%s" will be always enabled.',"@atlaskit/platform-feature-flags",e),!0;try{var t,n=null===(t=l[o])||void 0===t?void 0:t.booleanResolver(e);return"boolean"!=typeof n?(console.warn("".concat(e," resolved to a non-boolean value, returning false for safety")),!1):n}catch(e){return!1}}l[o]=l[o]||s}).call(this,n(37))},15:function(e,t,n){"use strict";function r(){}n.d(t,"a",(function(){return r}))},16:function(e,t,n){var r=n(372);e.exports=function(e,t){if(null==e)return{};var n,o,a=r(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],-1===t.indexOf(n)&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a},e.exports.__esModule=!0,e.exports.default=e.exports},17:function(e,t,n){var r=n(374),o=n(375),a=n(212),c=n(376);e.exports=function(e){return r(e)||o(e)||a(e)||c()},e.exports.__esModule=!0,e.exports.default=e.exports},181:function(e,t,n){"use strict";(function(e){n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return l}));var r=n(255),o=void 0!==e&&void 0!==e.env,a=!!o&&"true"===e.env.ENABLE_PLATFORM_FF,c=!!o&&"true"===e.env.STORYBOOK_ENABLE_PLATFORM_FF,u=a||c,i=function(){return!1};function s(e){i=e}function l(e){if(u)return Object(r.a)('[%s]: The feature flags were enabled while running tests. The flag "%s" will be always enabled.',"@atlaskit/platform-feature-flags",e),!0;try{var t=i(e);return"boolean"!=typeof t?(console.warn("".concat(e," resolved to a non-boolean value, returning false for safety")),!1):t}catch(e){return!1}}}).call(this,n(37))},184:function(e,t,n){"use strict";n.d(t,"a",(function(){return M}));var r=n(5),o=n.n(r),a=n(0),c=n(52),u=n(17),i=n.n(u),s=n(28),l=n.n(s),f=n(29),d=n.n(f),p=n(27),v=n.n(p),h=n(53),y=n.n(h),b=n(50),m=n.n(b),g=n(51),x=n.n(g),O=n(32),w=n.n(O),_=n(20),k=n.n(_);function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var S=function(){function e(t){var n=this;l()(this,e),o()(this,"_isAnalyticsEvent",!0),o()(this,"clone",(function(){return new e({payload:E({},n.payload)})})),this.payload=t.payload}return d()(e,[{key:"update",value:function(e){return"function"==typeof e&&(this.payload=e(this.payload)),"object"===k()(e)&&(this.payload=E(E({},this.payload),e)),this}}]),e}();function A(e){var t=function(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return function(){return!!e}()}();return function(){var n,r=w()(e);if(t){var o=w()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return x()(this,n)}}var C=function(e){m()(n,e);var t=A(n);function n(e){var r;return l()(this,n),r=t.call(this,e),o()(v()(r),"_isUIAnalyticsEvent",!0),o()(v()(r),"clone",(function(){return r.hasFired?null:new n({context:i()(r.context),handlers:i()(r.handlers),payload:JSON.parse(JSON.stringify(r.payload))})})),o()(v()(r),"fire",(function(e){r.hasFired||(r.handlers.forEach((function(t){return t(v()(r),e)})),r.hasFired=!0)})),r.context=e.context||[],r.handlers=e.handlers||[],r.hasFired=!1,r}return d()(n,[{key:"update",value:function(e){return this.hasFired?this:y()(w()(n.prototype),"update",this).call(this,e)}}]),n}(S),F=n(55);function P(){var e=Object(a.useContext)(F.a);return{createAnalyticsEvent:Object(c.a)((function(t){return new C({context:e.getAtlaskitAnalyticsContext(),handlers:e.getAtlaskitAnalyticsEventHandlers(),payload:t})}),[e])}}var T=function(e){var t=Object(a.useRef)(e);return t.current=e,t};function $(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function M(e){var t=e.fn,n=e.action,r=e.componentName,c=e.actionSubject,u=e.packageName,i=e.packageVersion,s=e.analyticsData,l=P().createAnalyticsEvent,f=T(s),d=T(t);return Object(a.useCallback)((function(e){var t=l({action:n,actionSubject:c||r,attributes:{componentName:r,packageName:u,packageVersion:i}}),a=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?$(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({componentName:r,packageName:u,packageVersion:i},f.current);t.context.push(a);var s=t.clone();s&&s.fire("atlaskit"),d.current(e,t)}),[n,r,c,u,i,l,f,d])}},19:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(181);function o(e){return Object(r.a)(e)}},2:function(e,t,n){"use strict";n.d(t,"Q",(function(){return c})),n.d(t,"R",(function(){return u})),n.d(t,"S",(function(){return i})),n.d(t,"T",(function(){return s})),n.d(t,"U",(function(){return l})),n.d(t,"V",(function(){return f})),n.d(t,"e",(function(){return d})),n.d(t,"g",(function(){return p})),n.d(t,"a",(function(){return v})),n.d(t,"b",(function(){return h})),n.d(t,"c",(function(){return y})),n.d(t,"d",(function(){return b})),n.d(t,"f",(function(){return m})),n.d(t,"P",(function(){return g})),n.d(t,"L",(function(){return x})),n.d(t,"M",(function(){return O})),n.d(t,"N",(function(){return w})),n.d(t,"O",(function(){return _})),n.d(t,"q",(function(){return k})),n.d(t,"r",(function(){return j})),n.d(t,"u",(function(){return E})),n.d(t,"x",(function(){return S})),n.d(t,"A",(function(){return A})),n.d(t,"C",(function(){return C})),n.d(t,"G",(function(){return F})),n.d(t,"J",(function(){return P})),n.d(t,"s",(function(){return T})),n.d(t,"v",(function(){return $})),n.d(t,"y",(function(){return M})),n.d(t,"B",(function(){return N})),n.d(t,"D",(function(){return R})),n.d(t,"H",(function(){return D})),n.d(t,"I",(function(){return B})),n.d(t,"K",(function(){return I})),n.d(t,"w",(function(){return L})),n.d(t,"z",(function(){return z})),n.d(t,"E",(function(){return W})),n.d(t,"F",(function(){return G})),n.d(t,"t",(function(){return J})),n.d(t,"p",(function(){return V})),n.d(t,"m",(function(){return q})),n.d(t,"l",(function(){return H})),n.d(t,"k",(function(){return K})),n.d(t,"i",(function(){return U})),n.d(t,"o",(function(){return Y})),n.d(t,"n",(function(){return Q})),n.d(t,"j",(function(){return X})),n.d(t,"h",(function(){return Z})),n.d(t,"W",(function(){return ee})),n.d(t,"Y",(function(){return te})),n.d(t,"X",(function(){return ne}));var r=n(21);function o(e){if(e&&e.theme){if(r.a in e.theme)return e.theme[r.a];if("mode"in e.theme&&r.c.includes(e.theme.mode))return e.theme}return{mode:r.b}}function a(e,t){if("string"==typeof e)return n=e,r=t,function(e){var t=o(e);if(e&&e[n]&&r){var a=r[e[n]];if(a&&a[t.mode]){var c=a[t.mode];if(c)return c}}return""};var n,r,a=e;return function(e){var t=o(e);if(t.mode in a){var n=a[t.mode];if(n)return n}return""}}var c="#FF5630",u="#DE350B",i="#BF2600",s="#FFC400",l="#FFAB00",f="#FF991F",d="#DEEBFF",p="#B3D4FF",v="#4C9AFF",h="#2684FF",y="#0065FF",b="#0052CC",m="#0747A6",g="#C0B6F2",x="#998DD9",O="#8777D9",w="#5243AA",_="#403294",k="#FFFFFF",j="#FAFBFC",E="#F4F5F7",S="#EBECF0",A="#DFE1E6",C="#C1C7D0",F="#A5ADBA",P="#8993A4",T="#7A869A",$="#6B778C",M="#5E6C84",N="#505F79",R="#42526E",D="#253858",B="#172B4D",I="#091E42",L="rgba(9, 30, 66, 0.04)",z="rgba(9, 30, 66, 0.08)",W="rgba(9, 30, 66, 0.25)",G="rgba(9, 30, 66, 0.31)",J="rgba(9, 30, 66, 0.54)",V="#E6EDFA",q="#ABBBD6",H="#9FB0CC",K="#8C9CB8",U="#67758F",Y="#3B475C",Q="#313D52",X="#1B2638",Z="#0D1424",ee=(a({light:"var(--ds-surface, ".concat(k,")"),dark:"var(--ds-surface, ".concat(X,")")}),a({light:"var(--ds-background-selected, ".concat(d,")"),dark:"var(--ds-background-selected, ".concat(p,")")}),a({light:"var(--ds-background-neutral-hovered, ".concat(S,")"),dark:"var(--ds-background-neutral-hovered, ".concat(Y,")")}),a({light:"var(--ds-surface-overlay, ".concat(k,")"),dark:"var(--ds-surface-overlay, ".concat("#283447",")")}),a({light:"var(--ds-text, ".concat(I,")"),dark:"var(--ds-text, ".concat("#B8C7E0",")")}),a({light:"var(--ds-text, ".concat(B,")"),dark:"var(--ds-text, ".concat("#B8C7E0",")")}),a({light:"var(--ds-text-selected, ".concat(b,")"),dark:"var(--ds-text-selected, ".concat(b,")")}),a({light:"var(--ds-text-subtlest, ".concat($,")"),dark:"var(--ds-text-subtlest, ".concat(K,")")}),a({light:"var(--ds-text-subtlest, ".concat($,")"),dark:"var(--ds-text-subtlest, ".concat("#7988A3",")")}),a({light:"var(--ds-text, ".concat(B,")"),dark:"var(--ds-text, ".concat("#B8C7E0",")")})),te=a({light:"var(--ds-text-subtlest, ".concat($,")"),dark:"var(--ds-text-subtlest, ".concat(K,")")}),ne=(a({light:E,dark:"#283447"}),a({light:"var(--ds-link, ".concat(b,")"),dark:"var(--ds-link, ".concat(v,")")}),a({light:"var(--ds-link-pressed, ".concat(y,")"),dark:"var(--ds-link-pressed, ".concat(h,")")}),a({light:"var(--ds-link-pressed, ".concat(m,")"),dark:"var(--ds-link-pressed, ".concat(v,")")}),a({light:"var(--ds-border-focused, ".concat(h,")"),dark:"var(--ds-border-focused, ".concat(h,")")}),a({light:"var(--ds-background-brand-bold, ".concat(b,")"),dark:"var(--ds-background-brand-bold, ".concat(v,")")}),a({light:b,dark:v}),a({light:"#00B8D9",dark:"#00C7E6"}),a({light:"#6554C0",dark:x}),a({light:c,dark:c}),a({light:l,dark:l}),a({light:"#36B37E",dark:"#36B37E"}),function(){return"var(--ds-skeleton, ".concat(L,")")})},20:function(e,t){function n(t){return e.exports=n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,n(t)}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports},21:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return c})),n.d(t,"f",(function(){return u})),n.d(t,"e",(function(){return i})),n.d(t,"g",(function(){return s}));n(31),n(2);var r="__ATLASKIT_THEME__",o="light",a=["light","dark"],c=function(){return 3},u=function(){return 8},i=function(){return 14},s={card:function(){return 100},navigation:function(){return 200},dialog:function(){return 300},layer:function(){return 400},blanket:function(){return 500},modal:function(){return 510},flag:function(){return 600},spotlight:function(){return 700},tooltip:function(){return 9999}}},212:function(e,t,n){var r=n(213);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},213:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r},e.exports.__esModule=!0,e.exports.default=e.exports},215:function(e,t,n){var r=n(20).default,o=n(373);e.exports=function(e){var t=o(e,"string");return"symbol"==r(t)?t:t+""},e.exports.__esModule=!0,e.exports.default=e.exports},25:function(e,t,n){"use strict";function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}n.d(t,"a",(function(){return r}))},255:function(e,t,n){"use strict";var r,o,a,c,u;n.d(t,"a",(function(){return s}));var i=!(null!==(r=void 0!==(null===globalThis||void 0===globalThis||null===(o=globalThis.process)||void 0===o||null===(a=o.env)||void 0===a?void 0:a.JEST_WORKER_ID))&&void 0!==r&&r)&&"production"!==(null===globalThis||void 0===globalThis||null===(c=globalThis.process)||void 0===c||null===(u=c.env)||void 0===u?void 0:u.NODE_ENV),s=function(){var e;i&&(e=console).debug.apply(e,arguments)}},256:function(e,t,n){"use strict";var r,o,a;n.d(t,"a",(function(){return u}));var c=!(null!==(r=void 0!==(null===globalThis||void 0===globalThis||null===(o=globalThis.process)||void 0===o||null===(o=o.env)||void 0===o?void 0:o.JEST_WORKER_ID))&&void 0!==r&&r)&&"production"!==(null===globalThis||void 0===globalThis||null===(a=globalThis.process)||void 0===a||null===(a=a.env)||void 0===a?void 0:a.NODE_ENV),u=function(){var e;c&&(e=console).debug.apply(e,arguments)}},27:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.__esModule=!0,e.exports.default=e.exports},28:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.__esModule=!0,e.exports.default=e.exports},29:function(e,t,n){var r=n(215);function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,r(o.key),o)}}e.exports=function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e},e.exports.__esModule=!0,e.exports.default=e.exports},31:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return a}));var r=n(75);function o(e,t,n){Object(r.a)("[".concat(e,"]: The ").concat(t," is deprecated.").concat(n&&" ".concat(n)))}function a(e,t,n,r){0}}).call(this,n(37))},32:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.__esModule=!0,e.exports.default=e.exports,n(t)}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports},36:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o}));function r(e,t,n){var r="";return n.split(" ").forEach((function(n){void 0!==e[n]?t.push(e[n]+";"):r+=n+" "})),r}var o=function(e,t,n){var r=e.key+"-"+t.name;!1===n&&void 0===e.registered[r]&&(e.registered[r]=t.styles)},a=function(e,t,n){o(e,t,n);var r=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var a=t;do{e.insert(t===a?"."+r:"",a,e.sheet,!0),a=a.next}while(void 0!==a)}}},361:function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.__esModule=!0,e.exports.default=e.exports},362:function(e,t){e.exports=function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,c,u=[],i=!0,s=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=a.call(n)).done)&&(u.push(r.value),u.length!==t);i=!0);}catch(e){s=!0,o=e}finally{try{if(!i&&null!=n.return&&(c=n.return(),Object(c)!==c))return}finally{if(s)throw o}}return u}},e.exports.__esModule=!0,e.exports.default=e.exports},363:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},37:function(e,t){var n,r,o=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function c(){throw new Error("clearTimeout has not been defined")}function u(e){if(n===setTimeout)return setTimeout(e,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:a}catch(e){n=a}try{r="function"==typeof clearTimeout?clearTimeout:c}catch(e){r=c}}();var i,s=[],l=!1,f=-1;function d(){l&&i&&(l=!1,i.length?s=i.concat(s):f=-1,s.length&&p())}function p(){if(!l){var e=u(d);l=!0;for(var t=s.length;t;){for(i=s,s=[];++f<t;)i&&i[f].run();f=-1,t=s.length}i=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===c||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function v(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new v(e,t)),1!==s.length||l||u(p)},v.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},370:function(e,t,n){"use strict";e.exports=n(371)},371:function(e,t,n){"use strict";
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r="function"==typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,a=r?Symbol.for("react.portal"):60106,c=r?Symbol.for("react.fragment"):60107,u=r?Symbol.for("react.strict_mode"):60108,i=r?Symbol.for("react.profiler"):60114,s=r?Symbol.for("react.provider"):60109,l=r?Symbol.for("react.context"):60110,f=r?Symbol.for("react.async_mode"):60111,d=r?Symbol.for("react.concurrent_mode"):60111,p=r?Symbol.for("react.forward_ref"):60112,v=r?Symbol.for("react.suspense"):60113,h=r?Symbol.for("react.suspense_list"):60120,y=r?Symbol.for("react.memo"):60115,b=r?Symbol.for("react.lazy"):60116,m=r?Symbol.for("react.block"):60121,g=r?Symbol.for("react.fundamental"):60117,x=r?Symbol.for("react.responder"):60118,O=r?Symbol.for("react.scope"):60119;function w(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case f:case d:case c:case i:case u:case v:return e;default:switch(e=e&&e.$$typeof){case l:case p:case b:case y:case s:return e;default:return t}}case a:return t}}}function _(e){return w(e)===d}t.AsyncMode=f,t.ConcurrentMode=d,t.ContextConsumer=l,t.ContextProvider=s,t.Element=o,t.ForwardRef=p,t.Fragment=c,t.Lazy=b,t.Memo=y,t.Portal=a,t.Profiler=i,t.StrictMode=u,t.Suspense=v,t.isAsyncMode=function(e){return _(e)||w(e)===f},t.isConcurrentMode=_,t.isContextConsumer=function(e){return w(e)===l},t.isContextProvider=function(e){return w(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return w(e)===p},t.isFragment=function(e){return w(e)===c},t.isLazy=function(e){return w(e)===b},t.isMemo=function(e){return w(e)===y},t.isPortal=function(e){return w(e)===a},t.isProfiler=function(e){return w(e)===i},t.isStrictMode=function(e){return w(e)===u},t.isSuspense=function(e){return w(e)===v},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===c||e===d||e===i||e===u||e===v||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===b||e.$$typeof===y||e.$$typeof===s||e.$$typeof===l||e.$$typeof===p||e.$$typeof===g||e.$$typeof===x||e.$$typeof===O||e.$$typeof===m)},t.typeOf=w},372:function(e,t){e.exports=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(-1!==t.indexOf(r))continue;n[r]=e[r]}return n},e.exports.__esModule=!0,e.exports.default=e.exports},373:function(e,t,n){var r=n(20).default;e.exports=function(e,t){if("object"!=r(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!=r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},374:function(e,t,n){var r=n(213);e.exports=function(e){if(Array.isArray(e))return r(e)},e.exports.__esModule=!0,e.exports.default=e.exports},375:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},376:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},377:function(e,t,n){var r=n(32);e.exports=function(e,t){for(;!{}.hasOwnProperty.call(e,t)&&null!==(e=r(e)););return e},e.exports.__esModule=!0,e.exports.default=e.exports},378:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},e.exports.__esModule=!0,e.exports.default=e.exports,n(t,r)}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports},38:function(e,t,n){"use strict";var r=n(0);t.a=Object(r.createContext)(null)},40:function(e,t,n){"use strict";function r(e){return function(t){e.forEach((function(e){"function"==typeof e?e(t):null!==e&&(e.current=t)}))}}n.d(t,"a",(function(){return r}))},44:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c}));var r=n(0),o=!!r.useInsertionEffect&&r.useInsertionEffect,a=o||function(e){return e()},c=o||r.useLayoutEffect},49:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0);function o(e,t){var n=Object(r.useRef)(!0);Object(r.useEffect)((function(){e&&n.current&&t&&e.current&&e.current.focus(),n.current=!1}),[t,e])}},5:function(e,t,n){var r=n(215);e.exports=function(e,t,n){return(t=r(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.__esModule=!0,e.exports.default=e.exports},50:function(e,t,n){var r=n(378);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&r(e,t)},e.exports.__esModule=!0,e.exports.default=e.exports},506:function(e,t,n){"use strict";var r=n(0),o=n(1),a=Object(o.c)({outline:"".concat(2,"px solid ","var(--ds-border-focused, #2684FF)"),outlineOffset:2}),c=Object(o.c)({outlineColor:"var(--ds-border-focused, #2684FF)",outlineOffset:-2,outlineStyle:"solid",outlineWidth:"var(--ds-border-width-outline, 2px)"}),u=Object(o.c)({"&:focus":a,"&:focus-visible":a,"&:focus:not(:focus-visible)":{outline:"none"},"@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)":{"&:focus-visible":{outline:"1px solid"}}}),i=Object(o.c)({"&:focus":c,"&:focus-visible":c,"&:focus:not(:focus-visible)":{outline:"none"},"@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)":{"&:focus-visible":{outline:"1px solid",outlineOffset:"-1px"}}}),s=Object(r.memo)((function(e){var t=e.children,n=e.isInset,s=e.focus,l=void 0===s?n?i:u:"on"===s&&(n?c:a);return Object(o.d)(o.a,null,(function(e){var n=e.css,o=e.cx;return r.Children.only(l?Object(r.cloneElement)(t,{className:o([n(l),t.props.className])}):t)}))}));s.displayName="FocusRing",t.a=s},509:function(e,t,n){"use strict";var r=n(1),o=Object(r.c)({width:"1px",height:"1px",padding:"0",position:"absolute",border:"0",clip:"rect(1px, 1px, 1px, 1px)",overflow:"hidden",whiteSpace:"nowrap"});t.a=function(e){var t=e.children,n=e.testId,a=e.role,c=e.id;return Object(r.d)("span",{id:c,"data-testid":n,css:o,role:a},t)}},51:function(e,t,n){var r=n(20).default,o=n(27);e.exports=function(e,t){if(t&&("object"==r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return o(e)},e.exports.__esModule=!0,e.exports.default=e.exports},517:function(e,t,n){"use strict";n.d(t,"a",(function(){return x}));var r=n(0),o=n.n(r),a=n(147);var c=n(73),u=function(){return document.body},i=function(){var e=document.querySelector("body > .atlaskit-portal-container");if(!e){var t,n=document.createElement("div");return n.className="atlaskit-portal-container",n.style.display="flex",null===(t=u())||void 0===t||t.appendChild(n),n}return e},s=function(){return void 0!==document};function l(e){var t=e.zIndex,n=e.children,o=Object(r.useMemo)((function(){return function(e){var t=document.createElement("div");return t.className="atlaskit-portal",t.style.zIndex="".concat(e),t}(t)}),[t]);return function(e){e.parentElement||i().appendChild(e)}(o),Object(r.useEffect)((function(){return function(){!function(e){i().removeChild(e)}(o)}}),[o]),Object(c.createPortal)(n,o)}var f=n(12),d=n.n(f),p="undefined"!=typeof window?r.useLayoutEffect:r.useEffect;function v(e){var t=e.zIndex,n=e.children,o=Object(r.useState)(null),a=d()(o,2),i=a[0],l=a[1];return p((function(){var e=function(e){if(s()){var t=document.createElement("div");return t.className="atlaskit-portal",t.style.zIndex="".concat(e),t}}(t);l(e);var n=function(){if(s()){var e=document.querySelector("body > .atlaskit-portal-container");if(!e){var t,n=document.createElement("div");return n.className="atlaskit-portal-container",n.style.display="flex",null===(t=u())||void 0===t||t.appendChild(n),n}return e}}();if(e&&n)return n.appendChild(e),function(){e&&n.removeChild(e),l(null)}}),[t]),i?Object(c.createPortal)(n,i):null}var h=function(e){var t=Object(r.useState)(!1),n=d()(t,2),o=n[0],a=n[1],c=Object(r.useState)((function(){return"layoutEffect"===e?p:r.useEffect}));return(0,d()(c,1)[0])((function(){a(!0)}),[]),o},y={100:"card",200:"navigation",300:"dialog",400:"layer",500:"blanket",510:"modal",600:"flag",700:"spotlight",9999:"tooltip"},b=function(e){return y.hasOwnProperty(e)?y[e]:null};function m(e,t){var n=function(e,t){var n={layer:b(Number(t)),zIndex:t};return new CustomEvent(e,{detail:n})}(e,t);window.dispatchEvent(n)}var g=function(e){var t=Number(e);Object(r.useEffect)((function(){return m("akPortalMount",t),function(){m("akPortalUnmount",t)}}),[t])};function x(e){var t,n=e.zIndex,r=void 0===n?0:n,c=e.children,u=e.mountStrategy,i=h(void 0===u?"effect":u);return g(r),t="dsp-19516-design-system-portal-logic-update",Object(a.a)(t)?o.a.createElement(v,{zIndex:r},c):i?o.a.createElement(l,{zIndex:r},c):null}},52:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(0);function o(e,t){var n=Object(r.useState)((function(){return{inputs:t,result:e()}}))[0],o=Object(r.useRef)(!0),a=Object(r.useRef)(n),c=o.current||Boolean(t&&a.current.inputs&&function(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(t,a.current.inputs))?a.current:{inputs:t,result:e()};return Object(r.useEffect)((function(){o.current=!1,a.current=c}),[c]),c.result}function a(e,t){return o((function(){return e}),t)}},53:function(e,t,n){var r=n(377);function o(){return e.exports=o="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var o=r(e,t);if(o){var a=Object.getOwnPropertyDescriptor(o,t);return a.get?a.get.call(arguments.length<3?e:n):a.value}},e.exports.__esModule=!0,e.exports.default=e.exports,o.apply(null,arguments)}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports},55:function(e,t,n){"use strict";var r=n(0),o=Object(r.createContext)({getAtlaskitAnalyticsContext:function(){return[]},getAtlaskitAnalyticsEventHandlers:function(){return[]}});t.a=o},59:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(e){var t=new WeakMap;return function(n){if(t.has(n))return t.get(n);var r=e(n);return t.set(n,r),r}}},67:function(e,t,n){"use strict";n.d(t,"a",(function(){return oe}));var r=function(){function e(e){var t=this;this._insertTag=function(e){var n;n=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,n),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var n=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{n.insertRule(e,n.cssRules.length)}catch(e){0}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode&&e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}(),o="-ms-",a="-moz-",c="-webkit-",u="comm",i="rule",s="decl",l="@keyframes",f=Math.abs,d=String.fromCharCode,p=Object.assign;function v(e,t){return 45^g(e,0)?(((t<<2^g(e,0))<<2^g(e,1))<<2^g(e,2))<<2^g(e,3):0}function h(e){return e.trim()}function y(e,t){return(e=t.exec(e))?e[0]:e}function b(e,t,n){return e.replace(t,n)}function m(e,t){return e.indexOf(t)}function g(e,t){return 0|e.charCodeAt(t)}function x(e,t,n){return e.slice(t,n)}function O(e){return e.length}function w(e){return e.length}function _(e,t){return t.push(e),e}function k(e,t){return e.map(t).join("")}var j=1,E=1,S=0,A=0,C=0,F="";function P(e,t,n,r,o,a,c){return{value:e,root:t,parent:n,type:r,props:o,children:a,line:j,column:E,length:c,return:""}}function T(e,t){return p(P("",null,null,"",null,null,0),e,{length:-e.length},t)}function $(){return C=A<S?g(F,A++):0,E++,10===C&&(E=1,j++),C}function M(){return g(F,A)}function N(){return A}function R(e,t){return x(F,e,t)}function D(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function B(e){return j=E=1,S=O(F=e),A=0,[]}function I(e){return F="",e}function L(e){return h(R(A-1,function e(t){for(;$();)switch(C){case t:return A;case 34:case 39:34!==t&&39!==t&&e(C);break;case 40:41===t&&e(t);break;case 92:$()}return A}(91===e?e+2:40===e?e+1:e)))}function z(e){for(;(C=M())&&C<33;)$();return D(e)>2||D(C)>3?"":" "}function W(e,t){for(;--t&&$()&&!(C<48||C>102||C>57&&C<65||C>70&&C<97););return R(e,N()+(t<6&&32==M()&&32==$()))}function G(e,t){for(;$()&&e+C!==57&&(e+C!==84||47!==M()););return"/*"+R(t,A-1)+"*"+d(47===e?e:$())}function J(e){for(;!D(M());)$();return R(e,A)}function V(e){return I(function e(t,n,r,o,a,c,u,i,s){var l=0,f=0,p=u,v=0,h=0,y=0,x=1,w=1,k=1,S=0,P="",T=a,R=c,D=o,B=P;for(;w;)switch(y=S,S=$()){case 40:if(108!=y&&58==g(B,p-1)){-1!=m(B+=b(L(S),"&","&\f"),"&\f")&&(k=-1);break}case 34:case 39:case 91:B+=L(S);break;case 9:case 10:case 13:case 32:B+=z(y);break;case 92:B+=W(N()-1,7);continue;case 47:switch(M()){case 42:case 47:_(H(G($(),N()),n,r),s);break;default:B+="/"}break;case 123*x:i[l++]=O(B)*k;case 125*x:case 59:case 0:switch(S){case 0:case 125:w=0;case 59+f:-1==k&&(B=b(B,/\f/g,"")),h>0&&O(B)-p&&_(h>32?K(B+";",o,r,p-1):K(b(B," ","")+";",o,r,p-2),s);break;case 59:B+=";";default:if(_(D=q(B,n,r,l,f,a,i,P,T=[],R=[],p),c),123===S)if(0===f)e(B,n,D,D,T,c,p,i,R);else switch(99===v&&110===g(B,3)?100:v){case 100:case 108:case 109:case 115:e(t,D,D,o&&_(q(t,D,D,0,0,a,i,P,a,T=[],p),R),a,R,p,i,o?T:R);break;default:e(B,D,D,D,[""],R,0,i,R)}}l=f=h=0,x=k=1,P=B="",p=u;break;case 58:p=1+O(B),h=y;default:if(x<1)if(123==S)--x;else if(125==S&&0==x++&&125==(C=A>0?g(F,--A):0,E--,10===C&&(E=1,j--),C))continue;switch(B+=d(S),S*x){case 38:k=f>0?1:(B+="\f",-1);break;case 44:i[l++]=(O(B)-1)*k,k=1;break;case 64:45===M()&&(B+=L($())),v=M(),f=p=O(P=B+=J(N())),S++;break;case 45:45===y&&2==O(B)&&(x=0)}}return c}("",null,null,null,[""],e=B(e),0,[0],e))}function q(e,t,n,r,o,a,c,u,s,l,d){for(var p=o-1,v=0===o?a:[""],y=w(v),m=0,g=0,O=0;m<r;++m)for(var _=0,k=x(e,p+1,p=f(g=c[m])),j=e;_<y;++_)(j=h(g>0?v[_]+" "+k:b(k,/&\f/g,v[_])))&&(s[O++]=j);return P(e,t,n,0===o?i:u,s,l,d)}function H(e,t,n){return P(e,t,n,u,d(C),x(e,2,-2),0)}function K(e,t,n,r){return P(e,t,n,s,x(e,0,r),x(e,r+1,-1),r)}function U(e,t){for(var n="",r=w(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function Y(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case s:return e.return=e.return||e.value;case u:return"";case l:return e.return=e.value+"{"+U(e.children,r)+"}";case i:e.value=e.props.join(",")}return O(n=U(e.children,r))?e.return=e.value+"{"+n+"}":""}function Q(e){return function(t){t.root||(t=t.return)&&e(t)}}n(59),n(95);var X=function(e,t,n){for(var r=0,o=0;r=o,o=M(),38===r&&12===o&&(t[n]=1),!D(o);)$();return R(e,A)},Z=function(e,t){return I(function(e,t){var n=-1,r=44;do{switch(D(r)){case 0:38===r&&12===M()&&(t[n]=1),e[n]+=X(A-1,t,n);break;case 2:e[n]+=L(r);break;case 4:if(44===r){e[++n]=58===M()?"&\f":"",t[n]=e[n].length;break}default:e[n]+=d(r)}}while(r=$());return e}(B(e),t))},ee=new WeakMap,te=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,n=e.parent,r=e.column===n.column&&e.line===n.line;"rule"!==n.type;)if(!(n=n.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||ee.get(n))&&!r){ee.set(e,!0);for(var o=[],a=Z(t,o),c=n.props,u=0,i=0;u<a.length;u++)for(var s=0;s<c.length;s++,i++)e.props[i]=o[u]?a[u].replace(/&\f/g,c[s]):c[s]+" "+a[u]}}},ne=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}};var re=[function(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case s:e.return=function e(t,n){switch(v(t,n)){case 5103:return c+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return c+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return c+t+a+t+o+t+t;case 6828:case 4268:return c+t+o+t+t;case 6165:return c+t+o+"flex-"+t+t;case 5187:return c+t+b(t,/(\w+).+(:[^]+)/,c+"box-$1$2"+o+"flex-$1$2")+t;case 5443:return c+t+o+"flex-item-"+b(t,/flex-|-self/,"")+t;case 4675:return c+t+o+"flex-line-pack"+b(t,/align-content|flex-|-self/,"")+t;case 5548:return c+t+o+b(t,"shrink","negative")+t;case 5292:return c+t+o+b(t,"basis","preferred-size")+t;case 6060:return c+"box-"+b(t,"-grow","")+c+t+o+b(t,"grow","positive")+t;case 4554:return c+b(t,/([^-])(transform)/g,"$1"+c+"$2")+t;case 6187:return b(b(b(t,/(zoom-|grab)/,c+"$1"),/(image-set)/,c+"$1"),t,"")+t;case 5495:case 3959:return b(t,/(image-set\([^]*)/,c+"$1$`$1");case 4968:return b(b(t,/(.+:)(flex-)?(.*)/,c+"box-pack:$3"+o+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+c+t+t;case 4095:case 3583:case 4068:case 2532:return b(t,/(.+)-inline(.+)/,c+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(O(t)-1-n>6)switch(g(t,n+1)){case 109:if(45!==g(t,n+4))break;case 102:return b(t,/(.+:)(.+)-([^]+)/,"$1"+c+"$2-$3$1"+a+(108==g(t,n+3)?"$3":"$2-$3"))+t;case 115:return~m(t,"stretch")?e(b(t,"stretch","fill-available"),n)+t:t}break;case 4949:if(115!==g(t,n+1))break;case 6444:switch(g(t,O(t)-3-(~m(t,"!important")&&10))){case 107:return b(t,":",":"+c)+t;case 101:return b(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+c+(45===g(t,14)?"inline-":"")+"box$3$1"+c+"$2$3$1"+o+"$2box$3")+t}break;case 5936:switch(g(t,n+11)){case 114:return c+t+o+b(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return c+t+o+b(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return c+t+o+b(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return c+t+o+t+t}return t}(e.value,e.length);break;case l:return U([T(e,{value:b(e.value,"@","@"+c)})],r);case i:if(e.length)return k(e.props,(function(t){switch(y(t,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return U([T(e,{props:[b(t,/:(read-\w+)/,":-moz-$1")]})],r);case"::placeholder":return U([T(e,{props:[b(t,/:(plac\w+)/,":"+c+"input-$1")]}),T(e,{props:[b(t,/:(plac\w+)/,":-moz-$1")]}),T(e,{props:[b(t,/:(plac\w+)/,o+"input-$1")]})],r)}return""}))}}],oe=function(e){var t=e.key;if("css"===t){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var o=e.stylisPlugins||re;var a,c,u={},i=[];a=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),(function(e){for(var t=e.getAttribute("data-emotion").split(" "),n=1;n<t.length;n++)u[t[n]]=!0;i.push(e)}));var s=[te,ne];var l,f=[Y,Q((function(e){l.insert(e)}))],d=function(e){var t=w(e);return function(n,r,o,a){for(var c="",u=0;u<t;u++)c+=e[u](n,r,o,a)||"";return c}}(s.concat(o,f));c=function(e,t,n,r){l=n,U(V(e?e+"{"+t.styles+"}":t.styles),d),r&&(p.inserted[t.name]=!0)};var p={key:t,sheet:new r({key:t,container:a,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:u,registered:{},insert:c};return p.sheet.hydrate(i),p}},75:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r={};function o(e){r[e]||(r[e]=!0,"undefined"!=typeof window&&console.warn(e))}},81:function(e,t,n){"use strict";var r=n(370),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},c={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},u={};function i(e){return r.isMemo(e)?c:u[e.$$typeof]||o}u[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},u[r.Memo]=c;var s=Object.defineProperty,l=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,v=Object.prototype;e.exports=function e(t,n,r){if("string"!=typeof n){if(v){var o=p(n);o&&o!==v&&e(t,o,r)}var c=l(n);f&&(c=c.concat(f(n)));for(var u=i(t),h=i(n),y=0;y<c.length;++y){var b=c[y];if(!(a[b]||r&&r[b]||h&&h[b]||u&&u[b])){var m=d(n,b);try{s(t,b,m)}catch(e){}}}}return t}},95:function(e,t,n){"use strict";function r(e){var t=Object.create(null);return function(n){return void 0===t[n]&&(t[n]=e(n)),t[n]}}n.d(t,"a",(function(){return r}))}}]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-frontend:split_vendors~color-scheme~theme-switcher~theme-switcher-listener~theme-switcher-loader', location = 'vendors~color-scheme~theme-switcher~theme-switcher-listener~theme-switcher-loader.js' */
(window.atlassianWebpackJsonpe19a4f58490c3d96a3072d1e47cd0e73=window.atlassianWebpackJsonpe19a4f58490c3d96a3072d1e47cd0e73||[]).push([["vendors~color-scheme~theme-switcher~theme-switcher-listener~theme-switcher-loader"],{13:function(e,t,n){"use strict";n.d(t,"m",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"k",(function(){return i})),n.d(t,"f",(function(){return a})),n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return s})),n.d(t,"l",(function(){return c})),n.d(t,"e",(function(){return u})),n.d(t,"d",(function(){return p})),n.d(t,"o",(function(){return l})),n.d(t,"i",(function(){return d})),n.d(t,"j",(function(){return m})),n.d(t,"n",(function(){return h})),n.d(t,"h",(function(){return v})),n.d(t,"g",(function(){return y}));var r="top",o="bottom",i="right",a="left",f="auto",s=[r,o,i,a],c="start",u="end",p="clippingParents",l="viewport",d="popper",m="reference",h=s.reduce((function(e,t){return e.concat([t+"-"+c,t+"-"+u])}),[]),v=[].concat(s,[f]).reduce((function(e,t){return e.concat([t,t+"-"+c,t+"-"+u])}),[]),y=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"]},258:function(e,t){var n="undefined"!=typeof Element,r="function"==typeof Map,o="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,a){if(t===a)return!0;if(t&&a&&"object"==typeof t&&"object"==typeof a){if(t.constructor!==a.constructor)return!1;var f,s,c,u;if(Array.isArray(t)){if((f=t.length)!=a.length)return!1;for(s=f;0!=s--;)if(!e(t[s],a[s]))return!1;return!0}if(r&&t instanceof Map&&a instanceof Map){if(t.size!==a.size)return!1;for(u=t.entries();!(s=u.next()).done;)if(!a.has(s.value[0]))return!1;for(u=t.entries();!(s=u.next()).done;)if(!e(s.value[1],a.get(s.value[0])))return!1;return!0}if(o&&t instanceof Set&&a instanceof Set){if(t.size!==a.size)return!1;for(u=t.entries();!(s=u.next()).done;)if(!a.has(s.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(a)){if((f=t.length)!=a.length)return!1;for(s=f;0!=s--;)if(t[s]!==a[s])return!1;return!0}if(t.constructor===RegExp)return t.source===a.source&&t.flags===a.flags;if(t.valueOf!==Object.prototype.valueOf&&"function"==typeof t.valueOf&&"function"==typeof a.valueOf)return t.valueOf()===a.valueOf();if(t.toString!==Object.prototype.toString&&"function"==typeof t.toString&&"function"==typeof a.toString)return t.toString()===a.toString();if((f=(c=Object.keys(t)).length)!==Object.keys(a).length)return!1;for(s=f;0!=s--;)if(!Object.prototype.hasOwnProperty.call(a,c[s]))return!1;if(n&&t instanceof Element)return!1;for(s=f;0!=s--;)if(("_owner"!==c[s]&&"__v"!==c[s]&&"__o"!==c[s]||!t.$$typeof)&&!e(t[c[s]],a[c[s]]))return!1;return!0}return t!=t&&a!=a}(e,t)}catch(e){if((e.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw e}}},41:function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return f})),n.d(t,"e",(function(){return s}));var r=n(0),o=function(e){return Array.isArray(e)?e[0]:e},i=function(e){if("function"==typeof e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return e.apply(void 0,n)}},a=function(e,t){if("function"==typeof e)return i(e,t);null!=e&&(e.current=t)},f=function(e){return e.reduce((function(e,t){var n=t[0],r=t[1];return e[n]=r,e}),{})},s="undefined"!=typeof window&&window.document&&window.document.createElement?r.useLayoutEffect:r.useEffect},467:function(e,t,n){"use strict";n.d(t,"a",(function(){return ce}));var r=n(0),o=n(96),i=n(41),a=n(73);function f(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function s(e){return e instanceof f(e).Element||e instanceof Element}function c(e){return e instanceof f(e).HTMLElement||e instanceof HTMLElement}function u(e){return"undefined"!=typeof ShadowRoot&&(e instanceof f(e).ShadowRoot||e instanceof ShadowRoot)}var p=Math.max,l=Math.min,d=Math.round;function m(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function h(){return!/^((?!chrome|android).)*safari/i.test(m())}function v(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var r=e.getBoundingClientRect(),o=1,i=1;t&&c(e)&&(o=e.offsetWidth>0&&d(r.width)/e.offsetWidth||1,i=e.offsetHeight>0&&d(r.height)/e.offsetHeight||1);var a=(s(e)?f(e):window).visualViewport,u=!h()&&n,p=(r.left+(u&&a?a.offsetLeft:0))/o,l=(r.top+(u&&a?a.offsetTop:0))/i,m=r.width/o,v=r.height/i;return{width:m,height:v,top:l,right:p+m,bottom:l+v,left:p,x:p,y:l}}function y(e){var t=f(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function g(e){return e?(e.nodeName||"").toLowerCase():null}function b(e){return((s(e)?e.ownerDocument:e.document)||window.document).documentElement}function w(e){return v(b(e)).left+y(e).scrollLeft}function x(e){return f(e).getComputedStyle(e)}function O(e){var t=x(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function j(e,t,n){void 0===n&&(n=!1);var r,o,i=c(t),a=c(t)&&function(e){var t=e.getBoundingClientRect(),n=d(t.width)/e.offsetWidth||1,r=d(t.height)/e.offsetHeight||1;return 1!==n||1!==r}(t),s=b(t),u=v(e,a,n),p={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(i||!i&&!n)&&(("body"!==g(t)||O(s))&&(p=(r=t)!==f(r)&&c(r)?{scrollLeft:(o=r).scrollLeft,scrollTop:o.scrollTop}:y(r)),c(t)?((l=v(t,!0)).x+=t.clientLeft,l.y+=t.clientTop):s&&(l.x=w(s))),{x:u.left+p.scrollLeft-l.x,y:u.top+p.scrollTop-l.y,width:u.width,height:u.height}}function E(e){var t=v(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function k(e){return"html"===g(e)?e:e.assignedSlot||e.parentNode||(u(e)?e.host:null)||b(e)}function A(e,t){var n;void 0===t&&(t=[]);var r=function e(t){return["html","body","#document"].indexOf(g(t))>=0?t.ownerDocument.body:c(t)&&O(t)?t:e(k(t))}(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=f(r),a=o?[i].concat(i.visualViewport||[],O(r)?r:[]):r,s=t.concat(a);return o?s:s.concat(A(k(a)))}function D(e){return["table","td","th"].indexOf(g(e))>=0}function S(e){return c(e)&&"fixed"!==x(e).position?e.offsetParent:null}function P(e){for(var t=f(e),n=S(e);n&&D(n)&&"static"===x(n).position;)n=S(n);return n&&("html"===g(n)||"body"===g(n)&&"static"===x(n).position)?t:n||function(e){var t=/firefox/i.test(m());if(/Trident/i.test(m())&&c(e)&&"fixed"===x(e).position)return null;var n=k(e);for(u(n)&&(n=n.host);c(n)&&["html","body"].indexOf(g(n))<0;){var r=x(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}var M=n(13);function L(e){var t=new Map,n=new Set,r=[];return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||function e(o){n.add(o.name),[].concat(o.requires||[],o.requiresIfExists||[]).forEach((function(r){if(!n.has(r)){var o=t.get(r);o&&e(o)}})),r.push(o)}(e)})),r}var R={placement:"bottom",modifiers:[],strategy:"absolute"};function W(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function B(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?R:o;return function(e,t,n){void 0===n&&(n=i);var o,a,f={placement:"bottom",orderedModifiers:[],options:Object.assign({},R,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},c=[],u=!1,p={state:f,setOptions:function(n){var o="function"==typeof n?n(f.options):n;l(),f.options=Object.assign({},i,f.options,o),f.scrollParents={reference:s(e)?A(e):e.contextElement?A(e.contextElement):[],popper:A(t)};var a,u,d=function(e){var t=L(e);return M.g.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}((a=[].concat(r,f.options.modifiers),u=a.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{}),Object.keys(u).map((function(e){return u[e]}))));return f.orderedModifiers=d.filter((function(e){return e.enabled})),f.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,o=e.effect;if("function"==typeof o){var i=o({state:f,name:t,instance:p,options:r});c.push(i||function(){})}})),p.update()},forceUpdate:function(){if(!u){var e=f.elements,t=e.reference,n=e.popper;if(W(t,n)){f.rects={reference:j(t,P(n),"fixed"===f.options.strategy),popper:E(n)},f.reset=!1,f.placement=f.options.placement,f.orderedModifiers.forEach((function(e){return f.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<f.orderedModifiers.length;r++)if(!0!==f.reset){var o=f.orderedModifiers[r],i=o.fn,a=o.options,s=void 0===a?{}:a,c=o.name;"function"==typeof i&&(f=i({state:f,options:s,name:c,instance:p})||f)}else f.reset=!1,r=-1}}},update:(o=function(){return new Promise((function(e){p.forceUpdate(),e(f)}))},function(){return a||(a=new Promise((function(e){Promise.resolve().then((function(){a=void 0,e(o())}))}))),a}),destroy:function(){l(),u=!0}};if(!W(e,t))return p;function l(){c.forEach((function(e){return e()})),c=[]}return p.setOptions(n).then((function(e){!u&&n.onFirstUpdate&&n.onFirstUpdate(e)})),p}}var H={passive:!0};function U(e){return e.split("-")[0]}function T(e){return e.split("-")[1]}function C(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function V(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?U(o):null,a=o?T(o):null,f=n.x+n.width/2-r.width/2,s=n.y+n.height/2-r.height/2;switch(i){case M.m:t={x:f,y:n.y-r.height};break;case M.c:t={x:f,y:n.y+n.height};break;case M.k:t={x:n.x+n.width,y:s};break;case M.f:t={x:n.x-r.width,y:s};break;default:t={x:n.x,y:n.y}}var c=i?C(i):null;if(null!=c){var u="y"===c?"height":"width";switch(a){case M.l:t[c]=t[c]-(n[u]/2-r[u]/2);break;case M.e:t[c]=t[c]+(n[u]/2-r[u]/2)}}return t}var q={top:"auto",right:"auto",bottom:"auto",left:"auto"};function F(e){var t,n=e.popper,r=e.popperRect,o=e.placement,i=e.variation,a=e.offsets,s=e.position,c=e.gpuAcceleration,u=e.adaptive,p=e.roundOffsets,l=e.isFixed,m=a.x,h=void 0===m?0:m,v=a.y,y=void 0===v?0:v,g="function"==typeof p?p({x:h,y:y}):{x:h,y:y};h=g.x,y=g.y;var w=a.hasOwnProperty("x"),O=a.hasOwnProperty("y"),j=M.f,E=M.m,k=window;if(u){var A=P(n),D="clientHeight",S="clientWidth";if(A===f(n)&&"static"!==x(A=b(n)).position&&"absolute"===s&&(D="scrollHeight",S="scrollWidth"),A=A,o===M.m||(o===M.f||o===M.k)&&i===M.e)E=M.c,y-=(l&&A===k&&k.visualViewport?k.visualViewport.height:A[D])-r.height,y*=c?1:-1;if(o===M.f||(o===M.m||o===M.c)&&i===M.e)j=M.k,h-=(l&&A===k&&k.visualViewport?k.visualViewport.width:A[S])-r.width,h*=c?1:-1}var L,R=Object.assign({position:s},u&&q),W=!0===p?function(e,t){var n=e.x,r=e.y,o=t.devicePixelRatio||1;return{x:d(n*o)/o||0,y:d(r*o)/o||0}}({x:h,y:y},f(n)):{x:h,y:y};return h=W.x,y=W.y,c?Object.assign({},R,((L={})[E]=O?"0":"",L[j]=w?"0":"",L.transform=(k.devicePixelRatio||1)<=1?"translate("+h+"px, "+y+"px)":"translate3d("+h+"px, "+y+"px, 0)",L)):Object.assign({},R,((t={})[E]=O?y+"px":"",t[j]=w?h+"px":"",t.transform="",t))}var _={left:"right",right:"left",bottom:"top",top:"bottom"};function z(e){return e.replace(/left|right|bottom|top/g,(function(e){return _[e]}))}var N={start:"end",end:"start"};function I(e){return e.replace(/start|end/g,(function(e){return N[e]}))}function J(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&u(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function X(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Y(e,t,n){return t===M.o?X(function(e,t){var n=f(e),r=b(e),o=n.visualViewport,i=r.clientWidth,a=r.clientHeight,s=0,c=0;if(o){i=o.width,a=o.height;var u=h();(u||!u&&"fixed"===t)&&(s=o.offsetLeft,c=o.offsetTop)}return{width:i,height:a,x:s+w(e),y:c}}(e,n)):s(t)?function(e,t){var n=v(e,!1,"fixed"===t);return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}(t,n):X(function(e){var t,n=b(e),r=y(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=p(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=p(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),f=-r.scrollLeft+w(e),s=-r.scrollTop;return"rtl"===x(o||n).direction&&(f+=p(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:f,y:s}}(b(e)))}function $(e,t,n,r){var o="clippingParents"===t?function(e){var t=A(k(e)),n=["absolute","fixed"].indexOf(x(e).position)>=0&&c(e)?P(e):e;return s(n)?t.filter((function(e){return s(e)&&J(e,n)&&"body"!==g(e)})):[]}(e):[].concat(t),i=[].concat(o,[n]),a=i[0],f=i.reduce((function(t,n){var o=Y(e,n,r);return t.top=p(o.top,t.top),t.right=l(o.right,t.right),t.bottom=l(o.bottom,t.bottom),t.left=p(o.left,t.left),t}),Y(e,a,r));return f.width=f.right-f.left,f.height=f.bottom-f.top,f.x=f.left,f.y=f.top,f}function G(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function K(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function Q(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=void 0===r?e.placement:r,i=n.strategy,a=void 0===i?e.strategy:i,f=n.boundary,c=void 0===f?M.d:f,u=n.rootBoundary,p=void 0===u?M.o:u,l=n.elementContext,d=void 0===l?M.i:l,m=n.altBoundary,h=void 0!==m&&m,y=n.padding,g=void 0===y?0:y,w=G("number"!=typeof g?g:K(g,M.b)),x=d===M.i?M.j:M.i,O=e.rects.popper,j=e.elements[h?x:d],E=$(s(j)?j:j.contextElement||b(e.elements.popper),c,p,a),k=v(e.elements.reference),A=V({reference:k,element:O,strategy:"absolute",placement:o}),D=X(Object.assign({},O,A)),S=d===M.i?D:k,P={top:E.top-S.top+w.top,bottom:S.bottom-E.bottom+w.bottom,left:E.left-S.left+w.left,right:S.right-E.right+w.right},L=e.modifiersData.offset;if(d===M.i&&L){var R=L[o];Object.keys(P).forEach((function(e){var t=[M.k,M.c].indexOf(e)>=0?1:-1,n=[M.m,M.c].indexOf(e)>=0?"y":"x";P[e]+=R[n]*t}))}return P}function Z(e,t,n){return p(e,l(t,n))}function ee(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function te(e){return[M.m,M.k,M.c,M.f].some((function(t){return e[t]>=0}))}var ne=B({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,a=r.resize,s=void 0===a||a,c=f(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&u.forEach((function(e){e.addEventListener("scroll",n.update,H)})),s&&c.addEventListener("resize",n.update,H),function(){i&&u.forEach((function(e){e.removeEventListener("scroll",n.update,H)})),s&&c.removeEventListener("resize",n.update,H)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=V({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,f=n.roundOffsets,s=void 0===f||f,c={placement:U(t.placement),variation:T(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,F(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:s})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,F(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];c(o)&&g(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});c(r)&&g(r)&&(Object.assign(r.style,i),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=M.h.reduce((function(e,n){return e[n]=function(e,t,n){var r=U(e),o=[M.f,M.m].indexOf(r)>=0?-1:1,i="function"==typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],f=i[1];return a=a||0,f=(f||0)*o,[M.f,M.k].indexOf(r)>=0?{x:f,y:a}:{x:a,y:f}}(n,t.rects,i),e}),{}),f=a[t.placement],s=f.x,c=f.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=s,t.modifiersData.popperOffsets.y+=c),t.modifiersData[r]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,f=void 0===a||a,s=n.fallbackPlacements,c=n.padding,u=n.boundary,p=n.rootBoundary,l=n.altBoundary,d=n.flipVariations,m=void 0===d||d,h=n.allowedAutoPlacements,v=t.options.placement,y=U(v),g=s||(y===v||!m?[z(v)]:function(e){if(U(e)===M.a)return[];var t=z(e);return[I(e),t,I(t)]}(v)),b=[v].concat(g).reduce((function(e,n){return e.concat(U(n)===M.a?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,f=n.flipVariations,s=n.allowedAutoPlacements,c=void 0===s?M.h:s,u=T(r),p=u?f?M.n:M.n.filter((function(e){return T(e)===u})):M.b,l=p.filter((function(e){return c.indexOf(e)>=0}));0===l.length&&(l=p);var d=l.reduce((function(t,n){return t[n]=Q(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[U(n)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:n,boundary:u,rootBoundary:p,padding:c,flipVariations:m,allowedAutoPlacements:h}):n)}),[]),w=t.rects.reference,x=t.rects.popper,O=new Map,j=!0,E=b[0],k=0;k<b.length;k++){var A=b[k],D=U(A),S=T(A)===M.l,P=[M.m,M.c].indexOf(D)>=0,L=P?"width":"height",R=Q(t,{placement:A,boundary:u,rootBoundary:p,altBoundary:l,padding:c}),W=P?S?M.k:M.f:S?M.c:M.m;w[L]>x[L]&&(W=z(W));var B=z(W),H=[];if(i&&H.push(R[D]<=0),f&&H.push(R[W]<=0,R[B]<=0),H.every((function(e){return e}))){E=A,j=!1;break}O.set(A,H)}if(j)for(var C=function(e){var t=b.find((function(t){var n=O.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return E=t,"break"},V=m?3:1;V>0;V--){if("break"===C(V))break}t.placement!==E&&(t.modifiersData[r]._skip=!0,t.placement=E,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=void 0===o||o,a=n.altAxis,f=void 0!==a&&a,s=n.boundary,c=n.rootBoundary,u=n.altBoundary,d=n.padding,m=n.tether,h=void 0===m||m,v=n.tetherOffset,y=void 0===v?0:v,g=Q(t,{boundary:s,rootBoundary:c,padding:d,altBoundary:u}),b=U(t.placement),w=T(t.placement),x=!w,O=C(b),j="x"===O?"y":"x",k=t.modifiersData.popperOffsets,A=t.rects.reference,D=t.rects.popper,S="function"==typeof y?y(Object.assign({},t.rects,{placement:t.placement})):y,L="number"==typeof S?{mainAxis:S,altAxis:S}:Object.assign({mainAxis:0,altAxis:0},S),R=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,W={x:0,y:0};if(k){if(i){var B,H="y"===O?M.m:M.f,V="y"===O?M.c:M.k,q="y"===O?"height":"width",F=k[O],_=F+g[H],z=F-g[V],N=h?-D[q]/2:0,I=w===M.l?A[q]:D[q],J=w===M.l?-D[q]:-A[q],X=t.elements.arrow,Y=h&&X?E(X):{width:0,height:0},$=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},G=$[H],K=$[V],ee=Z(0,A[q],Y[q]),te=x?A[q]/2-N-ee-G-L.mainAxis:I-ee-G-L.mainAxis,ne=x?-A[q]/2+N+ee+K+L.mainAxis:J+ee+K+L.mainAxis,re=t.elements.arrow&&P(t.elements.arrow),oe=re?"y"===O?re.clientTop||0:re.clientLeft||0:0,ie=null!=(B=null==R?void 0:R[O])?B:0,ae=F+ne-ie,fe=Z(h?l(_,F+te-ie-oe):_,F,h?p(z,ae):z);k[O]=fe,W[O]=fe-F}if(f){var se,ce="x"===O?M.m:M.f,ue="x"===O?M.c:M.k,pe=k[j],le="y"===j?"height":"width",de=pe+g[ce],me=pe-g[ue],he=-1!==[M.m,M.f].indexOf(b),ve=null!=(se=null==R?void 0:R[j])?se:0,ye=he?de:pe-A[le]-D[le]-ve+L.altAxis,ge=he?pe+A[le]+D[le]-ve-L.altAxis:me,be=h&&he?function(e,t,n){var r=Z(e,t,n);return r>n?n:r}(ye,pe,ge):Z(h?ye:de,pe,h?ge:me);k[j]=be,W[j]=be-pe}t.modifiersData[r]=W}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,f=U(n.placement),s=C(f),c=[M.f,M.k].indexOf(f)>=0?"height":"width";if(i&&a){var u=function(e,t){return G("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:K(e,M.b))}(o.padding,n),p=E(i),l="y"===s?M.m:M.f,d="y"===s?M.c:M.k,m=n.rects.reference[c]+n.rects.reference[s]-a[s]-n.rects.popper[c],h=a[s]-n.rects.reference[s],v=P(i),y=v?"y"===s?v.clientHeight||0:v.clientWidth||0:0,g=m/2-h/2,b=u[l],w=y-p[c]-u[d],x=y/2-p[c]/2+g,O=Z(b,x,w),j=s;n.modifiersData[r]=((t={})[j]=O,t.centerOffset=O-x,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&J(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=Q(t,{elementContext:"reference"}),f=Q(t,{altBoundary:!0}),s=ee(a,r),c=ee(f,o,i),u=te(s),p=te(c);t.modifiersData[n]={referenceClippingOffsets:s,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:p},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":p})}}]}),re=n(258),oe=n.n(re),ie=[],ae=function(){},fe=function(){return Promise.resolve(null)},se=[];function ce(e){var t=e.placement,n=void 0===t?"bottom":t,f=e.strategy,s=void 0===f?"absolute":f,c=e.modifiers,u=void 0===c?se:c,p=e.referenceElement,l=e.onFirstUpdate,d=e.innerRef,m=e.children,h=r.useContext(o.b),v=r.useState(null),y=v[0],g=v[1],b=r.useState(null),w=b[0],x=b[1];r.useEffect((function(){Object(i.c)(d,y)}),[d,y]);var O=r.useMemo((function(){return{placement:n,strategy:s,onFirstUpdate:l,modifiers:[].concat(u,[{name:"arrow",enabled:null!=w,options:{element:w}}])}}),[n,s,l,u,w]),j=function(e,t,n){void 0===n&&(n={});var o=r.useRef(null),f={onFirstUpdate:n.onFirstUpdate,placement:n.placement||"bottom",strategy:n.strategy||"absolute",modifiers:n.modifiers||ie},s=r.useState({styles:{popper:{position:f.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),c=s[0],u=s[1],p=r.useMemo((function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(e){var t=e.state,n=Object.keys(t.elements);a.flushSync((function(){u({styles:Object(i.a)(n.map((function(e){return[e,t.styles[e]||{}]}))),attributes:Object(i.a)(n.map((function(e){return[e,t.attributes[e]]})))})}))},requires:["computeStyles"]}}),[]),l=r.useMemo((function(){var e={onFirstUpdate:f.onFirstUpdate,placement:f.placement,strategy:f.strategy,modifiers:[].concat(f.modifiers,[p,{name:"applyStyles",enabled:!1}])};return oe()(o.current,e)?o.current||e:(o.current=e,e)}),[f.onFirstUpdate,f.placement,f.strategy,f.modifiers,p]),d=r.useRef();return Object(i.e)((function(){d.current&&d.current.setOptions(l)}),[l]),Object(i.e)((function(){if(null!=e&&null!=t){var r=(n.createPopper||ne)(e,t,l);return d.current=r,function(){r.destroy(),d.current=null}}}),[e,t,n.createPopper]),{state:d.current?d.current.state:null,styles:c.styles,attributes:c.attributes,update:d.current?d.current.update:null,forceUpdate:d.current?d.current.forceUpdate:null}}(p||h,y,O),E=j.state,k=j.styles,A=j.forceUpdate,D=j.update,S=r.useMemo((function(){return{ref:g,style:k.popper,placement:E?E.placement:n,hasPopperEscaped:E&&E.modifiersData.hide?E.modifiersData.hide.hasPopperEscaped:null,isReferenceHidden:E&&E.modifiersData.hide?E.modifiersData.hide.isReferenceHidden:null,arrowProps:{style:k.arrow,ref:x},forceUpdate:A||ae,update:D||fe}}),[g,x,n,E,k,D,A]);return Object(i.d)(m)(S)}},61:function(e,t,n){"use strict";n.d(t,"e",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"d",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return f}));var r="ArrowUp",o="ArrowDown",i="Home",a="End",f="Escape"},63:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r="Invariant failed";function o(e,t){if(!e)throw new Error(r)}},96:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return a}));var r=n(0),o=r.createContext(),i=r.createContext();function a(e){var t=e.children,n=r.useState(null),a=n[0],f=n[1],s=r.useRef(!1);r.useEffect((function(){return function(){s.current=!0}}),[]);var c=r.useCallback((function(e){s.current||f(e)}),[]);return r.createElement(o.Provider,{value:a},r.createElement(i.Provider,{value:c},t))}}}]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-frontend:split_vendors~render-benefits-modal~theme-switcher~theme-switcher-listener~theme-switcher-loader', location = 'vendors~render-benefits-modal~theme-switcher~theme-switcher-listener~theme-switcher-loader.js' */
(window.atlassianWebpackJsonpe19a4f58490c3d96a3072d1e47cd0e73=window.atlassianWebpackJsonpe19a4f58490c3d96a3072d1e47cd0e73||[]).push([["vendors~render-benefits-modal~theme-switcher~theme-switcher-listener~theme-switcher-loader"],{267:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(16),i=n.n(r),c=n(0),o=n.n(c),u=["children"];function a(e){var t=function(e,t){return e(t)},n=Object(c.createContext)(e);function r(e){return(Object(c.useContext)(n)||t)(e)}return{Consumer:function(e){var t=e.children,n=r(i()(e,u));return o.a.createElement(o.a.Fragment,null,t(n))},Provider:function(e){var r=Object(c.useContext)(n),i=e.value||t,u=Object(c.useCallback)((function(e){return i(r,e)}),[r,i]);return o.a.createElement(n.Provider,{value:u},e.children)},useTheme:r}}},466:function(e,t,n){"use strict";n.d(t,"b",(function(){return u}));var r=n(267),i=Object(r.a)((function(){return{mode:"light"}})),c=i.Provider,o=i.Consumer,u=i.useTheme;t.a={Provider:c,Consumer:o}},98:function(e,t,n){"use strict";n.d(t,"b",(function(){return h})),n.d(t,"a",(function(){return l}));var r=n(5),i=n.n(r),c=n(2),o=n(21);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s=function(e,t){return{fontSize:"".concat(e/Object(o.e)(),"em"),fontStyle:"inherit",lineHeight:t/e}},h={h900:{size:35,lineHeight:40},h800:{size:29,lineHeight:32},h700:{size:24,lineHeight:28},h600:{size:20,lineHeight:24},h500:{size:16,lineHeight:20},h400:{size:14,lineHeight:16},h300:{size:12,lineHeight:16},h200:{size:12,lineHeight:16},h100:{size:11,lineHeight:16}},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a(a({},s(h.h600.size,h.h600.lineHeight)),{},{color:"var(--ds-text, ".concat(Object(c.W)(e),")"),fontWeight:"var(--ds-font-weight-medium, 500)",letterSpacing:"-0.008em",marginTop:"".concat(3.5*Object(o.f)(),"px")})}}}]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-frontend:split_vendors~theme-switcher~theme-switcher-listener~theme-switcher-loader', location = 'vendors~theme-switcher~theme-switcher-listener~theme-switcher-loader.js' */
(window.atlassianWebpackJsonpe19a4f58490c3d96a3072d1e47cd0e73=window.atlassianWebpackJsonpe19a4f58490c3d96a3072d1e47cd0e73||[]).push([["vendors~theme-switcher~theme-switcher-listener~theme-switcher-loader"],{122:function(e,t,r){"use strict";r.r(t);var o=r(231);r.d(t,"Popper",(function(){return o.a}));var n=r(13);r.d(t,"placements",(function(){return n.h}));var a=r(96);r.d(t,"Manager",(function(){return a.a}));var c=r(438);r.d(t,"Reference",(function(){return c.a}))},125:function(e,t,r){"use strict";r.d(t,"a",(function(){return v}));var o=r(5),n=r.n(o),a=r(12),c=r.n(a),s=r(0),d=r.n(s),i=r(15),l=r(469),u=r(66),b=r(142);function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){n()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v=Object(s.createContext)({id:"",radioGroupState:{},selectRadioItem:i.a});t.b=function(e){var t=e.children,r=e.id,o=Object(s.useContext)(u.a),a=o.setGroupState,i=o.getGroupState,g=Object(s.useState)((function(){return i(r)})),f=c()(g,2),h=f[0],y=f[1];return d.a.createElement(v.Provider,{value:{id:r,radioGroupState:h,selectRadioItem:function(e,t){var o=p(p({},Object(b.a)(i(r))),{},n()({},e,t));y(o),a(r,o)}}},d.a.createElement(l.a,e,t))}},126:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var o=function(e){for(var t=0,r=0;r<e.length;r++){t=(t<<5)-t+e.charCodeAt(r),t&=t}return new Uint32Array([t])[0].toString(36)}},140:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var o={light:"var(--ds-surface, #FFFFFF)",dark:"var(--ds-surface, #1B2638)"},n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"light";return o[e]}},141:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var o=r(0),n=Object(o.createContext)("")},142:function(e,t,r){"use strict";var o=r(5),n=r.n(o);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.a=function(e){return Object.keys(e||{}).reduce((function(t,r){return c(c({},t),{},n()({},r,void 0===e[r]&&void 0))}),{})}},182:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return s})),r.d(t,"c",(function(){return l}));var o=r(0),n=r.n(o),a=r(15),c=Object(o.createContext)(0),s=Object(o.createContext)({topLevelRef:{current:null},setTopLevel:a.a}),d=function(e){var t=e.children,r=e.currentLevel,a=Object(o.useContext)(s).setTopLevel;return a(r),Object(o.useEffect)((function(){return function(){setTimeout((function(){a(r-1)}),0)}}),[a,r]),n.a.createElement(c.Provider,{value:r},t)},i=function(e){var t=e.children,r=Object(o.useRef)(0),a=Object(o.useMemo)((function(){return{topLevelRef:r,setTopLevel:function(e){r.current=e}}}),[r]);return n.a.createElement(s.Provider,{value:a},t)},l=function(e){var t=e.children,r=e.isDisabled,a=void 0===r||r,s=Object(o.useContext)(c);if(a)return n.a.createElement(n.a.Fragment,null,t);var l=s>0,u=n.a.createElement(d,{currentLevel:s+1},t);return l?u:n.a.createElement(i,null,u)}},183:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,n=(o=r(0))&&o.__esModule?o:{default:o},a=r(241);const c=e=>n.default.createElement(a.Icon,Object.assign({dangerouslySetGlyph:'<svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path d="M8.292 10.293a1.009 1.009 0 000 1.419l2.939 2.965c.218.215.5.322.779.322s.556-.107.769-.322l2.93-2.955a1.01 1.01 0 000-1.419.987.987 0 00-1.406 0l-2.298 2.317-2.307-2.327a.99.99 0 00-1.406 0z" fill="currentColor" fill-rule="evenodd"/></svg>'},e));c.displayName="ChevronDownIcon";var s=c;t.default=s},22:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return n})),r.d(t,"d",(function(){return a})),r.d(t,"e",(function(){return c}));var o=["light","dark","auto"],n=["light","dark","legacy-light","legacy-dark","spacing","typography","shape","typography-adg3","typography-minor3"],a=[].concat(n,["light-new-input-border","dark-new-input-border","light-saturated-palette-changes","dark-saturated-palette-changes"]),c={colorMode:"auto",dark:"dark",light:"light",shape:void 0,spacing:"spacing",typography:void 0,UNSAFE_themeOptions:void 0};t.a={"atlassian-light":{id:"light",displayName:"Light Theme",palette:"defaultPalette",attributes:{type:"color",mode:"light"}},"atlassian-dark":{id:"dark",displayName:"Dark Theme",palette:"defaultPalette",attributes:{type:"color",mode:"dark"}},"atlassian-legacy-light":{id:"legacy-light",displayName:"Light Theme (legacy)",palette:"legacyPalette",attributes:{type:"color",mode:"light"}},"atlassian-legacy-dark":{id:"legacy-dark",displayName:"Dark Theme (legacy)",palette:"legacyPalette",attributes:{type:"color",mode:"dark"}},"atlassian-spacing":{id:"spacing",displayName:"Atlassian Spacing",palette:"spacingScale",attributes:{type:"spacing"}},"atlassian-typography-adg3":{id:"typography-adg3",displayName:"ADG3 Typography",palette:"typographyPalette",attributes:{type:"typography"}},"atlassian-shape":{id:"shape",displayName:"Atlassian Shape",palette:"shapePalette",attributes:{type:"shape"}},"atlassian-light-new-input-border":{id:"light-new-input-border",displayName:"Light Theme New Input Border",palette:"defaultPalette",override:"light",attributes:{type:"color",mode:"light"}},"atlassian-dark-new-input-border":{id:"dark-new-input-border",displayName:"Dark Theme New Input Border",palette:"defaultPalette",override:"dark",attributes:{type:"color",mode:"dark"}},"atlassian-light-saturated-palette-changes":{id:"light-saturated-palette-changes",displayName:"Light Theme Saturated Palette Change",palette:"updatedSaturatedPalette",override:"light",extends:"light",attributes:{type:"color",mode:"light",extends:"light"}},"atlassian-dark-saturated-palette-changes":{id:"dark-saturated-palette-changes",displayName:"Dark Theme Saturated Palette Change",palette:"updatedSaturatedPalette",override:"dark",extends:"dark",attributes:{type:"color",mode:"dark",extends:"dark"}},"atlassian-typography":{id:"typography",displayName:"Atlassian Typography (Minor Second)",palette:"typographyPalette",attributes:{type:"typography"}},"atlassian-typography-minor3":{id:"typography-minor3",displayName:"Atlassian Typography (Minor Third)",palette:"typographyPalette",attributes:{type:"typography"}}}},231:function(e,t,r){"use strict";r.d(t,"a",(function(){return g}));var o=r(17),n=r.n(o),a=r(12),c=r.n(a),s=r(0),d=r.n(s),i=r(467),l=[{name:"flip",options:{flipVariations:!1,padding:5,boundary:"clippingParents",rootBoundary:"viewport"}},{name:"preventOverflow",options:{padding:5,rootBoundary:"document"}}];function u(){return null}var b=[0,8];function g(e){var t=e.children,r=void 0===t?u:t,o=e.offset,a=void 0===o?b:o,g=e.placement,p=void 0===g?"bottom-start":g,v=e.referenceElement,f=void 0===v?void 0:v,h=e.modifiers,y=e.strategy,k=void 0===y?"fixed":y,m=c()(a,2),j=m[0],M=m[1],N=Object(s.useMemo)((function(){return[].concat(l,[{name:"offset",options:{offset:[j,M]}}])}),[j,M]),I=Object(s.useMemo)((function(){return null==h?N:[].concat(n()(N),n()(h))}),[N,h]);return d.a.createElement(i.a,{modifiers:I,placement:p,strategy:k,referenceElement:f},r)}},232:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.bind=void 0,t.bind=function(e,t){var r=t.type,o=t.listener,n=t.options;return e.addEventListener(r,o,n),function(){e.removeEventListener(r,o,n)}}},233:function(e,t,r){"use strict";(function(e){var o=r(14),n=r.n(o),a=r(12),c=r.n(a),s=r(16),d=r.n(s),i=r(0),l=r.n(i),u=r(15),b=r(68),g=r(277),p=r(19),v=r(270),f=r(269),h=r(65),y=["id","isSelected","defaultSelected","onClick","shouldTitleWrap","shouldDescriptionWrap"];t.a=function(e){var t=e.id,r=e.isSelected,o=e.defaultSelected,a=e.onClick,s=void 0===a?u.a:a,k=e.shouldTitleWrap,m=void 0===k||k,j=e.shouldDescriptionWrap,M=void 0===j||j,N=d()(e,y);var I=Object(f.a)({id:t,isSelected:r,defaultSelected:o}),D=c()(I,2),x=D[0],O=D[1],w=Object(i.useCallback)((function(e){O((function(e){return!e})),s(e)}),[s,O]),S=Object(h.a)();return l.a.createElement(b.a.Provider,{value:"none"},l.a.createElement(g.a,n()({id:t,onClick:w,role:"menuitemcheckbox","aria-checked":x,shouldTitleWrap:m,shouldDescriptionWrap:M,iconBefore:l.a.createElement(v.a,{checked:x}),isSelected:x&&Object(p.a)("platform.design-system-team.menu-selected-state-change_0see9"),ref:S},N)))}}).call(this,r(37))},234:function(e,t,r){"use strict";(function(e){var o=r(14),n=r.n(o),a=r(12),c=r.n(a),s=r(16),d=r.n(s),i=r(0),l=r.n(i),u=r(15),b=r(68),g=r(277),p=r(19),v=r(273),f=r(271),h=r(65),y=r(272),k=["id","isSelected","defaultSelected","onClick","shouldTitleWrap","shouldDescriptionWrap"];t.a=function(e){var t=e.id,r=e.isSelected,o=e.defaultSelected,a=e.onClick,s=void 0===a?u.a:a,m=e.shouldTitleWrap,j=void 0===m||m,M=e.shouldDescriptionWrap,N=void 0===M||M,I=d()(e,k);var D=Object(f.a)({id:t,isSelected:r,defaultSelected:o}),x=c()(D,2),O=x[0],w=x[1],S=Object(i.useCallback)((function(e){w((function(e){return!e})),s(e)}),[s,w]),A=Object(h.a)();return l.a.createElement(b.a.Provider,{value:"none"},l.a.createElement(g.a,n()({id:t,onClick:S,role:Object(y.a)()?"radio":"menuitemradio","aria-checked":O,shouldTitleWrap:j,shouldDescriptionWrap:N,iconBefore:l.a.createElement(v.a,{checked:O}),isSelected:O&&Object(p.a)("platform.design-system-team.menu-selected-state-change_0see9"),ref:A},I)))}}).call(this,r(37))},235:function(e,t,r){"use strict";(function(e){function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.ThemeItem=function(t){var r=t.icon,o=t.label,c=t.onClick,s=t.isSelected,d=(0,n.useRef)(null);return(0,n.useEffect)((function(){d.current&&s&&d.current.focus()}),[s]),n.default.createElement("li",{role:"presentation"},n.default.createElement(a.DropdownItem,{className:s?"theme-selected":null,ref:d,key:o,onClick:function(t){var r,o;null===(r=e)||void 0===r||null===(o=r.$)||void 0===o||o.call(r,"a.aui-dropdown2-trigger.active").trigger("aui-button-invoke"),null==c||c(t)},elemBefore:r&&n.default.createElement("img",{src:r,alt:"".concat(o," theme")}),onMouseOverCapture:function(e){e.target.focus(),e.stopPropagation()}},o))};var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=o(e)&&"function"!=typeof e)return{default:e};var r=c(t);if(r&&r.has(e))return r.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&Object.prototype.hasOwnProperty.call(e,s)){var d=a?Object.getOwnPropertyDescriptor(e,s):null;d&&(d.get||d.set)?Object.defineProperty(n,s,d):n[s]=e[s]}return n.default=e,r&&r.set(e,n),n}(r(0)),a=r(240);function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(c=function(e){return e?r:t})(e)}}).call(this,r(112))},236:function(e,t,r){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.setLocalStorageTheme=t.loadTheme=t.getDefaultThemes=void 0;var n=s(r(446)),a=s(r(447)),c=s(r(448));function s(e){return e&&e.__esModule?e:{default:e}}function d(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */d=function(){return t};var e,t={},r=Object.prototype,n=r.hasOwnProperty,a=Object.defineProperty||function(e,t,r){e[t]=r.value},c="function"==typeof Symbol?Symbol:{},s=c.iterator||"@@iterator",i=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function b(e,t,r,o){var n=t&&t.prototype instanceof y?t:y,c=Object.create(n.prototype),s=new z(o||[]);return a(c,"_invoke",{value:O(e,r,s)}),c}function g(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=b;var p="suspendedStart",v="executing",f="completed",h={};function y(){}function k(){}function m(){}var j={};u(j,s,(function(){return this}));var M=Object.getPrototypeOf,N=M&&M(M(C([])));N&&N!==r&&n.call(N,s)&&(j=N);var I=m.prototype=y.prototype=Object.create(j);function D(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){function r(a,c,s,d){var i=g(e[a],e,c);if("throw"!==i.type){var l=i.arg,u=l.value;return u&&"object"==o(u)&&n.call(u,"__await")?t.resolve(u.__await).then((function(e){r("next",e,s,d)}),(function(e){r("throw",e,s,d)})):t.resolve(u).then((function(e){l.value=e,s(l)}),(function(e){return r("throw",e,s,d)}))}d(i.arg)}var c;a(this,"_invoke",{value:function(e,o){function n(){return new t((function(t,n){r(e,o,t,n)}))}return c=c?c.then(n,n):n()}})}function O(t,r,o){var n=p;return function(a,c){if(n===v)throw new Error("Generator is already running");if(n===f){if("throw"===a)throw c;return{value:e,done:!0}}for(o.method=a,o.arg=c;;){var s=o.delegate;if(s){var d=w(s,o);if(d){if(d===h)continue;return d}}if("next"===o.method)o.sent=o._sent=o.arg;else if("throw"===o.method){if(n===p)throw n=f,o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);n=v;var i=g(t,r,o);if("normal"===i.type){if(n=o.done?f:"suspendedYield",i.arg===h)continue;return{value:i.arg,done:o.done}}"throw"===i.type&&(n=f,o.method="throw",o.arg=i.arg)}}}function w(t,r){var o=r.method,n=t.iterator[o];if(n===e)return r.delegate=null,"throw"===o&&t.iterator.return&&(r.method="return",r.arg=e,w(t,r),"throw"===r.method)||"return"!==o&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+o+"' method")),h;var a=g(n,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,h;var c=a.arg;return c?c.done?(r[t.resultName]=c.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,h):c:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,h)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function A(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function z(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function C(t){if(t||""===t){var r=t[s];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,c=function r(){for(;++a<t.length;)if(n.call(t,a))return r.value=t[a],r.done=!1,r;return r.value=e,r.done=!0,r};return c.next=c}}throw new TypeError(o(t)+" is not iterable")}return k.prototype=m,a(I,"constructor",{value:m,configurable:!0}),a(m,"constructor",{value:k,configurable:!0}),k.displayName=u(m,l,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===k||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,u(e,l,"GeneratorFunction")),e.prototype=Object.create(I),e},t.awrap=function(e){return{__await:e}},D(x.prototype),u(x.prototype,i,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,o,n,a){void 0===a&&(a=Promise);var c=new x(b(e,r,o,n),a);return t.isGeneratorFunction(r)?c:c.next().then((function(e){return e.done?e.value:c.next()}))},D(I),u(I,l,"Generator"),u(I,s,(function(){return this})),u(I,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var o in t)r.push(o);return r.reverse(),function e(){for(;r.length;){var o=r.pop();if(o in t)return e.value=o,e.done=!1,e}return e.done=!0,e}},t.values=C,z.prototype={constructor:z,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(A),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(o,n){return s.type="throw",s.arg=t,r.next=o,n&&(r.method="next",r.arg=e),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var c=this.tryEntries[a],s=c.completion;if("root"===c.tryLoc)return o("end");if(c.tryLoc<=this.prev){var d=n.call(c,"catchLoc"),i=n.call(c,"finallyLoc");if(d&&i){if(this.prev<c.catchLoc)return o(c.catchLoc,!0);if(this.prev<c.finallyLoc)return o(c.finallyLoc)}else if(d){if(this.prev<c.catchLoc)return o(c.catchLoc,!0)}else{if(!i)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return o(c.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var c=a?a.completion:{};return c.type=e,c.arg=t,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),A(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var o=r.completion;if("throw"===o.type){var n=o.arg;A(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,o){return this.delegate={iterator:C(t),resultName:r,nextLoc:o},"next"===this.method&&(this.arg=e),h}},t}function i(e,t,r,o,n,a,c){try{var s=e[a](c),d=s.value}catch(e){return void r(e)}s.done?t(d):Promise.resolve(d).then(o,n)}var l=function(){var e,t=(e=d().mark((function e(t){var r,o,n,a,c,s,i;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.colorMode,a=t.dark,c=void 0===a?"dark":a,s=t.light,i=void 0===s?"light":s,document.body.classList.add("aui-theme-design-tokens"),e.next=4,null===(r=window.WRM)||void 0===r?void 0:r.require("wr!com.atlassian.auiplugin:design-tokens-api");case 4:return e.next=6,null===(o=window.AJS)||void 0===o||null===(o=o.DesignTokens)||void 0===o?void 0:o.setGlobalTheme({colorMode:n,light:i,dark:c});case 6:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(o,n){var a=e.apply(t,r);function c(e){i(a,o,n,c,s,"next",e)}function s(e){i(a,o,n,c,s,"throw",e)}c(void 0)}))});return function(e){return t.apply(this,arguments)}}(),u={light:{icon:c.default,label:"Light",onClick:function(){l({colorMode:"light",light:"light"})}},dark:{icon:a.default,label:"Dark",onClick:function(){l({colorMode:"dark",dark:"dark"})}},auto:{icon:n.default,label:"Match system",onClick:function(){l({colorMode:"auto",light:"light",dark:"dark"})}}},b=(t.getDefaultThemes=function(){return u},t.loadTheme=function(e){var t,r=e.allThemes,o=void 0===r?u:r,n=e.theme,a=e.fallback,c=void 0===a?"auto":a,s=e.useLocalStorage;if(s&&(n=b()),!n||null==o||!o[n])return c;var d=o[n];return s&&(null==d||null===(t=d.onClick)||void 0===t||t.call(d)),n},function(){return localStorage.getItem("theme")});t.setLocalStorageTheme=function(e){return localStorage.setItem("theme",e)}},237:function(e,t,r){"use strict";(function(e){r(75);var o=r(84),n=r(26);t.a=function(e,t){var r=o.a[e];return r||(r=n.e),t?"var(".concat(r,", ").concat(t,")"):"var(".concat(r,")")}}).call(this,r(37))},238:function(e,t,r){"use strict";(function(e){r(75);var o=r(84);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=o.a[e],n=t;return"undefined"==typeof window?n:n=(n=window.getComputedStyle(document.documentElement).getPropertyValue(r).trim())||t}}).call(this,r(37))},239:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return u})),r.d(t,"c",(function(){return b}));var o=r(12),n=r.n(o),a=r(17),c=r.n(a),s=r(84),d=r(26),i=r(126);function l(e,t){var r=JSON.stringify(e),o=Object(i.a)(r),n=[];return("auto"===t?["light","dark"]:[t]).forEach((function(e){var t=document.head.querySelector("style[".concat(d.c,'="').concat(o,'"][').concat(d.d,'="').concat(e,'"]'));t?document.head.appendChild(t):n.push(e)})),n}function u(e){var t=c()(Array.from(document.head.querySelectorAll("style[".concat(d.c,"][").concat(d.d,"]"))));t.length<e||t.slice(0,t.length-(e-1)).forEach((function(e){return e.remove()}))}function b(e,t){return Object.entries(e).reduce((function(e,r){var o=n()(r,2),a=o[0],c=o[1],d=s.a[a];return d?"".concat(e,"\n  ").concat(d,": ").concat("string"==typeof c?c:t[c],";"):e}),"")}},240:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return St})),r.d(t,"DropdownItemGroup",(function(){return zt})),r.d(t,"DropdownItem",(function(){return Rt})),r.d(t,"DropdownItemCheckbox",(function(){return Yt.a})),r.d(t,"DropdownItemCheckboxGroup",(function(){return _t})),r.d(t,"DropdownItemRadio",(function(){return Zt.a})),r.d(t,"DropdownItemRadioGroup",(function(){return Vt.b}));var o=r(14),n=r.n(o),a=r(5),c=r.n(a),s=r(16),d=r.n(s),i=r(12),l=r.n(i),u=r(0),b=r.n(u),g=r(54),p=r(15),v=r(466),f=r(3),h=r(184),y=r(49),k=r(506),m=r(38),j=r(19),M=r(2);function N(e){e.preventDefault(),e.stopPropagation()}function I(e){9!==e.keyCode&&N(e)}var D={onMouseDownCapture:N,onMouseUpCapture:N,onKeyDownCapture:I,onKeyUpCapture:I,onTouchStartCapture:N,onTouchEndCapture:N,onPointerDownCapture:N,onPointerUpCapture:N,onClickCapture:N,onClick:N},x={};var O=r(21),w={background:{default:{default:{light:"var(--ds-background-neutral, ".concat(M.w,")"),dark:"var(--ds-background-neutral, ".concat(M.o,")")},hover:{light:"var(--ds-background-neutral-hovered, ".concat(M.z,")"),dark:"var(--ds-background-neutral-hovered, ".concat(M.n,")")},active:{light:"var(--ds-background-neutral-pressed, ".concat("rgba(179, 212, 255, 0.6)",")"),dark:"var(--ds-background-neutral-pressed, ".concat(M.g,")")},disabled:{light:"var(--ds-background-disabled, ".concat(M.w,")"),dark:"var(--ds-background-disabled, ".concat(M.o,")")},selected:{light:"var(--ds-background-selected, ".concat(M.H,")"),dark:"var(--ds-background-selected, ".concat(M.h,")")},focusSelected:{light:"var(--ds-background-selected, ".concat(M.H,")"),dark:"var(--ds-background-selected, ".concat(M.h,")")}},primary:{default:{light:"var(--ds-background-brand-bold, ".concat(M.d,")"),dark:"var(--ds-background-brand-bold, ".concat(M.a,")")},hover:{light:"var(--ds-background-brand-bold-hovered, ".concat(M.c,")"),dark:"var(--ds-background-brand-bold-hovered, ".concat(M.g,")")},active:{light:"var(--ds-background-brand-bold-pressed, ".concat(M.f,")"),dark:"var(--ds-background-brand-bold-pressed, ".concat(M.b,")")},disabled:{light:"var(--ds-background-disabled, ".concat(M.w,")"),dark:"var(--ds-background-disabled, ".concat(M.o,")")},selected:{light:"var(--ds-background-selected, ".concat(M.H,")"),dark:"var(--ds-background-selected, ".concat(M.h,")")},focusSelected:{light:"var(--ds-background-selected, ".concat(M.H,")"),dark:"var(--ds-background-selected, ".concat(M.h,")")}},warning:{default:{light:"var(--ds-background-warning-bold, ".concat(M.U,")"),dark:"var(--ds-background-warning-bold, ".concat(M.U,")")},hover:{light:"var(--ds-background-warning-bold-hovered, ".concat(M.T,")"),dark:"var(--ds-background-warning-bold-hovered, ".concat(M.T,")")},active:{light:"var(--ds-background-warning-bold-pressed, ".concat(M.V,")"),dark:"var(--ds-background-warning-bold-pressed, ".concat(M.V,")")},disabled:{light:"var(--ds-background-disabled, ".concat(M.w,")"),dark:"var(--ds-background-disabled, ".concat(M.o,")")},selected:{light:"var(--ds-background-selected, ".concat(M.V,")"),dark:"var(--ds-background-selected, ".concat(M.V,")")},focusSelected:{light:"var(--ds-background-selected, ".concat(M.V,")"),dark:"var(--ds-background-selected, ".concat(M.V,")")}},danger:{default:{light:"var(--ds-background-danger-bold, ".concat(M.R,")"),dark:"var(--ds-background-danger-bold, ".concat(M.R,")")},hover:{light:"var(--ds-background-danger-bold-hovered, ".concat(M.Q,")"),dark:"var(--ds-background-danger-bold-hovered, ".concat(M.Q,")")},active:{light:"var(--ds-background-danger-bold-pressed, ".concat(M.S,")"),dark:"var(--ds-background-danger-bold-pressed, ".concat(M.S,")")},disabled:{light:"var(--ds-background-disabled, ".concat(M.w,")"),dark:"var(--ds-background-disabled, ".concat(M.o,")")},selected:{light:"var(--ds-background-selected, ".concat(M.S,")"),dark:"var(--ds-background-selected, ".concat(M.S,")")},focusSelected:{light:"var(--ds-background-selected, ".concat(M.S,")"),dark:"var(--ds-background-selected, ".concat(M.S,")")}},link:{default:{light:"var(--ds-background-neutral-subtle, none)",dark:"var(--ds-background-neutral-subtle, none)"},selected:{light:"var(--ds-background-selected, ".concat(M.H,")"),dark:"var(--ds-background-selected, ".concat(M.u,")")},focusSelected:{light:"var(--ds-background-selected, ".concat(M.H,")"),dark:"var(--ds-background-selected, ".concat(M.u,")")}},subtle:{default:{light:"var(--ds-background-neutral-subtle, none)",dark:"var(--ds-background-neutral-subtle, none)"},hover:{light:"var(--ds-background-neutral-subtle-hovered, ".concat(M.z,")"),dark:"var(--ds-background-neutral-subtle-hovered, ".concat(M.n,")")},active:{light:"var(--ds-background-neutral-subtle-pressed, ".concat("rgba(179, 212, 255, 0.6)",")"),dark:"var(--ds-background-neutral-subtle-pressed, ".concat(M.g,")")},disabled:{light:"var(--ds-background-neutral-subtle, none)",dark:"var(--ds-background-neutral-subtle, none)"},selected:{light:"var(--ds-background-selected, ".concat(M.H,")"),dark:"var(--ds-background-selected, ".concat(M.h,")")},focusSelected:{light:"var(--ds-background-selected, ".concat(M.H,")"),dark:"var(--ds-background-selected, ".concat(M.h,")")}},"subtle-link":{default:{light:"var(--ds-background-neutral-subtle, none)",dark:"var(--ds-background-neutral-subtle, none)"},selected:{light:"var(--ds-background-selected, ".concat(M.H,")"),dark:"var(--ds-background-selected, ".concat(M.u,")")},focusSelected:{light:"var(--ds-background-selected, ".concat(M.H,")"),dark:"var(--ds-background-selected, ".concat(M.u,")")}}},color:{default:{default:{light:"var(--ds-text, ".concat(M.D,")"),dark:"var(--ds-text, ".concat(M.l,")")},active:{light:"var(--ds-text, ".concat(M.d,")"),dark:"var(--ds-text, ".concat(M.d,")")},disabled:{light:"var(--ds-text-disabled, ".concat(M.G,")"),dark:"var(--ds-text-disabled, ".concat(M.j,")")},selected:{light:"var(--ds-text-selected, ".concat(M.u,")"),dark:"var(--ds-text-selected, ".concat(M.l,")")},focusSelected:{light:"var(--ds-text-selected, ".concat(M.u,")"),dark:"var(--ds-text-selected, ".concat(M.l,")")}},primary:{default:{light:"var(--ds-text-inverse, ".concat(M.q,")"),dark:"var(--ds-text-inverse, ".concat(M.j,")")},disabled:{light:"var(--ds-text-disabled, ".concat(M.G,")"),dark:"var(--ds-text-disabled, ".concat(M.j,")")},selected:{light:"var(--ds-text-selected, ".concat(M.u,")"),dark:"var(--ds-text-selected, ".concat(M.l,")")},focusSelected:{light:"var(--ds-text-selected, ".concat(M.u,")"),dark:"var(--ds-text-selected, ".concat(M.l,")")}},warning:{default:{light:"var(--ds-text-warning-inverse, ".concat(M.I,")"),dark:"var(--ds-text-warning-inverse, ".concat(M.I,")")},disabled:{light:"var(--ds-text-disabled, ".concat(M.G,")"),dark:"var(--ds-text-disabled, ".concat(M.j,")")},selected:{light:"var(--ds-text-selected, ".concat(M.I,")"),dark:"var(--ds-text-selected, ".concat(M.I,")")},focusSelected:{light:"var(--ds-text-selected, ".concat(M.I,")"),dark:"var(--ds-text-selected, ".concat(M.I,")")}},danger:{default:{light:"var(--ds-text-inverse, ".concat(M.q,")"),dark:"var(--ds-text-inverse, ".concat(M.q,")")},disabled:{light:"var(--ds-text-disabled, ".concat(M.G,")"),dark:"var(--ds-text-disabled, ".concat(M.j,")")},selected:{light:"var(--ds-text-selected, ".concat(M.q,")"),dark:"var(--ds-text-selected, ".concat(M.q,")")},focusSelected:{light:"var(--ds-text-selected, ".concat(M.q,")"),dark:"var(--ds-text-selected, ".concat(M.q,")")}},link:{default:{light:"var(--ds-link, ".concat(M.d,")"),dark:"var(--ds-link, ".concat(M.a,")")},hover:{light:"var(--ds-link, ".concat(M.c,")"),dark:"var(--ds-link, ".concat(M.g,")")},active:{light:"var(--ds-link-pressed, ".concat(M.f,")"),dark:"var(--ds-link-pressed, ".concat(M.b,")")},disabled:{light:"var(--ds-text-disabled, ".concat(M.G,")"),dark:"var(--ds-text-disabled, ".concat(M.i,")")},selected:{light:"var(--ds-text-selected, ".concat(M.u,")"),dark:"var(--ds-text-selected, ".concat(M.H,")")},focusSelected:{light:"var(--ds-text-selected, ".concat(M.u,")"),dark:"var(--ds-text-selected, ".concat(M.H,")")}},subtle:{default:{light:"var(--ds-text, ".concat(M.D,")"),dark:"var(--ds-text, ".concat(M.l,")")},active:{light:"var(--ds-text, ".concat(M.d,")"),dark:"var(--ds-text, ".concat(M.d,")")},disabled:{light:"var(--ds-text-disabled, ".concat(M.G,")"),dark:"var(--ds-text-disabled, ".concat(M.i,")")},selected:{light:"var(--ds-text-selected, ".concat(M.u,")"),dark:"var(--ds-text-selected, ".concat(M.l,")")},focusSelected:{light:"var(--ds-text-selected, ".concat(M.u,")"),dark:"var(--ds-text-selected, ".concat(M.l,")")}},"subtle-link":{default:{light:"var(--ds-text-subtle, ".concat(M.v,")"),dark:"var(--ds-text-subtle, ".concat(M.l,")")},hover:{light:"var(--ds-text-subtle, ".concat(M.J,")"),dark:"var(--ds-text-subtle, ".concat(M.e,")")},active:{light:"var(--ds-text, ".concat(M.B,")"),dark:"var(--ds-text, ".concat(M.k,")")},disabled:{light:"var(--ds-text-disabled, ".concat(M.G,")"),dark:"var(--ds-text-disabled, ".concat(M.i,")")},selected:{light:"var(--ds-text-selected, ".concat(M.u,")"),dark:"var(--ds-text-selected, ".concat(M.l,")")},focusSelected:{light:"var(--ds-text-selected, ".concat(M.u,")"),dark:"var(--ds-text-selected, ".concat(M.l,")")}}}};function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function A(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var z=Object(O.f)(),C=Object(O.e)(),L={default:"".concat(4*z/C,"em"),compact:"".concat(3*z/C,"em"),none:"auto"},T={default:L.default,compact:L.compact,none:"inherit"},U={default:"0 ".concat(z+z/4,"px"),compact:"0 ".concat(z+z/4,"px"),none:"0"},E={compact:"0 ".concat(z/4,"px"),default:"0 ".concat(z/4,"px"),none:"0"},F={default:"middle",compact:"middle",none:"baseline"},Q={content:"0 ".concat(z/4,"px"),icon:"0 ".concat(z/4,"px")};function P(e){var t=e.group,r=e.key,o=e.mode;return(t[r]||t.default)[o]}function B(e){var t=e.appearance,r=e.key,o=e.mode;return{background:P({group:w.background[t],key:r,mode:o}),color:"".concat(P({group:w.color[t],key:r,mode:o})," !important")}}function G(e){var t=e.spacing;return Object(f.css)({display:"flex",margin:"none"===t?0:Q.icon,flexGrow:0,flexShrink:0,alignSelf:"center",fontSize:0,lineHeight:0,userSelect:"none"})}function R(e){var t=e.spacing;return Object(f.css)({margin:"none"===t?0:Q.content,flexGrow:1,flexShrink:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"})}var Y={position:"absolute",left:0,top:0,right:0,bottom:0,display:"flex",justifyContent:"center",alignItems:"center"},W=r(509),_=function(e){return e&&Object(u.isValidElement)(e)&&e.type===W.a},Z=["analyticsContext","appearance","autoFocus","buttonCss","children","className","href","component","iconAfter","iconBefore","interactionName","isDisabled","isSelected","onBlur","onClick","onFocus","onMouseDown","overlay","shouldFitContainer","spacing","tabIndex","type","testId"],V={"> *":{pointerEvents:"none"}},H=Object(f.css)({marginLeft:"var(--ds-space-negative-025, -2px)"}),K=Object(f.css)({marginRight:"var(--ds-space-negative-025, -2px)"}),J=function(e,t){return Object(j.a)("platform.design-system-team.icon-button-spacing-fix_o1zc5")&&e&&!_(e)?t:null},X=b.a.forwardRef((function(e,t){var r=e.analyticsContext,o=e.appearance,a=void 0===o?"default":o,c=e.autoFocus,s=void 0!==c&&c,i=e.buttonCss,l=e.children,b=e.className,g=e.href,v=e.component,N=void 0===v?g?"a":"button":v,I=e.iconAfter,O=e.iconBefore,w=e.interactionName,S=e.isDisabled,A=void 0!==S&&S,z=e.isSelected,C=void 0!==z&&z,L=e.onBlur,T=e.onClick,U=void 0===T?p.a:T,E=e.onFocus,F=e.onMouseDown,Q=void 0===F?p.a:F,P=e.overlay,B=(e.shouldFitContainer,e.spacing),W=void 0===B?"default":B,X=e.tabIndex,q=void 0===X?0:X,$=e.type,ee=void 0===$?g?void 0:"button":$,te=e.testId,re=d()(e,Z),oe=Object(u.useRef)(),ne=Object(u.useCallback)((function(e){oe.current=e,null!=t&&("function"!=typeof t?t.current=e:t(e))}),[oe,t]);Object(y.a)(oe,s);var ae=Object(u.useContext)(m.a),ce=Object(u.useCallback)((function(e,t){ae&&ae.tracePress(w,e.timeStamp),U(e,t)}),[U,ae,w]),se=Object(h.a)({fn:ce,action:"clicked",componentName:"button",packageName:"@atlaskit/button",packageVersion:"16.10.2",analyticsData:r}),de=Object(u.useCallback)((function(e){e.preventDefault(),Q(e)}),[Q]);Object(u.useEffect)((function(){var e=oe.current;A&&e&&e===document.activeElement&&e.blur()}),[A]);var ie=Boolean(P),le=Object(f.css)(function(e){var t=e.hasOverlay;return Object(f.css)({opacity:t?0:1,transition:"opacity 0.3s"})}({hasOverlay:ie})),ue=!A&&!ie,be={};return(C||A||"warning"===a)&&(be={"[data-theme] & circle":{stroke:"".concat(C||A?"var(--ds-icon-subtle, ".concat(M.D,")"):"var(--ds-icon-warning-inverse, ".concat(M.D,")")," !important")}}),Object(f.jsx)(k.a,null,Object(f.jsx)(N,n()({},re,{ref:ne,className:b,css:[i,ue?null:V],"data-has-overlay":!!ie||void 0,"data-testid":te,disabled:A,href:ue?g:void 0,onBlur:L,onClick:se,onFocus:E,onMouseDown:de,tabIndex:A?-1:q,type:ee},{isInteractive:ue}.isInteractive?x:D),O?Object(f.jsx)("span",{css:[le,G({spacing:W}),J(l,H)]},O):null,!Object(j.a)("platform.design-system-team.icon-button-spacing-fix_o1zc5")&&l?Object(f.jsx)("span",{css:[le,R({spacing:W})]},l):null,Object(j.a)("platform.design-system-team.icon-button-spacing-fix_o1zc5")&&function(e,t){return _(e)?e:e?Object(f.jsx)("span",{css:t},e):null}(l,[le,R({spacing:W})]),I?Object(f.jsx)("span",{css:[le,G({spacing:W}),J(l,K)]},I):null,P?Object(f.jsx)("span",{css:[Y,be]},P):null))}));var q=["appearance","children","iconBefore","iconAfter","isSelected","onMouseDown","onMouseUp","shouldFitContainer","spacing"],$="undefined"!=typeof navigator&&navigator.userAgent.toLowerCase().indexOf("firefox")>-1,ee=b.a.memo(b.a.forwardRef((function(e,t){var r=e.appearance,o=void 0===r?"default":r,a=e.children,c=e.iconBefore,s=e.iconAfter,i=e.isSelected,g=void 0!==i&&i,f=e.onMouseDown,h=void 0===f?p.a:f,y=e.onMouseUp,k=void 0===y?p.a:y,m=e.shouldFitContainer,M=void 0!==m&&m,N=e.spacing,I=void 0===N?"default":N,D=d()(e,q),x=Object(v.b)().mode,O=function(e){var t=e.children,r=e.iconBefore,o=e.iconAfter;return!(!Object(j.a)("platform.design-system-team.icon-button-spacing-fix_o1zc5")||!_(t))||!t&&(!(!r||o)||!(r||!o))}({children:a,iconBefore:c,iconAfter:s}),w=Object(u.useState)(!1),S=l()(w,2),z=S[0],C=S[1],Q=Object(u.useCallback)((function(e){h(e),$&&C(!0)}),[h,C]),P=Object(u.useCallback)((function(e){k(e),$&&C(!1)}),[k,C]),G=Object(u.useMemo)((function(){return function(e){var t=e.appearance,r=e.spacing,o=e.mode,n=e.isSelected,a=e.shouldFitContainer,c=e.isOnlySingleIcon,s=B({appearance:t,key:n?"selected":"default",mode:o});return A(A({alignItems:"baseline",borderWidth:0,borderRadius:"var(--ds-border-radius, 3px)",boxSizing:"border-box",display:"inline-flex",fontSize:"inherit",fontStyle:"normal",fontFamily:"inherit",fontWeight:500,maxWidth:"100%",position:"relative",textAlign:"center",textDecoration:"none",transition:"background 0.1s ease-out, box-shadow 0.15s cubic-bezier(0.47, 0.03, 0.49, 1.38)",whiteSpace:"nowrap"},s),{},{cursor:"pointer",height:L[r],lineHeight:T[r],padding:c?E[r]:U[r],verticalAlign:F[r],width:a?"100%":"auto",justifyContent:"center","&:visited":A({},s),"&:hover":A(A({},B({appearance:t,key:n?"selected":"hover",mode:o})),{},{textDecoration:n||"link"!==t&&"subtle-link"!==t?"inherit":"underline",transitionDuration:"0s, 0.15s"}),"&:active":A(A({},B({appearance:t,key:n?"selected":"active",mode:o})),{},{transitionDuration:"0s, 0s"}),'&[data-firefox-is-active="true"]':A(A({},B({appearance:t,key:n?"selected":"active",mode:o})),{},{transitionDuration:"0s, 0s"}),"&[disabled]":A(A({},B({appearance:t,key:"disabled",mode:o})),{},{cursor:"not-allowed",textDecoration:"none"}),'&[data-has-overlay="true"]':{cursor:"default",textDecoration:"none"},'&[data-has-overlay="true"]:not([disabled]):hover, &[data-has-overlay="true"]:not([disabled]):active':A({},B({appearance:t,key:n?"selected":"default",mode:o})),"&::-moz-focus-inner":{border:0,margin:0,padding:0}})}({appearance:o,spacing:I,mode:x,isSelected:g,shouldFitContainer:M,isOnlySingleIcon:O})}),[o,I,x,g,M,O]);return b.a.createElement(X,n()({},D,{ref:t,appearance:o,buttonCss:G,children:a,"data-firefox-is-active":!!z||void 0,iconAfter:s,iconBefore:c,isSelected:g,onMouseDown:Q,onMouseUp:P,spacing:I}))})));ee.displayName="Button";var te=ee,re=r(17),oe=r.n(re),ne=r(56),ae=r(275),ce=["children","backgroundColor","padding","paddingBlock","paddingBlockStart","paddingBlockEnd","paddingInline","paddingInlineStart","paddingInlineEnd","isDisabled","type","testId","xcss"],se={outlineColor:"color.border.focused",outlineWidth:"border.width.outline",outlineStyle:"solid",outlineOffset:"space.025"},de=Object(ne.b)({":focus-visible":se,"@supports not selector(*:focus-visible)":{":focus":se},"@media screen and (forced-colors: active), screen and (-ms-high-contrast: active)":{":focus-visible":{outline:"1px solid"}}}),ie=Object(u.forwardRef)((function(e,t){var r=e.children,o=e.backgroundColor,a=e.padding,c=e.paddingBlock,s=e.paddingBlockStart,i=e.paddingBlockEnd,l=e.paddingInline,u=e.paddingInlineStart,g=e.paddingInlineEnd,p=e.isDisabled,v=e.type,f=void 0===v?"button":v,h=e.testId,y=e.xcss,k=d()(e,ce),m=[Object(ne.b)({cursor:p?"not-allowed":"pointer"}),de];return m=Array.isArray(y)?[].concat(oe()(m),oe()(y)):[].concat(oe()(m),[y]),b.a.createElement(ae.a,n()({},k,{as:"button",ref:t,testId:h,type:f,backgroundColor:o,padding:a,paddingBlock:c,paddingBlockStart:s,paddingBlockEnd:i,paddingInline:l,paddingInlineStart:u,paddingInlineEnd:g,xcss:m,disabled:p}),r)})),le=Object(ne.b)({flexGrow:1,flexShrink:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}),ue=Object(ne.b)({display:"flex",flexGrow:0,flexShrink:0,alignSelf:"center",fontSize:0,lineHeight:0,userSelect:"none"}),be=Object(ne.b)({transition:"opacity 0.3s"}),ge=Object(ne.b)({opacity:0}),pe=function(e){var t=e.children,r=e.type,o=void 0===r?"text":r,n=e.hasOverlay;return b.a.createElement(ae.a,{as:"span",xcss:[be].concat(oe()("text"===o?[le]:[ue]),oe()(n?[ge]:[]))},t)};function ve(e){e.preventDefault(),e.stopPropagation()}function fe(e){9!==e.keyCode&&ve(e)}var he={background:{default:{default:"var(--ds-background-neutral, ".concat(M.w,")"),hover:"color.background.neutral.hovered",active:"color.background.neutral.pressed",disabled:"var(--ds-background-disabled, ".concat(M.w,")"),selected:"var(--ds-background-selected, ".concat(M.H,")")},primary:{default:"color.background.brand.bold",hover:"color.background.brand.bold.hovered",active:"color.background.brand.bold.pressed",disabled:"var(--ds-background-disabled, ".concat(M.w,")"),selected:"var(--ds-background-selected, ".concat(M.H,")")},warning:{default:"color.background.warning.bold",hover:"color.background.warning.bold.hovered",active:"color.background.warning.bold.pressed",disabled:"var(--ds-background-disabled, ".concat(M.w,")"),selected:"var(--ds-background-selected, ".concat(M.V,")")},danger:{default:"color.background.danger.bold",hover:"color.background.danger.bold.hovered",active:"color.background.danger.bold.pressed",disabled:"var(--ds-background-disabled, ".concat(M.w,")"),selected:"var(--ds-background-selected, ".concat(M.S,")")},link:{default:"color.background.neutral.subtle",selected:"var(--ds-background-selected, ".concat(M.H,")")},subtle:{default:"color.background.neutral.subtle",hover:"color.background.neutral.subtle.hovered",active:"color.background.neutral.subtle.pressed",disabled:"var(--ds-background-neutral-subtle, none)",selected:"var(--ds-background-selected, ".concat(M.H,")")},"subtle-link":{default:"color.background.neutral.subtle",selected:"var(--ds-background-selected, ".concat(M.H,")")}},color:{default:{default:"color.text",active:"color.text",disabled:"color.text.disabled",selected:"var(--ds-text-selected, ".concat(M.u,")")},primary:{default:"color.text.inverse",disabled:"color.text.disabled",selected:"var(--ds-text-selected, ".concat(M.u,")")},warning:{default:"color.text.warning.inverse",disabled:"color.text.disabled",selected:"var(--ds-text-selected, ".concat(M.I,")")},danger:{default:"color.text.inverse",disabled:"color.text.disabled",selected:"var(--ds-text-selected, ".concat(M.q,")")},link:{default:"color.link",hover:"color.link",active:"color.link.pressed",disabled:"color.text.disabled",selected:"var(--ds-text-selected, ".concat(M.u,")")},subtle:{default:"color.text",active:"color.text",disabled:"color.text.disabled",selected:"var(--ds-text-selected, ".concat(M.u,")")},"subtle-link":{default:"color.text.subtle",hover:"color.text.subtle",active:"color.text",disabled:"color.text.disabled",selected:"var(--ds-text-selected, ".concat(M.u,")")}}};function ye(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function ke(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ye(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ye(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var me=Object(O.e)(),je={default:"".concat(32/me,"em"),compact:"".concat(24/me,"em"),none:"auto"},Me={default:{default:"space.150",withIcon:"space.100"},compact:{default:"space.150",withIcon:"space.100"},none:{default:"space.0",withIcon:"space.0"}},Ne={compact:"space.050",default:"space.050",none:"space.0"},Ie={default:"middle",compact:"middle",none:"baseline"};function De(e){var t=e.group;return t[e.key]||t.default}function xe(e){var t=e.appearance,r=e.interactionState,o=void 0===r?"default":r,n=e.isDisabled,a=e.isSelected,c=o;return c=e.hasOverlay?"default":c,c=a?"selected":c,c=n?"disabled":c,{backgroundColor:De({group:he.background[t],key:c}),color:"".concat(De({group:he.color[t],key:c}))}}function Oe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}var we=Object(ne.b)({position:"absolute",insetInlineStart:"space.0",insetBlockStart:"space.0",insetInlineEnd:"space.0",insetBlockEnd:"space.0",display:"flex",alignItems:"center",justifyContent:"center"}),Se=function(e){var t=e.analyticsContext,r=e.appearance,o=void 0===r?"default":r,n=e.autoFocus,a=void 0!==n&&n,s=e.buttonType,d=e.interactionName,i=e.isDisabled,l=void 0!==i&&i,g=e.isSelected,v=void 0!==g&&g,f=e.isIconButton,k=void 0!==f&&f,j=e.hasIconBefore,M=void 0!==j&&j,N=e.hasIconAfter,I=void 0!==N&&N,D=e.children,x=e.onClick,O=void 0===x?p.a:x,w=e.onMouseDownCapture,S=e.onMouseUpCapture,A=e.onKeyDownCapture,z=e.onKeyUpCapture,C=e.onTouchStartCapture,L=e.onTouchEndCapture,T=e.onPointerDownCapture,U=e.onPointerUpCapture,E=e.onClickCapture,F=e.overlay,Q=e.ref,P=e.shouldFitContainer,B=void 0!==P&&P,G=e.spacing,R=void 0===G?"default":G,Y=Object(u.useRef)(),W=Object(u.useCallback)((function(e){Y.current=e,null!==Q&&("function"!=typeof Q?Q.current=e:Q(e))}),[Y,Q]);Object(y.a)(Y,a);var _,Z=Object(u.useContext)(m.a),V=Object(u.useCallback)((function(e,t){Z&&Z.tracePress(d,e.timeStamp),O(e,t)}),[O,Z,d]),H=Object(h.a)({fn:V,action:"clicked",componentName:"button",packageName:"@atlaskit/button",packageVersion:"16.10.2",analyticsData:t,actionSubject:s}),K=Object(u.useMemo)((function(){return function(e){var t=e.appearance,r=e.spacing,o=e.isDisabled,n=e.isSelected,a=e.isIconButton,c=e.shouldFitContainer,s=e.isLink,d=e.hasOverlay,i=e.hasIconBefore,l=e.hasIconAfter,u=xe({appearance:t,isSelected:n,isDisabled:o}),b=s?ke(ke({},u),{},{textDecoration:"none",":visited":u}):u,g=je[r],p=c?"100%":"auto";p=a?g:p;var v=Me[r][i?"withIcon":"default"],f=Me[r][l?"withIcon":"default"];return Object(ne.b)(ke(ke(ke({alignItems:"center",borderWidth:"border.width.0",borderRadius:"border.radius.100",boxSizing:"border-box",display:"inline-flex",fontSize:"inherit",fontStyle:"normal",fontFamily:"inherit",fontWeight:500,maxWidth:"100%",position:"relative",textAlign:"center",transition:"background 0.1s ease-out, box-shadow 0.15s cubic-bezier(0.47, 0.03, 0.49, 1.38)",whiteSpace:"nowrap",height:g,paddingBlock:"space.0",paddingInlineStart:a?"space.0":v,paddingInlineEnd:a?"space.0":f,columnGap:Ne[r],verticalAlign:Ie[r],width:p,justifyContent:"center"},b),o||d?{cursor:"not-allowed"}:{}),{},{":hover":ke(ke({},xe({appearance:t,isSelected:n,isDisabled:o,interactionState:"hover",hasOverlay:d})),{},{textDecoration:n||"link"!==t&&"subtle-link"!==t?"none":"underline",transitionDuration:"0s, 0.15s"}),":active":ke(ke({},xe({appearance:t,isSelected:n,isDisabled:o,interactionState:"active",hasOverlay:d})),{},{transitionDuration:"0s, 0s"})}))}({appearance:o,spacing:R,isDisabled:l,isSelected:v,shouldFitContainer:B,isIconButton:k,hasOverlay:Boolean(F),isLink:"link"===s,hasIconBefore:M,hasIconAfter:I})}),[o,s,R,l,v,k,B,F,M,I]),J=l||Boolean(F);return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Oe(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Oe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({ref:W,xcss:K,isDisabled:J,children:b.a.createElement(u.Fragment,null,D,F?b.a.createElement(ae.a,{as:"span",xcss:we},F):null)},(_={onClick:H,onMouseDownCapture:w,onMouseUpCapture:S,onKeyDownCapture:A,onKeyUpCapture:z,onTouchStartCapture:C,onTouchEndCapture:L,onPointerDownCapture:T,onPointerUpCapture:U,onClickCapture:E},J?{onMouseDownCapture:ve,onMouseUpCapture:ve,onKeyDownCapture:fe,onKeyUpCapture:fe,onTouchStartCapture:ve,onTouchEndCapture:ve,onPointerDownCapture:ve,onPointerUpCapture:ve,onClickCapture:ve,onClick:ve}:_))},Ae=function(e){var t=e.analyticsContext,r=e.appearance,o=e.autoFocus,n=e.buttonType,a=e.iconBefore,c=e.iconAfter,s=e.interactionName,d=e.isDisabled,i=e.isSelected,l=e.children,g=e.onClick,p=e.onMouseDownCapture,v=e.onMouseUpCapture,f=e.onKeyDownCapture,h=e.onKeyUpCapture,y=e.onTouchStartCapture,k=e.onTouchEndCapture,m=e.onPointerDownCapture,j=e.onPointerUpCapture,M=e.onClickCapture,N=e.overlay,I=e.ref,D=e.shouldFitContainer,x=e.spacing,O=Boolean(N);return Se({analyticsContext:t,appearance:r,autoFocus:o,buttonType:n,children:b.a.createElement(u.Fragment,null,a&&b.a.createElement(pe,{type:"icon",hasOverlay:O},a),l&&b.a.createElement(pe,{hasOverlay:O},l),c&&b.a.createElement(pe,{type:"icon",hasOverlay:O},c)),interactionName:s,isDisabled:d,isSelected:i,onClick:g,onMouseDownCapture:p,onMouseUpCapture:v,onKeyDownCapture:f,onKeyUpCapture:h,onTouchStartCapture:y,onTouchEndCapture:k,onPointerDownCapture:m,onPointerUpCapture:j,onClickCapture:M,overlay:N,ref:I,shouldFitContainer:D,spacing:x,hasIconBefore:Boolean(a),hasIconAfter:Boolean(c)})},ze=["analyticsContext","autoFocus","appearance","spacing","isDisabled","isSelected","iconBefore","iconAfter","children","shouldFitContainer","interactionName","overlay","onClick","onMouseDownCapture","onMouseUpCapture","onKeyDownCapture","onKeyUpCapture","onTouchStartCapture","onTouchEndCapture","onPointerDownCapture","onPointerUpCapture","onClickCapture","type","testId"],Ce=b.a.memo(b.a.forwardRef((function(e,t){var r=e.analyticsContext,o=e.autoFocus,a=e.appearance,c=e.spacing,s=e.isDisabled,i=e.isSelected,l=e.iconBefore,u=e.iconAfter,g=e.children,p=e.shouldFitContainer,v=e.interactionName,f=e.overlay,h=e.onClick,y=e.onMouseDownCapture,k=e.onMouseUpCapture,m=e.onKeyDownCapture,j=e.onKeyUpCapture,M=e.onTouchStartCapture,N=e.onTouchEndCapture,I=e.onPointerDownCapture,D=e.onPointerUpCapture,x=e.onClickCapture,O=e.type,w=void 0===O?"button":O,S=e.testId,A=d()(e,ze),z=Ae({analyticsContext:r,appearance:a,autoFocus:o,buttonType:"button",children:g,iconBefore:l,iconAfter:u,interactionName:v,isDisabled:s,isSelected:i,onClick:h,onMouseDownCapture:y,onMouseUpCapture:k,onKeyDownCapture:m,onKeyUpCapture:j,onTouchStartCapture:M,onTouchEndCapture:N,onPointerDownCapture:I,onPointerUpCapture:D,onClickCapture:x,overlay:f,ref:t,shouldFitContainer:p,spacing:c});return b.a.createElement(ie,n()({},A,{ref:z.ref,xcss:z.xcss,isDisabled:z.isDisabled,onClick:z.onClick,onMouseDownCapture:z.onMouseDownCapture,onMouseUpCapture:z.onMouseUpCapture,onKeyDownCapture:z.onKeyDownCapture,onKeyUpCapture:z.onKeyUpCapture,onTouchStartCapture:z.onTouchStartCapture,onTouchEndCapture:z.onTouchEndCapture,onPointerDownCapture:z.onPointerDownCapture,onPointerUpCapture:z.onPointerUpCapture,onClickCapture:z.onClickCapture,type:w,testId:S}),z.children)})));Ce.displayName="Button";var Le=Ce,Te=r(61),Ue=r(40);var Ee,Fe=r(183),Qe=r.n(Fe),Pe=r(182),Be=r(96),Ge=r(438),Re=r(517),Ye=r(231),We=("--".concat("ds","-token-not-found"),"--".concat("ds","-elevation-surface-current")),_e=function(e){var t=e.children,r=e.update,o=Object(u.useRef)(!0);return Object(u.useLayoutEffect)((function(){o.current?o.current=!1:r()}),[r]),b.a.createElement(u.Fragment,null,t)},Ze=r(513),Ve=r(268),He=r.n(Ve),Ke=["shouldRenderToParent","children"],Je=Object(f.css)((Ee={display:"block",boxSizing:"border-box",zIndex:O.g.layer(),flex:"1 1 auto",backgroundColor:"var(--ds-surface-overlay, ".concat(M.q,")"),borderRadius:"var(--ds-border-radius, 3px)",boxShadow:"var(--ds-shadow-overlay, ".concat("0 4px 8px -2px ".concat(M.E,", 0 0 1px ").concat(M.F),")")},c()(Ee,We,"var(--ds-surface-overlay, ".concat(M.q,")")),c()(Ee,":focus",{outline:"none"}),Ee)),Xe=Object(f.css)({overflow:"auto"}),qe=Object(u.forwardRef)((function(e,t){var r=e.shouldRenderToParent,o=e.children,a=d()(e,Ke);return Object(f.jsx)("div",n()({css:[Je,!r&&Xe]},a,{ref:t}),o)}));var $e=function(e){var t=e.isOpen,r=e.id,o=e.offset,n=e.testId,a=e.content,c=e.fallbackPlacements,s=e.onClose,d=e.boundary,i=e.rootBoundary,b=e.shouldFlip,v=e.placement,h=void 0===v?"auto":v,y=e.popupComponent,k=void 0===y?qe:y,m=e.autoFocus,M=void 0===m||m,N=e.triggerRef,I=e.shouldUseCaptureOnOutsideClick,D=e.shouldRenderToParent,x=Object(u.useState)(null),O=l()(x,2),w=O[0],S=O[1],A=Object(u.useState)(null),z=l()(A,2),C=z[0],L=z[1];!function(e){var t=e.initialFocusRef,r=e.popupRef;Object(u.useEffect)((function(){if(!r)return p.a;var e,o;if(Object(j.a)("platform.design-system-team.remove-focus-trap-from-popup_3q7sk"))e=document.activeElement;else{var n={clickOutsideDeactivates:!0,escapeDeactivates:!0,initialFocus:t||r,fallbackFocus:r,returnFocusOnDeactivate:!0};o=He()(r,n)}var a=null;return a=requestAnimationFrame((function(){a=null,Object(j.a)("platform.design-system-team.remove-focus-trap-from-popup_3q7sk")?t&&t.focus?t.focus():r.focus():o.activate()})),function(){null!=a&&(cancelAnimationFrame(a),a=null),Object(j.a)("platform.design-system-team.remove-focus-trap-from-popup_3q7sk")?e&&e.focus&&e.focus():o.deactivate()}}),[r,t])}({initialFocusRef:C,popupRef:w}),function(e){var t=e.isOpen,r=e.onClose,o=e.popupRef,n=e.triggerRef,a=e.shouldUseCaptureOnOutsideClick,c=Object(Ze.a)().isLayerDisabled;Object(u.useEffect)((function(){if(!t||!o)return p.a;var e=function(e){r&&r(e)};return Object(g.bindAll)(window,[{type:"click",listener:function(t){var r=t.target;if(document.body.contains(r)){var a=o&&o.contains(r),c=n&&n.contains(r);a||c||e(t)}},options:{capture:a}},{type:"keydown",listener:function(t){if(!c()){var r=t.key;"Escape"!==r&&"Esc"!==r||e(t)}}}])}),[t,r,o,n,a,c])}({isOpen:t,onClose:s,popupRef:w,triggerRef:N,shouldUseCaptureOnOutsideClick:I});var T=Object(u.useMemo)((function(){return[{name:"flip",enabled:b,options:{rootBoundary:i,boundary:d,fallbackPlacements:c}}]}),[b,i,d,c]);return Object(f.jsx)(Ye.a,{placement:h,offset:o,modifiers:T},(function(e){var o=e.ref,c=e.style,d=e.placement,i=e.update;return Object(f.jsx)(k,{id:r,"data-placement":d,"data-testid":n,ref:function(e){e&&("function"==typeof o?o(e):o.current=e,S(e))},style:c,tabIndex:M?0:void 0,shouldRenderToParent:D},Object(f.jsx)(_e,{update:i},a({update:i,isOpen:t,onClose:s,setInitialFocusRef:L})))}))},et=O.g.layer(),tt=Object(u.memo)((function(e){var t=e.isOpen,r=e.id,o=e.offset,n=e.testId,a=e.trigger,c=e.content,s=e.onClose,d=e.boundary,i=e.rootBoundary,b=void 0===i?"viewport":i,g=e.shouldFlip,p=void 0===g||g,v=e.placement,h=void 0===v?"auto":v,y=e.fallbackPlacements,k=e.popupComponent,m=e.autoFocus,M=void 0===m||m,N=e.zIndex,I=void 0===N?et:N,D=e.shouldUseCaptureOnOutsideClick,x=void 0!==D&&D,O=e.shouldRenderToParent,w=void 0!==O&&O,S=Object(u.useState)(null),A=l()(S,2),z=A[0],C=A[1],L=Object(f.jsx)(Pe.c,{isDisabled:!Object(j.a)("platform.design-system-team.layering_popup_1cnzt")},Object(f.jsx)($e,{content:c,isOpen:t,placement:h,fallbackPlacements:y,boundary:d,rootBoundary:b,shouldFlip:p,offset:o,popupComponent:k,id:r,testId:n,onClose:s,autoFocus:M,shouldUseCaptureOnOutsideClick:x,shouldRenderToParent:w,triggerRef:z}));return Object(f.jsx)(Be.a,null,Object(f.jsx)(Ge.a,null,(function(e){var o=e.ref;return a({ref:function(e){e&&t&&("function"==typeof o?o(e):o.current=e,C(e))},"aria-controls":r,"aria-expanded":t,"aria-haspopup":!0})})),t&&(w?L:Object(f.jsx)(Re.a,{zIndex:I},L)))})),rt=tt,ot=r(86),nt=r(68),at=["isLoading","maxWidth","minWidth","minHeight","maxHeight","testId","role","spacing","className"],ct=Object(f.css)({display:"flex",position:"static",flexDirection:"column",overflow:"auto"}),st=function(e){var t=e.isLoading,r=e.maxWidth,o=e.minWidth,a=e.minHeight,c=e.maxHeight,s=e.testId,i=e.role,l=e.spacing,u=void 0===l?"cozy":l,b=e.className,g=d()(e,at);return Object(f.jsx)(nt.b.Provider,{value:u},Object(f.jsx)(nt.a.Provider,{value:"border"},Object(f.jsx)("div",n()({"aria-busy":t,style:{minWidth:o,maxWidth:r,minHeight:a,maxHeight:c},css:ct,"data-testid":s,role:i,className:Object(j.a)("platform.design-system-team.unsafe-overrides-killswitch_c8j9m")?void 0:b},g))))},dt={xsmall:8,small:16,medium:24,large:48,xlarge:96};var it=Object(f.keyframes)({to:{transform:"rotate(360deg)"}}),lt=Object(f.css)({animation:"".concat(it," 0.86s infinite"),animationTimingFunction:"cubic-bezier(0.4, 0.15, 0.6, 0.85)",transformOrigin:"center"}),ut=Object(f.keyframes)({from:{transform:"rotate(50deg)",opacity:0,strokeDashoffset:60},to:{transform:"rotate(230deg)",opacity:1,strokeDashoffset:50}}),bt=Object(f.css)({animation:"".concat(ut," 1s ease-in-out"),animationFillMode:"forwards",opacity:0}),gt=Object(f.css)({display:"inline-flex",verticalAlign:"middle"}),pt=Object(f.css)({fill:"none",strokeDasharray:60,strokeDashoffset:"inherit",strokeLinecap:"round",strokeWidth:1.5,"@media screen and (forced-colors: active)":{filter:"grayscale(100%)",stroke:"CanvasText"}}),vt="undefined"==typeof window?u.useEffect:u.useLayoutEffect,ft=b.a.memo(b.a.forwardRef((function(e,t){var r=e.appearance,o=void 0===r?"inherit":r,n=e.delay,a=void 0===n?0:n,c=e.interactionName,s=e.label,d=e.size,i=void 0===d?"medium":d,l=e.testId,b="number"==typeof i?i:dt[i],g="".concat(a,"ms"),p=function(e){var t=e.mode,r=e.appearance;return"light"===t?"inherit"===r?"var(--ds-icon-subtle, ".concat(M.D,")"):"var(--ds-icon-inverse, ".concat(M.q,")"):"inherit"===r?"var(--ds-icon-subtle, ".concat(M.p,")"):"var(--ds-icon-inverse, ".concat(M.m,")")}({mode:Object(v.b)().mode,appearance:o}),h=Object(u.useContext)(m.a);return vt((function(){if(null!=h)return h.hold(c)}),[h,c]),Object(f.jsx)("span",{css:[gt,lt],"data-testid":l&&"".concat(l,"-wrapper"),style:{animationDelay:g,width:b,height:b}},Object(f.jsx)("svg",{height:b,width:b,viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg","data-testid":l,ref:t,"aria-label":s,css:bt,style:{animationDelay:g}},Object(f.jsx)("circle",{cx:"8",cy:"8",r:"7",css:pt,style:{stroke:p}})))})));var ht=Object(ne.b)({display:"flex",minWidth:"160px",padding:"space.250",justifyContent:"center"}),yt=function(e){var t=e.statusLabel,r=void 0===t?"Loading":t,o=e.testId;return Object(f.jsx)(ae.a,{xcss:ht},Object(f.jsx)(ft,{size:"small",label:r,testId:o}))},kt=function(e){var t=e.children,r=e.isLoading,o=e.maxHeight,n=e.maxWidth,a=e.onClose,c=e.onUpdate,s=e.statusLabel,d=e.setInitialFocusRef,i=e.spacing,l=e.testId,b=Object(u.useContext)(ot.a).menuItemRefs;return Object(u.useLayoutEffect)((function(){c()}),[r,c]),Object(u.useEffect)((function(){var e,t=null!==(e=b.find((function(e){return!e.hasAttribute("disabled")})))&&void 0!==e?e:null;null==d||d(t)}),[b,d]),Object(f.jsx)(st,{isLoading:r,maxHeight:o,maxWidth:n,onClick:function(e){b.some((function(t){var r,o="checkbox"===(r=t.getAttribute("role"))||"menuitemcheckbox"===r||function(e){var t=e.getAttribute("role");return"radio"===t||"menuitemradio"===t}(t);return t.contains(e.target)&&!o}))&&a&&a(e)},role:"menu",spacing:i,testId:l&&"".concat(l,"--menu-group")},r?Object(f.jsx)(yt,{statusLabel:s,testId:l&&"".concat(l,"--loading-indicator")}):t)},mt=r(66),jt=r(65);function Mt(){return Object(u.useRef)("".concat("ds--dropdown--").concat(Math.random().toString(16).substr(2,8))).current}var Nt=["ref"];function It(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function Dt(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?It(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):It(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var xt=Object(O.f)(),Ot="calc(100vh - ".concat(2*xt,"px)"),wt={top:"bottom",bottom:"top",left:"right",right:"left",start:"end",auto:"auto",end:"start"},St=function(e){var t=e.defaultOpen,r=void 0!==t&&t,o=e.isOpen,a=e.onOpenChange,c=void 0===a?p.a:a,s=e.children,i=e.placement,v=void 0===i?"bottom-start":i,f=e.trigger,h=e.spacing,y=e.shouldFlip,k=void 0===y||y,m=e.shouldRenderToParent,M=void 0!==m&&m,N=e.isLoading,I=void 0!==N&&N,D=e.autoFocus,x=void 0!==D&&D,w=e.testId,S=e.statusLabel,A=e.zIndex,z=void 0===A?O.g.modal():A,C=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){return e},r=void 0!==e,o=Object(u.useState)(t),n=l()(o,2),a=n[0],c=n[1],s=Object(u.useRef)(r);Object(u.useEffect)((function(){s.current=r}),[r]);var d=r?e:a,i=Object(u.useCallback)((function(e){s.current||c(e)}),[]);return[d,i]}(o,(function(){return r})),L=l()(C,2),T=L[0],U=L[1],E=Object(u.useState)(!1),F=l()(E,2),Q=F[0],P=F[1],B=Object(u.useMemo)((function(){return function(e){var t=e.split("-"),r=t[0];if(["top","bottom"].includes(r)){if(2===t.length&&["start","end"].includes(t[1])){var o=t[1];return["".concat(r),"".concat(r,"-").concat(wt[o]),"".concat(wt[r],"-").concat(o),"".concat(wt[r]),"".concat(wt[r],"-").concat(wt[o]),"auto"]}return["".concat(r,"-start"),"".concat(r,"-end"),"".concat(wt[r]),"".concat(wt[r],"-start"),"".concat(wt[r],"-end"),"auto"]}}(v)}),[v]),G=Object(u.useCallback)((function(e){var t=!T,r=e.clientX,o=e.clientY;"keydown"===e.type?P(!0):0!==r&&0!==o||P(!0),U(t),c({isOpen:t,event:e})}),[c,T,U]),R=Object(u.useCallback)((function(e){if("Escape"===e.key||!e.target.closest("[id^=".concat("ds--dropdown--","] [aria-haspopup]"))){U(!1),c({isOpen:!1,event:e})}}),[c,U]),Y=function(){var e=Object(u.useState)(!1),t=l()(e,2),r=t[0],o=t[1],n=Object(u.useRef)({onFocus:function(){return o(!0)},onBlur:function(){return o(!1)}});return Object(u.useEffect)((function(){return function(){return o(!1)}}),[]),{isFocused:r,bindFocus:n.current}}(),W=Y.isFocused,_=Y.bindFocus;Object(u.useEffect)((function(){return W?T?p.a:Object(g.bind)(window,{type:"keydown",listener:function(e){e.key===Te.b&&(e.preventDefault(),G(e))}}):p.a}),[W,T,G]);var Z=Mt(),V=Object(jt.a)();return b.a.createElement(mt.b,null,b.a.createElement(rt,{id:T?Z:void 0,shouldFlip:k,isOpen:T,onClose:R,zIndex:z,placement:v,fallbackPlacements:B,testId:w&&"".concat(w,"--content"),shouldUseCaptureOnOutsideClick:!0,shouldRenderToParent:Object(j.a)("platform.design-system-team.render-popup-in-parent_f73ij")?M:void 0,trigger:function(e){if("function"==typeof f){var t=e.ref,r=d()(e,Nt);return f(Dt(Dt(Dt({},r),_),{},{triggerRef:Object(Ue.a)([t,V]),isSelected:T,onClick:G,testId:w&&"".concat(w,"--trigger")}))}return Object(j.a)("platform.design-system-team.new-button-adoption-in-dropdown_p8sn4")?b.a.createElement(Le,{iconAfter:b.a.createElement(Qe.a,{size:"medium",label:""}),onFocus:_.onFocus,onBlur:_.onBlur,ref:Object(Ue.a)([e.ref,V]),"aria-controls":e["aria-controls"],"aria-expanded":e["aria-expanded"],"aria-haspopup":e["aria-haspopup"],isSelected:T,onClick:G,testId:w&&"".concat(w,"--trigger")},f):b.a.createElement(te,n()({},_,{ref:Object(Ue.a)([e.ref,V]),"aria-controls":e["aria-controls"],"aria-expanded":e["aria-expanded"],"aria-haspopup":e["aria-haspopup"],isSelected:T,iconAfter:b.a.createElement(Qe.a,{size:"medium",label:""}),onClick:G,testId:w&&"".concat(w,"--trigger")}),f)},content:function(e){var t=e.setInitialFocusRef,r=e.update;return b.a.createElement(ot.b,null,b.a.createElement(kt,{spacing:h,maxHeight:Ot,maxWidth:800,onClose:R,onUpdate:r,isLoading:I,statusLabel:S,setInitialFocusRef:Q||x?t:void 0,testId:w&&"".concat(w,"--menu-wrapper")},s))}}))},At=r(469),zt=At.a,Ct=r(277),Lt=r(31),Tt=r(85),Ut=["component","cssFn","isDisabled","isSelected","onClick","testId","children","description","iconAfter","iconBefore","overrides","onMouseDown","shouldTitleWrap","shouldDescriptionWrap","className"],Et=function(e){e.preventDefault()},Ft=Object(u.memo)(Object(u.forwardRef)((function(e,t){var r=e.component,o=e.cssFn,a=void 0===o?p.a:o,c=e.isDisabled,s=void 0!==c&&c,i=e.isSelected,l=void 0!==i&&i,u=e.onClick,b=e.testId,g=e.children,v=e.description,h=e.iconAfter,y=e.iconBefore,k=e.overrides,m=e.onMouseDown,M=e.shouldTitleWrap,N=e.shouldDescriptionWrap,I=e.className,D=d()(e,Ut),x=m;return r?(Object(Lt.b)("@atlaskit/menu","cssFn",a!==p.a,""),Object(f.jsx)(Tt.a,n()({className:Object(j.a)("platform.design-system-team.unsafe-overrides-killswitch_c8j9m")?void 0:I},D,{overrides:k,description:v,iconAfter:h,title:g,iconBefore:y,isSelected:l,isDisabled:s,shouldTitleWrap:M,shouldDescriptionWrap:N,css:Object(f.css)(a({isDisabled:s,isSelected:l}))}),(function(e){var o=e.children,a=e.className;return Object(f.jsx)(r,n()({"data-testid":b},D,{className:a,ref:t,draggable:!1,onDragStart:Et,onMouseDown:s?Et:x,onClick:s?Et:u,tabIndex:s?-1:void 0,"aria-disabled":s}),o)}))):null}))),Qt=["children","href","cssFn","description","iconAfter","iconBefore","isDisabled","isSelected","onClick","testId","overrides","onMouseDown","shouldTitleWrap","shouldDescriptionWrap","className"],Pt=function(e){e.preventDefault()},Bt=Object(u.memo)(Object(u.forwardRef)((function(e,t){var r=e.children,o=e.href,a=e.cssFn,c=void 0===a?p.a:a,s=e.description,i=e.iconAfter,l=e.iconBefore,u=e.isDisabled,b=void 0!==u&&u,g=e.isSelected,v=void 0!==g&&g,h=e.onClick,y=e.testId,k=e.overrides,m=e.onMouseDown,M=e.shouldTitleWrap,N=e.shouldDescriptionWrap,I=e.className,D=d()(e,Qt),x=m;return r?(Object(Lt.b)("@atlaskit/menu","cssFn",c!==p.a,""),Object(f.jsx)(Tt.a,n()({},D,{className:Object(j.a)("platform.design-system-team.unsafe-overrides-killswitch_c8j9m")?void 0:I,overrides:k,iconBefore:l,iconAfter:i,isSelected:v,isDisabled:b,description:s,shouldTitleWrap:M,shouldDescriptionWrap:N,css:c({isSelected:v,isDisabled:b}),title:r}),(function(e){var r=e.children,a=e.className;return Object(f.jsx)("a",n()({"data-testid":y},D,{className:a,href:b?void 0:o,draggable:!1,onDragStart:Pt,onMouseDown:b?Pt:x,onClick:b?Pt:h,"aria-current":v?"page":void 0,"aria-disabled":b,ref:t}),r)}))):null}))),Gt=["component","elemBefore","elemAfter","shouldTitleWrap","shouldDescriptionWrap","children"],Rt=Object(u.forwardRef)((function(e,t){var r=e.component,o=e.elemBefore,a=e.elemAfter,c=e.shouldTitleWrap,s=void 0===c||c,i=e.shouldDescriptionWrap,l=void 0===i||i,u=e.children,g=d()(e,Gt),p=Object(jt.a)();return r?b.a.createElement(Ft,n()({component:r,iconBefore:o,iconAfter:a,ref:Object(Ue.a)([t,p]),shouldTitleWrap:s,shouldDescriptionWrap:l},g),u):e.href?b.a.createElement(Bt,n()({href:e.href,iconBefore:o,iconAfter:a,role:"menuitem",ref:Object(Ue.a)([t,p]),shouldTitleWrap:s,shouldDescriptionWrap:l},g),u):b.a.createElement(Ct.a,n()({role:"menuitem",iconBefore:o,iconAfter:a,ref:Object(Ue.a)([t,p]),shouldTitleWrap:s,shouldDescriptionWrap:l},g),u)})),Yt=r(233),Wt=r(141),_t=function(e){var t=e.children,r=e.id;return b.a.createElement(Wt.a.Provider,{value:r},b.a.createElement(At.a,e,t))},Zt=r(234),Vt=r(125)},241:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return k})),r.d(t,"Icon",(function(){return y}));var o=r(14),n=r.n(o),a=r(5),c=r.n(a),s=r(0),d=r(3),i=r(466),l=r(140),u=r(90);function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=Object(d.css)({display:"inline-block",flexShrink:0,lineHeight:1,"> svg":g(g({},u.a),{},{maxWidth:"100%",maxHeight:"100%",color:"var(--icon-primary-color)",fill:"var(--icon-secondary-color)",verticalAlign:"bottom"})}),v=Object(d.css)({"@media screen and (forced-colors: active)":{"> svg":{filter:"grayscale(1)","--icon-primary-color":"CanvasText","--icon-secondary-color":"Canvas"}}}),f=Object(d.css)({"@media screen and (forced-colors: active)":{"> svg":{"--icon-primary-color":"Canvas"}}}),h=Object(d.css)({"@media screen and (forced-colors: active)":{"> svg":{"--icon-secondary-color":"transparent"}}}),y=Object(s.memo)((function(e){var t=e,r=t.glyph,o=t.dangerouslySetGlyph,a=t.primaryColor,c=void 0===a?"currentColor":a,s=t.secondaryColor,b=t.size,g=t.testId,y=t.label,k=t.width,m=t.height,j=o?{dangerouslySetInnerHTML:{__html:o}}:{children:r?Object(d.jsx)(r,{role:"presentation"}):null},M=Object(u.b)({width:k,height:m,size:b}),N=Object(i.b)().mode;return Object(d.jsx)("span",n()({"data-testid":g,role:y?"img":void 0,"aria-label":y||void 0,"aria-hidden":!y||void 0,style:{"--icon-primary-color":c,"--icon-secondary-color":s||Object(l.a)(N)}},j,{css:[p,v,c===s&&f,"transparent"===s&&h,M&&Object(d.css)({width:M.width,height:M.height,"> svg":M})]}))})),k=y},26:function(e,t,r){"use strict";r.d(t,"d",(function(){return o})),r.d(t,"a",(function(){return n})),r.d(t,"c",(function(){return a})),r.d(t,"e",(function(){return c})),r.d(t,"b",(function(){return s}));var o="data-theme",n="data-color-mode",a="data-custom-theme",c="--".concat("ds","-token-not-found"),s="--".concat("ds","-elevation-surface-current")},266:function(e,t,r){"use strict";var o=function(){};e.exports=o},268:function(e,t,r){var o=r(445),n=null;function a(e){e&&e.focus&&e!==document.activeElement&&(e.focus(),"input"===e.tagName.toLowerCase()&&e.select())}e.exports=function(e,t){var r=[],c=null,s=null,d=null,i=!1,l=!1,u=null,b="string"==typeof e?document.querySelector(e):e,g=t||{};g.returnFocusOnDeactivate=!t||void 0===t.returnFocusOnDeactivate||t.returnFocusOnDeactivate,g.escapeDeactivates=!t||void 0===t.escapeDeactivates||t.escapeDeactivates;var p={activate:function(e){if(i)return;var t={onActivate:e&&void 0!==e.onActivate?e.onActivate:g.onActivate};i=!0,l=!1,d=document.activeElement,t.onActivate&&t.onActivate();return f(),p},deactivate:v,pause:function(){if(l||!i)return;l=!0,h()},unpause:function(){if(!l||!i)return;l=!1,f()}};return p;function v(e){if(i){var t={returnFocus:e&&void 0!==e.returnFocus?e.returnFocus:g.returnFocusOnDeactivate,onDeactivate:e&&void 0!==e.onDeactivate?e.onDeactivate:g.onDeactivate};return h(),t.onDeactivate&&t.onDeactivate(),t.returnFocus&&setTimeout((function(){a(d)}),0),i=!1,l=!1,this}}function f(){if(i)return n&&n.pause(),n=p,N(),setTimeout((function(){a(function(){var e;e=null!==y("initialFocus")?y("initialFocus"):b.contains(document.activeElement)?document.activeElement:r[0]||y("fallbackFocus");if(!e)throw new Error("You can't have a focus-trap without at least one focusable element");return e}())}),0),document.addEventListener("focus",j,!0),document.addEventListener("click",m,!0),document.addEventListener("mousedown",k,!0),document.addEventListener("touchstart",k,!0),document.addEventListener("keydown",M,!0),p}function h(){if(i&&n===p)return document.removeEventListener("focus",j,!0),document.removeEventListener("click",m,!0),document.removeEventListener("mousedown",k,!0),document.removeEventListener("touchstart",k,!0),document.removeEventListener("keydown",M,!0),n=null,p}function y(e){var t=g[e],r=t;if(!t)return null;if("string"==typeof t&&!(r=document.querySelector(t)))throw new Error("`"+e+"` refers to no known node");if("function"==typeof t&&!(r=t()))throw new Error("`"+e+"` did not return a node");return r}function k(e){g.clickOutsideDeactivates&&!b.contains(e.target)&&v({returnFocus:!1})}function m(e){g.clickOutsideDeactivates||b.contains(e.target)||(e.preventDefault(),e.stopImmediatePropagation())}function j(e){b.contains(e.target)||(e.preventDefault(),e.stopImmediatePropagation(),"function"==typeof e.target.blur&&e.target.blur(),u&&function(e){if(e.shiftKey)return a(s);a(c)}(u))}function M(e){"Tab"!==e.key&&9!==e.keyCode||function(e){if(N(),e.target.hasAttribute("tabindex")&&Number(e.target.getAttribute("tabindex"))<0)return u=e;e.preventDefault();var t=r.indexOf(e.target);if(e.shiftKey)return e.target===c||-1===r.indexOf(e.target)?a(s):a(r[t-1]);if(e.target===s)return a(c);a(r[t+1])}(e),!1!==g.escapeDeactivates&&function(e){return"Escape"===e.key||"Esc"===e.key||27===e.keyCode}(e)&&v()}function N(){r=o(b),c=r[0],s=r[r.length-1]}}},269:function(e,t,r){"use strict";var o=r(12),n=r.n(o),a=r(0),c=r(141),s=r(66);t.a=function(e){var t=e.isSelected,r=e.id,o=e.defaultSelected,d=Object(a.useContext)(s.a),i=d.setItemState,l=d.getItemState,u=Object(a.useContext)(c.a),b=l(u,r),g=Object(a.useState)((function(){return void 0!==b?b:o||!1})),p=n()(g,2),v=p[0],f=p[1],h=Object(a.useCallback)((function(e){var t=e(b);f(t),i(u,r,t)}),[i,b,u,r]);return"boolean"==typeof t?[t,function(){return!1}]:(void 0===b&&i(u,r,o||!1),[v,h])}},270:function(e,t,r){"use strict";var o=r(0),n=r.n(o),a=r(278),c=r(19),s=r(2);t.a=function(e){var t=e.checked;return n.a.createElement(a.a,{label:"",size:"medium",primaryColor:t?"var(--ds-background-selected-bold, ".concat(s.d,")"):"var(--ds-background-input, ".concat(s.r,")"),secondaryColor:t?"var(--ds-icon-inverse, ".concat(s.r,")"):"transparent"},n.a.createElement("g",{fillRule:"evenodd"},n.a.createElement("rect",{fill:"currentColor",x:"6",y:"6",width:"12",height:"12",rx:"2",stroke:t?"var(--ds-border-selected, ".concat(s.d,")"):"var(--ds-border-input, ".concat(Object(c.a)("platform.design-system-team.border-checkbox_nyoiu")?s.s:s.A,")"),strokeWidth:Object(c.a)("platform.design-system-team.border-checkbox_nyoiu")?1:2}),n.a.createElement("path",{d:"M9.707 11.293a1 1 0 10-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 10-1.414-1.414L11 12.586l-1.293-1.293z",fill:"inherit"})))}},271:function(e,t,r){"use strict";var o=r(5),n=r.n(o),a=r(12),c=r.n(a),s=r(0),d=r(125),i=r(66),l=r(142);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){n()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.a=function(e){var t=e.id,r=e.isSelected,o=e.defaultSelected,a=Object(s.useContext)(i.a),u=a.setGroupState,g=a.getGroupState,p=Object(s.useContext)(d.a),v=p.id,f=p.radioGroupState,h=p.selectRadioItem,y=f[t],k=Object(s.useState)((function(){return void 0!==y?y:o||!1})),m=c()(k,2),j=m[0],M=m[1],N=Object(s.useCallback)((function(e){if(!y){var r=e(y);h(t,r),M(r)}}),[y,t,h]);if(Object(s.useEffect)((function(){M((function(){var e=f[t];return void 0!==e?e:o||!1}))}),[f,v,t,o]),"boolean"==typeof r)return[r,function(){return!1}];if(void 0===y){var I=g(v);u(v,b(b({},Object(l.a)(I||{})),{},n()({},t,o||!1)))}return[j,N]}},272:function(e,t,r){"use strict";t.a=function(){return/Mac OS X/.test(Boolean("undefined"!=typeof window&&window.document&&window.document.createElement)?navigator.userAgent:"")}},273:function(e,t,r){"use strict";var o=r(0),n=r.n(o),a=r(278),c=r(19),s=r(2);t.a=function(e){var t=e.checked;return n.a.createElement(a.a,{label:"",size:"medium",primaryColor:t?"var(--ds-background-selected-bold, ".concat(s.d,")"):"var(--ds-background-input, ".concat(s.r,")"),secondaryColor:t?"var(--ds-icon-inverse, ".concat(s.r,")"):"transparent"},n.a.createElement("g",{fillRule:"evenodd"},n.a.createElement("circle",{fill:"currentColor",cx:"12",cy:"12",r:"6",stroke:t?"var(--ds-border-selected, ".concat(s.d,")"):"var(--ds-border-input, ".concat(Object(c.a)("platform.design-system-team.border-checkbox_nyoiu")?s.s:s.A,")"),strokeWidth:Object(c.a)("platform.design-system-team.border-checkbox_nyoiu")?1:2}),n.a.createElement("circle",{fill:"inherit",cx:"12",cy:"12",r:"2"})))}},275:function(e,t,r){"use strict";var o=r(14),n=r.n(o),a=r(16),c=r.n(a),s=r(0),d=r(3),i=r(8),l=r(56),u=Object(s.createContext)("elevation.surface");u.displayName="SurfaceProvider";var b=["as","children","backgroundColor","padding","paddingBlock","paddingBlockStart","paddingBlockEnd","paddingInline","paddingInlineStart","paddingInlineEnd","style","testId","xcss"],g=["className"],p=Object(s.forwardRef)((function(e,t){var r=e.as,o=void 0===r?"div":r,a=e.children,s=e.backgroundColor,p=e.padding,f=e.paddingBlock,h=e.paddingBlockStart,y=e.paddingBlockEnd,k=e.paddingInline,m=e.paddingInlineStart,j=e.paddingInlineEnd,M=e.style,N=e.testId,I=e.xcss,D=c()(e,b),x=o,O=(D.className,c()(D,g)),w=I&&Object(l.a)(I),S=Object(d.jsx)(x,n()({style:M,ref:t},O,{css:[v,s&&i.c[s],Object(i.h)(s)&&i.o[s],p&&i.k.padding[p],f&&i.k.paddingBlock[f],h&&i.k.paddingBlockStart[h],y&&i.k.paddingBlockEnd[y],k&&i.k.paddingInline[k],m&&i.k.paddingInlineStart[m],j&&i.k.paddingInlineEnd[j],w],"data-testid":N}),a);return s?Object(d.jsx)(u.Provider,{value:s},S):S})),v=(t.a=p,Object(d.css)({boxSizing:"border-box",appearance:"none",border:"none"}))},277:function(e,t,r){"use strict";var o=r(14),n=r.n(o),a=r(16),c=r.n(a),s=r(0),d=r(3),i=r(31),l=r(15),u=r(19),b=r(85),g=["children","cssFn","description","iconAfter","iconBefore","isDisabled","isSelected","onClick","testId","overrides","onMouseDown","shouldTitleWrap","shouldDescriptionWrap","className"],p=Object(s.memo)(Object(s.forwardRef)((function(e,t){var r=e.children,o=e.cssFn,a=void 0===o?l.a:o,s=e.description,p=e.iconAfter,v=e.iconBefore,f=e.isDisabled,h=void 0!==f&&f,y=e.isSelected,k=void 0!==y&&y,m=e.onClick,j=e.testId,M=e.overrides,N=e.onMouseDown,I=e.shouldTitleWrap,D=e.shouldDescriptionWrap,x=e.className,O=c()(e,g),w=N;return r?(Object(i.b)("@atlaskit/menu","cssFn",a!==l.a,""),Object(d.jsx)(b.a,n()({className:Object(u.a)("platform.design-system-team.unsafe-overrides-killswitch_c8j9m")?void 0:x},O,{overrides:M,iconBefore:v,iconAfter:p,isDisabled:h,isSelected:k,description:s,title:r,shouldTitleWrap:I,shouldDescriptionWrap:D,css:a({isSelected:k,isDisabled:h})}),(function(e){var r=e.children,o=e.className;return Object(d.jsx)("button",n()({"data-testid":j},O,{className:o,ref:t,disabled:h,onClick:m,onMouseDown:w,type:"button"}),r)}))):null})));t.a=p},278:function(e,t,r){"use strict";var o=r(0),n=r(3),a=r(466),c=r(140),s=r(90),d=Object(n.css)(s.a),i=Object(o.memo)((function(e){var t=e.size,r=void 0===t?"medium":t,o=e.label,i=e.primaryColor,l=void 0===i?"currentColor":i,u=e.secondaryColor,b=e.testId,g=e.children,p=Object(a.b)().mode;return Object(n.jsx)("svg",{viewBox:"0 0 24 24",style:{color:l,fill:u||Object(c.a)(p)},css:[d,s.c[r]],"data-testid":b,"aria-label":o||void 0,role:o?"img":"presentation"},g)}));t.a=i},3:function(e,t,r){"use strict";r.r(t),r.d(t,"CacheProvider",(function(){return x})),r.d(t,"ThemeContext",(function(){return S})),r.d(t,"ThemeProvider",(function(){return C})),r.d(t,"__unsafe_useEmotionCache",(function(){return O})),r.d(t,"useTheme",(function(){return A})),r.d(t,"withEmotionCache",(function(){return w})),r.d(t,"withTheme",(function(){return L})),r.d(t,"ClassNames",(function(){return _})),r.d(t,"Global",(function(){return P})),r.d(t,"createElement",(function(){return Q})),r.d(t,"css",(function(){return B})),r.d(t,"jsx",(function(){return Q})),r.d(t,"keyframes",(function(){return G}));var o=r(0),n=r(67),a=r(25),c=r(59),s=r(81),d=r.n(s),i=r(36),l=r(130),u=r(131),b=r(95),g=/[A-Z]|^ms/g,p=/_EMO_([^_]+?)_([^]*?)_EMO_/g,v=function(e){return 45===e.charCodeAt(1)},f=function(e){return null!=e&&"boolean"!=typeof e},h=Object(b.a)((function(e){return v(e)?e:e.replace(g,"-$&").toLowerCase()})),y=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(p,(function(e,t,r){return m={name:t,styles:r,next:m},t}))}return 1===u.a[e]||v(e)||"number"!=typeof t||0===t?t:t+"px"};function k(e,t,r){if(null==r)return"";if(void 0!==r.__emotion_styles)return r;switch(typeof r){case"boolean":return"";case"object":if(1===r.anim)return m={name:r.name,styles:r.styles,next:m},r.name;if(void 0!==r.styles){var o=r.next;if(void 0!==o)for(;void 0!==o;)m={name:o.name,styles:o.styles,next:m},o=o.next;return r.styles+";"}return function(e,t,r){var o="";if(Array.isArray(r))for(var n=0;n<r.length;n++)o+=k(e,t,r[n])+";";else for(var a in r){var c=r[a];if("object"!=typeof c)null!=t&&void 0!==t[c]?o+=a+"{"+t[c]+"}":f(c)&&(o+=h(a)+":"+y(a,c)+";");else if(!Array.isArray(c)||"string"!=typeof c[0]||null!=t&&void 0!==t[c[0]]){var s=k(e,t,c);switch(a){case"animation":case"animationName":o+=h(a)+":"+s+";";break;default:o+=a+"{"+s+"}"}}else for(var d=0;d<c.length;d++)f(c[d])&&(o+=h(a)+":"+y(a,c[d])+";")}return o}(e,t,r);case"function":if(void 0!==e){var n=m,a=r(e);return m=n,k(e,t,a)}break;case"string":}if(null==t)return r;var c=t[r];return void 0!==c?c:r}var m,j=/label:\s*([^\s;\n{]+)\s*(;|$)/g;var M=function(e,t,r){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var o=!0,n="";m=void 0;var a=e[0];null==a||void 0===a.raw?(o=!1,n+=k(r,t,a)):n+=a[0];for(var c=1;c<e.length;c++)n+=k(r,t,e[c]),o&&(n+=a[c]);j.lastIndex=0;for(var s,d="";null!==(s=j.exec(n));)d+="-"+s[1];return{name:Object(l.a)(n)+d,styles:n,next:m}},N=r(44),I={}.hasOwnProperty,D=o.createContext("undefined"!=typeof HTMLElement?Object(n.a)({key:"css"}):null);var x=D.Provider,O=function(){return Object(o.useContext)(D)},w=function(e){return Object(o.forwardRef)((function(t,r){var n=Object(o.useContext)(D);return e(t,n,r)}))};var S=o.createContext({});var A=function(){return o.useContext(S)},z=Object(c.a)((function(e){return Object(c.a)((function(t){return function(e,t){return"function"==typeof t?t(e):Object(a.a)({},e,t)}(e,t)}))})),C=function(e){var t=o.useContext(S);return e.theme!==t&&(t=z(t)(e.theme)),o.createElement(S.Provider,{value:t},e.children)};function L(e){var t,r,n=e.displayName||e.name||"Component",c=function(t,r){var n=o.useContext(S);return o.createElement(e,Object(a.a)({theme:n,ref:r},t))},s=o.forwardRef(c);return s.displayName="WithTheme("+n+")",t=s,r=e,d()(t,r)}var T="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",U=function(e,t){var r={};for(var o in t)I.call(t,o)&&(r[o]=t[o]);return r[T]=e,r},E=function(e){var t=e.cache,r=e.serialized,o=e.isStringTag;return Object(i.c)(t,r,o),Object(N.a)((function(){return Object(i.b)(t,r,o)})),null};var F=w((function(e,t,r){var n=e.css;"string"==typeof n&&void 0!==t.registered[n]&&(n=t.registered[n]);var a=e[T],c=[n],s="";"string"==typeof e.className?s=Object(i.a)(t.registered,c,e.className):null!=e.className&&(s=e.className+" ");var d=M(c,void 0,o.useContext(S));s+=t.key+"-"+d.name;var l={};for(var u in e)I.call(e,u)&&"css"!==u&&u!==T&&(l[u]=e[u]);return l.ref=r,l.className=s,o.createElement(o.Fragment,null,o.createElement(E,{cache:t,serialized:d,isStringTag:"string"==typeof a}),o.createElement(a,l))})),Q=(r(14),function(e,t){var r=arguments;if(null==t||!I.call(t,"css"))return o.createElement.apply(void 0,r);var n=r.length,a=new Array(n);a[0]=F,a[1]=U(e,t);for(var c=2;c<n;c++)a[c]=r[c];return o.createElement.apply(null,a)}),P=w((function(e,t){var r=e.styles,n=M([r],void 0,o.useContext(S)),a=o.useRef();return Object(N.b)((function(){var e=t.key+"-global",r=new t.sheet.constructor({key:e,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),o=!1,c=document.querySelector('style[data-emotion="'+e+" "+n.name+'"]');return t.sheet.tags.length&&(r.before=t.sheet.tags[0]),null!==c&&(o=!0,c.setAttribute("data-emotion",e),r.hydrate([c])),a.current=[r,o],function(){r.flush()}}),[t]),Object(N.b)((function(){var e=a.current,r=e[0];if(e[1])e[1]=!1;else{if(void 0!==n.next&&Object(i.b)(t,n.next,!0),r.tags.length){var o=r.tags[r.tags.length-1].nextElementSibling;r.before=o,r.flush()}t.insert("",n,r,!1)}}),[t,n.name]),null}));function B(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return M(t)}var G=function(){var e=B.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},R=function e(t){for(var r=t.length,o=0,n="";o<r;o++){var a=t[o];if(null!=a){var c=void 0;switch(typeof a){case"boolean":break;case"object":if(Array.isArray(a))c=e(a);else for(var s in c="",a)a[s]&&s&&(c&&(c+=" "),c+=s);break;default:c=a}c&&(n&&(n+=" "),n+=c)}}return n};function Y(e,t,r){var o=[],n=Object(i.a)(e,o,r);return o.length<2?r:n+t(o)}var W=function(e){var t=e.cache,r=e.serializedArr;return Object(N.a)((function(){for(var e=0;e<r.length;e++)Object(i.b)(t,r[e],!1)})),null},_=w((function(e,t){var r=[],n=function(){for(var e=arguments.length,o=new Array(e),n=0;n<e;n++)o[n]=arguments[n];var a=M(o,t.registered);return r.push(a),Object(i.c)(t,a,!1),t.key+"-"+a.name},a={css:n,cx:function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return Y(t.registered,n,R(r))},theme:o.useContext(S)},c=e.children(a);return!0,o.createElement(o.Fragment,null,o.createElement(W,{cache:t,serializedArr:r}),c)}))},34:function(e,t,r){var o=r(451)();e.exports=o;try{regeneratorRuntime=o}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}},437:function(e,t,r){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.ThemeSwitcher=function(e){var t=e.btnText,r=e.themes,o=void 0===r?(0,l.getDefaultThemes)():r,n=e.statusText,g=e.getTheme,v=e.onClick,h=e.useLocalStorage,k=void 0!==h&&h,m=e.themeButtonProps,j=(0,a.useMemo)((function(){return Object.entries(o).map((function(e){var t=y(e,2),r=t[0];return f(f({},t[1]),{},{id:r})}))}),[o]),M=(0,a.useMemo)((function(){return(0,l.loadTheme)({allThemes:o,theme:null==g?void 0:g(),useLocalStorage:k})}),[g,o,k]),N=y((0,a.useState)(!1),2),I=N[0],D=N[1],x=y((0,a.useState)(M),2),O=x[0],w=x[1],S=(0,a.useRef)(null),A=(0,a.useRef)(null);return(0,u.useOutsideAlerter)(S,(function(e){A.current&&!A.current.contains(e.target)&&D(!1)})),a.default.createElement(a.default.Fragment,null,a.default.createElement(d.Global,{styles:b.styles}),a.default.createElement(s.Manager,null,a.default.createElement(s.Reference,null,(function(e){var r=e.ref;return a.default.createElement(i.ThemeButton,p({},m,{selected:I,ref:function(e){A.current=e,r(e)},onClick:function(e){D((function(e){return!e})),null==e||e.stopPropagation()}}),t,n&&a.default.createElement(c.default,{className:"status",appearance:"inprogress"},n))})),I&&O&&a.default.createElement(i.ThemeDropdown,{dropdownRef:S,items:j,callback:function(e){var t=e.id;D(!1),w(t),k&&(0,l.setLocalStorageTheme)(t),null==v||v(t)},selected:O})))};var n,a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=o(e)&&"function"!=typeof e)return{default:e};var r=g(t);if(r&&r.has(e))return r.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if("default"!==c&&Object.prototype.hasOwnProperty.call(e,c)){var s=a?Object.getOwnPropertyDescriptor(e,c):null;s&&(s.get||s.set)?Object.defineProperty(n,c,s):n[c]=e[c]}return n.default=e,r&&r.set(e,n),n}(r(0)),c=(n=r(456))&&n.__esModule?n:{default:n},s=r(122),d=r(3),i=r(439),l=r(236),u=r(449),b=r(450);function g(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(g=function(e){return e?r:t})(e)}function p(){return(p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){h(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function h(e,t,r){var n;return n=function(e,t){if("object"!=o(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==o(n)?n:String(n))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var o,n,a,c,s=[],d=!0,i=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;d=!1}else for(;!(d=(o=a.call(r)).done)&&(s.push(o.value),s.length!==t);d=!0);}catch(e){i=!0,n=e}finally{try{if(!d&&null!=r.return&&(c=r.return(),Object(c)!==c))return}finally{if(i)throw n}}return s}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return k(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return k(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}},438:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var o=r(0),n=r(266),a=r.n(n),c=r(96),s=r(41);function d(e){var t=e.children,r=e.innerRef,n=o.useContext(c.c),d=o.useCallback((function(e){Object(s.c)(r,e),Object(s.b)(n,e)}),[r,n]);return o.useEffect((function(){return function(){return Object(s.c)(r,null)}}),[]),o.useEffect((function(){a()(Boolean(n),"`Reference` should not be used outside of a `Manager` component.")}),[n]),Object(s.d)(t)({ref:d})}},439:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(440);Object.keys(o).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===o[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}}))}));var n=r(443);Object.keys(n).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===n[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}}))}));var a=r(235);Object.keys(a).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===a[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}}))}))},440:function(e,t,r){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.ThemeButton=void 0;var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=o(e)&&"function"!=typeof e)return{default:e};var r=i(t);if(r&&r.has(e))return r.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if("default"!==c&&Object.prototype.hasOwnProperty.call(e,c)){var s=a?Object.getOwnPropertyDescriptor(e,c):null;s&&(s.get||s.set)?Object.defineProperty(n,c,s):n[c]=e[c]}return n.default=e,r&&r.set(e,n),n}(r(0)),a=d(r(441)),c=d(r(442)),s=["selected","onClick","children","className"];function d(e){return e&&e.__esModule?e:{default:e}}function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(i=function(e){return e?r:t})(e)}function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}function u(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return b(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}function g(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}t.ThemeButton=(0,n.forwardRef)((function(e,t){var r=e.selected,o=e.onClick,d=e.children,i=e.className,b=g(e,s);return n.default.createElement("button",l({id:"theme-button",className:c.default.apply(void 0,["aui-button","interactive",r&&"selected"].concat(u(i||[null]))),role:"menuitem",type:"button",ref:t,onClick:o},b),n.default.createElement("span",{className:"status"},d),n.default.createElement(a.default,{label:"ChevronRightIcon"}))}))},441:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,n=(o=r(0))&&o.__esModule?o:{default:o},a=r(241);const c=e=>n.default.createElement(a.Icon,Object.assign({dangerouslySetGlyph:'<svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path d="M10.294 9.698a.988.988 0 010-1.407 1.01 1.01 0 011.419 0l2.965 2.94a1.09 1.09 0 010 1.548l-2.955 2.93a1.01 1.01 0 01-1.42 0 .988.988 0 010-1.407l2.318-2.297-2.327-2.307z" fill="currentColor" fill-rule="evenodd"/></svg>'},e));c.displayName="ChevronRightIcon";var s=c;t.default=s},442:function(e,t,r){var o;
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function n(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=c(e,a(r)))}return e}function a(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return n.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var o in e)r.call(e,o)&&e[o]&&(t=c(t,o));return t}function c(e,t){return t?e?e+" "+t:e+t:e}e.exports?(n.default=n,e.exports=n):void 0===(o=function(){return n}.apply(t,[]))||(e.exports=o)}()},443:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ThemeDropdown=void 0;var o,n=(o=r(0))&&o.__esModule?o:{default:o},a=r(240),c=r(122),s=r(235);t.ThemeDropdown=function(e){var t=e.items,r=e.callback,o=e.dropdownRef,d=e.selected;return n.default.createElement(c.Popper,{placement:"left-start"},(function(e){var c=e.ref,i=e.style;return n.default.createElement(a.DropdownItemGroup,{id:"theme-dropdown",className:"aui-dropdown2",ref:function(e){e&&(o.current=e,null==c||c(e))},style:i},n.default.createElement("ul",{className:"aui-dropdown2-section"},t.map((function(e){var t=e.id,o=e.icon,a=e.label,c=e.onClick;return n.default.createElement(s.ThemeItem,{key:a,label:a,icon:o,onClick:function(){null==c||c(),t&&(null==r||r({id:t}))},isSelected:d===t})}))))}))}},444:function(e,t,r){"use strict";var o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.bindAll=void 0;var n=r(232);function a(e){if(void 0!==e)return"boolean"==typeof e?{capture:e}:e}t.bindAll=function(e,t,r){var c=t.map((function(t){var c=function(e,t){return null==t?e:o(o({},e),{options:o(o({},a(t)),a(e.options))})}(t,r);return(0,n.bind)(e,c)}));return function(){c.forEach((function(e){return e()}))}}},445:function(e,t){e.exports=function(e,t){t=t||{};var r,o,n,a=e.ownerDocument||e,c=[],s=[],d=function(e){var t=[];return function(r){if(r===e.documentElement)return!1;var o=e.defaultView.getComputedStyle(r);return!!function r(o,n){if(o===e.documentElement)return!1;for(var a=0,c=t.length;a<c;a++)if(t[a][0]===o)return t[a][1];var s=!1;return"none"===(n=n||e.defaultView.getComputedStyle(o)).display?s=!0:o.parentNode&&(s=r(o.parentNode)),t.push([o,s]),s}(r,o)||"hidden"===o.visibility}}(a),i=["input","select","a[href]","textarea","button","[tabindex]"],l=e.querySelectorAll(i.join(","));if(t.includeContainer){var u=Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector;i.some((function(t){return u.call(e,t)}))&&(l=Array.prototype.slice.apply(l)).unshift(e)}for(var b=0,g=l.length;b<g;b++)r=l[b],o=parseInt(r.getAttribute("tabindex"),10),(n=isNaN(o)?r.tabIndex:o)<0||"INPUT"===r.tagName&&"hidden"===r.type||r.disabled||d(r,a)||(0===n?c.push(r):s.push({index:b,tabIndex:n,node:r}));var p=s.sort((function(e,t){return e.tabIndex===t.tabIndex?e.index-t.index:e.tabIndex-t.tabIndex})).map((function(e){return e.node}));return Array.prototype.push.apply(p,c),p}},446:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNDkiIHZpZXdCb3g9IjAgMCA2NCA0OSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPG1hc2sgaWQ9Im1hc2swXzI5MV8xNjkyIiBzdHlsZT0ibWFzay10eXBlOmFscGhhIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSIzMSIgeT0iMCIgd2lkdGg9IjMzIiBoZWlnaHQ9IjQ5Ij4KPHJlY3QgeD0iMzEiIHdpZHRoPSIzMyIgaGVpZ2h0PSI0OSIgZmlsbD0iI0Q5RDlEOSIvPgo8L21hc2s+CjxnIG1hc2s9InVybCgjbWFzazBfMjkxXzE2OTIpIj4KPHBhdGggZD0iTTAuNSAzLjE4MDlDMC41IDIuMDc4NjUgMS4zOTE4MiAxLjE4NDE3IDIuNDk0MDcgMS4xODA5MUw2MS40OTQxIDEuMDA2MDJDNjIuNjAxIDEuMDAyNzQgNjMuNSAxLjg5OTEyIDYzLjUgMy4wMDYwMVY0NS45OTI5QzYzLjUgNDcuMTAwMiA2Mi42MDAzIDQ3Ljk5NjggNjEuNDkyOSA0Ny45OTI5TDIuNDkyOTMgNDcuNzg0MUMxLjM5MTEzIDQ3Ljc4MDIgMC41IDQ2Ljg4NTkgMC41IDQ1Ljc4NDFWMy4xODA5WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTAuNSAzQzAuNSAxLjg5NTQzIDEuMzk1NDMgMSAyLjUgMUg2MS41QzYyLjYwNDYgMSA2My41IDEuODk1NDMgNjMuNSAzVjhIMC41VjNaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMzEuNSAzLjVIMjUuNUMyNC45NDc3IDMuNSAyNC41IDMuOTQ3NzIgMjQuNSA0LjVDMjQuNSA1LjA1MjI4IDI0Ljk0NzcgNS41IDI1LjUgNS41SDMxLjVDMzIuMDUyMyA1LjUgMzIuNSA1LjA1MjI4IDMyLjUgNC41QzMyLjUgMy45NDc3MiAzMi4wNTIzIDMuNSAzMS41IDMuNVoiIGZpbGw9IiNDQ0UwRkYiLz4KPHBhdGggZD0iTTM1LjUgMTJIMjMuNUMyMi4zOTU0IDEyIDIxLjUgMTIuODk1NCAyMS41IDE0QzIxLjUgMTUuMTA0NiAyMi4zOTU0IDE2IDIzLjUgMTZIMzUuNUMzNi42MDQ2IDE2IDM3LjUgMTUuMTA0NiAzNy41IDE0QzM3LjUgMTIuODk1NCAzNi42MDQ2IDEyIDM1LjUgMTJaIiBmaWxsPSIjODk5M0E1Ii8+CjxwYXRoIGQ9Ik01Ni41IDE4SDIyLjVDMjEuOTQ3NyAxOCAyMS41IDE4LjQ0NzcgMjEuNSAxOUMyMS41IDE5LjU1MjMgMjEuOTQ3NyAyMCAyMi41IDIwSDU2LjVDNTcuMDUyMyAyMCA1Ny41IDE5LjU1MjMgNTcuNSAxOUM1Ny41IDE4LjQ0NzcgNTcuMDUyMyAxOCA1Ni41IDE4WiIgZmlsbD0iI0RDREZFNCIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIuOTkyOTIgMS40Nzk1OUMxLjg4NjIyIDEuNDc5NTkgMC45ODQ2MTUgMi4zNzc2MiAwLjk4NDYxNSAzLjQ5MDg4VjQ1LjUwOTFDMC45ODQ2MTUgNDYuNjIyNCAxLjg4NjIyIDQ3LjUyMDQgMi45OTI5MiA0Ny41MjA0SDYxLjAwNzFDNjIuMTEzOCA0Ny41MjA0IDYzLjAxNTQgNDYuNjIyNCA2My4wMTU0IDQ1LjUwOTFWMy40OTA4OEM2My4wMTU0IDIuMzc3NjIgNjIuMTEzOCAxLjQ3OTU5IDYxLjAwNzEgMS40Nzk1OUgyLjk5MjkyWk0wIDMuNDkwODhDMCAxLjg0MTUyIDEuMzM3NTIgMC41IDIuOTkyOTIgMC41SDYxLjAwNzFDNjIuNjYyNSAwLjUgNjQgMS44NDE1MiA2NCAzLjQ5MDg4VjQ1LjUwOTFDNjQgNDcuMTU4NSA2Mi42NjI1IDQ4LjUgNjEuMDA3MSA0OC41SDIuOTkyOTJDMS4zMzc1MiA0OC41IDAgNDcuMTU4NSAwIDQ1LjUwOTFWMy40OTA4OFoiIGZpbGw9IiNEQ0RGRTQiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02NCA3LjVIMVY4LjVIMTdWNDguNUgxOFY4LjVINjRWNy41WiIgZmlsbD0iI0RDREZFNCIvPgo8Y2lyY2xlIGN4PSI1OS41IiBjeT0iNC41IiByPSIxLjUiIGZpbGw9IiMxRDdBRkMiLz4KPHBhdGggZD0iTTI2LjUgMjYuNUMyNi41IDI1Ljk0NzcgMjYuOTQ3NyAyNS41IDI3LjUgMjUuNUgzMy41QzM0LjA1MjMgMjUuNSAzNC41IDI1Ljk0NzcgMzQuNSAyNi41QzM0LjUgMjcuMDUyMyAzNC4wNTIzIDI3LjUgMzMuNSAyNy41SDI3LjVDMjYuOTQ3NyAyNy41IDI2LjUgMjcuMDUyMyAyNi41IDI2LjVaIiBmaWxsPSIjRENERkU0Ii8+CjxwYXRoIGQ9Ik0zOCAyNi41QzM4IDI1Ljk0NzcgMzguNDQ3NyAyNS41IDM5IDI1LjVINDVDNDUuNTUyMyAyNS41IDQ2IDI1Ljk0NzcgNDYgMjYuNUM0NiAyNy4wNTIzIDQ1LjU1MjMgMjcuNSA0NSAyNy41SDM5QzM4LjQ0NzcgMjcuNSAzOCAyNy4wNTIzIDM4IDI2LjVaIiBmaWxsPSIjRENERkU0Ii8+CjxwYXRoIGQ9Ik00OS41IDI2LjVDNDkuNSAyNS45NDc3IDQ5Ljk0NzcgMjUuNSA1MC41IDI1LjVINTYuNUM1Ny4wNTIzIDI1LjUgNTcuNSAyNS45NDc3IDU3LjUgMjYuNUM1Ny41IDI3LjA1MjMgNTcuMDUyMyAyNy41IDU2LjUgMjcuNUg1MC41QzQ5Ljk0NzcgMjcuNSA0OS41IDI3LjA1MjMgNDkuNSAyNi41WiIgZmlsbD0iI0RDREZFNCIvPgo8cGF0aCBkPSJNMjYuNSAzMS41QzI2LjUgMzAuOTQ3NyAyNi45NDc3IDMwLjUgMjcuNSAzMC41SDMzLjVDMzQuMDUyMyAzMC41IDM0LjUgMzAuOTQ3NyAzNC41IDMxLjVDMzQuNSAzMi4wNTIzIDM0LjA1MjMgMzIuNSAzMy41IDMyLjVIMjcuNUMyNi45NDc3IDMyLjUgMjYuNSAzMi4wNTIzIDI2LjUgMzEuNVoiIGZpbGw9IiNEQ0RGRTQiLz4KPHBhdGggZD0iTTM4IDMxLjVDMzggMzAuOTQ3NyAzOC40NDc3IDMwLjUgMzkgMzAuNUg0NUM0NS41NTIzIDMwLjUgNDYgMzAuOTQ3NyA0NiAzMS41QzQ2IDMyLjA1MjMgNDUuNTUyMyAzMi41IDQ1IDMyLjVIMzlDMzguNDQ3NyAzMi41IDM4IDMyLjA1MjMgMzggMzEuNVoiIGZpbGw9IiNEQ0RGRTQiLz4KPHBhdGggZD0iTTQ5LjUgMzEuNUM0OS41IDMwLjk0NzcgNDkuOTQ3NyAzMC41IDUwLjUgMzAuNUg1Ni41QzU3LjA1MjMgMzAuNSA1Ny41IDMwLjk0NzcgNTcuNSAzMS41QzU3LjUgMzIuMDUyMyA1Ny4wNTIzIDMyLjUgNTYuNSAzMi41SDUwLjVDNDkuOTQ3NyAzMi41IDQ5LjUgMzIuMDUyMyA0OS41IDMxLjVaIiBmaWxsPSIjRENERkU0Ii8+CjxwYXRoIGQ9Ik0yNi41IDM2LjVDMjYuNSAzNS45NDc3IDI2Ljk0NzcgMzUuNSAyNy41IDM1LjVIMzMuNUMzNC4wNTIzIDM1LjUgMzQuNSAzNS45NDc3IDM0LjUgMzYuNUMzNC41IDM3LjA1MjMgMzQuMDUyMyAzNy41IDMzLjUgMzcuNUgyNy41QzI2Ljk0NzcgMzcuNSAyNi41IDM3LjA1MjMgMjYuNSAzNi41WiIgZmlsbD0iI0RDREZFNCIvPgo8cGF0aCBkPSJNMzggMzYuNUMzOCAzNS45NDc3IDM4LjQ0NzcgMzUuNSAzOSAzNS41SDQ1QzQ1LjU1MjMgMzUuNSA0NiAzNS45NDc3IDQ2IDM2LjVDNDYgMzcuMDUyMyA0NS41NTIzIDM3LjUgNDUgMzcuNUgzOUMzOC40NDc3IDM3LjUgMzggMzcuMDUyMyAzOCAzNi41WiIgZmlsbD0iI0RDREZFNCIvPgo8cGF0aCBkPSJNNDkuNSAzNi41QzQ5LjUgMzUuOTQ3NyA0OS45NDc3IDM1LjUgNTAuNSAzNS41SDU2LjVDNTcuMDUyMyAzNS41IDU3LjUgMzUuOTQ3NyA1Ny41IDM2LjVDNTcuNSAzNy4wNTIzIDU3LjA1MjMgMzcuNSA1Ni41IDM3LjVINTAuNUM0OS45NDc3IDM3LjUgNDkuNSAzNy4wNTIzIDQ5LjUgMzYuNVoiIGZpbGw9IiNEQ0RGRTQiLz4KPC9nPgo8bWFzayBpZD0ibWFzazFfMjkxXzE2OTIiIHN0eWxlPSJtYXNrLXR5cGU6YWxwaGEiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjAiIHk9IjAiIHdpZHRoPSIzMSIgaGVpZ2h0PSI0OSI+CjxyZWN0IHdpZHRoPSIzMSIgaGVpZ2h0PSI0OSIgZmlsbD0iI0Q5RDlEOSIvPgo8L21hc2s+CjxnIG1hc2s9InVybCgjbWFzazFfMjkxXzE2OTIpIj4KPHBhdGggZD0iTTAuNSAyLjk5NDAxQzAuNSAxLjg5MTc4IDEuMzkxNzkgMC45OTczMTcgMi40OTQwMiAwLjk5NDAyMUw2MS40OTQgMC44MTc1OTVDNjIuNjAwOSAwLjgxNDI4NSA2My41IDEuNzEwNjggNjMuNSAyLjgxNzU5VjQ2LjIxNzRDNjMuNSA0Ny4zMjQ4IDYyLjYwMDIgNDguMjIxNCA2MS40OTI5IDQ4LjIxNzRMMi40OTI4NiA0OC4wMDY4QzEuMzkxMDkgNDguMDAyOSAwLjUgNDcuMTA4NiAwLjUgNDYuMDA2OFYyLjk5NDAxWiIgZmlsbD0iIzFEMjEyNSIvPgo8cGF0aCBkPSJNMSA4SDE3VjQ4SDNDMS44OTU0MyA0OCAxIDQ3LjEwNDYgMSA0NlY4WiIgZmlsbD0iIzFEMjEyNSIvPgo8cGF0aCBkPSJNMC41IDNDMC41IDEuODk1NDMgMS4zOTU0MyAxIDIuNSAxSDYxLjVDNjIuNjA0NiAxIDYzLjUgMS44OTU0MyA2My41IDNWOEgwLjVWM1oiIGZpbGw9IiMxRDIxMjUiLz4KPHBhdGggZD0iTTExLjUgMy41SDUuNUM0Ljk0NzcyIDMuNSA0LjUgMy45NDc3MiA0LjUgNC41QzQuNSA1LjA1MjI4IDQuOTQ3NzIgNS41IDUuNSA1LjVIMTEuNUMxMi4wNTIzIDUuNSAxMi41IDUuMDUyMjggMTIuNSA0LjVDMTIuNSAzLjk0NzcyIDEyLjA1MjMgMy41IDExLjUgMy41WiIgZmlsbD0iIzQxNEQ1NyIvPgo8cGF0aCBkPSJNMjEuNSAzLjVIMTUuNUMxNC45NDc3IDMuNSAxNC41IDMuOTQ3NzIgMTQuNSA0LjVDMTQuNSA1LjA1MjI4IDE0Ljk0NzcgNS41IDE1LjUgNS41SDIxLjVDMjIuMDUyMyA1LjUgMjIuNSA1LjA1MjI4IDIyLjUgNC41QzIyLjUgMy45NDc3MiAyMi4wNTIzIDMuNSAyMS41IDMuNVoiIGZpbGw9IiM0MTRENTciLz4KPHBhdGggZD0iTTMxLjUgMy41SDI1LjVDMjQuOTQ3NyAzLjUgMjQuNSAzLjk0NzcyIDI0LjUgNC41QzI0LjUgNS4wNTIyOCAyNC45NDc3IDUuNSAyNS41IDUuNUgzMS41QzMyLjA1MjMgNS41IDMyLjUgNS4wNTIyOCAzMi41IDQuNUMzMi41IDMuOTQ3NzIgMzIuMDUyMyAzLjUgMzEuNSAzLjVaIiBmaWxsPSIjNDE0RDU3Ii8+CjxwYXRoIGQ9Ik0zNS41IDEySDIzLjVDMjIuMzk1NCAxMiAyMS41IDEyLjg5NTQgMjEuNSAxNEMyMS41IDE1LjEwNDYgMjIuMzk1NCAxNiAyMy41IDE2SDM1LjVDMzYuNjA0NiAxNiAzNy41IDE1LjEwNDYgMzcuNSAxNEMzNy41IDEyLjg5NTQgMzYuNjA0NiAxMiAzNS41IDEyWiIgZmlsbD0iIzVDNkM3QSIvPgo8cGF0aCBkPSJNNTYuNSAxOEgyMi41QzIxLjk0NzcgMTggMjEuNSAxOC40NDc3IDIxLjUgMTlDMjEuNSAxOS41NTIzIDIxLjk0NzcgMjAgMjIuNSAyMEg1Ni41QzU3LjA1MjMgMjAgNTcuNSAxOS41NTIzIDU3LjUgMTlDNTcuNSAxOC40NDc3IDU3LjA1MjMgMTggNTYuNSAxOFoiIGZpbGw9IiM0MTRENTciLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yLjk5MjkyIDEuNDc5NTlDMS44ODYyMiAxLjQ3OTU5IDAuOTg0NjE1IDIuMzc3NjIgMC45ODQ2MTUgMy40OTA4OFY0NS41MDkxQzAuOTg0NjE1IDQ2LjYyMjQgMS44ODYyMiA0Ny41MjA0IDIuOTkyOTIgNDcuNTIwNEg2MS4wMDcxQzYyLjExMzggNDcuNTIwNCA2My4wMTU0IDQ2LjYyMjQgNjMuMDE1NCA0NS41MDkxVjMuNDkwODhDNjMuMDE1NCAyLjM3NzYyIDYyLjExMzggMS40Nzk1OSA2MS4wMDcxIDEuNDc5NTlIMi45OTI5MlpNMCAzLjQ5MDg4QzAgMS44NDE1MiAxLjMzNzUyIDAuNSAyLjk5MjkyIDAuNUg2MS4wMDcxQzYyLjY2MjUgMC41IDY0IDEuODQxNTIgNjQgMy40OTA4OFY0NS41MDkxQzY0IDQ3LjE1ODUgNjIuNjYyNSA0OC41IDYxLjAwNzEgNDguNUgyLjk5MjkyQzEuMzM3NTIgNDguNSAwIDQ3LjE1ODUgMCA0NS41MDkxVjMuNDkwODhaIiBmaWxsPSIjRENERkU0Ii8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNjQgNy41SDFWOC41SDE3VjQ3LjVIMThWOC41SDY0VjcuNVoiIGZpbGw9IiM0NDRGNTkiLz4KPGNpcmNsZSBjeD0iMjMiIGN5PSIyNi41IiByPSIxLjUiIGZpbGw9IiM1QzZDN0EiLz4KPGNpcmNsZSBjeD0iMjMiIGN5PSIzMS41IiByPSIxLjUiIGZpbGw9IiM1QzZDN0EiLz4KPGNpcmNsZSBjeD0iMjMiIGN5PSIzNi41IiByPSIxLjUiIGZpbGw9IiM1QzZDN0EiLz4KPHBhdGggZD0iTTI2LjUgMjYuNUMyNi41IDI1Ljk0NzcgMjYuOTQ3NyAyNS41IDI3LjUgMjUuNUgzMy41QzM0LjA1MjMgMjUuNSAzNC41IDI1Ljk0NzcgMzQuNSAyNi41QzM0LjUgMjcuMDUyMyAzNC4wNTIzIDI3LjUgMzMuNSAyNy41SDI3LjVDMjYuOTQ3NyAyNy41IDI2LjUgMjcuMDUyMyAyNi41IDI2LjVaIiBmaWxsPSIjNDE0RDU3Ii8+CjxwYXRoIGQ9Ik0yNi41IDMxLjVDMjYuNSAzMC45NDc3IDI2Ljk0NzcgMzAuNSAyNy41IDMwLjVIMzMuNUMzNC4wNTIzIDMwLjUgMzQuNSAzMC45NDc3IDM0LjUgMzEuNUMzNC41IDMyLjA1MjMgMzQuMDUyMyAzMi41IDMzLjUgMzIuNUgyNy41QzI2Ljk0NzcgMzIuNSAyNi41IDMyLjA1MjMgMjYuNSAzMS41WiIgZmlsbD0iIzQxNEQ1NyIvPgo8cGF0aCBkPSJNMjYuNSAzNi41QzI2LjUgMzUuOTQ3NyAyNi45NDc3IDM1LjUgMjcuNSAzNS41SDMzLjVDMzQuMDUyMyAzNS41IDM0LjUgMzUuOTQ3NyAzNC41IDM2LjVDMzQuNSAzNy4wNTIzIDM0LjA1MjMgMzcuNSAzMy41IDM3LjVIMjcuNUMyNi45NDc3IDM3LjUgMjYuNSAzNy4wNTIzIDI2LjUgMzYuNVoiIGZpbGw9IiM0MTRENTciLz4KPC9nPgo8L3N2Zz4K"},447:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA2NCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAuNSAyLjQ5NDAxQzAuNSAxLjM5MTc4IDEuMzkxNzkgMC40OTczMTcgMi40OTQwMiAwLjQ5NDAyMUw2MS40OTQgMC4zMTc1OTVDNjIuNjAwOSAwLjMxNDI4NSA2My41IDEuMjEwNjggNjMuNSAyLjMxNzU5VjQ1LjcxNzRDNjMuNSA0Ni44MjQ4IDYyLjYwMDIgNDcuNzIxNCA2MS40OTI5IDQ3LjcxNzRMMi40OTI4NiA0Ny41MDY4QzEuMzkxMDkgNDcuNTAyOSAwLjUgNDYuNjA4NiAwLjUgNDUuNTA2OFYyLjQ5NDAxWiIgZmlsbD0iIzFEMjEyNSIvPgo8cGF0aCBkPSJNMSA3LjVIMTdWNDcuNUgzQzEuODk1NDMgNDcuNSAxIDQ2LjYwNDYgMSA0NS41VjcuNVoiIGZpbGw9IiMxRDIxMjUiLz4KPHBhdGggZD0iTTAuNSAyLjVDMC41IDEuMzk1NDMgMS4zOTU0MyAwLjUgMi41IDAuNUg2MS41QzYyLjYwNDYgMC41IDYzLjUgMS4zOTU0MyA2My41IDIuNVY3LjVIMC41VjIuNVoiIGZpbGw9IiMxRDIxMjUiLz4KPHBhdGggZD0iTTExLjUgM0g1LjVDNC45NDc3MiAzIDQuNSAzLjQ0NzcyIDQuNSA0QzQuNSA0LjU1MjI4IDQuOTQ3NzIgNSA1LjUgNUgxMS41QzEyLjA1MjMgNSAxMi41IDQuNTUyMjggMTIuNSA0QzEyLjUgMy40NDc3MiAxMi4wNTIzIDMgMTEuNSAzWiIgZmlsbD0iIzQxNEQ1NyIvPgo8cGF0aCBkPSJNMjEuNSAzSDE1LjVDMTQuOTQ3NyAzIDE0LjUgMy40NDc3MiAxNC41IDRDMTQuNSA0LjU1MjI4IDE0Ljk0NzcgNSAxNS41IDVIMjEuNUMyMi4wNTIzIDUgMjIuNSA0LjU1MjI4IDIyLjUgNEMyMi41IDMuNDQ3NzIgMjIuMDUyMyAzIDIxLjUgM1oiIGZpbGw9IiM0MTRENTciLz4KPHBhdGggZD0iTTMxLjUgM0gyNS41QzI0Ljk0NzcgMyAyNC41IDMuNDQ3NzIgMjQuNSA0QzI0LjUgNC41NTIyOCAyNC45NDc3IDUgMjUuNSA1SDMxLjVDMzIuMDUyMyA1IDMyLjUgNC41NTIyOCAzMi41IDRDMzIuNSAzLjQ0NzcyIDMyLjA1MjMgMyAzMS41IDNaIiBmaWxsPSIjNDE0RDU3Ii8+CjxwYXRoIGQ9Ik0zNS41IDExLjVIMjMuNUMyMi4zOTU0IDExLjUgMjEuNSAxMi4zOTU0IDIxLjUgMTMuNUMyMS41IDE0LjYwNDYgMjIuMzk1NCAxNS41IDIzLjUgMTUuNUgzNS41QzM2LjYwNDYgMTUuNSAzNy41IDE0LjYwNDYgMzcuNSAxMy41QzM3LjUgMTIuMzk1NCAzNi42MDQ2IDExLjUgMzUuNSAxMS41WiIgZmlsbD0iIzVDNkM3QSIvPgo8cGF0aCBkPSJNNTYuNSAxNy41SDIyLjVDMjEuOTQ3NyAxNy41IDIxLjUgMTcuOTQ3NyAyMS41IDE4LjVDMjEuNSAxOS4wNTIzIDIxLjk0NzcgMTkuNSAyMi41IDE5LjVINTYuNUM1Ny4wNTIzIDE5LjUgNTcuNSAxOS4wNTIzIDU3LjUgMTguNUM1Ny41IDE3Ljk0NzcgNTcuMDUyMyAxNy41IDU2LjUgMTcuNVoiIGZpbGw9IiM0MTRENTciLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yLjk5MjkyIDAuOTc5NTkyQzEuODg2MjIgMC45Nzk1OTIgMC45ODQ2MTUgMS44Nzc2MiAwLjk4NDYxNSAyLjk5MDg4VjQ1LjAwOTFDMC45ODQ2MTUgNDYuMTIyNCAxLjg4NjIyIDQ3LjAyMDQgMi45OTI5MiA0Ny4wMjA0SDYxLjAwNzFDNjIuMTEzOCA0Ny4wMjA0IDYzLjAxNTQgNDYuMTIyNCA2My4wMTU0IDQ1LjAwOTFWMi45OTA4OEM2My4wMTU0IDEuODc3NjIgNjIuMTEzOCAwLjk3OTU5MiA2MS4wMDcxIDAuOTc5NTkySDIuOTkyOTJaTTAgMi45OTA4OEMwIDEuMzQxNTIgMS4zMzc1MiAwIDIuOTkyOTIgMEg2MS4wMDcxQzYyLjY2MjUgMCA2NCAxLjM0MTUyIDY0IDIuOTkwODhWNDUuMDA5MUM2NCA0Ni42NTg1IDYyLjY2MjUgNDggNjEuMDA3MSA0OEgyLjk5MjkyQzEuMzM3NTIgNDggMCA0Ni42NTg1IDAgNDUuMDA5MVYyLjk5MDg4WiIgZmlsbD0iIzQ0NEU1OSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTY0IDdIMVY4SDE3VjQ4SDE4VjhINjRWN1oiIGZpbGw9IiM0NDRGNTkiLz4KPGNpcmNsZSBjeD0iNTkuNSIgY3k9IjQiIHI9IjEuNSIgZmlsbD0iIzFEN0FGQyIvPgo8Y2lyY2xlIGN4PSIyMyIgY3k9IjI2IiByPSIxLjUiIGZpbGw9IiM1QzZDN0EiLz4KPGNpcmNsZSBjeD0iMjMiIGN5PSIzMSIgcj0iMS41IiBmaWxsPSIjNUM2QzdBIi8+CjxjaXJjbGUgY3g9IjIzIiBjeT0iMzYiIHI9IjEuNSIgZmlsbD0iIzVDNkM3QSIvPgo8cGF0aCBkPSJNMjYuNSAyNkMyNi41IDI1LjQ0NzcgMjYuOTQ3NyAyNSAyNy41IDI1SDMzLjVDMzQuMDUyMyAyNSAzNC41IDI1LjQ0NzcgMzQuNSAyNkMzNC41IDI2LjU1MjMgMzQuMDUyMyAyNyAzMy41IDI3SDI3LjVDMjYuOTQ3NyAyNyAyNi41IDI2LjU1MjMgMjYuNSAyNloiIGZpbGw9IiM0MTRENTciLz4KPHBhdGggZD0iTTM4IDI2QzM4IDI1LjQ0NzcgMzguNDQ3NyAyNSAzOSAyNUg0NUM0NS41NTIzIDI1IDQ2IDI1LjQ0NzcgNDYgMjZDNDYgMjYuNTUyMyA0NS41NTIzIDI3IDQ1IDI3SDM5QzM4LjQ0NzcgMjcgMzggMjYuNTUyMyAzOCAyNloiIGZpbGw9IiM0MTRENTciLz4KPHBhdGggZD0iTTQ5LjUgMjZDNDkuNSAyNS40NDc3IDQ5Ljk0NzcgMjUgNTAuNSAyNUg1Ni41QzU3LjA1MjMgMjUgNTcuNSAyNS40NDc3IDU3LjUgMjZDNTcuNSAyNi41NTIzIDU3LjA1MjMgMjcgNTYuNSAyN0g1MC41QzQ5Ljk0NzcgMjcgNDkuNSAyNi41NTIzIDQ5LjUgMjZaIiBmaWxsPSIjNDE0RDU3Ii8+CjxwYXRoIGQ9Ik0yNi41IDMxQzI2LjUgMzAuNDQ3NyAyNi45NDc3IDMwIDI3LjUgMzBIMzMuNUMzNC4wNTIzIDMwIDM0LjUgMzAuNDQ3NyAzNC41IDMxQzM0LjUgMzEuNTUyMyAzNC4wNTIzIDMyIDMzLjUgMzJIMjcuNUMyNi45NDc3IDMyIDI2LjUgMzEuNTUyMyAyNi41IDMxWiIgZmlsbD0iIzQxNEQ1NyIvPgo8cGF0aCBkPSJNMzggMzFDMzggMzAuNDQ3NyAzOC40NDc3IDMwIDM5IDMwSDQ1QzQ1LjU1MjMgMzAgNDYgMzAuNDQ3NyA0NiAzMUM0NiAzMS41NTIzIDQ1LjU1MjMgMzIgNDUgMzJIMzlDMzguNDQ3NyAzMiAzOCAzMS41NTIzIDM4IDMxWiIgZmlsbD0iIzQxNEQ1NyIvPgo8cGF0aCBkPSJNNDkuNSAzMUM0OS41IDMwLjQ0NzcgNDkuOTQ3NyAzMCA1MC41IDMwSDU2LjVDNTcuMDUyMyAzMCA1Ny41IDMwLjQ0NzcgNTcuNSAzMUM1Ny41IDMxLjU1MjMgNTcuMDUyMyAzMiA1Ni41IDMySDUwLjVDNDkuOTQ3NyAzMiA0OS41IDMxLjU1MjMgNDkuNSAzMVoiIGZpbGw9IiM0MTRENTciLz4KPHBhdGggZD0iTTI2LjUgMzZDMjYuNSAzNS40NDc3IDI2Ljk0NzcgMzUgMjcuNSAzNUgzMy41QzM0LjA1MjMgMzUgMzQuNSAzNS40NDc3IDM0LjUgMzZDMzQuNSAzNi41NTIzIDM0LjA1MjMgMzcgMzMuNSAzN0gyNy41QzI2Ljk0NzcgMzcgMjYuNSAzNi41NTIzIDI2LjUgMzZaIiBmaWxsPSIjNDE0RDU3Ii8+CjxwYXRoIGQ9Ik0zOCAzNkMzOCAzNS40NDc3IDM4LjQ0NzcgMzUgMzkgMzVINDVDNDUuNTUyMyAzNSA0NiAzNS40NDc3IDQ2IDM2QzQ2IDM2LjU1MjMgNDUuNTUyMyAzNyA0NSAzN0gzOUMzOC40NDc3IDM3IDM4IDM2LjU1MjMgMzggMzZaIiBmaWxsPSIjNDE0RDU3Ii8+CjxwYXRoIGQ9Ik00OS41IDM2QzQ5LjUgMzUuNDQ3NyA0OS45NDc3IDM1IDUwLjUgMzVINTYuNUM1Ny4wNTIzIDM1IDU3LjUgMzUuNDQ3NyA1Ny41IDM2QzU3LjUgMzYuNTUyMyA1Ny4wNTIzIDM3IDU2LjUgMzdINTAuNUM0OS45NDc3IDM3IDQ5LjUgMzYuNTUyMyA0OS41IDM2WiIgZmlsbD0iIzQxNEQ1NyIvPgo8L3N2Zz4K"},448:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA2NCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAuNSAyLjY4MDlDMC41IDEuNTc4NjUgMS4zOTE4MiAwLjY4NDE3NSAyLjQ5NDA3IDAuNjgwOTA3TDYxLjQ5NDEgMC41MDYwMTlDNjIuNjAxIDAuNTAyNzM3IDYzLjUgMS4zOTkxMiA2My41IDIuNTA2MDFWNDUuNDkyOUM2My41IDQ2LjYwMDIgNjIuNjAwMyA0Ny40OTY4IDYxLjQ5MjkgNDcuNDkyOUwyLjQ5MjkzIDQ3LjI4NDFDMS4zOTExMyA0Ny4yODAyIDAuNSA0Ni4zODU5IDAuNSA0NS4yODQxVjIuNjgwOVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xIDcuNUgxN1Y0Ny41SDNDMS44OTU0MyA0Ny41IDEgNDYuNjA0NiAxIDQ1LjVWNy41WiIgZmlsbD0iI0Y3RjhGOSIvPgo8cGF0aCBkPSJNMC41IDIuNUMwLjUgMS4zOTU0MyAxLjM5NTQzIDAuNSAyLjUgMC41SDYxLjVDNjIuNjA0NiAwLjUgNjMuNSAxLjM5NTQzIDYzLjUgMi41VjcuNUgwLjVWMi41WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTExLjUgM0g1LjVDNC45NDc3MiAzIDQuNSAzLjQ0NzcyIDQuNSA0QzQuNSA0LjU1MjI4IDQuOTQ3NzIgNSA1LjUgNUgxMS41QzEyLjA1MjMgNSAxMi41IDQuNTUyMjggMTIuNSA0QzEyLjUgMy40NDc3MiAxMi4wNTIzIDMgMTEuNSAzWiIgZmlsbD0iI0NDRTBGRiIvPgo8cGF0aCBkPSJNMjEuNSAzSDE1LjVDMTQuOTQ3NyAzIDE0LjUgMy40NDc3MiAxNC41IDRDMTQuNSA0LjU1MjI4IDE0Ljk0NzcgNSAxNS41IDVIMjEuNUMyMi4wNTIzIDUgMjIuNSA0LjU1MjI4IDIyLjUgNEMyMi41IDMuNDQ3NzIgMjIuMDUyMyAzIDIxLjUgM1oiIGZpbGw9IiNDQ0UwRkYiLz4KPHBhdGggZD0iTTMxLjUgM0gyNS41QzI0Ljk0NzcgMyAyNC41IDMuNDQ3NzIgMjQuNSA0QzI0LjUgNC41NTIyOCAyNC45NDc3IDUgMjUuNSA1SDMxLjVDMzIuMDUyMyA1IDMyLjUgNC41NTIyOCAzMi41IDRDMzIuNSAzLjQ0NzcyIDMyLjA1MjMgMyAzMS41IDNaIiBmaWxsPSIjQ0NFMEZGIi8+CjxwYXRoIGQ9Ik0zNS41IDExLjVIMjMuNUMyMi4zOTU0IDExLjUgMjEuNSAxMi4zOTU0IDIxLjUgMTMuNUMyMS41IDE0LjYwNDYgMjIuMzk1NCAxNS41IDIzLjUgMTUuNUgzNS41QzM2LjYwNDYgMTUuNSAzNy41IDE0LjYwNDYgMzcuNSAxMy41QzM3LjUgMTIuMzk1NCAzNi42MDQ2IDExLjUgMzUuNSAxMS41WiIgZmlsbD0iIzg5OTNBNSIvPgo8cGF0aCBkPSJNNTYuNSAxNy41SDIyLjVDMjEuOTQ3NyAxNy41IDIxLjUgMTcuOTQ3NyAyMS41IDE4LjVDMjEuNSAxOS4wNTIzIDIxLjk0NzcgMTkuNSAyMi41IDE5LjVINTYuNUM1Ny4wNTIzIDE5LjUgNTcuNSAxOS4wNTIzIDU3LjUgMTguNUM1Ny41IDE3Ljk0NzcgNTcuMDUyMyAxNy41IDU2LjUgMTcuNVoiIGZpbGw9IiNERkUxRTYiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yLjk5MjkyIDAuOTc5NTkyQzEuODg2MjIgMC45Nzk1OTIgMC45ODQ2MTUgMS44Nzc2MiAwLjk4NDYxNSAyLjk5MDg4VjQ1LjAwOTFDMC45ODQ2MTUgNDYuMTIyNCAxLjg4NjIyIDQ3LjAyMDQgMi45OTI5MiA0Ny4wMjA0SDYxLjAwNzFDNjIuMTEzOCA0Ny4wMjA0IDYzLjAxNTQgNDYuMTIyNCA2My4wMTU0IDQ1LjAwOTFWMi45OTA4OEM2My4wMTU0IDEuODc3NjIgNjIuMTEzOCAwLjk3OTU5MiA2MS4wMDcxIDAuOTc5NTkySDIuOTkyOTJaTTAgMi45OTA4OEMwIDEuMzQxNTIgMS4zMzc1MiAwIDIuOTkyOTIgMEg2MS4wMDcxQzYyLjY2MjUgMCA2NCAxLjM0MTUyIDY0IDIuOTkwODhWNDUuMDA5MUM2NCA0Ni42NTg1IDYyLjY2MjUgNDggNjEuMDA3MSA0OEgyLjk5MjkyQzEuMzM3NTIgNDggMCA0Ni42NTg1IDAgNDUuMDA5MVYyLjk5MDg4WiIgZmlsbD0iI0RDREZFNCIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTY0IDdIMVY4SDE3VjQ4SDE4VjhINjRWN1oiIGZpbGw9IiNEQ0RGRTQiLz4KPGNpcmNsZSBjeD0iNTkuNSIgY3k9IjQiIHI9IjEuNSIgZmlsbD0iIzFEN0FGQyIvPgo8Y2lyY2xlIGN4PSIyMyIgY3k9IjI2IiByPSIxLjUiIGZpbGw9IiNERkUxRTYiLz4KPGNpcmNsZSBjeD0iMjMiIGN5PSIzMSIgcj0iMS41IiBmaWxsPSIjREZFMUU2Ii8+CjxjaXJjbGUgY3g9IjIzIiBjeT0iMzYiIHI9IjEuNSIgZmlsbD0iI0RGRTFFNiIvPgo8cGF0aCBkPSJNMjYuNSAyNkMyNi41IDI1LjQ0NzcgMjYuOTQ3NyAyNSAyNy41IDI1SDMzLjVDMzQuMDUyMyAyNSAzNC41IDI1LjQ0NzcgMzQuNSAyNkMzNC41IDI2LjU1MjMgMzQuMDUyMyAyNyAzMy41IDI3SDI3LjVDMjYuOTQ3NyAyNyAyNi41IDI2LjU1MjMgMjYuNSAyNloiIGZpbGw9IiNERkUxRTYiLz4KPHBhdGggZD0iTTM4IDI2QzM4IDI1LjQ0NzcgMzguNDQ3NyAyNSAzOSAyNUg0NUM0NS41NTIzIDI1IDQ2IDI1LjQ0NzcgNDYgMjZDNDYgMjYuNTUyMyA0NS41NTIzIDI3IDQ1IDI3SDM5QzM4LjQ0NzcgMjcgMzggMjYuNTUyMyAzOCAyNloiIGZpbGw9IiNERkUxRTYiLz4KPHBhdGggZD0iTTQ5LjUgMjZDNDkuNSAyNS40NDc3IDQ5Ljk0NzcgMjUgNTAuNSAyNUg1Ni41QzU3LjA1MjMgMjUgNTcuNSAyNS40NDc3IDU3LjUgMjZDNTcuNSAyNi41NTIzIDU3LjA1MjMgMjcgNTYuNSAyN0g1MC41QzQ5Ljk0NzcgMjcgNDkuNSAyNi41NTIzIDQ5LjUgMjZaIiBmaWxsPSIjREZFMUU2Ii8+CjxwYXRoIGQ9Ik0yNi41IDMxQzI2LjUgMzAuNDQ3NyAyNi45NDc3IDMwIDI3LjUgMzBIMzMuNUMzNC4wNTIzIDMwIDM0LjUgMzAuNDQ3NyAzNC41IDMxQzM0LjUgMzEuNTUyMyAzNC4wNTIzIDMyIDMzLjUgMzJIMjcuNUMyNi45NDc3IDMyIDI2LjUgMzEuNTUyMyAyNi41IDMxWiIgZmlsbD0iI0RGRTFFNiIvPgo8cGF0aCBkPSJNMzggMzFDMzggMzAuNDQ3NyAzOC40NDc3IDMwIDM5IDMwSDQ1QzQ1LjU1MjMgMzAgNDYgMzAuNDQ3NyA0NiAzMUM0NiAzMS41NTIzIDQ1LjU1MjMgMzIgNDUgMzJIMzlDMzguNDQ3NyAzMiAzOCAzMS41NTIzIDM4IDMxWiIgZmlsbD0iI0RGRTFFNiIvPgo8cGF0aCBkPSJNNDkuNSAzMUM0OS41IDMwLjQ0NzcgNDkuOTQ3NyAzMCA1MC41IDMwSDU2LjVDNTcuMDUyMyAzMCA1Ny41IDMwLjQ0NzcgNTcuNSAzMUM1Ny41IDMxLjU1MjMgNTcuMDUyMyAzMiA1Ni41IDMySDUwLjVDNDkuOTQ3NyAzMiA0OS41IDMxLjU1MjMgNDkuNSAzMVoiIGZpbGw9IiNERkUxRTYiLz4KPHBhdGggZD0iTTI2LjUgMzZDMjYuNSAzNS40NDc3IDI2Ljk0NzcgMzUgMjcuNSAzNUgzMy41QzM0LjA1MjMgMzUgMzQuNSAzNS40NDc3IDM0LjUgMzZDMzQuNSAzNi41NTIzIDM0LjA1MjMgMzcgMzMuNSAzN0gyNy41QzI2Ljk0NzcgMzcgMjYuNSAzNi41NTIzIDI2LjUgMzZaIiBmaWxsPSIjREZFMUU2Ii8+CjxwYXRoIGQ9Ik0zOCAzNkMzOCAzNS40NDc3IDM4LjQ0NzcgMzUgMzkgMzVINDVDNDUuNTUyMyAzNSA0NiAzNS40NDc3IDQ2IDM2QzQ2IDM2LjU1MjMgNDUuNTUyMyAzNyA0NSAzN0gzOUMzOC40NDc3IDM3IDM4IDM2LjU1MjMgMzggMzZaIiBmaWxsPSIjREZFMUU2Ii8+CjxwYXRoIGQ9Ik00OS41IDM2QzQ5LjUgMzUuNDQ3NyA0OS45NDc3IDM1IDUwLjUgMzVINTYuNUM1Ny4wNTIzIDM1IDU3LjUgMzUuNDQ3NyA1Ny41IDM2QzU3LjUgMzYuNTUyMyA1Ny4wNTIzIDM3IDU2LjUgMzdINTAuNUM0OS45NDc3IDM3IDQ5LjUgMzYuNTUyMyA0OS41IDM2WiIgZmlsbD0iI0RGRTFFNiIvPgo8L3N2Zz4K"},449:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useOutsideAlerter=void 0;var o=r(0);t.useOutsideAlerter=function(e,t){(0,o.useEffect)((function(){var r=function(r){e.current&&!e.current.contains(r.target)&&(null==t||t(r))};return document.addEventListener("mouseup",r),function(){return document.removeEventListener("mouseup",r)}}),[e])}},450:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.styles=void 0;var o=r(455),n=r(3);t.styles=(0,n.css)({"#theme-button":{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:0,paddingBottom:0,".status":{display:"flex",alignItems:"center","& > :nth-of-type(odd)":{marginLeft:"0.5rem"}},marginTop:2,"&.selected":{backgroundColor:(0,o.token)("color.background.selected","#deebff"),"& > span":{color:(0,o.token)("color.text.selected","#0052cc")}},"+ #theme-dropdown":{backgroundColor:(0,o.token)("elevation.surface.overlay","#fff"),boxShadow:(0,o.token)("elevation.shadow.overlay","0px 4px 8px rgba(9, 30, 66, 0.25), 0px 0px 1px rgba(9, 30, 66, 0.31)"),borderRadius:4,minWidth:214,maxWidth:300,display:"block",button:{whiteSpace:"normal",wordWrap:"normal","&.theme-selected":{backgroundColor:(0,o.token)("color.background.selected","#ebecf0"),marginTop:2,color:(0,o.token)("color.text.selected","#172b4d"),"&:hover":{backgroundColor:(0,o.token)("color.background.selected.hovered","#ebecf0")}}}}}})},451:function(e,t,r){var o=r(20).default;function n(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e.exports=n=function(){return r},e.exports.__esModule=!0,e.exports.default=e.exports;var t,r={},a=Object.prototype,c=a.hasOwnProperty,s=Object.defineProperty||function(e,t,r){e[t]=r.value},d="function"==typeof Symbol?Symbol:{},i=d.iterator||"@@iterator",l=d.asyncIterator||"@@asyncIterator",u=d.toStringTag||"@@toStringTag";function b(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{b({},"")}catch(t){b=function(e,t,r){return e[t]=r}}function g(e,t,r,o){var n=t&&t.prototype instanceof k?t:k,a=Object.create(n.prototype),c=new C(o||[]);return s(a,"_invoke",{value:w(e,r,c)}),a}function p(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}r.wrap=g;var v="suspendedStart",f="executing",h="completed",y={};function k(){}function m(){}function j(){}var M={};b(M,i,(function(){return this}));var N=Object.getPrototypeOf,I=N&&N(N(L([])));I&&I!==a&&c.call(I,i)&&(M=I);var D=j.prototype=k.prototype=Object.create(M);function x(e){["next","throw","return"].forEach((function(t){b(e,t,(function(e){return this._invoke(t,e)}))}))}function O(e,t){function r(n,a,s,d){var i=p(e[n],e,a);if("throw"!==i.type){var l=i.arg,u=l.value;return u&&"object"==o(u)&&c.call(u,"__await")?t.resolve(u.__await).then((function(e){r("next",e,s,d)}),(function(e){r("throw",e,s,d)})):t.resolve(u).then((function(e){l.value=e,s(l)}),(function(e){return r("throw",e,s,d)}))}d(i.arg)}var n;s(this,"_invoke",{value:function(e,o){function a(){return new t((function(t,n){r(e,o,t,n)}))}return n=n?n.then(a,a):a()}})}function w(e,r,o){var n=v;return function(a,c){if(n===f)throw Error("Generator is already running");if(n===h){if("throw"===a)throw c;return{value:t,done:!0}}for(o.method=a,o.arg=c;;){var s=o.delegate;if(s){var d=S(s,o);if(d){if(d===y)continue;return d}}if("next"===o.method)o.sent=o._sent=o.arg;else if("throw"===o.method){if(n===v)throw n=h,o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);n=f;var i=p(e,r,o);if("normal"===i.type){if(n=o.done?h:"suspendedYield",i.arg===y)continue;return{value:i.arg,done:o.done}}"throw"===i.type&&(n=h,o.method="throw",o.arg=i.arg)}}}function S(e,r){var o=r.method,n=e.iterator[o];if(n===t)return r.delegate=null,"throw"===o&&e.iterator.return&&(r.method="return",r.arg=t,S(e,r),"throw"===r.method)||"return"!==o&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+o+"' method")),y;var a=p(n,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,y;var c=a.arg;return c?c.done?(r[e.resultName]=c.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):c:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function A(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function z(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(A,this),this.reset(!0)}function L(e){if(e||""===e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function r(){for(;++n<e.length;)if(c.call(e,n))return r.value=e[n],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(o(e)+" is not iterable")}return m.prototype=j,s(D,"constructor",{value:j,configurable:!0}),s(j,"constructor",{value:m,configurable:!0}),m.displayName=b(j,u,"GeneratorFunction"),r.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},r.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,j):(e.__proto__=j,b(e,u,"GeneratorFunction")),e.prototype=Object.create(D),e},r.awrap=function(e){return{__await:e}},x(O.prototype),b(O.prototype,l,(function(){return this})),r.AsyncIterator=O,r.async=function(e,t,o,n,a){void 0===a&&(a=Promise);var c=new O(g(e,t,o,n),a);return r.isGeneratorFunction(t)?c:c.next().then((function(e){return e.done?e.value:c.next()}))},x(D),b(D,u,"Generator"),b(D,i,(function(){return this})),b(D,"toString",(function(){return"[object Generator]"})),r.keys=function(e){var t=Object(e),r=[];for(var o in t)r.push(o);return r.reverse(),function e(){for(;r.length;){var o=r.pop();if(o in t)return e.value=o,e.done=!1,e}return e.done=!0,e}},r.values=L,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(z),!e)for(var r in this)"t"===r.charAt(0)&&c.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(o,n){return s.type="throw",s.arg=e,r.next=o,n&&(r.method="next",r.arg=t),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var d=c.call(a,"catchLoc"),i=c.call(a,"finallyLoc");if(d&&i){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(d){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!i)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&c.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var n=o;break}}n&&("break"===e||"continue"===e)&&n.tryLoc<=t&&t<=n.finallyLoc&&(n=null);var a=n?n.completion:{};return a.type=e,a.arg=t,n?(this.method="next",this.next=n.finallyLoc,y):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),z(r),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var o=r.completion;if("throw"===o.type){var n=o.arg;z(r)}return n}}throw Error("illegal catch attempt")},delegateYield:function(e,r,o){return this.delegate={iterator:L(e),resultName:r,nextLoc:o},"next"===this.method&&(this.arg=t),y}},r}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports},455:function(e,t,r){"use strict";r.r(t),r.d(t,"themeConfig",(function(){return o.a})),r.d(t,"token",(function(){return n.a})),r.d(t,"getTokenValue",(function(){return a.a})),r.d(t,"setGlobalTheme",(function(){return Z})),r.d(t,"enableGlobalTheme",(function(){return V})),r.d(t,"getThemeStyles",(function(){return H})),r.d(t,"getThemeHtmlAttrs",(function(){return D})),r.d(t,"getSSRAutoScript",(function(){return K})),r.d(t,"useThemeObserver",(function(){return te})),r.d(t,"ThemeMutationObserver",(function(){return ee})),r.d(t,"getGlobalTheme",(function(){return $})),r.d(t,"themeStringToObject",(function(){return M})),r.d(t,"themeObjectToString",(function(){return N})),r.d(t,"CURRENT_SURFACE_CSS_VAR",(function(){return v.b}));var o=r(22),n=r(237),a=r(238),c=r(46),s=r.n(c),d=r(34),i=r.n(d),l=r(80),u=r(12),b=r.n(u),g=r(5),p=r.n(g),v=r(26),f=r(20),h=r.n(f),y=["light","dark","spacing","typography","shape"],k=function(e){return void 0!==y.find((function(t){return t===e}))},m=function(e){return void 0!==o.c.find((function(t){return t===e}))},j=function(e){return["light","dark","auto"].includes(e)},M=function(e){return e.split(" ").map((function(e){return e.split(/:([\s\S]*)/)})).reduce((function(e,t){var r=b()(t,2),o=r[0],n=r[1];if("colorMode"===o&&j(n)&&(e[o]=n),k(o)&&m(n)&&(e[o]=n),"UNSAFE_themeOptions"===o)try{e.UNSAFE_themeOptions=JSON.parse(n)}catch(e){new Error("Invalid custom theme string")}return e}),{})},N=function(e){return Object.entries(e).reduce((function(e,t){var r=b()(t,2),o=r[0],n=r[1];return"colorMode"===o&&"string"==typeof n&&j(n)||"UNSAFE_themeOptions"===o&&"object"===h()(n)||k(o)&&"string"==typeof n&&m(n)?e+"".concat(e?" ":"")+"".concat(o,":").concat("object"===h()(n)?JSON.stringify(n):n):e}),"")},I=r(126),D=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.colorMode,n=void 0===r?o.e.colorMode:r,a=t.dark,c=void 0===a?o.e.dark:a,s=t.light,d=void 0===s?o.e.light:s,i=t.shape,u=void 0===i?o.e.shape:i,b=t.spacing,g=void 0===b?o.e.spacing:b,f=t.typography,h=void 0===f?o.e.typography:f,y=t.UNSAFE_themeOptions,k=void 0===y?o.e.UNSAFE_themeOptions:y,m=N({dark:c,light:d,shape:u,spacing:g,typography:h}),j=(e={},p()(e,v.d,m),p()(e,v.a,"auto"===n?"light":n),e);if(k&&Object(l.g)(k.brandColor)){var M=JSON.stringify(k),D=Object(I.a)(M);j[v.c]=D}return j},x=r(28),O=r.n(x),w=r(29),S=r.n(w),A=r(54),z={light:function(){return r.e("vendors~@atlaskit-internal_atlassian-light").then(r.bind(null,543))},dark:function(){return r.e("vendors~@atlaskit-internal_atlassian-dark").then(r.bind(null,544))},"legacy-light":function(){return r.e("vendors~@atlaskit-internal_atlassian-legacy-light").then(r.bind(null,545))},"legacy-dark":function(){return r.e("vendors~@atlaskit-internal_atlassian-legacy-dark").then(r.bind(null,546))},spacing:function(){return r.e("vendors~@atlaskit-internal_atlassian-spacing").then(r.bind(null,547))},"typography-adg3":function(){return r.e("vendors~@atlaskit-internal_atlassian-typography-adg3").then(r.bind(null,548))},shape:function(){return r.e("vendors~@atlaskit-internal_atlassian-shape").then(r.bind(null,549))},"light-new-input-border":function(){return r.e("vendors~@atlaskit-internal_atlassian-light-new-input-border").then(r.bind(null,550))},"dark-new-input-border":function(){return r.e("vendors~@atlaskit-internal_atlassian-dark-new-input-border").then(r.bind(null,551))},"light-saturated-palette-changes":function(){return r.e("vendors~@atlaskit-internal_atlassian-light-saturated-palette-changes").then(r.bind(null,552))},"dark-saturated-palette-changes":function(){return r.e("vendors~@atlaskit-internal_atlassian-dark-saturated-palette-changes").then(r.bind(null,553))},typography:function(){return r.e("vendors~@atlaskit-internal_atlassian-typography").then(r.bind(null,554))},"typography-minor3":function(){return r.e("vendors~@atlaskit-internal_atlassian-typography-minor3").then(r.bind(null,555))}},C=function(){var e=s()(i.a.mark((function e(t){var r,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!document.head.querySelector("style[".concat(v.d,'="').concat(t,'"]:not([').concat(v.c,"])"))){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,L(t);case 4:r=e.sent,(o=document.createElement("style")).textContent=r,o.dataset.theme=t,document.head.appendChild(o);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=s()(i.a.mark((function e(t){var r,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z[t]();case 2:return r=e.sent,o=r.default,e.abrupt("return",o);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function T(e){document.documentElement.setAttribute(v.a,e.matches?"dark":"light")}var U="undefined"!=typeof window&&"matchMedia"in window&&window.matchMedia("(prefers-color-scheme: dark)"),E=new(function(){function e(){O()(this,e),p()(this,"unbindThemeChangeListener",null)}return S()(e,[{key:"getColorMode",value:function(){return U&&null!=U&&U.matches?"dark":"light"}},{key:"bind",value:function(){U&&null===this.unbindThemeChangeListener&&(this.unbindThemeChangeListener=Object(A.bind)(U,{type:"change",listener:T}))}},{key:"unbind",value:function(){this.unbindThemeChangeListener&&(this.unbindThemeChangeListener(),this.unbindThemeChangeListener=null)}}]),e}());function F(e){"auto"===e.colorMode?(e.colorMode=E.getColorMode(),E.bind()):E.unbind();var t=D(e);return Object.entries(t).forEach((function(e){var t=b()(e,2),r=t[0],o=t[1];document.documentElement.setAttribute(r,o)})),function(){return E.unbind}}var Q=r(239),P=r(17),B=r.n(P),G=r(19),R=function(e){var t=e.colorMode,r=e.dark,o=e.light,n=e.shape,a=e.spacing,c=e.typography,s="auto"===t?[o,r]:[e[t]];return Object(G.a)("platform.design-system-team.saturated-palette-changes_asoro")&&s.forEach((function(e,t){"light"===e&&(s[t]="light-saturated-palette-changes"),"dark"===e&&(s[t]="dark-saturated-palette-changes")})),[n,a,c].forEach((function(e){e&&s.push(e)})),B()(new Set(s))},Y=function(e){var t=e.colorMode,r=e.dark,o=e.light,n=[],a="auto"===t?[o,r]:[e[t]];return Object(G.a)("platform.design-system-team.border-checkbox_nyoiu")&&(a.includes("light")&&n.push("light-new-input-border"),a.includes("dark")&&n.push("dark-new-input-border")),B()(new Set(n))};function W(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return _(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var o=0,n=function(){};return{s:n,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,s=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return c=e.done,e},e:function(e){s=!0,a=e},f:function(){try{c||null==r.return||r.return()}finally{if(s)throw a}}}}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}var Z=function(){var e=s()(i.a.mark((function e(){var t,n,a,c,d,u,b,g,p,v,f,h,y,k,m,j,M,N,I,D,x,O,w,S,A,z,L,T=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=T.length>0&&void 0!==T[0]?T[0]:{},n=t.colorMode,a=void 0===n?o.e.colorMode:n,c=t.dark,d=void 0===c?o.e.dark:c,u=t.light,b=void 0===u?o.e.light:u,g=t.shape,p=void 0===g?o.e.shape:g,v=t.spacing,f=void 0===v?o.e.spacing:v,h=t.typography,y=void 0===h?o.e.typography:h,k=t.UNSAFE_themeOptions,m=void 0===k?o.e.UNSAFE_themeOptions:k,j=T.length>1?T[1]:void 0,N=R(M={colorMode:a,dark:d,light:b,shape:p,spacing:f,typography:y,UNSAFE_themeOptions:j?void 0:m}),I=j||C,D=N.map(function(){var e=s()(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),!j&&m&&Object(l.g)(null==m?void 0:m.brandColor)&&(x=a||o.e.colorMode,(O=Object(Q.a)(m,x)).length>0&&D.push(s()(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.e("vendors~@atlaskit-internal_atlassian-custom-theme").then(r.bind(null,556));case 2:t=e.sent,(0,t.loadAndAppendCustomThemeCss)({colorMode:2===O.length?"auto":O[0],UNSAFE_themeOptions:m});case 5:case"end":return e.stop()}}),e)})))())),e.next=9,Promise.all(D);case 9:w=Y(M),S=W(w),e.prev=11,S.s();case 13:if((A=S.n()).done){e.next=19;break}return z=A.value,e.next=17,I(z);case 17:e.next=13;break;case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(11),S.e(e.t0);case 24:return e.prev=24,S.f(),e.finish(24);case 27:return L=F(M),e.abrupt("return",L);case 29:case"end":return e.stop()}}),e,null,[[11,21,24,27]])})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.colorMode,r=void 0===t?o.e.colorMode:t,n=e.dark,a=void 0===n?o.e.dark:n,c=e.light,s=void 0===c?o.e.light:c,d=e.shape,i=void 0===d?o.e.shape:d,l=e.spacing,u=void 0===l?o.e.spacing:l,b=e.typography,g=void 0===b?o.e.typography:b,p=e.UNSAFE_themeOptions,v=void 0===p?o.e.UNSAFE_themeOptions:p,f=arguments.length>1?arguments[1]:void 0,h={colorMode:r,dark:a,light:s,shape:i,spacing:u,typography:g,UNSAFE_themeOptions:f?void 0:v},y=R(h);f&&y.map((function(e){return f(e)}));var k=F(h);return k},H=function(){var e=s()(i.a.mark((function e(t){var n,a,c,d;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],"all"===t?n=o.d:(c={colorMode:(null==t?void 0:t.colorMode)||o.e.colorMode,dark:(null==t?void 0:t.dark)||o.e.dark,light:(null==t?void 0:t.light)||o.e.light,shape:(null==t?void 0:t.shape)||o.e.shape,spacing:(null==t?void 0:t.spacing)||o.e.spacing,typography:(null==t?void 0:t.typography)||o.e.typography},n=R(c),a=Y(c)),e.next=4,Promise.all([].concat(B()([].concat(B()(n),B()(a)).map(function(){var e=s()(i.a.mark((function e(t){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L(t);case 3:return r=e.sent,e.abrupt("return",{id:t,attrs:{"data-theme":t},css:r});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",void 0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())),[s()(i.a.mark((function e(){var n,a,c,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("all"===t||null==t||!t.UNSAFE_themeOptions||!Object(l.g)(null==t||null===(n=t.UNSAFE_themeOptions)||void 0===n?void 0:n.brandColor)){e.next=15;break}return e.prev=1,e.next=4,r.e("vendors~@atlaskit-internal_atlassian-custom-theme").then(r.bind(null,556));case 4:return a=e.sent,c=a.getCustomThemeStyles,e.next=8,c({colorMode:(null==t?void 0:t.colorMode)||o.e.colorMode,UNSAFE_themeOptions:null==t?void 0:t.UNSAFE_themeOptions});case 8:return s=e.sent,e.abrupt("return",s);case 12:return e.prev=12,e.t0=e.catch(1),e.abrupt("return",void 0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})))()]));case 4:return d=e.sent,e.abrupt("return",d.flat().filter((function(e){return void 0!==e})));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),K=function(e){return"auto"===e?"(\n  () => {\n    try {\n      const mql = window.matchMedia('".concat("(prefers-color-scheme: dark)","');\n      const colorMode = mql.matches ? 'dark' : 'light';\n      document.documentElement.setAttribute('").concat(v.a,"', colorMode);\n    } catch (e) {}\n  }\n)()"):void 0},J=r(0);function X(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?X(Object(r),!0).forEach((function(t){p()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):X(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var $=function(){if("undefined"==typeof document)return{};var e=document.documentElement,t=e.getAttribute(v.a)||"",r=e.getAttribute(v.d)||"";return q(q({},M(r)),function(e){return void 0!==o.b.find((function(t){return t===e}))}(t)&&{colorMode:t})},ee=function(){function e(t){O()(this,e),p()(this,"observer",null),p()(this,"mediaObserver",null),this.callback=t}return S()(e,[{key:"observe",value:function(){var e=this;this.observer||(this.observer=new MutationObserver((function(){e.callback($())}))),this.observer.observe(document.documentElement,{attributeFilter:[v.d,v.a]})}},{key:"disconnect",value:function(){this.observer&&this.observer.disconnect()}}]),e}(),te=function(){var e=Object(J.useState)($()),t=b()(e,2),r=t[0],o=t[1];return Object(J.useEffect)((function(){var e=new ee((function(e){return o(e)}));return e.observe(),function(){return e.disconnect()}}),[]),r}},456:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return A}));var o=r(0),n=r.n(o),a=r(16),c=r.n(a),s=r(3),d=r(63),i={"neutral.bold":"inverse","neutral.bold.hovered":"inverse","neutral.bold.pressed":"inverse","selected.bold":"inverse","selected.bold.hovered":"inverse","selected.bold.pressed":"inverse","brand.bold":"inverse","brand.bold.hovered":"inverse","brand.bold.pressed":"inverse","brand.boldest":"inverse","brand.boldest.hovered":"inverse","brand.boldest.pressed":"inverse","danger.bold":"inverse","danger.bold.hovered":"inverse","danger.bold.pressed":"inverse","warning.bold":"warning.inverse","warning.bold.hovered":"warning.inverse","warning.bold.pressed":"warning.inverse","success.bold":"inverse","success.bold.hovered":"inverse","success.bold.pressed":"inverse","discovery.bold":"inverse","discovery.bold.hovered":"inverse","discovery.bold.pressed":"inverse","information.bold":"inverse","information.bold.hovered":"inverse","information.bold.pressed":"inverse"},l=Object(o.createContext)("elevation.surface");l.displayName="SurfaceProvider";var u=["children"],b=["span","div","p","strong"],g={center:Object(s.css)({textAlign:"center"}),end:Object(s.css)({textAlign:"end"}),start:Object(s.css)({textAlign:"start"})},p={none:Object(s.css)({textTransform:"none"}),lowercase:Object(s.css)({textTransform:"lowercase"}),uppercase:Object(s.css)({textTransform:"uppercase"})},v={top:Object(s.css)({verticalAlign:"top"}),middle:Object(s.css)({verticalAlign:"middle"}),bottom:Object(s.css)({verticalAlign:"bottom"})},f=Object(s.css)({boxSizing:"border-box",margin:"var(--ds-space-0, 0px)",padding:"var(--ds-space-0, 0px)"}),h=Object(s.css)({textOverflow:"ellipsis",whiteSpace:"nowrap","@supports not (overflow-x: clip)":{overflow:"hidden"},"@supports (overflow-x: clip)":{overflowX:"clip"}}),y=function(e){var t=Object(o.useContext)(l),r=i[t];return null!=r?r:e},k=Object(o.createContext)(!1),m=function(e){var t=e.children,r=c()(e,u),n=r.as,a=void 0===n?"span":n,i=r.color,l=r.fontSize,m=r.fontWeight,x=r.lineHeight,O=r.shouldTruncate,w=void 0!==O&&O,S=r.textAlign,A=r.textTransform,z=r.verticalAlign,C=r.testId,L=r.UNSAFE_style,T=r.id;Object(d.a)(b.includes(a),'@atlaskit/ds-explorations: Text received an invalid "as" value of "'.concat(a,'"'));var U=y(i),E=Object(o.useContext)(k);if(E&&0===Object.keys(r).length)return Object(s.jsx)(o.Fragment,null,t);var F=Object(s.jsx)(a,{style:L,css:[f,N.sans,U&&D[U],l&&j[l],m&&M[m],x&&I[x],w&&h,S&&g[S],A&&p[A],z&&v[z]],"data-testid":C,id:T},t);return E?F:Object(s.jsx)(k.Provider,{value:!0},F)},j={"size.050":Object(s.css)({fontSize:"var(--ds-font-size-050, 11px)"}),"size.075":Object(s.css)({fontSize:"var(--ds-font-size-075, 12px)"}),"size.100":Object(s.css)({fontSize:"var(--ds-font-size-100, 14px)"}),"size.200":Object(s.css)({fontSize:"var(--ds-font-size-200, 16px)"}),"size.300":Object(s.css)({fontSize:"var(--ds-font-size-300, 20px)"}),"size.400":Object(s.css)({fontSize:"var(--ds-font-size-400, 24px)"}),"size.500":Object(s.css)({fontSize:"var(--ds-font-size-500, 29px)"}),"size.600":Object(s.css)({fontSize:"var(--ds-font-size-600, 35px)"})},M={bold:Object(s.css)({fontWeight:"var(--ds-font-weight-bold, 700)"}),medium:Object(s.css)({fontWeight:"var(--ds-font-weight-medium, 500)"}),regular:Object(s.css)({fontWeight:"var(--ds-font-weight-regular, 400)"}),semibold:Object(s.css)({fontWeight:"var(--ds-font-weight-semibold, 600)"})},N={body:Object(s.css)({fontFamily:'var(--ds-font-family-body, ui-sans-serif, "Segoe UI", Ubuntu, system-ui, "Helvetica Neue", sans-serif)'}),brand:Object(s.css)({fontFamily:"var(--ds-font-family-brand, Charlie Sans)"}),code:Object(s.css)({fontFamily:'var(--ds-font-family-code, ui-monospace, Menlo, "Segoe UI Mono", "Ubuntu Mono", monospace)'}),heading:Object(s.css)({fontFamily:'var(--ds-font-family-heading, ui-sans-serif, "Segoe UI", Ubuntu, system-ui, "Helvetica Neue", sans-serif)'}),monospace:Object(s.css)({fontFamily:'var(--ds-font-family-monospace, ui-monospace, Menlo, "Segoe UI Mono", "Ubuntu Mono", monospace)'}),sans:Object(s.css)({fontFamily:'var(--ds-font-family-sans, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif)'})},I={"lineHeight.1":Object(s.css)({lineHeight:"var(--ds-font-lineHeight-1, 1)"}),"lineHeight.100":Object(s.css)({lineHeight:"var(--ds-font-lineHeight-100, 16px)"}),"lineHeight.200":Object(s.css)({lineHeight:"var(--ds-font-lineHeight-200, 20px)"}),"lineHeight.300":Object(s.css)({lineHeight:"var(--ds-font-lineHeight-300, 24px)"}),"lineHeight.400":Object(s.css)({lineHeight:"var(--ds-font-lineHeight-400, 28px)"}),"lineHeight.500":Object(s.css)({lineHeight:"var(--ds-font-lineHeight-500, 32px)"}),"lineHeight.600":Object(s.css)({lineHeight:"var(--ds-font-lineHeight-600, 40px)"})},D={"color.text":Object(s.css)({color:"var(--ds-text, #172B4D)"}),disabled:Object(s.css)({color:"var(--ds-text-disabled, #A5ADBA)"}),inverse:Object(s.css)({color:"var(--ds-text-inverse, #FFFFFF)"}),selected:Object(s.css)({color:"var(--ds-text-selected, #0052CC)"}),brand:Object(s.css)({color:"var(--ds-text-brand, #0065FF)"}),danger:Object(s.css)({color:"var(--ds-text-danger, #DE350B)"}),warning:Object(s.css)({color:"var(--ds-text-warning, #974F0C)"}),"warning.inverse":Object(s.css)({color:"var(--ds-text-warning-inverse, #172B4D)"}),success:Object(s.css)({color:"var(--ds-text-success, #006644)"}),discovery:Object(s.css)({color:"var(--ds-text-discovery, #403294)"}),information:Object(s.css)({color:"var(--ds-text-information, #0052CC)"}),subtlest:Object(s.css)({color:"var(--ds-text-subtlest, #7A869A)"}),subtle:Object(s.css)({color:"var(--ds-text-subtle, #42526E)"})},x=r(56),O=r(275),w=Object(x.b)({display:"inline-flex",borderRadius:"border.radius",position:"static",overflow:"hidden"}),S=Object(o.memo)((function(e){var t=e.children,r=e.testId,o=e.isBold,a=void 0!==o&&o,c=e.appearance,s=void 0===c?"default":c,d=e.maxWidth,i=void 0===d?200:d,l=e.style,u=a?"bold":"subtle",b=s in z[u]?s:"default",g="string"==typeof i?i:"".concat(i,"px"),p="string"==typeof i&&/%$/.test(i);return n.a.createElement(O.a,{as:"span",backgroundColor:z[u][b],style:{backgroundColor:null==l?void 0:l.backgroundColor,maxWidth:p?i:"100%"},paddingInline:"space.050",xcss:w,testId:r},n.a.createElement(m,{fontSize:"size.050",fontWeight:"bold",lineHeight:"lineHeight.100",textTransform:"uppercase",color:C[u][b],shouldTruncate:!0,UNSAFE_style:{color:null==l?void 0:l.color,maxWidth:p?"100%":"calc(".concat(g," - ","var(--ds-space-100, 8px)",")")},testId:r&&"".concat(r,"--text")},t))}));S.displayName="Lozenge";var A=S,z={bold:{default:"color.background.neutral.bold",inprogress:"color.background.information.bold",moved:"color.background.warning.bold",new:"color.background.discovery.bold",removed:"color.background.danger.bold",success:"color.background.success.bold"},subtle:{default:"color.background.neutral",inprogress:"color.background.information",moved:"color.background.warning",new:"color.background.discovery",removed:"color.background.danger",success:"color.background.success"}},C={bold:{default:"inverse",inprogress:"inverse",moved:"warning.inverse",new:"inverse",removed:"inverse",success:"inverse"},subtle:{default:"subtle",inprogress:"information",moved:"warning",new:"discovery",removed:"danger",success:"success"}}},46:function(e,t){function r(e,t,r,o,n,a,c){try{var s=e[a](c),d=s.value}catch(e){return void r(e)}s.done?t(d):Promise.resolve(d).then(o,n)}e.exports=function(e){return function(){var t=this,o=arguments;return new Promise((function(n,a){var c=e.apply(t,o);function s(e){r(c,n,a,s,d,"next",e)}function d(e){r(c,n,a,s,d,"throw",e)}s(void 0)}))}},e.exports.__esModule=!0,e.exports.default=e.exports},469:function(e,t,r){"use strict";var o=r(14),n=r.n(o),a=r(16),c=r.n(a),s=r(0),d=r(3),i=r(31),l=r(19),u=r(2),b=r(21),g=r(98),p=r(15),v=["children","testId","id","cssFn","className"],f=g.b.h100.lineHeight,h=g.b.h100.size,y=Object(d.css)({color:"var(--ds-text-subtle, ".concat(u.y,")"),fontSize:h,fontWeight:"var(--ds-font-weight-bold, 700)",lineHeight:f/h,paddingBlock:"var(--ds-space-0, 0px)",paddingInline:"var(--ds-space-200, 16px)",textTransform:"uppercase"}),k=Object(s.memo)((function(e){var t=e.children,r=e.testId,o=e.id,a=e.cssFn,s=void 0===a?p.a:a,u=e.className,b=c()(e,v);Object(i.b)("@atlaskit/menu","cssFn",s!==p.a,"");var g=Object(l.a)("platform.design-system-team.unsafe-overrides-killswitch_c8j9m")?void 0:Object(d.css)(s(void 0));return Object(d.jsx)("div",n()({css:[y,g],"data-testid":r,"data-ds--menu--heading-item":!0,id:o,className:Object(l.a)("platform.design-system-team.unsafe-overrides-killswitch_c8j9m")?void 0:u},b),t)})),m=["children","overrides","title","testId","isScrollable","hasSeparator","id","isList","className"],j=Object(b.f)(),M=2.5*j,N=.75*j,I=M+(g.b.h100.lineHeight-j)-3,D=N+3,x=.75*j,O=Object(d.css)({"&::before, &::after":{display:"block",height:x,content:'""'},"& [data-ds--menu--heading-item]":{marginBlockEnd:N,marginBlockStart:M,"&:first-of-type":{marginBlockStart:M-x}},"& [data-ds--menu--skeleton-heading-item]":{marginBlockEnd:D,marginBlockStart:I,"&:first-of-type":{marginBlockStart:I-x}},"&:focus":{outlineOffset:-1}}),w=Object(d.css)({flexShrink:1,overflow:"auto"}),S=Object(d.css)({flexShrink:0}),A=Object(d.css)({borderBlockStart:"2px solid var(".concat("--ds-menu-seperator-color",", ","var(--ds-border, ".concat(u.z,")"),")")}),z=Object(d.css)({"[data-section] + &":{marginBlockStart:-6}}),C=Object(s.forwardRef)((function(e,t){var r=e.children,o=e.overrides,a=e.title,u=e.testId,b=e.isScrollable,g=e.hasSeparator,p=e.id,v=e.isList,f=void 0!==v&&v,h=e.className,y=c()(e,m);Object(i.b)("@atlaskit/menu","overrides",void 0!==o,"");var j=Object(l.a)("platform.design-system-team.unsafe-overrides-killswitch_c8j9m")?void 0:o&&o.HeadingItem&&o.HeadingItem.cssFn,M=f?Object(d.jsx)("ul",{style:{margin:0,padding:0}},s.Children.map(s.Children.toArray(r),(function(e,t){return Object(d.jsx)("li",{style:{listStyleType:"none",margin:0,padding:0},key:t},e)}))):r,N=void 0!==a?Object(d.jsx)(s.Fragment,null,Object(d.jsx)(k,{cssFn:j,testId:u&&"".concat(u,"--heading"),"aria-hidden":!0},a),M):Object(d.jsx)(s.Fragment,null,M);return Object(d.jsx)("div",n()({},y,{className:Object(l.a)("platform.design-system-team.unsafe-overrides-killswitch_c8j9m")?void 0:h,id:p,css:[O,b?w:S,g?A:z],"aria-label":a,"data-testid":u,role:"group","data-section":!0,ref:t}),N)}));t.a=C},513:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var o=r(0),n=(r(54),r(182));function a(){var e=Object(o.useContext)(n.a),t=Object(o.useContext)(n.b).topLevelRef,r=Object(o.useCallback)((function(){return!!t.current&&e!==t.current}),[e,t]);return{currentLevel:e,topLevelRef:t,isLayerDisabled:r}}},54:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.bindAll=t.bind=void 0;var o=r(232);Object.defineProperty(t,"bind",{enumerable:!0,get:function(){return o.bind}});var n=r(444);Object.defineProperty(t,"bindAll",{enumerable:!0,get:function(){return n.bindAll}})},56:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return v})),r.d(t,"b",(function(){return f}));var o=r(5),n=r.n(o),a=r(12),c=r.n(a),s=r(20),d=r.n(s),i=r(3),l=r(8),u={backgroundColor:l.b,blockSize:l.g,borderBlockColor:l.d,borderBlockEndColor:l.d,borderBlockEndWidth:l.f,borderBlockStartColor:l.d,borderBlockStartWidth:l.f,borderBlockWidth:l.f,borderBottomColor:l.d,borderBottomLeftRadius:l.e,borderBottomRightRadius:l.e,borderBottomWidth:l.f,borderColor:l.d,borderEndEndRadius:l.e,borderEndStartRadius:l.e,borderInlineColor:l.d,borderInlineEndColor:l.d,borderInlineEndWidth:l.f,borderInlineStartColor:l.d,borderInlineStartWidth:l.f,borderInlineWidth:l.f,borderLeftColor:l.d,borderLeftWidth:l.f,borderRadius:l.e,borderRightColor:l.d,borderRightWidth:l.f,borderStartEndRadius:l.e,borderStartStartRadius:l.e,borderTopColor:l.d,borderTopLeftRadius:l.e,borderTopRightRadius:l.e,borderTopWidth:l.f,borderWidth:l.f,bottom:l.a,boxShadow:l.m,color:l.p,columnGap:l.l,gap:l.l,height:l.g,inlineSize:l.g,inset:l.a,insetBlock:l.a,insetBlockEnd:l.a,insetBlockStart:l.a,insetInline:l.a,insetInlineEnd:l.a,insetInlineStart:l.a,left:l.a,margin:l.a,marginBlock:l.a,marginBlockEnd:l.a,marginBlockStart:l.a,marginBottom:l.a,marginInline:l.a,marginInlineEnd:l.a,marginInlineStart:l.a,marginLeft:l.a,marginRight:l.a,marginTop:l.a,maxBlockSize:l.g,maxHeight:l.g,maxInlineSize:l.g,maxWidth:l.g,minBlockSize:l.g,minHeight:l.g,minInlineSize:l.g,minWidth:l.g,opacity:l.j,outlineColor:l.d,outlineOffset:l.l,outlineWidth:l.f,padding:l.l,paddingBlock:l.l,paddingBlockEnd:l.l,paddingBlockStart:l.l,paddingBottom:l.l,paddingInline:l.l,paddingInlineEnd:l.l,paddingInlineStart:l.l,paddingLeft:l.l,paddingRight:l.l,paddingTop:l.l,right:l.a,rowGap:l.l,top:l.a,width:l.g,zIndex:l.i},b=Symbol("UNSAFE_INTERNAL_styles"),g=/^@media .*$|^::?.*$|^@supports .*$/,p=function t(r){return r&&"object"===d()(r)?Array.isArray(r)?r.map(t):(Object.entries(r).forEach((function(o){var n=c()(o,2),a=n[0],s=n[1];if("object"===d()(s)&&g.test(a))r[a]=t(s);else if("object"===(void 0===e?"undefined":d()(e))&&d()(e.env),a in u){var i=u[a][s];r[a]=null!=i?i:s}})),r):r},v=function t(r){if(Array.isArray(r))return r.map((function(e){return e&&t(e)})).filter(Boolean);var o=r[b];return void 0===e||d()(e),o};function f(e){return function(e){var t=p(e);return n()({},b,Object(i.css)(t))}(e)}}).call(this,r(37))},57:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,Object.defineProperty(t,"getDefaultThemes",{enumerable:!0,get:function(){return n.getDefaultThemes}}),t.loadMatchMediaTheme=void 0,Object.defineProperty(t,"loadTheme",{enumerable:!0,get:function(){return n.loadTheme}});var o=r(437),n=r(236);t.loadMatchMediaTheme=function(){var e=document.querySelector("html");if(null!==(null==e?void 0:e.getAttribute("data-color-mode-auto"))){var t=null==e?void 0:e.getAttribute("data-color-mode");["dark","light"].forEach((function(r){var o,n;t!==r&&null!==(o=window)&&void 0!==o&&null!==(n=o.matchMedia)&&void 0!==n&&n.call(o,"(prefers-color-scheme: ".concat(r,")")).matches&&(null==e||e.setAttribute("data-color-mode",r))}))}},t.default=o.ThemeSwitcher},65:function(e,t,r){"use strict";var o=r(0),n=r(86);t.a=function(){var e=Object(o.useContext)(n.a).registerRef,t=Object(o.useRef)(null);return Object(o.useEffect)((function(){null!==t.current&&e(t.current)}),[e]),t}},66:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var o=r(0),n=r.n(o),a=r(15),c=Object(o.createContext)({setItemState:a.a,getItemState:function(){},setGroupState:a.a,getGroupState:function(){return{}}});t.b=function(e){var t=e.children,r=Object(o.useRef)({}),a=Object(o.useMemo)((function(){return{setItemState:function(e,t,o){r.current[e]||(r.current[e]={}),r.current[e][t]=o},getItemState:function(e,t){if(r.current[e])return r.current[e][t]},setGroupState:function(e,t){r.current[e]=t},getGroupState:function(e){return r.current[e]||{}}}}),[]);return n.a.createElement(c.Provider,{value:a},t)}},68:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}));var o=r(0),n=Object(o.createContext)("cozy"),a=Object(o.createContext)("border")},8:function(e,t,r){"use strict";r.d(t,"g",(function(){return i})),r.d(t,"l",(function(){return l})),r.d(t,"a",(function(){return u})),r.d(t,"j",(function(){return b})),r.d(t,"m",(function(){return g})),r.d(t,"d",(function(){return v})),r.d(t,"b",(function(){return f})),r.d(t,"p",(function(){return h})),r.d(t,"i",(function(){return y})),r.d(t,"f",(function(){return k})),r.d(t,"e",(function(){return m})),r.d(t,"k",(function(){return N})),r.d(t,"n",(function(){return I})),r.d(t,"c",(function(){return D})),r.d(t,"o",(function(){return x})),r.d(t,"h",(function(){return O}));var o=r(5),n=r.n(o),a=r(3),c=("--".concat("ds","-token-not-found"),"--".concat("ds","-elevation-surface-current"));function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var i={"100%":"100%","size.100":"1rem","size.200":"1.5rem","size.300":"2rem","size.400":"2.5rem","size.500":"3rem","size.600":"6rem","size.1000":"12rem"},l={"space.0":"var(--ds-space-0, 0px)","space.025":"var(--ds-space-025, 2px)","space.050":"var(--ds-space-050, 4px)","space.075":"var(--ds-space-075, 6px)","space.100":"var(--ds-space-100, 8px)","space.150":"var(--ds-space-150, 12px)","space.200":"var(--ds-space-200, 16px)","space.250":"var(--ds-space-250, 20px)","space.300":"var(--ds-space-300, 24px)","space.400":"var(--ds-space-400, 32px)","space.500":"var(--ds-space-500, 40px)","space.600":"var(--ds-space-600, 48px)","space.800":"var(--ds-space-800, 64px)","space.1000":"var(--ds-space-1000, 80px)"},u=d(d({},l),{"space.negative.025":"var(--ds-space-negative-025, -2px)","space.negative.050":"var(--ds-space-negative-050, -4px)","space.negative.075":"var(--ds-space-negative-075, -6px)","space.negative.100":"var(--ds-space-negative-100, -8px)","space.negative.150":"var(--ds-space-negative-150, -12px)","space.negative.200":"var(--ds-space-negative-200, -16px)","space.negative.250":"var(--ds-space-negative-250, -20px)","space.negative.300":"var(--ds-space-negative-300, -24px)","space.negative.400":"var(--ds-space-negative-400, -32px)"}),b={"opacity.disabled":"var(--ds-opacity-disabled, 0.4)","opacity.loading":"var(--ds-opacity-loading, 0.2)"},g={"elevation.shadow.overflow":"var(--ds-shadow-overflow, 0px 0px 8px #091e423f, 0px 0px 1px #091e424f)","elevation.shadow.overflow.perimeter":"var(--ds-shadow-overflow-perimeter, #091e421f)","elevation.shadow.overflow.spread":"var(--ds-shadow-overflow-spread, #091e4229)","elevation.shadow.overlay":"var(--ds-shadow-overlay, 0px 8px 12px #091e423f, 0px 0px 1px #091e424f)","elevation.shadow.raised":"var(--ds-shadow-raised, 0px 1px 1px #091e423f, 0px 0px 1px #091e4221)"},p={"elevation.surface":"var(--ds-surface, #FFFFFF)","elevation.surface.hovered":"var(--ds-surface-hovered, #FAFBFC)","elevation.surface.pressed":"var(--ds-surface-pressed, #F4F5F7)","elevation.surface.overlay":"var(--ds-surface-overlay, #FFFFFF)","elevation.surface.overlay.hovered":"var(--ds-surface-overlay-hovered, #FAFBFC)","elevation.surface.overlay.pressed":"var(--ds-surface-overlay-pressed, #F4F5F7)","elevation.surface.raised":"var(--ds-surface-raised, #FFFFFF)","elevation.surface.raised.hovered":"var(--ds-surface-raised-hovered, #FAFBFC)","elevation.surface.raised.pressed":"var(--ds-surface-raised-pressed, #F4F5F7)","elevation.surface.sunken":"var(--ds-surface-sunken, #F4F5F7)"},v={"color.border":"var(--ds-border, #091e4221)","color.border.accent.lime":"var(--ds-border-accent-lime, #6A9A23)","color.border.accent.red":"var(--ds-border-accent-red, #FF5630)","color.border.accent.orange":"var(--ds-border-accent-orange, #D94008)","color.border.accent.yellow":"var(--ds-border-accent-yellow, #FFAB00)","color.border.accent.green":"var(--ds-border-accent-green, #36B37E)","color.border.accent.teal":"var(--ds-border-accent-teal, #00B8D9)","color.border.accent.blue":"var(--ds-border-accent-blue, #0065FF)","color.border.accent.purple":"var(--ds-border-accent-purple, #6554C0)","color.border.accent.magenta":"var(--ds-border-accent-magenta, #CD519D)","color.border.accent.gray":"var(--ds-border-accent-gray, #5E6C84)","color.border.disabled":"var(--ds-border-disabled, #FAFBFC)","color.border.focused":"var(--ds-border-focused, #2684FF)","color.border.input":"var(--ds-border-input, #FAFBFC)","color.border.inverse":"var(--ds-border-inverse, #FFFFFF)","color.border.selected":"var(--ds-border-selected, #0052CC)","color.border.brand":"var(--ds-border-brand, #0052CC)","color.border.danger":"var(--ds-border-danger, #FF5630)","color.border.warning":"var(--ds-border-warning, #FFC400)","color.border.success":"var(--ds-border-success, #00875A)","color.border.discovery":"var(--ds-border-discovery, #998DD9)","color.border.information":"var(--ds-border-information, #0065FF)","color.border.bold":"var(--ds-border-bold, #344563)"},f={"color.background.accent.lime.subtlest":"var(--ds-background-accent-lime-subtlest, #EEFBDA)","color.background.accent.lime.subtlest.hovered":"var(--ds-background-accent-lime-subtlest-hovered, #D3F1A7)","color.background.accent.lime.subtlest.pressed":"var(--ds-background-accent-lime-subtlest-pressed, #B3DF72)","color.background.accent.lime.subtler":"var(--ds-background-accent-lime-subtler, #D3F1A7)","color.background.accent.lime.subtler.hovered":"var(--ds-background-accent-lime-subtler-hovered, #B3DF72)","color.background.accent.lime.subtler.pressed":"var(--ds-background-accent-lime-subtler-pressed, #94C748)","color.background.accent.lime.subtle":"var(--ds-background-accent-lime-subtle, #94C748)","color.background.accent.lime.subtle.hovered":"var(--ds-background-accent-lime-subtle-hovered, #B3DF72)","color.background.accent.lime.subtle.pressed":"var(--ds-background-accent-lime-subtle-pressed, #D3F1A7)","color.background.accent.lime.bolder":"var(--ds-background-accent-lime-bolder, #5B7F24)","color.background.accent.lime.bolder.hovered":"var(--ds-background-accent-lime-bolder-hovered, #37471F)","color.background.accent.lime.bolder.pressed":"var(--ds-background-accent-lime-bolder-pressed, #37471F)","color.background.accent.red.subtlest":"var(--ds-background-accent-red-subtlest, #FF8F73)","color.background.accent.red.subtlest.hovered":"var(--ds-background-accent-red-subtlest-hovered, #FF7452)","color.background.accent.red.subtlest.pressed":"var(--ds-background-accent-red-subtlest-pressed, #FF5630)","color.background.accent.red.subtler":"var(--ds-background-accent-red-subtler, #FF7452)","color.background.accent.red.subtler.hovered":"var(--ds-background-accent-red-subtler-hovered, #FF5630)","color.background.accent.red.subtler.pressed":"var(--ds-background-accent-red-subtler-pressed, #DE350B)","color.background.accent.red.subtle":"var(--ds-background-accent-red-subtle, #DE350B)","color.background.accent.red.subtle.hovered":"var(--ds-background-accent-red-subtle-hovered, #FF5630)","color.background.accent.red.subtle.pressed":"var(--ds-background-accent-red-subtle-pressed, #FF7452)","color.background.accent.red.bolder":"var(--ds-background-accent-red-bolder, #DE350B)","color.background.accent.red.bolder.hovered":"var(--ds-background-accent-red-bolder-hovered, #FF5630)","color.background.accent.red.bolder.pressed":"var(--ds-background-accent-red-bolder-pressed, #FF7452)","color.background.accent.orange.subtlest":"var(--ds-background-accent-orange-subtlest, #F18D13)","color.background.accent.orange.subtlest.hovered":"var(--ds-background-accent-orange-subtlest-hovered, #FEC57B)","color.background.accent.orange.subtlest.pressed":"var(--ds-background-accent-orange-subtlest-pressed, #FFE2BD)","color.background.accent.orange.subtler":"var(--ds-background-accent-orange-subtler, #B65C02)","color.background.accent.orange.subtler.hovered":"var(--ds-background-accent-orange-subtler-hovered, #F18D13)","color.background.accent.orange.subtler.pressed":"var(--ds-background-accent-orange-subtler-pressed, #FEC57B)","color.background.accent.orange.subtle":"var(--ds-background-accent-orange-subtle, #5F3811)","color.background.accent.orange.subtle.hovered":"var(--ds-background-accent-orange-subtle-hovered, #974F0C)","color.background.accent.orange.subtle.pressed":"var(--ds-background-accent-orange-subtle-pressed, #B65C02)","color.background.accent.orange.bolder":"var(--ds-background-accent-orange-bolder, #43290F)","color.background.accent.orange.bolder.hovered":"var(--ds-background-accent-orange-bolder-hovered, #5F3811)","color.background.accent.orange.bolder.pressed":"var(--ds-background-accent-orange-bolder-pressed, #974F0C)","color.background.accent.yellow.subtlest":"var(--ds-background-accent-yellow-subtlest, #FFE380)","color.background.accent.yellow.subtlest.hovered":"var(--ds-background-accent-yellow-subtlest-hovered, #FFC400)","color.background.accent.yellow.subtlest.pressed":"var(--ds-background-accent-yellow-subtlest-pressed, #FFAB00)","color.background.accent.yellow.subtler":"var(--ds-background-accent-yellow-subtler, #FFC400)","color.background.accent.yellow.subtler.hovered":"var(--ds-background-accent-yellow-subtler-hovered, #FFAB00)","color.background.accent.yellow.subtler.pressed":"var(--ds-background-accent-yellow-subtler-pressed, #FF991F)","color.background.accent.yellow.subtle":"var(--ds-background-accent-yellow-subtle, #FF991F)","color.background.accent.yellow.subtle.hovered":"var(--ds-background-accent-yellow-subtle-hovered, #FFAB00)","color.background.accent.yellow.subtle.pressed":"var(--ds-background-accent-yellow-subtle-pressed, #FFC400)","color.background.accent.yellow.bolder":"var(--ds-background-accent-yellow-bolder, #FF991F)","color.background.accent.yellow.bolder.hovered":"var(--ds-background-accent-yellow-bolder-hovered, #FFAB00)","color.background.accent.yellow.bolder.pressed":"var(--ds-background-accent-yellow-bolder-pressed, #FFC400)","color.background.accent.green.subtlest":"var(--ds-background-accent-green-subtlest, #79F2C0)","color.background.accent.green.subtlest.hovered":"var(--ds-background-accent-green-subtlest-hovered, #57D9A3)","color.background.accent.green.subtlest.pressed":"var(--ds-background-accent-green-subtlest-pressed, #36B37E)","color.background.accent.green.subtler":"var(--ds-background-accent-green-subtler, #57D9A3)","color.background.accent.green.subtler.hovered":"var(--ds-background-accent-green-subtler-hovered, #36B37E)","color.background.accent.green.subtler.pressed":"var(--ds-background-accent-green-subtler-pressed, #00875A)","color.background.accent.green.subtle":"var(--ds-background-accent-green-subtle, #00875A)","color.background.accent.green.subtle.hovered":"var(--ds-background-accent-green-subtle-hovered, #36B37E)","color.background.accent.green.subtle.pressed":"var(--ds-background-accent-green-subtle-pressed, #57D9A3)","color.background.accent.green.bolder":"var(--ds-background-accent-green-bolder, #00875A)","color.background.accent.green.bolder.hovered":"var(--ds-background-accent-green-bolder-hovered, #36B37E)","color.background.accent.green.bolder.pressed":"var(--ds-background-accent-green-bolder-pressed, #57D9A3)","color.background.accent.teal.subtlest":"var(--ds-background-accent-teal-subtlest, #79E2F2)","color.background.accent.teal.subtlest.hovered":"var(--ds-background-accent-teal-subtlest-hovered, #00C7E6)","color.background.accent.teal.subtlest.pressed":"var(--ds-background-accent-teal-subtlest-pressed, #00B8D9)","color.background.accent.teal.subtler":"var(--ds-background-accent-teal-subtler, #00C7E6)","color.background.accent.teal.subtler.hovered":"var(--ds-background-accent-teal-subtler-hovered, #00B8D9)","color.background.accent.teal.subtler.pressed":"var(--ds-background-accent-teal-subtler-pressed, #00A3BF)","color.background.accent.teal.subtle":"var(--ds-background-accent-teal-subtle, #00A3BF)","color.background.accent.teal.subtle.hovered":"var(--ds-background-accent-teal-subtle-hovered, #00B8D9)","color.background.accent.teal.subtle.pressed":"var(--ds-background-accent-teal-subtle-pressed, #00C7E6)","color.background.accent.teal.bolder":"var(--ds-background-accent-teal-bolder, #00A3BF)","color.background.accent.teal.bolder.hovered":"var(--ds-background-accent-teal-bolder-hovered, #00B8D9)","color.background.accent.teal.bolder.pressed":"var(--ds-background-accent-teal-bolder-pressed, #00C7E6)","color.background.accent.blue.subtlest":"var(--ds-background-accent-blue-subtlest, #4C9AFF)","color.background.accent.blue.subtlest.hovered":"var(--ds-background-accent-blue-subtlest-hovered, #2684FF)","color.background.accent.blue.subtlest.pressed":"var(--ds-background-accent-blue-subtlest-pressed, #0065FF)","color.background.accent.blue.subtler":"var(--ds-background-accent-blue-subtler, #2684FF)","color.background.accent.blue.subtler.hovered":"var(--ds-background-accent-blue-subtler-hovered, #0065FF)","color.background.accent.blue.subtler.pressed":"var(--ds-background-accent-blue-subtler-pressed, #0052CC)","color.background.accent.blue.subtle":"var(--ds-background-accent-blue-subtle, #0052CC)","color.background.accent.blue.subtle.hovered":"var(--ds-background-accent-blue-subtle-hovered, #0065FF)","color.background.accent.blue.subtle.pressed":"var(--ds-background-accent-blue-subtle-pressed, #2684FF)","color.background.accent.blue.bolder":"var(--ds-background-accent-blue-bolder, #0052CC)","color.background.accent.blue.bolder.hovered":"var(--ds-background-accent-blue-bolder-hovered, #0065FF)","color.background.accent.blue.bolder.pressed":"var(--ds-background-accent-blue-bolder-pressed, #2684FF)","color.background.accent.purple.subtlest":"var(--ds-background-accent-purple-subtlest, #998DD9)","color.background.accent.purple.subtlest.hovered":"var(--ds-background-accent-purple-subtlest-hovered, #8777D9)","color.background.accent.purple.subtlest.pressed":"var(--ds-background-accent-purple-subtlest-pressed, #6554C0)","color.background.accent.purple.subtler":"var(--ds-background-accent-purple-subtler, #8777D9)","color.background.accent.purple.subtler.hovered":"var(--ds-background-accent-purple-subtler-hovered, #6554C0)","color.background.accent.purple.subtler.pressed":"var(--ds-background-accent-purple-subtler-pressed, #5243AA)","color.background.accent.purple.subtle":"var(--ds-background-accent-purple-subtle, #5243AA)","color.background.accent.purple.subtle.hovered":"var(--ds-background-accent-purple-subtle-hovered, #6554C0)","color.background.accent.purple.subtle.pressed":"var(--ds-background-accent-purple-subtle-pressed, #8777D9)","color.background.accent.purple.bolder":"var(--ds-background-accent-purple-bolder, #5243AA)","color.background.accent.purple.bolder.hovered":"var(--ds-background-accent-purple-bolder-hovered, #6554C0)","color.background.accent.purple.bolder.pressed":"var(--ds-background-accent-purple-bolder-pressed, #8777D9)","color.background.accent.magenta.subtlest":"var(--ds-background-accent-magenta-subtlest, #FFECF8)","color.background.accent.magenta.subtlest.hovered":"var(--ds-background-accent-magenta-subtlest-hovered, #FDD0EC)","color.background.accent.magenta.subtlest.pressed":"var(--ds-background-accent-magenta-subtlest-pressed, #F797D2)","color.background.accent.magenta.subtler":"var(--ds-background-accent-magenta-subtler, #FDD0EC)","color.background.accent.magenta.subtler.hovered":"var(--ds-background-accent-magenta-subtler-hovered, #F797D2)","color.background.accent.magenta.subtler.pressed":"var(--ds-background-accent-magenta-subtler-pressed, #E774BB)","color.background.accent.magenta.subtle":"var(--ds-background-accent-magenta-subtle, #E774BB)","color.background.accent.magenta.subtle.hovered":"var(--ds-background-accent-magenta-subtle-hovered, #F797D2)","color.background.accent.magenta.subtle.pressed":"var(--ds-background-accent-magenta-subtle-pressed, #FDD0EC)","color.background.accent.magenta.bolder":"var(--ds-background-accent-magenta-bolder, #AE4787)","color.background.accent.magenta.bolder.hovered":"var(--ds-background-accent-magenta-bolder-hovered, #943D73)","color.background.accent.magenta.bolder.pressed":"var(--ds-background-accent-magenta-bolder-pressed, #50253F)","color.background.accent.gray.subtlest":"var(--ds-background-accent-gray-subtlest, #6B778C)","color.background.accent.gray.subtlest.hovered":"var(--ds-background-accent-gray-subtlest-hovered, #5E6C84)","color.background.accent.gray.subtlest.pressed":"var(--ds-background-accent-gray-subtlest-pressed, #505F79)","color.background.accent.gray.subtler":"var(--ds-background-accent-gray-subtler, #5E6C84)","color.background.accent.gray.subtler.hovered":"var(--ds-background-accent-gray-subtler-hovered, #505F79)","color.background.accent.gray.subtler.pressed":"var(--ds-background-accent-gray-subtler-pressed, #42526E)","color.background.accent.gray.subtle":"var(--ds-background-accent-gray-subtle, #505F79)","color.background.accent.gray.subtle.hovered":"var(--ds-background-accent-gray-subtle-hovered, #5E6C84)","color.background.accent.gray.subtle.pressed":"var(--ds-background-accent-gray-subtle-pressed, #6B778C)","color.background.accent.gray.bolder":"var(--ds-background-accent-gray-bolder, #42526E)","color.background.accent.gray.bolder.hovered":"var(--ds-background-accent-gray-bolder-hovered, #344563)","color.background.accent.gray.bolder.pressed":"var(--ds-background-accent-gray-bolder-pressed, #253858)","color.background.disabled":"var(--ds-background-disabled, #091e4289)","color.background.input":"var(--ds-background-input, #FAFBFC)","color.background.input.hovered":"var(--ds-background-input-hovered, #EBECF0)","color.background.input.pressed":"var(--ds-background-input-pressed, #FFFFFF)","color.background.inverse.subtle":"var(--ds-background-inverse-subtle, #00000029)","color.background.inverse.subtle.hovered":"var(--ds-background-inverse-subtle-hovered, #0000003D)","color.background.inverse.subtle.pressed":"var(--ds-background-inverse-subtle-pressed, #00000052)","color.background.neutral":"var(--ds-background-neutral, #DFE1E6)","color.background.neutral.hovered":"var(--ds-background-neutral-hovered, #091e4214)","color.background.neutral.pressed":"var(--ds-background-neutral-pressed, #B3D4FF)","color.background.neutral.subtle":"var(--ds-background-neutral-subtle, transparent)","color.background.neutral.subtle.hovered":"var(--ds-background-neutral-subtle-hovered, #091e4214)","color.background.neutral.subtle.pressed":"var(--ds-background-neutral-subtle-pressed, #B3D4FF)","color.background.neutral.bold":"var(--ds-background-neutral-bold, #42526E)","color.background.neutral.bold.hovered":"var(--ds-background-neutral-bold-hovered, #505F79)","color.background.neutral.bold.pressed":"var(--ds-background-neutral-bold-pressed, #344563)","color.background.selected":"var(--ds-background-selected, #DEEBFF)","color.background.selected.hovered":"var(--ds-background-selected-hovered, #B3D4FF)","color.background.selected.pressed":"var(--ds-background-selected-pressed, #4C9AFF)","color.background.selected.bold":"var(--ds-background-selected-bold, #0052CC)","color.background.selected.bold.hovered":"var(--ds-background-selected-bold-hovered, #2684FF)","color.background.selected.bold.pressed":"var(--ds-background-selected-bold-pressed, #0052CC)","color.background.brand.subtlest":"var(--ds-background-brand-subtlest, #B3D4FF)","color.background.brand.subtlest.hovered":"var(--ds-background-brand-subtlest-hovered, #DEEBFF)","color.background.brand.subtlest.pressed":"var(--ds-background-brand-subtlest-pressed, #4C9AFF)","color.background.brand.bold":"var(--ds-background-brand-bold, #0052CC)","color.background.brand.bold.hovered":"var(--ds-background-brand-bold-hovered, #0065FF)","color.background.brand.bold.pressed":"var(--ds-background-brand-bold-pressed, #0747A6)","color.background.brand.boldest":"var(--ds-background-brand-boldest, #0747A6)","color.background.brand.boldest.hovered":"var(--ds-background-brand-boldest-hovered, #0052CC)","color.background.brand.boldest.pressed":"var(--ds-background-brand-boldest-pressed, #0747A6)","color.background.danger":"var(--ds-background-danger, #FFEBE6)","color.background.danger.hovered":"var(--ds-background-danger-hovered, #FFBDAD)","color.background.danger.pressed":"var(--ds-background-danger-pressed, #FF8F73)","color.background.danger.bold":"var(--ds-background-danger-bold, #DE350B)","color.background.danger.bold.hovered":"var(--ds-background-danger-bold-hovered, #FF5630)","color.background.danger.bold.pressed":"var(--ds-background-danger-bold-pressed, #BF2600)","color.background.warning":"var(--ds-background-warning, #FFFAE6)","color.background.warning.hovered":"var(--ds-background-warning-hovered, #FFF0B3)","color.background.warning.pressed":"var(--ds-background-warning-pressed, #FFE380)","color.background.warning.bold":"var(--ds-background-warning-bold, #FFAB00)","color.background.warning.bold.hovered":"var(--ds-background-warning-bold-hovered, #FFC400)","color.background.warning.bold.pressed":"var(--ds-background-warning-bold-pressed, #FF991F)","color.background.success":"var(--ds-background-success, #E3FCEF)","color.background.success.hovered":"var(--ds-background-success-hovered, #ABF5D1)","color.background.success.pressed":"var(--ds-background-success-pressed, #79F2C0)","color.background.success.bold":"var(--ds-background-success-bold, #00875A)","color.background.success.bold.hovered":"var(--ds-background-success-bold-hovered, #57D9A3)","color.background.success.bold.pressed":"var(--ds-background-success-bold-pressed, #00875A)","color.background.discovery":"var(--ds-background-discovery, #EAE6FF)","color.background.discovery.hovered":"var(--ds-background-discovery-hovered, #C0B6F2)","color.background.discovery.pressed":"var(--ds-background-discovery-pressed, #998DD9)","color.background.discovery.bold":"var(--ds-background-discovery-bold, #5243AA)","color.background.discovery.bold.hovered":"var(--ds-background-discovery-bold-hovered, #8777D9)","color.background.discovery.bold.pressed":"var(--ds-background-discovery-bold-pressed, #5243AA)","color.background.information":"var(--ds-background-information, #DEEBFF)","color.background.information.hovered":"var(--ds-background-information-hovered, #B3D4FF)","color.background.information.pressed":"var(--ds-background-information-pressed, #4C9AFF)","color.background.information.bold":"var(--ds-background-information-bold, #0052CC)","color.background.information.bold.hovered":"var(--ds-background-information-bold-hovered, #2684FF)","color.background.information.bold.pressed":"var(--ds-background-information-bold-pressed, #0052CC)","color.blanket":"var(--ds-blanket, #091e4289)","color.blanket.selected":"var(--ds-blanket-selected, #388BFF14)","color.blanket.danger":"var(--ds-blanket-danger, #EF5C4814)","elevation.surface":"var(--ds-surface, #FFFFFF)","elevation.surface.hovered":"var(--ds-surface-hovered, #FAFBFC)","elevation.surface.pressed":"var(--ds-surface-pressed, #F4F5F7)","elevation.surface.overlay":"var(--ds-surface-overlay, #FFFFFF)","elevation.surface.overlay.hovered":"var(--ds-surface-overlay-hovered, #FAFBFC)","elevation.surface.overlay.pressed":"var(--ds-surface-overlay-pressed, #F4F5F7)","elevation.surface.raised":"var(--ds-surface-raised, #FFFFFF)","elevation.surface.raised.hovered":"var(--ds-surface-raised-hovered, #FAFBFC)","elevation.surface.raised.pressed":"var(--ds-surface-raised-pressed, #F4F5F7)","elevation.surface.sunken":"var(--ds-surface-sunken, #F4F5F7)","utility.elevation.surface.current":"var(--ds-elevation-surface-current, #FFFFFF)"},h={"color.text":"var(--ds-text, #172B4D)","color.text.accent.lime":"var(--ds-text-accent-lime, #4C6B1F)","color.text.accent.lime.bolder":"var(--ds-text-accent-lime-bolder, #37471F)","color.text.accent.red":"var(--ds-text-accent-red, #DE350B)","color.text.accent.red.bolder":"var(--ds-text-accent-red-bolder, #BF2600)","color.text.accent.orange":"var(--ds-text-accent-orange, #F18D13)","color.text.accent.orange.bolder":"var(--ds-text-accent-orange-bolder, #B65C02)","color.text.accent.yellow":"var(--ds-text-accent-yellow, #FF991F)","color.text.accent.yellow.bolder":"var(--ds-text-accent-yellow-bolder, #FF8B00)","color.text.accent.green":"var(--ds-text-accent-green, #00875A)","color.text.accent.green.bolder":"var(--ds-text-accent-green-bolder, #006644)","color.text.accent.teal":"var(--ds-text-accent-teal, #00A3BF)","color.text.accent.teal.bolder":"var(--ds-text-accent-teal-bolder, #008DA6)","color.text.accent.blue":"var(--ds-text-accent-blue, #0052CC)","color.text.accent.blue.bolder":"var(--ds-text-accent-blue-bolder, #0747A6)","color.text.accent.purple":"var(--ds-text-accent-purple, #5243AA)","color.text.accent.purple.bolder":"var(--ds-text-accent-purple-bolder, #403294)","color.text.accent.magenta":"var(--ds-text-accent-magenta, #E774BB)","color.text.accent.magenta.bolder":"var(--ds-text-accent-magenta-bolder, #DA62AC)","color.text.accent.gray":"var(--ds-text-accent-gray, #505F79)","color.text.accent.gray.bolder":"var(--ds-text-accent-gray-bolder, #172B4D)","color.text.disabled":"var(--ds-text-disabled, #A5ADBA)","color.text.inverse":"var(--ds-text-inverse, #FFFFFF)","color.text.selected":"var(--ds-text-selected, #0052CC)","color.text.brand":"var(--ds-text-brand, #0065FF)","color.text.danger":"var(--ds-text-danger, #DE350B)","color.text.warning":"var(--ds-text-warning, #974F0C)","color.text.warning.inverse":"var(--ds-text-warning-inverse, #172B4D)","color.text.success":"var(--ds-text-success, #006644)","color.text.discovery":"var(--ds-text-discovery, #403294)","color.text.information":"var(--ds-text-information, #0052CC)","color.text.subtlest":"var(--ds-text-subtlest, #7A869A)","color.text.subtle":"var(--ds-text-subtle, #42526E)","color.link":"var(--ds-link, #0052CC)","color.link.pressed":"var(--ds-link-pressed, #0747A6)","color.link.visited":"var(--ds-link-visited, #403294)"},y={card:100,navigation:200,dialog:300,layer:400,blanket:500,modal:510,flag:600,spotlight:700,tooltip:800},k={"border.width":"var(--ds-border-width, 1px)","border.width.0":"var(--ds-border-width-0, 0px)","border.width.indicator":"var(--ds-border-width-indicator, 3px)","border.width.outline":"var(--ds-border-width-outline, 2px)"},m={"border.radius.050":"var(--ds-border-radius-050, 2px)","border.radius":"var(--ds-border-radius, 3px)","border.radius.100":"var(--ds-border-radius-100, 3px)","border.radius.200":"var(--ds-border-radius-200, 8px)","border.radius.300":"var(--ds-border-radius-300, 12px)","border.radius.400":"var(--ds-border-radius-400, 16px)","border.radius.circle":"var(--ds-border-radius-circle, 32032px)"},j=["padding","paddingBlock","paddingBlockStart","paddingBlockEnd","paddingInline","paddingInlineStart","paddingInlineEnd","gap","rowGap","columnGap"],M=function(e,t){return Object.keys(t).reduce((function(r,o){return r[o]=Object(a.css)(n()({},e,t[o])),r}),{})},N=j.reduce((function(e,t){return e[t]=M(t,l),e}),{}),I=j.reduce((function(e,t){return e[t]=M(t,l),e}),{}),D=M("backgroundColor",f),x=(M("color",h),M("fontSize",{"font.size.050":"var(--ds-font-size-050, 11px)","font.size.075":"var(--ds-font-size-075, 12px)","font.size.100":"var(--ds-font-size-100, 14px)","font.size.200":"var(--ds-font-size-200, 16px)","font.size.300":"var(--ds-font-size-300, 20px)","font.size.400":"var(--ds-font-size-400, 24px)","font.size.500":"var(--ds-font-size-500, 29px)","font.size.600":"var(--ds-font-size-600, 35px)"}),M("fontWeight",{bold:"var(--ds-font-weight-bold, 700)",medium:"var(--ds-font-weight-medium, 500)",regular:"var(--ds-font-weight-regular, 400)",semibold:"var(--ds-font-weight-semibold, 600)"}),M("fontFamily",{"font.family.body":'var(--ds-font-family-body, ui-sans-serif, "Segoe UI", Ubuntu, system-ui, "Helvetica Neue", sans-serif)',"font.family.brand":"var(--ds-font-family-brand, Charlie Sans)","font.family.code":'var(--ds-font-family-code, ui-monospace, Menlo, "Segoe UI Mono", "Ubuntu Mono", monospace)',"font.family.heading":'var(--ds-font-family-heading, ui-sans-serif, "Segoe UI", Ubuntu, system-ui, "Helvetica Neue", sans-serif)',"font.family.monospace":'var(--ds-font-family-monospace, ui-monospace, Menlo, "Segoe UI Mono", "Ubuntu Mono", monospace)',"font.family.sans":'var(--ds-font-family-sans, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif)'}),M("lineHeight",{"font.lineHeight.1":"var(--ds-font-lineHeight-1, 1)","font.lineHeight.100":"var(--ds-font-lineHeight-100, 16px)","font.lineHeight.200":"var(--ds-font-lineHeight-200, 20px)","font.lineHeight.300":"var(--ds-font-lineHeight-300, 24px)","font.lineHeight.400":"var(--ds-font-lineHeight-400, 28px)","font.lineHeight.500":"var(--ds-font-lineHeight-500, 32px)","font.lineHeight.600":"var(--ds-font-lineHeight-600, 40px)"}),M("font",{body:'var(--ds-font-body, normal 400 14px/20px ui-sans-serif, "Segoe UI", Ubuntu, system-ui, "Helvetica Neue", sans-serif)',"body.large":'var(--ds-font-body-large, normal 400 16px/24px ui-sans-serif, "Segoe UI", Ubuntu, system-ui, "Helvetica Neue", sans-serif)',"body.small":'var(--ds-font-body-small, normal 400 11px/16px ui-sans-serif, "Segoe UI", Ubuntu, system-ui, "Helvetica Neue", sans-serif)'}),M("font",{ui:'var(--ds-font-ui, normal 500 14px/1 ui-sans-serif, "Segoe UI", Ubuntu, system-ui, "Helvetica Neue", sans-serif)',"ui.small":'var(--ds-font-ui-small, normal 400 11px/1 ui-sans-serif, "Segoe UI", Ubuntu, system-ui, "Helvetica Neue", sans-serif)'}),M(c,p)),O=function(e){return void 0!==p[e]}},80:function(e,t,r){"use strict";r.d(t,"g",(function(){return o})),r.d(t,"i",(function(){return a})),r.d(t,"f",(function(){return s})),r.d(t,"e",(function(){return d})),r.d(t,"d",(function(){return i})),r.d(t,"a",(function(){return l})),r.d(t,"h",(function(){return u})),r.d(t,"c",(function(){return b})),r.d(t,"b",(function(){return g}));var o=function(e){return/^#[0-9A-F]{6}$/i.test(e)},n=function(e){return/^#([A-Fa-f0-9]{3,4}){1,2}$/.test(e)};function a(e,t,r){return"#"+((1<<24)+(e<<16)+(t<<8)+r).toString(16).slice(1)}function c(e){if(9===e.length){var t=parseInt(e.slice(7,9),16)/255;return Number(parseFloat(t.toString()).toFixed(2))}return 1}function s(e){if(!n(e))throw new Error("Invalid HEX");var t;return 3===(t=e.substring(1).split("")).length&&(t=[t[0],t[0],t[1],t[1],t[2],t[2]]),[(t="0x"+t.join(""))>>16&255,t>>8&255,255&t,c(e)]}function d(e){if(!n(e))throw new Error("Invalid HEX");var t;return 3===(t=e.substring(1).split("")).length&&(t=[t[0],t[0],t[1],t[1],t[2],t[2]]),[(t="0x"+t.join(""))>>16&255,t>>8&255,255&t]}function i(e){if(!n(e))throw new Error("Invalid HEX");var t=0,r=0,o=0;4===e.length?(t="0x"+e[1]+e[1],r="0x"+e[2]+e[2],o="0x"+e[3]+e[3]):7===e.length&&(t="0x"+e[1]+e[2],r="0x"+e[3]+e[4],o="0x"+e[5]+e[6]),t/=255,r/=255,o/=255;var a=Math.min(t,r,o),c=Math.max(t,r,o),s=c-a,d=0,i=0;return d=0===s?0:c===t?(r-o)/s%6:c===r?(o-t)/s+2:(t-r)/s+4,(d=Math.round(60*d))<0&&(d+=360),i=(c+a)/2,[d,+(100*(0===s?0:s/(1-Math.abs(2*i-1)))).toFixed(1),i=+(100*i).toFixed(1)]}function l(e,t,r){r/=100;var o=function(t){return(t+e/30)%12},n=(t/=100)*Math.min(r,1-r),a=function(e){return r-n*Math.max(-1,Math.min(o(e)-3,Math.min(9-o(e),1)))};return[255*a(0),255*a(8),255*a(4)]}function u(e,t,r){var o=e/255,n=t/255,a=r/255;return.2126*(o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4))+.7152*(n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))+.0722*(a<=.03928?a/12.92:Math.pow((a+.055)/1.055,2.4))}function b(e,t){if(!n(e)||!n(t))throw new Error("Invalid HEX");var r=d(e),o=d(t),a=u(r[0],r[1],r[2]),c=u(o[0],o[1],o[2]);return(Math.max(a,c)+.05)/(Math.min(a,c)+.05)}function g(e,t){var r=p(e),o=p(t),n=r[0]-o[0],a=r[1]-o[1],c=r[2]-o[2],s=Math.sqrt(r[1]*r[1]+r[2]*r[2]),d=s-Math.sqrt(o[1]*o[1]+o[2]*o[2]),i=a*a+c*c-d*d,l=n/1,u=d/(1+.045*s),b=(i=i<0?0:Math.sqrt(i))/(1+.015*s),g=l*l+u*u+b*b;return g<0?0:Math.sqrt(g)}function p(e){var t,r,o,n=e[0]/255,a=e[1]/255,c=e[2]/255;return r=(.2126*(n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92)+.7152*(a=a>.04045?Math.pow((a+.055)/1.055,2.4):a/12.92)+.0722*(c=c>.04045?Math.pow((c+.055)/1.055,2.4):c/12.92))/1,o=(.0193*n+.1192*a+.9505*c)/1.08883,t=(t=(.4124*n+.3576*a+.1805*c)/.95047)>.008856?Math.pow(t,1/3):7.787*t+16/116,[116*(r=r>.008856?Math.pow(r,1/3):7.787*r+16/116)-16,500*(t-r),200*(r-(o=o>.008856?Math.pow(o,1/3):7.787*o+16/116))]}},84:function(e,t,r){"use strict";t.a={"color.text":"--ds-text","color.text.accent.lime":"--ds-text-accent-lime","color.text.accent.lime.bolder":"--ds-text-accent-lime-bolder","color.text.accent.red":"--ds-text-accent-red","color.text.accent.red.bolder":"--ds-text-accent-red-bolder","color.text.accent.orange":"--ds-text-accent-orange","color.text.accent.orange.bolder":"--ds-text-accent-orange-bolder","color.text.accent.yellow":"--ds-text-accent-yellow","color.text.accent.yellow.bolder":"--ds-text-accent-yellow-bolder","color.text.accent.green":"--ds-text-accent-green","color.text.accent.green.bolder":"--ds-text-accent-green-bolder","color.text.accent.teal":"--ds-text-accent-teal","color.text.accent.teal.bolder":"--ds-text-accent-teal-bolder","color.text.accent.blue":"--ds-text-accent-blue","color.text.accent.blue.bolder":"--ds-text-accent-blue-bolder","color.text.accent.purple":"--ds-text-accent-purple","color.text.accent.purple.bolder":"--ds-text-accent-purple-bolder","color.text.accent.magenta":"--ds-text-accent-magenta","color.text.accent.magenta.bolder":"--ds-text-accent-magenta-bolder","color.text.accent.gray":"--ds-text-accent-gray","color.text.accent.gray.bolder":"--ds-text-accent-gray-bolder","color.text.disabled":"--ds-text-disabled","color.text.inverse":"--ds-text-inverse","color.text.selected":"--ds-text-selected","color.text.brand":"--ds-text-brand","color.text.danger":"--ds-text-danger","color.text.warning":"--ds-text-warning","color.text.warning.inverse":"--ds-text-warning-inverse","color.text.success":"--ds-text-success","color.text.discovery":"--ds-text-discovery","color.text.information":"--ds-text-information","color.text.subtlest":"--ds-text-subtlest","color.text.subtle":"--ds-text-subtle","color.link":"--ds-link","color.link.pressed":"--ds-link-pressed","color.link.visited":"--ds-link-visited","color.icon":"--ds-icon","color.icon.accent.lime":"--ds-icon-accent-lime","color.icon.accent.red":"--ds-icon-accent-red","color.icon.accent.orange":"--ds-icon-accent-orange","color.icon.accent.yellow":"--ds-icon-accent-yellow","color.icon.accent.green":"--ds-icon-accent-green","color.icon.accent.teal":"--ds-icon-accent-teal","color.icon.accent.blue":"--ds-icon-accent-blue","color.icon.accent.purple":"--ds-icon-accent-purple","color.icon.accent.magenta":"--ds-icon-accent-magenta","color.icon.accent.gray":"--ds-icon-accent-gray","color.icon.disabled":"--ds-icon-disabled","color.icon.inverse":"--ds-icon-inverse","color.icon.selected":"--ds-icon-selected","color.icon.brand":"--ds-icon-brand","color.icon.danger":"--ds-icon-danger","color.icon.warning":"--ds-icon-warning","color.icon.warning.inverse":"--ds-icon-warning-inverse","color.icon.success":"--ds-icon-success","color.icon.discovery":"--ds-icon-discovery","color.icon.information":"--ds-icon-information","color.icon.subtle":"--ds-icon-subtle","color.border":"--ds-border","color.border.accent.lime":"--ds-border-accent-lime","color.border.accent.red":"--ds-border-accent-red","color.border.accent.orange":"--ds-border-accent-orange","color.border.accent.yellow":"--ds-border-accent-yellow","color.border.accent.green":"--ds-border-accent-green","color.border.accent.teal":"--ds-border-accent-teal","color.border.accent.blue":"--ds-border-accent-blue","color.border.accent.purple":"--ds-border-accent-purple","color.border.accent.magenta":"--ds-border-accent-magenta","color.border.accent.gray":"--ds-border-accent-gray","color.border.disabled":"--ds-border-disabled","color.border.focused":"--ds-border-focused","color.border.input":"--ds-border-input","color.border.inverse":"--ds-border-inverse","color.border.selected":"--ds-border-selected","color.border.brand":"--ds-border-brand","color.border.danger":"--ds-border-danger","color.border.warning":"--ds-border-warning","color.border.success":"--ds-border-success","color.border.discovery":"--ds-border-discovery","color.border.information":"--ds-border-information","color.border.bold":"--ds-border-bold","color.background.accent.lime.subtlest":"--ds-background-accent-lime-subtlest","color.background.accent.lime.subtlest.hovered":"--ds-background-accent-lime-subtlest-hovered","color.background.accent.lime.subtlest.pressed":"--ds-background-accent-lime-subtlest-pressed","color.background.accent.lime.subtler":"--ds-background-accent-lime-subtler","color.background.accent.lime.subtler.hovered":"--ds-background-accent-lime-subtler-hovered","color.background.accent.lime.subtler.pressed":"--ds-background-accent-lime-subtler-pressed","color.background.accent.lime.subtle":"--ds-background-accent-lime-subtle","color.background.accent.lime.subtle.hovered":"--ds-background-accent-lime-subtle-hovered","color.background.accent.lime.subtle.pressed":"--ds-background-accent-lime-subtle-pressed","color.background.accent.lime.bolder":"--ds-background-accent-lime-bolder","color.background.accent.lime.bolder.hovered":"--ds-background-accent-lime-bolder-hovered","color.background.accent.lime.bolder.pressed":"--ds-background-accent-lime-bolder-pressed","color.background.accent.red.subtlest":"--ds-background-accent-red-subtlest","color.background.accent.red.subtlest.hovered":"--ds-background-accent-red-subtlest-hovered","color.background.accent.red.subtlest.pressed":"--ds-background-accent-red-subtlest-pressed","color.background.accent.red.subtler":"--ds-background-accent-red-subtler","color.background.accent.red.subtler.hovered":"--ds-background-accent-red-subtler-hovered","color.background.accent.red.subtler.pressed":"--ds-background-accent-red-subtler-pressed","color.background.accent.red.subtle":"--ds-background-accent-red-subtle","color.background.accent.red.subtle.hovered":"--ds-background-accent-red-subtle-hovered","color.background.accent.red.subtle.pressed":"--ds-background-accent-red-subtle-pressed","color.background.accent.red.bolder":"--ds-background-accent-red-bolder","color.background.accent.red.bolder.hovered":"--ds-background-accent-red-bolder-hovered","color.background.accent.red.bolder.pressed":"--ds-background-accent-red-bolder-pressed","color.background.accent.orange.subtlest":"--ds-background-accent-orange-subtlest","color.background.accent.orange.subtlest.hovered":"--ds-background-accent-orange-subtlest-hovered","color.background.accent.orange.subtlest.pressed":"--ds-background-accent-orange-subtlest-pressed","color.background.accent.orange.subtler":"--ds-background-accent-orange-subtler","color.background.accent.orange.subtler.hovered":"--ds-background-accent-orange-subtler-hovered","color.background.accent.orange.subtler.pressed":"--ds-background-accent-orange-subtler-pressed","color.background.accent.orange.subtle":"--ds-background-accent-orange-subtle","color.background.accent.orange.subtle.hovered":"--ds-background-accent-orange-subtle-hovered","color.background.accent.orange.subtle.pressed":"--ds-background-accent-orange-subtle-pressed","color.background.accent.orange.bolder":"--ds-background-accent-orange-bolder","color.background.accent.orange.bolder.hovered":"--ds-background-accent-orange-bolder-hovered","color.background.accent.orange.bolder.pressed":"--ds-background-accent-orange-bolder-pressed","color.background.accent.yellow.subtlest":"--ds-background-accent-yellow-subtlest","color.background.accent.yellow.subtlest.hovered":"--ds-background-accent-yellow-subtlest-hovered","color.background.accent.yellow.subtlest.pressed":"--ds-background-accent-yellow-subtlest-pressed","color.background.accent.yellow.subtler":"--ds-background-accent-yellow-subtler","color.background.accent.yellow.subtler.hovered":"--ds-background-accent-yellow-subtler-hovered","color.background.accent.yellow.subtler.pressed":"--ds-background-accent-yellow-subtler-pressed","color.background.accent.yellow.subtle":"--ds-background-accent-yellow-subtle","color.background.accent.yellow.subtle.hovered":"--ds-background-accent-yellow-subtle-hovered","color.background.accent.yellow.subtle.pressed":"--ds-background-accent-yellow-subtle-pressed","color.background.accent.yellow.bolder":"--ds-background-accent-yellow-bolder","color.background.accent.yellow.bolder.hovered":"--ds-background-accent-yellow-bolder-hovered","color.background.accent.yellow.bolder.pressed":"--ds-background-accent-yellow-bolder-pressed","color.background.accent.green.subtlest":"--ds-background-accent-green-subtlest","color.background.accent.green.subtlest.hovered":"--ds-background-accent-green-subtlest-hovered","color.background.accent.green.subtlest.pressed":"--ds-background-accent-green-subtlest-pressed","color.background.accent.green.subtler":"--ds-background-accent-green-subtler","color.background.accent.green.subtler.hovered":"--ds-background-accent-green-subtler-hovered","color.background.accent.green.subtler.pressed":"--ds-background-accent-green-subtler-pressed","color.background.accent.green.subtle":"--ds-background-accent-green-subtle","color.background.accent.green.subtle.hovered":"--ds-background-accent-green-subtle-hovered","color.background.accent.green.subtle.pressed":"--ds-background-accent-green-subtle-pressed","color.background.accent.green.bolder":"--ds-background-accent-green-bolder","color.background.accent.green.bolder.hovered":"--ds-background-accent-green-bolder-hovered","color.background.accent.green.bolder.pressed":"--ds-background-accent-green-bolder-pressed","color.background.accent.teal.subtlest":"--ds-background-accent-teal-subtlest","color.background.accent.teal.subtlest.hovered":"--ds-background-accent-teal-subtlest-hovered","color.background.accent.teal.subtlest.pressed":"--ds-background-accent-teal-subtlest-pressed","color.background.accent.teal.subtler":"--ds-background-accent-teal-subtler","color.background.accent.teal.subtler.hovered":"--ds-background-accent-teal-subtler-hovered","color.background.accent.teal.subtler.pressed":"--ds-background-accent-teal-subtler-pressed","color.background.accent.teal.subtle":"--ds-background-accent-teal-subtle","color.background.accent.teal.subtle.hovered":"--ds-background-accent-teal-subtle-hovered","color.background.accent.teal.subtle.pressed":"--ds-background-accent-teal-subtle-pressed","color.background.accent.teal.bolder":"--ds-background-accent-teal-bolder","color.background.accent.teal.bolder.hovered":"--ds-background-accent-teal-bolder-hovered","color.background.accent.teal.bolder.pressed":"--ds-background-accent-teal-bolder-pressed","color.background.accent.blue.subtlest":"--ds-background-accent-blue-subtlest","color.background.accent.blue.subtlest.hovered":"--ds-background-accent-blue-subtlest-hovered","color.background.accent.blue.subtlest.pressed":"--ds-background-accent-blue-subtlest-pressed","color.background.accent.blue.subtler":"--ds-background-accent-blue-subtler","color.background.accent.blue.subtler.hovered":"--ds-background-accent-blue-subtler-hovered","color.background.accent.blue.subtler.pressed":"--ds-background-accent-blue-subtler-pressed","color.background.accent.blue.subtle":"--ds-background-accent-blue-subtle","color.background.accent.blue.subtle.hovered":"--ds-background-accent-blue-subtle-hovered","color.background.accent.blue.subtle.pressed":"--ds-background-accent-blue-subtle-pressed","color.background.accent.blue.bolder":"--ds-background-accent-blue-bolder","color.background.accent.blue.bolder.hovered":"--ds-background-accent-blue-bolder-hovered","color.background.accent.blue.bolder.pressed":"--ds-background-accent-blue-bolder-pressed","color.background.accent.purple.subtlest":"--ds-background-accent-purple-subtlest","color.background.accent.purple.subtlest.hovered":"--ds-background-accent-purple-subtlest-hovered","color.background.accent.purple.subtlest.pressed":"--ds-background-accent-purple-subtlest-pressed","color.background.accent.purple.subtler":"--ds-background-accent-purple-subtler","color.background.accent.purple.subtler.hovered":"--ds-background-accent-purple-subtler-hovered","color.background.accent.purple.subtler.pressed":"--ds-background-accent-purple-subtler-pressed","color.background.accent.purple.subtle":"--ds-background-accent-purple-subtle","color.background.accent.purple.subtle.hovered":"--ds-background-accent-purple-subtle-hovered","color.background.accent.purple.subtle.pressed":"--ds-background-accent-purple-subtle-pressed","color.background.accent.purple.bolder":"--ds-background-accent-purple-bolder","color.background.accent.purple.bolder.hovered":"--ds-background-accent-purple-bolder-hovered","color.background.accent.purple.bolder.pressed":"--ds-background-accent-purple-bolder-pressed","color.background.accent.magenta.subtlest":"--ds-background-accent-magenta-subtlest","color.background.accent.magenta.subtlest.hovered":"--ds-background-accent-magenta-subtlest-hovered","color.background.accent.magenta.subtlest.pressed":"--ds-background-accent-magenta-subtlest-pressed","color.background.accent.magenta.subtler":"--ds-background-accent-magenta-subtler","color.background.accent.magenta.subtler.hovered":"--ds-background-accent-magenta-subtler-hovered","color.background.accent.magenta.subtler.pressed":"--ds-background-accent-magenta-subtler-pressed","color.background.accent.magenta.subtle":"--ds-background-accent-magenta-subtle","color.background.accent.magenta.subtle.hovered":"--ds-background-accent-magenta-subtle-hovered","color.background.accent.magenta.subtle.pressed":"--ds-background-accent-magenta-subtle-pressed","color.background.accent.magenta.bolder":"--ds-background-accent-magenta-bolder","color.background.accent.magenta.bolder.hovered":"--ds-background-accent-magenta-bolder-hovered","color.background.accent.magenta.bolder.pressed":"--ds-background-accent-magenta-bolder-pressed","color.background.accent.gray.subtlest":"--ds-background-accent-gray-subtlest","color.background.accent.gray.subtlest.hovered":"--ds-background-accent-gray-subtlest-hovered","color.background.accent.gray.subtlest.pressed":"--ds-background-accent-gray-subtlest-pressed","color.background.accent.gray.subtler":"--ds-background-accent-gray-subtler","color.background.accent.gray.subtler.hovered":"--ds-background-accent-gray-subtler-hovered","color.background.accent.gray.subtler.pressed":"--ds-background-accent-gray-subtler-pressed","color.background.accent.gray.subtle":"--ds-background-accent-gray-subtle","color.background.accent.gray.subtle.hovered":"--ds-background-accent-gray-subtle-hovered","color.background.accent.gray.subtle.pressed":"--ds-background-accent-gray-subtle-pressed","color.background.accent.gray.bolder":"--ds-background-accent-gray-bolder","color.background.accent.gray.bolder.hovered":"--ds-background-accent-gray-bolder-hovered","color.background.accent.gray.bolder.pressed":"--ds-background-accent-gray-bolder-pressed","color.background.disabled":"--ds-background-disabled","color.background.input":"--ds-background-input","color.background.input.hovered":"--ds-background-input-hovered","color.background.input.pressed":"--ds-background-input-pressed","color.background.inverse.subtle":"--ds-background-inverse-subtle","color.background.inverse.subtle.hovered":"--ds-background-inverse-subtle-hovered","color.background.inverse.subtle.pressed":"--ds-background-inverse-subtle-pressed","color.background.neutral":"--ds-background-neutral","color.background.neutral.hovered":"--ds-background-neutral-hovered","color.background.neutral.pressed":"--ds-background-neutral-pressed","color.background.neutral.subtle":"--ds-background-neutral-subtle","color.background.neutral.subtle.hovered":"--ds-background-neutral-subtle-hovered","color.background.neutral.subtle.pressed":"--ds-background-neutral-subtle-pressed","color.background.neutral.bold":"--ds-background-neutral-bold","color.background.neutral.bold.hovered":"--ds-background-neutral-bold-hovered","color.background.neutral.bold.pressed":"--ds-background-neutral-bold-pressed","color.background.selected":"--ds-background-selected","color.background.selected.hovered":"--ds-background-selected-hovered","color.background.selected.pressed":"--ds-background-selected-pressed","color.background.selected.bold":"--ds-background-selected-bold","color.background.selected.bold.hovered":"--ds-background-selected-bold-hovered","color.background.selected.bold.pressed":"--ds-background-selected-bold-pressed","color.background.brand.subtlest":"--ds-background-brand-subtlest","color.background.brand.subtlest.hovered":"--ds-background-brand-subtlest-hovered","color.background.brand.subtlest.pressed":"--ds-background-brand-subtlest-pressed","color.background.brand.bold":"--ds-background-brand-bold","color.background.brand.bold.hovered":"--ds-background-brand-bold-hovered","color.background.brand.bold.pressed":"--ds-background-brand-bold-pressed","color.background.brand.boldest":"--ds-background-brand-boldest","color.background.brand.boldest.hovered":"--ds-background-brand-boldest-hovered","color.background.brand.boldest.pressed":"--ds-background-brand-boldest-pressed","color.background.danger":"--ds-background-danger","color.background.danger.hovered":"--ds-background-danger-hovered","color.background.danger.pressed":"--ds-background-danger-pressed","color.background.danger.bold":"--ds-background-danger-bold","color.background.danger.bold.hovered":"--ds-background-danger-bold-hovered","color.background.danger.bold.pressed":"--ds-background-danger-bold-pressed","color.background.warning":"--ds-background-warning","color.background.warning.hovered":"--ds-background-warning-hovered","color.background.warning.pressed":"--ds-background-warning-pressed","color.background.warning.bold":"--ds-background-warning-bold","color.background.warning.bold.hovered":"--ds-background-warning-bold-hovered","color.background.warning.bold.pressed":"--ds-background-warning-bold-pressed","color.background.success":"--ds-background-success","color.background.success.hovered":"--ds-background-success-hovered","color.background.success.pressed":"--ds-background-success-pressed","color.background.success.bold":"--ds-background-success-bold","color.background.success.bold.hovered":"--ds-background-success-bold-hovered","color.background.success.bold.pressed":"--ds-background-success-bold-pressed","color.background.discovery":"--ds-background-discovery","color.background.discovery.hovered":"--ds-background-discovery-hovered","color.background.discovery.pressed":"--ds-background-discovery-pressed","color.background.discovery.bold":"--ds-background-discovery-bold","color.background.discovery.bold.hovered":"--ds-background-discovery-bold-hovered","color.background.discovery.bold.pressed":"--ds-background-discovery-bold-pressed","color.background.information":"--ds-background-information","color.background.information.hovered":"--ds-background-information-hovered","color.background.information.pressed":"--ds-background-information-pressed","color.background.information.bold":"--ds-background-information-bold","color.background.information.bold.hovered":"--ds-background-information-bold-hovered","color.background.information.bold.pressed":"--ds-background-information-bold-pressed","color.blanket":"--ds-blanket","color.blanket.selected":"--ds-blanket-selected","color.blanket.danger":"--ds-blanket-danger","color.interaction.hovered":"--ds-interaction-hovered","color.interaction.pressed":"--ds-interaction-pressed","color.skeleton":"--ds-skeleton","color.skeleton.subtle":"--ds-skeleton-subtle","color.chart.categorical.1":"--ds-chart-categorical-1","color.chart.categorical.1.hovered":"--ds-chart-categorical-1-hovered","color.chart.categorical.2":"--ds-chart-categorical-2","color.chart.categorical.2.hovered":"--ds-chart-categorical-2-hovered","color.chart.categorical.3":"--ds-chart-categorical-3","color.chart.categorical.3.hovered":"--ds-chart-categorical-3-hovered","color.chart.categorical.4":"--ds-chart-categorical-4","color.chart.categorical.4.hovered":"--ds-chart-categorical-4-hovered","color.chart.categorical.5":"--ds-chart-categorical-5","color.chart.categorical.5.hovered":"--ds-chart-categorical-5-hovered","color.chart.categorical.6":"--ds-chart-categorical-6","color.chart.categorical.6.hovered":"--ds-chart-categorical-6-hovered","color.chart.categorical.7":"--ds-chart-categorical-7","color.chart.categorical.7.hovered":"--ds-chart-categorical-7-hovered","color.chart.categorical.8":"--ds-chart-categorical-8","color.chart.categorical.8.hovered":"--ds-chart-categorical-8-hovered","color.chart.lime.bold":"--ds-chart-lime-bold","color.chart.lime.bold.hovered":"--ds-chart-lime-bold-hovered","color.chart.lime.bolder":"--ds-chart-lime-bolder","color.chart.lime.bolder.hovered":"--ds-chart-lime-bolder-hovered","color.chart.lime.boldest":"--ds-chart-lime-boldest","color.chart.lime.boldest.hovered":"--ds-chart-lime-boldest-hovered","color.chart.neutral":"--ds-chart-neutral","color.chart.neutral.hovered":"--ds-chart-neutral-hovered","color.chart.red.bold":"--ds-chart-red-bold","color.chart.red.bold.hovered":"--ds-chart-red-bold-hovered","color.chart.red.bolder":"--ds-chart-red-bolder","color.chart.red.bolder.hovered":"--ds-chart-red-bolder-hovered","color.chart.red.boldest":"--ds-chart-red-boldest","color.chart.red.boldest.hovered":"--ds-chart-red-boldest-hovered","color.chart.orange.bold":"--ds-chart-orange-bold","color.chart.orange.bold.hovered":"--ds-chart-orange-bold-hovered","color.chart.orange.bolder":"--ds-chart-orange-bolder","color.chart.orange.bolder.hovered":"--ds-chart-orange-bolder-hovered","color.chart.orange.boldest":"--ds-chart-orange-boldest","color.chart.orange.boldest.hovered":"--ds-chart-orange-boldest-hovered","color.chart.yellow.bold":"--ds-chart-yellow-bold","color.chart.yellow.bold.hovered":"--ds-chart-yellow-bold-hovered","color.chart.yellow.bolder":"--ds-chart-yellow-bolder","color.chart.yellow.bolder.hovered":"--ds-chart-yellow-bolder-hovered","color.chart.yellow.boldest":"--ds-chart-yellow-boldest","color.chart.yellow.boldest.hovered":"--ds-chart-yellow-boldest-hovered","color.chart.green.bold":"--ds-chart-green-bold","color.chart.green.bold.hovered":"--ds-chart-green-bold-hovered","color.chart.green.bolder":"--ds-chart-green-bolder","color.chart.green.bolder.hovered":"--ds-chart-green-bolder-hovered","color.chart.green.boldest":"--ds-chart-green-boldest","color.chart.green.boldest.hovered":"--ds-chart-green-boldest-hovered","color.chart.teal.bold":"--ds-chart-teal-bold","color.chart.teal.bold.hovered":"--ds-chart-teal-bold-hovered","color.chart.teal.bolder":"--ds-chart-teal-bolder","color.chart.teal.bolder.hovered":"--ds-chart-teal-bolder-hovered","color.chart.teal.boldest":"--ds-chart-teal-boldest","color.chart.teal.boldest.hovered":"--ds-chart-teal-boldest-hovered","color.chart.blue.bold":"--ds-chart-blue-bold","color.chart.blue.bold.hovered":"--ds-chart-blue-bold-hovered","color.chart.blue.bolder":"--ds-chart-blue-bolder","color.chart.blue.bolder.hovered":"--ds-chart-blue-bolder-hovered","color.chart.blue.boldest":"--ds-chart-blue-boldest","color.chart.blue.boldest.hovered":"--ds-chart-blue-boldest-hovered","color.chart.purple.bold":"--ds-chart-purple-bold","color.chart.purple.bold.hovered":"--ds-chart-purple-bold-hovered","color.chart.purple.bolder":"--ds-chart-purple-bolder","color.chart.purple.bolder.hovered":"--ds-chart-purple-bolder-hovered","color.chart.purple.boldest":"--ds-chart-purple-boldest","color.chart.purple.boldest.hovered":"--ds-chart-purple-boldest-hovered","color.chart.magenta.bold":"--ds-chart-magenta-bold","color.chart.magenta.bold.hovered":"--ds-chart-magenta-bold-hovered","color.chart.magenta.bolder":"--ds-chart-magenta-bolder","color.chart.magenta.bolder.hovered":"--ds-chart-magenta-bolder-hovered","color.chart.magenta.boldest":"--ds-chart-magenta-boldest","color.chart.magenta.boldest.hovered":"--ds-chart-magenta-boldest-hovered","color.chart.gray.bold":"--ds-chart-gray-bold","color.chart.gray.bold.hovered":"--ds-chart-gray-bold-hovered","color.chart.gray.bolder":"--ds-chart-gray-bolder","color.chart.gray.bolder.hovered":"--ds-chart-gray-bolder-hovered","color.chart.gray.boldest":"--ds-chart-gray-boldest","color.chart.gray.boldest.hovered":"--ds-chart-gray-boldest-hovered","color.chart.brand":"--ds-chart-brand","color.chart.brand.hovered":"--ds-chart-brand-hovered","color.chart.danger":"--ds-chart-danger","color.chart.danger.hovered":"--ds-chart-danger-hovered","color.chart.danger.bold":"--ds-chart-danger-bold","color.chart.danger.bold.hovered":"--ds-chart-danger-bold-hovered","color.chart.warning":"--ds-chart-warning","color.chart.warning.hovered":"--ds-chart-warning-hovered","color.chart.warning.bold":"--ds-chart-warning-bold","color.chart.warning.bold.hovered":"--ds-chart-warning-bold-hovered","color.chart.success":"--ds-chart-success","color.chart.success.hovered":"--ds-chart-success-hovered","color.chart.success.bold":"--ds-chart-success-bold","color.chart.success.bold.hovered":"--ds-chart-success-bold-hovered","color.chart.discovery":"--ds-chart-discovery","color.chart.discovery.hovered":"--ds-chart-discovery-hovered","color.chart.discovery.bold":"--ds-chart-discovery-bold","color.chart.discovery.bold.hovered":"--ds-chart-discovery-bold-hovered","color.chart.information":"--ds-chart-information","color.chart.information.hovered":"--ds-chart-information-hovered","color.chart.information.bold":"--ds-chart-information-bold","color.chart.information.bold.hovered":"--ds-chart-information-bold-hovered","elevation.surface":"--ds-surface","elevation.surface.hovered":"--ds-surface-hovered","elevation.surface.pressed":"--ds-surface-pressed","elevation.surface.overlay":"--ds-surface-overlay","elevation.surface.overlay.hovered":"--ds-surface-overlay-hovered","elevation.surface.overlay.pressed":"--ds-surface-overlay-pressed","elevation.surface.raised":"--ds-surface-raised","elevation.surface.raised.hovered":"--ds-surface-raised-hovered","elevation.surface.raised.pressed":"--ds-surface-raised-pressed","elevation.surface.sunken":"--ds-surface-sunken","elevation.shadow.overflow":"--ds-shadow-overflow","elevation.shadow.overflow.perimeter":"--ds-shadow-overflow-perimeter","elevation.shadow.overflow.spread":"--ds-shadow-overflow-spread","elevation.shadow.overlay":"--ds-shadow-overlay","elevation.shadow.raised":"--ds-shadow-raised","opacity.disabled":"--ds-opacity-disabled","opacity.loading":"--ds-opacity-loading","utility.UNSAFE.textTransformUppercase":"--ds-UNSAFE-textTransformUppercase","utility.UNSAFE.transparent":"--ds-UNSAFE-transparent","utility.elevation.surface.current":"--ds-elevation-surface-current","border.radius.050":"--ds-border-radius-050","border.radius":"--ds-border-radius","border.radius.100":"--ds-border-radius-100","border.radius.200":"--ds-border-radius-200","border.radius.300":"--ds-border-radius-300","border.radius.400":"--ds-border-radius-400","border.radius.circle":"--ds-border-radius-circle","border.width":"--ds-border-width","border.width.0":"--ds-border-width-0","border.width.indicator":"--ds-border-width-indicator","border.width.outline":"--ds-border-width-outline","space.0":"--ds-space-0","space.025":"--ds-space-025","space.050":"--ds-space-050","space.075":"--ds-space-075","space.100":"--ds-space-100","space.150":"--ds-space-150","space.200":"--ds-space-200","space.250":"--ds-space-250","space.300":"--ds-space-300","space.400":"--ds-space-400","space.500":"--ds-space-500","space.600":"--ds-space-600","space.800":"--ds-space-800","space.1000":"--ds-space-1000","space.negative.025":"--ds-space-negative-025","space.negative.050":"--ds-space-negative-050","space.negative.075":"--ds-space-negative-075","space.negative.100":"--ds-space-negative-100","space.negative.150":"--ds-space-negative-150","space.negative.200":"--ds-space-negative-200","space.negative.250":"--ds-space-negative-250","space.negative.300":"--ds-space-negative-300","space.negative.400":"--ds-space-negative-400","font.body":"--ds-font-body","font.body.lg":"--ds-font-body-lg","font.body.sm":"--ds-font-body-sm","font.code":"--ds-font-code","font.heading.lg":"--ds-font-heading-lg","font.heading.md":"--ds-font-heading-md","font.heading.sm":"--ds-font-heading-sm","font.heading.xl":"--ds-font-heading-xl","font.heading.xs":"--ds-font-heading-xs","font.heading.xxl":"--ds-font-heading-xxl","font.heading.xxs":"--ds-font-heading-xxs","font.letterSpacing.0":"--ds-font-letterSpacing-0","font.letterSpacing.100":"--ds-font-letterSpacing-100","font.letterSpacing.200":"--ds-font-letterSpacing-200","font.letterSpacing.300":"--ds-font-letterSpacing-300","font.letterSpacing.400":"--ds-font-letterSpacing-400","font.ui":"--ds-font-ui","font.ui.sm":"--ds-font-ui-sm","font.family.body":"--ds-font-family-body","font.family.code":"--ds-font-family-code","font.family.heading":"--ds-font-family-heading","font.family.monospace":"--ds-font-family-monospace","font.family.sans":"--ds-font-family-sans","font.family.brand":"--ds-font-family-brand","font.size.050":"--ds-font-size-050","font.size.075":"--ds-font-size-075","font.size.100":"--ds-font-size-100","font.size.200":"--ds-font-size-200","font.size.300":"--ds-font-size-300","font.size.400":"--ds-font-size-400","font.size.500":"--ds-font-size-500","font.size.600":"--ds-font-size-600","font.weight.bold":"--ds-font-weight-bold","font.weight.medium":"--ds-font-weight-medium","font.weight.regular":"--ds-font-weight-regular","font.weight.semibold":"--ds-font-weight-semibold","font.lineHeight.1":"--ds-font-lineHeight-1","font.lineHeight.100":"--ds-font-lineHeight-100","font.lineHeight.200":"--ds-font-lineHeight-200","font.lineHeight.300":"--ds-font-lineHeight-300","font.lineHeight.400":"--ds-font-lineHeight-400","font.lineHeight.500":"--ds-font-lineHeight-500","font.lineHeight.600":"--ds-font-lineHeight-600"}},85:function(e,t,r){"use strict";var o=r(0),n=r(3),a=r(31),c=r(506),s=r(19),d=r(17),i=r.n(d),l=r(56),u=r(8),b={start:Object(n.css)({justifyContent:"start"}),center:Object(n.css)({justifyContent:"center"}),end:Object(n.css)({justifyContent:"end"}),"space-between":Object(n.css)({justifyContent:"space-between"}),"space-around":Object(n.css)({justifyContent:"space-around"}),"space-evenly":Object(n.css)({justifyContent:"space-evenly"}),stretch:Object(n.css)({justifyContent:"stretch"})},g={column:Object(n.css)({flexDirection:"column"}),row:Object(n.css)({flexDirection:"row"})},p={wrap:Object(n.css)({flexWrap:"wrap"}),nowrap:Object(n.css)({flexWrap:"nowrap"})},v={start:Object(n.css)({alignItems:"start"}),center:Object(n.css)({alignItems:"center"}),baseline:Object(n.css)({alignItems:"baseline"}),end:Object(n.css)({alignItems:"end"}),stretch:Object(n.css)({alignItems:"stretch"})},f=Object(n.css)({display:"flex",boxSizing:"border-box"}),h=Object(o.memo)(Object(o.forwardRef)((function(e,t){var r=e.as,o=void 0===r?"div":r,a=e.role,c=e.alignItems,s=e.justifyContent,d=e.gap,i=e.columnGap,h=e.rowGap,y=e.children,k=e.testId,m=e.direction,j=e.wrap,M=e.xcss,N=M&&Object(l.a)(M);return Object(n.jsx)(o,{role:a,css:[f,d&&u.n.gap[d],i&&u.n.columnGap[i],h&&u.n.rowGap[h],c&&v[c],m&&g[m],s&&b[s],j&&p[j],N&&N],"data-testid":k,ref:t},y)})));h.displayName="Flex";var y=h,k={hug:Object(l.b)({flexGrow:0}),fill:Object(l.b)({width:"100%",flexGrow:1})},m=Object(n.css)({color:"var(--ds-text-subtle, #42526E)",marginBlock:"var(--ds-space-0, 0px)",marginInline:"var(--ds-space-negative-025, -2px)",pointerEvents:"none",userSelect:"none"}),j=function(e){var t=e.children;return Object(n.jsx)("span",{css:m},t)},M=Object(o.memo)(Object(o.forwardRef)((function(e,t){var r=e.as,a=e.alignInline,c=e.alignBlock,s=void 0===c?"start":c,d=e.shouldWrap,l=void 0!==d&&d,u=e.spread,b=e.grow,g=e.space,p=e.rowSpace,v=e.separator,f=e.xcss,h=e.testId,m=e.role,M=e.children,N="string"==typeof v?Object(n.jsx)(j,null,v):v,I=N?o.Children.toArray(M).filter(Boolean).map((function(e,t){return Object(n.jsx)(o.Fragment,{key:t},v&&t>0?N:null,e)})):M,D=u||a;return Object(n.jsx)(y,{as:r,role:m,alignItems:s,justifyContent:D,direction:"row",gap:g,rowGap:p,wrap:l?"wrap":void 0,xcss:b?[k[b]].concat(i()(Array.isArray(f)?f:[f])):f,testId:h,ref:t},I)})));M.displayName="Inline";var N=M,I=r(2),D=r(68),x=function(e,t){return Object(n.jsx)(e,t)},O=Object(n.css)({display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}),w=Object(n.css)({display:"flex",justifyContent:"center",flexDirection:"column",flexGrow:1,lineHeight:"var(--ds-font-lineHeight-100, 16px)",outline:"none",textAlign:"left","@supports not (overflow-x: clip)":{overflow:"hidden"},"@supports (overflow-x: clip)":{overflowX:"clip"}}),S=Object(n.css)({display:"block",textOverflow:"ellipsis",whiteSpace:"nowrap","@supports not (overflow-x: clip)":{overflow:"hidden"},"@supports (overflow-x: clip)":{overflowX:"clip"}}),A=Object(n.css)({wordBreak:"break-word"}),z=Object(n.css)({color:"var(--ds-text-subtlest, ".concat(I.v,")"),fontSize:"var(--ds-font-size-075, 12px)",marginBlockStart:"var(--ds-space-050, 4px)"}),C=Object(n.css)({color:"var(--ds-text-disabled, ".concat(I.v,")")}),L=Object(n.css)({position:"relative"}),T=Object(n.css)({display:"flex",boxSizing:"border-box",width:"100%",minHeight:40,margin:"var(--ds-space-0, 0px)",alignItems:"center",border:0,fontSize:"var(--ds-font-size-100, 14px)",outline:0,textDecoration:"none",userSelect:"none","::-moz-focus-inner":{border:0},":hover":{textDecoration:"none"}}),U={cozy:Object(n.css)({paddingBlock:"var(--ds-space-100, 8px)",paddingInline:"var(--ds-space-200, 16px)"}),compact:Object(n.css)({minHeight:32,paddingBlock:"var(--ds-space-050, 4px)",paddingInline:"var(--ds-space-150, 12px)"})},E=Object(n.css)({cursor:"pointer"}),F=Object(n.css)({backgroundColor:"var(--ds-background-neutral-subtle, transparent)",color:"currentColor",":visited":{color:"currentColor"},":hover":{backgroundColor:"var(--ds-background-neutral-subtle-hovered, ".concat(I.u,")"),color:"currentColor"},":active":{backgroundColor:"var(--ds-background-neutral-subtle-pressed, ".concat(I.x,")"),boxShadow:"none",color:"currentColor"}}),Q=Object(n.css)({cursor:"not-allowed","&, :hover, :active":{backgroundColor:"var(--ds-background-neutral-subtle, transparent)",color:"var(--ds-text-disabled, ".concat(I.v,")")}}),P=Object(n.css)({"&::before":{width:2,position:"absolute",background:"var(--ds-border-selected, transparent)",content:'""',insetBlockEnd:0,insetBlockStart:0,insetInlineStart:0}}),B=Object(n.css)({"&::before":{width:4,position:"absolute",background:"var(--ds-border-selected, transparent)",borderRadius:"0 ".concat("var(--ds-border-radius, 4px)"," ","var(--ds-border-radius, 4px)"," 0"),content:'""',insetBlockEnd:"var(--ds-space-150, 12px)",insetBlockStart:"var(--ds-space-150, 12px)",insetInlineStart:0}}),G=Object(n.css)({backgroundColor:"var(--ds-background-selected, ".concat(I.u,")"),color:"var(--ds-text-selected, currentColor)",":visited":{color:"var(--ds-text-selected, currentColor)"},":hover":{backgroundColor:"var(--ds-background-selected-hovered, ".concat(I.u,")"),color:"var(--ds-text-selected, currentColor)"},":active":{backgroundColor:"var(--ds-background-selected-pressed, ".concat(I.x,")"),color:"var(--ds-text-selected, currentColor)"}}),R={compact:"space.100",cozy:"space.150"};t.a=function(e){var t=e.children,r=e.title,d=e.description,i=e.iconAfter,l=e.iconBefore,u=e.overrides,b=e.className,g=e.shouldTitleWrap,p=void 0!==g&&g,v=e.shouldDescriptionWrap,f=void 0!==v&&v,h=e.isDisabled,y=void 0!==h&&h,k=e.isSelected,m=void 0!==k&&k;Object(a.b)("@atlaskit/menu","overrides",void 0!==u,"");var j=Object(o.useContext)(D.b),M=Object(o.useContext)(D.a),I=u&&u.Title&&u.Title.render||x,Y=Object(s.a)("platform.design-system-team.unsafe-overrides-killswitch_c8j9m")?void 0:b;return Object(n.jsx)(n.ClassNames,null,(function(e){var o=e.css,a=e.cx;return Object(n.jsx)(c.a,{isInset:!0},t({className:a([o([Object(s.a)("platform.design-system-team.menu-selected-state-change_0see9")&&L,T,U[j],!y&&!m&&F,!y&&m&&[G,Object(s.a)("platform.design-system-team.menu-selected-state-change_0see9")&&["border"===M&&P,"notch"===M&&B]],y?Q:E]),Y]),children:Object(n.jsx)(N,{as:"span",spread:"space-between",alignBlock:"center",space:R[j],grow:"fill"},l&&Object(n.jsx)("span",{"data-item-elem-before":!0,css:O},l),r&&Object(n.jsx)("span",{css:w},I("span",{children:r,className:o(p?A:S),"data-item-title":!0}),d&&Object(n.jsx)("span",{"data-item-description":!0,css:[z,y&&C,f?A:S]},d)),i&&Object(n.jsx)("span",{"data-item-elem-after":!0,css:O},i))}))}))}},86:function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));var o,n=r(0),a=r.n(n),c=r(54),s=r(15),d=r(513),i=r(5),l=r.n(i),u=r(61),b=(o={},l()(o,u.b,"next"),l()(o,u.e,"prev"),l()(o,u.d,"first"),l()(o,u.c,"last"),o),g=function(e,t){for(;t+1<e.length;){if(!e[t+1].hasAttribute("disabled"))return e[t+1];t++}},p=function(e,t){for(;t>0;){if(!e[t-1].hasAttribute("disabled"))return e[t-1];t--}};function v(e,t){return function(r){var o=e.findIndex((function(e){var t;return null===(t=document.activeElement)||void 0===t?void 0:t.isSameNode(e)}));if(!t())switch(b[r.key]){case"next":if(r.preventDefault(),o<e.length-1){var n=g(e,o);null==n||n.focus()}break;case"prev":if(r.preventDefault(),o>0){var a=p(e,o);null==a||a.focus()}break;case"first":r.preventDefault();var c=g(e,-1);null==c||c.focus();break;case"last":r.preventDefault();var s=p(e,e.length);null==s||s.focus();break;default:return}}}var f=Object(n.createContext)({menuItemRefs:[],registerRef:s.a});t.b=function(e){var t=e.children,r=Object(n.useRef)([]),o=Object(n.useCallback)((function(e){e&&!r.current.includes(e)&&r.current.push(e)}),[]),s=Object(d.a)().isLayerDisabled;Object(n.useEffect)((function(){return Object(c.bind)(window,{type:"keydown",listener:v(r.current,s)})}));var i={menuItemRefs:r.current,registerRef:o};return a.a.createElement(f.Provider,{value:i},t)}},90:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"c",(function(){return l})),r.d(t,"b",(function(){return u}));var o="16px",n="24px",a="32px",c="48px",s={small:{width:o,height:o},medium:{width:n,height:n},large:{width:a,height:a},xlarge:{width:c,height:c}},d=r(3),i={overflow:"hidden",pointerEvents:"none",stop:{stopColor:"currentColor"}},l={small:Object(d.css)(s.small),medium:Object(d.css)(s.medium),large:Object(d.css)(s.large),xlarge:Object(d.css)(s.xlarge)},u=function(e){var t=e.width,r=e.height,o=e.size;return t&&r?{width:t,height:r}:o?s[o]:void 0}}}]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-frontend:split_vendors~color-scheme~render-benefits-modal~theme-switcher-loader', location = 'vendors~color-scheme~render-benefits-modal~theme-switcher-loader.js' */
(window.atlassianWebpackJsonpe19a4f58490c3d96a3072d1e47cd0e73=window.atlassianWebpackJsonpe19a4f58490c3d96a3072d1e47cd0e73||[]).push([["vendors~color-scheme~render-benefits-modal~theme-switcher-loader"],{123:function(e,a,o){"use strict";var t=o(73);a.createRoot=t.createRoot,a.hydrateRoot=t.hydrateRoot}}]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-super-batch:split_vendors~react-dom~react-dom-client', location = 'vendors~react-dom~react-dom-client.js' */
(window.atlassianWebpackJsonp72e8e6db7d5e073657900987d0037a3a=window.atlassianWebpackJsonp72e8e6db7d5e073657900987d0037a3a||[]).push([[5],{152:function(e,n,t){"use strict";
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=t(20),l=t(153);function a(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var o=new Set,u={};function i(e,n){s(e,n),s(e+"Capture",n)}function s(e,n){for(u[e]=n,e=0;e<n.length;e++)o.add(n[e])}var c=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),f=Object.prototype.hasOwnProperty,d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},m={};function h(e,n,t,r,l,a,o){this.acceptsBooleans=2===n||3===n||4===n,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=a,this.removeEmptyString=o}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){g[e]=new h(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var n=e[0];g[n]=new h(n,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){g[e]=new h(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){g[e]=new h(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){g[e]=new h(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){g[e]=new h(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){g[e]=new h(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){g[e]=new h(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){g[e]=new h(e,5,!1,e.toLowerCase(),null,!1,!1)}));var v=/[\-:]([a-z])/g;function y(e){return e[1].toUpperCase()}function b(e,n,t,r){var l=g.hasOwnProperty(n)?g[n]:null;(null!==l?0!==l.type:r||!(2<n.length)||"o"!==n[0]&&"O"!==n[0]||"n"!==n[1]&&"N"!==n[1])&&(function(e,n,t,r){if(null==n||function(e,n,t,r){if(null!==t&&0===t.type)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==t?!t.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,n,t,r))return!0;if(r)return!1;if(null!==t)switch(t.type){case 3:return!n;case 4:return!1===n;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}(n,t,l,r)&&(t=null),r||null===l?function(e){return!!f.call(m,e)||!f.call(p,e)&&(d.test(e)?m[e]=!0:(p[e]=!0,!1))}(n)&&(null===t?e.removeAttribute(n):e.setAttribute(n,""+t)):l.mustUseProperty?e[l.propertyName]=null===t?3!==l.type&&"":t:(n=l.attributeName,r=l.attributeNamespace,null===t?e.removeAttribute(n):(t=3===(l=l.type)||4===l&&!0===t?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var n=e.replace(v,y);g[n]=new h(n,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var n=e.replace(v,y);g[n]=new h(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var n=e.replace(v,y);g[n]=new h(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){g[e]=new h(e,1,!1,e.toLowerCase(),null,!1,!1)})),g.xlinkHref=new h("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){g[e]=new h(e,1,!1,e.toLowerCase(),null,!0,!0)}));var k=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for("react.element"),S=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),z=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),L=Symbol.for("react.memo"),M=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var F=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var I=Symbol.iterator;function O(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=I&&e[I]||e["@@iterator"])?e:null}var D,R=Object.assign;function U(e){if(void 0===D)try{throw Error()}catch(e){var n=e.stack.trim().match(/\n( *(at )?)/);D=n&&n[1]||""}return"\n"+D+e}var A=!1;function V(e,n){if(!e||A)return"";A=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}else{try{throw Error()}catch(e){r=e}e()}}catch(n){if(n&&r&&"string"==typeof n.stack){for(var l=n.stack.split("\n"),a=r.stack.split("\n"),o=l.length-1,u=a.length-1;1<=o&&0<=u&&l[o]!==a[u];)u--;for(;1<=o&&0<=u;o--,u--)if(l[o]!==a[u]){if(1!==o||1!==u)do{if(o--,0>--u||l[o]!==a[u]){var i="\n"+l[o].replace(" at new "," at ");return e.displayName&&i.includes("<anonymous>")&&(i=i.replace("<anonymous>",e.displayName)),i}}while(1<=o&&0<=u);break}}}finally{A=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?U(e):""}function B(e){switch(e.tag){case 5:return U(e.type);case 16:return U("Lazy");case 13:return U("Suspense");case 19:return U("SuspenseList");case 0:case 2:case 15:return e=V(e.type,!1);case 11:return e=V(e.type.render,!1);case 1:return e=V(e.type,!0);default:return""}}function W(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=n.render).displayName||e.name||"",n.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return function e(n){if(null==n)return null;if("function"==typeof n)return n.displayName||n.name||null;if("string"==typeof n)return n;switch(n){case x:return"Fragment";case S:return"Portal";case C:return"Profiler";case E:return"StrictMode";case N:return"Suspense";case P:return"SuspenseList"}if("object"==typeof n)switch(n.$$typeof){case z:return(n.displayName||"Context")+".Consumer";case _:return(n._context.displayName||"Context")+".Provider";case T:var t=n.render;return(n=n.displayName)||(n=""!==(n=t.displayName||t.name||"")?"ForwardRef("+n+")":"ForwardRef"),n;case L:return null!==(t=n.displayName||null)?t:e(n.type)||"Memo";case M:t=n._payload,n=n._init;try{return e(n(t))}catch(e){}}return null}(n);case 8:return n===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"==typeof n)return n.displayName||n.name||null;if("string"==typeof n)return n}return null}function H(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function Q(e){var n=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===n||"radio"===n)}function j(e){e._valueTracker||(e._valueTracker=function(e){var n=Q(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&void 0!==t&&"function"==typeof t.get&&"function"==typeof t.set){var l=t.get,a=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(e){r=""+e,a.call(this,e)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}(e))}function $(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Q(e)?e.checked?"true":"false":e.value),(e=r)!==t&&(n.setValue(e),!0)}function K(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(n){return e.body}}function q(e,n){var t=n.checked;return R({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=t?t:e._wrapperState.initialChecked})}function Y(e,n){var t=null==n.defaultValue?"":n.defaultValue,r=null!=n.checked?n.checked:n.defaultChecked;t=H(null!=n.value?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:"checkbox"===n.type||"radio"===n.type?null!=n.checked:null!=n.value}}function X(e,n){null!=(n=n.checked)&&b(e,"checked",n,!1)}function G(e,n){X(e,n);var t=H(n.value),r=n.type;if(null!=t)"number"===r?(0===t&&""===e.value||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");n.hasOwnProperty("value")?Z(e,n.type,t):n.hasOwnProperty("defaultValue")&&Z(e,n.type,H(n.defaultValue)),null==n.checked&&null!=n.defaultChecked&&(e.defaultChecked=!!n.defaultChecked)}function J(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!("submit"!==r&&"reset"!==r||void 0!==n.value&&null!==n.value))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}""!==(t=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==t&&(e.name=t)}function Z(e,n,t){"number"===n&&K(e.ownerDocument)===e||(null==t?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var ee=Array.isArray;function ne(e,n,t,r){if(e=e.options,n){n={};for(var l=0;l<t.length;l++)n["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=n.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&r&&(e[t].defaultSelected=!0)}else{for(t=""+H(t),n=null,l=0;l<e.length;l++){if(e[l].value===t)return e[l].selected=!0,void(r&&(e[l].defaultSelected=!0));null!==n||e[l].disabled||(n=e[l])}null!==n&&(n.selected=!0)}}function te(e,n){if(null!=n.dangerouslySetInnerHTML)throw Error(a(91));return R({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function re(e,n){var t=n.value;if(null==t){if(t=n.children,n=n.defaultValue,null!=t){if(null!=n)throw Error(a(92));if(ee(t)){if(1<t.length)throw Error(a(93));t=t[0]}n=t}null==n&&(n=""),t=n}e._wrapperState={initialValue:H(t)}}function le(e,n){var t=H(n.value),r=H(n.defaultValue);null!=t&&((t=""+t)!==e.value&&(e.value=t),null==n.defaultValue&&e.defaultValue!==t&&(e.defaultValue=t)),null!=r&&(e.defaultValue=""+r)}function ae(e){var n=e.textContent;n===e._wrapperState.initialValue&&""!==n&&null!==n&&(e.value=n)}function oe(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ue(e,n){return null==e||"http://www.w3.org/1999/xhtml"===e?oe(n):"http://www.w3.org/2000/svg"===e&&"foreignObject"===n?"http://www.w3.org/1999/xhtml":e}var ie,se=function(e){return"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(n,t,r,l){MSApp.execUnsafeLocalFunction((function(){return e(n,t)}))}:e}((function(e,n){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=n;else{for((ie=ie||document.createElement("div")).innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=ie.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}}));function ce(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&3===t.nodeType)return void(t.nodeValue=n)}e.textContent=n}var fe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},de=["Webkit","ms","Moz","O"];function pe(e,n,t){return null==n||"boolean"==typeof n||""===n?"":t||"number"!=typeof n||0===n||fe.hasOwnProperty(e)&&fe[e]?(""+n).trim():n+"px"}function me(e,n){for(var t in e=e.style,n)if(n.hasOwnProperty(t)){var r=0===t.indexOf("--"),l=pe(t,n[t],r);"float"===t&&(t="cssFloat"),r?e.setProperty(t,l):e[t]=l}}Object.keys(fe).forEach((function(e){de.forEach((function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),fe[n]=fe[e]}))}));var he=R({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ge(e,n){if(n){if(he[e]&&(null!=n.children||null!=n.dangerouslySetInnerHTML))throw Error(a(137,e));if(null!=n.dangerouslySetInnerHTML){if(null!=n.children)throw Error(a(60));if("object"!=typeof n.dangerouslySetInnerHTML||!("__html"in n.dangerouslySetInnerHTML))throw Error(a(61))}if(null!=n.style&&"object"!=typeof n.style)throw Error(a(62))}}function ve(e,n){if(-1===e.indexOf("-"))return"string"==typeof n.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ye=null;function be(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var ke=null,we=null,Se=null;function xe(e){if(e=dl(e)){if("function"!=typeof ke)throw Error(a(280));var n=e.stateNode;n&&(n=ml(n),ke(e.stateNode,e.type,n))}}function Ee(e){we?Se?Se.push(e):Se=[e]:we=e}function Ce(){if(we){var e=we,n=Se;if(Se=we=null,xe(e),n)for(e=0;e<n.length;e++)xe(n[e])}}function _e(e,n){return e(n)}function ze(){}var Te=!1;function Ne(e,n,t){if(Te)return e(n,t);Te=!0;try{return _e(e,n,t)}finally{Te=!1,(null!==we||null!==Se)&&(ze(),Ce())}}function Pe(e,n){var t=e.stateNode;if(null===t)return null;var r=ml(t);if(null===r)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(t&&"function"!=typeof t)throw Error(a(231,n,typeof t));return t}var Le=!1;if(c)try{var Me={};Object.defineProperty(Me,"passive",{get:function(){Le=!0}}),window.addEventListener("test",Me,Me),window.removeEventListener("test",Me,Me)}catch(e){Le=!1}function Fe(e,n,t,r,l,a,o,u,i){var s=Array.prototype.slice.call(arguments,3);try{n.apply(t,s)}catch(e){this.onError(e)}}var Ie=!1,Oe=null,De=!1,Re=null,Ue={onError:function(e){Ie=!0,Oe=e}};function Ae(e,n,t,r,l,a,o,u,i){Ie=!1,Oe=null,Fe.apply(Ue,arguments)}function Ve(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do{0!=(4098&(n=e).flags)&&(t=n.return),e=n.return}while(e)}return 3===n.tag?t:null}function Be(e){if(13===e.tag){var n=e.memoizedState;if(null===n&&(null!==(e=e.alternate)&&(n=e.memoizedState)),null!==n)return n.dehydrated}return null}function We(e){if(Ve(e)!==e)throw Error(a(188))}function He(e){return null!==(e=function(e){var n=e.alternate;if(!n){if(null===(n=Ve(e)))throw Error(a(188));return n!==e?null:e}for(var t=e,r=n;;){var l=t.return;if(null===l)break;var o=l.alternate;if(null===o){if(null!==(r=l.return)){t=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===t)return We(l),e;if(o===r)return We(l),n;o=o.sibling}throw Error(a(188))}if(t.return!==r.return)t=l,r=o;else{for(var u=!1,i=l.child;i;){if(i===t){u=!0,t=l,r=o;break}if(i===r){u=!0,r=l,t=o;break}i=i.sibling}if(!u){for(i=o.child;i;){if(i===t){u=!0,t=o,r=l;break}if(i===r){u=!0,r=o,t=l;break}i=i.sibling}if(!u)throw Error(a(189))}}if(t.alternate!==r)throw Error(a(190))}if(3!==t.tag)throw Error(a(188));return t.stateNode.current===t?e:n}(e))?function e(n){if(5===n.tag||6===n.tag)return n;for(n=n.child;null!==n;){var t=e(n);if(null!==t)return t;n=n.sibling}return null}(e):null}var Qe=l.unstable_scheduleCallback,je=l.unstable_cancelCallback,$e=l.unstable_shouldYield,Ke=l.unstable_requestPaint,qe=l.unstable_now,Ye=l.unstable_getCurrentPriorityLevel,Xe=l.unstable_ImmediatePriority,Ge=l.unstable_UserBlockingPriority,Je=l.unstable_NormalPriority,Ze=l.unstable_LowPriority,en=l.unstable_IdlePriority,nn=null,tn=null;var rn=Math.clz32?Math.clz32:function(e){return 0===(e>>>=0)?32:31-(ln(e)/an|0)|0},ln=Math.log,an=Math.LN2;var on=64,un=4194304;function sn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function cn(e,n){var t=e.pendingLanes;if(0===t)return 0;var r=0,l=e.suspendedLanes,a=e.pingedLanes,o=268435455&t;if(0!==o){var u=o&~l;0!==u?r=sn(u):0!==(a&=o)&&(r=sn(a))}else 0!==(o=t&~l)?r=sn(o):0!==a&&(r=sn(a));if(0===r)return 0;if(0!==n&&n!==r&&0==(n&l)&&((l=r&-r)>=(a=n&-n)||16===l&&0!=(4194240&a)))return n;if(0!=(4&r)&&(r|=16&t),0!==(n=e.entangledLanes))for(e=e.entanglements,n&=r;0<n;)l=1<<(t=31-rn(n)),r|=e[t],n&=~l;return r}function fn(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:default:return-1}}function dn(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function pn(){var e=on;return 0==(4194240&(on<<=1))&&(on=64),e}function mn(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function hn(e,n,t){e.pendingLanes|=n,536870912!==n&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[n=31-rn(n)]=t}function gn(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-rn(t),l=1<<r;l&n|e[r]&n&&(e[r]|=n),t&=~l}}var vn=0;function yn(e){return 1<(e&=-e)?4<e?0!=(268435455&e)?16:536870912:4:1}var bn,kn,wn,Sn,xn,En=!1,Cn=[],_n=null,zn=null,Tn=null,Nn=new Map,Pn=new Map,Ln=[],Mn="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Fn(e,n){switch(e){case"focusin":case"focusout":_n=null;break;case"dragenter":case"dragleave":zn=null;break;case"mouseover":case"mouseout":Tn=null;break;case"pointerover":case"pointerout":Nn.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pn.delete(n.pointerId)}}function In(e,n,t,r,l,a){return null===e||e.nativeEvent!==a?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:a,targetContainers:[l]},null!==n&&(null!==(n=dl(n))&&kn(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,null!==l&&-1===n.indexOf(l)&&n.push(l),e)}function On(e){var n=fl(e.target);if(null!==n){var t=Ve(n);if(null!==t)if(13===(n=t.tag)){if(null!==(n=Be(t)))return e.blockedOn=n,void xn(e.priority,(function(){wn(t)}))}else if(3===n&&t.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===t.tag?t.stateNode.containerInfo:null)}e.blockedOn=null}function Dn(e){if(null!==e.blockedOn)return!1;for(var n=e.targetContainers;0<n.length;){var t=Kn(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(null!==t)return null!==(n=dl(t))&&kn(n),e.blockedOn=t,!1;var r=new(t=e.nativeEvent).constructor(t.type,t);ye=r,t.target.dispatchEvent(r),ye=null,n.shift()}return!0}function Rn(e,n,t){Dn(e)&&t.delete(n)}function Un(){En=!1,null!==_n&&Dn(_n)&&(_n=null),null!==zn&&Dn(zn)&&(zn=null),null!==Tn&&Dn(Tn)&&(Tn=null),Nn.forEach(Rn),Pn.forEach(Rn)}function An(e,n){e.blockedOn===n&&(e.blockedOn=null,En||(En=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,Un)))}function Vn(e){function n(n){return An(n,e)}if(0<Cn.length){An(Cn[0],e);for(var t=1;t<Cn.length;t++){var r=Cn[t];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==_n&&An(_n,e),null!==zn&&An(zn,e),null!==Tn&&An(Tn,e),Nn.forEach(n),Pn.forEach(n),t=0;t<Ln.length;t++)(r=Ln[t]).blockedOn===e&&(r.blockedOn=null);for(;0<Ln.length&&null===(t=Ln[0]).blockedOn;)On(t),null===t.blockedOn&&Ln.shift()}var Bn=k.ReactCurrentBatchConfig,Wn=!0;function Hn(e,n,t,r){var l=vn,a=Bn.transition;Bn.transition=null;try{vn=1,jn(e,n,t,r)}finally{vn=l,Bn.transition=a}}function Qn(e,n,t,r){var l=vn,a=Bn.transition;Bn.transition=null;try{vn=4,jn(e,n,t,r)}finally{vn=l,Bn.transition=a}}function jn(e,n,t,r){if(Wn){var l=Kn(e,n,t,r);if(null===l)Rr(e,n,r,$n,t),Fn(e,r);else if(function(e,n,t,r,l){switch(n){case"focusin":return _n=In(_n,e,n,t,r,l),!0;case"dragenter":return zn=In(zn,e,n,t,r,l),!0;case"mouseover":return Tn=In(Tn,e,n,t,r,l),!0;case"pointerover":var a=l.pointerId;return Nn.set(a,In(Nn.get(a)||null,e,n,t,r,l)),!0;case"gotpointercapture":return a=l.pointerId,Pn.set(a,In(Pn.get(a)||null,e,n,t,r,l)),!0}return!1}(l,e,n,t,r))r.stopPropagation();else if(Fn(e,r),4&n&&-1<Mn.indexOf(e)){for(;null!==l;){var a=dl(l);if(null!==a&&bn(a),null===(a=Kn(e,n,t,r))&&Rr(e,n,r,$n,t),a===l)break;l=a}null!==l&&r.stopPropagation()}else Rr(e,n,r,null,t)}}var $n=null;function Kn(e,n,t,r){if($n=null,null!==(e=fl(e=be(r))))if(null===(n=Ve(e)))e=null;else if(13===(t=n.tag)){if(null!==(e=Be(n)))return e;e=null}else if(3===t){if(n.stateNode.current.memoizedState.isDehydrated)return 3===n.tag?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return $n=e,null}function qn(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ye()){case Xe:return 1;case Ge:return 4;case Je:case Ze:return 16;case en:return 536870912;default:return 16}default:return 16}}var Yn=null,Xn=null,Gn=null;function Jn(){if(Gn)return Gn;var e,n,t=Xn,r=t.length,l="value"in Yn?Yn.value:Yn.textContent,a=l.length;for(e=0;e<r&&t[e]===l[e];e++);var o=r-e;for(n=1;n<=o&&t[r-n]===l[a-n];n++);return Gn=l.slice(e,1<n?1-n:void 0)}function Zn(e){var n=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===n&&(e=13):e=n,10===e&&(e=13),32<=e||13===e?e:0}function et(){return!0}function nt(){return!1}function tt(e){function n(n,t,r,l,a){for(var o in this._reactName=n,this._targetInst=r,this.type=t,this.nativeEvent=l,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(l):l[o]);return this.isDefaultPrevented=(null!=l.defaultPrevented?l.defaultPrevented:!1===l.returnValue)?et:nt,this.isPropagationStopped=nt,this}return R(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=et)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=et)},persist:function(){},isPersistent:et}),n}var rt,lt,at,ot={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ut=tt(ot),it=R({},ot,{view:0,detail:0}),st=tt(it),ct=R({},it,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wt,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==at&&(at&&"mousemove"===e.type?(rt=e.screenX-at.screenX,lt=e.screenY-at.screenY):lt=rt=0,at=e),rt)},movementY:function(e){return"movementY"in e?e.movementY:lt}}),ft=tt(ct),dt=tt(R({},ct,{dataTransfer:0})),pt=tt(R({},it,{relatedTarget:0})),mt=tt(R({},ot,{animationName:0,elapsedTime:0,pseudoElement:0})),ht=tt(R({},ot,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),gt=tt(R({},ot,{data:0})),vt={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bt={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kt(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):!!(e=bt[e])&&!!n[e]}function wt(){return kt}var St=tt(R({},it,{key:function(e){if(e.key){var n=vt[e.key]||e.key;if("Unidentified"!==n)return n}return"keypress"===e.type?13===(e=Zn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?yt[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wt,charCode:function(e){return"keypress"===e.type?Zn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?Zn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),xt=tt(R({},ct,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Et=tt(R({},it,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wt})),Ct=tt(R({},ot,{propertyName:0,elapsedTime:0,pseudoElement:0})),_t=tt(R({},ct,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),zt=[9,13,27,32],Tt=c&&"CompositionEvent"in window,Nt=null;c&&"documentMode"in document&&(Nt=document.documentMode);var Pt=c&&"TextEvent"in window&&!Nt,Lt=c&&(!Tt||Nt&&8<Nt&&11>=Nt),Mt=String.fromCharCode(32),Ft=!1;function It(e,n){switch(e){case"keyup":return-1!==zt.indexOf(n.keyCode);case"keydown":return 229!==n.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ot(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var Dt=!1;var Rt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ut(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===n?!!Rt[e.type]:"textarea"===n}function At(e,n,t,r){Ee(r),0<(n=Ar(n,"onChange")).length&&(t=new ut("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Vt=null,Bt=null;function Wt(e){Lr(e,0)}function Ht(e){if($(pl(e)))return e}function Qt(e,n){if("change"===e)return n}var jt=!1;if(c){var $t;if(c){var Kt="oninput"in document;if(!Kt){var qt=document.createElement("div");qt.setAttribute("oninput","return;"),Kt="function"==typeof qt.oninput}$t=Kt}else $t=!1;jt=$t&&(!document.documentMode||9<document.documentMode)}function Yt(){Vt&&(Vt.detachEvent("onpropertychange",Xt),Bt=Vt=null)}function Xt(e){if("value"===e.propertyName&&Ht(Bt)){var n=[];At(n,Bt,e,be(e)),Ne(Wt,n)}}function Gt(e,n,t){"focusin"===e?(Yt(),Bt=t,(Vt=n).attachEvent("onpropertychange",Xt)):"focusout"===e&&Yt()}function Jt(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Ht(Bt)}function Zt(e,n){if("click"===e)return Ht(n)}function er(e,n){if("input"===e||"change"===e)return Ht(n)}var nr="function"==typeof Object.is?Object.is:function(e,n){return e===n&&(0!==e||1/e==1/n)||e!=e&&n!=n};function tr(e,n){if(nr(e,n))return!0;if("object"!=typeof e||null===e||"object"!=typeof n||null===n)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var l=t[r];if(!f.call(n,l)||!nr(e[l],n[l]))return!1}return!0}function rr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function lr(e,n){var t,r=rr(e);for(e=0;r;){if(3===r.nodeType){if(t=e+r.textContent.length,e<=n&&t>=n)return{node:r,offset:n-e};e=t}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=rr(r)}}function ar(){for(var e=window,n=K();n instanceof e.HTMLIFrameElement;){try{var t="string"==typeof n.contentWindow.location.href}catch(e){t=!1}if(!t)break;n=K((e=n.contentWindow).document)}return n}function or(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&("input"===n&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===n||"true"===e.contentEditable)}function ur(e){var n=ar(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&function e(n,t){return!(!n||!t)&&(n===t||(!n||3!==n.nodeType)&&(t&&3===t.nodeType?e(n,t.parentNode):"contains"in n?n.contains(t):!!n.compareDocumentPosition&&!!(16&n.compareDocumentPosition(t))))}(t.ownerDocument.documentElement,t)){if(null!==r&&or(t))if(n=r.start,void 0===(e=r.end)&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if((e=(n=t.ownerDocument||document)&&n.defaultView||window).getSelection){e=e.getSelection();var l=t.textContent.length,a=Math.min(r.start,l);r=void 0===r.end?a:Math.min(r.end,l),!e.extend&&a>r&&(l=r,r=a,a=l),l=lr(t,a);var o=lr(t,r);l&&o&&(1!==e.rangeCount||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&((n=n.createRange()).setStart(l.node,l.offset),e.removeAllRanges(),a>r?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}for(n=[],e=t;e=e.parentNode;)1===e.nodeType&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"==typeof t.focus&&t.focus(),t=0;t<n.length;t++)(e=n[t]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ir=c&&"documentMode"in document&&11>=document.documentMode,sr=null,cr=null,fr=null,dr=!1;function pr(e,n,t){var r=t.window===t?t.document:9===t.nodeType?t:t.ownerDocument;dr||null==sr||sr!==K(r)||("selectionStart"in(r=sr)&&or(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},fr&&tr(fr,r)||(fr=r,0<(r=Ar(cr,"onSelect")).length&&(n=new ut("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=sr)))}function mr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var hr={animationend:mr("Animation","AnimationEnd"),animationiteration:mr("Animation","AnimationIteration"),animationstart:mr("Animation","AnimationStart"),transitionend:mr("Transition","TransitionEnd")},gr={},vr={};function yr(e){if(gr[e])return gr[e];if(!hr[e])return e;var n,t=hr[e];for(n in t)if(t.hasOwnProperty(n)&&n in vr)return gr[e]=t[n];return e}c&&(vr=document.createElement("div").style,"AnimationEvent"in window||(delete hr.animationend.animation,delete hr.animationiteration.animation,delete hr.animationstart.animation),"TransitionEvent"in window||delete hr.transitionend.transition);var br=yr("animationend"),kr=yr("animationiteration"),wr=yr("animationstart"),Sr=yr("transitionend"),xr=new Map,Er="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Cr(e,n){xr.set(e,n),i(n,[e])}for(var _r=0;_r<Er.length;_r++){var zr=Er[_r];Cr(zr.toLowerCase(),"on"+(zr[0].toUpperCase()+zr.slice(1)))}Cr(br,"onAnimationEnd"),Cr(kr,"onAnimationIteration"),Cr(wr,"onAnimationStart"),Cr("dblclick","onDoubleClick"),Cr("focusin","onFocus"),Cr("focusout","onBlur"),Cr(Sr,"onTransitionEnd"),s("onMouseEnter",["mouseout","mouseover"]),s("onMouseLeave",["mouseout","mouseover"]),s("onPointerEnter",["pointerout","pointerover"]),s("onPointerLeave",["pointerout","pointerover"]),i("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),i("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),i("onBeforeInput",["compositionend","keypress","textInput","paste"]),i("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),i("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),i("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Tr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Nr=new Set("cancel close invalid load scroll toggle".split(" ").concat(Tr));function Pr(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,function(e,n,t,r,l,o,u,i,s){if(Ae.apply(this,arguments),Ie){if(!Ie)throw Error(a(198));var c=Oe;Ie=!1,Oe=null,De||(De=!0,Re=c)}}(r,n,void 0,e),e.currentTarget=null}function Lr(e,n){n=0!=(4&n);for(var t=0;t<e.length;t++){var r=e[t],l=r.event;r=r.listeners;e:{var a=void 0;if(n)for(var o=r.length-1;0<=o;o--){var u=r[o],i=u.instance,s=u.currentTarget;if(u=u.listener,i!==a&&l.isPropagationStopped())break e;Pr(l,u,s),a=i}else for(o=0;o<r.length;o++){if(i=(u=r[o]).instance,s=u.currentTarget,u=u.listener,i!==a&&l.isPropagationStopped())break e;Pr(l,u,s),a=i}}}if(De)throw e=Re,De=!1,Re=null,e}function Mr(e,n){var t=n[il];void 0===t&&(t=n[il]=new Set);var r=e+"__bubble";t.has(r)||(Dr(n,e,2,!1),t.add(r))}function Fr(e,n,t){var r=0;n&&(r|=4),Dr(t,e,r,n)}var Ir="_reactListening"+Math.random().toString(36).slice(2);function Or(e){if(!e[Ir]){e[Ir]=!0,o.forEach((function(n){"selectionchange"!==n&&(Nr.has(n)||Fr(n,!1,e),Fr(n,!0,e))}));var n=9===e.nodeType?e:e.ownerDocument;null===n||n[Ir]||(n[Ir]=!0,Fr("selectionchange",!1,n))}}function Dr(e,n,t,r){switch(qn(n)){case 1:var l=Hn;break;case 4:l=Qn;break;default:l=jn}t=l.bind(null,n,t,e),l=void 0,!Le||"touchstart"!==n&&"touchmove"!==n&&"wheel"!==n||(l=!0),r?void 0!==l?e.addEventListener(n,t,{capture:!0,passive:l}):e.addEventListener(n,t,!0):void 0!==l?e.addEventListener(n,t,{passive:l}):e.addEventListener(n,t,!1)}function Rr(e,n,t,r,l){var a=r;if(0==(1&n)&&0==(2&n)&&null!==r)e:for(;;){if(null===r)return;var o=r.tag;if(3===o||4===o){var u=r.stateNode.containerInfo;if(u===l||8===u.nodeType&&u.parentNode===l)break;if(4===o)for(o=r.return;null!==o;){var i=o.tag;if((3===i||4===i)&&((i=o.stateNode.containerInfo)===l||8===i.nodeType&&i.parentNode===l))return;o=o.return}for(;null!==u;){if(null===(o=fl(u)))return;if(5===(i=o.tag)||6===i){r=a=o;continue e}u=u.parentNode}}r=r.return}Ne((function(){var r=a,l=be(t),o=[];e:{var u=xr.get(e);if(void 0!==u){var i=ut,s=e;switch(e){case"keypress":if(0===Zn(t))break e;case"keydown":case"keyup":i=St;break;case"focusin":s="focus",i=pt;break;case"focusout":s="blur",i=pt;break;case"beforeblur":case"afterblur":i=pt;break;case"click":if(2===t.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":i=ft;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":i=dt;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":i=Et;break;case br:case kr:case wr:i=mt;break;case Sr:i=Ct;break;case"scroll":i=st;break;case"wheel":i=_t;break;case"copy":case"cut":case"paste":i=ht;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":i=xt}var c=0!=(4&n),f=!c&&"scroll"===e,d=c?null!==u?u+"Capture":null:u;c=[];for(var p,m=r;null!==m;){var h=(p=m).stateNode;if(5===p.tag&&null!==h&&(p=h,null!==d&&(null!=(h=Pe(m,d))&&c.push(Ur(m,h,p)))),f)break;m=m.return}0<c.length&&(u=new i(u,s,null,t,l),o.push({event:u,listeners:c}))}}if(0==(7&n)){if(i="mouseout"===e||"pointerout"===e,(!(u="mouseover"===e||"pointerover"===e)||t===ye||!(s=t.relatedTarget||t.fromElement)||!fl(s)&&!s[ul])&&(i||u)&&(u=l.window===l?l:(u=l.ownerDocument)?u.defaultView||u.parentWindow:window,i?(i=r,null!==(s=(s=t.relatedTarget||t.toElement)?fl(s):null)&&(s!==(f=Ve(s))||5!==s.tag&&6!==s.tag)&&(s=null)):(i=null,s=r),i!==s)){if(c=ft,h="onMouseLeave",d="onMouseEnter",m="mouse","pointerout"!==e&&"pointerover"!==e||(c=xt,h="onPointerLeave",d="onPointerEnter",m="pointer"),f=null==i?u:pl(i),p=null==s?u:pl(s),(u=new c(h,m+"leave",i,t,l)).target=f,u.relatedTarget=p,h=null,fl(l)===r&&((c=new c(d,m+"enter",s,t,l)).target=p,c.relatedTarget=f,h=c),f=h,i&&s)e:{for(d=s,m=0,p=c=i;p;p=Vr(p))m++;for(p=0,h=d;h;h=Vr(h))p++;for(;0<m-p;)c=Vr(c),m--;for(;0<p-m;)d=Vr(d),p--;for(;m--;){if(c===d||null!==d&&c===d.alternate)break e;c=Vr(c),d=Vr(d)}c=null}else c=null;null!==i&&Br(o,u,i,c,!1),null!==s&&null!==f&&Br(o,f,s,c,!0)}if("select"===(i=(u=r?pl(r):window).nodeName&&u.nodeName.toLowerCase())||"input"===i&&"file"===u.type)var g=Qt;else if(Ut(u))if(jt)g=er;else{g=Jt;var v=Gt}else(i=u.nodeName)&&"input"===i.toLowerCase()&&("checkbox"===u.type||"radio"===u.type)&&(g=Zt);switch(g&&(g=g(e,r))?At(o,g,t,l):(v&&v(e,u,r),"focusout"===e&&(v=u._wrapperState)&&v.controlled&&"number"===u.type&&Z(u,"number",u.value)),v=r?pl(r):window,e){case"focusin":(Ut(v)||"true"===v.contentEditable)&&(sr=v,cr=r,fr=null);break;case"focusout":fr=cr=sr=null;break;case"mousedown":dr=!0;break;case"contextmenu":case"mouseup":case"dragend":dr=!1,pr(o,t,l);break;case"selectionchange":if(ir)break;case"keydown":case"keyup":pr(o,t,l)}var y;if(Tt)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Dt?It(e,t)&&(b="onCompositionEnd"):"keydown"===e&&229===t.keyCode&&(b="onCompositionStart");b&&(Lt&&"ko"!==t.locale&&(Dt||"onCompositionStart"!==b?"onCompositionEnd"===b&&Dt&&(y=Jn()):(Xn="value"in(Yn=l)?Yn.value:Yn.textContent,Dt=!0)),0<(v=Ar(r,b)).length&&(b=new gt(b,e,null,t,l),o.push({event:b,listeners:v}),y?b.data=y:null!==(y=Ot(t))&&(b.data=y))),(y=Pt?function(e,n){switch(e){case"compositionend":return Ot(n);case"keypress":return 32!==n.which?null:(Ft=!0,Mt);case"textInput":return(e=n.data)===Mt&&Ft?null:e;default:return null}}(e,t):function(e,n){if(Dt)return"compositionend"===e||!Tt&&It(e,n)?(e=Jn(),Gn=Xn=Yn=null,Dt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Lt&&"ko"!==n.locale?null:n.data;default:return null}}(e,t))&&(0<(r=Ar(r,"onBeforeInput")).length&&(l=new gt("onBeforeInput","beforeinput",null,t,l),o.push({event:l,listeners:r}),l.data=y))}Lr(o,n)}))}function Ur(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Ar(e,n){for(var t=n+"Capture",r=[];null!==e;){var l=e,a=l.stateNode;5===l.tag&&null!==a&&(l=a,null!=(a=Pe(e,t))&&r.unshift(Ur(e,a,l)),null!=(a=Pe(e,n))&&r.push(Ur(e,a,l))),e=e.return}return r}function Vr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Br(e,n,t,r,l){for(var a=n._reactName,o=[];null!==t&&t!==r;){var u=t,i=u.alternate,s=u.stateNode;if(null!==i&&i===r)break;5===u.tag&&null!==s&&(u=s,l?null!=(i=Pe(t,a))&&o.unshift(Ur(t,i,u)):l||null!=(i=Pe(t,a))&&o.push(Ur(t,i,u))),t=t.return}0!==o.length&&e.push({event:n,listeners:o})}var Wr=/\r\n?/g,Hr=/\u0000|\uFFFD/g;function Qr(e){return("string"==typeof e?e:""+e).replace(Wr,"\n").replace(Hr,"")}function jr(e,n,t){if(n=Qr(n),Qr(e)!==n&&t)throw Error(a(425))}function $r(){}var Kr=null,qr=null;function Yr(e,n){return"textarea"===e||"noscript"===e||"string"==typeof n.children||"number"==typeof n.children||"object"==typeof n.dangerouslySetInnerHTML&&null!==n.dangerouslySetInnerHTML&&null!=n.dangerouslySetInnerHTML.__html}var Xr="function"==typeof setTimeout?setTimeout:void 0,Gr="function"==typeof clearTimeout?clearTimeout:void 0,Jr="function"==typeof Promise?Promise:void 0,Zr="function"==typeof queueMicrotask?queueMicrotask:void 0!==Jr?function(e){return Jr.resolve(null).then(e).catch(el)}:Xr;function el(e){setTimeout((function(){throw e}))}function nl(e,n){var t=n,r=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&8===l.nodeType)if("/$"===(t=l.data)){if(0===r)return e.removeChild(l),void Vn(n);r--}else"$"!==t&&"$?"!==t&&"$!"!==t||r++;t=l}while(t);Vn(n)}function tl(e){for(;null!=e;e=e.nextSibling){var n=e.nodeType;if(1===n||3===n)break;if(8===n){if("$"===(n=e.data)||"$!"===n||"$?"===n)break;if("/$"===n)return null}}return e}function rl(e){e=e.previousSibling;for(var n=0;e;){if(8===e.nodeType){var t=e.data;if("$"===t||"$!"===t||"$?"===t){if(0===n)return e;n--}else"/$"===t&&n++}e=e.previousSibling}return null}var ll=Math.random().toString(36).slice(2),al="__reactFiber$"+ll,ol="__reactProps$"+ll,ul="__reactContainer$"+ll,il="__reactEvents$"+ll,sl="__reactListeners$"+ll,cl="__reactHandles$"+ll;function fl(e){var n=e[al];if(n)return n;for(var t=e.parentNode;t;){if(n=t[ul]||t[al]){if(t=n.alternate,null!==n.child||null!==t&&null!==t.child)for(e=rl(e);null!==e;){if(t=e[al])return t;e=rl(e)}return n}t=(e=t).parentNode}return null}function dl(e){return!(e=e[al]||e[ul])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function pl(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(a(33))}function ml(e){return e[ol]||null}var hl=[],gl=-1;function vl(e){return{current:e}}function yl(e){0>gl||(e.current=hl[gl],hl[gl]=null,gl--)}function bl(e,n){gl++,hl[gl]=e.current,e.current=n}var kl={},wl=vl(kl),Sl=vl(!1),xl=kl;function El(e,n){var t=e.type.contextTypes;if(!t)return kl;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var l,a={};for(l in t)a[l]=n[l];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=a),a}function Cl(e){return null!=(e=e.childContextTypes)}function _l(){yl(Sl),yl(wl)}function zl(e,n,t){if(wl.current!==kl)throw Error(a(168));bl(wl,n),bl(Sl,t)}function Tl(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,"function"!=typeof r.getChildContext)return t;for(var l in r=r.getChildContext())if(!(l in n))throw Error(a(108,W(e)||"Unknown",l));return R({},t,r)}function Nl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||kl,xl=wl.current,bl(wl,e),bl(Sl,Sl.current),!0}function Pl(e,n,t){var r=e.stateNode;if(!r)throw Error(a(169));t?(e=Tl(e,n,xl),r.__reactInternalMemoizedMergedChildContext=e,yl(Sl),yl(wl),bl(wl,e)):yl(Sl),bl(Sl,t)}var Ll=null,Ml=!1,Fl=!1;function Il(e){null===Ll?Ll=[e]:Ll.push(e)}function Ol(){if(!Fl&&null!==Ll){Fl=!0;var e=0,n=vn;try{var t=Ll;for(vn=1;e<t.length;e++){var r=t[e];do{r=r(!0)}while(null!==r)}Ll=null,Ml=!1}catch(n){throw null!==Ll&&(Ll=Ll.slice(e+1)),Qe(Xe,Ol),n}finally{vn=n,Fl=!1}}return null}var Dl=k.ReactCurrentBatchConfig;function Rl(e,n){if(e&&e.defaultProps){for(var t in n=R({},n),e=e.defaultProps)void 0===n[t]&&(n[t]=e[t]);return n}return n}var Ul=vl(null),Al=null,Vl=null,Bl=null;function Wl(){Bl=Vl=Al=null}function Hl(e){var n=Ul.current;yl(Ul),e._currentValue=n}function Ql(e,n,t){for(;null!==e;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,null!==r&&(r.childLanes|=n)):null!==r&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function jl(e,n){Al=e,Bl=Vl=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!=(e.lanes&n)&&(mu=!0),e.firstContext=null)}function $l(e){var n=e._currentValue;if(Bl!==e)if(e={context:e,memoizedValue:n,next:null},null===Vl){if(null===Al)throw Error(a(308));Vl=e,Al.dependencies={lanes:0,firstContext:e}}else Vl=Vl.next=e;return n}var Kl=null,ql=!1;function Yl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Xl(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Gl(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Jl(e,n){var t=e.updateQueue;null!==t&&(t=t.shared,ji(e)?(null===(e=t.interleaved)?(n.next=n,null===Kl?Kl=[t]:Kl.push(t)):(n.next=e.next,e.next=n),t.interleaved=n):(null===(e=t.pending)?n.next=n:(n.next=e.next,e.next=n),t.pending=n))}function Zl(e,n,t){if(null!==(n=n.updateQueue)&&(n=n.shared,0!=(4194240&t))){var r=n.lanes;t|=r&=e.pendingLanes,n.lanes=t,gn(e,t)}}function ea(e,n){var t=e.updateQueue,r=e.alternate;if(null!==r&&t===(r=r.updateQueue)){var l=null,a=null;if(null!==(t=t.firstBaseUpdate)){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};null===a?l=a=o:a=a.next=o,t=t.next}while(null!==t);null===a?l=a=n:a=a.next=n}else l=a=n;return t={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:a,shared:r.shared,effects:r.effects},void(e.updateQueue=t)}null===(e=t.lastBaseUpdate)?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function na(e,n,t,r){var l=e.updateQueue;ql=!1;var a=l.firstBaseUpdate,o=l.lastBaseUpdate,u=l.shared.pending;if(null!==u){l.shared.pending=null;var i=u,s=i.next;i.next=null,null===o?a=s:o.next=s,o=i;var c=e.alternate;null!==c&&((u=(c=c.updateQueue).lastBaseUpdate)!==o&&(null===u?c.firstBaseUpdate=s:u.next=s,c.lastBaseUpdate=i))}if(null!==a){var f=l.baseState;for(o=0,c=s=i=null,u=a;;){var d=u.lane,p=u.eventTime;if((r&d)===d){null!==c&&(c=c.next={eventTime:p,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var m=e,h=u;switch(d=n,p=t,h.tag){case 1:if("function"==typeof(m=h.payload)){f=m.call(p,f,d);break e}f=m;break e;case 3:m.flags=-65537&m.flags|128;case 0:if(null==(d="function"==typeof(m=h.payload)?m.call(p,f,d):m))break e;f=R({},f,d);break e;case 2:ql=!0}}null!==u.callback&&0!==u.lane&&(e.flags|=64,null===(d=l.effects)?l.effects=[u]:d.push(u))}else p={eventTime:p,lane:d,tag:u.tag,payload:u.payload,callback:u.callback,next:null},null===c?(s=c=p,i=f):c=c.next=p,o|=d;if(null===(u=u.next)){if(null===(u=l.shared.pending))break;u=(d=u).next,d.next=null,l.lastBaseUpdate=d,l.shared.pending=null}}if(null===c&&(i=f),l.baseState=i,l.firstBaseUpdate=s,l.lastBaseUpdate=c,null!==(n=l.shared.interleaved)){l=n;do{o|=l.lane,l=l.next}while(l!==n)}else null===a&&(l.shared.lanes=0);xi|=o,e.lanes=o,e.memoizedState=f}}function ta(e,n,t){if(e=n.effects,n.effects=null,null!==e)for(n=0;n<e.length;n++){var r=e[n],l=r.callback;if(null!==l){if(r.callback=null,r=t,"function"!=typeof l)throw Error(a(191,l));l.call(r)}}}var ra=(new r.Component).refs;function la(e,n,t,r){t=null==(t=t(r,n=e.memoizedState))?n:R({},n,t),e.memoizedState=t,0===e.lanes&&(e.updateQueue.baseState=t)}var aa={isMounted:function(e){return!!(e=e._reactInternals)&&Ve(e)===e},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=Bi(),l=Wi(e),a=Gl(r,l);a.payload=n,null!=t&&(a.callback=t),Jl(e,a),null!==(n=Hi(e,l,r))&&Zl(n,e,l)},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=Bi(),l=Wi(e),a=Gl(r,l);a.tag=1,a.payload=n,null!=t&&(a.callback=t),Jl(e,a),null!==(n=Hi(e,l,r))&&Zl(n,e,l)},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Bi(),r=Wi(e),l=Gl(t,r);l.tag=2,null!=n&&(l.callback=n),Jl(e,l),null!==(n=Hi(e,r,t))&&Zl(n,e,r)}};function oa(e,n,t,r,l,a,o){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,a,o):!n.prototype||!n.prototype.isPureReactComponent||(!tr(t,r)||!tr(l,a))}function ua(e,n,t){var r=!1,l=kl,a=n.contextType;return"object"==typeof a&&null!==a?a=$l(a):(l=Cl(n)?xl:wl.current,a=(r=null!=(r=n.contextTypes))?El(e,l):kl),n=new n(t,a),e.memoizedState=null!==n.state&&void 0!==n.state?n.state:null,n.updater=aa,e.stateNode=n,n._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=a),n}function ia(e,n,t,r){e=n.state,"function"==typeof n.componentWillReceiveProps&&n.componentWillReceiveProps(t,r),"function"==typeof n.UNSAFE_componentWillReceiveProps&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&aa.enqueueReplaceState(n,n.state,null)}function sa(e,n,t,r){var l=e.stateNode;l.props=t,l.state=e.memoizedState,l.refs=ra,Yl(e);var a=n.contextType;"object"==typeof a&&null!==a?l.context=$l(a):(a=Cl(n)?xl:wl.current,l.context=El(e,a)),l.state=e.memoizedState,"function"==typeof(a=n.getDerivedStateFromProps)&&(la(e,n,a,t),l.state=e.memoizedState),"function"==typeof n.getDerivedStateFromProps||"function"==typeof l.getSnapshotBeforeUpdate||"function"!=typeof l.UNSAFE_componentWillMount&&"function"!=typeof l.componentWillMount||(n=l.state,"function"==typeof l.componentWillMount&&l.componentWillMount(),"function"==typeof l.UNSAFE_componentWillMount&&l.UNSAFE_componentWillMount(),n!==l.state&&aa.enqueueReplaceState(l,l.state,null),na(e,t,l,r),l.state=e.memoizedState),"function"==typeof l.componentDidMount&&(e.flags|=4194308)}var ca=[],fa=0,da=null,pa=0,ma=[],ha=0,ga=null,va=1,ya="";function ba(e,n){ca[fa++]=pa,ca[fa++]=da,da=e,pa=n}function ka(e,n,t){ma[ha++]=va,ma[ha++]=ya,ma[ha++]=ga,ga=e;var r=va;e=ya;var l=32-rn(r)-1;r&=~(1<<l),t+=1;var a=32-rn(n)+l;if(30<a){var o=l-l%5;a=(r&(1<<o)-1).toString(32),r>>=o,l-=o,va=1<<32-rn(n)+l|t<<l|r,ya=a+e}else va=1<<a|t<<l|r,ya=e}function wa(e){null!==e.return&&(ba(e,1),ka(e,1,0))}function Sa(e){for(;e===da;)da=ca[--fa],ca[fa]=null,pa=ca[--fa],ca[fa]=null;for(;e===ga;)ga=ma[--ha],ma[ha]=null,ya=ma[--ha],ma[ha]=null,va=ma[--ha],ma[ha]=null}var xa=null,Ea=null,Ca=!1,_a=null;function za(e,n){var t=ks(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,null===(n=e.deletions)?(e.deletions=[t],e.flags|=16):n.push(t)}function Ta(e,n){switch(e.tag){case 5:var t=e.type;return null!==(n=1!==n.nodeType||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n)&&(e.stateNode=n,xa=e,Ea=tl(n.firstChild),!0);case 6:return null!==(n=""===e.pendingProps||3!==n.nodeType?null:n)&&(e.stateNode=n,xa=e,Ea=null,!0);case 13:return null!==(n=8!==n.nodeType?null:n)&&(t=null!==ga?{id:va,overflow:ya}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},(t=ks(18,null,null,0)).stateNode=n,t.return=e,e.child=t,xa=e,Ea=null,!0);default:return!1}}function Na(e){return 0!=(1&e.mode)&&0==(128&e.flags)}function Pa(e){if(Ca){var n=Ea;if(n){var t=n;if(!Ta(e,n)){if(Na(e))throw Error(a(418));n=tl(t.nextSibling);var r=xa;n&&Ta(e,n)?za(r,t):(e.flags=-4097&e.flags|2,Ca=!1,xa=e)}}else{if(Na(e))throw Error(a(418));e.flags=-4097&e.flags|2,Ca=!1,xa=e}}}function La(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;xa=e}function Ma(e){if(e!==xa)return!1;if(!Ca)return La(e),Ca=!0,!1;var n;if((n=3!==e.tag)&&!(n=5!==e.tag)&&(n="head"!==(n=e.type)&&"body"!==n&&!Yr(e.type,e.memoizedProps)),n&&(n=Ea)){if(Na(e)){for(e=Ea;e;)e=tl(e.nextSibling);throw Error(a(418))}for(;n;)za(e,n),n=tl(n.nextSibling)}if(La(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(a(317));e:{for(e=e.nextSibling,n=0;e;){if(8===e.nodeType){var t=e.data;if("/$"===t){if(0===n){Ea=tl(e.nextSibling);break e}n--}else"$"!==t&&"$!"!==t&&"$?"!==t||n++}e=e.nextSibling}Ea=null}}else Ea=xa?tl(e.stateNode.nextSibling):null;return!0}function Fa(){Ea=xa=null,Ca=!1}function Ia(e){null===_a?_a=[e]:_a.push(e)}function Oa(e,n,t){if(null!==(e=t.ref)&&"function"!=typeof e&&"object"!=typeof e){if(t._owner){if(t=t._owner){if(1!==t.tag)throw Error(a(309));var r=t.stateNode}if(!r)throw Error(a(147,e));var l=r,o=""+e;return null!==n&&null!==n.ref&&"function"==typeof n.ref&&n.ref._stringRef===o?n.ref:((n=function(e){var n=l.refs;n===ra&&(n=l.refs={}),null===e?delete n[o]:n[o]=e})._stringRef=o,n)}if("string"!=typeof e)throw Error(a(284));if(!t._owner)throw Error(a(290,e))}return e}function Da(e,n){throw e=Object.prototype.toString.call(n),Error(a(31,"[object Object]"===e?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Ra(e){return(0,e._init)(e._payload)}function Ua(e){function n(n,t){if(e){var r=n.deletions;null===r?(n.deletions=[t],n.flags|=16):r.push(t)}}function t(t,r){if(!e)return null;for(;null!==r;)n(t,r),r=r.sibling;return null}function r(e,n){for(e=new Map;null!==n;)null!==n.key?e.set(n.key,n):e.set(n.index,n),n=n.sibling;return e}function l(e,n){return(e=Ss(e,n)).index=0,e.sibling=null,e}function o(n,t,r){return n.index=r,e?null!==(r=n.alternate)?(r=r.index)<t?(n.flags|=2,t):r:(n.flags|=2,t):(n.flags|=1048576,t)}function u(n){return e&&null===n.alternate&&(n.flags|=2),n}function i(e,n,t,r){return null===n||6!==n.tag?((n=_s(t,e.mode,r)).return=e,n):((n=l(n,t)).return=e,n)}function s(e,n,t,r){var a=t.type;return a===x?f(e,n,t.props.children,r,t.key):null!==n&&(n.elementType===a||"object"==typeof a&&null!==a&&a.$$typeof===M&&Ra(a)===n.type)?((r=l(n,t.props)).ref=Oa(e,n,t),r.return=e,r):((r=xs(t.type,t.key,t.props,null,e.mode,r)).ref=Oa(e,n,t),r.return=e,r)}function c(e,n,t,r){return null===n||4!==n.tag||n.stateNode.containerInfo!==t.containerInfo||n.stateNode.implementation!==t.implementation?((n=zs(t,e.mode,r)).return=e,n):((n=l(n,t.children||[])).return=e,n)}function f(e,n,t,r,a){return null===n||7!==n.tag?((n=Es(t,e.mode,r,a)).return=e,n):((n=l(n,t)).return=e,n)}function d(e,n,t){if("string"==typeof n&&""!==n||"number"==typeof n)return(n=_s(""+n,e.mode,t)).return=e,n;if("object"==typeof n&&null!==n){switch(n.$$typeof){case w:return(t=xs(n.type,n.key,n.props,null,e.mode,t)).ref=Oa(e,null,n),t.return=e,t;case S:return(n=zs(n,e.mode,t)).return=e,n;case M:return d(e,(0,n._init)(n._payload),t)}if(ee(n)||O(n))return(n=Es(n,e.mode,t,null)).return=e,n;Da(e,n)}return null}function p(e,n,t,r){var l=null!==n?n.key:null;if("string"==typeof t&&""!==t||"number"==typeof t)return null!==l?null:i(e,n,""+t,r);if("object"==typeof t&&null!==t){switch(t.$$typeof){case w:return t.key===l?s(e,n,t,r):null;case S:return t.key===l?c(e,n,t,r):null;case M:return p(e,n,(l=t._init)(t._payload),r)}if(ee(t)||O(t))return null!==l?null:f(e,n,t,r,null);Da(e,t)}return null}function m(e,n,t,r,l){if("string"==typeof r&&""!==r||"number"==typeof r)return i(n,e=e.get(t)||null,""+r,l);if("object"==typeof r&&null!==r){switch(r.$$typeof){case w:return s(n,e=e.get(null===r.key?t:r.key)||null,r,l);case S:return c(n,e=e.get(null===r.key?t:r.key)||null,r,l);case M:return m(e,n,t,(0,r._init)(r._payload),l)}if(ee(r)||O(r))return f(n,e=e.get(t)||null,r,l,null);Da(n,r)}return null}function h(l,a,u,i){for(var s=null,c=null,f=a,h=a=0,g=null;null!==f&&h<u.length;h++){f.index>h?(g=f,f=null):g=f.sibling;var v=p(l,f,u[h],i);if(null===v){null===f&&(f=g);break}e&&f&&null===v.alternate&&n(l,f),a=o(v,a,h),null===c?s=v:c.sibling=v,c=v,f=g}if(h===u.length)return t(l,f),Ca&&ba(l,h),s;if(null===f){for(;h<u.length;h++)null!==(f=d(l,u[h],i))&&(a=o(f,a,h),null===c?s=f:c.sibling=f,c=f);return Ca&&ba(l,h),s}for(f=r(l,f);h<u.length;h++)null!==(g=m(f,l,h,u[h],i))&&(e&&null!==g.alternate&&f.delete(null===g.key?h:g.key),a=o(g,a,h),null===c?s=g:c.sibling=g,c=g);return e&&f.forEach((function(e){return n(l,e)})),Ca&&ba(l,h),s}function g(l,u,i,s){var c=O(i);if("function"!=typeof c)throw Error(a(150));if(null==(i=c.call(i)))throw Error(a(151));for(var f=c=null,h=u,g=u=0,v=null,y=i.next();null!==h&&!y.done;g++,y=i.next()){h.index>g?(v=h,h=null):v=h.sibling;var b=p(l,h,y.value,s);if(null===b){null===h&&(h=v);break}e&&h&&null===b.alternate&&n(l,h),u=o(b,u,g),null===f?c=b:f.sibling=b,f=b,h=v}if(y.done)return t(l,h),Ca&&ba(l,g),c;if(null===h){for(;!y.done;g++,y=i.next())null!==(y=d(l,y.value,s))&&(u=o(y,u,g),null===f?c=y:f.sibling=y,f=y);return Ca&&ba(l,g),c}for(h=r(l,h);!y.done;g++,y=i.next())null!==(y=m(h,l,g,y.value,s))&&(e&&null!==y.alternate&&h.delete(null===y.key?g:y.key),u=o(y,u,g),null===f?c=y:f.sibling=y,f=y);return e&&h.forEach((function(e){return n(l,e)})),Ca&&ba(l,g),c}return function e(r,a,o,i){if("object"==typeof o&&null!==o&&o.type===x&&null===o.key&&(o=o.props.children),"object"==typeof o&&null!==o){switch(o.$$typeof){case w:e:{for(var s=o.key,c=a;null!==c;){if(c.key===s){if((s=o.type)===x){if(7===c.tag){t(r,c.sibling),(a=l(c,o.props.children)).return=r,r=a;break e}}else if(c.elementType===s||"object"==typeof s&&null!==s&&s.$$typeof===M&&Ra(s)===c.type){t(r,c.sibling),(a=l(c,o.props)).ref=Oa(r,c,o),a.return=r,r=a;break e}t(r,c);break}n(r,c),c=c.sibling}o.type===x?((a=Es(o.props.children,r.mode,i,o.key)).return=r,r=a):((i=xs(o.type,o.key,o.props,null,r.mode,i)).ref=Oa(r,a,o),i.return=r,r=i)}return u(r);case S:e:{for(c=o.key;null!==a;){if(a.key===c){if(4===a.tag&&a.stateNode.containerInfo===o.containerInfo&&a.stateNode.implementation===o.implementation){t(r,a.sibling),(a=l(a,o.children||[])).return=r,r=a;break e}t(r,a);break}n(r,a),a=a.sibling}(a=zs(o,r.mode,i)).return=r,r=a}return u(r);case M:return e(r,a,(c=o._init)(o._payload),i)}if(ee(o))return h(r,a,o,i);if(O(o))return g(r,a,o,i);Da(r,o)}return"string"==typeof o&&""!==o||"number"==typeof o?(o=""+o,null!==a&&6===a.tag?(t(r,a.sibling),(a=l(a,o)).return=r,r=a):(t(r,a),(a=_s(o,r.mode,i)).return=r,r=a),u(r)):t(r,a)}}var Aa=Ua(!0),Va=Ua(!1),Ba={},Wa=vl(Ba),Ha=vl(Ba),Qa=vl(Ba);function ja(e){if(e===Ba)throw Error(a(174));return e}function $a(e,n){switch(bl(Qa,n),bl(Ha,e),bl(Wa,Ba),e=n.nodeType){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:ue(null,"");break;default:n=ue(n=(e=8===e?n.parentNode:n).namespaceURI||null,e=e.tagName)}yl(Wa),bl(Wa,n)}function Ka(){yl(Wa),yl(Ha),yl(Qa)}function qa(e){ja(Qa.current);var n=ja(Wa.current),t=ue(n,e.type);n!==t&&(bl(Ha,e),bl(Wa,t))}function Ya(e){Ha.current===e&&(yl(Wa),yl(Ha))}var Xa=vl(0);function Ga(e){for(var n=e;null!==n;){if(13===n.tag){var t=n.memoizedState;if(null!==t&&(null===(t=t.dehydrated)||"$?"===t.data||"$!"===t.data))return n}else if(19===n.tag&&void 0!==n.memoizedProps.revealOrder){if(0!=(128&n.flags))return n}else if(null!==n.child){n.child.return=n,n=n.child;continue}if(n===e)break;for(;null===n.sibling;){if(null===n.return||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ja=[];function Za(){for(var e=0;e<Ja.length;e++)Ja[e]._workInProgressVersionPrimary=null;Ja.length=0}var eo=k.ReactCurrentDispatcher,no=k.ReactCurrentBatchConfig,to=0,ro=null,lo=null,ao=null,oo=!1,uo=!1,io=0,so=0;function co(){throw Error(a(321))}function fo(e,n){if(null===n)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!nr(e[t],n[t]))return!1;return!0}function po(e,n,t,r,l,o){if(to=o,ro=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,eo.current=null===e||null===e.memoizedState?Xo:Go,e=t(r,l),uo){o=0;do{if(uo=!1,io=0,25<=o)throw Error(a(301));o+=1,ao=lo=null,n.updateQueue=null,eo.current=Jo,e=t(r,l)}while(uo)}if(eo.current=Yo,n=null!==lo&&null!==lo.next,to=0,ao=lo=ro=null,oo=!1,n)throw Error(a(300));return e}function mo(){var e=0!==io;return io=0,e}function ho(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ao?ro.memoizedState=ao=e:ao=ao.next=e,ao}function go(){if(null===lo){var e=ro.alternate;e=null!==e?e.memoizedState:null}else e=lo.next;var n=null===ao?ro.memoizedState:ao.next;if(null!==n)ao=n,lo=e;else{if(null===e)throw Error(a(310));e={memoizedState:(lo=e).memoizedState,baseState:lo.baseState,baseQueue:lo.baseQueue,queue:lo.queue,next:null},null===ao?ro.memoizedState=ao=e:ao=ao.next=e}return ao}function vo(e,n){return"function"==typeof n?n(e):n}function yo(e){var n=go(),t=n.queue;if(null===t)throw Error(a(311));t.lastRenderedReducer=e;var r=lo,l=r.baseQueue,o=t.pending;if(null!==o){if(null!==l){var u=l.next;l.next=o.next,o.next=u}r.baseQueue=l=o,t.pending=null}if(null!==l){o=l.next,r=r.baseState;var i=u=null,s=null,c=o;do{var f=c.lane;if((to&f)===f)null!==s&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var d={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};null===s?(i=s=d,u=r):s=s.next=d,ro.lanes|=f,xi|=f}c=c.next}while(null!==c&&c!==o);null===s?u=r:s.next=i,nr(r,n.memoizedState)||(mu=!0),n.memoizedState=r,n.baseState=u,n.baseQueue=s,t.lastRenderedState=r}if(null!==(e=t.interleaved)){l=e;do{o=l.lane,ro.lanes|=o,xi|=o,l=l.next}while(l!==e)}else null===l&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function bo(e){var n=go(),t=n.queue;if(null===t)throw Error(a(311));t.lastRenderedReducer=e;var r=t.dispatch,l=t.pending,o=n.memoizedState;if(null!==l){t.pending=null;var u=l=l.next;do{o=e(o,u.action),u=u.next}while(u!==l);nr(o,n.memoizedState)||(mu=!0),n.memoizedState=o,null===n.baseQueue&&(n.baseState=o),t.lastRenderedState=o}return[o,r]}function ko(){}function wo(e,n){var t=ro,r=go(),l=n(),o=!nr(r.memoizedState,l);if(o&&(r.memoizedState=l,mu=!0),r=r.queue,Mo(Eo.bind(null,t,r,e),[e]),r.getSnapshot!==n||o||null!==ao&&1&ao.memoizedState.tag){if(t.flags|=2048,zo(9,xo.bind(null,t,r,l,n),void 0,null),null===gi)throw Error(a(349));0!=(30&to)||So(t,n,l)}return l}function So(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},null===(n=ro.updateQueue)?(n={lastEffect:null,stores:null},ro.updateQueue=n,n.stores=[e]):null===(t=n.stores)?n.stores=[e]:t.push(e)}function xo(e,n,t,r){n.value=t,n.getSnapshot=r,Co(n)&&Hi(e,1,-1)}function Eo(e,n,t){return t((function(){Co(n)&&Hi(e,1,-1)}))}function Co(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!nr(e,t)}catch(e){return!0}}function _o(e){var n=ho();return"function"==typeof e&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vo,lastRenderedState:e},n.queue=e,e=e.dispatch=Qo.bind(null,ro,e),[n.memoizedState,e]}function zo(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},null===(n=ro.updateQueue)?(n={lastEffect:null,stores:null},ro.updateQueue=n,n.lastEffect=e.next=e):null===(t=n.lastEffect)?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e),e}function To(){return go().memoizedState}function No(e,n,t,r){var l=ho();ro.flags|=e,l.memoizedState=zo(1|n,t,void 0,void 0===r?null:r)}function Po(e,n,t,r){var l=go();r=void 0===r?null:r;var a=void 0;if(null!==lo){var o=lo.memoizedState;if(a=o.destroy,null!==r&&fo(r,o.deps))return void(l.memoizedState=zo(n,t,a,r))}ro.flags|=e,l.memoizedState=zo(1|n,t,a,r)}function Lo(e,n){return No(8390656,8,e,n)}function Mo(e,n){return Po(2048,8,e,n)}function Fo(e,n){return Po(4,2,e,n)}function Io(e,n){return Po(4,4,e,n)}function Oo(e,n){return"function"==typeof n?(e=e(),n(e),function(){n(null)}):null!=n?(e=e(),n.current=e,function(){n.current=null}):void 0}function Do(e,n,t){return t=null!=t?t.concat([e]):null,Po(4,4,Oo.bind(null,n,e),t)}function Ro(){}function Uo(e,n){var t=go();n=void 0===n?null:n;var r=t.memoizedState;return null!==r&&null!==n&&fo(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Ao(e,n){var t=go();n=void 0===n?null:n;var r=t.memoizedState;return null!==r&&null!==n&&fo(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Vo(e,n,t){return 0==(21&to)?(e.baseState&&(e.baseState=!1,mu=!0),e.memoizedState=t):(nr(t,n)||(t=pn(),ro.lanes|=t,xi|=t,e.baseState=!0),n)}function Bo(e,n){var t=vn;vn=0!==t&&4>t?t:4,e(!0);var r=no.transition;no.transition={};try{e(!1),n()}finally{vn=t,no.transition=r}}function Wo(){return go().memoizedState}function Ho(e,n,t){var r=Wi(e);t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},jo(e)?$o(n,t):(Ko(e,n,t),null!==(e=Hi(e,r,t=Bi()))&&qo(e,n,r))}function Qo(e,n,t){var r=Wi(e),l={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(jo(e))$o(n,l);else{Ko(e,n,l);var a=e.alternate;if(0===e.lanes&&(null===a||0===a.lanes)&&null!==(a=n.lastRenderedReducer))try{var o=n.lastRenderedState,u=a(o,t);if(l.hasEagerState=!0,l.eagerState=u,nr(u,o))return}catch(e){}null!==(e=Hi(e,r,t=Bi()))&&qo(e,n,r)}}function jo(e){var n=e.alternate;return e===ro||null!==n&&n===ro}function $o(e,n){uo=oo=!0;var t=e.pending;null===t?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Ko(e,n,t){ji(e)?(null===(e=n.interleaved)?(t.next=t,null===Kl?Kl=[n]:Kl.push(n)):(t.next=e.next,e.next=t),n.interleaved=t):(null===(e=n.pending)?t.next=t:(t.next=e.next,e.next=t),n.pending=t)}function qo(e,n,t){if(0!=(4194240&t)){var r=n.lanes;t|=r&=e.pendingLanes,n.lanes=t,gn(e,t)}}var Yo={readContext:$l,useCallback:co,useContext:co,useEffect:co,useImperativeHandle:co,useInsertionEffect:co,useLayoutEffect:co,useMemo:co,useReducer:co,useRef:co,useState:co,useDebugValue:co,useDeferredValue:co,useTransition:co,useMutableSource:co,useSyncExternalStore:co,useId:co,unstable_isNewReconciler:!1},Xo={readContext:$l,useCallback:function(e,n){return ho().memoizedState=[e,void 0===n?null:n],e},useContext:$l,useEffect:Lo,useImperativeHandle:function(e,n,t){return t=null!=t?t.concat([e]):null,No(4194308,4,Oo.bind(null,n,e),t)},useLayoutEffect:function(e,n){return No(4194308,4,e,n)},useInsertionEffect:function(e,n){return No(4,2,e,n)},useMemo:function(e,n){var t=ho();return n=void 0===n?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=ho();return n=void 0!==t?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Ho.bind(null,ro,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},ho().memoizedState=e},useState:_o,useDebugValue:Ro,useDeferredValue:function(e){return ho().memoizedState=e},useTransition:function(){var e=_o(!1),n=e[0];return e=Bo.bind(null,e[1]),ho().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=ro,l=ho();if(Ca){if(void 0===t)throw Error(a(407));t=t()}else{if(t=n(),null===gi)throw Error(a(349));0!=(30&to)||So(r,n,t)}l.memoizedState=t;var o={value:t,getSnapshot:n};return l.queue=o,Lo(Eo.bind(null,r,o,e),[e]),r.flags|=2048,zo(9,xo.bind(null,r,o,t,n),void 0,null),t},useId:function(){var e=ho(),n=gi.identifierPrefix;if(Ca){var t=ya;n=":"+n+"R"+(t=(va&~(1<<32-rn(va)-1)).toString(32)+t),0<(t=io++)&&(n+="H"+t.toString(32)),n+=":"}else n=":"+n+"r"+(t=so++).toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Go={readContext:$l,useCallback:Uo,useContext:$l,useEffect:Mo,useImperativeHandle:Do,useInsertionEffect:Fo,useLayoutEffect:Io,useMemo:Ao,useReducer:yo,useRef:To,useState:function(){return yo(vo)},useDebugValue:Ro,useDeferredValue:function(e){return Vo(go(),lo.memoizedState,e)},useTransition:function(){return[yo(vo)[0],go().memoizedState]},useMutableSource:ko,useSyncExternalStore:wo,useId:Wo,unstable_isNewReconciler:!1},Jo={readContext:$l,useCallback:Uo,useContext:$l,useEffect:Mo,useImperativeHandle:Do,useInsertionEffect:Fo,useLayoutEffect:Io,useMemo:Ao,useReducer:bo,useRef:To,useState:function(){return bo(vo)},useDebugValue:Ro,useDeferredValue:function(e){var n=go();return null===lo?n.memoizedState=e:Vo(n,lo.memoizedState,e)},useTransition:function(){return[bo(vo)[0],go().memoizedState]},useMutableSource:ko,useSyncExternalStore:wo,useId:Wo,unstable_isNewReconciler:!1};function Zo(e,n){try{var t="",r=n;do{t+=B(r),r=r.return}while(r);var l=t}catch(e){l="\nError generating stack: "+e.message+"\n"+e.stack}return{value:e,source:n,stack:l}}function eu(e,n){try{console.error(n.value)}catch(e){setTimeout((function(){throw e}))}}var nu,tu,ru,lu="function"==typeof WeakMap?WeakMap:Map;function au(e,n,t){(t=Gl(-1,t)).tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Li||(Li=!0,Mi=r),eu(0,n)},t}function ou(e,n,t){(t=Gl(-1,t)).tag=3;var r=e.type.getDerivedStateFromError;if("function"==typeof r){var l=n.value;t.payload=function(){return r(l)},t.callback=function(){eu(0,n)}}var a=e.stateNode;return null!==a&&"function"==typeof a.componentDidCatch&&(t.callback=function(){eu(0,n),"function"!=typeof r&&(null===Fi?Fi=new Set([this]):Fi.add(this));var e=n.stack;this.componentDidCatch(n.value,{componentStack:null!==e?e:""})}),t}function uu(e,n,t){var r=e.pingCache;if(null===r){r=e.pingCache=new lu;var l=new Set;r.set(n,l)}else void 0===(l=r.get(n))&&(l=new Set,r.set(n,l));l.has(t)||(l.add(t),e=ms.bind(null,e,n,t),n.then(e,e))}function iu(e){do{var n;if((n=13===e.tag)&&(n=null===(n=e.memoizedState)||null!==n.dehydrated),n)return e;e=e.return}while(null!==e);return null}function su(e,n,t,r,l){return 0==(1&e.mode)?(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,1===t.tag&&(null===t.alternate?t.tag=17:((n=Gl(-1,1)).tag=2,Jl(t,n))),t.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}function cu(e,n){if(!Ca)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;null!==n;)null!==n.alternate&&(t=n),n=n.sibling;null===t?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;null!==t;)null!==t.alternate&&(r=t),t=t.sibling;null===r?n||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function fu(e){var n=null!==e.alternate&&e.alternate.child===e.child,t=0,r=0;if(n)for(var l=e.child;null!==l;)t|=l.lanes|l.childLanes,r|=14680064&l.subtreeFlags,r|=14680064&l.flags,l.return=e,l=l.sibling;else for(l=e.child;null!==l;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function du(e,n,t){var r=n.pendingProps;switch(Sa(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fu(n),null;case 1:return Cl(n.type)&&_l(),fu(n),null;case 3:return r=n.stateNode,Ka(),yl(Sl),yl(wl),Za(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(Ma(n)?n.flags|=4:null===e||e.memoizedState.isDehydrated&&0==(256&n.flags)||(n.flags|=1024,null!==_a&&(Yi(_a),_a=null))),fu(n),null;case 5:Ya(n);var l=ja(Qa.current);if(t=n.type,null!==e&&null!=n.stateNode)tu(e,n,t,r),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(null===n.stateNode)throw Error(a(166));return fu(n),null}if(e=ja(Wa.current),Ma(n)){r=n.stateNode,t=n.type;var o=n.memoizedProps;switch(r[al]=n,r[ol]=o,e=0!=(1&n.mode),t){case"dialog":Mr("cancel",r),Mr("close",r);break;case"iframe":case"object":case"embed":Mr("load",r);break;case"video":case"audio":for(l=0;l<Tr.length;l++)Mr(Tr[l],r);break;case"source":Mr("error",r);break;case"img":case"image":case"link":Mr("error",r),Mr("load",r);break;case"details":Mr("toggle",r);break;case"input":Y(r,o),Mr("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Mr("invalid",r);break;case"textarea":re(r,o),Mr("invalid",r)}for(var i in ge(t,o),l=null,o)if(o.hasOwnProperty(i)){var s=o[i];"children"===i?"string"==typeof s?r.textContent!==s&&(!0!==o.suppressHydrationWarning&&jr(r.textContent,s,e),l=["children",s]):"number"==typeof s&&r.textContent!==""+s&&(!0!==o.suppressHydrationWarning&&jr(r.textContent,s,e),l=["children",""+s]):u.hasOwnProperty(i)&&null!=s&&"onScroll"===i&&Mr("scroll",r)}switch(t){case"input":j(r),J(r,o,!0);break;case"textarea":j(r),ae(r);break;case"select":case"option":break;default:"function"==typeof o.onClick&&(r.onclick=$r)}r=l,n.updateQueue=r,null!==r&&(n.flags|=4)}else{i=9===l.nodeType?l:l.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=oe(t)),"http://www.w3.org/1999/xhtml"===e?"script"===t?((e=i.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"==typeof r.is?e=i.createElement(t,{is:r.is}):(e=i.createElement(t),"select"===t&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,t),e[al]=n,e[ol]=r,nu(e,n),n.stateNode=e;e:{switch(i=ve(t,r),t){case"dialog":Mr("cancel",e),Mr("close",e),l=r;break;case"iframe":case"object":case"embed":Mr("load",e),l=r;break;case"video":case"audio":for(l=0;l<Tr.length;l++)Mr(Tr[l],e);l=r;break;case"source":Mr("error",e),l=r;break;case"img":case"image":case"link":Mr("error",e),Mr("load",e),l=r;break;case"details":Mr("toggle",e),l=r;break;case"input":Y(e,r),l=q(e,r),Mr("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=R({},r,{value:void 0}),Mr("invalid",e);break;case"textarea":re(e,r),l=te(e,r),Mr("invalid",e);break;default:l=r}for(o in ge(t,l),s=l)if(s.hasOwnProperty(o)){var c=s[o];"style"===o?me(e,c):"dangerouslySetInnerHTML"===o?null!=(c=c?c.__html:void 0)&&se(e,c):"children"===o?"string"==typeof c?("textarea"!==t||""!==c)&&ce(e,c):"number"==typeof c&&ce(e,""+c):"suppressContentEditableWarning"!==o&&"suppressHydrationWarning"!==o&&"autoFocus"!==o&&(u.hasOwnProperty(o)?null!=c&&"onScroll"===o&&Mr("scroll",e):null!=c&&b(e,o,c,i))}switch(t){case"input":j(e),J(e,r,!1);break;case"textarea":j(e),ae(e);break;case"option":null!=r.value&&e.setAttribute("value",""+H(r.value));break;case"select":e.multiple=!!r.multiple,null!=(o=r.value)?ne(e,!!r.multiple,o,!1):null!=r.defaultValue&&ne(e,!!r.multiple,r.defaultValue,!0);break;default:"function"==typeof l.onClick&&(e.onclick=$r)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}null!==n.ref&&(n.flags|=512,n.flags|=2097152)}return fu(n),null;case 6:if(e&&null!=n.stateNode)ru(0,n,e.memoizedProps,r);else{if("string"!=typeof r&&null===n.stateNode)throw Error(a(166));if(t=ja(Qa.current),ja(Wa.current),Ma(n)){if(r=n.stateNode,t=n.memoizedProps,r[al]=n,(o=r.nodeValue!==t)&&null!==(e=xa))switch(e.tag){case 3:jr(r.nodeValue,t,0!=(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&jr(r.nodeValue,t,0!=(1&e.mode))}o&&(n.flags|=4)}else(r=(9===t.nodeType?t:t.ownerDocument).createTextNode(r))[al]=n,n.stateNode=r}return fu(n),null;case 13:if(yl(Xa),r=n.memoizedState,Ca&&null!==Ea&&0!=(1&n.mode)&&0==(128&n.flags)){for(r=Ea;r;)r=tl(r.nextSibling);return Fa(),n.flags|=98560,n}if(null!==r&&null!==r.dehydrated){if(r=Ma(n),null===e){if(!r)throw Error(a(318));if(!(r=null!==(r=n.memoizedState)?r.dehydrated:null))throw Error(a(317));r[al]=n}else Fa(),0==(128&n.flags)&&(n.memoizedState=null),n.flags|=4;return fu(n),null}return null!==_a&&(Yi(_a),_a=null),0!=(128&n.flags)?(n.lanes=t,n):(r=null!==r,t=!1,null===e?Ma(n):t=null!==e.memoizedState,r!==t&&r&&(n.child.flags|=8192,0!=(1&n.mode)&&(null===e||0!=(1&Xa.current)?0===wi&&(wi=3):ls())),null!==n.updateQueue&&(n.flags|=4),fu(n),null);case 4:return Ka(),null===e&&Or(n.stateNode.containerInfo),fu(n),null;case 10:return Hl(n.type._context),fu(n),null;case 17:return Cl(n.type)&&_l(),fu(n),null;case 19:if(yl(Xa),null===(o=n.memoizedState))return fu(n),null;if(r=0!=(128&n.flags),null===(i=o.rendering))if(r)cu(o,!1);else{if(0!==wi||null!==e&&0!=(128&e.flags))for(e=n.child;null!==e;){if(null!==(i=Ga(e))){for(n.flags|=128,cu(o,!1),null!==(r=i.updateQueue)&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;null!==t;)e=r,(o=t).flags&=14680066,null===(i=o.alternate)?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return bl(Xa,1&Xa.current|2),n.child}e=e.sibling}null!==o.tail&&qe()>Ni&&(n.flags|=128,r=!0,cu(o,!1),n.lanes=4194304)}else{if(!r)if(null!==(e=Ga(i))){if(n.flags|=128,r=!0,null!==(t=e.updateQueue)&&(n.updateQueue=t,n.flags|=4),cu(o,!0),null===o.tail&&"hidden"===o.tailMode&&!i.alternate&&!Ca)return fu(n),null}else 2*qe()-o.renderingStartTime>Ni&&1073741824!==t&&(n.flags|=128,r=!0,cu(o,!1),n.lanes=4194304);o.isBackwards?(i.sibling=n.child,n.child=i):(null!==(t=o.last)?t.sibling=i:n.child=i,o.last=i)}return null!==o.tail?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=qe(),n.sibling=null,t=Xa.current,bl(Xa,r?1&t|2:1&t),n):(fu(n),null);case 22:case 23:return es(),r=null!==n.memoizedState,null!==e&&null!==e.memoizedState!==r&&(n.flags|=8192),r&&0!=(1&n.mode)?0!=(1073741824&bi)&&(fu(n),6&n.subtreeFlags&&(n.flags|=8192)):fu(n),null;case 24:case 25:return null}throw Error(a(156,n.tag))}nu=function(e,n){for(var t=n.child;null!==t;){if(5===t.tag||6===t.tag)e.appendChild(t.stateNode);else if(4!==t.tag&&null!==t.child){t.child.return=t,t=t.child;continue}if(t===n)break;for(;null===t.sibling;){if(null===t.return||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}},tu=function(e,n,t,r){var l=e.memoizedProps;if(l!==r){e=n.stateNode,ja(Wa.current);var a,o=null;switch(t){case"input":l=q(e,l),r=q(e,r),o=[];break;case"select":l=R({},l,{value:void 0}),r=R({},r,{value:void 0}),o=[];break;case"textarea":l=te(e,l),r=te(e,r),o=[];break;default:"function"!=typeof l.onClick&&"function"==typeof r.onClick&&(e.onclick=$r)}for(c in ge(t,r),t=null,l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&null!=l[c])if("style"===c){var i=l[c];for(a in i)i.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(u.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var s=r[c];if(i=null!=l?l[c]:void 0,r.hasOwnProperty(c)&&s!==i&&(null!=s||null!=i))if("style"===c)if(i){for(a in i)!i.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in s)s.hasOwnProperty(a)&&i[a]!==s[a]&&(t||(t={}),t[a]=s[a])}else t||(o||(o=[]),o.push(c,t)),t=s;else"dangerouslySetInnerHTML"===c?(s=s?s.__html:void 0,i=i?i.__html:void 0,null!=s&&i!==s&&(o=o||[]).push(c,s)):"children"===c?"string"!=typeof s&&"number"!=typeof s||(o=o||[]).push(c,""+s):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(u.hasOwnProperty(c)?(null!=s&&"onScroll"===c&&Mr("scroll",e),o||i===s||(o=[])):(o=o||[]).push(c,s))}t&&(o=o||[]).push("style",t);var c=o;(n.updateQueue=c)&&(n.flags|=4)}},ru=function(e,n,t,r){t!==r&&(n.flags|=4)};var pu=k.ReactCurrentOwner,mu=!1;function hu(e,n,t,r){n.child=null===e?Va(n,null,t,r):Aa(n,e.child,t,r)}function gu(e,n,t,r,l){t=t.render;var a=n.ref;return jl(n,l),r=po(e,n,t,r,a,l),t=mo(),null===e||mu?(Ca&&t&&wa(n),n.flags|=1,hu(e,n,r,l),n.child):(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,Ru(e,n,l))}function vu(e,n,t,r,l){if(null===e){var a=t.type;return"function"!=typeof a||ws(a)||void 0!==a.defaultProps||null!==t.compare||void 0!==t.defaultProps?((e=xs(t.type,null,r,n,n.mode,l)).ref=n.ref,e.return=n,n.child=e):(n.tag=15,n.type=a,yu(e,n,a,r,l))}if(a=e.child,0==(e.lanes&l)){var o=a.memoizedProps;if((t=null!==(t=t.compare)?t:tr)(o,r)&&e.ref===n.ref)return Ru(e,n,l)}return n.flags|=1,(e=Ss(a,r)).ref=n.ref,e.return=n,n.child=e}function yu(e,n,t,r,l){if(null!==e){var a=e.memoizedProps;if(tr(a,r)&&e.ref===n.ref){if(mu=!1,n.pendingProps=r=a,0==(e.lanes&l))return n.lanes=e.lanes,Ru(e,n,l);0!=(131072&e.flags)&&(mu=!0)}}return wu(e,n,t,r,l)}function bu(e,n,t){var r=n.pendingProps,l=r.children,a=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0==(1&n.mode))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},bl(ki,bi),bi|=t;else{if(0==(1073741824&t))return e=null!==a?a.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,bl(ki,bi),bi|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==a?a.baseLanes:t,bl(ki,bi),bi|=r}else null!==a?(r=a.baseLanes|t,n.memoizedState=null):r=t,bl(ki,bi),bi|=r;return hu(e,n,l,t),n.child}function ku(e,n){var t=n.ref;(null===e&&null!==t||null!==e&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function wu(e,n,t,r,l){var a=Cl(t)?xl:wl.current;return a=El(n,a),jl(n,l),t=po(e,n,t,r,a,l),r=mo(),null===e||mu?(Ca&&r&&wa(n),n.flags|=1,hu(e,n,t,l),n.child):(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,Ru(e,n,l))}function Su(e,n,t,r,l){if(Cl(t)){var a=!0;Nl(n)}else a=!1;if(jl(n,l),null===n.stateNode)null!==e&&(e.alternate=null,n.alternate=null,n.flags|=2),ua(n,t,r),sa(n,t,r,l),r=!0;else if(null===e){var o=n.stateNode,u=n.memoizedProps;o.props=u;var i=o.context,s=t.contextType;"object"==typeof s&&null!==s?s=$l(s):s=El(n,s=Cl(t)?xl:wl.current);var c=t.getDerivedStateFromProps,f="function"==typeof c||"function"==typeof o.getSnapshotBeforeUpdate;f||"function"!=typeof o.UNSAFE_componentWillReceiveProps&&"function"!=typeof o.componentWillReceiveProps||(u!==r||i!==s)&&ia(n,o,r,s),ql=!1;var d=n.memoizedState;o.state=d,na(n,r,o,l),i=n.memoizedState,u!==r||d!==i||Sl.current||ql?("function"==typeof c&&(la(n,t,c,r),i=n.memoizedState),(u=ql||oa(n,t,u,r,d,i,s))?(f||"function"!=typeof o.UNSAFE_componentWillMount&&"function"!=typeof o.componentWillMount||("function"==typeof o.componentWillMount&&o.componentWillMount(),"function"==typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount()),"function"==typeof o.componentDidMount&&(n.flags|=4194308)):("function"==typeof o.componentDidMount&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=i),o.props=r,o.state=i,o.context=s,r=u):("function"==typeof o.componentDidMount&&(n.flags|=4194308),r=!1)}else{o=n.stateNode,Xl(e,n),u=n.memoizedProps,s=n.type===n.elementType?u:Rl(n.type,u),o.props=s,f=n.pendingProps,d=o.context,"object"==typeof(i=t.contextType)&&null!==i?i=$l(i):i=El(n,i=Cl(t)?xl:wl.current);var p=t.getDerivedStateFromProps;(c="function"==typeof p||"function"==typeof o.getSnapshotBeforeUpdate)||"function"!=typeof o.UNSAFE_componentWillReceiveProps&&"function"!=typeof o.componentWillReceiveProps||(u!==f||d!==i)&&ia(n,o,r,i),ql=!1,d=n.memoizedState,o.state=d,na(n,r,o,l);var m=n.memoizedState;u!==f||d!==m||Sl.current||ql?("function"==typeof p&&(la(n,t,p,r),m=n.memoizedState),(s=ql||oa(n,t,s,r,d,m,i)||!1)?(c||"function"!=typeof o.UNSAFE_componentWillUpdate&&"function"!=typeof o.componentWillUpdate||("function"==typeof o.componentWillUpdate&&o.componentWillUpdate(r,m,i),"function"==typeof o.UNSAFE_componentWillUpdate&&o.UNSAFE_componentWillUpdate(r,m,i)),"function"==typeof o.componentDidUpdate&&(n.flags|=4),"function"==typeof o.getSnapshotBeforeUpdate&&(n.flags|=1024)):("function"!=typeof o.componentDidUpdate||u===e.memoizedProps&&d===e.memoizedState||(n.flags|=4),"function"!=typeof o.getSnapshotBeforeUpdate||u===e.memoizedProps&&d===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=m),o.props=r,o.state=m,o.context=i,r=s):("function"!=typeof o.componentDidUpdate||u===e.memoizedProps&&d===e.memoizedState||(n.flags|=4),"function"!=typeof o.getSnapshotBeforeUpdate||u===e.memoizedProps&&d===e.memoizedState||(n.flags|=1024),r=!1)}return xu(e,n,t,r,a,l)}function xu(e,n,t,r,l,a){ku(e,n);var o=0!=(128&n.flags);if(!r&&!o)return l&&Pl(n,t,!1),Ru(e,n,a);r=n.stateNode,pu.current=n;var u=o&&"function"!=typeof t.getDerivedStateFromError?null:r.render();return n.flags|=1,null!==e&&o?(n.child=Aa(n,e.child,null,a),n.child=Aa(n,null,u,a)):hu(e,n,u,a),n.memoizedState=r.state,l&&Pl(n,t,!0),n.child}function Eu(e){var n=e.stateNode;n.pendingContext?zl(0,n.pendingContext,n.pendingContext!==n.context):n.context&&zl(0,n.context,!1),$a(e,n.containerInfo)}function Cu(e,n,t,r,l){return Fa(),Ia(l),n.flags|=256,hu(e,n,t,r),n.child}var _u={dehydrated:null,treeContext:null,retryLane:0};function zu(e){return{baseLanes:e,cachePool:null,transitions:null}}function Tu(e,n){return{baseLanes:e.baseLanes|n,cachePool:null,transitions:e.transitions}}function Nu(e,n,t){var r,l=n.pendingProps,o=Xa.current,u=!1,i=0!=(128&n.flags);if((r=i)||(r=(null===e||null!==e.memoizedState)&&0!=(2&o)),r?(u=!0,n.flags&=-129):null!==e&&null===e.memoizedState||(o|=1),bl(Xa,1&o),null===e)return Pa(n),null!==(e=n.memoizedState)&&null!==(e=e.dehydrated)?(0==(1&n.mode)?n.lanes=1:"$!"===e.data?n.lanes=8:n.lanes=1073741824,null):(o=l.children,e=l.fallback,u?(l=n.mode,u=n.child,o={mode:"hidden",children:o},0==(1&l)&&null!==u?(u.childLanes=0,u.pendingProps=o):u=Cs(o,l,0,null),e=Es(e,l,t,null),u.return=n,e.return=n,u.sibling=e,n.child=u,n.child.memoizedState=zu(t),n.memoizedState=_u,e):Pu(n,o));if(null!==(o=e.memoizedState)){if(null!==(r=o.dehydrated)){if(i)return 256&n.flags?(n.flags&=-257,Fu(e,n,t,Error(a(422)))):null!==n.memoizedState?(n.child=e.child,n.flags|=128,null):(u=l.fallback,o=n.mode,l=Cs({mode:"visible",children:l.children},o,0,null),(u=Es(u,o,t,null)).flags|=2,l.return=n,u.return=n,l.sibling=u,n.child=l,0!=(1&n.mode)&&Aa(n,e.child,null,t),n.child.memoizedState=zu(t),n.memoizedState=_u,u);if(0==(1&n.mode))n=Fu(e,n,t,null);else if("$!"===r.data)n=Fu(e,n,t,Error(a(419)));else if(l=0!=(t&e.childLanes),mu||l){if(null!==(l=gi)){switch(t&-t){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}0!==(l=0!=(u&(l.suspendedLanes|t))?0:u)&&l!==o.retryLane&&(o.retryLane=l,Hi(e,l,-1))}ls(),n=Fu(e,n,t,Error(a(421)))}else"$?"===r.data?(n.flags|=128,n.child=e.child,n=gs.bind(null,e),r._reactRetry=n,n=null):(t=o.treeContext,Ea=tl(r.nextSibling),xa=n,Ca=!0,_a=null,null!==t&&(ma[ha++]=va,ma[ha++]=ya,ma[ha++]=ga,va=t.id,ya=t.overflow,ga=n),(n=Pu(n,n.pendingProps.children)).flags|=4096);return n}return u?(l=Mu(e,n,l.children,l.fallback,t),u=n.child,o=e.child.memoizedState,u.memoizedState=null===o?zu(t):Tu(o,t),u.childLanes=e.childLanes&~t,n.memoizedState=_u,l):(t=Lu(e,n,l.children,t),n.memoizedState=null,t)}return u?(l=Mu(e,n,l.children,l.fallback,t),u=n.child,o=e.child.memoizedState,u.memoizedState=null===o?zu(t):Tu(o,t),u.childLanes=e.childLanes&~t,n.memoizedState=_u,l):(t=Lu(e,n,l.children,t),n.memoizedState=null,t)}function Pu(e,n){return(n=Cs({mode:"visible",children:n},e.mode,0,null)).return=e,e.child=n}function Lu(e,n,t,r){var l=e.child;return e=l.sibling,t=Ss(l,{mode:"visible",children:t}),0==(1&n.mode)&&(t.lanes=r),t.return=n,t.sibling=null,null!==e&&(null===(r=n.deletions)?(n.deletions=[e],n.flags|=16):r.push(e)),n.child=t}function Mu(e,n,t,r,l){var a=n.mode,o=(e=e.child).sibling,u={mode:"hidden",children:t};return 0==(1&a)&&n.child!==e?((t=n.child).childLanes=0,t.pendingProps=u,n.deletions=null):(t=Ss(e,u)).subtreeFlags=14680064&e.subtreeFlags,null!==o?r=Ss(o,r):(r=Es(r,a,l,null)).flags|=2,r.return=n,t.return=n,t.sibling=r,n.child=t,r}function Fu(e,n,t,r){return null!==r&&Ia(r),Aa(n,e.child,null,t),(e=Pu(n,n.pendingProps.children)).flags|=2,n.memoizedState=null,e}function Iu(e,n,t){e.lanes|=n;var r=e.alternate;null!==r&&(r.lanes|=n),Ql(e.return,n,t)}function Ou(e,n,t,r,l){var a=e.memoizedState;null===a?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:l}:(a.isBackwards=n,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=t,a.tailMode=l)}function Du(e,n,t){var r=n.pendingProps,l=r.revealOrder,a=r.tail;if(hu(e,n,r.children,t),0!=(2&(r=Xa.current)))r=1&r|2,n.flags|=128;else{if(null!==e&&0!=(128&e.flags))e:for(e=n.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Iu(e,t,n);else if(19===e.tag)Iu(e,t,n);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;null===e.sibling;){if(null===e.return||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(bl(Xa,r),0==(1&n.mode))n.memoizedState=null;else switch(l){case"forwards":for(t=n.child,l=null;null!==t;)null!==(e=t.alternate)&&null===Ga(e)&&(l=t),t=t.sibling;null===(t=l)?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null),Ou(n,!1,l,t,a);break;case"backwards":for(t=null,l=n.child,n.child=null;null!==l;){if(null!==(e=l.alternate)&&null===Ga(e)){n.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}Ou(n,!0,t,null,a);break;case"together":Ou(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Ru(e,n,t){if(null!==e&&(n.dependencies=e.dependencies),xi|=n.lanes,0==(t&n.childLanes))return null;if(null!==e&&n.child!==e.child)throw Error(a(153));if(null!==n.child){for(t=Ss(e=n.child,e.pendingProps),n.child=t,t.return=n;null!==e.sibling;)e=e.sibling,(t=t.sibling=Ss(e,e.pendingProps)).return=n;t.sibling=null}return n.child}function Uu(e,n){switch(Sa(n),n.tag){case 1:return Cl(n.type)&&_l(),65536&(e=n.flags)?(n.flags=-65537&e|128,n):null;case 3:return Ka(),yl(Sl),yl(wl),Za(),0!=(65536&(e=n.flags))&&0==(128&e)?(n.flags=-65537&e|128,n):null;case 5:return Ya(n),null;case 13:if(yl(Xa),null!==(e=n.memoizedState)&&null!==e.dehydrated){if(null===n.alternate)throw Error(a(340));Fa()}return 65536&(e=n.flags)?(n.flags=-65537&e|128,n):null;case 19:return yl(Xa),null;case 4:return Ka(),null;case 10:return Hl(n.type._context),null;case 22:case 23:return es(),null;case 24:default:return null}}var Au=!1,Vu=!1,Bu="function"==typeof WeakSet?WeakSet:Set,Wu=null;function Hu(e,n){var t=e.ref;if(null!==t)if("function"==typeof t)try{t(null)}catch(t){ps(e,n,t)}else t.current=null}function Qu(e,n,t){try{t()}catch(t){ps(e,n,t)}}var ju=!1;function $u(e,n,t){var r=n.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var l=r=r.next;do{if((l.tag&e)===e){var a=l.destroy;l.destroy=void 0,void 0!==a&&Qu(n,t,a)}l=l.next}while(l!==r)}}function Ku(e,n){if(null!==(n=null!==(n=n.updateQueue)?n.lastEffect:null)){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function qu(e){var n=e.ref;if(null!==n){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}"function"==typeof n?n(e):n.current=e}}function Yu(e){var n=e.alternate;null!==n&&(e.alternate=null,Yu(n)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(n=e.stateNode)&&(delete n[al],delete n[ol],delete n[il],delete n[sl],delete n[cl])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Xu(e){return 5===e.tag||3===e.tag||4===e.tag}function Gu(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||Xu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}var Ju=null,Zu=!1;function ei(e,n,t){for(t=t.child;null!==t;)ni(e,n,t),t=t.sibling}function ni(e,n,t){if(tn&&"function"==typeof tn.onCommitFiberUnmount)try{tn.onCommitFiberUnmount(nn,t)}catch(e){}switch(t.tag){case 5:Vu||Hu(t,n);case 6:var r=Ju,l=Zu;Ju=null,ei(e,n,t),Zu=l,null!==(Ju=r)&&(Zu?(e=Ju,t=t.stateNode,8===e.nodeType?e.parentNode.removeChild(t):e.removeChild(t)):Ju.removeChild(t.stateNode));break;case 18:null!==Ju&&(Zu?(e=Ju,t=t.stateNode,8===e.nodeType?nl(e.parentNode,t):1===e.nodeType&&nl(e,t),Vn(e)):nl(Ju,t.stateNode));break;case 4:r=Ju,l=Zu,Ju=t.stateNode.containerInfo,Zu=!0,ei(e,n,t),Ju=r,Zu=l;break;case 0:case 11:case 14:case 15:if(!Vu&&(null!==(r=t.updateQueue)&&null!==(r=r.lastEffect))){l=r=r.next;do{var a=l,o=a.destroy;a=a.tag,void 0!==o&&(0!=(2&a)||0!=(4&a))&&Qu(t,n,o),l=l.next}while(l!==r)}ei(e,n,t);break;case 1:if(!Vu&&(Hu(t,n),"function"==typeof(r=t.stateNode).componentWillUnmount))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(e){ps(t,n,e)}ei(e,n,t);break;case 21:ei(e,n,t);break;case 22:1&t.mode?(Vu=(r=Vu)||null!==t.memoizedState,ei(e,n,t),Vu=r):ei(e,n,t);break;default:ei(e,n,t)}}function ti(e){var n=e.updateQueue;if(null!==n){e.updateQueue=null;var t=e.stateNode;null===t&&(t=e.stateNode=new Bu),n.forEach((function(n){var r=vs.bind(null,e,n);t.has(n)||(t.add(n),n.then(r,r))}))}}function ri(e,n){var t=n.deletions;if(null!==t)for(var r=0;r<t.length;r++){var l=t[r];try{var o=e,u=n,i=u;e:for(;null!==i;){switch(i.tag){case 5:Ju=i.stateNode,Zu=!1;break e;case 3:case 4:Ju=i.stateNode.containerInfo,Zu=!0;break e}i=i.return}if(null===Ju)throw Error(a(160));ni(o,u,l),Ju=null,Zu=!1;var s=l.alternate;null!==s&&(s.return=null),l.return=null}catch(e){ps(l,n,e)}}if(12854&n.subtreeFlags)for(n=n.child;null!==n;)li(n,e),n=n.sibling}function li(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ri(n,e),ai(e),4&r){try{$u(3,e,e.return),Ku(3,e)}catch(n){ps(e,e.return,n)}try{$u(5,e,e.return)}catch(n){ps(e,e.return,n)}}break;case 1:ri(n,e),ai(e),512&r&&null!==t&&Hu(t,t.return);break;case 5:if(ri(n,e),ai(e),512&r&&null!==t&&Hu(t,t.return),32&e.flags){var l=e.stateNode;try{ce(l,"")}catch(n){ps(e,e.return,n)}}if(4&r&&null!=(l=e.stateNode)){var o=e.memoizedProps,u=null!==t?t.memoizedProps:o,i=e.type,s=e.updateQueue;if(e.updateQueue=null,null!==s)try{"input"===i&&"radio"===o.type&&null!=o.name&&X(l,o),ve(i,u);var c=ve(i,o);for(u=0;u<s.length;u+=2){var f=s[u],d=s[u+1];"style"===f?me(l,d):"dangerouslySetInnerHTML"===f?se(l,d):"children"===f?ce(l,d):b(l,f,d,c)}switch(i){case"input":G(l,o);break;case"textarea":le(l,o);break;case"select":var p=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var m=o.value;null!=m?ne(l,!!o.multiple,m,!1):p!==!!o.multiple&&(null!=o.defaultValue?ne(l,!!o.multiple,o.defaultValue,!0):ne(l,!!o.multiple,o.multiple?[]:"",!1))}l[ol]=o}catch(n){ps(e,e.return,n)}}break;case 6:if(ri(n,e),ai(e),4&r){if(null===e.stateNode)throw Error(a(162));c=e.stateNode,f=e.memoizedProps;try{c.nodeValue=f}catch(n){ps(e,e.return,n)}}break;case 3:if(ri(n,e),ai(e),4&r&&null!==t&&t.memoizedState.isDehydrated)try{Vn(n.containerInfo)}catch(n){ps(e,e.return,n)}break;case 4:ri(n,e),ai(e);break;case 13:ri(n,e),ai(e),8192&(c=e.child).flags&&null!==c.memoizedState&&(null===c.alternate||null===c.alternate.memoizedState)&&(Ti=qe()),4&r&&ti(e);break;case 22:if(c=null!==t&&null!==t.memoizedState,1&e.mode?(Vu=(f=Vu)||c,ri(n,e),Vu=f):ri(n,e),ai(e),8192&r){f=null!==e.memoizedState;e:for(d=null,p=e;;){if(5===p.tag){if(null===d){d=p;try{l=p.stateNode,f?"function"==typeof(o=l.style).setProperty?o.setProperty("display","none","important"):o.display="none":(i=p.stateNode,u=null!=(s=p.memoizedProps.style)&&s.hasOwnProperty("display")?s.display:null,i.style.display=pe("display",u))}catch(n){ps(e,e.return,n)}}}else if(6===p.tag){if(null===d)try{p.stateNode.nodeValue=f?"":p.memoizedProps}catch(n){ps(e,e.return,n)}}else if((22!==p.tag&&23!==p.tag||null===p.memoizedState||p===e)&&null!==p.child){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;null===p.sibling;){if(null===p.return||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}if(f&&!c&&0!=(1&e.mode))for(Wu=e,e=e.child;null!==e;){for(c=Wu=e;null!==Wu;){switch(d=(f=Wu).child,f.tag){case 0:case 11:case 14:case 15:$u(4,f,f.return);break;case 1:if(Hu(f,f.return),"function"==typeof(o=f.stateNode).componentWillUnmount){p=f,m=f.return;try{l=p,o.props=l.memoizedProps,o.state=l.memoizedState,o.componentWillUnmount()}catch(e){ps(p,m,e)}}break;case 5:Hu(f,f.return);break;case 22:if(null!==f.memoizedState){ii(c);continue}}null!==d?(d.return=f,Wu=d):ii(c)}e=e.sibling}}break;case 19:ri(n,e),ai(e),4&r&&ti(e);break;case 21:break;default:ri(n,e),ai(e)}}function ai(e){var n=e.flags;if(2&n){try{e:{for(var t=e.return;null!==t;){if(Xu(t)){var r=t;break e}t=t.return}throw Error(a(160))}switch(r.tag){case 5:var l=r.stateNode;32&r.flags&&(ce(l,""),r.flags&=-33),function e(n,t,r){var l=n.tag;if(5===l||6===l)n=n.stateNode,t?r.insertBefore(n,t):r.appendChild(n);else if(4!==l&&null!==(n=n.child))for(e(n,t,r),n=n.sibling;null!==n;)e(n,t,r),n=n.sibling}(e,Gu(e),l);break;case 3:case 4:var o=r.stateNode.containerInfo;!function e(n,t,r){var l=n.tag;if(5===l||6===l)n=n.stateNode,t?8===r.nodeType?r.parentNode.insertBefore(n,t):r.insertBefore(n,t):(8===r.nodeType?(t=r.parentNode).insertBefore(n,r):(t=r).appendChild(n),null!=(r=r._reactRootContainer)||null!==t.onclick||(t.onclick=$r));else if(4!==l&&null!==(n=n.child))for(e(n,t,r),n=n.sibling;null!==n;)e(n,t,r),n=n.sibling}(e,Gu(e),o);break;default:throw Error(a(161))}}catch(n){ps(e,e.return,n)}e.flags&=-3}4096&n&&(e.flags&=-4097)}function oi(e,n,t){Wu=e,function e(n,t,r){for(var l=0!=(1&n.mode);null!==Wu;){var a=Wu,o=a.child;if(22===a.tag&&l){var u=null!==a.memoizedState||Au;if(!u){var i=a.alternate,s=null!==i&&null!==i.memoizedState||Vu;i=Au;var c=Vu;if(Au=u,(Vu=s)&&!c)for(Wu=a;null!==Wu;)s=(u=Wu).child,22===u.tag&&null!==u.memoizedState?si(a):null!==s?(s.return=u,Wu=s):si(a);for(;null!==o;)Wu=o,e(o,t,r),o=o.sibling;Wu=a,Au=i,Vu=c}ui(n)}else 0!=(8772&a.subtreeFlags)&&null!==o?(o.return=a,Wu=o):ui(n)}}(e,n,t)}function ui(e){for(;null!==Wu;){var n=Wu;if(0!=(8772&n.flags)){var t=n.alternate;try{if(0!=(8772&n.flags))switch(n.tag){case 0:case 11:case 15:Vu||Ku(5,n);break;case 1:var r=n.stateNode;if(4&n.flags&&!Vu)if(null===t)r.componentDidMount();else{var l=n.elementType===n.type?t.memoizedProps:Rl(n.type,t.memoizedProps);r.componentDidUpdate(l,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;null!==o&&ta(n,o,r);break;case 3:var u=n.updateQueue;if(null!==u){if(t=null,null!==n.child)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}ta(n,u,t)}break;case 5:var i=n.stateNode;if(null===t&&4&n.flags){t=i;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:case 4:case 12:break;case 13:if(null===n.memoizedState){var c=n.alternate;if(null!==c){var f=c.memoizedState;if(null!==f){var d=f.dehydrated;null!==d&&Vn(d)}}}break;case 19:case 17:case 21:case 22:case 23:break;default:throw Error(a(163))}Vu||512&n.flags&&qu(n)}catch(e){ps(n,n.return,e)}}if(n===e){Wu=null;break}if(null!==(t=n.sibling)){t.return=n.return,Wu=t;break}Wu=n.return}}function ii(e){for(;null!==Wu;){var n=Wu;if(n===e){Wu=null;break}var t=n.sibling;if(null!==t){t.return=n.return,Wu=t;break}Wu=n.return}}function si(e){for(;null!==Wu;){var n=Wu;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Ku(4,n)}catch(e){ps(n,t,e)}break;case 1:var r=n.stateNode;if("function"==typeof r.componentDidMount){var l=n.return;try{r.componentDidMount()}catch(e){ps(n,l,e)}}var a=n.return;try{qu(n)}catch(e){ps(n,a,e)}break;case 5:var o=n.return;try{qu(n)}catch(e){ps(n,o,e)}}}catch(e){ps(n,n.return,e)}if(n===e){Wu=null;break}var u=n.sibling;if(null!==u){u.return=n.return,Wu=u;break}Wu=n.return}}var ci,fi=Math.ceil,di=k.ReactCurrentDispatcher,pi=k.ReactCurrentOwner,mi=k.ReactCurrentBatchConfig,hi=0,gi=null,vi=null,yi=0,bi=0,ki=vl(0),wi=0,Si=null,xi=0,Ei=0,Ci=0,_i=null,zi=null,Ti=0,Ni=1/0,Pi=null,Li=!1,Mi=null,Fi=null,Ii=!1,Oi=null,Di=0,Ri=0,Ui=null,Ai=-1,Vi=0;function Bi(){return 0!=(6&hi)?qe():-1!==Ai?Ai:Ai=qe()}function Wi(e){return 0==(1&e.mode)?1:0!=(2&hi)&&0!==yi?yi&-yi:null!==Dl.transition?(0===Vi&&(Vi=pn()),Vi):0!==(e=vn)?e:e=void 0===(e=window.event)?16:qn(e.type)}function Hi(e,n,t){if(50<Ri)throw Ri=0,Ui=null,Error(a(185));var r=Qi(e,n);return null===r?null:(hn(r,n,t),0!=(2&hi)&&r===gi||(r===gi&&(0==(2&hi)&&(Ei|=n),4===wi&&Xi(r,yi)),$i(r,t),1===n&&0===hi&&0==(1&e.mode)&&(Ni=qe()+500,Ml&&Ol())),r)}function Qi(e,n){e.lanes|=n;var t=e.alternate;for(null!==t&&(t.lanes|=n),t=e,e=e.return;null!==e;)e.childLanes|=n,null!==(t=e.alternate)&&(t.childLanes|=n),t=e,e=e.return;return 3===t.tag?t.stateNode:null}function ji(e){return(null!==gi||null!==Kl)&&0!=(1&e.mode)&&0==(2&hi)}function $i(e,n){var t=e.callbackNode;!function(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-rn(a),u=1<<o,i=l[o];-1===i?0!=(u&t)&&0==(u&r)||(l[o]=fn(u,n)):i<=n&&(e.expiredLanes|=u),a&=~u}}(e,n);var r=cn(e,e===gi?yi:0);if(0===r)null!==t&&je(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(null!=t&&je(t),1===n)0===e.tag?function(e){Ml=!0,Il(e)}(Gi.bind(null,e)):Il(Gi.bind(null,e)),Zr((function(){0===hi&&Ol()})),t=null;else{switch(yn(r)){case 1:t=Xe;break;case 4:t=Ge;break;case 16:t=Je;break;case 536870912:t=en;break;default:t=Je}t=ys(t,Ki.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Ki(e,n){if(Ai=-1,Vi=0,0!=(6&hi))throw Error(a(327));var t=e.callbackNode;if(fs()&&e.callbackNode!==t)return null;var r=cn(e,e===gi?yi:0);if(0===r)return null;if(0!=(30&r)||0!=(r&e.expiredLanes)||n)n=as(e,r);else{n=r;var l=hi;hi|=2;var o=rs();for(gi===e&&yi===n||(Pi=null,Ni=qe()+500,ns(e,n));;)try{us();break}catch(n){ts(e,n)}Wl(),di.current=o,hi=l,null!==vi?n=0:(gi=null,yi=0,n=wi)}if(0!==n){if(2===n&&(0!==(l=dn(e))&&(r=l,n=qi(e,l))),1===n)throw t=Si,ns(e,0),Xi(e,r),$i(e,qe()),t;if(6===n)Xi(e,r);else{if(l=e.current.alternate,0==(30&r)&&!function(e){for(var n=e;;){if(16384&n.flags){var t=n.updateQueue;if(null!==t&&null!==(t=t.stores))for(var r=0;r<t.length;r++){var l=t[r],a=l.getSnapshot;l=l.value;try{if(!nr(a(),l))return!1}catch(e){return!1}}}if(t=n.child,16384&n.subtreeFlags&&null!==t)t.return=n,n=t;else{if(n===e)break;for(;null===n.sibling;){if(null===n.return||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}(l)&&(2===(n=as(e,r))&&(0!==(o=dn(e))&&(r=o,n=qi(e,o))),1===n))throw t=Si,ns(e,0),Xi(e,r),$i(e,qe()),t;switch(e.finishedWork=l,e.finishedLanes=r,n){case 0:case 1:throw Error(a(345));case 2:cs(e,zi,Pi);break;case 3:if(Xi(e,r),(130023424&r)===r&&10<(n=Ti+500-qe())){if(0!==cn(e,0))break;if(((l=e.suspendedLanes)&r)!==r){Bi(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Xr(cs.bind(null,e,zi,Pi),n);break}cs(e,zi,Pi);break;case 4:if(Xi(e,r),(4194240&r)===r)break;for(n=e.eventTimes,l=-1;0<r;){var u=31-rn(r);o=1<<u,(u=n[u])>l&&(l=u),r&=~o}if(r=l,10<(r=(120>(r=qe()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*fi(r/1960))-r)){e.timeoutHandle=Xr(cs.bind(null,e,zi,Pi),r);break}cs(e,zi,Pi);break;case 5:cs(e,zi,Pi);break;default:throw Error(a(329))}}}return $i(e,qe()),e.callbackNode===t?Ki.bind(null,e):null}function qi(e,n){var t=_i;return e.current.memoizedState.isDehydrated&&(ns(e,n).flags|=256),2!==(e=as(e,n))&&(n=zi,zi=t,null!==n&&Yi(n)),e}function Yi(e){null===zi?zi=e:zi.push.apply(zi,e)}function Xi(e,n){for(n&=~Ci,n&=~Ei,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-rn(n),r=1<<t;e[t]=-1,n&=~r}}function Gi(e){if(0!=(6&hi))throw Error(a(327));fs();var n=cn(e,0);if(0==(1&n))return $i(e,qe()),null;var t=as(e,n);if(0!==e.tag&&2===t){var r=dn(e);0!==r&&(n=r,t=qi(e,r))}if(1===t)throw t=Si,ns(e,0),Xi(e,n),$i(e,qe()),t;if(6===t)throw Error(a(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,cs(e,zi,Pi),$i(e,qe()),null}function Ji(e,n){var t=hi;hi|=1;try{return e(n)}finally{0===(hi=t)&&(Ni=qe()+500,Ml&&Ol())}}function Zi(e){null!==Oi&&0===Oi.tag&&0==(6&hi)&&fs();var n=hi;hi|=1;var t=mi.transition,r=vn;try{if(mi.transition=null,vn=1,e)return e()}finally{vn=r,mi.transition=t,0==(6&(hi=n))&&Ol()}}function es(){bi=ki.current,yl(ki)}function ns(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(-1!==t&&(e.timeoutHandle=-1,Gr(t)),null!==vi)for(t=vi.return;null!==t;){var r=t;switch(Sa(r),r.tag){case 1:null!=(r=r.type.childContextTypes)&&_l();break;case 3:Ka(),yl(Sl),yl(wl),Za();break;case 5:Ya(r);break;case 4:Ka();break;case 13:case 19:yl(Xa);break;case 10:Hl(r.type._context);break;case 22:case 23:es()}t=t.return}if(gi=e,vi=e=Ss(e.current,null),yi=bi=n,wi=0,Si=null,Ci=Ei=xi=0,zi=_i=null,null!==Kl){for(n=0;n<Kl.length;n++)if(null!==(r=(t=Kl[n]).interleaved)){t.interleaved=null;var l=r.next,a=t.pending;if(null!==a){var o=a.next;a.next=l,r.next=o}t.pending=r}Kl=null}return e}function ts(e,n){for(;;){var t=vi;try{if(Wl(),eo.current=Yo,oo){for(var r=ro.memoizedState;null!==r;){var l=r.queue;null!==l&&(l.pending=null),r=r.next}oo=!1}if(to=0,ao=lo=ro=null,uo=!1,io=0,pi.current=null,null===t||null===t.return){wi=1,Si=n,vi=null;break}e:{var o=e,u=t.return,i=t,s=n;if(n=yi,i.flags|=32768,null!==s&&"object"==typeof s&&"function"==typeof s.then){var c=s,f=i,d=f.tag;if(0==(1&f.mode)&&(0===d||11===d||15===d)){var p=f.alternate;p?(f.updateQueue=p.updateQueue,f.memoizedState=p.memoizedState,f.lanes=p.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=iu(u);if(null!==m){m.flags&=-257,su(m,u,i,0,n),1&m.mode&&uu(o,c,n),s=c;var h=(n=m).updateQueue;if(null===h){var g=new Set;g.add(s),n.updateQueue=g}else h.add(s);break e}if(0==(1&n)){uu(o,c,n),ls();break e}s=Error(a(426))}else if(Ca&&1&i.mode){var v=iu(u);if(null!==v){0==(65536&v.flags)&&(v.flags|=256),su(v,u,i,0,n),Ia(s);break e}}o=s,4!==wi&&(wi=2),null===_i?_i=[o]:_i.push(o),s=Zo(s,i),i=u;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n,ea(i,au(0,s,n));break e;case 1:o=s;var y=i.type,b=i.stateNode;if(0==(128&i.flags)&&("function"==typeof y.getDerivedStateFromError||null!==b&&"function"==typeof b.componentDidCatch&&(null===Fi||!Fi.has(b)))){i.flags|=65536,n&=-n,i.lanes|=n,ea(i,ou(i,o,n));break e}}i=i.return}while(null!==i)}ss(t)}catch(e){n=e,vi===t&&null!==t&&(vi=t=t.return);continue}break}}function rs(){var e=di.current;return di.current=Yo,null===e?Yo:e}function ls(){0!==wi&&3!==wi&&2!==wi||(wi=4),null===gi||0==(268435455&xi)&&0==(268435455&Ei)||Xi(gi,yi)}function as(e,n){var t=hi;hi|=2;var r=rs();for(gi===e&&yi===n||(Pi=null,ns(e,n));;)try{os();break}catch(n){ts(e,n)}if(Wl(),hi=t,di.current=r,null!==vi)throw Error(a(261));return gi=null,yi=0,wi}function os(){for(;null!==vi;)is(vi)}function us(){for(;null!==vi&&!$e();)is(vi)}function is(e){var n=ci(e.alternate,e,bi);e.memoizedProps=e.pendingProps,null===n?ss(e):vi=n,pi.current=null}function ss(e){var n=e;do{var t=n.alternate;if(e=n.return,0==(32768&n.flags)){if(null!==(t=du(t,n,bi)))return void(vi=t)}else{if(null!==(t=Uu(t,n)))return t.flags&=32767,void(vi=t);if(null===e)return wi=6,void(vi=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(n=n.sibling))return void(vi=n);vi=n=e}while(null!==n);0===wi&&(wi=5)}function cs(e,n,t){var r=vn,l=mi.transition;try{mi.transition=null,vn=1,function(e,n,t,r){do{fs()}while(null!==Oi);if(0!=(6&hi))throw Error(a(327));t=e.finishedWork;var l=e.finishedLanes;if(null===t)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(a(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(function(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var l=31-rn(t),a=1<<l;n[l]=0,r[l]=-1,e[l]=-1,t&=~a}}(e,o),e===gi&&(vi=gi=null,yi=0),0==(2064&t.subtreeFlags)&&0==(2064&t.flags)||Ii||(Ii=!0,ys(Je,(function(){return fs(),null}))),o=0!=(15990&t.flags),0!=(15990&t.subtreeFlags)||o){o=mi.transition,mi.transition=null;var u=vn;vn=1;var i=hi;hi|=4,pi.current=null,function(e,n){if(Kr=Wn,or(e=ar())){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(t=(t=e.ownerDocument)&&t.defaultView||window).getSelection&&t.getSelection();if(r&&0!==r.rangeCount){t=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{t.nodeType,o.nodeType}catch(e){t=null;break e}var u=0,i=-1,s=-1,c=0,f=0,d=e,p=null;n:for(;;){for(var m;d!==t||0!==l&&3!==d.nodeType||(i=u+l),d!==o||0!==r&&3!==d.nodeType||(s=u+r),3===d.nodeType&&(u+=d.nodeValue.length),null!==(m=d.firstChild);)p=d,d=m;for(;;){if(d===e)break n;if(p===t&&++c===l&&(i=u),p===o&&++f===r&&(s=u),null!==(m=d.nextSibling))break;p=(d=p).parentNode}d=m}t=-1===i||-1===s?null:{start:i,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(qr={focusedElem:e,selectionRange:t},Wn=!1,Wu=n;null!==Wu;)if(e=(n=Wu).child,0!=(1028&n.subtreeFlags)&&null!==e)e.return=n,Wu=e;else for(;null!==Wu;){n=Wu;try{var h=n.alternate;if(0!=(1024&n.flags))switch(n.tag){case 0:case 11:case 15:break;case 1:if(null!==h){var g=h.memoizedProps,v=h.memoizedState,y=n.stateNode,b=y.getSnapshotBeforeUpdate(n.elementType===n.type?g:Rl(n.type,g),v);y.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var k=n.stateNode.containerInfo;if(1===k.nodeType)k.textContent="";else if(9===k.nodeType){var w=k.body;null!=w&&(w.textContent="")}break;case 5:case 6:case 4:case 17:break;default:throw Error(a(163))}}catch(e){ps(n,n.return,e)}if(null!==(e=n.sibling)){e.return=n.return,Wu=e;break}Wu=n.return}h=ju,ju=!1}(e,t),li(t,e),ur(qr),Wn=!!Kr,qr=Kr=null,e.current=t,oi(t,e,l),Ke(),hi=i,vn=u,mi.transition=o}else e.current=t;if(Ii&&(Ii=!1,Oi=e,Di=l),0===(o=e.pendingLanes)&&(Fi=null),function(e){if(tn&&"function"==typeof tn.onCommitFiberRoot)try{tn.onCommitFiberRoot(nn,e,void 0,128==(128&e.current.flags))}catch(e){}}(t.stateNode),$i(e,qe()),null!==n)for(r=e.onRecoverableError,t=0;t<n.length;t++)r(n[t]);if(Li)throw Li=!1,e=Mi,Mi=null,e;0!=(1&Di)&&0!==e.tag&&fs(),0!=(1&(o=e.pendingLanes))?e===Ui?Ri++:(Ri=0,Ui=e):Ri=0,Ol()}(e,n,t,r)}finally{mi.transition=l,vn=r}return null}function fs(){if(null!==Oi){var e=yn(Di),n=mi.transition,t=vn;try{if(mi.transition=null,vn=16>e?16:e,null===Oi)var r=!1;else{if(e=Oi,Oi=null,Di=0,0!=(6&hi))throw Error(a(331));var l=hi;for(hi|=4,Wu=e.current;null!==Wu;){var o=Wu,u=o.child;if(0!=(16&Wu.flags)){var i=o.deletions;if(null!==i){for(var s=0;s<i.length;s++){var c=i[s];for(Wu=c;null!==Wu;){var f=Wu;switch(f.tag){case 0:case 11:case 15:$u(8,f,o)}var d=f.child;if(null!==d)d.return=f,Wu=d;else for(;null!==Wu;){var p=(f=Wu).sibling,m=f.return;if(Yu(f),f===c){Wu=null;break}if(null!==p){p.return=m,Wu=p;break}Wu=m}}}var h=o.alternate;if(null!==h){var g=h.child;if(null!==g){h.child=null;do{var v=g.sibling;g.sibling=null,g=v}while(null!==g)}}Wu=o}}if(0!=(2064&o.subtreeFlags)&&null!==u)u.return=o,Wu=u;else e:for(;null!==Wu;){if(0!=(2048&(o=Wu).flags))switch(o.tag){case 0:case 11:case 15:$u(9,o,o.return)}var y=o.sibling;if(null!==y){y.return=o.return,Wu=y;break e}Wu=o.return}}var b=e.current;for(Wu=b;null!==Wu;){var k=(u=Wu).child;if(0!=(2064&u.subtreeFlags)&&null!==k)k.return=u,Wu=k;else e:for(u=b;null!==Wu;){if(0!=(2048&(i=Wu).flags))try{switch(i.tag){case 0:case 11:case 15:Ku(9,i)}}catch(e){ps(i,i.return,e)}if(i===u){Wu=null;break e}var w=i.sibling;if(null!==w){w.return=i.return,Wu=w;break e}Wu=i.return}}if(hi=l,Ol(),tn&&"function"==typeof tn.onPostCommitFiberRoot)try{tn.onPostCommitFiberRoot(nn,e)}catch(e){}r=!0}return r}finally{vn=t,mi.transition=n}}return!1}function ds(e,n,t){Jl(e,n=au(0,n=Zo(t,n),1)),n=Bi(),null!==(e=Qi(e,1))&&(hn(e,1,n),$i(e,n))}function ps(e,n,t){if(3===e.tag)ds(e,e,t);else for(;null!==n;){if(3===n.tag){ds(n,e,t);break}if(1===n.tag){var r=n.stateNode;if("function"==typeof n.type.getDerivedStateFromError||"function"==typeof r.componentDidCatch&&(null===Fi||!Fi.has(r))){Jl(n,e=ou(n,e=Zo(t,e),1)),e=Bi(),null!==(n=Qi(n,1))&&(hn(n,1,e),$i(n,e));break}}n=n.return}}function ms(e,n,t){var r=e.pingCache;null!==r&&r.delete(n),n=Bi(),e.pingedLanes|=e.suspendedLanes&t,gi===e&&(yi&t)===t&&(4===wi||3===wi&&(130023424&yi)===yi&&500>qe()-Ti?ns(e,0):Ci|=t),$i(e,n)}function hs(e,n){0===n&&(0==(1&e.mode)?n=1:(n=un,0==(130023424&(un<<=1))&&(un=4194304)));var t=Bi();null!==(e=Qi(e,n))&&(hn(e,n,t),$i(e,t))}function gs(e){var n=e.memoizedState,t=0;null!==n&&(t=n.retryLane),hs(e,t)}function vs(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;null!==l&&(t=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(a(314))}null!==r&&r.delete(n),hs(e,t)}function ys(e,n){return Qe(e,n)}function bs(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ks(e,n,t,r){return new bs(e,n,t,r)}function ws(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Ss(e,n){var t=e.alternate;return null===t?((t=ks(e.tag,n,e.key,e.mode)).elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=14680064&e.flags,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=null===n?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function xs(e,n,t,r,l,o){var u=2;if(r=e,"function"==typeof e)ws(e)&&(u=1);else if("string"==typeof e)u=5;else e:switch(e){case x:return Es(t.children,l,o,n);case E:u=8,l|=8;break;case C:return(e=ks(12,t,n,2|l)).elementType=C,e.lanes=o,e;case N:return(e=ks(13,t,n,l)).elementType=N,e.lanes=o,e;case P:return(e=ks(19,t,n,l)).elementType=P,e.lanes=o,e;case F:return Cs(t,l,o,n);default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case _:u=10;break e;case z:u=9;break e;case T:u=11;break e;case L:u=14;break e;case M:u=16,r=null;break e}throw Error(a(130,null==e?e:typeof e,""))}return(n=ks(u,t,n,l)).elementType=e,n.type=r,n.lanes=o,n}function Es(e,n,t,r){return(e=ks(7,e,r,n)).lanes=t,e}function Cs(e,n,t,r){return(e=ks(22,e,r,n)).elementType=F,e.lanes=t,e.stateNode={},e}function _s(e,n,t){return(e=ks(6,e,null,n)).lanes=t,e}function zs(e,n,t){return(n=ks(4,null!==e.children?e.children:[],e.key,n)).lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Ts(e,n,t,r,l){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mn(0),this.expirationTimes=mn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mn(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Ns(e,n,t,r,l,a,o,u,i){return e=new Ts(e,n,t,u,i),1===n?(n=1,!0===a&&(n|=8)):n=0,a=ks(3,null,null,n),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yl(a),e}function Ps(e,n,t){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:S,key:null==r?null:""+r,children:e,containerInfo:n,implementation:t}}function Ls(e){if(!e)return kl;e:{if(Ve(e=e._reactInternals)!==e||1!==e.tag)throw Error(a(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Cl(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(null!==n);throw Error(a(171))}if(1===e.tag){var t=e.type;if(Cl(t))return Tl(e,t,n)}return n}function Ms(e,n,t,r,l,a,o,u,i){return(e=Ns(t,r,!0,e,0,a,0,u,i)).context=Ls(null),t=e.current,(a=Gl(r=Bi(),l=Wi(t))).callback=null!=n?n:null,Jl(t,a),e.current.lanes=l,hn(e,l,r),$i(e,r),e}function Fs(e,n,t,r){var l=n.current,a=Bi(),o=Wi(l);return t=Ls(t),null===n.context?n.context=t:n.pendingContext=t,(n=Gl(a,o)).payload={element:e},null!==(r=void 0===r?null:r)&&(n.callback=r),Jl(l,n),null!==(e=Hi(l,o,a))&&Zl(e,l,o),o}function Is(e){if(!(e=e.current).child)return null;switch(e.child.tag){case 5:default:return e.child.stateNode}}function Os(e,n){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var t=e.retryLane;e.retryLane=0!==t&&t<n?t:n}}function Ds(e,n){Os(e,n),(e=e.alternate)&&Os(e,n)}ci=function(e,n,t){if(null!==e)if(e.memoizedProps!==n.pendingProps||Sl.current)mu=!0;else{if(0==(e.lanes&t)&&0==(128&n.flags))return mu=!1,function(e,n,t){switch(n.tag){case 3:Eu(n),Fa();break;case 5:qa(n);break;case 1:Cl(n.type)&&Nl(n);break;case 4:$a(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,l=n.memoizedProps.value;bl(Ul,r._currentValue),r._currentValue=l;break;case 13:if(null!==(r=n.memoizedState))return null!==r.dehydrated?(bl(Xa,1&Xa.current),n.flags|=128,null):0!=(t&n.child.childLanes)?Nu(e,n,t):(bl(Xa,1&Xa.current),null!==(e=Ru(e,n,t))?e.sibling:null);bl(Xa,1&Xa.current);break;case 19:if(r=0!=(t&n.childLanes),0!=(128&e.flags)){if(r)return Du(e,n,t);n.flags|=128}if(null!==(l=n.memoizedState)&&(l.rendering=null,l.tail=null,l.lastEffect=null),bl(Xa,Xa.current),r)break;return null;case 22:case 23:return n.lanes=0,bu(e,n,t)}return Ru(e,n,t)}(e,n,t);mu=0!=(131072&e.flags)}else mu=!1,Ca&&0!=(1048576&n.flags)&&ka(n,pa,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;null!==e&&(e.alternate=null,n.alternate=null,n.flags|=2),e=n.pendingProps;var l=El(n,wl.current);jl(n,t),l=po(null,n,r,e,l,t);var o=mo();return n.flags|=1,"object"==typeof l&&null!==l&&"function"==typeof l.render&&void 0===l.$$typeof?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Cl(r)?(o=!0,Nl(n)):o=!1,n.memoizedState=null!==l.state&&void 0!==l.state?l.state:null,Yl(n),l.updater=aa,n.stateNode=l,l._reactInternals=n,sa(n,r,e,t),n=xu(null,n,r,!0,o,t)):(n.tag=0,Ca&&o&&wa(n),hu(null,n,l,t),n=n.child),n;case 16:r=n.elementType;e:{switch(null!==e&&(e.alternate=null,n.alternate=null,n.flags|=2),e=n.pendingProps,r=(l=r._init)(r._payload),n.type=r,l=n.tag=function(e){if("function"==typeof e)return ws(e)?1:0;if(null!=e){if((e=e.$$typeof)===T)return 11;if(e===L)return 14}return 2}(r),e=Rl(r,e),l){case 0:n=wu(null,n,r,e,t);break e;case 1:n=Su(null,n,r,e,t);break e;case 11:n=gu(null,n,r,e,t);break e;case 14:n=vu(null,n,r,Rl(r.type,e),t);break e}throw Error(a(306,r,""))}return n;case 0:return r=n.type,l=n.pendingProps,wu(e,n,r,l=n.elementType===r?l:Rl(r,l),t);case 1:return r=n.type,l=n.pendingProps,Su(e,n,r,l=n.elementType===r?l:Rl(r,l),t);case 3:e:{if(Eu(n),null===e)throw Error(a(387));r=n.pendingProps,l=(o=n.memoizedState).element,Xl(e,n),na(n,r,null,t);var u=n.memoizedState;if(r=u.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:u.cache,pendingSuspenseBoundaries:u.pendingSuspenseBoundaries,transitions:u.transitions},n.updateQueue.baseState=o,n.memoizedState=o,256&n.flags){n=Cu(e,n,r,t,l=Error(a(423)));break e}if(r!==l){n=Cu(e,n,r,t,l=Error(a(424)));break e}for(Ea=tl(n.stateNode.containerInfo.firstChild),xa=n,Ca=!0,_a=null,t=Va(n,null,r,t),n.child=t;t;)t.flags=-3&t.flags|4096,t=t.sibling}else{if(Fa(),r===l){n=Ru(e,n,t);break e}hu(e,n,r,t)}n=n.child}return n;case 5:return qa(n),null===e&&Pa(n),r=n.type,l=n.pendingProps,o=null!==e?e.memoizedProps:null,u=l.children,Yr(r,l)?u=null:null!==o&&Yr(r,o)&&(n.flags|=32),ku(e,n),hu(e,n,u,t),n.child;case 6:return null===e&&Pa(n),null;case 13:return Nu(e,n,t);case 4:return $a(n,n.stateNode.containerInfo),r=n.pendingProps,null===e?n.child=Aa(n,null,r,t):hu(e,n,r,t),n.child;case 11:return r=n.type,l=n.pendingProps,gu(e,n,r,l=n.elementType===r?l:Rl(r,l),t);case 7:return hu(e,n,n.pendingProps,t),n.child;case 8:case 12:return hu(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,l=n.pendingProps,o=n.memoizedProps,u=l.value,bl(Ul,r._currentValue),r._currentValue=u,null!==o)if(nr(o.value,u)){if(o.children===l.children&&!Sl.current){n=Ru(e,n,t);break e}}else for(null!==(o=n.child)&&(o.return=n);null!==o;){var i=o.dependencies;if(null!==i){u=o.child;for(var s=i.firstContext;null!==s;){if(s.context===r){if(1===o.tag){(s=Gl(-1,t&-t)).tag=2;var c=o.updateQueue;if(null!==c){var f=(c=c.shared).pending;null===f?s.next=s:(s.next=f.next,f.next=s),c.pending=s}}o.lanes|=t,null!==(s=o.alternate)&&(s.lanes|=t),Ql(o.return,t,n),i.lanes|=t;break}s=s.next}}else if(10===o.tag)u=o.type===n.type?null:o.child;else if(18===o.tag){if(null===(u=o.return))throw Error(a(341));u.lanes|=t,null!==(i=u.alternate)&&(i.lanes|=t),Ql(u,t,n),u=o.sibling}else u=o.child;if(null!==u)u.return=o;else for(u=o;null!==u;){if(u===n){u=null;break}if(null!==(o=u.sibling)){o.return=u.return,u=o;break}u=u.return}o=u}hu(e,n,l.children,t),n=n.child}return n;case 9:return l=n.type,r=n.pendingProps.children,jl(n,t),r=r(l=$l(l)),n.flags|=1,hu(e,n,r,t),n.child;case 14:return l=Rl(r=n.type,n.pendingProps),vu(e,n,r,l=Rl(r.type,l),t);case 15:return yu(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Rl(r,l),null!==e&&(e.alternate=null,n.alternate=null,n.flags|=2),n.tag=1,Cl(r)?(e=!0,Nl(n)):e=!1,jl(n,t),ua(n,r,l),sa(n,r,l,t),xu(null,n,r,!0,e,t);case 19:return Du(e,n,t);case 22:return bu(e,n,t)}throw Error(a(156,n.tag))};var Rs="function"==typeof reportError?reportError:function(e){console.error(e)};function Us(e){this._internalRoot=e}function As(e){this._internalRoot=e}function Vs(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Bs(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Ws(){}function Hs(e,n,t,r,l){var a=t._reactRootContainer;if(a){var o=a;if("function"==typeof l){var u=l;l=function(){var e=Is(o);u.call(e)}}Fs(n,o,e,l)}else o=function(e,n,t,r,l){if(l){if("function"==typeof r){var a=r;r=function(){var e=Is(o);a.call(e)}}var o=Ms(n,r,e,0,null,!1,0,"",Ws);return e._reactRootContainer=o,e[ul]=o.current,Or(8===e.nodeType?e.parentNode:e),Zi(),o}for(;l=e.lastChild;)e.removeChild(l);if("function"==typeof r){var u=r;r=function(){var e=Is(i);u.call(e)}}var i=Ns(e,0,!1,null,0,!1,0,"",Ws);return e._reactRootContainer=i,e[ul]=i.current,Or(8===e.nodeType?e.parentNode:e),Zi((function(){Fs(n,i,t,r)})),i}(t,n,e,l,r);return Is(o)}As.prototype.render=Us.prototype.render=function(e){var n=this._internalRoot;if(null===n)throw Error(a(409));Fs(e,n,null,null)},As.prototype.unmount=Us.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var n=e.containerInfo;Zi((function(){Fs(null,e,null,null)})),n[ul]=null}},As.prototype.unstable_scheduleHydration=function(e){if(e){var n=Sn();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Ln.length&&0!==n&&n<Ln[t].priority;t++);Ln.splice(t,0,e),0===t&&On(e)}},bn=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=sn(n.pendingLanes);0!==t&&(gn(n,1|t),$i(n,qe()),0==(6&hi)&&(Ni=qe()+500,Ol()))}break;case 13:var r=Bi();Zi((function(){return Hi(e,1,r)})),Ds(e,1)}},kn=function(e){13===e.tag&&(Hi(e,134217728,Bi()),Ds(e,134217728))},wn=function(e){if(13===e.tag){var n=Bi(),t=Wi(e);Hi(e,t,n),Ds(e,t)}},Sn=function(){return vn},xn=function(e,n){var t=vn;try{return vn=e,n()}finally{vn=t}},ke=function(e,n,t){switch(n){case"input":if(G(e,t),n=t.name,"radio"===t.type&&null!=n){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var l=ml(r);if(!l)throw Error(a(90));$(r),G(r,l)}}}break;case"textarea":le(e,t);break;case"select":null!=(n=t.value)&&ne(e,!!t.multiple,n,!1)}},_e=Ji,ze=Zi;var Qs={usingClientEntryPoint:!1,Events:[dl,pl,ml,Ee,Ce,Ji]},js={findFiberByHostInstance:fl,bundleType:0,version:"18.1.0",rendererPackageName:"react-dom"},$s={bundleType:js.bundleType,version:js.version,rendererPackageName:js.rendererPackageName,rendererConfig:js.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:k.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=He(e))?null:e.stateNode},findFiberByHostInstance:js.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.1.0-next-22edb9f77-20220426"};if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var Ks=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ks.isDisabled&&Ks.supportsFiber)try{nn=Ks.inject($s),tn=Ks}catch(e){}}n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qs,n.createPortal=function(e,n){var t=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Vs(n))throw Error(a(200));return Ps(e,n,null,t)},n.createRoot=function(e,n){if(!Vs(e))throw Error(a(299));var t=!1,r="",l=Rs;return null!=n&&(!0===n.unstable_strictMode&&(t=!0),void 0!==n.identifierPrefix&&(r=n.identifierPrefix),void 0!==n.onRecoverableError&&(l=n.onRecoverableError)),n=Ns(e,1,!1,null,0,t,0,r,l),e[ul]=n.current,Or(8===e.nodeType?e.parentNode:e),new Us(n)},n.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var n=e._reactInternals;if(void 0===n){if("function"==typeof e.render)throw Error(a(188));throw e=Object.keys(e).join(","),Error(a(268,e))}return e=null===(e=He(n))?null:e.stateNode},n.flushSync=function(e){return Zi(e)},n.hydrate=function(e,n,t){if(!Bs(n))throw Error(a(200));return Hs(null,e,n,!0,t)},n.hydrateRoot=function(e,n,t){if(!Vs(e))throw Error(a(405));var r=null!=t&&t.hydratedSources||null,l=!1,o="",u=Rs;if(null!=t&&(!0===t.unstable_strictMode&&(l=!0),void 0!==t.identifierPrefix&&(o=t.identifierPrefix),void 0!==t.onRecoverableError&&(u=t.onRecoverableError)),n=Ms(n,null,e,1,null!=t?t:null,l,0,o,u),e[ul]=n.current,Or(e),r)for(e=0;e<r.length;e++)l=(l=(t=r[e])._getVersion)(t._source),null==n.mutableSourceEagerHydrationData?n.mutableSourceEagerHydrationData=[t,l]:n.mutableSourceEagerHydrationData.push(t,l);return new As(n)},n.render=function(e,n,t){if(!Bs(n))throw Error(a(200));return Hs(null,e,n,!1,t)},n.unmountComponentAtNode=function(e){if(!Bs(e))throw Error(a(40));return!!e._reactRootContainer&&(Zi((function(){Hs(null,null,e,!1,(function(){e._reactRootContainer=null,e[ul]=null}))})),!0)},n.unstable_batchedUpdates=Ji,n.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Bs(t))throw Error(a(200));if(null==e||void 0===e._reactInternals)throw Error(a(38));return Hs(e,n,t,!1,r)},n.version="18.1.0-next-22edb9f77-20220426"},153:function(e,n,t){"use strict";e.exports=t(154)},154:function(e,n,t){"use strict";(function(e){
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function t(e,n){var t=e.length;e.push(n);e:for(;0<t;){var r=t-1>>>1,l=e[r];if(!(0<a(l,n)))break e;e[r]=n,e[t]=l,t=r}}function r(e){return 0===e.length?null:e[0]}function l(e){if(0===e.length)return null;var n=e[0],t=e.pop();if(t!==n){e[0]=t;e:for(var r=0,l=e.length,o=l>>>1;r<o;){var u=2*(r+1)-1,i=e[u],s=u+1,c=e[s];if(0>a(i,t))s<l&&0>a(c,i)?(e[r]=c,e[s]=t,r=s):(e[r]=i,e[u]=t,r=u);else{if(!(s<l&&0>a(c,t)))break e;e[r]=c,e[s]=t,r=s}}}return n}function a(e,n){var t=e.sortIndex-n.sortIndex;return 0!==t?t:e.id-n.id}if("object"==typeof performance&&"function"==typeof performance.now){var o=performance;n.unstable_now=function(){return o.now()}}else{var u=Date,i=u.now();n.unstable_now=function(){return u.now()-i}}var s=[],c=[],f=1,d=null,p=3,m=!1,h=!1,g=!1,v="function"==typeof setTimeout?setTimeout:null,y="function"==typeof clearTimeout?clearTimeout:null,b=void 0!==e?e:null;function k(e){for(var n=r(c);null!==n;){if(null===n.callback)l(c);else{if(!(n.startTime<=e))break;l(c),n.sortIndex=n.expirationTime,t(s,n)}n=r(c)}}function w(e){if(g=!1,k(e),!h)if(null!==r(s))h=!0,F(S);else{var n=r(c);null!==n&&I(w,n.startTime-e)}}function S(e,t){h=!1,g&&(g=!1,y(_),_=-1),m=!0;var a=p;try{for(k(t),d=r(s);null!==d&&(!(d.expirationTime>t)||e&&!N());){var o=d.callback;if("function"==typeof o){d.callback=null,p=d.priorityLevel;var u=o(d.expirationTime<=t);t=n.unstable_now(),"function"==typeof u?d.callback=u:d===r(s)&&l(s),k(t)}else l(s);d=r(s)}if(null!==d)var i=!0;else{var f=r(c);null!==f&&I(w,f.startTime-t),i=!1}return i}finally{d=null,p=a,m=!1}}"undefined"!=typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var x,E=!1,C=null,_=-1,z=5,T=-1;function N(){return!(n.unstable_now()-T<z)}function P(){if(null!==C){var e=n.unstable_now();T=e;var t=!0;try{t=C(!0,e)}finally{t?x():(E=!1,C=null)}}else E=!1}if("function"==typeof b)x=function(){b(P)};else if("undefined"!=typeof MessageChannel){var L=new MessageChannel,M=L.port2;L.port1.onmessage=P,x=function(){M.postMessage(null)}}else x=function(){v(P,0)};function F(e){C=e,E||(E=!0,x())}function I(e,t){_=v((function(){e(n.unstable_now())}),t)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(e){e.callback=null},n.unstable_continueExecution=function(){h||m||(h=!0,F(S))},n.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<e?Math.floor(1e3/e):5},n.unstable_getCurrentPriorityLevel=function(){return p},n.unstable_getFirstCallbackNode=function(){return r(s)},n.unstable_next=function(e){switch(p){case 1:case 2:case 3:var n=3;break;default:n=p}var t=p;p=n;try{return e()}finally{p=t}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(e,n){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var t=p;p=e;try{return n()}finally{p=t}},n.unstable_scheduleCallback=function(e,l,a){var o=n.unstable_now();switch("object"==typeof a&&null!==a?a="number"==typeof(a=a.delay)&&0<a?o+a:o:a=o,e){case 1:var u=-1;break;case 2:u=250;break;case 5:u=1073741823;break;case 4:u=1e4;break;default:u=5e3}return e={id:f++,callback:l,priorityLevel:e,startTime:a,expirationTime:u=a+u,sortIndex:-1},a>o?(e.sortIndex=a,t(c,e),null===r(s)&&e===r(c)&&(g?(y(_),_=-1):g=!0,I(w,a-o))):(e.sortIndex=u,t(s,e),h||m||(h=!0,F(S))),e},n.unstable_shouldYield=N,n.unstable_wrapCallback=function(e){var n=p;return function(){var t=p;p=n;try{return e.apply(this,arguments)}finally{p=t}}}}).call(this,t(155).setImmediate)},155:function(e,n,t){(function(e){var r=void 0!==e&&e||"undefined"!=typeof self&&self||window,l=Function.prototype.apply;function a(e,n){this._id=e,this._clearFn=n}n.setTimeout=function(){return new a(l.call(setTimeout,r,arguments),clearTimeout)},n.setInterval=function(){return new a(l.call(setInterval,r,arguments),clearInterval)},n.clearTimeout=n.clearInterval=function(e){e&&e.close()},a.prototype.unref=a.prototype.ref=function(){},a.prototype.close=function(){this._clearFn.call(r,this._id)},n.enroll=function(e,n){clearTimeout(e._idleTimeoutId),e._idleTimeout=n},n.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},n._unrefActive=n.active=function(e){clearTimeout(e._idleTimeoutId);var n=e._idleTimeout;n>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),n))},t(156),n.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,n.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,t(26))},156:function(e,n,t){(function(e,n){!function(e,t){"use strict";if(!e.setImmediate){var r,l,a,o,u,i=1,s={},c=!1,f=e.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(e);d=d&&d.setTimeout?d:e,"[object process]"==={}.toString.call(e.process)?r=function(e){n.nextTick((function(){m(e)}))}:!function(){if(e.postMessage&&!e.importScripts){var n=!0,t=e.onmessage;return e.onmessage=function(){n=!1},e.postMessage("","*"),e.onmessage=t,n}}()?e.MessageChannel?((a=new MessageChannel).port1.onmessage=function(e){m(e.data)},r=function(e){a.port2.postMessage(e)}):f&&"onreadystatechange"in f.createElement("script")?(l=f.documentElement,r=function(e){var n=f.createElement("script");n.onreadystatechange=function(){m(e),n.onreadystatechange=null,l.removeChild(n),n=null},l.appendChild(n)}):r=function(e){setTimeout(m,0,e)}:(o="setImmediate$"+Math.random()+"$",u=function(n){n.source===e&&"string"==typeof n.data&&0===n.data.indexOf(o)&&m(+n.data.slice(o.length))},e.addEventListener?e.addEventListener("message",u,!1):e.attachEvent("onmessage",u),r=function(n){e.postMessage(o+n,"*")}),d.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var n=new Array(arguments.length-1),t=0;t<n.length;t++)n[t]=arguments[t+1];var l={callback:e,args:n};return s[i]=l,r(i),i++},d.clearImmediate=p}function p(e){delete s[e]}function m(e){if(c)setTimeout(m,0,e);else{var n=s[e];if(n){c=!0;try{!function(e){var n=e.callback,t=e.args;switch(t.length){case 0:n();break;case 1:n(t[0]);break;case 2:n(t[0],t[1]);break;case 3:n(t[0],t[1],t[2]);break;default:n.apply(void 0,t)}}(n)}finally{p(e),c=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,t(26),t(157))},157:function(e,n){var t,r,l=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function u(e){if(t===setTimeout)return setTimeout(e,0);if((t===a||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:a}catch(e){t=a}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var i,s=[],c=!1,f=-1;function d(){c&&i&&(c=!1,i.length?s=i.concat(s):f=-1,s.length&&p())}function p(){if(!c){var e=u(d);c=!0;for(var n=s.length;n;){for(i=s,s=[];++f<n;)i&&i[f].run();f=-1,n=s.length}i=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(n){try{return r.call(null,e)}catch(n){return r.call(this,e)}}}(e)}}function m(e,n){this.fun=e,this.array=n}function h(){}l.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];s.push(new m(e,n)),1!==s.length||c||u(p)},m.prototype.run=function(){this.fun.apply(null,this.array)},l.title="browser",l.browser=!0,l.env={},l.argv=[],l.version="",l.versions={},l.on=h,l.addListener=h,l.once=h,l.off=h,l.removeListener=h,l.removeAllListeners=h,l.emit=h,l.prependListener=h,l.prependOnceListener=h,l.listeners=function(e){return[]},l.binding=function(e){throw new Error("process.binding is not supported")},l.cwd=function(){return"/"},l.chdir=function(e){throw new Error("process.chdir is not supported")},l.umask=function(){return 0}},35:function(e,n,t){"use strict";!function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE){0;try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}}(),e.exports=t(152)}}]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-super-batch:split_react-dom', location = 'react-dom.js' */
(window.atlassianWebpackJsonp72e8e6db7d5e073657900987d0037a3a=window.atlassianWebpackJsonp72e8e6db7d5e073657900987d0037a3a||[]).push([[11],{151:function(a,e,d){"use strict";d.r(e);var n=d(35),s=d.n(n),t=d(2);Object(t.a)("react-dom",()=>({default:s.a,...n}))}},[[151,0,2,4,3,5,1]]]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-frontend:split_color-scheme~render-benefits-modal~theme-switcher~theme-switcher-listener~theme-switcher-loader', location = 'color-scheme~render-benefits-modal~theme-switcher~theme-switcher-listener~theme-switcher-loader.js' */
(window.atlassianWebpackJsonpe19a4f58490c3d96a3072d1e47cd0e73=window.atlassianWebpackJsonpe19a4f58490c3d96a3072d1e47cd0e73||[]).push([["color-scheme~render-benefits-modal~theme-switcher~theme-switcher-listener~theme-switcher-loader"],{73:function(e,a){e.exports=require("react-dom")}}]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-frontend:split_benefits~color-scheme~theme-switcher~theme-switcher-loader', location = 'benefits~color-scheme~theme-switcher~theme-switcher-loader.js' */
(window.atlassianWebpackJsonpe19a4f58490c3d96a3072d1e47cd0e73=window.atlassianWebpackJsonpe19a4f58490c3d96a3072d1e47cd0e73||[]).push([["benefits~color-scheme~theme-switcher~theme-switcher-loader"],{39:function(e,a){e.exports=require("confluence/api/constants")}}]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-frontend:split_copy-heading-link~render-benefits-modal~theme-switcher~theme-switcher-loader', location = 'copy-heading-link~render-benefits-modal~theme-switcher~theme-switcher-loader.js' */
(window.atlassianWebpackJsonpe19a4f58490c3d96a3072d1e47cd0e73=window.atlassianWebpackJsonpe19a4f58490c3d96a3072d1e47cd0e73||[]).push([["copy-heading-link~render-benefits-modal~theme-switcher~theme-switcher-loader"],{97:function(e,a){e.exports=require("confluence/api/event")}}]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-frontend:split_theme-switcher~theme-switcher-loader', location = 'theme-switcher~theme-switcher-loader.js' */
(window.atlassianWebpackJsonpe19a4f58490c3d96a3072d1e47cd0e73=window.atlassianWebpackJsonpe19a4f58490c3d96a3072d1e47cd0e73||[]).push([["theme-switcher~theme-switcher-loader"],{185:function(e,t,a){"use strict";a.r(t),a.d(t,"setTheme",(function(){return d})),a.d(t,"getTheme",(function(){return h}));var o=a(57),r=a(39),c=a(97),n=a(35);const l=(...e)=>{const t=new URL(...e),{attributes:a}=document.documentElement,o=a.getNamedItem("data-color-mode"),r=a.getNamedItem("data-theme");if(o&&r){const e=o.value,c=r.value,n=(c.match(/dark:([^\s]*)/i)?c.match(/dark:([^\s]*)/i):["",""])[1],l=(c.match(/light:([^\s]*)/i)?c.match(/light:([^\s]*)/i):["",""])[1],s=!!a.getNamedItem("data-color-mode-auto"),i=t.searchParams;return e&&i.set("atlThemeColorMode",e),n&&i.set("atlThemeDark",n),l&&i.set("atlThemeLight",l),i.set("atlThemeMatchUa",s?"true":"false"),t.href}return e[0]},s={light:{colorMode:"LIGHT",darkThemeKey:"dark",lightThemeKey:"light"},dark:{colorMode:"DARK",darkThemeKey:"dark",lightThemeKey:"light"},auto:{colorMode:"MATCHING",darkThemeKey:"dark",lightThemeKey:"light"}},i=Object.entries(s).reduce((e,[t,a])=>(e[t]="auto"===t?{...a,colorMode:"AUTO"}:a,e),{}),d=async(e,t)=>{try{t&&(await fetch(r.CONTEXT_PATH+"/rest/atlassian-theme/1/user-preferences",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s[e])}),Object(c.trigger)("analyticsEvent",{name:"confluence.thememode",data:{toggle:e}}));const a=document.getElementsByTagName("iframe");Array.from(a).forEach(t=>{var a;null===(a=t.contentWindow)||void 0===a||a.postMessage(JSON.stringify({...i[e],id:e,type:"theme.change"}),"*")}),localStorage.setItem("latest-theme-preference",e)}catch(t){t instanceof Error&&console.error(`Unable to set theme: ${e} - ${t.message}`)}},h=()=>{var e;const t=document.documentElement;if(null!==(null==t?void 0:t.getAttribute("data-color-mode-auto")))return"auto";return((null==t||null===(e=t.getAttribute("data-theme"))||void 0===e?void 0:e.split(" ").reduce((e,t)=>{const[a,o]=t.split(":");return e[a]=o,e},{}))||{})[null==t?void 0:t.getAttribute("data-color-mode")]},m=async(e,t=!0)=>{switch(await d(e,t),e){case"dark":Object(o.getDefaultThemes)().dark.onClick();break;case"light":Object(o.getDefaultThemes)().light.onClick();break;case"auto":Object(o.getDefaultThemes)().auto.onClick()}};window.addEventListener("pageshow",e=>{try{if(e.persisted){const e=localStorage.getItem("latest-theme-preference");null!==e&&e!==h()&&location.reload()}else(async()=>{try{localStorage.setItem("latest-theme-preference",h())}catch(e){console.error("Unable to store the latest theme preference",e)}})()}catch(e){console.error("Failed to handle themes across navigation",e)}}),Object(n.a)("confluence/theme-switcher",()=>({toThemeUrl:l,setTheme:m}))}}]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-frontend:split_theme-switcher-loader', location = 'theme-switcher-loader.js' */
(window.atlassianWebpackJsonpe19a4f58490c3d96a3072d1e47cd0e73=window.atlassianWebpackJsonpe19a4f58490c3d96a3072d1e47cd0e73||[]).push([["theme-switcher-loader"],{453:function(e,t,n){"use strict";n.r(t);var i=n(57),r=n.n(i),o=n(6),c=n(0),s=n.n(c),h=n(123),l=n(185);Object(i.loadMatchMediaTheme)(),document.addEventListener("DOMContentLoaded",()=>{var e;const t=null===(e=document.getElementById("theme-switcher"))||void 0===e?void 0:e.parentNode;if(t){const e=Object(i.getDefaultThemes)();e.light.label=""+"Light",e.dark.label=""+"Dark",e.auto.label=""+"Match system";Object(h.createRoot)(t).render(s.a.createElement(r.a,{themes:e,btnText:"Theme",getTheme:l.getTheme,onClick:e=>{Object(l.setTheme)(e,!0)}}))}})}},[[453,"manifest","vendors~backbone~color-scheme~copy-heading-link~date-time~deprecated-dialog~form-state-control~inlin~b2589942","vendors~backbone~copy-heading-link~date-time~deprecated-dialog~form-state-control~inline-dialog~jque~28f2adbc","vendors~benefits~color-scheme~copy-heading-link~date-time~skip-links~table-styles-editor~theme-switc~8335ef94","vendors~color-scheme~render-benefits-modal~theme-switcher~theme-switcher-listener~theme-switcher-loader","vendors~color-scheme~theme-switcher~theme-switcher-listener~theme-switcher-loader","vendors~render-benefits-modal~theme-switcher~theme-switcher-listener~theme-switcher-loader","vendors~theme-switcher~theme-switcher-listener~theme-switcher-loader","vendors~color-scheme~render-benefits-modal~theme-switcher-loader","copy-heading-link~date-time~deprecated-dialog~form-state-control~inline-dialog~locale~skip-links~tab~827d69cb","benefits~color-scheme~copy-heading-link~date-time~skip-links~table-styles-editor~theme-switcher~them~0355ead0","benefits~color-scheme~copy-heading-link~date-time~skip-links~table-styles-editor~theme-switcher-loader","color-scheme~render-benefits-modal~theme-switcher~theme-switcher-listener~theme-switcher-loader","benefits~color-scheme~theme-switcher~theme-switcher-loader","copy-heading-link~render-benefits-modal~theme-switcher~theme-switcher-loader","theme-switcher~theme-switcher-loader"]]]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-search-ui-plugin:search-ui-client-templates', location = 'soy/search-ui-client-templates.soy' */
// This file was automatically generated from search-ui-client-templates.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.SearchUI.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.SearchUI == 'undefined') { Confluence.Templates.SearchUI = {}; }


Confluence.Templates.SearchUI.helpUrl = function(opt_data, opt_ignored) {
  return '' + soy.$$escapeHtml("https:\/\/docs.atlassian.com\/confluence\/docs-92\/Search");
};
if (goog.DEBUG) {
  Confluence.Templates.SearchUI.helpUrl.soyTemplateName = 'Confluence.Templates.SearchUI.helpUrl';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-search-ui-plugin:confluence-search-ui-plugin-resources', location = '/js/confluence-search-ui-analytics-support.js' */
'use strict';

/**
 * Utility functions for publishing new search ui analytics
 * @module confluence/searchui/analytics-support
 */
define('confluence/search-ui/analytics-support', ['window', 'document', 'confluence/api/event', 'confluence/api/url'], function (window, document, eventApi, url) {
    "use strict";

    var SEARCH_UI_LEAVE_CONTENT_FROM_SEARCH_RESULT = 'confluence-search-ui-leave-content-from-new-search';
    var SEARCH_UI_EDIT_CONTENT_FROM_SEARCH_RESULT = 'confluence-search-ui-edit-content-from-new-search';
    /**
     * trigger analytic
     * @since 6.13.0
     * @public
     * @param name the analytic name
     * @param data the analytic data
     */
    function triggerAnalytic(name, data) {
        data = data || {};
        eventApi.trigger('analytics', { name: name, data: data });
    }

    /**
     * @param urlString
     * @returns {*} return array of searchId
     */
    function extractAnalyticsData(urlString) {
        var params = url.parse(urlString).queryParams;
        return params && params.searchId ? params.searchId : [];
    }

    /**
     * trigger period analytic event when beforeunload event happen
     * @param searchId searchId
     * @param period the period in millisecond
     */
    function triggerPeriodEventViewContentFromSearch(searchId, period) {
        triggerAnalytic(SEARCH_UI_LEAVE_CONTENT_FROM_SEARCH_RESULT, { searchId: searchId, period: period });
    }

    /**
     * trigger period analytic event when enter editor init.rte
     * @param searchId searchId
     * @param period the period in millisecond
     */
    function triggerPeriodEvenEditContentFromSearch(searchId, period) {
        triggerAnalytic(SEARCH_UI_EDIT_CONTENT_FROM_SEARCH_RESULT, { searchId: searchId, period: period });
    }

    /**
     * Remove
     * @param urlString
     * @returns {*}
     */
    function removeSearchIdUrl(urlString) {
        var parsedUrl = url.parse(urlString);
        delete parsedUrl.queryParams.searchId;
        return url.format(parsedUrl);
    }

    /**
     * Clean analytic parameter
     */
    function replaceStateAfterCleaningUpAnalyticsParameters() {
        var cleanUrl = removeSearchIdUrl(document.URL);
        if (document.URL !== cleanUrl) {
            window.history.replaceState(null, '', cleanUrl);
        }
    }

    /**
     * Init analytic for period
     * @since 6.13
     * @public
     */
    function initAnalytic() {
        var analyticsData = extractAnalyticsData(document.URL);
        var searchId = analyticsData[0];
        if (!searchId) {
            return;
        }

        var currentDate = new Date();
        window.addEventListener('beforeunload', function () {
            var currentTriggerTime = new Date();
            var period = currentTriggerTime.getTime() - currentDate.getTime();
            triggerPeriodEventViewContentFromSearch(searchId, period);
        });
        eventApi.bind('init.rte', function () {
            var currentTriggerTime = new Date();
            var period = currentTriggerTime.getTime() - currentDate.getTime();
            triggerPeriodEvenEditContentFromSearch(searchId, period);
        });
        // Check if browser supports HTML5 replaceState()
        if (window.history && window.history.replaceState) {
            replaceStateAfterCleaningUpAnalyticsParameters();
        }
    }

    return {
        init: initAnalytic
    };
});

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-search-ui-plugin:confluence-search-ui-plugin-resources', location = '/js/confluence-search-ui-plugin.js' */
require(['ajs', 'wrm', 'document', 'confluence/api/logger', 'confluence/meta', 'confluence/api/constants', 'confluence/search-ui/analytics-support'],
    function (ajs, wrm, document, logger, meta, constants, analyticsSupport) {
        const eventsTriggeringPluginLazyLoad = ['keydown', 'input', 'click'];
        const eventsTriggeringForQuickSearchEnabled = ['click', 'focusout', 'focus'];
        var searchUI;
        var searchInput;
        var searchInputButton;
        var spinner;
        var tooltip;
        var isTooltipShown = false;
        var isLoading = false;

        function toggleIcon() {
            searchUI.classList.toggle("hide-icon");
        }

        function startLoading() {
            isLoading = true;
            toggleIcon();
            spinner.style.display = 'block';
        }

        function stopLoading() {
            isLoading = false;
            toggleIcon();
            spinner.style.display = 'none';
        }

        function unregisterHandlers() {
            eventsTriggeringPluginLazyLoad.forEach(function (event) {
                searchInput.removeEventListener(event, lazyLoadManager);
            });
            searchInputButton.removeEventListener('click', lazyLoadManagerForIcon);
            searchInputButton.removeEventListener('keydown', lazyLoadManagerForIcon);
        }

        // TODO: would be great remove those events too
        function unregisterHandlersForQuickEnabledScope() {
            eventsTriggeringForQuickSearchEnabled.forEach(function (event) {
                searchInput.removeEventListener(event, handleClickAndFocusEvent);
                searchInputButton.removeEventListener(event, handleClickAndFocusEvent);
            });
        }

        function showTooltip() {
            if (!isTooltipShown) {
                tooltip.style.display = 'block';
                isTooltipShown = true;
            }
        }

        function hideTooltip() {
            if (isTooltipShown) {
                tooltip.style.display = 'none';
                isTooltipShown = false;
            }
        }

        function handleClickAndFocusEvent(event) {
            if (event && event.type ==='focusout') {
                hideTooltip()
                return;
            }

            showTooltip();
            event.stopPropagation();
        }

        function handleInputEvent(event) {
            if (event.target.value) {
                showTooltip();
            } else {
                hideTooltip();
            }
        }

        function handleKeyDownEvent(event) {
            const ENTER_KEY_CODE = 13;
            if (event.keyCode === ENTER_KEY_CODE) {
                const searchTerm = event.target.value;
                const cql = searchTerm ? '?cql=&queryString=' + encodeURIComponent(searchTerm) : '';
                window.location.href = constants.CONTEXT_PATH + '/dosearchsite.action' + cql;
            }
        }

        function handleDocumentClick(event) {
            if (searchUI.contains(event.target)) {
                showTooltip();
            } else {
                hideTooltip();
            }
        }

        function lazyLoadManager(event) {
            if (!event) return;
            if(event.type === 'keydown' && event.keyCode !== 13) return;
            lazyLoad();
        }

        function lazyLoadManagerForIcon(event) {
            if (!event) return;
            if (event.type === 'keydown'
            && event.keyCode !== 13
            && event.keyCode !== 32) return;
            lazyLoad();
        }

        function lazyLoad() {
            if (isLoading) return;

            startLoading();
            wrm
                .require(['wrc!confluence-search-ui-plugin-main'])
                .done(function () {
                    require(['confluence-search-ui-plugin-main'], function (SearchUI) {
                        SearchUI.default.init();
                        unregisterHandlers();
                        stopLoading();
                    });
                })
                .fail(function () {
                    stopLoading();
                    logger.error('fail to load confluence-search-ui-plugin-main');
                });
        }

        ajs.toInit(function () {
            searchUI = document.getElementById('search-ui');
            // login screen doesn't have navigation search
            if (!searchUI) {
                logger.log('no search-ui element found');
                return;
            }

            analyticsSupport.init();
            searchInput = searchUI.querySelector('#quick-search-query');
            searchInputButton = searchUI.querySelector('#quick-search-query-button');
            spinner = searchUI.querySelector('aui-spinner');
            tooltip = searchUI.querySelector('[role=alert]');

            if (!meta.get('global-settings-quick-search-enabled')) {
                searchInputButton.addEventListener('keydown', handleKeyDownEvent);
                searchInput.addEventListener('keydown', handleKeyDownEvent);
                searchInput.addEventListener('input', handleInputEvent);

                eventsTriggeringForQuickSearchEnabled.forEach(function (event) {
                    searchInputButton.addEventListener(event, handleClickAndFocusEvent);
                    searchInput.addEventListener(event, handleClickAndFocusEvent);
                });

                document.addEventListener('click', handleDocumentClick);
            } else {
                eventsTriggeringPluginLazyLoad.forEach(function (event) {
                    searchInput.addEventListener(event, lazyLoadManager);
                });
                searchInputButton.addEventListener('click', lazyLoadManagerForIcon);
                searchInputButton.addEventListener('keydown', lazyLoadManagerForIcon);
            }
        });
    });

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.dialog-wizard:dialog-wizard-resources', location = '/soy/dialog-wizard.soy' */
// This file was automatically generated from dialog-wizard.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.DialogWizard.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.DialogWizard == 'undefined') { Confluence.Templates.DialogWizard = {}; }


Confluence.Templates.DialogWizard.pageContainer = function(opt_data, opt_ignored) {
  return '<div class="dialog-wizard-page-wrapper"><div class="dialog-wizard-page-main"></div><div class="dialog-wizard-page-description">' + ((opt_data.descriptionHeaderLink && opt_data.descriptionHeader) ? '<h3><a href=\'' + soy.$$escapeHtml(opt_data.descriptionHeaderLink) + '\' target=\'_blank\'>' + soy.$$escapeHtml(opt_data.descriptionHeader) + '</a></h3>' : (opt_data.descriptionHeader) ? '<h3>' + soy.$$escapeHtml(opt_data.descriptionHeader) + '</h3>' : '') + '<p>' + soy.$$escapeHtml(opt_data.descriptionContent) + '</p></div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.DialogWizard.pageContainer.soyTemplateName = 'Confluence.Templates.DialogWizard.pageContainer';
}


Confluence.Templates.DialogWizard.waitIcon = function(opt_data, opt_ignored) {
  return '<img class="wait-icon" src="' + soy.$$escapeHtml("") + '/images/icons/wait.gif">';
};
if (goog.DEBUG) {
  Confluence.Templates.DialogWizard.waitIcon.soyTemplateName = 'Confluence.Templates.DialogWizard.waitIcon';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.dialog-wizard:dialog-wizard-resources', location = '/js/dialog-wizard.js' */
(function(q){function z(g,r){var m=-1;_.each(r,function(t,d){t.id==g&&(m=d)});return r[m+1].id}var A=require("confluence/form-state-control");Confluence.DialogWizard=function(g,r){function m(d,b,f,e,h){var a=_.find(d.wizard.pages,function(u){return u.id==b});h.trigger("pre-render."+b,{soyRenderContext:f,wizardData:e});try{var n=eval(a.templateKey),c=q(n(f))}catch(u){throw Error("wizard points to a non-existent Soy template '"+a.templateKey+"'. Check your web-resources or server logs.");}c.find("a, area, button, input, object, select, textarea").attr("tabindex",
"10");a.descriptionContent?(n=q(Confluence.Templates.DialogWizard.pageContainer({descriptionHeaderLink:a.descriptionHeaderLink,descriptionHeader:a.descriptionHeader,descriptionContent:a.descriptionContent})),n.addClass("with-description").find(".dialog-wizard-page-main").append(c)):n=c;var k=b;"create-dialog"==g.id&&(k="create-dialog-"+b);k=g.addPage(k).page[g.curpage];k.addHeader(a.title).addPanel("SinglePanel",n,"singlePanel");k.element.find("form").submit(function(){return!1});a.descriptionContent&&
k.element.find(".dialog-panel-body").css({padding:0});Confluence.Binder.autocompleteMultiUser(c);Confluence.Binder.placeholder(c);var y=g.addFullButtonPanel(k,function(u){c.find(".placeholded").val("");var x={},v=c.parent().find("form").serializeArray();_.each(v,function(w){x[w.name]=w.value});v=q.Event("submit."+b);var l={$container:c,wizardData:e,pageData:x},p=q.Deferred();p.done(function(){e.pages[b]=x;var w=l.nextPageId?l.nextPageId:!a.last&&z(b,d.wizard.pages);!l.nextPageId&&a.last?(t(u,l,e,
r,h),A.disableElement(g.popup.element.find(":input,a").filter(":visible")),y.prepend(Confluence.Templates.DialogWizard.waitIcon())):m(d,w,f,e,h)});p.fail(function(){AJS.log("dialog aborted by on-submit callback on page: "+b)});l.validationDeferred=p;h.trigger(v,l);l.async||(v.isDefaultPrevented()?p.reject():p.resolve())},null,a.last);y.find(".button-panel-back").click(function(){delete e.pages[b]});y.find(".aui-button-primary").attr("tabindex","10");c.find("input, select, textarea").eq(0).focus();
h.trigger("post-render."+b,{$container:c,wizardData:e})}function t(d,b,f,e,h){b.finalUrl?"click"===d.type&&2===d.which?window.open(b.finalUrl).opener=null:window.location=b.finalUrl:(_.each(f.pages,function(a){_.extend(f,a)}),delete f.pages,e(d,f,null,h));return{success:function(a){a()}}}return{newPage:m,doFinalAction:t}}})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-business-blueprints:common-template-resources', location = 'com/atlassian/confluence/plugins/blueprint/common/soy/common-templates.soy' */
// This file was automatically generated from common-templates.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Blueprints.Common.Index.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Blueprints == 'undefined') { Confluence.Blueprints = {}; }
if (typeof Confluence.Blueprints.Common == 'undefined') { Confluence.Blueprints.Common = {}; }
if (typeof Confluence.Blueprints.Common.Index == 'undefined') { Confluence.Blueprints.Common.Index = {}; }


Confluence.Blueprints.Common.Index.detailsSummaryMacro = function(opt_data, opt_ignored) {
  return '<ac:macro ac:name="detailssummary"><ac:parameter ac:name="label">' + soy.$$escapeHtml(opt_data.label) + '</ac:parameter><ac:parameter ac:name="spaces">' + soy.$$escapeHtml(opt_data.spaces) + '</ac:parameter><ac:parameter ac:name="firstcolumn">' + soy.$$escapeHtml(opt_data.firstcolumn) + '</ac:parameter><ac:parameter ac:name="headings">' + soy.$$escapeHtml(opt_data.headings) + '</ac:parameter><ac:parameter ac:name="blankTitle">' + soy.$$escapeHtml(opt_data.blankTitle) + '</ac:parameter><ac:parameter ac:name="blankDescription">' + soy.$$escapeHtml(opt_data.blankDescription) + '</ac:parameter><ac:parameter ac:name="contentBlueprintId">' + soy.$$escapeHtml(opt_data.contentBlueprintId) + '</ac:parameter><ac:parameter ac:name="blueprintModuleCompleteKey">' + soy.$$escapeHtml(opt_data.blueprintModuleCompleteKey) + '</ac:parameter><ac:parameter ac:name="createButtonLabel">' + soy.$$escapeHtml(opt_data.createButtonLabel) + '</ac:parameter></ac:macro>';
};
if (goog.DEBUG) {
  Confluence.Blueprints.Common.Index.detailsSummaryMacro.soyTemplateName = 'Confluence.Blueprints.Common.Index.detailsSummaryMacro';
}


Confluence.Blueprints.Common.Index.createFromTemplateMacro = function(opt_data, opt_ignored) {
  return '<ac:macro ac:name="create-from-template"><ac:parameter ac:name="blueprintModuleCompleteKey">' + soy.$$escapeHtml(opt_data.moduleKey) + '</ac:parameter><ac:parameter ac:name="buttonLabel">' + soy.$$escapeHtml(opt_data.buttonLabel) + '</ac:parameter><ac:parameter ac:name="spaceKey">' + soy.$$escapeHtml(opt_data.spaceKey) + '</ac:parameter><ac:parameter ac:name="templateName">' + soy.$$escapeHtml(opt_data.templateName) + '</ac:parameter></ac:macro>';
};
if (goog.DEBUG) {
  Confluence.Blueprints.Common.Index.createFromTemplateMacro.soyTemplateName = 'Confluence.Blueprints.Common.Index.createFromTemplateMacro';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-business-blueprints:meeting-notes-resources', location = 'com/atlassian/confluence/plugins/meetingnotes/soy/how-to.soy' */
// This file was automatically generated from how-to.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Blueprints.Meeting.Notes.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Blueprints == 'undefined') { Confluence.Blueprints = {}; }
if (typeof Confluence.Blueprints.Meeting == 'undefined') { Confluence.Blueprints.Meeting = {}; }
if (typeof Confluence.Blueprints.Meeting.Notes == 'undefined') { Confluence.Blueprints.Meeting.Notes = {}; }


Confluence.Blueprints.Meeting.Notes.howTo = function(opt_data, opt_ignored) {
  return '<h1>' + soy.$$escapeHtml('With meeting notes you can...') + '</h1><ol class="howto-steps"><li class="howto-step"><div><h3>' + soy.$$escapeHtml('Crowd-source your agenda') + '</h3><p>' + soy.$$escapeHtml('Distribute an agenda and keep meetings focused.') + '</p></div></li><li class="howto-step"><div><h3>' + soy.$$escapeHtml('Capture meeting minutes') + '</h3><p>' + soy.$$escapeHtml('Take notes and make them available to everyone.') + '</p></div></li><li class="howto-step"><div><h3>' + soy.$$escapeHtml('Create and assign tasks') + '</h3><p>' + soy.$$escapeHtml('Assign action items for attendees to work on afterward.') + '</p></div></li></ol>';
};
if (goog.DEBUG) {
  Confluence.Blueprints.Meeting.Notes.howTo.soyTemplateName = 'Confluence.Blueprints.Meeting.Notes.howTo';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-business-blueprints:meeting-notes-resources', location = 'com/atlassian/confluence/plugins/meetingnotes/soy/user-mention.soy' */
// This file was automatically generated from user-mention.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Meeting.Notes.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Meeting == 'undefined') { Confluence.Templates.Meeting = {}; }
if (typeof Confluence.Templates.Meeting.Notes == 'undefined') { Confluence.Templates.Meeting.Notes = {}; }


Confluence.Templates.Meeting.Notes.userMention = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '' + ((opt_data.userkey) ? '<li><p><ac:link><ri:user ri:userkey="' + soy.$$escapeHtml(opt_data.userkey) + '" /></ac:link></p></li><li><p><ac:placeholder ac:type="mention">' + soy.$$escapeHtml('@mention a person to add them as an attendee and they will be notified.') + '</ac:placeholder></p></li>' : '<li><p><ac:placeholder ac:type="mention">' + soy.$$escapeHtml('@mention a person to add them as an attendee and they will be notified.') + '</ac:placeholder></p></li>');
};
if (goog.DEBUG) {
  Confluence.Templates.Meeting.Notes.userMention.soyTemplateName = 'Confluence.Templates.Meeting.Notes.userMention';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.troubleshooting.plugin-confluence:atst-common', location = 'js/ajs-amd.js' */
define('troubleshooting/ajs', [], function () {
    'use strict';

    return AJS;
});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.troubleshooting.plugin-confluence:atst-healthcheck-sensors', location = 'js/sensors/page-protocols.js' */
define('troubleshooting/sensors/page-protocols', ['troubleshooting/ajs'], function(AJS) {
    var baseUrl = AJS.contextPath();
    var hasPerfData = window.performance && typeof window.performance.getEntriesByType === 'function';

    // WARNING: This is a rough assumption based on how the WRM works.
    // Consuming this from the WRM would be a better option, but meh.
    // See: https://bitbucket.org/atlassian/atlassian-plugins-webresource/src/master/atlassian-plugins-webresource/src/main/java/com/atlassian/plugin/webresource/WebResourceUrlProviderImpl.java
    // See also: https://stash.atlassian.com/projects/CP/repos/static-assets-url/browse/src/main/resources/ui/health-checks/health-checks.js
    var WRM_STATIC_ASSET_REGEX = new RegExp(baseUrl + '/s/.+?/_/');

    function isStaticResource(resource) {
        return WRM_STATIC_ASSET_REGEX.test(resource.name);
    }

    function getNextHopData(resource) {
        return (resource && resource.nextHopProtocol) || 'unknown';
    }

    function unique(elem, pos, arr) {
        return arr.indexOf(elem) === pos;
    }

    return {
        isWorking: function() {
            return hasPerfData;
        },
        getName: function() {
          return 'page-protocols';
        },
        getData: function() {
            var resources = window.performance.getEntriesByType('resource');
            var navigation = window.performance.getEntriesByType('navigation');
            var resourceProtocols = resources
                .filter(isStaticResource)
                .map(getNextHopData)
                .filter(unique)
                .sort();
            if (!resourceProtocols.length) {
                resourceProtocols.push('unknown');
            }
            return {
                resourceProtocols: resourceProtocols,
                navigationProtocol: getNextHopData(navigation[0]),
                userAgent: navigator.getUserAgent && "use-js-client-hints" || navigator.userAgent
            };
        }
    }
});

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.troubleshooting.plugin-confluence:atst-healthcheck-sensors', location = 'js/sensors.js' */
require([
    'troubleshooting/sensors/page-protocols',
    'troubleshooting/ajs'
], function(
    protocolSensor,
    AJS
) {
    var sensors = [protocolSensor];

    AJS.toInit(function() {

        function hash(str) {
            var hash = 0;
            for (var i = 0; i < str.length; ++i) {
                hash = 31 * hash + str.charCodeAt(i);
                hash |= 0; // this reduces the number to 32bits and prevents Infinity
            }
            return hash;
        }

        //this handles cases when the user disabled access to local storage
        var localStorageWrapper = {
            getWithDefaultOnError: function(sensorName, defaultValue) {
                try {
                    return window.localStorage.getItem(sensorName) || "0";
                } catch (e) {
                    return defaultValue;
                }
            },
            setItemQuietly: function (key, value) {
                try {
                    window.localStorage.setItem(key, value);
                } catch (ignored) {
                }
            }
        };

        // Iterate through each sensor and ingest any data it has for us...
        // but only if it's actually working properly in this client.
        sensors.forEach(function(sensor) {
            if (!sensor.isWorking()) {
                return
            }

            var sensorData = {};
            var newData = sensor.getData();
            for (var key in newData) {
                if (newData.hasOwnProperty(key)) {
                    sensorData[key] = newData[key];
                }
            }

            var sensorName = 'atst.healthcheck.sensors.' + sensor.getName();
            var currentHash = hash(JSON.stringify(sensorData)).toString(36);
            var previousHash = localStorageWrapper.getWithDefaultOnError(sensorName, currentHash);
            if (previousHash===currentHash && Math.random()>0.01) {
                return;
            }
            // What's one more analytics event to the world? A drop in the data ocean.
            AJS.trigger('analytics', {
                name: sensorName,
                data: sensorData
            });
            localStorageWrapper.setItemQuietly(sensorName, currentHash);
        });

    });
});

}catch(e){WRMCB(e)};