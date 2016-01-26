/**
 * Define a function, `cssquery`, which takes a CSS descendant selector string
 * `s` and returns an array of elements found in the document that match it.
 *
 * Don't use `document.querySelectorAll` or jQuery. Build the algorithm yourself
 * using:
 * - `document.getElementsByTagName`
 * - `document.getElementsByClassName`
 * - `document.getElementById`
 *
 * This isn't a memory test. If you need to search the web to find a particular
 * property or method signature - go ahead.
 *
 * Good luck!
 *
 *        |
 *     \  +
 *    __G//*=.
 *   (af)(/.\|
 *    \/>' (_--.
 *  _=/ b  ,^\
 * ~~ \)-'   '
 *   / |
 *  '  '
 */
var cssquery = window.cssquery = function(s) {
    // descendant queries take two selectors split 
    // by 1 or more space, new lines or tab
    var dummy = "   bla     bla ".trim();  
    document.getElementById("output").innerHTML = dummy;
    return [];
};

// execute code on page load
document.addEventListener("DOMContentLoaded", cssquery, false);
