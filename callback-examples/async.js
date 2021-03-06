const request = require('request');

function getCats(callback) {
  // the request below is asynchronous therefore to return cats, we have to provide a callback
  request.get('http://www.google.co.uk/search?q=cats', function(err) {
    // here the request has been completed
    console.log('Request complete!');
    if (err) throw err;
    console.log('Returning cats! MEOW!');
    callback('cats');
  });
  // the line below will be executed BEFORE the request has been completed
  console.log('Request is in progress...');
}

function feedCats(cats) {
  console.log(`Feeding ${cats}...`);
}

getCats(feedCats);
console.log('blah');
