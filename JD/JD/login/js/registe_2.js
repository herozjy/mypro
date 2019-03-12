
function $(id) {
    return typeof String ? document.getElementById(id) : null;
}

var userFlag = false;
var  arrform=$("myform").elements;
var flag=true;
$("progress-next").onclick =function () {
    // 验证正确后，才能提交
    // localStorage.clear();
    // console.log(localStorage);
    // console.log(arrform.length);
    var rflag = false ;

    for (var i = 0;i<arrform.length-1;i++){
        if (!arrform[i].value) {
            var str ="form-tip-"+i;
            $(str).innerHTML = "输入信息不能为空";
            $(str).className = "form-tip form-error" ;
            // flag = false; console.log(1);
            rflag = true;
        }
    }
    if (rflag){
        alert("有未填写信息");
        return false;
    }
    // console.log(userFlag);
    // console.log(arrform[1].onblur());
    // console.log(arrform[2].onblur());
    // console.log(arrform[3].onblur());
    // console.log(arrform[4].onblur());
    // console.log(arrform[5].onblur());
    // console.log(arrform[6].onblur());
    // console.log($("#username_registe").val());
    if (userFlag && arrform[1].onblur() && arrform[2].onblur() && arrform[3].onblur() && arrform[4].onblur() && arrform[5].onblur() && arrform[6].onblur() ){
        // $.ajax({
        //     url:"controller/checkUserName.php",
        //     type:'post',
        //     data:{
        //         userName: $("#username_registe").val(),
        //     },
        //     success:function (data) {
        //         console.log(data);
        //         if (data.charAt(0) !=3) {
        //
        //         }
        //     }
        //
        //
        // });
        var registeArr = [];
        for (var i = 0; i < arrform.length; i++) {
            registeArr[i] = arrform[i].value;
        }
        //ajax 发生数据到服务器
        var xmlhttp;
        if (window.XMLHttpRequest) {
            //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
            xmlhttp = new XMLHttpRequest();
        }
        else {
            // IE6, IE5 浏览器执行代码
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        // xmlhttp.open("GET","controller/registen.php");
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                console.log(xmlhttp.responseText);
                var num = 3;
                var timerxx = setInterval(function () {
                    if (num <= 0) {
                        location.href = "index.html";
                        clearInterval(timerxx);
                    }
                    console.log(num--);
                }, 1000);
            }
        };
        xmlhttp.open("POST", "controller/registen.php", true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send("t=" + Math.random() + "&userName=" + registeArr[0] + "&userPass=" + registeArr[1] + "&bothday=" + registeArr[3] + "&email=" + registeArr[7] + "&tel=" + registeArr[4] + "&Consignee=" + registeArr[5] + "&address=" + registeArr[6], true);




            // window.open("index.html");
    }else{
        alert("填写格式不对");
        return;
    }



    // var obj =new Object();
    // obj.user = arrform[0].value;
    // obj.password = arrform[1].value;
    // obj.birthday = arrform[3].value;
    // obj.phone = arrform[4].value;
    // obj.receiver = arrform[5].value;
    // obj.address = arrform[6].value;
    //
    // var str = JSON.stringify(obj);
    // localStorage.setItem(obj.user,str);


};

// function locDate(node){
//     var s =localStorage.getItem("zxcv");
//     if ((s==null)){
//         console.log("没有数据");
//         return;
//     }
//     var a =JSON.parse(s);
//
//     console.log("用户名:"+a.user," 密码:"+a.password);
// }


//用户名

arrform[0].onblur = function () {
    if (!arrform[0].value){
        $("form-tip-0").innerHTML = "用户名不能为空";
        $("form-tip-0").className = "form-tip form-error";
        userFlag = false;
        return ;
    }
    var reg = /^(\d|\D){2,20}$/;
    // console.log(arrform[0].value,arrform[0].value.match(reg));
    if ( !arrform[0].value.match(reg) ){
        $("form-tip-0").innerHTML = "用户名为2-20位";
        $("form-tip-0").className = "form-tip form-error" ;
        userFlag = false;
        return ;
    }


    //ajax 发生数据到服务器
    var xmlhttp;
    if (window.XMLHttpRequest)
    {
        //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xmlhttp=new XMLHttpRequest();
    }
    else {
        // IE6, IE5 浏览器执行代码
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {

            var text = xmlhttp.responseText

            if (text=="用户名已存在"){
                $("form-tip-0").innerHTML = text;
                $("form-tip-0").className = "form-tip form-error";
                userFlag = false;
                return ;
            }
            $("form-tip-0").innerHTML = text;
            $("form-tip-0").className = "form-tip form-yes";
            userFlag = true;
            return ;
        }
    };
    xmlhttp.open("POST","controller/getUserName.php",true);
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlhttp.send("t="+Math.random()+"&userName="+arrform[0].value);


};
// console.log(arrform[0].onblur());
// 密码(不能为空，至少4位长度，最长20位)
arrform[1].onblur = function () {
    if (!arrform[1].value){
        $("form-tip-1").innerHTML = "密码不能为空";
        $("form-tip-1").className = "form-tip form-error" ;
        return false;
    }
    var reg = /^\w{4,20}$/;
    if ( !arrform[1].value.match(reg) ){
        $("form-tip-1").innerHTML = "密码为4-20位";
        $("form-tip-1").className = "form-tip form-error" ;
        return false;
    }
    if( (arrform[1].value == arrform[2].value)  ){
        $("form-tip-2").innerHTML = "确认密码正确";
        $("form-tip-2").className = "form-tip form-yes" ;
    }


    $("form-tip-1").innerHTML = "密码正确";
    $("form-tip-1").className = "form-tip form-yes" ;
    return true;

};
//         确认密码(不能为空，至少4位长度，最长20位，并且要与密码相同)，
arrform[2].onblur = function () {
    if (!arrform[2].value){

        $("form-tip-2").innerHTML = "确认密码不能为空";
        $("form-tip-2").className = "form-tip form-error" ;
        return false;
    }
    var reg = /^\w{4,20}$/;

    if ( !arrform[2].value.match(reg) ){
        $("form-tip-2").innerHTML = "密码为4-20位";
        $("form-tip-2").className = "form-tip form-error" ;
        return false;
    }
    if( !(arrform[1].value == arrform[2].value)  ){
        $("form-tip-2").innerHTML = "密码不一致";
        $("form-tip-2").className = "form-tip form-error" ;
        return false;
    }
    $("form-tip-2").innerHTML = "确认密码正确";
    $("form-tip-2").className = "form-tip form-yes" ;
    return true;

};
//         生日(可以为空、格式要合要求，范围也要正确)
arrform[3].onblur = function () {
    if (!arrform[3].value){
        $("form-tip-3").innerHTML = "生日不能为空";
        $("form-tip-3").className = "form-tip form-error" ;
        return false;
    }
    var reg =/^[12][0-9]{3}-(([0][1-9]|[1][0-2])|[1-9])-(([0][1-9]|[1-9][0-9]|)|[1-9])$/g;

    if ( arrform[3].value.match(reg)) {
        var arr = arrform[3].value.split("-");
        var year = +(arr[0]);
        var month = +(arr[1]);
        var day= +(arr[2]);
        if (month==1 ||month==3 ||month==5 ||month==7 ||month==8 ||month==10 ||month==12) {

            if (day>31) {
                $("form-tip-3").innerHTML ="第"+month+"月只有31天";
                $("form-tip-3").className = "form-tip form-error" ;
                return false;
            }
        }else if(month==4 ||month==6 ||month==9 ||month==11 ){
            if (day>30) {
                $("form-tip-3").innerHTML ="第"+month+"月只有30天";
                $("form-tip-3").className = "form-tip form-error" ;
                return false;
            };

        }else if(month ==2){
            if (year%400==0 || ( year%4==0&& year%100 !=0) ) {
                if (day>28) {
                    $("form-tip-3").innerHTML =year+"年是闰年，2月只有28天";
                    $("form-tip-3").className = "form-tip form-error" ;
                    return false;

                }
            }else{
                if (day>29) {
                    $("form-tip-3").innerHTML =year+"年是平年，2月只有29天";
                    $("form-tip-3").className = "form-tip form-error" ;
                    return false;
                }
            }
        }
    }else{
        $("form-tip-3").innerHTML ="生日格式不对";
        $("form-tip-3").className = "form-tip form-error" ;
        return false;
    }

    $("form-tip-3").innerHTML = "生日正确";
    $("form-tip-3").className = "form-tip form-yes";
    return true;

};
//         联系电话(不能为空，格式是7-11位的数字)
arrform[4].onblur = function () {
    if (!arrform[4].value){
        $("form-tip-4").innerHTML = "联系电话不能为空";
        $("form-tip-4").className = "form-tip form-error" ;
        return false;
    }
    var reg = /^\d{7,11}$/;
    // console.log(arrform[0].value,arrform[0].value.match(reg));
    if ( !arrform[4].value.match(reg) ){
        $("form-tip-4").innerHTML = "联系电话为7-11位";
        $("form-tip-4").className = "form-tip form-error" ;
        return false;
    }
    $("form-tip-4").innerHTML = "联系电话正确";
    $("form-tip-4").className = "form-tip form-yes" ;
    return true;

};
//          收货人(不能为空，长度2-25)
arrform[5].onblur = function () {
    if (!arrform[5].value){
        $("form-tip-5").innerHTML = "收货人不能为空";
        $("form-tip-5").className = "form-tip form-error" ;
        return false;
    }
    var reg = /^(\d|\D){2,25}$/;
    // console.log(arrform[0].value,arrform[0].value.match(reg));
    if ( !arrform[5].value.match(reg) ){
        $("form-tip-5").innerHTML = "收货人为2-25位";
        $("form-tip-5").className = "form-tip form-error" ;
        return false;
    }
    $("form-tip-5").innerHTML = "收货人正确";
    $("form-tip-5").className = "form-tip form-yes" ;
    return true;
};
//         收货地址：(不能为空，长度3-100位)-->
arrform[6].onblur = function () {
    if (!arrform[6].value){
        $("form-tip-6").innerHTML = "收货地址不能为空";
        $("form-tip-6").className = "form-tip form-error" ;
        return false;
    }
    var reg = /^(\d|\D){2,100}$/;
    // console.log(arrform[0].value,arrform[0].value.match(reg));
    if ( !arrform[6].value.match(reg) ){
        $("form-tip-6").innerHTML = "收货地址为2-25位";
        $("form-tip-6").className = "form-tip form-error" ;
        return false;
    }
    $("form-tip-6").innerHTML = "收货地址正确";
    $("form-tip-6").className = "form-tip form-yes" ;
    return true;

};

arrform[7].onblur = function () {
    if (!arrform[7].value) {
        $("form-tip-7").className = "form-tip" ;
        $("form-tip-7").innerHTML = " ";
       return
    }

    var reg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/g;
    // console.log(arrform[0].value,arrform[0].value.match(reg));
    if ( !arrform[7].value.match(reg) ){
        $("form-tip-7").innerHTML = "邮箱地址格式不正确";
        $("form-tip-7").className = "form-tip form-error" ;
        return false;
    }
    $("form-tip-7").innerHTML = "邮箱地址正确";
    $("form-tip-7").className = "form-tip form-yes" ;
    return true;

};



