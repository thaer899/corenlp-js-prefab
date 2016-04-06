'use strict';

const corenlp = require("./index.js");
let json = corenlp.process("the quick brown fox jumped over the lazy dog");
console.log(json);
