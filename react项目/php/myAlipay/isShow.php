<?php 
// ���� ityangs.net ����Ŀ�������
header("Access-Control-Allow-Origin: ityangs.net"); 
//�����Ҫ��������������������Ŀ������󣬿���ʹ��ͨ��� *
header("Access-Control-Allow-Origin: *");
 header("content-Type:text/html;charset:utf-8");


if(isset($_GET["isshow"])){
echo $_GET["isshow"];
	$show =  $_GET["isshow"]==="false" ? 1: 0;

 	$conn = new mysqli('localhost','root','123456','myalipay');
    if($conn->connect_errno){
        die("���ʴ���");
    }
    $conn ->query("set names utf8");

    $sql = "update isShow SET  isShow=$show  WHERE id=1";
 
   if ($conn->query($sql) === TRUE) {
        echo "�¼�¼����ɹ�";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
    $conn->close();


}else{

$conn = new mysqli('localhost','root','123456','myalipay');
    if($conn->connect_errno){
        die("���ʴ���");
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