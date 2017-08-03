const expect = require('chai').expect;
const request = require('request');
//first option with module.exports.server = server;
//const expect = require('./server').server;

//second oprtion with module.exports = server;
require('../server');

describe('Api', function() {
  describe('Given a valid request', function() {
    it('Should return a 200', function() {
      request('http://localhost:8000/?phrase=Helo', function(error, response, body) {
        expect(error).to.be.null;
        expect(response.statusCode).to.equal('200');
        // console.log('error:', error); // Print the error if one occurred
        // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        // console.log('body:', body); // Print the HTML for the Google homepage.
      });

    });
  });
  describe('Given an invalid request', function() {
    it('Should return a 400', function() {
      request('http://localhost:8000/', function(error, response, body) {
        expect(error).to.be.null;
        expect(response.statusCode).to.equal('400');

      });

    });
  });
});
