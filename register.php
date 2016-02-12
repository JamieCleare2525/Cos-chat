<?php
include_once("connection.php");

//Retrieve the values from the form.
//echo $_POST['username'];
$username = $_POST['username'];
$email = $_POST['email'];
$firstname = $_POST['first_name'];
$lastname = $_POST['last_name'];
$dob = $_POST['dob'];
$password = $_POST['password'];
$county_state = $_POST['county_state'];
$country = $_POST['country'];

include_once("database.php");

$check_sql = "SELECT COUNT(*) FROM user WHERE username = '$username' LIMIT 1";

//execute statement
$statement = $connection->query($check_sql);
$statement->execute();
//convert into an array
$duplicate = $statement->fetchColumn();
//test -- echo $duplicate;
if($duplicate > 0){
  echo "Username already exists";
}else{
try{
//insert data into server database.
$sql = "INSERT INTO user (username, email, first_name, last_name, d_o_b, password, county_state, country)
VALUES ('$username', '$email', '$firstname', '$lastname', '$dob', '$password', '$county_state', '$country')";

$connection->exec($sql);
echo "New record added successfully";

}
catch(PDOException $e){
  echo $sql . "<br>" . $e->getMessage();
}
}
$connection = null;
?>
