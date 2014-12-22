var _; //globals

/* This section uses a functional extension known as Underscore.js - http://documentcloud.github.com/underscore/
     "Underscore is a utility-belt library for JavaScript that provides a lot of the functional programming support
      that you would expect in Prototype.js (or Ruby), but without extending any of the built-in JavaScript objects.
      It's the tie to go along with jQuery's tux."
 */
describe("About Higher Order Functions", function () {

    var odd,
        numbers,
        numbersPlus1,
        reduction,
        msg,
        isEven,
        onlyEven,
        mixedBag,
        result;

    describe("Using 'filter'", function () {

        beforeEach(function () {
            numbers = [1,2,3];
            odd = _(numbers).filter(function (x) { return x % 2 !== 0 });
        });

        it("should have an array that meets a criteria", function () {
            expect(odd).toEqual(FILL_ME_IN);
        });

        it("should have have the correct array", function () {
            expect(odd.length).toBe(FILL_ME_IN);
        });

        it("should assert the original array is untouched", function () {
            expect(numbers.length).toBe(FILL_ME_IN);
        });
    });


    describe("Using 'map'", function () {

        beforeEach(function () {
            numbers = [1, 2, 3];
            numbersPlus1 = _(numbers).map(function(x) { return x + 1 });
        });

        it("should transform each element", function () {
            expect(numbersPlus1).toEqual(FILL_ME_IN);
        });

        it("should assert the original array is untouched", function () {
            expect(numbers).toEqual(FILL_ME_IN);
        })
    });


    describe("Using 'reduce'", function () {

        beforeEach(function () {
            numbers = [1, 2, 3];
            reduction = _(numbers).reduce(
                    function(/* result from last call */ memo, /* current */ x) { return memo + x }, /* initial */ 0);
        });

        it("should use 'reduce' to update the same result on each iteration", function () {
            expect(reduction).toBe(FILL_ME_IN);
        });

        it("should assert the original array is untouched", function () {
            expect(numbers).toEqual(FILL_ME_IN);
        });
    });


    describe("Using 'forEach'", function () {

        beforeEach(function () {
            numbers = [1,2,3];
            msg = "";
            isEven = function (item) {
              msg += (item % 2) === 0;
            };

            _(numbers).forEach(isEven);
        });

        it("should use 'forEach' for simple interaction", function () {
            expect(msg).toEqual(FILL_ME_IN);
        });

        it("should assert the original array is untouched", function () {
            expect(numbers).toEqual(FILL_ME_IN);
        });
    });


    describe("Using 'all'", function () {

        beforeEach(function () {
            onlyEven = [2,4,6];
            mixedBag = [2,4,5,6];
            isEven = function(x) { return x % 2 === 0 };
        });

        it("should use 'all' to test whether all items pass condition", function () {
            expect(_(onlyEven).all(isEven)).toBe(FILL_ME_IN);
        });

        it("should use 'all' to test whether all items pass condition", function () {
            expect(_(mixedBag).all(isEven)).toBe(FILL_ME_IN);
        });

    });


    describe("Using 'any'", function () {

        beforeEach(function () {
            onlyEven = [2,4,6];
            mixedBag = [2,4,5,6];
            isEven = function(x) { return x % 2 === 0 };
        });

        it("should use 'any' to test if any items pass condition", function () {
            expect(_(onlyEven).any(isEven)).toBe(FILL_ME_IN);
        });

        it("should use 'all' to test if any items pass condition", function () {
            expect(_(mixedBag).any(isEven)).toBe(FILL_ME_IN);
        });

    });


    describe("Generating arrays with 'range'", function () {

        it("should use range to generate an array from one argument", function () {
            expect(_.range(3)).toEqual(FILL_ME_IN);
        });

        it("should use range to generate an array from two arguments", function () {
            expect(_.range(1, 4)).toEqual(FILL_ME_IN);
        });

        it("should use range to generate an array from three arguments", function () {
            expect(_.range(0, -4, -1)).toEqual(FILL_ME_IN);
        });
    });


    describe("Using flatten.", function () {

        it("should use flatten to make nested arrays easy to work with", function () {
            expect(_([ [1, 2], [3, 4] ]).flatten()).toEqual(FILL_ME_IN);
        });
    });


    describe("Using chain for multiple higher order functions", function () {
        beforeEach(function () {
            result = _([ [0, 1], 2 ]).chain()
                             .flatten()
                             .map(function(x) { return x+1 } )
                             .reduce(function (sum, x) { return sum + x })
                             .value();
        });

        it("should use chain() ... .value() to use multiple higher order functions", function () {
            expect(result).toEqual(FILL_ME_IN);
        });
    });

});
