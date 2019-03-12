window.onload = function () {
    //星星
    var appraise_part_star = document.getElementsByClassName("appraise_part_star");
    var appraise_part_span = document.getElementsByClassName("appraise_part_span");
    var appraise_part_star_hid = document.getElementsByClassName("appraise_part_star_hid");
    var grand = 0;


    for (var i = 0; i < appraise_part_star.length; i++) {
        var appraise_part_star_li = appraise_part_star[i].children;
        //星星
        for (var j = 0; j < appraise_part_star_li.length; j++) {
            (function (j, i) {
                appraise_part_star_li[j].onmouseover = function () {
                    appraise_part_star_hid[i].style.backgroundPosition = -0 + "px  " + (-96 - 16 * j) + "px";
                    appraise_part_span[i].innerText = j + 1 + "分";
                };
                appraise_part_star_li[j].onmouseout = function () {
                    appraise_part_star_hid[i].style.backgroundPosition = -0 + "px  " + 0 + "px";

                    appraise_part_span[i].innerText = grand + "分";
                };

                appraise_part_star_li[j].onclick = function () {
                    appraise_part_star[i].style.backgroundImage = "url(\"img/star-matrix.png\")";

                    appraise_part_star[i].style.backgroundPosition = -0 + "px  " + (-16 - 16 * j) + "px";
                    grand = j + 1;
                    appraise_part_span[i].innerText = grand + "分";
                }


            })(j, i)
        }
    }

    //弹出框

    var app_phone = document.getElementsByClassName("app_phone");
    var appraise_part_input_part = document.getElementsByClassName("appraise_part_input_part_1");
    var appraise_part_input_part_file =document.getElementsByClassName("appraise_part_input_part");
    var mask = document.getElementsByClassName("mask");
    var app_phone_close = document.getElementsByClassName("app_phone_close");
    var app_phone_mid_info = document.getElementsByClassName("app_phone_mid_info");
    var app_phone_mid = document.getElementsByClassName("app_phone_mid");
    var appraise_part_input = document.getElementsByClassName("appraise_part_input");



    for (var j = 0; j < appraise_part_star.length; j++) {

        (function (z) {

            appraise_part_input_part[z].onmouseover = function () {
                mask[z].style.display = "block";
                app_phone[z].style.display = "block";
            };
            app_phone[z].onmouseleave = function () {
                mask[z].style.display = "none";
                app_phone[z].style.display = "none"
            }

            app_phone_mid_info[z].onmouseover = function () {
                app_phone_mid[z].style.width = "348px";
                app_phone_mid_info[z].getElementsByClassName("app_phone_mid_img")[0].style.marginLeft = "10px";
            }
            app_phone_mid_info[z].onmouseout = function () {

                app_phone_mid[z].style.width = "255px";
                app_phone_mid_info[z].getElementsByClassName("app_phone_mid_img")[0].style.marginLeft = "78px";

            }

            app_phone_close[z].onclick = function () {
                app_phone[z].style.display = "none";
                mask[z].style.display = "none";
            };


            // 上传图片

            var appraise_part_input_tip=document.getElementsByClassName("appraise_part_input_tip")[z];
            var appraise_part_input_tip_span =appraise_part_input_tip.getElementsByTagName("span");


            var fileNodeParent = document.getElementsByClassName("getIMG")[z];

            var setBigImg = document.getElementsByClassName("setBigImg")[z];
            var fileNode= appraise_part_input_part_file[z].getElementsByTagName("input")[0];
            var html =null;
            var filenum = 0;
            fileNode.onchange =function () {
                if (filenum>=9){
                    alert("一共只能上传9张图片");
                    return;
                }
                var file = fileNode.files[0];//重点

                if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/gif') {
                    alert('不是有效的图片文件!');
                    return;
                }
                var reader = new FileReader(); //重点
                reader.readAsDataURL(file);
                reader.onload = function () {

                    html ='<div class="fileCSS" onclick="clickCSS(this)"><img src="'+ this.result+'"><i class="iconfont icon-lajixiang" onclick="del_img(this)"></i></div>';
                    fileNodeParent.innerHTML +=html;
                    filenum++;
                    appraise_part_input_tip_span[0].innerText = filenum;
                    appraise_part_input_tip_span[1].innerText = 9-filenum;
                };

            }

        })(j)

    }

};

function clickCSS(node) {
    var nodeParent = node.parentNode;
    var nodeParent1 =nodeParent.parentNode;
    var nodeParent2 =nodeParent1.parentNode;
   var setBigImg = nodeParent2.getElementsByClassName("setBigImg")[0];
    // console.log(  node.parentNode.parentNode.parentNode.getElementsByClassName("setBigImg"));
    var AllNode = nodeParent.getElementsByClassName("fileCSS");
    var nodeImg= node.getElementsByTagName("img")[0];
    for (var i =0; i<AllNode.length;i++){
        AllNode[i].style.border = "1px solid #ccc";
    }
    // console.log(nodeImg.src);
    node.style.border = "1px solid #e11111";

    // var html1 = '<div class="setBigImg_pic"><span >×</span></div><img src="'+nodeImg.src+'">';

    var html1 = '<div class="setBigImg_pic"><span >×</span><span>左转</span><span>右转</span></div><img src="'+nodeImg.src+'">';
    setBigImg.innerHTML = html1;


    var setBigImg1 =  node.parentNode.parentNode.parentNode.getElementsByClassName("setBigImg")[0];
    var setBigImg_pic = setBigImg1.getElementsByClassName("setBigImg_pic")[0];
    var setBigImgPIC = setBigImg1.getElementsByTagName("img")[0];
    setTimeout(function () {

        var setBigImgBefore  =setBigImg_pic.getElementsByTagName("span")[1];
        var setBigImgAfter  =setBigImg_pic.getElementsByTagName("span")[2];
        var setBigImgSpan = setBigImg_pic.getElementsByTagName("span")[0];
        var flag =false;
        setBigImgSpan.onclick = function () {
            console.log(1);
            setBigImg.innerHTML =" ";
        };
        var rotateNum = 0;
        setBigImgBefore.onclick = function () {
            rotateNum++;
            setBigImgPIC.style.transform = "rotate("+ -90*rotateNum+"deg)";
            if (flag ) {
                setBigImg.style.width ="680px";
                setBigImg.style.height = "500px";
                setBigImg.style.marginTop = "70px";
                flag =false;
            }else{
                setBigImg.style.width = "500px";
                setBigImg.style.height ="680px";
                setBigImg.style.marginTop = "140px";

                flag =true;
            }




        };
        setBigImgAfter.onclick = function () {
            rotateNum--;
            setBigImgPIC.style.transform = "rotate("+ -90*rotateNum+"deg)";
            if (flag ) {
                setBigImg.style.width ="680px";
                setBigImg.style.height = "500px";
                setBigImg.style.marginTop = "70px";
                flag =false;
            }else{
                setBigImg.style.width = "500px";
                setBigImg.style.height ="680px";
                setBigImg.style.marginTop = "140px";
                flag =true;
            }
        }
    },50);



}
function del_img(node) {
    $(node).parent().parent().parent().next(":first").html(" ");
  var filenum_tip=$(node).parent().parent().nextAll('.appraise_part_input_tip')[0];
   var $filenum = $(filenum_tip).find('span');
    console.log( $($filenum[0]).text());
    $($filenum[0]).text($($filenum[0]).text()-1);
    $($filenum[1]).text( 1+parseInt($($filenum[1]).text()));
    $(node).parent().remove();
}


//提交
$(function () {

    $(".container_footer_submit").click(function (e) {
        var newobj = {};

        $(".fileCSS img").each(function (i, v) {

            newobj["dataArr" + i] = $(this).attr('src');
        });

        newobj = JSON.stringify(newobj);
        console.log("正在提交请稍");
        $.ajax({
            type:"post",
            url: 'controller/updata_file.php',
            data:{
                arr11:newobj,
            },
            success :function (msg) {
                console.log(msg);
                if (msg == 1){
                    alert("提交成功");
                }
                $(".getIMG").html(" ");
                $(".setBigImg").html(" ");
                $(".appraise_part_input_tip span:eq(0)").html("0");
                $(".appraise_part_input_tip span:eq(1)").html("9");


            }
        })



        })


    
})


