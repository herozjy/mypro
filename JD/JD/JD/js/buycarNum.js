

$(function () {
   $.ajax({
       url:'controller/isLogin.php',
       success:function (msg) {
           var Onode = document.getElementsByClassName("header-right-shopcar")[0];
           var buycarnumnode = Onode.getElementsByTagName("b")[0];
           //左边购物车
           var right_nav_ul = document.getElementById("right-nav-ul");
           var right_nav_ul_li = right_nav_ul.children[1];
           var right_nav_ul_li_span = right_nav_ul_li.children[1];
           var buycardata = document.getElementById("buycardata");
           if (msg !=1){
               var userName = msg;
               var buycarDate = localStorage.getItem(userName);
               buycarDate =JSON.parse(buycarDate);
               console.log(buycarDate);
               if (buycarDate==null){
                   buycarnumnode.className= "buycarnum";
                   right_nav_ul_li_span.className ="buycarnum_right";
                   buycarnumnode.innerHTML =0;
                   console.log(right_nav_ul_li_span[1]);
                   right_nav_ul_li_span.innerText = 0;
                   buycardata.innerHTML = "购物车无商品!!";
                   return;
               }
               console.log(1);
               buycarnumnode.className= "buycarnum";
               buycarnumnode.innerHTML =buycarDate.length;
               right_nav_ul_li_span.className ="buycarnum_right";
               right_nav_ul_li_span.innerHTML = buycarDate.length;

               for (var i = 0; i < buycarDate.length; i++) {
                   //获取存储数据
                   var num = buycarDate[i].num;
                   var img = buycarDate[i].img;
                   var shopname = buycarDate[i].shopname;
                   var price = buycarDate[i].price;
                   price = "￥" + parseInt(price).toFixed(2);
                   var sum = buycarDate[i].sum;
                   var url = buycarDate[i].url;

                   //创建和添加新节点
                   var html = '<div class="shop_info">'
                       + '<div class="shop_info_left"><a href="' + url + '"><img src="' + img + '" alt=""></div><div class="shop_info_right">'
                       + '<p>' + shopname + '</p></a>'
                       + '<p><em>' + price + '<em>' + '×' + num + '</p>'
                       + '</div></div>';
                   buycardata.innerHTML += html;
               }
           }else{
               buycarnumnode.className= "buycarnum";
               right_nav_ul_li_span.className ="buycarnum_right";
               buycarnumnode.innerHTML =0;
               console.log(right_nav_ul_li_span[1]);
               right_nav_ul_li_span.innerText = 0;
               buycardata.innerHTML = "请先登录!!";
           }

       }
       
       
   })


});

