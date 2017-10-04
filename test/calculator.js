

// Require the chai exception library
var expect    = require("chai").expect;
// Require the source code module that needs to be tested
var calculator = require("../lib/calculator");

describe("Addition and Subtraction Calculator", function() {
  describe("Addition", function() {
    it("Add one number to another", function() {
      var addResult = calculator.addition(1, 2);

      expect(addResult).to.equal(3);

    });
  });

  describe("Subtraction", function() {
    it("Subtract one number from another", function() {
      var subtResult = calculator.subtraction(6, 1);

      expect(subtResult).to.equal(5);

    });
  });
});