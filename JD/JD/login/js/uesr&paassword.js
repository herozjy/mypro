
//使用localstorage
function  check() {
    var  inputNode =document.getElementsByClassName("mian-content-input-1")[0].getElementsByTagName("input")[0];
    var  inputNode_2 =document.getElementsByClassName("mian-content-input-1")[1].getElementsByTagName("input")[0];
    if(inputNode_2.onblur() && inputNode.onblur()){
        localStorage.flag = 1;
        localStorage.username = inputNode.value;
        return true;
    }
    localStorage.flag = 0;
    return false;
}
// 判断用户名
var  inputNode =document.getElementsByClassName("mian-content-input-1")[0].getElementsByTagName("input")[0];
inputNode.onblur = function () {

    var v_1 =  inputNode.value;
    if (!v_1) {
        $("innerHTML1").innerHTML = "用户名不能为空";
        return false;
    }
    var getLocalDate = localStorage.getItem(v_1);
    if(!getLocalDate ) {
        $("innerHTML1").innerHTML = "用户名不存在";
        return false;
    }else{
        $("innerHTML1").innerHTML = "用户名存在";
        return true;
    }

};

// 判断密码
var  inputNode_2 =document.getElementsByClassName("mian-content-input-1")[1].getElementsByTagName("input")[0];
inputNode_2.onblur = function () {
    var v_1 =  inputNode.value;
    var v_2 =  inputNode_2.value;
    if (!v_1) {
        $("innerHTML1").innerHTML = "用户名不能为空";
        $("innerHTML2").innerHTML = "密码不能为空";
        return false;
    }
    if (!v_2) {
        $("innerHTML2").innerHTML = "密码不能为空";
        return false;
    }
    var getLocalDate_2 = localStorage.getItem(v_1);
    getLocalDate_2 = JSON.parse(getLocalDate_2);
    try{
        var  pad = getLocalDate_2.password;
    }catch (e) {
    }
    if( pad != v_2) {
        $("innerHTML2").innerHTML = "密码错误";
        return false;
    }else{
        $("innerHTML2").innerHTML = "密码正确";
        return true;
    }

};


