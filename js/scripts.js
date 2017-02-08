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

// Pizza.prototype.addToList = function(){
//   var li=document.createElement("li");
//   var node = document.createTextNode(this.pizzaSize + this.pizzaToppings + "($)" + this.pizzaPrice.toFixed(2));
//   li.appendChild(node);
//   var ul = document.getElementById("pizzaList");
//   ul.appendChild(li);
// };

// Pizza.prototype.submitList = function(x){
//   var input = document.createElement("input");
//   var node = document.createTextNode(this.pizzaSize + this.pizzaToppings + "($)" + this.pizzaPrice.toFixed(2));
//   input.appendChild(node);
//   input.name = "orderItem";
//   input.value =this.pizzaSize + this.pizzaToppings + "($)" + this.pizzaPrice.toFixed(2);
//   var ul = document.getElementById(x);
//   ul.appendChild(input);
// };



Pizza.prototype.addToList = function(){
  var li=document.createElement("li");
  var node = document.createTextNode(this.pizzaSize + this.pizzaToppings + "($)" + this.pizzaPrice.toFixed(2));
  li.appendChild(node);
  // li.name = "orderItem";
  var ul = document.getElementById("pizzaList");
  ul.appendChild(li);
};

var displayList = function (orderList, count){
  for (var i = 0; i < count; i++)
  {
    var li=document.createElement("li");
    var node = document.createTextNode(Object.values(orderList[i]));
    li.appendChild(node);
    var ul = document.getElementById("displayOrder");
    ul.appendChild(li);

  }
};

var clearList = function (){
  for (var i = 0; i < count; i++)
  {
    var ul = document.getElementById("displayOrder");
    ul.removeChild(li);
  }
};

$(document).ready(function(){
  var total = 0;
  var count = 0;
  var orderList = [];
  $("#readyToOrderButton").click(function(){
    $(this).remove();
    $("#pizzaDetailsDiv").show();
  });

    $("#addPizzaButton").click(function(){

    var size = "";
    var toppings = [];
    size = $("#pizzaDetailsDiv input[type='radio']:checked").val();
    $("#pizzaDetailsDiv input[type='checkbox']:checked").each(function(){
      toppings.push($(this).val());
    });

    var myPizza = new Pizza(size, toppings);
    total += myPizza.pizzaPrice;


    $("#customerOrder").show();
    $("#continueToCheckoutButton").show();

    myPizza.addToList();
    orderList[count] = myPizza;
    count++;

    $("#showTotal").text("$" + total.toFixed(2));

  });

  $("#continueToCheckoutButton").click(function(){

    $("html, body").animate({
      scrollTop: $("#form1").offset().top
    }, 2000);
    $("#showForm").hide();
    $("#form1").show();

      displayList(orderList, count);

      // document.getElementById("displayOrder").innerHTML = Object.values(orderList[i]);



  });
  $("clearFormButton").reset(function(event){
    event.preventDefault();
    clearList();
    var total = 0;
    var count = 0;
    var orderList = [];
  });
    $("#customerDetailsSubmitButton").submit();
});
