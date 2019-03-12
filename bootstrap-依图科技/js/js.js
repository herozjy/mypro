
$(function () {
    $("#progress").css("width","100%");
});


$(function () {
    jQuery.fx.interval =20;
    $(".b3").animate({opacity:1},500);
    $(".b1").delay(1000).animate({top:"17%",opacity:"1"},500);
    $(".b2").delay(2000).animate({left:"0%",opacity:"1"},500);
    $(".b5").delay(2000).animate({right:"0%", opacity:"1"},500);
    $(".b4").delay(3000).animate({top:"70%", opacity:"1"},500);


    var timer = setInterval(autoplay,5000);

    $("#banner_ul").on("mouseover",function () {
        clearInterval(timer);
    }).on("mouseleave",function () {
        timer = setInterval(autoplay,5000);
    });

    $("#banner_ol").on("mouseover",function () {
        clearInterval(timer);
    });


    // 指示器
    var lastIndex = 0;
    var timerIndex= 0;
   $("#banner_ol li").each(function () {

       $(this).on("mouseover",function () {

                // jQuery.fx.off = true;
            if ( $(this).index()==lastIndex){
                return;
            }

           $("#banner_ol li")[lastIndex].className ="";
           this.className ="oc";

           $(".b3").css({opacity:0});
           $(".b1").css({top:"17%",opacity:"0"});
           $(".b2").css({left:"-55%",opacity:"0"});
           $(".b5").css({right:"-45%",opacity:"0"});
           $(".b4").css({top:"80%",opacity:"0"});


           $("#banner_ul li")[lastIndex].style.display ="none";
           timerIndex = lastIndex =  $(this).index();
           $("#banner_ul li")[lastIndex].style.display ="block";
           $(".b3").animate({opacity:1},500);
           $(".b1").delay(1000).animate({top:"17%",opacity:"1"},500);
           $(".b2").delay(2000).animate({left:"0%",opacity:"1"},500);
           $(".b5").delay(2000).animate({right:"0%", opacity:"1"},500);
           $(".b4").delay(3000).animate({top:"70%", opacity:"1"},500);

       })

   });


    function autoplay() {
        $(".b3").css({opacity:0});
        $(".b1").css({top:"17%",opacity:"0"});
        $(".b2").css({left:"-55%",opacity:"0"});
        $(".b5").css({right:"-45%",opacity:"0"});
        $(".b4").css({top:"80%",opacity:"0"});


        $("#banner_ul li")[timerIndex].style.display ="none";
        $("#banner_ol li")[timerIndex].className ="";

        if (timerIndex >=$("#banner_ul li").length-1){
            timerIndex = -1;
        }
        lastIndex=timerIndex = timerIndex+1;
        $("#banner_ul li")[timerIndex].style.display ="block";
        $("#banner_ol li")[timerIndex].className ="oc";
        $(".b3").stop().animate({opacity:1},500);
        $(".b1").stop().delay(1000).animate({top:"17%",opacity:"1"},500);
        $(".b2").stop().delay(2000).animate({left:"0%",opacity:"1"},500);
        $(".b5").stop().delay(2000).animate({right:"0%", opacity:"1"},500);
        $(".b4").stop().delay(3000).animate({top:"70%", opacity:"1"},500);



    }

});


