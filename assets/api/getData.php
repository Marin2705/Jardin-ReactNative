<?php
    header("Access-Control-Allow-Origin: *");

    include_once 'connect.php';

    $stmt = $db -> query('SELECT * FROM partage');
    $results = $stmt -> fetchAll(PDO::FETCH_ASSOC);
    echo(json_encode($results));
?>