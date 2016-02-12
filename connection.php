<?php
//creates the variables that hold the values to connect to the database.
$dbhost = "localhost";
$dbuser = "root";
$dbpass = "root";
$dbname = "cos_chat2";

//Connect to MySQL server
try{
$connection = new PDO("mysql:host=$dbhost", $dbuser, $dbpass);
//setting the error Exception
$connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
//$dbname = "`".str_replace("`","``",$dbname)."`";
$connection->query("CREATE DATABASE IF NOT EXISTS $dbname");
$connection->query("use $dbname");
}
catch(PDOException $e){
  echo $sql . "<br>" . $e->getMessage();
}


?>
