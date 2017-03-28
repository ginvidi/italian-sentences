const fs = require('fs');

fs.mkdir("output", function(err){
  
  if(err) throw err;

  fs.writeFile('output/message.txt', 'Hello Node.js', (err) => {
    if (err) throw err;
    console.log('It\'s saved!');
  });
});
