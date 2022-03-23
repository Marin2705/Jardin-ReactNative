<?php
    header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Headers: Content-Type');

    include_once 'connect.php';

    $data = json_decode(file_get_contents('php://input'), true);

    $stmt = $db -> prepare("INSERT INTO partage VALUES (NULL, :name, :description, CURRENT_TIMESTAMP, 5)");
    
    $stmt->execute(array(
        ':name' => $data["name"],
        ':description' => $data["description"]
    ));
?>