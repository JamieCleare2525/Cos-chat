<?php
include_once("connection.php");

$username = $_GET['username'];
$password = $_GET['password'];
//Prepare statement
//build query
try{
$query="SELECT * FROM user WHERE username = '$username'";

//execute statement
$statement = $connection->query($query);
//convert into an array
$result = $statement->fetchAll(PDO::FETCH_ASSOC);

//display array elements
foreach($result as $output){
  if ($output['password'] == $password){
  echo $output['first_name'];
}else{
  echo "Password is incorrect";
}
}

}catch(PDOException $e){
  echo "Error: " . $e->getMessage();
}


$conn = null;

?>
