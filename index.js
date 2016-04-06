'use strict';
const corenlp = require("corenlp-js-interface");

module.exports = {
  port : 9000,
  annotators: "parse",
  format : "json",
  parseJson : true,
  process : function(stringToProcess) {
    let text = corenlp(stringToProcess,this.port,this.annotators,this.format);
    if (this.parseJson === false || this.format !== "json") {
      return text;
    }
    text = JSON.parse(text);
    return text;
  }
};
