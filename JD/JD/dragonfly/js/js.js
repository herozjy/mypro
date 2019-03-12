window.onload = function () {
    var recommend_title = document.getElementById("recommend-title");
    var ensure = document.getElementById("ensure");
    var appraise = document.getElementById("appraise");
    var goods = document.getElementById("goods");
    var none_1 = document.getElementById("none-1");
    var brand = document.getElementById("brand");
    var a_ghost = document.getElementById("a_ghost");
    var recommend_left_top = document.getElementById("recommend-left-top");


    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    if (scrollTop > 1260) {
        recommend_title.className = "recommend-title recommend-title-fixed";
        recommend_left_top.className = "recommend-left-top recommend-left-top-fixed";
    } else {
        recommend_title.className = "recommend-title ";
        recommend_left_top.className = "recommend-left-top ";
    }
    var sum = 0;


    window.onscroll = function () {
        scrollTop = document.body.scrollTop || document.documentElement.scrollTop;


        if (scrollTop > 1260) {
            recommend_title.className = "recommend-title recommend-title-fixed";
            recommend_left_top.className = "recommend-left-top recommend-left-top-fixed";

            a_ghost.href = "#ghost";
        } else {
            recommend_title.className = "recommend-title ";
            recommend_left_top.className = "recommend-left-top ";
            a_ghost.href = "javascript:void(0)";
        }

    }

    var arr = [];
    arr.push(brand, none_1, ensure, appraise, goods);
    var num = 0;
    var maxnum = 0;
    var oPNodes = recommend_title.getElementsByTagName("p");
    for (var i = 0; i < oPNodes.length; i++) {
        oPNodes[i].index = i;


        maxnum = oPNodes[oPNodes.length - 1].index;
        oPNodes[i].onclick = function () {


            console.log(sum);
            num = this.index;

            for (var j = 0; j < oPNodes.length; j++) {
                oPNodes[j].className = " ";
            }

            console.log(maxnum);

            for (var d = 0; d < maxnum; d++) {
                arr[d].style.display = "block";

            }
            for (var z = 0; z < num; z++) {
                arr[z].style.display = "none";
            }

            this.className = "current-p";

        }


    }


    var mian_left_superbig = document.getElementsByClassName("mian-left-superbig")[0];
    var mian_left_superbig_li = mian_left_superbig.getElementsByTagName("li");
    var mian_left_superbig_img = mian_left_superbig.getElementsByTagName("img");

    var mian_left_big = document.getElementsByClassName("mian-left-big")[0];
    var mian_left_big_li = mian_left_big.getElementsByTagName("li");


    var mian_left_smimg = document.getElementsByClassName("mian-left-smimg")[0];
    var mian_left_smimg_img = mian_left_smimg.getElementsByTagName("img");

    var pre_arrow = document.getElementsByClassName("pre-arrow")[0];
    var next_arrow = document.getElementsByClassName("next-arrow")[0];

    var num_sm_img = 0;
    next_arrow.onclick = function () {
        num_sm_img++;
        if (num_sm_img > 2) {
            num_sm_img = 2;
            return
        }
        mian_left_smimg.style.left = parseInt(mian_left_smimg.style.left) - 64 + "px";
    };
    pre_arrow.onclick = function () {
        num_sm_img--;
        if (num_sm_img < 0) {
            num_sm_img = 0;
            return
        }
        mian_left_smimg.style.left = parseInt(mian_left_smimg.style.left) + 64 + "px";
    };
    var oldcurrent = 0;
    for (var i = 0; i < mian_left_smimg_img.length; i++) {
        (function (i) {
            mian_left_smimg_img[i].onmouseover = function () {
                mian_left_smimg_img[oldcurrent].className = "";
                mian_left_big_li[oldcurrent].style.display = "none";
                mian_left_superbig_li[oldcurrent].style.display = "none";
                oldcurrent = i;
                mian_left_smimg_img[oldcurrent].className = "smimg";
                mian_left_big_li[oldcurrent].style.display = "block"
                mian_left_superbig_li[oldcurrent].style.display = "block"
            }
        })(i)
    }
    mian_left_big.onmouseover = function () {
        mian_left_superbig.style.display = "block";
        smallblock.style.display = "block";
    }
    mian_left_big.onmouseout = function () {
        mian_left_superbig.style.display = "none"
        smallblock.style.display = "none"
    }

    var smallblock = document.getElementById("smallblock");
    mian_left_big.onmousemove = function (event) {
        var e = window.event || event;
        // console.log(e.offsetX,e.offsetY)
        // console.log(e.pageX,e.pageY)

        // var pointX =e.offsetX -smallblock.offsetWidth * 0.5;
        // var pointY =e.offsetY -smallblock.offsetHeight * 0.5;

        var pointX = e.pageX - mian_left_big.offsetParent.offsetLeft - smallblock.offsetWidth * 0.5;
        var pointY = e.pageY - mian_left_big.offsetParent.offsetTop - smallblock.offsetHeight * 0.5;
        if (pointX < 0) {
            pointX = 0;
        } else if (pointX >= mian_left_big.offsetWidth - smallblock.offsetWidth) {
            pointX = mian_left_big.offsetWidth - smallblock.offsetWidth;
        }

        if (pointY < 0) {
            pointY = 0;
        } else if (pointY >= mian_left_big.offsetHeight - smallblock.offsetHeight) {
            pointY = mian_left_big.offsetHeight - smallblock.offsetHeight;
        }
        smallblock.style.left = pointX + "px";
        smallblock.style.top = pointY + "px";

        mian_left_superbig_img[oldcurrent].style.left = -pointX * (mian_left_superbig.offsetWidth / smallblock.offsetHeight) + "px";
        mian_left_superbig_img[oldcurrent].style.top = -pointY * (mian_left_superbig.offsetWidth / smallblock.offsetHeight) + "px";
    }


    var mian_mid_6_ul = document.getElementById("mian_mid_6_ul");
    var mian_mid_6_ul_li = mian_mid_6_ul.children;
    var mian_left_big = document.getElementById("mian_left_big");
    var show_info_contianer_img = document.getElementById("show_info_contianer_img");

    var show_info_contianer_left = document.getElementById("show_info_contianer_left");
    var show_info_img_546 = show_info_contianer_img.children;
    var show_mask = document.getElementById("show_mask");


    var mian_left_big_img = mian_left_big.getElementsByTagName("img");
    var price = document.getElementById("price");
    for (var i = 0; i < mian_mid_6_ul_li.length; i++) {
        (function (i) {
            mian_mid_6_ul_li[i].onclick = function () {

                for (var j = 0; j < mian_mid_6_ul_li.length; j++) {
                    mian_mid_6_ul_li[j].style.border = "1px solid #ccc";
                }
                this.style.border = "1px solid #e11111";
                mian_left_big_img[0].src = "img/img1_350_" + (i + 1) + ".jpg";
                // price.innerText =1199+500*i+".00";

                price.innerText =(1199+500*i).toFixed(2)
            }
        })(i)
    }

//查看大图
      mian_left_big.onclick = function () {
          show_mask.style.display ="block";

          var show_info = document.getElementById("show_info");
          var show_info_contianer_right_bottom_img = document.getElementById("show_info_contianer_right_bottom_img");
          var show_info_contianer_img_800 = document.getElementById("show_info_contianer_img_800");
          show_info.style.top = scrollTop + 50 + "px";
          show_info.style.left = (document.body.clientWidth - show_info.offsetWidth) / 2 + 50 + "px";
          show_mask.style.width = document.body.clientWidth + "px";

          for (var i = 0 ;i<mian_left_smimg_img.length;i++){
              show_info_contianer_right_bottom_img.appendChild(mian_left_smimg_img[i].cloneNode(true))
          }
          var show_info_img_54 =show_info_contianer_right_bottom_img.children;
          show_info_img_54[0].className ="smimg";
          show_info_img_546[0].style.opacity ="1";
          var lastOne = 0;
          for (var i = 0; i < show_info_img_54.length;i++) {
              ( function(i){
                  show_info_img_54[i].onmouseover = function () {
                      show_info_img_54[lastOne].className = "";
                      show_info_img_546[lastOne].style.opacity ="0";
                      show_info_img_546[i].style.opacity ="1";
                      this.className ="smimg";
                      lastOne =i;

                  }
              }(i))
          }
          show_info_contianer_left.onmouseenter =function () {
              var newImg =document.createElement("img");
              if ( lastOne ==0 || lastOne ==1){
                  newImg.src ="img/img"+(lastOne+1)+"_800.jpg"
              } else if( lastOne ==2|| lastOne ==3){
                  newImg.src ="img/img"+(lastOne+1)+"_800.png"
              }else if( lastOne ==4|| lastOne ==5){
                  newImg.src ="img/img"+(lastOne-3)+"_800.jpg"
              }else if(lastOne==6){
                  newImg.src ="img/img"+(lastOne-3)+"_800.png"

              }
              show_info_contianer_img_800.appendChild(newImg);
          };
          show_info_contianer_left.onmouseleave =function () {
              show_info_contianer_img_800.removeChild(show_info_contianer_img_800.children[0])
          }
          show_info_contianer_left.onmousemove = function (event) {
              var e = window.event || event;
              var pointX= e.pageX-150;
              var pointY =e.pageY -show_info_contianer_left.offsetTop-scrollTop-45;
              show_info_contianer_img_800.style.left = -0.1*pointX*(show_info_contianer_left.offsetWidth/show_info_img_546[0].offsetWidth) +"px";
              show_info_contianer_img_800.style.top = -0.5*pointY*(show_info_contianer_left.offsetHeight/show_info_img_546[0].offsetHeight) +"px";
          };
     }
//关闭大图
    close_show_info.onclick =function () {
            show_mask.style.display ="none";
        var show_info_contianer_right_bottom_img = document.getElementById("show_info_contianer_right_bottom_img");
        show_info_contianer_right_bottom_img.innerHTML="";

    }
    document.onclick =function (event) {
        var e= event|| window.event;
        var targetId = e.target ? e.target.id : e.srcElement.id;
        // console.log(targetId);
        if ( targetId=="show_mask") {
            show_mask.style.display ="none";
            var show_info_contianer_right_bottom_img = document.getElementById("show_info_contianer_right_bottom_img");
            show_info_contianer_right_bottom_img.innerHTML=""
        }
    }

};