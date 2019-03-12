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
                    })

                    var tab = document.getElementById("tab");
                    var content = document.getElementById("content");
                    var money = 0;


                    var buycarDate = localStorage.getItem(result);
                    buycarDate = JSON.parse(buycarDate);
                    console.log(buycarDate);
                    // localStorage.removeItem(buycarDate);
                    // localStorage.clear();
                    // console.log(buycarDate);
                    if ( buycarDate== null || buycarDate.length==0){
                        $("#tab").hide();
                        $("#tipInfo").show();
                        return;
                    }
                    $("#tipInfo").hide();
                    $("#tab").show();
                    for (var i = 0; i < buycarDate.length; i++) {

                        //获取存储数据
                        var num = buycarDate[i].num;
                        var img = buycarDate[i].img;
                        var shopname = buycarDate[i].shopname;
                        var price = buycarDate[i].price;
                        var sum = buycarDate[i].sum;
                        var url = buycarDate[i].url;
                        var objtr = document.createElement("tr");
                        var objtd0 = document.createElement("td");


                        //创建和添加新节点
                        var inp = document.createElement("input");
                        inp.type = "checkbox";
                        inp.name = "changeName";
                        inp.setAttribute("checked","checked");
                        inp.value = i;
                        var objtd1 = document.createElement("td");
                        objtd1.innerHTML = "<a href='" + url + "' target='_blank'> " + "<img src='" + img + "'>" + "<span>" + shopname + "</span></a>";
                        var objtd2 = document.createElement("td");
                        objtd2.innerHTML = price;
                        var objtd3 = document.createElement("td");
                        objtd3.innerHTML = "<b onclick='add(this)'>+</b> " + "<span>" + num + "</span>" + "<b onclick='reduce(this)'>-</b> ";
                        var objtd4 = document.createElement("td");
                        objtd4.innerHTML = sum;
                        var objtd5 = document.createElement("td");
                        objtd5.innerHTML = "<input type='button' class='delval' value='删除商品' >";

                        objtd0.append(inp);
                        objtr.append(objtd0);
                        objtr.append(objtd1);
                        objtr.append(objtd2);
                        objtr.append(objtd3);
                        objtr.append(objtd4);
                        objtr.append(objtd5);
                        tab.append(objtr);
                        money += parseInt(sum);
                    }

                    // 创建底部
                    if (buycarDate.length > 0) {
                        var div_box = document.createElement("div");
                        div_box.className = "div_box";

                        var div_left = document.createElement("div");
                        div_left.className = "div_left";
                        var checkbox_money = document.createElement("input");
                        checkbox_money.type = "checkbox";
                        checkbox_money.setAttribute("checked","checked");
                        checkbox_money.className = "allcheckbox";
                        var span_quanxuan = document.createElement("span");
                        span_quanxuan.innerText = "全选";
                        var delfocus = document.createElement("a");
                        delfocus.innerHTML = "删除选中的商品";
                        delfocus.className = "delfocus";
                        var guangzhu = document.createElement("a");
                        guangzhu.innerHTML = "移到我的关注";
                        var delBuyCar = document.createElement("a");
                        delBuyCar.className = "delBuyCar";
                        delBuyCar.innerHTML = "清理购物车";

                        div_left.append(checkbox_money);
                        div_left.append(span_quanxuan);
                        div_left.append(delfocus);
                        div_left.append(guangzhu);
                        div_left.append(delBuyCar);
                        div_box.append(div_left);

                        var div_right = document.createElement("div");
                        div_right.className = "div_right";
                        var div_right_span2 = document.createElement("span");
                        var div_right_span1 = document.createElement("span");
                        var span_money = document.createElement("span");

                        div_right_span1.innerText = "总价";
                        span_money.innerText = "￥" + money;
                        div_right_span2.innerText = "去结算";
                        div_right_span2.setAttribute("id", "submit_shopInfo");

                        div_right.append(div_right_span1);
                        div_right.append(span_money);
                        div_right.append(div_right_span2);
                        div_box.append(div_right);

                        content.append(div_box);
                    }

                    var submit_shopInfo = document.getElementById("submit_shopInfo");

                    submit_shopInfo.onclick = function () {

                        if (confirm("是否去结账")){
                            var allTr = tab.getElementsByTagName("tr");

                            var Json = {};
                            for (var i = 1; i < allTr.length; i++) {
                                Json["a" + i] = {};
                                var allTd = allTr[i].getElementsByTagName("td");
                                Json["a" + i]["href"] = allTd[1].getElementsByTagName("a")[0].href;
                                Json["a" + i]["img"] = allTd[1].getElementsByTagName("img")[0].src;
                                Json["a" + i]["shopInfo"] = allTd[1].getElementsByTagName("span")[0].innerText;
                                Json["a" + i]["price"] = allTd[2].innerText;
                                Json["a" + i]["num"] = allTd[3].getElementsByTagName("span")[0].innerText;
                            }

                            var Json = JSON.stringify(Json);
                            // submit_shopInfo
                            $.ajax({
                                    type: "post",
                                    data: {Json: Json},
                                    url: "controller/submit_shopInfo.php",
                                    success: function (res) {
                                        console.log(res);
                                        location.href="accounts.html?#"+res;
                                        // localStorage.removeItem(result);

                                    }

                                }
                            );






                        }



                    };

// 清空购物车
                    var delBuyCar = document.getElementsByClassName("delBuyCar")[0];
                    var content = document.getElementById("content");
                    delBuyCar.onclick = function () {
                        if (!confirm("删除购物车吗？")) return;
                        content.innerHTML = "";
                        // while(tab.hasChildNodes()) //当elem下还存在子节点时 循环继续
                        // {
                        //     tab.removeChild(tab.firstChild);
                        // }
                        localStorage.buycarDate = localStorage.clear();
                        console.log(localStorage);
                    }

//复选框全中
                    var allcheckbox0 = document.getElementsByClassName("allcheckbox")[0];
                    var allcheckbox1 = document.getElementsByClassName("allcheckbox")[1];
                    var changeName = document.getElementsByName("changeName");
                    for (var i = 0; i < changeName.length; i++) {

                        changeName[i].onchange = function () {
                            var checkboxflag = true;
                            for (var j = 0; j < changeName.length; j++) {
                                if (!changeName[j].checked) {
                                    allcheckbox0.checked = false;
                                    allcheckbox1.checked = false;
                                    checkboxflag = false;
                                    break;
                                }

                            }
                            if (checkboxflag) {
                                allcheckbox0.checked = true;
                                allcheckbox1.checked = true;
                            }


                        }


                    }
                    allcheckbox0.onchange = function () {
                        var allcheckbox0Flag = false;
                        if (!allcheckbox1.checked){
                            allcheckbox1.checked = true;
                        } else{
                            allcheckbox1.checked =false ;
                        }
                        for (var i = 0; i < changeName.length; i++) {

                            if (!changeName[i].checked) {
                                allcheckbox0Flag = true;
                            }
                        }
                        if (allcheckbox0Flag) {
                            allcheckbox1.checked = true;
                            allcheckbox0.checked = true;
                            for (var i = 0; i < changeName.length; i++) {
                                changeName[i].checked = true;
                            }
                            return;
                        }

                        if (allcheckbox0.checked) {
                            for (var i = 0; i < changeName.length; i++) {
                                changeName[i].checked = true;
                            }
                        } else {
                            for (var i = 0; i < changeName.length; i++) {
                                changeName[i].checked = false;
                            }

                        }


                    };
                    allcheckbox1.onchange = function () {
                        if (!allcheckbox0.checked){
                            allcheckbox0.checked = true;
                        } else{
                            allcheckbox0.checked =false ;
                        }

                        if (allcheckbox0.checked) {
                            for (var i = 0; i < changeName.length; i++) {
                                changeName[i].checked = true;
                            }

                        } else {
                            for (var i = 0; i < changeName.length; i++) {
                                changeName[i].checked = false;
                            }
                        }
                    }

                    // console.log(changeName);
                    // console.log(changeName[0].value,changeName[1].value,changeName[2].value);
                    //删除选中的行
                    var delfocus = document.getElementsByClassName("delfocus")[0];
                    delfocus.onclick = function () {
                        var cflag = changeName.length;
                        for (var i = 0; i < changeName.length; i++) {
                            if (!changeName[i].checked) {
                                cflag--;
                            }
                        }
                        if (cflag == 0) {
                            alert("未选中商品");
                            return;
                        }

                        if (!confirm("确认要删除选中的商品？")) return;


                        var trNodes = tab.getElementsByTagName("tr");
                        // 获得选中行的地址，储存在组数中
                        var arrHref = [];
                        for (var i = 0; i < changeName.length; i++) {
                            if (changeName[i].checked) {

                                var href = trNodes[i + 1].getElementsByTagName("a")[0].href;
                                arrHref.push(href);
                            }
                        }
                        var getUserName = $("#hiBoy").text();

                        buycarDate = localStorage.getItem(getUserName);
                        buycarDate = JSON.parse(buycarDate);
                        // 通过数组删除本地数据

                        for (var i = 0; i < buycarDate.length; i++) {

                            for (var j = 0; j < arrHref.length; j++) {
                                if (buycarDate[i].url == arrHref[j]) {
                                    buycarDate.splice(i, 1);
                                }
                            }
                        }
                        localStorage.setItem(getUserName,JSON.stringify(buycarDate));
                        console.log(localStorage);


                        //删除选中行

                        for (var i = 0; i < changeName.length; i++) {
                            if (changeName[i].checked) {
                                var oTrNode = changeName[i].parentNode.parentNode;


                                var index = parseInt(changeName[i].value);
                                console.log(changeName[i].value, index);
                                i--;
                                oTrNode.parentNode.removeChild(oTrNode);
                            }


                        }


                    }

                    $("#tab").on("click",".delval",function () {
                        // console.log($(this).index())
                        var trNode = this.parentNode.parentNode;
                        if (confirm("删除该商品吗？")) {
                            var money = 0;
                            var href = trNode.getElementsByTagName("td")[1].getElementsByTagName("a")[0].href;
                            trNode.parentNode.removeChild(trNode);

                            var buycarDate = localStorage.getItem(result);

                            buycarDate = JSON.parse(buycarDate);

                            var buycarDateNew =[];
                            for (var i = 0; i < buycarDate.length; i++) {
                                if (buycarDate[i].url != href) {
                                    buycarDateNew.push(buycarDate[i]);
                                }
                            }
                            for (var j = 0; j < buycarDateNew.length; j++) {
                                var sum = buycarDateNew[j].sum;
                                money += parseInt(sum);
                            }
                            var div_right = document.getElementsByClassName("div_right")[0];
                            var div_right_span1 = div_right.getElementsByTagName("span")[1];
                            div_right_span1.innerHTML = "￥" + money;
                            buycarDate = JSON.stringify(buycarDateNew);
                            localStorage.setItem(result,buycarDate);
                            console.log(localStorage.getItem(result));
                        }



                    })

                }

            }

        }
    );


});

// 删除行
// function delval(node) {
//     var trNode = node.parentNode.parentNode;
//     if (confirm("删除该商品吗？")) {
//         var money = 0;
//         var href = trNode.getElementsByTagName("td")[1].getElementsByTagName("a")[0].href;
//         trNode.parentNode.removeChild(trNode);
//
//         var buycarDate = localStorage.buycarDate;
//         if (!buycarDate) {
//             return;
//         }
//         buycarDate = JSON.parse(buycarDate);
//         var buycarDateNew = [];
//
//         for (var i = 0; i < buycarDate.length; i++) {
//             if (buycarDate[i].url != href) {
//                 buycarDateNew.push(buycarDate[i]);
//             }
//         }
//         for (var j = 0; j < buycarDateNew.length; j++) {
//             var sum = buycarDateNew[j].sum;
//             money += parseInt(sum);
//         }
//         var div_right = document.getElementsByClassName("div_right")[0];
//         var div_right_span1 = div_right.getElementsByTagName("span")[1];
//         div_right_span1.innerHTML = "￥" + money;
//         localStorage.buycarDate = JSON.stringify(buycarDateNew);
//     }
//
//
// }

//加
function add(node) {
    var trNode = node.parentNode.parentNode;
    var tdNode = trNode.getElementsByTagName("td");
    console.log(tdNode[3]);
    var tdNode_span = tdNode[3].getElementsByTagName("span")[0];
    var addnum = parseInt(tdNode_span.innerHTML) + 1;
    tdNode_span.innerHTML = addnum;

    tdNode[4].innerHTML = parseInt(tdNode[2].innerHTML) * parseInt(tdNode_span.innerHTML) + "元";
    var trNodes = tab.getElementsByTagName("tr");
    console.log(trNodes);
    var money = 0;
    for (var i = 1; i < trNodes.length; i++) {
        var tdNode4 = trNodes[i].getElementsByTagName("td")[4];
        money += parseInt(tdNode4.innerHTML);
    }
    var div_right = document.getElementsByClassName("div_right")[0];
    var div_right_span1 = div_right.getElementsByTagName("span")[1];
    div_right_span1.innerHTML = "￥" + money;


    var buycarDate = localStorage.buycarDate;

}

// 减
function reduce(node) {

    var trNode = node.parentNode.parentNode;
    var tdNode = trNode.getElementsByTagName("td");
    var tdNode_span = tdNode[3].getElementsByTagName("span")[0];
    if (parseInt(tdNode_span.innerHTML) == 1) return;
    var reducenum = parseInt(tdNode_span.innerHTML) - 1;
    tdNode_span.innerHTML = reducenum;

    tdNode[4].innerHTML = parseInt(tdNode[2].innerHTML) * parseInt(tdNode_span.innerHTML) + "元";
    var trNodes = tab.getElementsByTagName("tr");
    var money = 0;
    for (var i = 1; i < trNodes.length; i++) {
        var tdNode4 = trNodes[i].getElementsByTagName("td")[4];
        money += parseInt(tdNode4.innerHTML);
    }
    var div_right = document.getElementsByClassName("div_right")[0];
    var div_right_span1 = div_right.getElementsByTagName("span")[1];
    div_right_span1.innerHTML = "￥" + money;

    var buycarDate = localStorage.buycarDate;

}


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