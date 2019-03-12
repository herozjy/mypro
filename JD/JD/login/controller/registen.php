<?php
  header("Content-Type:text/html;charset=UTF-8");
	
	$userName = $_POST['userName'];
	$userPass = $_POST['userPass'];
	$bothday = $_POST['bothday'];
	$email = $_POST['email'];
	$tel = $_POST['tel'];
	$Consignee = $_POST['Consignee'];
	$address = $_POST['address'];

	$conn = new mysqli('localhost','root','123456','myjd');
	
	if($conn->connect_errno){
	      die('数据访问错误。');
	    }
	$conn ->query('set names utf8');
 	
	$sql  = "INSERT INTO userinfo (userName,userPass,bothday,email,tel,Consignee,address) VALUES ('$userName','$userPass','$bothday','$email','$tel','$Consignee','$address')";

	if ($conn->query($sql) === TRUE) {
	    echo "注册成功";
	} else {
	    echo "Error: " . $sql . "<br>" . $conn->error;
	}
	 $conn ->close();
	echo "即将跳转到登录页";


?>