<!-- <?php
    header("content-Type:text/html;charset:utf-8");
    $identifier = $_POST['identifier'];
    $conn = new mysqli('localhost','root','123456','myjd');
    if($conn->connect_errno){
        die("访问错误");
    }
    $conn ->query("set names utf8");
    $sql = "SELECT * FROM submit_shopinfo WHERE identifier =$identifier;";
    $result = $conn->query($sql) ;
    $arr = [];
 	if ($result->num_rows>0) {
 		while ($rows = $result->fetch_assoc()) {
 				$arr[] = $rows ;
 		}
 	
 	}
 		$str = json_encode($arr);
 		echo $str ;

    $conn->close();


?> -->