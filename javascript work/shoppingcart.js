"use strict"

var shoppingCart = function() {
	this.items = []
}

var item = function(name, price) {
	this.name = name;
	this.price = price;
}

shoppingCart.prototype.addItem = function(item) {
	this.items.push(item);
	console.log("Adding item " + item.name + " to the cart at a price of " + item.price)
	return this.items;
};

shoppingCart.prototype.total = function(items) {
	//reduce method to sum up all the prices
	//if items length more than 5 return 90% of total value
}




var apple = new item("apple", 10)
var orange = new item("orange", 5)
var grapes = new item("grapes", 15)
var banana = new item("banana", 20)
var watermelon = new item("watermelon", 50)

var newcart = new shoppingCart();
newcart.addItem(apple);
newcart.addItem(orange);
newcart.addItem(grapes);
newcart.addItem(banana);
newcart.addItem(watermelon);

