const request = require('request');

function getCats() {
  console.log('GET CATS');
  // the request below is asynchronous therefore to return cats, we have to provide a callback

  request.get('http://www.google.co.uk/search?q=cats', function(err) {
    // here the request has been completed
    console.log('Request complete!');
    console.log(err);
    err = new Error('OMG!');
    if (err) throw err;

    console.log('Returning cats! MEOW!');
    return 'cats';
  });
  // the line below will be executed BEFORE the request has been completed
  console.log('Request is in progress...');
}

function feedCats(cats) {
  console.log('FEED CATS');
  console.log(`Feeding ${cats}...`);
}

console.log('START');
const cats = getCats();
feedCats(cats);
console.log('END');
