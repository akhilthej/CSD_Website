<?php 
header('Access-Control-Allow-Origin: *');

$conn = new mysqli("localhost", "root", "", "ilahe");

if ( isset($_POST['name']) || isset($_POST['email']) || isset($_POST['message'])) {

if (mysqli_connect_error()) {
    echo mysqli_connect_error();
    exit();
} else {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $sql = "INSERT INTO contactus (name, email, message) VALUES ( '$name','$email','$message');";
    $res = mysqli_query($conn, $sql);

    if ($res) {
        echo "Message Sent!";
    } else {
        echo "Error!";
    }

  }
    $conn->close();
}
?>
