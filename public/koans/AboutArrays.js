//We shall contemplate truth by testing reality, via spec expectations.
describe("About Arrays", function() {

  isArray = function (obj) {
    if (typeof(obj) === 'object' && obj.hasOwnProperty('length')) {
      console.log(typeof(obj));
      return true;
    }
    return false;
  };

  describe('Create Arrays', function() {

    var emptyArray = [];

    it('should check if of type array', function() {
        expect(isArray(emptyArray)).toBeFalsy(); //this should be true
      });

      it('should check array length', function() {
        expect(emptyArray.length).toEqual(FILL_ME_IN);
      });
    });

  // describe('Array Values', function() {

  //   var multiTypeArray = [0, 1, "two", function () { return 3; }, {value1: 4, value2: 5}, [6, 7]],


  //   it('should check array value', function() {
  //     expects(multiTypeArray[FILL_KEY_IN]).toBe(FILL_ME_IN);
  //   });

  //   it('should check the return value of the function in an array', function() {
  //     expects(multiTypeArray[FILL_KEY_IN]()).toEqual(FILL_ME_IN);
  //   });

  //   it('should check for nested cases', function() {
  //     expect(multiTypeArray[FILL_ME_IN][FILL_ME_IN]).toEqual(FILL_ME_IN);
  //   });

  // });

  describe('Array Length', function() {

      var fourNumberArray = [1,2,3,4],
         tenEmptyElementArray = new Array(10);

    it('should understand array length', function(){
      expect(fourNumberArray.length).toEqual(FILL_ME_IN);
    });

    it('should reflect changes to array length', function() {
      fourNumberArray.push(5, 6);
      expect(fourNumberArray.length).toEqual(FILL_ME_IN);
    });

    it('should detect the length of an empty array', function() {
      expect(tenEmptyElementArray.length).toEqual(FILL_ME_IN);
    });

    it('should reflect the length changes in an empty array', function() {
      tenEmptyElementArray.length = 5;
      expect(tenEmptyElementArray.length).toEqual(FILL_ME_IN);
    });
  });


});
