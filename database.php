<?php
include_once("connection.php");
$user_table = "CREATE TABLE IF NOT EXISTS user(
              username VARCHAR(50) NOT NULL UNIQUE,
              email VARCHAR(150) NOT NULL,
              first_name VARCHAR(60) NOT NULL,
              last_name VARCHAR(80) NOT NULL,
              d_o_b DATE NOT NULL,
              password VARCHAR(150) NOT NULL,
              county_state VARCHAR(150) NOT NULL,
              country VARCHAR(150) NOT NULL )";

$connection->exec($user_table);

?>
