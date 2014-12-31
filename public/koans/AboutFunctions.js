describe("About Functions", function() {

  it("should declare functions", function() {

    function add(a, b) {
      return a + b;
    }

    expect(add(1, 2)).toBe(FILL_ME_IN);
  });


  describe("About Internal Variables Overriding Outer Variables", function(){

        var message = "Outer";

        function getMessage() {
          return message;
        }

        function overrideMessage() {
          var message = "Inner";
          return message;
        }

        it("should get the value of message from the function", function(){
            expect( getMessage()).toBe( FILL_ME_IN );
        });

        it("should know that inner variables override outer variables", function(){
           expect(overrideMessage()).toBe(FILL_ME_IN);
        });

        it("should know that outer variables remained unchanged if not re-initialized", function(){
            expect(message).toBe(FILL_ME_IN);
        });

  });


  it("should have lexical scoping", function () {
    var variable = "top-level";
    function parentfunction() {
      var variable = "local";
      function childfunction() {
        return variable;
      }
      return childfunction();
    }
    expect(parentfunction()).toBe(FILL_ME_IN);
  });

  it("should use lexical scoping to synthesise functions", function () {

    function makeMysteryFunction(makerValue)
    {
      var newFunction = function doMysteriousThing(param)
      {
        return makerValue + param;
      } 

    var mysteryFunction3 = makeMysteryFunction(3);
    var mysteryFunction5 = makeMysteryFunction(5);

    expect(mysteryFunction3(10) + mysteryFunction5(5)).toBe(FILL_ME_IN);
  });


  describe("About Allowing Extra Function Arguments", function(){
         
        it("should understand how arguments passing work", function () {

            function returnFirstArg(firstArg) {
              return firstArg;
            }

            expect(returnFirstArg("first", "second", "third")).toBe(FILL_ME_IN);
        });

        it("should expect second argument", function(){
            function returnSecondArg(firstArg, secondArg) {
              return secondArg;
            }

            expect(returnSecondArg("only give first arg")).toBe(FILL_ME_IN);    
        });

        it("should expect a string value from the all the arguments", function(){

            function returnAllArgs() {
              var argsArray = [];
              for (var i = 0; i < arguments.length; i += 1) {
                argsArray.push(arguments[i]);
              }
              return argsArray.join(",");
           }

           expect(returnAllArgs("first", "second", "third")).toBe(FILL_ME_IN);
        });     
  });

  describe("About passing Functions as Values", function(){

    var appendRules = function (name) {
        return name + " rules!";
    };

    var appendDoubleRules = function (name) {
        return name + " totally rules!";
    };

    var praiseSinger = { givePraise: appendRules };

    it("should have filled in Values", function () {
      expect(praiseSinger.givePraise("John")).toBe(FILL_ME_IN);
    });

    it("should expect value of the function passed", function(){
      praiseSinger.givePraise = appendDoubleRules;
      expect(praiseSinger.givePraise("Mary")).toBe(FILL_ME_IN);
    });
  });

});