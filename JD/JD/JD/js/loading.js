// function loading() {
//     // localStorage.clear();
//     if ( !parseInt(localStorage.flag)) {
//         return ;
//     }
//  var hiBoy =document.getElementById("hiBoy");
//  var seeyou =document.getElementById("seeyou");
//
//     hiBoy.innerHTML = "<a href='javascript:void(0)' target='_blank'>"+localStorage.username+"</a>";
//     seeyou.innerHTML = "<a href='javascript:void(0)' target='_blank' class='plusbg'>"+"</a>"
//
// };
// loading();



$(function () {
    $.ajax(
        {
            type: "post",
            url: 'controller/isLogin.php',
            success: function (result) {
                var hiBoy = document.getElementById("hiBoy");
                var seeyou = document.getElementById("seeyou");
                if (result != 1) {
                    hiBoy.innerHTML = "<a href='javascript:void(0)' target='_blank'>" + result + "</a>";
                    seeyou.innerHTML = "<a href='javascript:void(0)' target='_blank' class='plusbg'><div id='exitLogin'><div class='exit1' id='exit1' onclick='exit1()'>退出</div><img src='img/loginInfo.png'></div></a>"
                }

            }

        }
    );





    $("#seeyou,#hiBoy").on('mouseover',function(){
        console.log(1);
        $("#exitLogin").css('display','block');

    }).on('mouseout',function(){
        $("#exitLogin").css('display','none');

    })



});
function exit1() {
    $.ajax(
        {
            type: "post",
            url: 'controller/outLogin.php',
            success: function (result) {
                var hiBoy = document.getElementById("hiBoy");
                var seeyou = document.getElementById("seeyou");
                if (result != null) {
                    hiBoy.innerHTML = "<a href='../login/index.html'>你好，请登录</a>";
                    seeyou.innerHTML = "<a href=\"../login/registe_2.html\">免费注册</a>"
                }

            }

        })
}