describe("About Objects", function () {

  describe("Properties", function () {
    var megalomaniac;

    beforeEach(function () {
       megalomaniac = {  mastermind: "Joker", henchwoman: "Harley" };
    });

    it("should confirm objects are collections of properties", function () {
      expect(megalomaniac.mastermind).toBe(FILL_ME_IN);
    });

    it("should confirm that properties are case sensitive", function () {
      expect(megalomaniac.henchwoman).toBe(FILL_ME_IN);
    });

    it("should confirm that properties are also case sensitive", function(){
      expect(megalomaniac.henchWoman).toBe(FILL_ME_IN);
    });
  });


  it("should know properties that are functions act like methods", function () {
    var megalomaniac = {
      mastermind : "Brain",
      henchman: "Pinky",
      battleCry: function (noOfBrains) {
        return "They are " + this.henchman + " and the" +
          Array(noOfBrains + 1).join(" " + this.mastermind);
      }
    };

    var battleCry = megalomaniac.battleCry(4);
    expect(FILL_ME_IN).toMatch(battleCry);
  });


  describe("About 'this' refering to the Object when a Function is attached to an Object", function(){

    var currentDate = new Date();
    var currentYear = (currentDate.getFullYear());
    var megalomaniac = {
      mastermind: "James Wood",
      henchman: "Adam West",
      birthYear: 1970,
      calculateAge: function () {
        return currentYear - this.birthYear;
      }
    };

    it("should understand the value returned here", function () {
      expect(currentYear).toBe(FILL_ME_IN);
    });

    it("should confirm that when a function is attached to an object, 'this' refers to the object", function () {
      expect(megalomaniac.calculateAge()).toBe(FILL_ME_IN);
    });

  });

  describe("'in' keyword", function () {
    var megalomaniac;
    beforeEach(function () {
      megalomaniac = {
        mastermind: "The Monarch",
        henchwoman: "Dr Girlfriend",
        theBomb: true
      };
    });

    it("should have the bomb", function () {

      var hasBomb = "theBomb" in megalomaniac;

      expect(hasBomb).toBe(FILL_ME_IN);
    });

    it("should not have the detonator however", function () {

      var hasDetonator = "theDetonator" in megalomaniac;

      expect(hasDetonator).toBe(FILL_ME_IN);
    });
  });


  describe("About Addition and Deleting Of Properties", function(){

      var megalomaniac = { mastermind : "Agent Smith", henchman: "Agent Smith" };

      it("should understand how properties can be added or deleted", function(){
        expect("secretary" in megalomaniac).toBe(FILL_ME_IN);
      });

      it("should know that properties can be added", function(){
        megalomaniac.secretary = "Agent Smith";
        expect("secretary" in megalomaniac).toBe(FILL_ME_IN);
      });

      it("should know that properties can be deleted", function(){
        delete megalomaniac.henchman;
        expect("henchman" in megalomaniac).toBe(FILL_ME_IN);
      });
  });

 describe("About Using Prototype To Add To All Objects", function(){

      function Circle(radius)
      {
        this.radius = radius;
      }

      var simpleCircle = new Circle(10);
      var colouredCircle = new Circle(5);
      colouredCircle.colour = "red";


      Circle.prototype.describe = function () {
        return "This circle has a radius of: " + this.radius;
      };

      it("should give a value ", function(){
         expect(simpleCircle.colour).toBe(FILL_ME_IN);
      });

      it("should expect the value of this Object", function(){
         expect(colouredCircle.colour).toBe(FILL_ME_IN);
      });

      it("should understand prototyping ", function(){
         expect(simpleCircle.describe()).toBe(FILL_ME_IN);
      });

      it("should understand how prototype works", function(){
         expect(colouredCircle.describe()).toBe(FILL_ME_IN);
      });

  });

});
