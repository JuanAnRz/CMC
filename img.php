<?php
// Conexión a la base de datos
$host = 'localhost';
$db = 'cine';
$user = 'root';
$password = '';

$conn = new mysqli($host, $user, $password, $db);

if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Consulta para obtener la imagen
$id = $_GET['1']; // Supongamos que el ID se pasa como parámetro en la URL
$sql = "SELECT img FROM pelicula WHERE id = 1";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    header('Content-Type: image/jpeg'); // Cambiar según el tipo de imagen
    echo $row['img'];
} else {
    http_response_code(404);
    echo "Imagen no encontrada.";
}

$conn->close();
?>
