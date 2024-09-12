<html lang="es">
<head>
<link rel="stylesheet" href="styles.css"> 
</head>
</html>
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
    $option = $_POST['options'];

    $sql = "SELECT * FROM usuarios WHERE username='$username' AND password='$password'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        if ($option == '1') {
            header("Location: pagina1.html");
        } elseif ($option == '2') {
            header("Location: pagina2.html");
        } else {
            header("Location: pagina3.html");
        }
    } else {
        echo '<div class="error-container"><div class="error-message">Usuario o contraseña incorrectos</div></div>';
    }
}

$conn->close();
?>
