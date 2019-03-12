window.onload = function () {

    // 轮播图
    var nav_center = document.getElementById("nav-center");
    var navsliderBanner = document.getElementById("nav-center-slider-banner");
    var oDds = navsliderBanner.getElementsByTagName("dd");
    var headerRightAd = document.getElementById("header-right-ad");
    var oImgs = headerRightAd.getElementsByTagName("IMG");
    var index = 0;
    var num1 = 0;
    // 轮播图dot
    var current_banner_ul = document.getElementById("current_banner_ul");
    var current_banner_li = current_banner_ul.getElementsByTagName("li");
    for (var i = 0; i < current_banner_li.length; i++) {
        current_banner_li[i].index = i;
        current_banner_li[i].onmouseover = function () {
            for (var i = 0; i < current_banner_li.length; i++) {
                current_banner_li[i].className = "";
                oDds[i].style.opacity = "0";
            }
            this.className = "current-banner";
            oDds[this.index].style.opacity = "1";
            index = num1 = this.index;
        }
    }
    var timer11 = null;
    timer11 = setInterval(autoplay, 2000);
//清除定时器
    nav_center.onmouseenter = function () {
        clearInterval(timer11);
    };
    nav_center.onmouseleave = function () {
        timer11 = setInterval(autoplay, 2000)
    };

    // 轮播图定时器
    function autoplay() {
        for (var i = 0; i < oDds.length; i++) {
            oDds[i].style.opacity = "0";
        }
        if (num1 > oImgs.length - 1) {
            num1 = 0;
        } else {
            num1++;
        }
        oDds[num1].style.opacity = "1";
        for (var i = 0; i < current_banner_li.length; i++) {
            current_banner_li[i].className = " ";
        }
        if (index > current_banner_li.length - 2) {
            index = 0;
        } else {
            index++;
        }
        current_banner_li[index].className = "current-banner";
    }

    //左右箭头
    var preArrow = document.getElementsByClassName("header-part2-left")[0];
    var nextArrow = document.getElementsByClassName("header-part2-right")[0];
    preArrow.onclick = function () {
        index--;
        if (index < 0) {
            index = current_banner_li.length - 1;
            console.log("!" + current_banner_li.lenght);
        }
        for (var i = 0; i < current_banner_li.length; i++) {
            current_banner_li[i].className = "";
            oDds[i].style.opacity = "0";
        }
        current_banner_li[index].className = "current-banner";
        oDds[index].style.opacity = "1";
    };
    nextArrow.onclick = function () {
        index++;
        if (index > current_banner_li.length - 1) {
            index = 0;
        }
        for (var i = 0; i < current_banner_li.length; i++) {
            current_banner_li[i].className = "";
            oDds[i].style.opacity = "0";
        }
        current_banner_li[index].className = "current-banner";
        oDds[index].style.opacity = "1";

    };
    //顶部导航
    var search_fix = document.getElementById("search-fix");
    var searchTop = document.body.scrollTop || document.documentElement.scrollTop;
    // 右边导航
    var right_nav = document.getElementById("right-nav");
    var right_nav_ul = document.getElementById("right-nav-ul");
    var o_right_nav_ul = right_nav_ul.getElementsByTagName("li");
    var right_nav_ol = document.getElementById("right-nav-ol");
    var o_right_nav_ol = right_nav_ol.getElementsByTagName("li");
    rightNav(right_nav, o_right_nav_ul, o_right_nav_ol, search_fix, searchTop);
    if (searchTop >= 700) {
        search_fix.style.display = "block";
    } else {
        search_fix.style.display = "none";
    }
    window.onscroll = function () {
        searchTop = document.body.scrollTop || document.documentElement.scrollTop;

        if (searchTop >= 700) {
            search_fix.style.display = "block";
        } else {
            search_fix.style.display = "none";
        }
    };
    //选项卡
    var nav_right_mid_down = document.getElementById("nav-right-mid-down");
    var oSpan = nav_right_mid_down.getElementsByTagName("span");
    var tab = document.getElementById("tab");
    var oli = tab.getElementsByTagName("li");
    var nav_right_mid_nav = document.getElementsByClassName("nav-right-mid-nav")[0];
    var nav_right_mid = document.getElementsByClassName("nav-right-mid")[0];
    var nav_right_a = nav_right_mid_nav.getElementsByTagName("a");
    var nav_right_ul = nav_right_mid.getElementsByTagName("ul");
    var nav_right_arr = [];
    nav_right_arr[0] = nav_right_a[0];
    nav_right_arr[1] = nav_right_a[1];
    var module_list_nav = document.getElementsByClassName("module-list-nav")[0];
    var module_list_nav_span = module_list_nav.getElementsByTagName("span");
    var module_left = document.getElementById("module-left");
    var module_list_content = module_left.getElementsByClassName("module-list-content");
    for (var i = 0; i < 5; i++) {
        var module_list_content_all = module_left.getElementsByClassName("module-list-content")[i];
        var module_list_content_ul = module_list_content_all.getElementsByTagName("ul");
        var module_list_footer = document.getElementsByClassName("module-list-footer")[i];
        var module_list_footer_span = module_list_footer.getElementsByTagName("span");
        tabChange(module_list_footer_span, module_list_content_ul, "current-module-list-footer");
    }
    var list_miaosha_last = document.getElementsByClassName("list-miaosha-last")[0];
    var list_miaosha_last_img = list_miaosha_last.getElementsByClassName("list-miaosha-last-img");
    var list_dot = document.getElementsByClassName("list-dot")[0];
    var allPNode = list_dot.getElementsByTagName("p");
    tabChange(module_list_nav_span, module_list_content, "current-nav-right-mid-nav");
    tabChange(nav_right_arr, nav_right_ul, "current-nav-right-mid-nav");
    tabChange(oSpan, oli, "current-nav-right-mid-down");

    var countTab = 0;
    var indicatorIndex = 0;
    tabChange1(allPNode, list_miaosha_last_img, "current-list-dot");
    var timerTab = setInterval(function () {
        if (countTab >= allPNode.length) {
            countTab = 0;
        }
        for (var i = 0; i < allPNode.length; i++) {
            allPNode[i].className = "";
            list_miaosha_last_img[i].style.display = "none"
        }
        allPNode[countTab].className = "current-list-dot";
        list_miaosha_last_img[countTab].style.display = "block";
        countTab++;
    }, 1000);
    list_miaosha_last.onmouseenter = function () {
        clearInterval(timerTab)
    };
    list_miaosha_last.onmouseleave = function () {
        timerTab = setInterval(function () {
            if (countTab >= allPNode.length) {
                countTab = 0;
            }
            for (var i = 0; i < allPNode.length; i++) {
                list_miaosha_last_img[i].style.display = "none"
                allPNode[i].className = "";
            }
            list_miaosha_last_img[countTab].style.display = "block";
            allPNode[countTab].className = "current-list-dot";
            countTab++;
        }, 1000);
    };

    //选项卡
    function tabChange1(navTab, listTab, currentclassName) {

        for (var i = 0; i < navTab.length; i++) {
            (function (i) {
                navTab[i].onmouseover = function () {
                    navTab[indicatorIndex].className = "";
                    listTab[indicatorIndex].style.display = "none";
                    this.className = currentclassName;
                    listTab[i].style.display = "block";
                    countTab = indicatorIndex = i;

                }
            })(i)
        }


    }


    var list_header_part2_left = document.getElementById("list_header_part2_left");
    var list_header_part2_right = document.getElementById("list_header_part2_right");


    var list_ul = document.getElementById("list_ul");
    var list_ul_ul = list_ul.getElementsByTagName("ul");
    var currentIndex = 0;

    list_header_part2_right.onclick = function (e) {
        e.stopPropagation();
        var speed = 10;
        var jili = 0;
        if (currentIndex >= list_ul_ul.length - 1) {
            currentIndex = 0;
        }
        var timer21 = null;
        clearInterval(timer21);
        (function (currentIndex, timer) {
            timer = setInterval(function () {
                if (jili == 800) {
                    clearInterval(timer)
                }
                list_ul.style.left = -(currentIndex) * 800 - jili + "px";
                jili += 20;
            }, speed);
        })(currentIndex, timer21);
        currentIndex++;
    };
    list_header_part2_left.onclick = function (e) {
        e.stopPropagation();
        var speed = 10;
        var jili = 0;
        if (currentIndex <= 0) {
            currentIndex = list_ul_ul.length - 1;
        }
        var timer23 = null;
        clearInterval(timer23);
        (function (currentIndex, timer) {
            timer = setInterval(function () {
                if (jili == 800) {
                    clearInterval(timer)
                }
                ;
                list_ul.style.left = -(currentIndex) * 800 + jili + "px";
                jili += 20;
            }, speed);
        })(currentIndex, timer23);
        currentIndex--;

    };

    var timeslide = setInterval(ATplay, 2000);
    function ATplay() {
        var speed = 10;
        var jili = 0;
        if (currentIndex >= list_ul_ul.length - 1) {
            currentIndex = 0;
        }
        var timer22 = null;
        clearInterval(timer22);
        (function (currentIndex, timer) {
            timer = setInterval(function () {
                if (jili == 800) {
                    clearInterval(timer)
                }
                ;
                list_ul.style.left = -(currentIndex) * 800 - jili + "px";
                jili += 20;
            }, speed);
        })(currentIndex, timer22);
        currentIndex++;

    }

    var list_wrap = document.getElementById("list-wrap")
    list_wrap.onmouseover = function () {
        clearInterval(timeslide)
    }
    list_wrap.onmouseout = function () {
        timeslide = setInterval(ATplay, 2000)
    }

    //秒杀倒计时
    setInterval(MiaoShaTime, 1000);

    //公告无限滚动
    var sometimetimer = setInterval(sometime1, 1000);
    $("#wuxiangundong1").on("mouseover",function () {
        clearInterval(sometimetimer)
    })
    $("#wuxiangundong1").on("mouseout",function () {
        sometimetimer = setInterval(sometime1, 1000);
    })

    var sometimetimer1 = setInterval(sometime2, 1000);
    $("#wuxiangundong2").on("mouseover",function () {
        clearInterval(sometimetimer1)
    })
    $("#wuxiangundong2").on("mouseout",function () {
        sometimetimer1 = setInterval(sometime2, 1000);
    })


};

//无限滚动
var sometimeNUM = 0;
function sometime1() {
    var hei = parseInt($("#s").css("top"));
    var timer111 = null;
    (function (timer) {
        var speed = 0;
        timer = setInterval(function () {
            $("#s")[0].style.top = hei - speed + "px";
            if (speed >= 26) {
                clearInterval(timer);
            }
            speed++
        }, 20)
    }(timer111));
    if (sometimeNUM > 3) {
        sometimeNUM = 0;
        hei = 0;
        $("#s")[0].style.top = 0 + "px";
    }
    sometimeNUM++;
}
var sometimeNUM1 = 1;
function sometime2() {
    var hei = parseInt($("#ss").css("top"));
    var timer111 = null;
    (function (timer) {
        var speed = 0;
        timer = setInterval(function () {
            $("#ss")[0].style.top = hei - speed + "px";
            if (speed >= 26) {
                clearInterval(timer);
            }
            speed++
        }, 20)
    }(timer111));
    if (sometimeNUM1 > 3) {
        sometimeNUM1 = 0;
        hei = 0;
        $("#ss")[0].style.top = 0 + "px";
    }
    sometimeNUM1++;
}



//秒杀倒计时
function MiaoShaTime() {
    var d = new Date();
    var D_year = d.getFullYear();
    var D_mounth = d.getMonth();
    var D_day = d.getDate();
    var D_hours = d.getHours();
    // var D_minutes = d.getMinutes();
    // var D_senconds = d.getSeconds();

    if (D_hours >= 0 && D_hours < 6) {
        D_hours = 6
    } else if (D_hours == 6 || D_hours == 8 || D_hours == 10 || D_hours == 12 || D_hours == 14 || D_hours == 16 || D_hours == 18 || D_hours == 20 || D_hours == 22) {
        D_hours = D_hours + 2
    } else {
        D_hours = D_hours + 1;
    }

    var to = new Date(D_year, D_mounth, D_day, D_hours);
    var nowTime = d.getTime();
    var toTime = to.getTime();
    var leftTime = toTime - nowTime;
    // console.log(leftTime);
    var hours = parseInt(leftTime / 1000 / 3600 % 24);
    hours = checkTime(hours);
    var minutes = parseInt(leftTime / 1000 / 60 % 60);
    minutes = checkTime(minutes);
    var senconds = parseInt(leftTime / 1000 % 60);
    senconds = checkTime(senconds);
    var miaoshaTime = document.getElementById("miaoshaTime");
    var miaoshaTime_span = miaoshaTime.getElementsByTagName("span");
    miaoshaTime_span[0].innerText = hours;
    miaoshaTime_span[1].innerText = minutes;
    miaoshaTime_span[2].innerText = senconds;
    // console.log(hours,minutes,senconds);
}
function checkTime(time) {
    if (time < 10) {
        time = "0" + time;
    }
    return time;
}
// 右边导航
function rightNav(obj1, obj2, obj3, obj4) {
    for (var i = 0; i < obj2.length; i++) {
        obj2[i].index = i;
        var num = null;
        obj3[i].onclick = function (event) {
            //阻止冒泡
            if (event && event.stopPropagation) {
                event.stopPropagation();
            } else {
                window.event.cancelBubble = true;
            }
        };
        obj2[i].onclick = function (event) {
            //阻止冒泡
            if (event && event.stopPropagation) {
                event.stopPropagation();
            } else {
                window.event.cancelBubble = true;
            }
            var index = this.index;
            for (var j = 0; j < obj3.length; j++) {

                obj3[j].style.zIndex = -1;
            }
            obj3[index].style.zIndex = 9999;
            if (num == this.index) {
                obj1.style.right = "0px";
                var searchTop = document.body.scrollTop || document.documentElement.scrollTop;
                if (searchTop >= 700) {
                    obj4.style.display = "block";
                } else {
                    obj4.style.display = "none";
                }
                num = null;
            } else {
                obj1.style.right = "271px";
                obj4.style.display = "none";
                num = this.index;
            }
        }

    }
    document.onclick = function (event) {

        var e = event || window.event;

        //event.target经常使用的属性有以下几个
        // event.target.id
        // event.target.className
        //event.target.nodeName
        //event.target.innerHTML

        //获得点击对象的ID
        //  var targetId = e.target ? e.target.id: e.srcElement.id;
        var searchTop = document.body.scrollTop || document.documentElement.scrollTop;
        if (e.target != "") {
            obj1.style.right = "0px";
            if (searchTop >= 700) {
                obj4.style.display = "block";
            } else {
                obj4.style.display = "none";
            }
            // obj4.style.display="block";
            num = null;
        }
    }

};


//选项卡
// function tabChange(navTab,listTab,currentclassName) {
//     var tabnum=0;
//     for (var i=0;i<navTab.length;i++){
//         navTab[i].index=i;
//         navTab[i].onmouseover=function () {
//             tabnum=this.index;
//             for (var i=0;i<navTab.length;i++){
//                 navTab[i].className="";
//                 listTab[i].style.display="none";
//             }
//             this.className=currentclassName;
//             listTab[tabnum].style.display="block";
//         }
//     }
// }

function tabChange(navTab, listTab, currentclassName) {
    var lastOne = 0;
    for (var i = 0; i < navTab.length; i++) {
        (function (i) {
            navTab[i].onmouseover = function () {
                navTab[lastOne].className = "";
                listTab[lastOne].style.display = "none";
                this.className = currentclassName;
                listTab[i].style.display = "block";
                countTab = lastOne = i;
            }
        })(i)
    }


}
