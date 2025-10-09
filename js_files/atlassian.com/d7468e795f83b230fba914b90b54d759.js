// You can't just bind it directly to jQuery because it is a function, which causes define to try to use it as a
// factory method.

// Remove definition to force libraries to not register themselves with AMD. This is because we need to handle registration ourselves due to Almond's name requirement.
delete define.amd;

define('jquery', [], function() {
    return jQuery;
});

define('underscore', [], function() {
    return _;
});

define('selectize', [], function () {
    return Selectize;
});
