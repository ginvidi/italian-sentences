const sentences = require('./data/simple.json');
const url = require('url');
const http = require('http');

const port = 8000;

const server = http.createServer(listener);

function listener(request, response) {

  const query = url.parse(request.url, true).query;
  const phrase = query.phrase;

  response.setHeader('Content-Type', 'text/plain');

  if(!phrase) {
    response.statusCode = 400;
    return response.end('Bad request');
  }

  response.statusCode = 200;
  return response.end(sentences[phrase]);

}

server.listen(port);

console.log('Server listening at http://localhost:%s', port);

//first option
//module.exports.server = server;

//second option
//module.exports = server;

// third option
// module.exports = {
//   server
// }
