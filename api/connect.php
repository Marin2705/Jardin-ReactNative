<?php
    $host = "sqletud.u-pem.fr";
    $dbname = "elodie.pan_db";
    $login = "elodie.pan";
    $password = "elodie";
    
    $db = new PDO("mysql:host=$host;dbname=$dbname;port=3306;charset=utf8", $login, $password);
?>