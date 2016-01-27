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
var ANCESTOR = 0;
var DESCENDANT = 1;
var CLASS_TYPE = '.';
var ID_TYPE = '#';
var TAG_TYPE = 't';

var cssquery = window.cssquery = function(s) {
    // descendant queries take two selectors split 
    // by 1 or more space, new lines or tab
    var trim_str = "   div     p  ".trim();  
    var split_str = trim_str.split(" ");
    split_str = split_str.filter(remove_spaces);

    // descendant query should take only 2 selectors
    if (split_str.length != 2){
        return [];
    }
     
    var ancestor = split_str[ANCESTOR];
    var descendant = split_str[DESCENDANT];

    var ancestor_type = match_ancestor_type(ancestor);

    var match_vals = query_by_type(ancestor, ancestor_type);
    for (i=0; i<match_vals.length; i++){
        console.log(match_vals.item(i))

    }

    document.getElementById("output").innerHTML = match_vals;
    return [];
};

function remove_spaces(value) {
    return value != '';
}

function match_ancestor_type(ancestor) {
    var first_char = ancestor.charAt(0);
    switch(first_char) {
        case CLASS_TYPE:
            return CLASS_TYPE; 
            break;
        case ID_TYPE:
            return ID_TYPE;
            break;
        default:
            // Tag element
            return TAG_TYPE;
            break;
    }
}

function query_by_type(ancestor, a_type) {
    switch(a_type) {
        case CLASS_TYPE:
            return document.getElementsByClassName(ancestor);
            break;
        case ID_TYPE:
            return document.getElementById(ancestor);
            break;
        case TAG_TYPE:
            return document.getElementsByTagName(ancestor);
            break;
    }
}
function query_id(descendant) {
    console.log("QUERY_ID");
}

function query_class(descendant) {
    console.log("QUERY_CLASS");
}

function query_tag(descendant) {
    console.log("QUERY_TAG");
}

function filter_descendant(value) {

}
// execute code on page load
document.addEventListener("DOMContentLoaded", cssquery, false);
