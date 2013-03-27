var test = require("tape")

var element = require("../index")

test("should convert HTML to DOM elements", function (assert) {
    var el = element("<p>Hello</p>")[0];
    assert.equal("P", el.nodeName);
    assert.equal("Hello", el.textContent);

    var els = element("<p>one</p><p>two</p><p>three</p>");
    assert.equal("one", els[0].textContent);
    assert.equal("two", els[1].textContent);
    assert.equal("three", els[2].textContent);
    assert.end();
})

test("should return unique element each time", function (assert) {
    var el1 = element("<p>Hello<p>")[0]
    var el2 = element("<p>Hello<p>")[0]

    assert.notEqual(el1, el2)
    assert.end()
})

test("should support body tags", function (assert) {
    var el = element("<body></body>")[0];
    assert.equal("BODY", el.nodeName);
    assert.end();
})

test("should support body tags wtesth classes", function (assert) {
    var el = element("<body class='page'></body>")[0];
    assert.equal("BODY", el.nodeName);
    assert.equal("page", el.className);
    assert.end();
})

test("should support legend tags", function (assert) {
    var el = element("<legend>Hello</legend>")[0];
    assert.equal("LEGEND", el.nodeName);
    assert.end();
})

test("should support table tags", function (assert) {
    var el = element("<table></table>")[0];
    assert.equal("TABLE", el.nodeName);
    assert.end();
})

test("should support thead tags", function (assert) {
    var el = element("<thead></thead>")[0];
    assert.equal("THEAD", el.nodeName);
    assert.end();
})

test("should support tbody tags", function (assert) {
    var el = element("<tbody></tbody>")[0];
    assert.equal("TBODY", el.nodeName);
    assert.end();
})

test("should support tfoot tags", function (assert) {
    var el = element("<tfoot></tfoot>")[0];
    assert.equal("TFOOT", el.nodeName);
    assert.end();
})

test("should support caption tags", function (assert) {
    var el = element("<caption></caption>")[0];
    assert.equal("CAPTION", el.nodeName);
    assert.end();
})

test("should support col tags", function (assert) {
    var el = element("<col></col>")[0];
    assert.equal("COL", el.nodeName);
    assert.end();
})

test("should support td tags", function (assert) {
    var el = element("<td></td>")[0];
    assert.equal("TD", el.nodeName);
    assert.end();
})

test("should support th tags", function (assert) {
    var el = element("<th></th>")[0];
    assert.equal("TH", el.nodeName);
    assert.end();
})

test("should support tr tags", function (assert) {
    var el = element("<tr></tr>")[0];
    assert.equal("TR", el.nodeName);
    assert.end();
})

test("should support option tags", function (assert) {
    var el = element("<option></option>")[0];
    assert.equal("OPTION", el.nodeName);
    assert.end();
})

test("should support optgroup tags", function (assert) {
    var el = element("<optgroup></optgroup>")[0];
    assert.equal("OPTGROUP", el.nodeName);
    assert.end();
})

test("should not set parentElement", function(assert) {
    var el = element("<p>Hello</p>")[0];
    assert.ok(!el.parentElement);
    assert.ok(!el.parentNode);
    assert.end();
})
