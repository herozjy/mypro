<?php
  header("Content-Type:text/html;charset=UTF-8");
	
  $userName = $_POST['userName'];
  
	$conn = new mysqli('localhost','root','123456','myjd');
	
	if($conn->connect_errno){
	      die('数据访问错误。');
	    }
	$conn ->query('set names utf8');
 	
	$sql  = "SELECT userName from userinfo  WHERE  userName='$userName';";
	$res =$conn->query($sql);
	// print_r($res);
	if ( $res->num_rows>0) {
	    echo "用户名已存在";
	} else {
	    echo "可以使用的用户名";
	}
	 $conn ->close();
	


?>