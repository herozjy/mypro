<?php
    header("content-Type:text/html;charset:utf-8");
    $Json = $_POST['Json'];
    $arr_json = json_decode($Json,true) ;

    $conn = new mysqli('localhost','root','123456','myjd');
    if($conn->connect_errno){
        die("访问错误");
    }
     $conn-> query('set names utf8');
      $sql = " ";
      $identifier  = time();
      for($i=1;$i<=count( $arr_json);$i++ ){
               $href = $arr_json["a"."$i"]['href'];
               $img = $arr_json["a"."$i"]['img'];
               $shopInfo = $arr_json["a"."$i"]['shopInfo'];
               $price = $arr_json["a"."$i"]['price'];
               $num = $arr_json["a"."$i"]['num'];
               $arr_json["a"."$i"]['identifier'] =$identifier ;
               $sql .= "INSERT into submit_shopinfo (href,img,shopInfo,price,num,identifier) VALUES ('$href','$img','$shopInfo','$price','$num','$identifier');";
      }
   
       if ($conn->multi_query($sql) === TRUE) {
          $Json = json_encode($arr_json,true);
          echo $Json;
      } else {
          echo "Error: " . $sql . "<br>" . $conn->error;
      }
        $conn->close();

?>