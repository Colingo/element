var document = require("global/document")

/**
 * Wrap map from jquery.
 */

var map = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    optgroup: [1, "<select multiple='multiple'>", "</select>"],
    legend: [1, "<fieldset>", "</fieldset>"],
    thead: [1, "<table>", "</table>"],
    tbody: [1, "<table>", "</table>"],
    tfoot: [1, "<table>", "</table>"],
    colgroup: [1, "<table>", "</table>"],
    caption: [1, "<table>", "</table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    th: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
    _default: [0, ", "]
}
var cache = {}

// parse :: String -> [DOMElement]
module.exports = parse

function parse(html){
    if (typeof html !== "string") {
        throw new TypeError("String expected")
    }

    var elements = cache[html]

    if (!elements) {
        // tag name
        elements = cache[html] = parseHtml(html)
    }

    var len = elements.length
    var result = new Array(len)

    for (var i = 0; i < len; i++) {
        result[i] = elements[i].cloneNode(true)
    }

    return result
}

function parseHtml(html) {
    var elements = []
    var m = /<([\w:]+)/.exec(html)
    if (!m) {
        throw new Error("No elements were generated.")
    }
    var tag = m[1]

    // body support
    var el
    if (tag === "body") {
        el = document.createElement("html")
        el.innerHTML = html
        elements[0] = el.removeChild(el.lastChild)
    } else {
        // wrap map
        var wrap = map[tag] || map._default
        var depth = wrap[0]
        var prefix = wrap[1]
        var suffix = wrap[2]
        el = document.createElement("div")
        el.innerHTML = prefix + html + suffix

        // trim away wrapper elements
        while (depth--) {
            el = el.lastChild
        }

        var nodes = el.children
        var len = nodes.length

        for (var i = 0; i < len; i++) {
            elements[i] = nodes[0]
            el.removeChild(nodes[0])
        }
    }
    return elements
}
