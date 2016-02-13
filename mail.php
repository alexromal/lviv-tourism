<?php

$recepient = "youmail@ya.ru";
$sitename = "Website title";

$name = trim($_GET["name"]);
$phone = trim($_GET["phone"]);
$text = trim($_GET["text"]);

$pagetitle = "New message from \"$sitename\"";
$message = "Name: $name \nPhone: $phone \nMessage: $text";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
