describe("TryTry", function() {

    it("should add", function() {
    	var i;

    	for (i = 0; i < 5; i++) {
    		console.log("HERE", i); 
    		expect(foo(3, i)).toEqual( 3 + i );
    	}
        
    })

});

