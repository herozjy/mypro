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
                    url:"controller/order_userInfo.php",
                    success:function (msg) {

                        var obj = JSON.parse(msg); //由JSON字符串转换为JSON对象
                        console.log(obj);

                        var html = "";
                        for (var i= 0;i<obj.length;i++){
                            // var identifier = obj[i].identifier;
                            // var email = obj[i].email;
                            // var tel = obj[i].tel;
                            // var address = obj[i].address;
                            // var userName = obj[i].userName;

                            var name = obj[i].name;
                            var orderId = obj[i].orderId;
                            var ordertime = obj[i].ordertime;
                            var num = obj[i].num;
                            var price = obj[i].price;
                            var img = obj[i].img;
                            var price = obj[i].price;
                            var shopInfo = obj[i].shopInfo;
                            var price = obj[i].price;
                            html += `   <div class="part3 clearfix">
                        <div class="tip clearfix">
                                <p class="tip1">${ordertime}</p>
                                <p  class="tip2">订单号：${orderId}</p>
                                <p  class="tip-last">您订单中的商品在不同库房或属不同商家，故拆分为以下订单分开配送，给您带来的不便敬请谅解。</p>

                        </div>
                        <div class="tip clearfix">
                            <p  class="tip1">收货人：${name}</p>
                            <p class="tip2">订单金额：¥${price}</p>
                            <p class="tip3">支付方式: 在线支付</p>
                            <p class="tip4">订单状态：已拆分</p>
                            <p class="tip-last">查看拆分详情></p>

                        </div>

                        <div class="tip-model clearfix">
                            <p  class="tip1">${ordertime}</p>
                            <p class="tip2">订单号：${orderId}</p>
                            <p class="tip3"> 京东 <em></em></p>
                        </div>
                        <div class="order clearfix">
                            <ul>
                                <li class="clearfix">
                                    <div class="order-shop clearfix">
                                        <div class="order-shop-left"><a href="#"><img src="${img}" alt=""></a></div>
                                        <div class="order-shop-mid">
                                            <p><a href="#">${shopInfo}</a></p>
                                            <p> <em></em><span>找搭配</span></p>
                                        </div>
                                        <div class="order-shop-right">× ${num}</div>

                                     </div>
                                  
                                </li>
                                <li class="clearfix">
                                    <span><a href="#">${name}</a></span><i class="iconfont icon-wodejuhuasuan"></i>
                                </li>
                                <li class="clearfix">
                                    <p>总额 ¥${price} </p>
                                    <p>在线支付</p>
                                </li>
                                <li class="clearfix">
                                    <p> <span style="color: #ff6c00">商品出库</span> </p>
                                    <p><em></em> 跟踪 <span></span></p>
                                    <p><a href="#">订单详情</a></p>
                                </li>
                                <li class="clearfix">
                                    <p><a href="#">取消订单</a></p>
                                    <p><a href="#">催单</a></p>
                                </li>
                            </ul>



                        </div>

                             </div>`;


                        }
                        $("#mian_right_content").append(html);
                    },


                })













            }
        }

    })

})