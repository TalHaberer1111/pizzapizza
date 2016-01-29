describe('Pizza', function() {
	it("creates a new Pizza with the given properties", function() {
		var testPizza = new Pizza("Small", "Vegan Cheese", true);
		expect(testPizza.size).to.equal("Small");
		expect(testPizza.cheese).to.equal("Vegan Cheese");
		expect(testPizza.topping).to.equal(true);
	});
  it("adds the price method to a pizza - test 1", function() {
		var testPizza = new Pizza("Small", "Vegan Cheese", true);
		expect(testPizza.price()).to.equal(19);
	});

	it("adds the price method to a pizza - test 2", function() {
		var testPizza = new Pizza("Small", "Vegan Cheese", false);
		expect(testPizza.price()).to.equal(14);
	});

});
