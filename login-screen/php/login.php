<?php 
if($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Database connection setup
    $serverName = "localhost"; // Enter your database host 
    $serverUserName = "root"; // Enter your database username
    $serverPassword = ""; //Enter your database password
    $serverdb= "usersdb"; //Enter your database name

    $conn = new mysqli($serverName,$serverUserName,$serverPassword,$serverdb);

    if($conn -> connect_error) {
        die("DataBase Connection Error" . $conn -> connect_error);
    }

    $stmt = $conn -> prepare("SELECT * FROM users WHERE username = ?");

    $stmt -> bind_param("s",$username);
    $stmt -> execute();

    $result = $stmt -> get_result();

    if($result -> num_rows > 0) {
        
        $row = $result -> fetch_assoc();
        $dbPassword = $row['password'];

        if(password_verify($password,$dbPassword)) {
            echo "User found  Successfully logged in <br> User: " . $username ."<br>"
            . "Go Main Page: <a href='http://localhost/login-screen/index.html'>Sign In</a>". 
             "<style> *{font-size: 52px;} </style>";
        }else{
            echo "<script>
                alert('Uncorrect Password'); 
                window.location.href = '/login-screen/index.html'; 
            </script>";
        }

    }else {
        echo "<script>
        alert('Unknow User');
        window.location.href = '/login-screen/index.html';
    </script>";
    }

    $stmt -> close();
    $conn -> close();
}

?>