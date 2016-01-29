function Pizza(size, cheese, topping) {
	this.size = size;
	this.cheese = cheese;
	this.topping = topping;
}

Pizza.prototype.price = function() {


	var pizzaPrice = 8;

	if (
		this.size === "Medium"
		) {
		pizzaPrice += 6;
	} else if (
    this.size === "Large" ||
    this.size === "Xlarge"
  ) {
		pizzaPrice += 10;
	}


	if (this.cheese === "Supreme" ) {
		pizzaPrice += 8;
	} else if (this.cheese ==="Cheese") {
		pizzaPrice += 0;
	}

	if (this.topping === true) {
		pizzaPrice +=3;
	} else if (this.topping === false) {
		pizzaPrice += 3;
	}

	return pizzaPrice;
};


$(document).ready(function() {

	$("form#pizza-information").submit(function(event) {
    debugger;

		event.preventDefault();

		var selectedSize = $("select#cheese").val();
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

		$("span#finalPrice").text(newpizzaPrice);

	});
});
