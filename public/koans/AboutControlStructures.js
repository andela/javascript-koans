describe("About Control Structures", function() {

  // To program logically, one must understand if
  it("should understand ifs", function() {
    var isPositive = false;
    if (2 > 0) {
      isPositive = true;
    }
    var expectedValue = FILL_ME_IN;
    var actualValue = isPositive;
    expect(actualValue).toBe(expectedValue);
  });

  // Or Switch Statements
  it("should be familiar with the switch construct", function() {
    var result = 0;
    switch (2) {
      case 1:
        result = 1;
        break;
      case 1 + 1:
        result = 2;
        break;
    }
    var expectedValue = FILL_ME_IN;
    var actualValue = result;
    expect(actualValue).toEqual(expectedValue);
  });

  // And Switch Statements with default cases
  it("should be familiar with switch default", function() {
    var result = "Pippin";
    switch ("m") {
        case "f":
            result = "Frodo";
            break;
        case "s":
            result = "Samwise";
                break;
        default:
            result = "Merry";
            break;
    }
    var expectedValue = FILL_ME_IN;
    var actualValue = result;
    expect(actualValue).toEqual(expectedValue);
  });

  // To write code that executes iteratively, one must understand the for loop
  it("should understand for loops", function () {
    var counter = 10;
    for (var i = 1; i <= 3; i++) {
      counter = counter + i;
    }
    var expectedValue = FILL_ME_IN;
    var actualValue = counter;

    expect(actualValue).toEqual(expectedValue);
  });

  /*************** More advanced Control Structures you should know *************/
  it("should be familiar with for in for objects", function () {
    var person = {
      name: "Amory Blaine",
      age: 102
    };
    var result = "";
    // for in enumerates the property names of an object
    for (var property_name in person) {
        result = result + property_name;
    }
    var expectedValue = FILL_ME_IN;
    var actualValue = result;

    expect(actualValue).toEqual(expectedValue);
  });

  //The ternary operator
  it("should be familiar with the ternary operator", function () {
    var fruit = true ? "apple" : "orange";
    var expectedValue = FILL_ME_IN;
    var actualValue = fruit;

    expect(actualValue).toEqual(expectedValue);
  });

  it("should be familiar with the ternary operator pt 2", function () {
    fruit = false ? "apple" : "orange";
    var expectedValue = FILL_ME_IN;
    var actualValue = fruit;

    expect(actualValue).toEqual(expectedValue);
  });

  //Understand how to assign default values with null coalescing
  it("should understand null coalescing", function () {
    var result = null || "a value";
    var expectedValue = FILL_ME_IN;
    var actualValue = result;

    expect(actualValue).toEqual(expectedValue);
  });
  
});