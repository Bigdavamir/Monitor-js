// This was copied from Atlassian's almond-noconflict-post.js

if (window.__require) {
    window.require = window.__require;
    window.requirejs = window.__requirejs;
    window.define = window.__define;
} else {
    // Patch our own version of Almond.
    //
    // If "define.amd" is truthy, some 3rd-party libs (e.g. jQuery, spin.js)
    // automatically register themselves via define(). We don't want that,
    // we'll take care of calling define() for each lib.
    delete window.define.amd;
}
