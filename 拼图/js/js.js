var xAixs = 3;
var yAixs = 3;
$(function () {

    $("#level_ul li").each(function (i) {
        console.log(i);
        switch (i){
                case 0:
                    $(this).on("click",function () {
                        xAixs = 3;
                        yAixs = 3;
                        console.log(xAixs,yAixs)
                    });
                    break;
                case 1:
                    $(this).on("click",function () {
                        xAixs = 5;
                        yAixs = 5;
                        console.log(xAixs,yAixs)
                    });
                    break;
                case 2:
                    $(this).on("click",function () {
                        xAixs = 7;
                        yAixs = 7;
                        console.log(xAixs,yAixs)
                    });
                    break;
                case 3:
                    $(this).on("click",function () {
                        xAixs = 15;
                        yAixs = 15;
                        console.log(xAixs,yAixs);
                    });
                    break;
            case 4:
                $(this).on("click",function () {
                    xAixs= window.prompt("X轴个数");
                    yAixs = window.prompt("Y轴个数");
                    console.log(xAixs,yAixs)
                });
                break;
                default:break;
            }
    });

    $("#nav input:eq(0)").on("click", function () {
        $("#img").css("display", "none");
        function recover(){
            $("#nav input:eq(0)").val("复原");
            $("#level").attr("disabled","disabled");
            fn(xAixs, yAixs);
            countTime();
        }
        function start(){
            $("#nav input:eq(0)").val("开始");
            $("#list li").detach("");
            $("#level").removeAttr("disabled")
            $("#img").css("display", "block");
            $("#time").empty();
            clearInterval(timer);
        }
        $(this).val() == "开始" ?  recover():start();
    });

});

function fn(xNum, yNum) {
    var oldArr=[];
    var num = 0;
    $("#list").width ($("#img").width()+xNum*2 +"px");
    $("#list").height ( $("#img").height() +yNum*2 +"px");
    var xWidth = $("#img").width() / xNum;
    var yHeight = $("#img").height() / yNum;

    //通过background-position分割图片
    for (var i = 0; i < yNum; i++) {
        for (var j = 0; j < xNum; j++) {
            oldArr.push("<li  draggable=\"true\" ondragstart=\"drag(event,this)\"  data-num="+num+"  style='width:" + xWidth + "px;height:" + yHeight + "px;background-position: " + (-xWidth * j) + "px  " + (-yHeight * (i)) + "px;' ></li>");

        //     $('#list').append("<li style='width:" + xWidth + "px;height:" + yHeight + "px;background-position: " + (-xWidth * j) + "px  " + (-yHeight * (i)) + "px ;'></li>")
            num++;
         }
    }

    //数组随机排序
    function randomSort(a, b) {
        return Math.random() > 0.5 ? -1 : 1;
    }
    oldArr.sort(randomSort);
    //添加到#list中
    $.each(oldArr,function (i,v) {
        $("#list").append(v);
    })
    $("#list li").wrap("<span ondrop=\"drop(event,this)\"  ondragover=\"allowDrop(event)\" ondragstart=\"drag(event,this)\"></span>");
}


var swapNode = null;
function allowDrop(ev) {
    ev.preventDefault();
}
function drag(ev,dragNode) {
    swapNode = dragNode;
    ev.dataTransfer.setData("text/html",dragNode.innerHTML);
}
function drop(ev,dropNode) {
    ev.preventDefault();
    swapNode.innerHTML = dropNode.innerHTML;
    dropNode.innerHTML=ev.dataTransfer.getData("text/html");
    if(check()){
        alert("you win");
        clearInterval(timer);
    }
}
//检查胜利
function check() {
    var newArr=[];
    var allNum = yAixs*xAixs;
    for(var i=0 ;i<allNum;i++){
        newArr.push(i.toString())
    }
    console.log(newArr);
    var arrNow=[];
   $("#list li").each(function (i,v) {
       arrNow.push($(v).attr("data-num"));
   });
    console.log(arrNow);
    if (newArr.toString() ==arrNow.toString()){
        return true;
    }
}


//计时器
var timer = null;
var count=0 ;
var str ;
function countTime() {
    str = "已用时： 00时00分00秒";
    $("#time").html(str);

    timer = setInterval(function () {
        count++;
        var hours = Math.floor(count/3600);
        var minutes =Math.floor((count%3600)/60) ;
        var seconds = (count%3600)%60;
        if (hours<10){
            hours = "0"+hours;
        }
        if (minutes<10){
            minutes ="0"+minutes;
        }
        if (seconds<10){
            seconds ="0"+seconds;
        }
        str = "已用时： "+hours+"时"+minutes+"分"+seconds+"秒";
        $("#time").html(str);
    },1000)

}

//选择难道
changlev();
function changlev() {
    $("#level").on("click",function () {
        $("#changeLevel").slideToggle(500);
    })
    $("#changeLevel li").on("click",function () {
       $('#level').text( $(this).text());
        $("#changeLevel").slideToggle(500);
    })

}



// theme
// $(function(){
//     var arrColor = ["#4f71b9","#b5d521","#faab1a","#08bece","#e33068","#c04fda"]
//     $("#dl dd").each(function(i,v){
//         $(this).css("background-position-x",  -i*20+"px");
//         // $(this).css("background-position",  -i*20+'px'+" "+0);
       

//     })

//     $("#dl dd").on("click",function(){
//         $("#dl dd").each(function(i,v){
//             $(this).css("background-position-y",  0);
//              // $("#body").css("background-color","#fff");
//         })
       
//         $(this).css("background-position-y",  -15+"px");
       
//         console.log($(this).index())
//          $("body").css("background-color",arrColor[ $(this).index()]);
        
//     })

// })

$(function(){
    var arrColor = ["#4f71b9","#b5d521","#faab1a","#08bece","#e33068","#c04fda"];
    $("#dl dd").each(function(i,v){
        $(this).attr("data-myChecked","1");
        $(this).css("background-position-x",  -i*20+"px");
        // $(this).css("background-position",  -i*20+'px'+" "+0);
    });


    $("#dl dd").on("click",function(){

        var n = parseInt($(this).attr("data-myChecked"));
        console.log(n);
        $("#dl dd").attr("data-myChecked","1");
        if( !n){


            $("body").css("background-color","#fff");
            $(this).css("background-position-y",  0);
            return;
        }

        $("#dl dd").each(function(i,v){
            $(this).css("background-position-y",  0);
            $("body").css("background-color","#fff");
        });

        $(this).css("background-position-y",  -15+"px");
        $("body").css("background-color",arrColor[ $(this).index()]);
        $(this).attr("data-myChecked",0);

    })

});