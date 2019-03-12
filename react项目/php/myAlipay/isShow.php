<?php 
// 允许 ityangs.net 发起的跨域请求
header("Access-Control-Allow-Origin: ityangs.net"); 
//如果需要设置允许所有域名发起的跨域请求，可以使用通配符 *
header("Access-Control-Allow-Origin: *");
 header("content-Type:text/html;charset:utf-8");


if(isset($_GET["isshow"])){
echo $_GET["isshow"];
	$show =  $_GET["isshow"]==="false" ? 1: 0;

 	$conn = new mysqli('localhost','root','123456','myalipay');
    if($conn->connect_errno){
        die("访问错误");
    }
    $conn ->query("set names utf8");

    $sql = "update isShow SET  isShow=$show  WHERE id=1";
 
   if ($conn->query($sql) === TRUE) {
        echo "新记录插入成功";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
    $conn->close();


}else{

$conn = new mysqli('localhost','root','123456','myalipay');
    if($conn->connect_errno){
        die("访问错误");
    }
    $conn ->query("set names utf8");

    $sql = "SELECT isshow from isShow ";
 	$result = $conn->query($sql);

   if ( $result->num_rows>0) {
		$rows = $result->fetch_assoc();
        print_r($rows['isshow']);
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
    $conn->close();




}
   








 ?>