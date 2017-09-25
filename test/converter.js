

// Require the chai exception library
var expect    = require("chai").expect;
// Require the source code module that needs to be tested
var converter = require("../lib/converter");

describe("Addition and Subtraction Calculator", function() {
  describe("Addition", function() {
    it("Add one number to another", function() {
      var addResult = converter.addition(1, 2);

      expect(addResult).to.equal(3);

    });
  });

  describe("Subtraction", function() {
    it("Subtract one number from another", function() {
      var subtResult = converter.subtraction(6, 1);

      expect(subtResult).to.equal(5);

    });
  });
});