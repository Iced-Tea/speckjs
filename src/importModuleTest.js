var speck = require('./speck.js');
var fs = require('fs');
var path = require('path');
var comments = require('./parsing/parse-comments.js');
var now = require("performance-now");


var testString1 = fs.readFileSync(path.join(__dirname, '../test/fixtures/base.js'), {encoding: 'utf8'});
var start = now();
// var testString2 = fs.readFileSync(path.join(__dirname, '../test/fixtures/base.js'), {encoding: 'utf8'});
// var testString3 = fs.readFileSync(path.join(__dirname, '../test/fixtures/base.js'), {encoding: 'utf8'});

var tests = speck.build({
  name: 'base.js',
  content: testString1
}, {
  testFW: 'tape'
});
//
// var result2 = speck.build({
//   name: 'base.js',
//   content: testString2
// }, {
//   testFW: 'jasmine'
// });
//
// console.log(result1);
// console.log(result2);

// var tests = comments.parse(testString1).tests;
var end = now();
console.log(tests.length);

// console.log(tests.length);
console.log('time: ', (end - start).toFixed(3));
