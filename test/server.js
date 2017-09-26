
// Require the chai exception library
var expect  = require("chai").expect;
// Request module used to send/recieve http requests
var request = require("request");


describe("Addition and Subtraction Calculator API", function() {

  describe("Addition", function() {

    var url = "http://localhost:3000/addition?x=1&y=2";

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
    var url = "http://localhost:3000/subtraction?x=6&y=1";

    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done(); // done() required to make mocha wait for the response
      });
    });

    it("returns the subtraction result", function(done) {
      request(url, function(error, response, body) {
        // expect(body).to.equal('5');
        expect(body).to.equal('4'); // inject a failure
        done(); // done() required to make mocha wait for the response
      });
    });
  });

});


