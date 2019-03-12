window.onload=function () {
  var soliderPanel=document.getElementById("soliderPanel");

  var bottomPanel=document.getElementById("bottomPanel");
    var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
    if(scrollTop>=900){
        soliderPanel.style.display="block";
        bottomPanel.style.display="block";

    } else{
        soliderPanel.style.display="none";
        bottomPanel.style.display="none";
    }

  window.onscroll=function () {
      scrollTop=document.body.scrollTop||document.documentElement.scrollTop;


      if(scrollTop>=900){
          soliderPanel.style.display="block";
          bottomPanel.style.display="block";

      } else{
          soliderPanel.style.display="none";
          bottomPanel.style.display="none";
      }

  }

};