describe("About Mutability", function() {

    var aPerson;

    describe("Object Properties", function () {
        beforeEach(function () {
            aPerson = {firstname: "John", lastname: "Smith" };
            aPerson.firstname = "Alan";
        });

        it("should expect object properties to be public and mutable", function () {
            expect(aPerson.firstname).toBe(FILL_ME_IN);
        });
    });


    describe("Constructed Properties", function () {
        beforeEach(function () {
            function Person(firstname, lastname)
            {
              this.firstname = firstname;
              this.lastname = lastname;
            }
            aPerson = new Person ("John", "Smith");
        });

        it("should understand that constructed properties are public and mutable", function () {
            aPerson.firstname = "Alan";
            expect(aPerson.firstname).toBe(FILL_ME_IN);
        });
    });


    describe("Prototype Properties", function () {
        beforeEach(function () {
            function Person(firstname, lastname)
            {
              this.firstname = firstname;
              this.lastname = lastname;
            }
            Person.prototype.getFullName = function () {
              return this.firstname + " " + this.lastname;
            };
        });

        it("should expect prototype properties to be public", function () {
            aPerson = new Person ("John", "Smith");
            expect(aPerson.getFullName()).toBe(FILL_ME_IN);
        });

        it("should expect prototype properties to be mutable", function () {
            aPerson.getFullName = function () {
              return this.lastname + ", " + this.firstname;
            };
            expect(aPerson.getFullName()).toBe(FILL_ME_IN);
        });
    });

    describe("Constructor Variables", function () {
        beforeEach(function () {
            function Person(firstname, lastname)
            {
              var fullName = firstname + " " + lastname;

              this.getFirstName = function () { return firstname; };
              this.getLastName = function () { return lastname; };
              this.getFullName = function () { return fullName; };
            }
            aPerson = new Person ("John", "Smith");
        });

        it("should know that constructor args are private", function () {
            aPerson.firstname = "Penny";
            expect(aPerson.getFirstName()).toBe(FILL_ME_IN);
        });

        it("should know that constructor args are private", function () {
            aPerson.lastname = "Andrews";
            expect(aPerson.getLastName()).toBe(FILL_ME_IN);
        });

        it("should know that variables inside a constructor are private", function () {
            aPerson.fullName = "Penny Andrews";
            expect(aPerson.getFullName()).toBe(FILL_ME_IN);
        });

        it("should know that variables inside a constructor are private", function () {
            aPerson.getFullName = function () {
              return aPerson.lastname + ", " + aPerson.firstname;
            };

            expect(aPerson.getFullName()).toBe(FILL_ME_IN);
        });
    });

});
