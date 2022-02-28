<?php
session_start();
if($_SESSION["valid"] != true){
    header("location: login.php");
}
?>
