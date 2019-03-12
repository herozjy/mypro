var ad = document.getElementById("floatAD");

//获得窗口可视区域的宽高
var clientx = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var clienty = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;


//窗口大小变化时
window.onresize = function () {
    // 创建本地存储
    var obj = new Object();
    obj.clientx = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    obj.clienty = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    var localDate = localStorage.localDate;
    if (!localDate) {
        localDate = [];
    }
    else {
        localDate = JSON.parse(localDate)
    }
    localDate.push(obj);
    localStorage.localDate = JSON.stringify(localDate);
    console.log(localStorage)

};
var xflag = true;
var yflag = true;
var timexx=null;
var timeyy=null;
timexx=setInterval("timeX()", 10);
timeyy=setInterval("timeY()", 10);
//让图片停止
ad.onmouseover = function () {
    clearInterval(timexx);
    clearInterval(timeyy);

};
ad.onmouseout = function () {
    timexx = setInterval("timeX()", 10);
    timeyy = setInterval("timeY()", 10);
};





function timeX() {
    // 获得本地数据
    var localDate = localStorage.localDate;
    if (localDate) {
        localDate = JSON.parse(localDate);
        clientx = localDate[localDate.length - 1].clientx;
    }

    var left = parseInt(ad.style.left);
    if (xflag) {
        if (left > clientx - 130) {
            xflag = false;
        }
        ad.style.left = left + 2 + "px";
    } else {
        if (left <= 0) {
            xflag = true;
        }
        ad.style.left = left - 2 + "px";
    }
}

function timeY() {

    // 获得本地数据
    var localDate = localStorage.localDate;
    if (localDate) {
        localDate = JSON.parse(localDate);
        clienty = localDate[localDate.length - 1].clienty
    }

    var scrollH = document.documentElement.scrollTop || document.body.scrollTop;
    var top = parseInt(ad.style.top)-scrollH;

    if (yflag) {
        if (top>= clienty - 110) {
            yflag = false;
        }
        ad.style.top = top + scrollH+ 2 + "px";
        if (top < 0){
            ad.style.top = scrollH+"px";
        }
    } else {
        if (top < 0) {
            yflag = true;
        }


        ad.style.top = top+scrollH - 2 + "px";
        if ( top > clienty - 110 ) {
            ad.style.top =scrollH+clienty - 110 +"px";
        }


    }

}




// //清除缓存  onunload
// setInterval(function () {
//     var localDate = localStorage.localDate;
//     var localDate = JSON.parse(localDate);
//     var pp = [];
//
//     for (var i = 0; i < localDate.length; i++) {
//         if (localDate[i].clientx == clientx || localDate[i].clienty == clienty ) {
//             console.log(1);
//             pp.push(localDate[i]);
//         }
//     }
//     localStorage.removeItem(localDate.clientx)
//     localStorage.localDate = JSON.stringify(pp);
//     console.log(localStorage)
//
// },10000);


