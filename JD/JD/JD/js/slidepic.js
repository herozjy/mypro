$(function () {
    var $_id = $("#moduel_center_part_1");
    var index_arrow=0;
    //向左移动
    $_id.find(".arrow-left:eq(0)").on("click",function () {
        var wid= parseInt( $_id.find(".module-center-wrap:eq(0)").css("left"));
        index_arrow++;
        if(index_arrow>2){
            index_arrow =0;
            wid = 390;
        }
        $_id.find(".moduel_center_container").each(function () {
            $_id.find(".module-center-wrap:eq(0)").animate({left:wid-390},200);
        });
        $("#module_list_footer span").removeAttr("class");
        $($("#module_list_footer span")[index_arrow]).addClass("current-module-list-footer");
    });
    //向右移动
    $_id.find(".arrow-right:eq(0)").on("click",function () {
        index_arrow--;
        var wid= parseInt( $_id.find(".module-center-wrap:eq(0)").css("left"));
        if(index_arrow < 0){
            index_arrow =2;
            wid=-1170;
        }
        $_id.find(".moduel_center_container").each(function () {
            $_id.find(".module-center-wrap:eq(0)").animate({left:wid+390},200);
        }) ;
        $("#module_list_footer span").removeAttr("class");
        $($("#module_list_footer span")[index_arrow]).addClass("current-module-list-footer");
    });
    //圆点
    $("#module_list_footer span").on("mouseover",function () {
        $("#module_list_footer span").removeAttr("class");
        $(this).addClass("current-module-list-footer");
        index_arrow= $(this).index();
        $_id.find(".module-center-wrap:eq(0)").animate({left:-390*index_arrow},200);
        clearInterval(indexTimeTimer)
    });
    $("#module_list_footer span").on("mouseout",function () {
        indexTimeTimer = setInterval( slodepic,2000);
    });

    $($(".module-center-wrap")[0]).on("mouseout",function () {
        indexTimeTimer = setInterval( slodepic,2000);
    });
    $($(".module-center-wrap")[0]).on("mouseover",function () {
        clearInterval(indexTimeTimer)
    });
   $("#arrow_left").on("mouseout",function () {
        indexTimeTimer = setInterval( slodepic,2000);
    });
    $("#arrow_left").on("mouseover",function () {
        clearInterval(indexTimeTimer)
    });
    $("#arrow_right").on("mouseout",function () {
        indexTimeTimer = setInterval( slodepic,2000);
    });
    $("#arrow_right").on("mouseover",function () {
        clearInterval(indexTimeTimer)
    });

    var indexTimeTimer = setInterval( slodepic,2000);
    function slodepic() {
        if (index_arrow>2){
            index_arrow=0
        }
        $("#module_list_footer span").removeAttr("class");
        $($("#module_list_footer span")[index_arrow]).addClass("current-module-list-footer");
        $_id.find(".module-center-wrap:eq(0)").animate({left:-390*index_arrow},200);
        index_arrow++;

    }
});


$(function () {
    var suvIndex = 0;
    //左箭头
    $("#arrow_left_2").on("click",function () {
        suvIndex++;
        if (suvIndex>2){
            suvIndex = 0;
        }
        $("#wrap_SUV").animate({left:-390*suvIndex})
        $("#dot_module_center span").removeAttr("class");
        $($("#dot_module_center span")[suvIndex]).addClass("current-module-list-footer");
    });
    // 右箭头
    $("#arrow_right_2").on("click",function () {
        console.log(1);
        suvIndex--;
        if (suvIndex< 0){
            suvIndex =2;
        }
        $("#wrap_SUV").animate({left:-390*suvIndex});
        $("#dot_module_center span").removeAttr("class");
        $($("#dot_module_center span")[suvIndex]).addClass("current-module-list-footer");
    });

    // 圆点
    $("#dot_module_center span").on("mouseover",function () {
        $("#dot_module_center span").removeAttr("class");
        $(this).addClass("current-module-list-footer");
        suvIndex= $(this).index();
        $("#wrap_SUV").animate({left:-390*suvIndex})
    });
    var  timersuv = setInterval(timerSUV,2000);
    $("#timersuv").on("mouseover",function () {
        clearInterval(timersuv);
    });
    $("#timersuv").on("mouseout",function () {

        timersuv = setInterval(timerSUV,2000);
    });



    // var timerSUVIndex =0;
    function timerSUV() {

        if (suvIndex>2){
            suvIndex = 0;
        }
        $("#wrap_SUV").animate({left:-390*suvIndex});
        $("#dot_module_center span").removeAttr("class");
        $($("#dot_module_center span")[suvIndex]).addClass("current-module-list-footer");
        suvIndex++;

    }


});