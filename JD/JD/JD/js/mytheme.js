//
// $(function(){
// 	$("#ul li").each(function(i,v){
// 		$(this).css("background-position-x",  -i*20+"px");
// 		// $(this).css("background-position",  -i*20+'px'+" "+0);
// 	})
//
// 	$("#ul li").on("click",function(i){
// 		$("#ul li").each(function(i,v){
// 			$(this).css("background-position-y",  0);
// 		})
//
// 		$(this).css("background-position-y",  -15+"px");
//
// 	})
//
//
//
// })

// theme
$(function(){
    var arrColor = ["#4f71b9","#b5d521","#faab1a","#08bece","#e33068","#c04fda"];
    $("#ul li").each(function(i,v){
        $(this).attr("data-myChecked","1");
        $(this).css("background-position-x",  -i*20+"px");
        // $(this).css("background-position",  -i*20+'px'+" "+0);
    });


    $("#ul li").on("click",function(){

        var n = parseInt($(this).attr("data-myChecked"));
        console.log(n);
        $("#ul li").attr("data-myChecked","1");
        if( !n){


            $("#main").css("background-color","#fff");
            $(this).css("background-position-y",  0);
            return;
        }

        $("#ul li").each(function(i,v){
            $(this).css("background-position-y",  0);
            $("#main").css("background-color","#fff");
        });

        $(this).css("background-position-y",  -15+"px");
        $("#main").css("background-color",arrColor[ $(this).index()]);
        $(this).attr("data-myChecked",0);

    })

});