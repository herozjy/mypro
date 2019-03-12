<?php
    session_start();
       header("content-Type:text/html;charset:utf-8");
    if (isset($_GET['delid'])) {
    	$delid = $_GET['delid'];
    	
            $conn = new mysqli('localhost','root','123456','myjd');
            if($conn->connect_errno){
                die("访问错误");
            }
            $conn-> query('set names utf8');
            $sql = "DELETE FROM addressinfo WHERE id='$delid';";
            $retval = $conn->query($sql );
            if(! $retval )
			{
			    die('无法删除数据: ' . mysqli_error($conn));
			}
			echo '数据删除成功！';
            $conn->close();
       
    }
    if (isset($_GET['editid'])) {
    	$editid = $_GET['editid'];
    		echo $editid ;
    }

?>