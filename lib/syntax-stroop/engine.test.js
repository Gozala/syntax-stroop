var stroop = require('syntaxStroop/engine');
var File = require('file').Path;
var source = stroop.highlight(new File('jsdocs/lib/jsdocs/JSDOC.js').read().toString());
var sourceXML = new XML('<dummy>' + source + '</dummy>').children();
var data = <test/>.appendChild(sourceXML).toXMLString();