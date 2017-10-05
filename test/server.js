
// Require the chai exception library
var expect  = require("chai").expect;
// Request module used to send/recieve http requests
var request = require("request");

// Gather environment info
var serverPort = process.env.PORT || 3000; // process.env.PORT used for cf deployment
var VCAP_APPLICATION = JSON.parse(process.env.VCAP_APPLICATION); // get cf instance info
var uri = VCAP_APPLICATION.uris[0] || 'localhost'; // the uri provided by cf else use localhost

// Define the tests.
describe("Addition and Subtraction Calculator API", function() {

  describe("Addition", function() {

    // Set url for testing
    // If on cf don't use port number otherwise timeout errors in Mocha
    if (process.env.VCAP_APPLICATION){
      var url = "http://"+uri+"/addition?x=1&y=2";
    } else {
      var url = "http://"+uri+":"+serverPort+"/addition?x=1&y=2";
    }
    
    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done(); // done() required to make mocha wait for the response
      });
    });

    it("returns addition result", function(done) {
      request(url, function(error, response, body) {
        expect(body).to.equal('3');
        done(); // done() required to make mocha wait for the response
      });
    });

  });

  describe("Subtraction", function() {

    // Set url for testing
    // If on cf don't use port number otherwise timeout errors in Mocha
    if (process.env.VCAP_APPLICATION){
      var url = "http://"+uri+"/subtraction?x=6&y=1";
    } else {
      var url = "http://"+uri+":"+serverPort+"/subtraction?x=6&y=1";
    }

    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done(); // done() required to make mocha wait for the response
      });
    });

    it("returns the subtraction result", function(done) {
      request(url, function(error, response, body) {
        // expect(body).to.equal('5');
        expect(body).to.equal('4'); // uncomment to inject a failure
        done(); // done() required to make mocha wait for the response
      });
    });
  });

});


