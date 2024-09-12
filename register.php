<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro</title>
    <style>
        body {
            background-color: #2c3e50; /* Fondo azul */
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }

        .container {
            background-color: #2c3e50;
            color: white;
            text-align: center;
            padding: 20px;
            border-radius: 15px; /* Bordes redondeados */
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
            width: 300px;
        }

        a {
            color: white;
            text-decoration: none;
        }

        a:hover {
            color: #0000FF; /* Cambia a azul cuando pasas el mouse */
        }
    </style>
</head>
<body>

<div class="container">
    <?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "mi_base_de_datos";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Conexión fallida: " . $conn->connect_error);
    }

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $username = $_POST['username'];
        $password = $_POST['password'];

        $sql = "INSERT INTO usuarios (username, password) VALUES ('$username', '$password')";
        if ($conn->query($sql) === TRUE) {
            echo "Registro exitoso. <a href='index.html'>Inicia sesión aquí</a>";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }

    $conn->close();
    ?>
</div>

</body>
</html>

