<?php
    $size = $_GET["pizzaSize"];
    // $topping = $_GET["topping"];
    $customerName = $_GET["customerName"];
    $customerAddress = $_GET["customerAddress"];
    $customerEmail = $_GET["customerEmail"];
?>


<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Delivery Receipt</title>
  </head>
  <body>
    <h1>Customer Receipt</h1>

<p>size: <?php echo $size ?></p>


    <p>Thank you, <?php echo $customerName ?>!</p>
    <p>Your Order is as follows: </p>

    <p>Your order will be shipped to: </p>
    <p><?php echo $customerAddress ?></p>

    <p>A receipt has been emailed to: </p>
    <p> <?php echo $customerEmail ?></p>

  </body>
</html>
