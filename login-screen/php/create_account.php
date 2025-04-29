<?php 

if($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $username = $_POST['username'];
    $password = $_POST['password'];
    $password2 = $_POST['password2'];

    $hashedPassword = password_hash($password,PASSWORD_DEFAULT);
    $hashedPassword2 = password_hash($password2,PASSWORD_DEFAULT);

    // Database connection setup
    $serverName = "localhost"; // Enter your database host 
    $serverUserName = "root"; // Enter your database username
    $serverPassword = ""; //Enter your database password
    $serverdb = "usersdb"; //Enter your database name

    $conn = new mysqli($serverName,$serverUserName,$serverPassword,$dataBase);
    
    if($conn->connect_error) {
        die("Data Base Connection Error" . $conn->connect_error);
    }

    $stmt = $conn -> prepare("INSERT INTO users (username, password) VALUES (?, ?)");
    $stmt -> bind_param("ss",$username,$hashedPassword);
    
    if($stmt->execute()) {
        echo "<script>
            alert('Register Succesfull'); 
            window.location.href = '/login-screen/index.html';   
        </script>";
        $conn->close();
        exit(); 
    } else {
        echo "Register Error";
    }

    $conn->close();
}
?>