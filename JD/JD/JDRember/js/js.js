window.onload=function () {
    var main=document.getElementById("main");

    var nav_banner_img=document.getElementById("nav_banner_img");
    var banner_img=nav_banner_img.getElementsByTagName("li");

    var nav_banner_dot=document.getElementById("nav_banner_dot");
    var banner_dot=nav_banner_dot.getElementsByTagName("li");


    var arrColor=["rgb(156, 206, 231)","rgb(234, 0, 117)","rgb(183, 177, 248)","rgb(255, 162, 117)","rgb(10, 13, 32)"];


    var timer=null;
    var num=0;
    main.style.backgroundColor=arrColor[num];
    // 设置定时器
    timer=setInterval(
        function () {
            num++;

            if(num>4){
                    num=0;
                main.style.backgroundColor=arrColor[num];

                for (var i=0;i<banner_dot.length;i++){
                    banner_dot[i].className=" ";
                    banner_img[i].style.left=-550*num+"px";
                }
                banner_dot[num].className="current-nav-banner-color";


            }else{
                main.style.backgroundColor=arrColor[num];

                for (var i=0;i<banner_dot.length;i++){
                    banner_dot[i].className=" ";
                }
                banner_dot[num].className="current-nav-banner-color";
                banner_img[num].style.left=-550*num+"px";
            }
            console.log(num);
        },1000
    );
    //清除和打开定时器
    nav_banner_img.onmouseover=function () {
            clearInterval(timer);
        };
    nav_banner_img.onmouseout=function () {
        timer=setInterval(
            function () {
                num++;

                if(num>4){
                    num=0;
                    main.style.backgroundColor=arrColor[num];

                    for (var i=0;i<banner_dot.length;i++){
                        banner_dot[i].className=" ";
                        banner_img[i].style.left=-550*num+"px";
                    }
                    banner_dot[num].className="current-nav-banner-color";


                }else{
                    main.style.backgroundColor=arrColor[num];

                    for (var i=0;i<banner_dot.length;i++){
                        banner_dot[i].className=" ";
                    }
                    banner_dot[num].className="current-nav-banner-color";
                    banner_img[num].style.left=-550*num+"px";
                }
                console.log(num);
            },1000
        );
        };
    nav_banner_dot.onmouseover=function () {
        clearInterval(timer);
    };
    nav_banner_dot.onmouseout=function () {
        timer=setInterval(
            function () {
                num++;

                if(num>4){
                    num=0;
                    main.style.backgroundColor=arrColor[num];

                    for (var i=0;i<banner_dot.length;i++){
                        banner_dot[i].className=" ";
                        banner_img[i].style.left=-550*num+"px";
                    }
                    banner_dot[num].className="current-nav-banner-color";


                }else{
                    main.style.backgroundColor=arrColor[num];

                    for (var i=0;i<banner_dot.length;i++){
                        banner_dot[i].className=" ";
                    }
                    banner_dot[num].className="current-nav-banner-color";
                    banner_img[num].style.left=-550*num+"px";
                }
                console.log(num);
            },1000
        );
    };

    //dot
    for(var i=0;i<banner_dot.length;i++){
        banner_dot[i].index=i;
        console.log(1);
        banner_dot[i].onmouseover=function () {
            num=this.index;
            console.log(num);
            for(var j=0;j<banner_dot.length;j++){
                banner_dot[j].className="";
                banner_img[j].style.left=0+"px";
            }
            this.className="current-nav-banner-color";
            main.style.backgroundColor=arrColor[num];
            banner_img[num].style.left=-550*num+"px";
        }
    }









}