<?php
    header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Headers: Content');

    include_once 'connect.php';
    $data = json_decode(file_get_contents('php://input'), true);

    switch ($_GET["action"]){
        case 'getEvents':
            $stmt = $db -> query('SELECT * FROM partage');
            $results = $stmt -> fetchAll(PDO::FETCH_ASSOC);
            echo(json_encode($results));
            break;
        case 'addEvent' :
            $stmt = $db -> prepare("INSERT INTO partage VALUES (NULL, :name, :description, CURRENT_TIMESTAMP, 5)");
            echo json_encode($data);
            $stmt->execute(array(
                ':name' => $data["name"],
                ':description' => $data["description"]
            )); 
            break;
        case 'addLike' :
            $stmt = $db -> prepare("UPDATE partage SET likes = likes + 1 WHERE id = :id");
            
            $stmt -> execute(array(
                ':id' => $data["id"]
            ));
            break;
        case 'deleteLike' :
            $stmt = $db -> prepare("UPDATE partage SET likes = likes - 1 WHERE id = :id");
            
            $stmt -> execute(array(
                ':id' => $data["id"]
            ));
            break;
    }
    
?>