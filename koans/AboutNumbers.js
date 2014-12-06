describe("About Numbers", function() {

  it("should know the javascript numeric type", function () {
    var typeOfIntegers = typeof(6);

    var expectedValue = FILL_ME_IN;
    var actualValue = typeOfIntegers;

    expect(actualValue).toBe(expectedValue);
  });

  it("should know whether ints or floats have the same type", function () {
    var typeOfIntegers = typeof(6);
    var typeOfFloats = typeof(3.14159);

    var expectedValue = FILL_ME_IN;
    var actualValue = (typeOfIntegers === typeOfFloats);

    expect(actualValue).toBe(expectedValue);
  });

  it("should know how to test for NaN pt 1", function () {
    var resultOfFailedOperations = 7/'apple';

    var expectedValue = FILL_ME_IN;
    var actualValue = isNaN(resultOfFailedOperations);

    expect(actualValue).toBe(expectedValue);
  });

  it("should know how to test for NaN pt 2", function () {
    var resultOfFailedOperations = 7/'apple';

    var expectedValue = FILL_ME_IN;
    var actualValue = (resultOfFailedOperations == NaN);

    expect(actualValue).toBe(expectedValue);
  });




});