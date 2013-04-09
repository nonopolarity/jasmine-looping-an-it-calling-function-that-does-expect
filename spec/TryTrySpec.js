describe("TryTry", function() {

	var i;

	for (i = 0; i < 5; i++) {
		console.log("HERE", i); 

		it("should add", function() {

			expect(foo(3, i)).toEqual( 3 + i );

		});

	}

});

