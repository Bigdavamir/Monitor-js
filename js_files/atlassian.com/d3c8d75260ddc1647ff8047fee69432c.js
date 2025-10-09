define("gliffy/util", [
], function() {
    "use strict";

    // similar to Java String.format().
    //   Examples:
    //      $.format('{1} is first, {0} is second! {0} {2}', 'B', 'A') === 'A is first, B is second! B undefined';

    return {
        format: function (format) {
            var args = Array.prototype.slice.call(arguments, 1);
            return format.replace(/{(\d+)}/g, function (match, number) {
                return (typeof args[number] != 'undefined') ? args[number] : "undefined";
            });
        },
        htmlDecode: function(input) {
            var e = document.createElement('div');
            e.innerHTML = input;
            return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
        }
    };
});
