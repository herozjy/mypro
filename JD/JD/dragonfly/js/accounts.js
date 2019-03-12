$(function () {
    //判断收货人
    var nameFlag = false;
    //判断收货地址
    var addressFlag = false;
    //判断手机号码
    var telFlag = false;
    //判断email
    var emailFlag = true;

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


                    //地址信息
                    $.ajax({
                        url:"controller/getAddress.php",
                        success:function (msg) {
                            // console.log(msg);
                            var addressInfoArr = JSON.parse(msg);
                            var html = " ";
                            for (var i = 0;i<addressInfoArr.length;i++){
                                var arrInfo  = JSON.parse(addressInfoArr[i]);
                                var name = arrInfo.name;
                                var address = arrInfo.address;
                                var tel = arrInfo.tel;


                                var reg = /(\d{3})\d{4}(\d{4})/g;
                                tel = tel.replace(reg,"$1****$2");

                                var info_id = arrInfo.id;
                                if (i ==0){
                                    var html_tip0 = `
                                      <span>寄送至：${address}</span>
                                      <span>收货人：${name}</span>
                                      <span>${tel}</span>
               
                                `;
                                    $("#address_tip").html(html_tip0);
                                }

                                // var email = arrInfo.email;
                                html +=`<ul class="infoAddress clearfix">
                                    <li><span>${name}</span></li>
                                    <li>                                     
                                        <span>${name}</span>
                                        <span>${address}</span>
                                        <span> ${tel}</span>
                                      
                                    </li>
                                    <li>
                                       <a href="javascript:;" class="setAddress" data-aid="${info_id}">设为默认</a>
                                       <a href="javascript:;" class="editAddress" data-aid="${info_id}">编辑</a>
                                       <a href="javascript:;" class="delAddress" data-aid="${info_id}">删除</a>                                                                        
                                    </li>
                                    </ul>  `

                            }
                            $("#address_info").html(html);
                            $("#more_address").click(function () {
                                $(this).hide();
                                $("#packup_address").show();
                                $("#address_info ul+ul").show();
                            })
                            $("#packup_address").click(function () {
                                $(this).hide();
                                $("#more_address").show();
                                $("#address_info ul+ul").hide();
                            });
                            // 设置默认
                            $("#address_info").on("click",".setAddress",function () {
                                // var  $thisul= $(this).parents().parents();
                                // $("#address_info").prepend($thisul.get(0));
                                // $("#packup_address").hide();
                                // $("#more_address").show();
                                // $("#address_info ul+ul").hide();
                                var arr_tip =[];
                                $("#address_info ul:eq(0) li:eq(1) span").each(function (i,v) {
                                    arr_tip[i] = $(v).html();
                                })

                                var html_tip = `
                                      <span>寄送至：${arr_tip[1]}</span>
                                      <span>收货人：${arr_tip[0]}</span>
                                      <span>${arr_tip[2]}</span>
                                `;
                                $("#address_tip").html(html_tip);
                                var aid = $(this).data("aid");
                               $.ajax({
                                    type:"get",
                                     url:"controller/address.php",
                                       data:{
                                            aid :aid,
                                       },
                                       success:function (msg) {
                                          location.reload();
                                       }


                               })

                                // location.reload()
                            })



                            // 删除地址
                            $("#address_info").on("click",".delAddress",function (){
                                if (confirm("确定要删除？")) {
                                    var delid = $(this).data("aid");
                                    $.ajax({
                                        type:'get',
                                        url:"controller/del_edit.php",
                                        data:{
                                            delid : delid,
                                        },
                                        success:function (msg) {
                                            location.reload()
                                        }
                                    })
                                }

                            });
                            // 编辑地址
                            $("#address_info").on("click",".editAddress",function (){

                                $("#pay_mask").show();
                                $("#content_btn1").show();
                                $("#content_btn").hide();

                                $("#content_form_name").html("").attr('class', "");
                                $("#content_form_address").html("").attr('class', "");
                                $("#content_form_tel").html("").attr('class', "");
                                $("#content_form_email").html("").attr('class', "");
                                $("#content_title").html("修改收货人信息");
                                $("#content_form [name ='name']").val("");
                                $("#content_form [name ='address']").val("");
                                $("#content_form [name ='tel']").val("");
                                $("#content_form [name ='email']").val("");

                                //判断收货人
                                nameFlag = true;
                                //判断收货地址
                               addressFlag = true;
                                //判断email
                                emailFlag = true;


                                var  $thisul= $(this).parents().prev()[0];
                                var $thisulSpan = $thisul.getElementsByTagName("span")
                                console.log( $thisulSpan[0].innerHTML);
                                $("#content_form [name='name']").val($thisulSpan[0].innerHTML);
                                $("#content_form [name='address']").val($thisulSpan[1].innerHTML);
                                var $editId = $(this).data("aid");
                                console.log($editId);
                                $("#content_span1").click(function () {
                                    if (nameFlag && addressFlag && telFlag && emailFlag){
                                        var $name1 = $("#content_form [name ='name']").val();

                                        var $address1 = $("#content_form [name ='address']").val();

                                        var $tel1 = $("#content_form [name ='tel']").val();

                                        var $email1 = $("#content_form [name ='email']").val();

                                        $.ajax({
                                            type:"GET",
                                            url:"controller/address.php",
                                            data :{
                                                editId : $editId,
                                                name : $name1,
                                                address : $address1,
                                                tel : $tel1,
                                                email : $email1,
                                            },
                                            success:function (msg) {
                                                if (msg = "修改记录成功"){
                                                    location.reload();
                                                }

                                            },
                                            scriptCharset: 'utf-8',
                                        })

                                    }
                                })

                            })
    
                        }
                    });




                    //添加地址信息

                    $("#add_address").click(function () {

                        $("#pay_mask").show();
                        $("#content_btn").show();
                        $("#content_btn1").hide();
                        $("#content_form_name").html("").attr('class', "");
                        $("#content_form_address").html("").attr('class', "");
                        $("#content_form_tel").html("").attr('class', "");
                        $("#content_form_email").html("").attr('class', "");
                        $("#content_form [name ='name']").val("");
                        $("#content_form [name ='address']").val("");
                        $("#content_form [name ='tel']").val("");
                        $("#content_form [name ='email']").val("");
                        $("#content_title").html("新增收货人信息");

                    });
                    $("#content_close").click(function () {
                        $("#content_form_name").html("").attr('class', "");
                        $("#pay_mask").hide();
                    });



                    //判断收货人

                    $("#content_form [name ='name']").blur(function () {

                        if (!this.value) {
                            $("#content_form_name").html("收货人不能为空").attr('class', "error");
                            nameFlag = false;
                            return ;
                        }
                        var reg = /^(\d|\D){2,20}$/;
                        console.log(this.value.match(reg));
                        if (!this.value.match(reg)) {
                            $("#content_form_name").html("用户名为2-20位").attr('class', "error");
                            nameFlag = false;
                            return ;
                        }else {

                            $("#content_form_name").html("").attr('class', "yes");
                            nameFlag = true;
                        }
                    });

                    //判断收货地址

                    $("#content_form [name ='address']").blur(function () {

                        if (!this.value) {
                            $("#content_form_address").html("收货地址不能为空").attr('class', "error");
                            addressFlag = false;
                            return ;
                        }
                        var reg = /^(\d|\D){2,20}$/;
                        console.log(this.value.match(reg));
                        if (!this.value.match(reg)) {
                            $("#content_form_address").html("用户名为2-20位").attr('class', "error");
                            addressFlag = false;
                            return ;
                        }else {

                            $("#content_form_address").html("").attr('class', "yes");
                            addressFlag = true;
                        }
                    });

                    //判断手机号码

                    $("#content_form [name ='tel']").blur(function () {

                        if (!this.value) {
                            $("#content_form_tel").html("手机号码不能为空").attr('class', "error");
                            telFlag = false;
                            return ;
                        }
                        var reg = /^\d{11}$/;

                        if (!this.value.match(reg)) {
                            $("#content_form_tel").html("手机号码为11数字").attr('class', "error");
                            telFlag = false;
                            return ;
                        }else {
                            $("#content_form_tel").html("").attr('class', "yes");
                            telFlag = true;
                        }
                    });

                    //判断email
                    $("#content_form [name ='email']").blur(function () {

                        if (!this.value) {
                            $("#content_form_email").html("").attr('class', " ");
                            return ;
                        }
                        var reg = /^\w{1,}@\w{2,5}\.\w{2,5}/;

                        if (!this.value.match(reg)) {
                            $("#content_form_email").html("email格式不正确").attr('class', "error");
                            emailFlag = false;
                            return ;
                        }else {
                            $("#content_form_email").html("").attr('class', "yes");
                            emailFlag = true;
                        }
                    });

                    $("#content_span").click(function () {
                        if (!$("#content_form [name ='name']").val()) {
                            $("#content_form_name").html("收货人不能为空").attr('class', "error");
                            nameFlag = false;

                        }
                        if (! $("#content_form [name ='address']").val()) {
                            $("#content_form_address").html("收货地址不能为空").attr('class', "error");
                            nameFlag = false;

                        }
                        if (! $("#content_form [name ='tel']").val()) {
                            $("#content_form_tel").html("手机号码不能为空").attr('class', "error");
                            nameFlag = false;

                        }

                        if (nameFlag && addressFlag && telFlag && emailFlag){
                            var $name = $("#content_form [name ='name']").val();
                            var $address = $("#content_form [name ='address']").val();
                            var $tel = $("#content_form [name ='tel']").val();

                            var $email = $("#content_form [name ='email']").val();
                            $.ajax({
                                type:"GET",
                                url:"controller/address.php",
                                data :{
                                    name : $name,
                                    address : $address,
                                    tel : $tel,
                                    email : $email,
                                },
                                success:function (msg) {
                                    console.log(msg);
                                    if(msg =="新记录插入成功"){
                                        location.reload();
                                    }
                                },
                                scriptCharset: 'utf-8',
                            })

                        }


                    });


                    //通过 hash 获取uri数据
                    var str = window.location.hash;

                    str = str.substring(1);
                    console.log(str);
                    str = decodeURI(str);
                    console.log(str);

                    var data_info = JSON.parse(str);
                    console.log(data_info);
                    var html = "";
                    var money = 0;
                    var count = 0;
                    var  identifier= 0;
                    for (var k  in data_info) {
                      identifier   = data_info[k].identifier;

                        var href = data_info[k].href;
                        var img = data_info[k].img;
                        var shopinfo = data_info[k].shopInfo;
                        shopinfo = decodeURI(shopinfo);
                        var price = data_info[k].price;
                        price = decodeURI(price);

                        var num = data_info[k].num;
                        count++;
                        money += parseInt(price) * num;

                        html += `
                            <tr>
                                <td>
                                    <a href="${href}">
                                       <div class="pay_img"><img src="${img}" alt=""></div>
                                       <div class="pay_shopinfo">${shopinfo}</div>
                                    </a>
                                   
                                </td>
                                <td>
                                     <span>￥${price}</span>           
                                </td>
                                <td>${num}</td>
                                <td>有货</td>
                            </tr> 
                        `;

                    }
                    $("#pay_tab").html(html);
                    $("#price_shop").html("￥" + money + "元");
                    $("#count_shop").html(count);


                    //提交
                    $("#btn").click(function () {
                        var userName = $("#hiBoy").text();
                        var name = $("#address_tip span:eq(1)").text().split("：").splice(1,1)[0];
                        // console.log(identifier,money,name,userName);
                        $.ajax({
                            url:"controller/order.php",
                            data :{
                                identifier:identifier,
                                name:name,
                                userName:userName,
                            },
                            success:function (msg) {
                                localStorage.removeItem(userName);
                                location.href = "../myOrder/index.html";
                            },
                            type:"post",
                            // scriptCharset:"utf-8",

                        })
                    });




                }


            }
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
                document.location.reload();
            }

        })
}

