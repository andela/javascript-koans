//We shall contemplate truth by testing reality, via spec expectations.
describe("About Arrays: ", function() {

  isArray = function (obj) {
    if (typeof(obj) === 'object' && obj.hasOwnProperty('length')) {
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

  describe('Array Values', function() {

    var multiTypeArray = [0, 1, "two", function () { return 3; }, {value1: 4, value2: 5}, [6, 7]];


    it('should check array value', function() {
      expects(multiTypeArray[2]).toBe(FILL_ME_IN);
    });

    it('should check the return value of the function in an array', function() {
      expects(multiTypeArray[3]()).toEqual(FILL_ME_IN);
    });

    it('should check for nested cases', function() {
      expect(multiTypeArray[5][0]).toEqual(FILL_ME_IN);
    });

  });

  describe('Array Length: ', function() {

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


  describe('Array Slicing: ', function() {

    beforeEach(function() {
      var array = ["peanut", "butter", "and", "jelly"];
    });

    it('should return only the first element in the array', function() {
      expect(array.slice(0,1)).toBe(FILL_ME_IN);
    });

    it('should return at least one element form the array', function() {
      expect(array.slice(0, 2)).toBe(FILL_ME_IN);
    });

    it('should return an empty array', function() {
      expect(array.slice(2,2)).toBe(FILL_ME_IN);
    });

    it('should return all element in the array from the start index', function() {
      expect(array.slice(2, 20)).toBe(FILL_ME_IN);
    });

    it('should be an empty array', function() {
      expect(array.slice(3,0)).toBe(FILL_ME_IN);
    });

  });

  describe('Array References: ', function() {

    var passedByReference = function (refArray) {
        refArray[1] = "changed in function";
    }

    beforeEach(function() {
      var array = [ "zero", "one", "two", "three", "four", "five" ];
    });

    it('should know array references', function() {
      passedByReference(array);
      expect(array[1]).toBe(FILL_ME_IN);
    });

    it('should pass by reference', function() {
      var assignedArray = array;
      assignedArray[5] = "changed in copyOfArray";
      expect(array[5]).toBe(FILL_ME_IN);
    });

    it('should understand array copy', function() {
      var copyOfArray = array.slice();
      copyOfArray[3] = "changed in copyOfArray";
      expect(array[3]).toBe(FILL_ME_IN);
    });

  });

  describe('Array Push and Pop: ', function() {

    beforeEach(function() {
      var array = [1,2];
    })

    it('should understand push', function() {
      array.push(3);
      expect(array).toEqual(FILL_ME_IN);
    });

    it('should understand return the popped value', function() {
      var poppedValue = array.pop();
      expect(poppedValue).toBe(FILL_ME_IN);
    });

    it('should show any changes in array', function() {
      expect(array).toEqual(FILL_ME_IN);
    });
  });

  describe('Array shift and unshift: ', function() {
    var array = [1,2];

    it('should know about shifting arrays', function() {
      array.unshift(3);
      expect(array).toEqual(FILL_ME_IN);
    });

    it('should know about the return value for an array unshifting operation', function() {
      var shiftedValue = array.shift();
      expect(shiftedValue).toEqual(FILL_ME_IN);
    });

    it('should know what value remains in a shifted array', function() {
      expect(array).toEqual(FILL_ME_IN);
    }); 
  });

});
