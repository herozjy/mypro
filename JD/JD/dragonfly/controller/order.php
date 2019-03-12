<?php
   header("content-Type:text/html;charset:utf-8");
	$identifier =  $_POST["identifier"];
	$name =  $_POST["name"];
	$userName =  $_POST["userName"];

    $conn = new mysqli('localhost','root','123456','myjd');
    if($conn->connect_errno){
        die("访问错误");
    }
    $orderId = time();
    $time    = date('Y-m-d h:i:s', time());
    $conn ->query("set names utf8");
    $sql = "INSERT INTO  orderInfo (name,identifier,orderId,userName,ordertime) VALUES('$name','$identifier','$orderId','$userName','$time'); ";
   if ($conn->query($sql) === TRUE) {
        echo "新记录插入成功";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
    $conn->close();


?>