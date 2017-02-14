function Pizza(size, toppings){
  this.pizzaSize = size;
  this.pizzaToppings = toppings;
  this.pizzaPrice = 0;
  for (var i = 0; i < this.pizzaToppings.length; i++){
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
  var li=document.createElement("option");
  var node = document.createTextNode(this.pizzaSize + this.pizzaToppings + "($)" + this.pizzaPrice.toFixed(2));
  li.appendChild(node);
  var ul = document.getElementById("pizzaList");
  ul.appendChild(li);
};

var displayList = function (orderList, count){
  for (var i = 0; i < count; i++){
    var li=document.createElement("li");
    var node = document.createTextNode(Object.values(orderList[i]));
    li.appendChild(node);
    var ul = document.getElementById("displayOrder");
    ul.appendChild(li);
  }
};

var clearList = function (total){
  var x = document.getElementById("pizzaList");
  alert(x.value);
  // total -= x.value;
  // alert(parseFloat(x.value));
  x.remove(x.selectedIndex);
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
    // displayList(orderList, count);
    orderList[count] = myPizza;
    count++;
    $("#showTotal").text("$" + total.toFixed(2));
  });
  $("#removePizzaButton").click(function(){
    clearList(total);
  });
  $("#continueToCheckoutButton").click(function(){
    $("html, body").animate({
      scrollTop: $("#form1").offset().top
    }, 2000);
    $("#showForm").hide();
    $("#form1").show();
    displayList(orderList, count);
  }); // document.getElementById("displayOrder").innerHTML = Object.values(orderList[i]);
  $("#customerDetailsSubmitButton").submit();
});
