function Pizza(baseValue) {
  this.size = baseValue;
  this.toppings = [];
};

function Topping(price) {
    this.price = price;
}

Pizza.prototype.addToppings = function (toppingArray) {
  this.toppings = toppingArray;
};

Pizza.prototype.calculatePrice = function () {
  var pizzaPrice = this.size;
  this.toppings.forEach(function(topping){
    pizzaPrice += topping.price;
  });
  return pizzaPrice;
};


function makePizza(baseValue, toppingsArray){
  pizza = new Pizza(baseValue);
  var toppingObjectArray = toppingsArray.map(function(topping){
    var toppingInstance = new Topping(topping);
    return toppingInstance;
  });
  pizza.addToppings(toppingObjectArray);
  return pizza.calculatePrice();
};

//front end logic
function pizzaSizeAdjuster(sizeValue){

}


$(document).ready(function() {
  $("#pizza-order").submit(function(event){
    event.preventDefault();
    var crust = parseInt($("#crust").val());
    var sauce = parseInt($("#sauce").val());
    var cheese = parseInt($("#cheese").val());
    var meat = parseInt($("#meat").val());
    var veggie = parseInt($("#veggie").val());
    var special = parseInt($("#special").val());
    var toppingsArray = [crust, sauce, cheese, meat, veggie, special];
    $("#result").text("$" + makePizza(parseInt($("#size").val()), toppingsArray));
  });
  $(".form-control").change(function(){
    console.log("a selector was changed");
    console.log($("#size option:selected").text());
    //basic small pizza to start, change as go along and change stuff
  });
});
