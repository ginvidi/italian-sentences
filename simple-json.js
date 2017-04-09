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
  const phrase = query.phrase;
  //console.log(phrase);

  response.setHeader('Content-Type', 'text/plain');
  if(!phrase) {
    response.statusCode = 400;
    return response.end('Bad request');
  }
  if(!(phrase in sentences)) {
    response.statusCode = 404;
    return response.end('Not Found');
  }

  response.statusCode = 200;
  return response.end(sentences[phrase]);

}

server.listen(port);

console.log('Server listening at http://localhost:%s', port);
