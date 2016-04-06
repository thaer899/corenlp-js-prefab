# corenlp-js-prefab
Use corenlp-js-interface with a simple prefab function so you only have to send text no extra parameters with each call


### Installation & Test
#####Stanford CoreNLP
Download and extract Stanford CoreNLP from http://stanfordnlp.github.io/CoreNLP/#download

Run `java -mx4g -cp "*" edu.stanford.nlp.pipeline.StanfordCoreNLPServer` in the extracted folder to start the CoreNLP server at http://localhost:9000/.

#####corenlp-js-prefab
`npm i corenlp-js-prefab`

To test run `node node_modules/corenlp-js-prefab/example.js`

###Usage 
default cofig:
```
corenlp.port = 9000;
corenlp.annotators= "parse";
corenlp.format = "json";
corenlp.parseJson = true;
```
For full Stanford CoreNLP usage and config information see: http://stanfordnlp.github.io/CoreNLP/index.html

So basic usage is as simple as this:

```
'use strict';
const corenlp = require("corenlp-js-prefab");

let json = corenlp.process("the quick brown fox jumped over the lazy dog");
console.log(json);
```
