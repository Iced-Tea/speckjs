var speck = require('./speck.js');
var fs = require('fs');
var path = require('path');

var testString1 = fs.readFileSync(path.join(__dirname, '../test/fixtures/base.js'), {encoding: 'utf8'});
var testString2 = fs.readFileSync(path.join(__dirname, '../test/fixtures/base.js'), {encoding: 'utf8'});
var testString3 = fs.readFileSync(path.join(__dirname, '../test/fixtures/base.js'), {encoding: 'utf8'});

var result1 = speck.build({
  name: 'base.js',
  content: testString1
}, {
  testFW: 'tape'
});

var result2 = speck.build({
  name: 'base.js',
  content: testString2
}, {
  testFW: 'jasmine'
});

console.log(result1);
console.log(result2);
