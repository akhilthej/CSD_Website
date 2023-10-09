<?php 
header('Access-Control-Allow-Origin: *');

$conn = new mysqli("localhost", "root", "", "ilahe");

if ( isset($_POST['email'])) {

if (mysqli_connect_error()) {
    echo mysqli_connect_error();
    exit();
} else {
    $email = $_POST['email'];

    $sql = "INSERT INTO subscribers (email) VALUES ( '$email');";
    $res = mysqli_query($conn, $sql);

    if ($res) {
        echo "Thanks for Subscribing!";
    } else {
        echo "Error!";
    }

  }
    $conn->close();
}
?>
