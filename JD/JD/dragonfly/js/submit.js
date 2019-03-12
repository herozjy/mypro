// 加入购物车,获得数据
// console.log(document.baseURI);	返回文档的绝对基础 URI
var join_input =document.getElementById("join_input");
var  mian_mid_p1 =document.getElementsByClassName("mian-mid-p1")[0];
var  price =document.getElementsByClassName("price")[0];
var  smimg =document.getElementsByClassName("smimg")[0];

// console.log(document.URL);
// console.log(document.baseURI);


var  wrap_input_1 =document.getElementsByClassName("wrap-input-1")[0];
var  wrap_input_2 =document.getElementsByClassName("wrap-input-2")[0];
var p = wrap_input_2.getElementsByTagName("p");
//数量加一
p[0].onclick =function(){
    console.log(wrap_input_1.innerHTML);
    wrap_input_1.innerHTML = parseInt(wrap_input_1.innerHTML)+1 ;
    p[1].className = "depointer";
};
// 数量减一
p[1].onclick =function(){
    if (  parseInt(wrap_input_1.innerHTML) >1){
        wrap_input_1.innerHTML = parseInt(wrap_input_1.innerHTML)-1 ;
    }
    if ( parseInt(wrap_input_1.innerHTML) == 1){
        p[1].className = "newpointer";
    }
};

join_input.onclick =function () {

    $.ajax({
       url:"controller/isLogin.php",
        success :function (msg) {
            if (msg ==1){
                if ( confirm("只有登录才能操作购物车")) {
                    var str = encodeURIComponent("login");//把中文转化成指定的字符串
                    location.href = "../"+str+"/index.html";
                }

            }
            else{
                // localStorage.setItem("b","isaac");
                // var b = localStorage.getItem("b");//获取b的值
                // localStorage.removeItem("c");//清除c的值
                var obj = new Object();
                obj.num = parseInt(wrap_input_1.innerHTML);
                obj.img = smimg.src;
                obj.shopname = mian_mid_p1.innerText;
                obj.price = parseInt(price.innerHTML) + "元";
                obj.sum = parseInt(wrap_input_1.innerHTML) * parseInt(price.innerHTML) + "元";
                obj.url = document.URL;

                if ( localStorage.getItem(msg) == null || localStorage.getItem(msg) =="[]"){
                    var buycarDate =[];
                    buycarDate.push(obj);
                }else{

                    buycarDate = JSON.parse(localStorage.getItem(msg));
                    for(var i = 0; i<buycarDate.length;i++){

                        //同名替换本地数据中，待改善
                        if (buycarDate[i].shopname == mian_mid_p1.innerText){
                            obj.num= (buycarDate[i].num)+parseInt(wrap_input_1.innerHTML);
                            buycarDate.splice(i,1);
                        }

                    }
                    buycarDate.push(obj);
                    console.log(buycarDate,obj.num);
                }
                buycarDate = JSON.stringify(buycarDate);
                localStorage.setItem(msg,buycarDate);
                console.log(localStorage);
               if (confirm("添加成功,是否去购物车查看")){
                   location.href = "buycar.html";
               }

            }
        }



    });



};