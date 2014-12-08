describe("About Expects", function() {

  // We shall contemplate truth by testing reality, via spec expectations.
  it("should expect true", function() {
    expect(false).toBeTruthy(); //This should be true
  });

  // Sometimes we will ask you to fill in the values.
  it("should have filled in values", function () {
    expect(1 + 1).toEqual(FILL_ME_IN);
  });

  // Sometimes we will ask you a trick question.
  it("should understand different type behaviors", function () {
    expect('1' + '1').toEqual(FILL_ME_IN);
  });

  // To understand reality, we must compare our expectations against reality.
  it("should expect equality", function () {
    var actualValue = 1 + 1;
    expect(actualValue === FILL_ME_IN).toBeTruthy();
  });

  // Some ways of asserting equality are better than others.
  it("should assert equality a better way", function () {
    var actualValue = 1 + 1;

    // toEqual() compares using type-converting equality.
    expect(actualValue).toEqual(FILL_ME_IN);
  });

  // Sometimes you need to be really exact about what you "type."
  it("should assert equality with ===", function () {
    var actualValue = (1 + 1).toString();

    // toBe() compares using strict equality
    // further reading: http://stackoverflow.com/a/523647/626048
    expect(actualValue).toBe(2);
  });

  // Sometimes you don't want to be exact about what you "type."
  it("should assert equality with coercion", function () {
    var expectedValue = '2';
    var actualValue = 2;

    expect(actualValue === expectedValue).toBeTruthy();
  });
});
