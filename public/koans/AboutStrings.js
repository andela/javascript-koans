describe("About Strings", function() {

  // String manipulation is very important

  it("should know singlequotes vs double quotes", function () {
    var singleQuotedString = 'apple';
    var doubleQuotedString = "apple";

    var expectedValue = FILL_ME_IN;
    var actualValue = (singleQuotedString === doubleQuotedString);

    expect(actualValue).toBe(expectedValue);
  });

  it("should grok concatenation", function () {
    var fruit = "apple";
    var dish = "pie";
    
    var expectedValue = FILL_ME_IN;
    var actualValue = fruit + dish;

    expect(actualValue).toBe(expectedValue);
  });

  it("should understand javascript character types", function () {
    var characterType = typeof("Amory".charAt(1));
    
    var expectedValue = FILL_ME_IN;
    var actualValue = characterType;

    expect(actualValue).toBe(expectedValue);
  });

  it("should understand escape characters", function () {
    var stringWithAnEscapedCharacter  = "\u0041pple";
    
    var expectedValue = FILL_ME_IN;
    var actualValue = stringWithAnEscapedCharacter;

    expect(actualValue).toBe(expectedValue);
  });

  it("should calculate string length", function () {
    var fruit = "apple";
    
    var expectedValue = FILL_ME_IN;
    var actualValue = fruit.length;

    expect(actualValue).toBe(expectedValue);
  });

  it("should understand slicing", function () {
    var fruit = "apple pie";
    
    var expectedValue = FILL_ME_IN;
    var actualValue = fruit.slice(0, 5);

    expect(actualValue).toBe(expectedValue);
  });


});