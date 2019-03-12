$(function () {
    $.ajax(
    {
        type: "post",
        url: 'controller/isLogin.php',
        success: function (result) {
            if (result == 1) {
                alert("请先登录");
                var str = encodeURIComponent("login");//把中文转化成指定的字符串
                location.href = "../" + str + "/index.html";
            } else {
                //是否登录
                var hiBoy = document.getElementById("hiBoy");
                var seeyou = document.getElementById("seeyou");
                if (result != 1) {
                    hiBoy.innerHTML = "<a href='javascript:void(0)' target='_blank'>" + result + "</a>";
                    seeyou.innerHTML = "<a href='javascript:void(0)' target='_blank' class='plusbg'><div id='exitLogin'><div class='exit1' id='exit1' onclick='exit1()'>退出</div><img src='img/loginInfo.png'></div></a>"
                }
                $("#seeyou,#hiBoy").on('mouseover', function () {
                    $("#exitLogin").css('display', 'block');
                }).on('mouseout', function () {
                    $("#exitLogin").css('display', 'none');
                });

                $.ajax({
                    url:"controller/order_userInfo",
                    success:function (msg) {

                        var obj = JSON.parse(msg); //由JSON字符串转换为JSON对象

                        console.log(obj);
                        for (var i= 0;i<obj.length;i++){
                            var identifier = obj[i].identifier;

                            var address = obj[i].address;
                            var name = obj[i].name;
                            var orderId = obj[i].orderId;
                            var tel = obj[i].tel;
                            var userName = obj[i].userName;
                            var email = obj[i].email;
                            var ordertime = obj[i].ordertime;
                            console.log(ordertime);
                            var html= '';
                        }

                    },


                })













            }
        }

    })

})