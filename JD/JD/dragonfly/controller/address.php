<?php
    session_start();
     $userName = $_SESSION['userName'];
    // echo  $userName ;
    header("content-Type:text/html;charset:utf-8");
   if (isset($_GET['aid'])) {
        $_SESSION['aid'] = $_GET['aid'];
        die();
    };
   
    if (isset($_GET['editId'])) {
        $name = $_GET['name'];
        $address = $_GET['address'];
        $tel =  $_GET['tel'];
        $email =  $_GET['email'];
        $editId = $_GET['editId'];
        $conn = new mysqli('localhost','root','123456','myjd');
        if($conn->connect_errno){
            die("访问错误");
        }
        $conn-> query('set names utf8');
        $sql = "UPDATE addressinfo set NAME ='$name',address='$address',tel='$tel',email='$email' WHERE id='$editId';";
           if ($conn->query($sql) === TRUE) {
                echo "修改记录成功";
            } else {
                echo "Error: " . $sql . "<br>" . $conn->error;
        }
        $conn->close();   
    }else{
          $name =  $_GET['name'];
          $address =  $_GET['address'];
          $tel =  $_GET['tel'];
          $email =  $_GET['email'];
      
            $conn = new mysqli('localhost','root','123456','myjd');
            if($conn->connect_errno){
                die("访问错误");
            }
            $conn-> query('set names utf8');
            $sql = "INSERT INTO  addressinfo (NAME,address,tel,email,userName) VALUES('$name','$address','$tel','$email','$userName'); ";
           if ($conn->query($sql) === TRUE) {
                echo "新记录插入成功";
            } else {
                echo "Error: " . $sql . "<br>" . $conn->error;
            }
        $conn->close();
    }
  

      


  


?>