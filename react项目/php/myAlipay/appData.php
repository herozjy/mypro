<?php 
   header("Access-Control-Allow-Origin: ityangs.net"); 
  header("Access-Control-Allow-Origin: *");
  header("content-Type:text/html;charset:utf-8");

	if(isset($_GET["id"])){
		$id = $_GET["id"];
		$isCheck = $_GET["isCheck"];
		$conn = new mysqli('localhost','root','123456','myalipay');
  		  if($conn->connect_errno){
       			 die("连接错误");
  		  }
		 $conn ->query("set names utf8");
			
		 $sql =" UPDATE appdata SET isCheck=$isCheck WHERE id=$id ";
	  	$result = $conn->query($sql);
    if($result){
      
         $sql = "SELECT * from appData";
        $result = $conn->query($sql);
        $arr=[];
         if ( $result->num_rows>0) {
          
        while($rows = $result->fetch_assoc()){
          $arr[] = $rows ;
        }

        $rows = json_encode($arr);
              print_r($rows);
          } else {
              echo "Error: " . $sql . "<br>" . $conn->error;
          }
            $conn->close();
    }
		
	}else{
 	$conn = new mysqli('localhost','root','123456','myalipay');
    if($conn->connect_errno){
        die("连接错误");
    }
    $conn ->query("set names utf8");

    $sql = "SELECT * from appData";
 	$result = $conn->query($sql);
	$arr=[];
   if ( $result->num_rows>0) {
		
	while($rows = $result->fetch_assoc()){
		$arr[] = $rows ;
	}

	$rows = json_encode($arr);
        print_r($rows);
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
    $conn->close();

   
}


  








 ?>