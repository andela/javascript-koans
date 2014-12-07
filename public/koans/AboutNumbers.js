describe("About Numbers", function() {

  it("should know the javascript numeric type", function () {
    var typeOfIntegers = typeof(6);
    expect(typeOfIntegers).toBe(FILL_ME_IN);
  });

  it("should know whether ints or floats have the same type", function () {
    var typeOfIntegers = typeof(6);
    var typeOfFloats = typeof(3.14159);
    var actualValue = (typeOfIntegers === typeOfFloats);
    expect(actualValue).toBe(FILL_ME_IN);
  });

  it("should know how to test for NaN pt 1", function () {
    var resultOfFailedOperations = 7/'apple';
    var expectedValue = FILL_ME_IN;
    var actualValue = isNaN(resultOfFailedOperations);

    expect(actualValue).toBe(expectedValue);
  });

  it("should know how to test for NaN pt 2", function () {
    var resultOfFailedOperations = 7/'apple';
    var actualValue = (resultOfFailedOperations == NaN);
    expect(actualValue).toBe(FILL_ME_IN);
  });

  it("should understand the nature of infinity", function() {
    var actualValue = 42/0;
    expect(actualValue).toBe(FILL_ME_IN);
  });
});
