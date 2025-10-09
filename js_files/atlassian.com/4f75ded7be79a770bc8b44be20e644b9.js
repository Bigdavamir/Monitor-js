/**
 * @module confluence/master
 */
/* eslint @atlassian/confluence-server/no-confluence-getcontextpath:0 */
define('confluence/master', [
    'confluence/effects',
    'ajs',
    'confluence/legacy',
    'jquery'
], function(
    Effects,
    AJS,
    Confluence,
    $
) {
    'use strict';

    var Master = {};

    Master.init = function($) {
        // Moved out of macros.vm displayGlobalMessages
        $('#messageContainer').find('.confluence-messages').each(function() {
            var message = this;
            if (!Effects.getCookie(message.id)) {
                $(message).show();
                $('.message-close-button', message).click(function() {
                    $(message).slideUp();
                    Effects.setCookie(message.id, true);
                });
            }
        });
    };

    /**
     * Makes the current element selectable with effects by adding 'hover' and 'selected' class names.
     *
     * This is typically used for table row elements which can be selected.
     *
     * @param container the parent container which contains all selectable elements
     * @param onSelect the function to be invoked when the element is clicked on.
     * It should take two parameters, the element that was clicked on followed by the properties.
     * @param properties the properties to be stored against the element and passed into the onSelect function.
     */
    Master.selectableEffects = function(container, onSelect, properties) {
        var el = $(this);
        if (properties) {
            el.data('properties', properties);
        }
        el.click(function(e) {
            var $this = $(this);
            if (onSelect) {
                onSelect(this, $this.data('properties'));
            }

            container.find('.selected').removeClass('selected');
            $this.addClass('selected');
            e.stopPropagation();
            return false;
        });
        el.hover(function() {
            $(this).addClass('hover');
        }, function() {
            $(this).removeClass('hover');
        });
    };

    /**
     * Shortens the set of elements by replacing the last character of each with ellipsis
     * until the condition returns true. Typical usage:
     *
     *   $("#some-list li").shortenUntil(function () { return $("#some-list").width() < 500; });
     *
     * @param condition shortening of elements will happen until this function returns true
     */
    Master.shortenUntil = function(condition) {
        var current = 0;
        while (!condition() && current < this.length) {
            var currentText = $(this[current]).text();
            if (currentText === '\u2026') {
                current++;
            } else {
                $(this[current]).text(currentText.replace(/[^\u2026]\u2026?$/, '\u2026'));
            }
        }
        return this;
    };

    return Master;
});

require('confluence/module-exporter').safeRequire('confluence/master', function(Master) {
    'use strict';

    var AJS = require('ajs');
    var $ = require('jquery');
    AJS.toInit(Master.init);
    $.fn.selectableEffects = Master.selectableEffects;
    $.fn.shortenUntil = Master.shortenUntil;
});
