<?php
// *Call elements from the form
$name = $_POST['name'];
$email = $_POST['email'];
$business = $_POST['business'];
$message = $_POST['message'];

// *email data
$addressee = "oscarefrenlg@gmail.com";

$letter = "De: \n $name \n";
$letter .= "Asunto: \n $business \n";
$letter .= "email: \n $email \n";
$letter .= "Mensaje: \n $message \n";
$letter .= "Atentamente: \n $name";

// *Message sending function

mail($addressee, $business, $letter);
header("Location: /index.html");
