function Pizza(size, toppings){
  this.pizzaSize = size;
  this.pizzaToppings = toppings;
  this.pizzaPrice = 0;
  for (var i = 0; i < this.pizzaToppings.length; i++)
  {
    this.pizzaPrice +=2.50;
  }
  if (this.pizzaSize === 'Small'){
    this.pizzaPrice += 5;
  } else if (this.pizzaSize === 'Medium'){
    this.pizzaPrice += 10;
  } else if (this.pizzaSize === 'Large') {
    this.pizzaPrice += 20;
  }

}

Pizza.prototype.addToList = function(){
  var li=document.createElement("li");
  var node = document.createTextNode(this.pizzaSize + this.pizzaToppings + "($)" + this.pizzaPrice.toFixed(2));
  li.appendChild(node);
  var ul = document.getElementById("pizzaList");
  ul.appendChild(li);
};

$(document).ready(function(){
  $("#readyToOrderButton").click(function(){
    $(this).remove();
    $("#showForm").show();
  });
  var total = 0;
    $("#orderPizzaButton").click(function(event){
    event.preventDefault();
    var size = "";
    var toppings = [];
    size = $("#pizzaDetailsForm input[type='radio']:checked").val();
    $("#pizzaDetailsForm input[type='checkbox']:checked").each(function(){
      toppings.push($(this).val());
    });

    var myPizza = new Pizza(size, toppings);
    total += myPizza.pizzaPrice;

    $("#customerOrder").show();
    $("#checkoutButton").show();
    myPizza.addToList();

    $("#showTotal").text("$" + total.toFixed(2));
  });
  $("#checkoutButton").click(function(event){
    event.preventDefault();
    $("#showForm").hide();

    $("#customerDetailsForm").show();
    // $("html, body").animate({
    //   scrollTop: $("#customerDetailsForm").offset().top
    // }, 2000);
  });
});
