<?php
    $host = "localhost";
    $dbname = "jardin_react";
    $login = "root";
    $password = "";

    $db = new PDO("mysql:host=$host;dbname=$dbname;port=3306;charset=utf8", $login, $password);
?>