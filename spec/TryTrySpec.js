describe("TryTry", function() {

    var i;

    function checkForSituations(a) {
        // say, if this is made into a function because there are a lot of processing

        console.log("THERE", a); 
        expect(foo(3, a)).toEqual( 3 + a );
    }

    for (i = 0; i < 5; i++) {
        console.log("HERE", i); 

        it("should add for " + i, function() {

            checkForSituations(i);

        });

    }

});

