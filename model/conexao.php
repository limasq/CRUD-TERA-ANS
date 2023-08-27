<?php

    $host = "localhost";
    $user = "root";
    $pass = "melancia";
    $dbname = "localwork";

    try {
        //Conexão sem a porta
        $conn = new PDO("mysql:host=$host;dbname=" . $dbname, $user, $pass);

        //echo "Conexão bem sucedida!";
    } catch(PDOException $erro) {
        //echo "A conexão com o banco falhor!\nErro: " . $erro->getMessage();
    }
?>


