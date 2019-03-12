<?php session_start(); ?>
<?php
 	header("Content-Type:text/html;charset=UTF-8");
    $userName = $_POST['userName'];
    $userPass = $_POST['userPass'];

  
	$conn = new mysqli('localhost','root','123456','myjd');
	if($conn->connect_errno){
	      die('数据访问错误。');
	 }
	$conn ->query('set names utf8');
 
	$sql  = "SELECT * from userinfo WHERE userName = '$userName'";
	$res  =$conn->query($sql);
	if ( $res ->num_rows>0) {
	       $row =$res->fetch_assoc();
	       if ( $row['userPass'] == $userPass ) {
	       		 $_SESSION['userName'] =$userName;
	        	echo "3";
	        }else{
	        	echo "2输入密码不正确,";
	        }

	} else {
	   echo "1用户名不存在,";
	}


	$conn ->close();
	



?>