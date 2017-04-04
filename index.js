const http = require('http');
const fs = require('fs');
const port = 8080;

const server = http.createServer(listener);

function listener(request, response) {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  fs.readFile('index.html', (err, data) => {

    if(err) throw err;
    response.write(data);
    //Need to be here so we can get the response after the file is read
    response.end();

  })
}

server.listen(port);

console.log('Server listening at http://localhost:%s', port);

// method(params, callbackFn)
// const option = {host: 'www.google.com', path: '/search?q=cats'};
//
// const cb = function(res){
//   console.log(res);
// };
//
// http.get(option, cb);
//
//https://www.google.co.uk/search?q=cats&oq=cats&aqs=chrome..69i57.750j0j7&sourceid=chrome&ie=UTF-8
