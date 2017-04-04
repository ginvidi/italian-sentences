//When I pass a file in require use ./ before the path to be sure is not a mudule
const sentences = require('./data/simple.json');
const querystring = require('querystring');
const url = require('url');

const http = require('http');
//const fs = require('fs');

const port = 8000;

const server = http.createServer(listener);

function listener(request, response) {

  const query = url.parse(request.url, true).query;

  
  const keyTranslate = query.key;
  const keySection = query.section_order;
  const result = sentences.sections[keySection];
  let myVal = '';
  console.log('keyTranslate: ' +  keyTranslate + ', keySection: ' + keySection);
  console.log(sentences.sections[keySection]);

  if (result){
    myVal =result.some(function (element, index, array) {
      console.log(element.key == keyTranslate ? element.val : "We don't have this sentence");
      return element.key == keyTranslate ? element.val : "We don't have this sentence";
    })
    //'Good Night!' in result ? console.log('key exists') : console.log('unknown key')
  }



  response.writeHead(200, { 'Content-Type': 'text/plain' });
  //console.log(request);

  //const query = querystring.stringify(sentences);
  //const query1 = querystring.stringify(sentences.sections );
//  const query2 = querystring.stringify(sentences.sections.Etiquette[0]);
  //const queriUrl = querystring.unescape(query + query1 + query2);
  //console.log( query + query1 + query2 );
  response.write(sentences.sections.Etiquette[0].key + ': ' + myVal);
  response.end();
}

server.listen(port);

console.log('Server listening at http://localhost:%s', port);
