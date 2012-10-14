
var domify = require('domify');

describe('domify(html)', function(){
  it('should convert HTML to DOM elements', function(){
    var el = domify('<p>Hello</p>');
    assert('P' == el.nodeName);
    assert('Hello' == el.textContent);
  })

  it('should support legend tags', function(){
    var el = domify('<legend>Hello</legend>');
    assert('LEGEND' == el.nodeName);
  })

  it('should support table tags', function(){
    var el = domify('<table></table>');
    assert('TABLE' == el.nodeName);
  })

  it('should support thead tags', function(){
    var el = domify('<thead></thead>');
    assert('THEAD' == el.nodeName);
  })

  it('should support tbody tags', function(){
    var el = domify('<tbody></tbody>');
    assert('TBODY' == el.nodeName);
  })

  it('should support tfoot tags', function(){
    var el = domify('<tfoot></tfoot>');
    assert('TFOOT' == el.nodeName);
  })

  it('should support caption tags', function(){
    var el = domify('<caption></caption>');
    assert('CAPTION' == el.nodeName);
  })

  it('should support col tags', function(){
    var el = domify('<col></col>');
    assert('COL' == el.nodeName);
  })

  it('should support td tags', function(){
    var el = domify('<td></td>');
    assert('TD' == el.nodeName);
  })

  it('should support th tags', function(){
    var el = domify('<th></th>');
    assert('TH' == el.nodeName);
  })

  it('should support tr tags', function(){
    var el = domify('<tr></tr>');
    assert('TR' == el.nodeName);
  })

  it('should support option tags', function(){
    var el = domify('<option></option>');
    assert('OPTION' == el.nodeName);
  })

  it('should support optgroup tags', function(){
    var el = domify('<optgroup></optgroup>');
    assert('OPTGROUP' == el.nodeName);
  })

  it('should throw if more than one tag is given', function(){
    var thrown = null;
    try {
      domify('<div></div><span></span>');
    } catch (err) {
      thrown = err;
    }

    assert(thrown && /more than one element/i.test(thrown.message));
  })

  it('should throw if no tag is given', function(){
    var thrown = null;
    try {
      domify('  ');
    } catch (err) {
      thrown = err;
    }

    assert(thrown && /no elements/i.test(thrown.message));
  })
  it('should not set parentElement', function() {
    var el = domify('<p>Hello</p>');
    assert(!el.parentElement);
    assert(!el.parentNode);
  })
})
