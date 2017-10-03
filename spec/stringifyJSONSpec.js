// test cases are described in fixtures.js
describe('stringifyJSON', function() {
  it('should match the result of calling JSON.stringify', function() {

    console.log("HEY I AM RUNNING")

    stringifiableObjects.forEach(function(test) {
      var expected = JSON.stringify(test);
      var result = stringifyJSON(test);
      console.log(test, expected, result)
      expect(result).to.equal(expected);
    });

    unstringifiableValues.forEach(function(obj) {
      console.log(obj)
      var expected = JSON.stringify(obj);
      var result = stringifyJSON(obj);
      expect(result).to.equal(expected);
    });

  });
});
