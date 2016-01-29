function Pizza(size, cheese, topping) {
	this.size = size;
	this.cheese = cheese;
	this.topping = topping;
}

Pizza.prototype.price = function() {


	var pizzaPrice = 10;

	if (
		this.size === "Small" ||
		this.size === "Medium" ||
		this.size === "Large" ||
		this.size === "Xlarge"
		) {
		pizzaPrice += 4;
	} else if (this.size === "Slice") {
		pizzaPrice += 0;
	}


	if (this.cheese === "Cheese" ) {
		pizzaPrice += 0;
	} else if (this.cheese ==="The Works") {
		pizzaPrice += 8;
	}

	if (this.topping === true) {
		pizzaPrice +=5;
	} else if (this.topping === false) {
		pizzaPrice += 0;
	}

	return pizzaPrice;
};

$(document).ready(function() {

	$("form#pizza-information").submit(function(event) {
    debugger;

		event.preventDefault();

		var selectedSize = $("select#size").val();
		var stringToppNum = $("input#Number").val();
		var integerToppings = parseInt(stringToppNum);
		var topping;


		if (integerToppings >= 3) {
			topping= true;
		} else if (integerToppings < 3) {
			topping= false;
		}

		var selectedCheese = $("select#cheese").val();

		newPizza = new Pizza(selectedSize, selectedCheese, topping);
		newpizzaPrice = newPizza.price();

		$("span#finalPrice").append(newpizzaPrice);

	});
});
