var obfuscation = require('../index.js');
var data = require('../data.js')
var should = require('chai').should();

describe('Obfuscator', function() {
  it('renames', function() {
      obfuscation(['aaa', 'aaa', 'bbb', 'qweqrtt']).should.be.deep.equal({aaa: 'q', bbb: 'w', qweqrtt: 'e'});
    });
  it('names are unique', function(){
      obfuscation(['aaa', 'aaa', 'bbb', 'qweqrtt']).should.not.be.equal({aaa: 'q', bbb: 'q', qweqrtt: 'q'})
  });
  it('returns object', function(){
    obfuscation(data).should.be.an('object');
  });
  });
