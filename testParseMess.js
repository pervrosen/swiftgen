const util = require('util');
const Swift = require('./lib/swiftparser.js');
const swift = new Swift();
const fs = require('fs');

const file = fs.readFileSync('./SWIFT_509.fin', { encoding: 'UTF-8' });
const ast = swift.parse(file)

console.log(util.inspect(ast, {depth: null}));

