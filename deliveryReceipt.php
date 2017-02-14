<?php
  $pizzaSize = $_POST["pizzaSize"];
  $toppings = $_POST["pizzaToppings"];

    $orderItem = $_POST["orderItem"];

  $customerName = $_POST["customerName"];
  $customerAddress = $_POST["customerAddress"];
  $customerEmail = $_POST["customerEmail"];

?>


<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Delivery Receipt</title>
  </head>
  <body>
    <h1>Customer Receipt</h1>

    <p>ORDER ITEM:
      <strong><?php echo $orderItem ?></strong></p>



<p>Size:
    <?php echo $pizzaSize ?>
</p>

<p>Toppings:
<?php foreach($toppings as $pizzaToppings) {
  echo "$pizzaToppings";
} ?>
</p>

    <p>Thank you, <strong>  <?php echo $customerName ?>! </strong> </p>
    <!-- <p>Your Order is as follows: </p> -->

    <!-- <p>Your order will be shipped to: </p> -->
    <p>  address: <strong> <?php echo $customerAddress ?>  </strong></p>

    <!-- <p>A receipt has been emailed to: </p> -->
    <p>  email: <strong>  <?php echo $customerEmail ?>  </strong></p>

  </body>
</html>
