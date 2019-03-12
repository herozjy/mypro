
// 用户名
var  inputNode =document.getElementsByClassName("mian-content-input-1")[0].getElementsByTagName("input")[0];

// 密码
var  inputNode_2 =document.getElementsByClassName("mian-content-input-1")[1].getElementsByTagName("input")[0];


window.onload=function () {
    var part1=document.getElementById("mian-content-part1");
    var part2=document.getElementById("mian-content-part2");
    var current_color_1=document.getElementById("mian-nav-current-color-1");
    var current_color_2=document.getElementById("mian-nav-current-color-2");
    var oli=document.getElementsByTagName("li");
    for(var i=0;i<oli.length;i++){
        oli[i].index=i;
        oli[i].onclick=function () {
            var j=this.index;
            if(j===0){
                part1.style.display="block";
                part2.style.display="none";
                current_color_1.className="current-color";
                current_color_2.className="";
            }if(j===1){
                part2.style.display="block";
                part1.style.display="none";
                current_color_2.className="current-color";
                current_color_1.className="";
                inputNode.focus();

            }
        }
    }
};
function $(id) {
    return typeof String ? document.getElementById(id) : null;
}



$("btn").onclick = function (){


    if (inputNode.value=="" && inputNode_2.value=="") {
        $("innerHTML1").innerHTML = "用户名不能为空";
        $("innerHTML2").innerHTML = "密码不能为空";
        return ;
    }
    if(inputNode.value==""&& inputNode_2.value!=""){
        $("innerHTML1").innerHTML = "用户名不能为空";
        $("innerHTML2").innerHTML = "";


    }

    if(inputNode.value!="" && inputNode_2.value==""){
        $("innerHTML1").innerHTML = " ";
        $("innerHTML2").innerHTML = "密码不能为空";
        return ;
    }


    $("innerHTML2").innerHTML = "";
    if(inputNode.value!="" ){
        $("innerHTML1").innerHTML = "";

        //ajax 发生数据到服务器
        var xmlhttp;
        if (window.XMLHttpRequest)
        {
            //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
            xmlhttp=new XMLHttpRequest();
        }else {
            // IE6, IE5 浏览器执行代码
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }

        xmlhttp.onreadystatechange=function()
        {
            if (xmlhttp.readyState==4 && xmlhttp.status==200)
            {

                var str = xmlhttp.responseText;

                if (str.charAt(0)==1){
                    $("innerHTML1").innerHTML = "用户名不存在";

                }
                if (str.charAt(0)==2){

                    $("innerHTML2").innerHTML = "输入密码不正确";
                }
                if (str.charAt(0)==3) {
                   location.href = "../jd/index.html";
                }

            }
        };
        xmlhttp.open("POST","controller/checkUserName.php",true);
        xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xmlhttp.send("t="+Math.random()+"&userName="+inputNode.value+"&userPass="+inputNode_2.value);





    }else{
        $("innerHTML1").innerHTML = "用户名不能为空";
        return;
    }






};