<?php
    session_start();
    $userName = $_SESSION['userName'];
    header("content-Type:text/html;charset:utf-8");
    if(isset($_SESSION['aid'])){
             $aid=$_SESSION['aid'];
            $conn = new mysqli('localhost','root','123456','myjd');
               if($conn->connect_errno){
                   die("访问错误");
               }
               $conn-> query('set names utf8');
               $sql = "select * from addressinfo where userName='$userName' ORDER BY id<>$aid asc ;";
               $result = $conn -> query($sql);


               $arr =[];
               if ($result->num_rows>0) {
                 while( $rows = $result->fetch_assoc()){//取得一行作为关联数组
                       // $name = $rows['name'];
                       // $address = $rows['address'];
                       // $tel = $rows['tel'];
                       // $email = $rows['email'];
                         $arr[]= json_encode($rows);

                 }
                    // print_r();
                     // $rows = $result->fetch_all();
                     echo json_encode($arr);
               }
               else {
                   echo "Error: " . $sql . "<br>" . $conn->error;
               }

               $conn->close();
    }else{

        $conn = new mysqli('localhost','root','123456','myjd');
        if($conn->connect_errno){
            die("访问错误");
        }
        $conn-> query('set names utf8');
        $sql = "select * from addressinfo where userName='$userName';";
        $result = $conn -> query($sql);


        $arr =[];
        if ($result->num_rows>0) {
          while( $rows = $result->fetch_assoc()){//取得一行作为关联数组
                // $name = $rows['name'];
                // $address = $rows['address'];
                // $tel = $rows['tel'];
                // $email = $rows['email'];
                  $arr[]= json_encode($rows);

          }
             // print_r();
              // $rows = $result->fetch_all();
              echo json_encode($arr);
        }
        else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }

        $conn->close();
    }






?>